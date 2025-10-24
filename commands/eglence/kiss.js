module.exports = {
    name: "kiss",
    description: "Öpücük gönder. `!kiss @kullanıcı`",
    execute(message) {
        const member = message.mentions.members.first();
        if (!member) return message.reply("Kime öpücük atacağını etiketle!");
        message.channel.send(`${message.author} 💋 **${member.user.username}**'e tatlı bir öpücük gönderdi!`);
    },
};
