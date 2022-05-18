module.exports.run = async (client, message, args) => {

    message.reply("Ik ben boos!")

    return message.reply({ files: ["./fotos/sandman.jpg"] });

}

module.exports.help = {
    name: "benjeboos",
    category: "general",
    description: "Hij laat je zien hoe boos hij is"
}