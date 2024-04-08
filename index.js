const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config()

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot) {
        return;
    }
    if (msg.content === '/joke') {
        msg.reply('I run!!!!!! No jokes yet tho ):')
    } 

})

client.login(process.env.TOKEN);