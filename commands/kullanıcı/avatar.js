module.exports = {
    name: "avatar",
    description: "Etiketlenen kullanıcının avatarını gösterir.",
    execute(message) {
        const user = message.mentions.users.first() || message.author;
        const avatarURL = user.displayAvatarURL({ size: 1024, dynamic: true });
        message.channel.send(`🖼️ **${user.username}** adlı kullanıcının avatarı:\n${avatarURL}`);
    },
};
