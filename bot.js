const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("514729634030551051")
setInterval(function() {
channel.send(`spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam `);
}, 25)
})
 
 client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "isay") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
}); 
client.login('NTE0NzMwMTA3MjIzNTM5NzEy.DtaziA.9Xe7Juk7RhxHg84xzE8OhK-Hf6c');
