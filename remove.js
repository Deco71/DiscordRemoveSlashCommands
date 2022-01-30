const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [];

const rest = new REST({ version: '9' }).setToken('YourBotTokenHere');

(async () => {
    try {
        await rest.put(
            //For a general removal you can use also
            //Routes.applicationCommands('ClientId'), but it can take up to one hour to update the commands
            Routes.applicationGuildCommands('YourClientIdHere', 'YourGuildIdHere'),
            { body: commands },
        );

        console.log('Successfully removed application commands.');
    } catch (error) {
        console.error(error);
    }
})();
