** This pretty much serves as a journal for the code and some things I noted while watching a tutorial **

Before the bot can work, do this in console:

        -npm init -y (creates a package.json file)
        -npn i discord.js (Downloads the discord.js package (Which we will need ofc))

IMPORTANT: Something to note, in the json package, don't forget to have the "main :" be the folder where the "main" code is gonna be.
Example: [ In the package.json file ]

    "main": "src/main.js"

* This is your working space *

require('dotenv').config();                                // This should give you access to the code. Must use .env file (aka dotenv)
const { Client, IntentsBitField } = require('discord.js'); // Importing a package; the discord.js package. I hate magic words but this is called "destructuring"
                                                           // Something else to note, "Client is a class". 'const' declares a variable

const client = new Client({
    intents: [IntentsBitField.Flags.Guilds,
              IntentsBitField.Flags.GuildMembers,
              IntentsBitField.Flags.GuildMessages,
              IntentsBitField.Flags.MessageContent],        // Intents will allow you to let the bot have certain permissions. Guilds are a "server".
});


client.on('ready', (c) => {
    console.log(`${c.user.username} is in office`);                  //tag is the discord tag, username is just the name, id is the numbers. Dont't forget $ sign, and the `.
});                                                                  //also console.log displays the stuff in the terminal.

        if (message.author.bot)
        {
            return;                 //This does not allow the bot to reply itself.
        }

client.login(process.env.TOKEN); //"npm install dotenv" execute this code. Make sure to stuff the Token inside a .env file.
                                 //Don't forget to use 'nodemon' in terminal to start up bot.

                                