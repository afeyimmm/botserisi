module.exports = {
    name: "hug",
    description: "Birini sar (eğlence). `!hug @kullanıcı`",
    execute(message) {
        const member = message.mentions.members.first();
        if (!member) return message.reply("Kime sarılacağını etiketle!");
        message.channel.send(`${message.author} 🤗 **${member.user.username}**'e kocaman bir sarılma gönderdi!`);
    },
};
