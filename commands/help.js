const botConfig = require("../botConfig.json");
const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    try {

        var prefix = botConfig.prefix;

        var generaltext = "";
        var helptext = "";

        var embed = new discord.MessageEmbed()
        .setTitle("Bot commands")
        .setColor("GREEN")
        .setImage(client.user.displayAvatarURL())
        .setTimestamp()
        .setFooter(client.user.username);

        client.commands.forEach(command => {
            
            switch (command.help.category) {
                case "general":
                    generaltext += `    ${prefix}${command.help.name} - ${command.help.description}\n`
                    break;
                case "help":
                    helptext += `    ${prefix}${command.help.name} - ${command.help.description}\n`
                    break    
                default:
                    break;
            }

        })

        embed.addField("Algemeen:", generaltext);
        embed.addField("Help:", helptext);

        message.author.send({ embeds: [embed] }).then(() => {
            return message.reply("De commands zijn verstuurd naar je DM's!")
        }).catch(() => {
            message.reply("Ik kan je de commands niet versturen via je DM's dus zeg ik het hier.")
            return message.reply({ embeds: [embed] })
        })

    } catch (error) {
        console.log(error);
        message.reply("Er is iets mis gegaan, probeer het later opnieuw.");
    }

}

module.exports.help = {
    name: "help",
    category: "help",
    description: "Geeft het help menu."
}