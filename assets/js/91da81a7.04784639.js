"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4888],{96419:e=>{e.exports=JSON.parse('{"functions":[{"name":"processBlocks","desc":"Processes message from byte start to byte finish using digest. Assumes (finish - start) % 64 == 0","params":[{"name":"digest","desc":"The digest array to update","lua_type":"{number}"},{"name":"message","desc":"The message to process","lua_type":"string"},{"name":"start","desc":"Starting byte position","lua_type":"number"},{"name":"finish","desc":"Ending byte position","lua_type":"number"}],"returns":[],"function_type":"static","private":true,"source":{"line":23,"path":"../Aloha/Aloha/Util/Sha1.luau"}},{"name":"Sha1","desc":"Computes the SHA-1 hash for the given message and returns it as a buffer","params":[{"name":"message","desc":"The payload to compute the SHA-1 hash of","lua_type":"string"}],"returns":[{"desc":"The computed SHA-1 hash as a buffer","lua_type":"buffer"}],"function_type":"static","source":{"line":96,"path":"../Aloha/Aloha/Util/Sha1.luau"}}],"properties":[],"types":[],"name":"Sha1","desc":"SHA-1 hashing implementation. Credit to Dekkonot - https://github.com/Dekkonot/lua-hashing","source":{"line":5,"path":"../Aloha/Aloha/Util/Sha1.luau"}}')}}]);