require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [IntentsBitField.Flags.Guilds,
              IntentsBitField.Flags.GuildMembers,
              IntentsBitField.Flags.GuildMessages,
              IntentsBitField.Flags.MessageContent],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is in office`);
});

client.on('messageCreate', (message) => {

        switch(message.content)
        {
            case "Hello":
                message.reply('Hello!');
                break;
            case "Bye":
                message.reply('Goodbye!');
                break;
        }   // Case Sensitive atm till I learn a workaround :sadge:

        if (message.author.bot)
        {
            return;                 
        }
});

client.login(process.env.TOKEN);  //"npm install dotenv" execute this code. Make sure to stuff the Token inside a .env file.
                                  //Don't forget to use 'nodemon' in terminal to start up bot.