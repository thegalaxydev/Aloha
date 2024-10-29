"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[691],{72791:e=>{e.exports=JSON.parse('{"functions":[{"name":"GetChannel","desc":"Gets a channel in the guild.","params":[{"name":"id","desc":"The channel ID","lua_type":"string"}],"returns":[{"desc":"The channel object","lua_type":"Channel"}],"function_type":"method","source":{"line":604,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"GetMember","desc":"Gets a member in the guild.","params":[{"name":"userId","desc":"The user ID","lua_type":"string"}],"returns":[{"desc":"The member object if found","lua_type":"(Member? | boolean, {any}?)"}],"function_type":"method","source":{"line":614,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"BulkBan","desc":"Bulk bans users from the guild.","params":[{"name":"userIds","desc":"Array of user IDs to ban","lua_type":"{string}"},{"name":"delete_message_seconds","desc":"Optional number of seconds of messages to delete","lua_type":"number?"}],"returns":[{"desc":"Whether the users were banned","lua_type":"boolean"}],"function_type":"method","source":{"line":632,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"CreateRole","desc":"Creates a new role in the guild.","params":[{"name":"name","desc":"The role name","lua_type":"string"},{"name":"permissions","desc":"The role permissions","lua_type":"string"},{"name":"color","desc":"The role color","lua_type":"number"},{"name":"hoist","desc":"Whether the role should be displayed separately","lua_type":"boolean"},{"name":"icon","desc":"Optional role icon","lua_type":"string?"},{"name":"unicode_emoji","desc":"Optional role unicode emoji","lua_type":"string?"},{"name":"mentionable","desc":"Whether the role should be mentionable","lua_type":"boolean"}],"returns":[{"desc":"Whether the role was created and the response data","lua_type":"(boolean, {any}?)"}],"function_type":"method","source":{"line":657,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"GetRoles","desc":"Gets all roles in the guild.","params":[],"returns":[{"desc":"Array of roles if successful","lua_type":"({DiscordTypes.RoleData} | boolean, {any}?)"}],"function_type":"method","source":{"line":682,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"GetRole","desc":"Gets a role in the guild.","params":[{"name":"id","desc":"The role ID","lua_type":"string"}],"returns":[{"desc":"The role data if found","lua_type":"(DiscordTypes.RoleData? | boolean, {any}?)"}],"function_type":"method","source":{"line":699,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"DeleteRole","desc":"Deletes a role from the guild.","params":[{"name":"id","desc":"The role ID to delete","lua_type":"string"}],"returns":[{"desc":"Success status and response data","lua_type":"(boolean, {any}?)"}],"function_type":"method","source":{"line":715,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"ModifyRole","desc":"Modifies a role in the guild.","params":[{"name":"id","desc":"The role ID to modify","lua_type":"string"},{"name":"data","desc":"The data to modify","lua_type":"{name: string?, permissions: string?, color: number?, hoist: boolean?, icon: string?, unicode_emoji: string?, mentionable: boolean?}"}],"returns":[{"desc":"Success status and response data","lua_type":"(boolean, {any}?)"}],"function_type":"method","source":{"line":733,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"MoveRole","desc":"Changes a role\'s position in the guild\'s role hierarchy.","params":[{"name":"id","desc":"The role ID to move","lua_type":"string"},{"name":"position","desc":"The new position","lua_type":"number"}],"returns":[{"desc":"Success status and response data","lua_type":"(boolean, {any}?)"}],"function_type":"method","source":{"line":752,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"GetVanityURL","desc":"Gets the guild\'s vanity URL if it has one.","params":[],"returns":[{"desc":"The vanity URL data if successful","lua_type":"({code: string, uses: number}? | boolean, {any}?)"}],"function_type":"method","source":{"line":770,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"CreateChannel","desc":"Creates a new channel in the guild.","params":[{"name":"data","desc":"The channel creation data","lua_type":"DiscordTypes.CreateGuildChannelData"}],"returns":[{"desc":"The created channel if successful","lua_type":"(Channel? | boolean, {any}?)"}],"function_type":"method","source":{"line":787,"path":"../Aloha/Aloha/Classes/Objects.luau"}}],"properties":[],"types":[],"name":"Guild","desc":"Guild object wrapper.","source":{"line":31,"path":"../Aloha/Aloha/Classes/Objects.luau"}}')}}]);