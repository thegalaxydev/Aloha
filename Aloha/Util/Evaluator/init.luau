local Evaluator = {}
local fs = require("@lune/fs")
local process = require("@lune/process")
local task = require("@lune/task")
local API = require("../../Lib/API")
local Misc = require("../Misc")
function Evaluator.Evaluate(code: string): string
	local ret = ""
	local finished = false
	local success = false
	local currentThread = coroutine.running()

	code = ([[ 
	require = function(req) error("require is disabled.") end
	getfenv = function() error("getfenv is disabled.") end
	setfenv = function() error("setfenv is disabled.") end

	%s
	]]):format(code)

	task.spawn(function()
		local temp_file, tag = Misc.CreateTempFile(code)
		process.spawn("stylua", {temp_file.Path}, {cwd = "."})
		ret = process.spawn("lune", {"run", temp_file.Path}, {
			cwd = ".",
		})
		success = #ret.stderr == 0
		ret = success and ret.stdout or ret.stderr:gsub('%[string ".-/.-"%]:(%d+):', function(number)
			n = tonumber(number)
			local new_number = n-5
			return '[eval]:' .. new_number .. ':'
		end)
		temp_file:Delete()

		finished = true
		coroutine.resume(currentThread)
	end)


	task.delay(1, function()
		local pid_process = process.spawn([[wmic process where "name='lune.exe'" get processid]], {}, { shell = true })
		for pid in pid_process.stdout:gmatch("%d+") do
			if pid == API.PROCESS_ID then
				continue
			end

			process.spawn("taskkill", {"/F", "/T", "/PID", pid}, { shell = true })
		end
	end)

	if not finished then
		task.delay(2, function()
			coroutine.resume(currentThread)
		end)
		coroutine.yield(currentThread)
	end

	return ret, success
end

return Evaluator