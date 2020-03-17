//Banear a un miembro mediante una mencion:

let user = message.mentions.members.first() 
let razon = args.slice(1).join(" ") 
let perms = message.member.hasPermission("BAN_MEMBERS")

if(!perms) return message.channel.send('No tienes permisos.')
if(!user) return message.channel.send('No has mencionado a nadie.') 
if(!razon) return message.channel.send('No has escrito ninguna razón.')

message.guild.member(user).ban(razon).catch(err => {
console.error(err)

}) 

message.channel.send(`Se ha baneado correctamente a ${user}, razón: ${razon})
