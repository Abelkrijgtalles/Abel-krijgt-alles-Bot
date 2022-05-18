const botConfig = require("../botConfig.json");

module.exports.run = async (client, message, args) => {

    try {

        var prefix = botConfig.prefix;

        var response = "**`Bot commands\n"
        var general = "\nAlgemeen:\n"

        client.commands.forEach(command => {
            
            switch (command.help.category) {
                case "general":
                    general += `    ${prefix}${command.help.name} - ${command.help.description}\n`
                    break;
                default:
                    break;
            }

        })

        response += general + "`**"

        message.author.send(response).then(() => {
            return message.reply("De commands zijn verstuurd naar je DM's!")
        }).catch(() => {
            message.reply("Ik kan je de commands niet versturen via je DM's dus zeg ik het hier.")
            return message.reply(response)
        })

    } catch (error) {
        console.log(error);
        message.reply("Er is iets mis gegaan, probeer het later opnieuw.");
    }

}

module.exports.help = {
    name: "helptekst",
    category: "help",
    description: "Geeft de tekst versie van het help menu"
}