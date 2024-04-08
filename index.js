const { Client, IntentsBitField } = require('discord.js');
const { default: axios } = require('axios');
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
        axios.get("https://icanhazdadjoke.com",{
            headers:{
                "Accept":"text/plain"
            }
        }).then(data => msg.reply(data.data))
        .catch(err => console.error(err))
    }

})

client.login(process.env.TOKEN);