const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("514729634030551051")
setInterval(function() {
channel.send(`spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam `);
}, 25)
})
 
 
client.login('NTE0NzMwMTA3MjIzNTM5NzEy.DtaziA.9Xe7Juk7RhxHg84xzE8OhK-Hf6c');
