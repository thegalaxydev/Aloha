"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1928],{33209:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new message object.","params":[{"name":"data","desc":"The message data","lua_type":"DiscordTypes.MessageData"}],"returns":[{"desc":"The message object","lua_type":"Message"}],"function_type":"static","source":{"line":301,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"Delete","desc":"Deletes the message.","params":[],"returns":[{"desc":"Whether the message was deleted","lua_type":"boolean"}],"function_type":"method","source":{"line":338,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"Reply","desc":"Replies to the message.","params":[{"name":"content","desc":"The message content","lua_type":"string"},{"name":"embeds","desc":"Optional embeds to send","lua_type":"{DiscordTypes.EmbedData}?"}],"returns":[{"desc":"Whether the message was sent","lua_type":"boolean"}],"function_type":"method","source":{"line":354,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"AddReaction","desc":"Adds a reaction to the message.","params":[{"name":"emoji","desc":"The emoji to add","lua_type":"string"}],"returns":[{"desc":"Whether the reaction was added","lua_type":"boolean"}],"function_type":"method","source":{"line":369,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"RemoveReaction","desc":"Removes a reaction from the message.","params":[{"name":"emoji","desc":"The emoji to remove","lua_type":"string"},{"name":"userId","desc":"Optional user ID to remove reaction from","lua_type":"string?"}],"returns":[{"desc":"Whether the reaction was removed","lua_type":"boolean"}],"function_type":"method","source":{"line":386,"path":"../Aloha/Aloha/Classes/Objects.luau"}},{"name":"RemoveAllReactions","desc":"Removes all reactions from the message.","params":[],"returns":[{"desc":"Whether all reactions were removed","lua_type":"boolean"}],"function_type":"method","source":{"line":400,"path":"../Aloha/Aloha/Classes/Objects.luau"}}],"properties":[],"types":[{"name":"Message","desc":"A message object.","lua_type":"{channel: Channel, author: User, mentions: {User}, id: DiscordTypes.snowflake, channel_id: DiscordTypes.snowflake, content: string, timestamp: string, edited_timestamp: string?, tts: boolean, mention_everyone: boolean, mention_roles: {number}, mention_channels: {DiscordTypes.ChannelMentionData}, attachments: {DiscordTypes.AttachmentData}, embeds: {DiscordTypes.EmbedData}, reactions: {DiscordTypes.ReactionData}?, nonce: (number | string)?, pinned: boolean, webhook_id: DiscordTypes.snowflake?, type: number, activity: DiscordTypes.ActivityData?, application: DiscordTypes.ApplicationData?, application_id: DiscordTypes.snowflake?, flags: number?, message_reference: DiscordTypes.MessageReferenceData?, message_snapshots: {DiscordTypes.MessageSnapshotData}?, referenced_message: Message?, interaction_metadata: DiscordTypes.InteractionMetadataData?, interaction: DiscordTypes.InteractionData?, thread: DiscordTypes.ChannelData?, components: {DiscordTypes.ComponentData}?, sticker_items: {DiscordTypes.StickerItemData}?, stickers: {DiscordTypes.StickerData}?, position: number?, role_subscription_data: DiscordTypes.RoleSubscriptionData?, resolved: DiscordTypes.ResolvedData?, poll: DiscordTypes.PollData?, call: DiscordTypes.CallData?}","source":{"line":113,"path":"../Aloha/Aloha/Classes/Objects.luau"}}],"name":"Message","desc":"Message object wrapper.","source":{"line":10,"path":"../Aloha/Aloha/Classes/Objects.luau"}}')}}]);