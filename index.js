const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready', () => {
    console.log(`Connecté sur ${client.user.tag}!`);
});

client.on('channelCreate', async channel => {
    if (channel.type === "group") {
        channel.send(config.msgSend).then(c => {
            channel.delete().catch(err => err);
        }).catch(err => err);
    }
});

client.login(config.token);