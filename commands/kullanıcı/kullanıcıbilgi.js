const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "kullanıcıbilgi",
    description: "Kullanıcı hakkında bilgi gösterir.",
    execute(message) {
        const user = message.mentions.members.first() || message.member;

        const embed = new EmbedBuilder()
            .setTitle(`${user.user.username} Kullanıcı Bilgisi`)
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: "🆔 ID", value: user.id, inline: false },
                { name: "📅 Sunucuya Katılım", value: `<t:${Math.floor(user.joinedTimestamp / 1000)}:R>`, inline: true },
                { name: "📆 Discord'a Katılım", value: `<t:${Math.floor(user.user.createdTimestamp / 1000)}:R>`, inline: true }
            )
            .setColor("Random")
            .setFooter({ text: `İsteyen: ${message.author.username}`, iconURL: message.author.displayAvatarURL() });

        message.channel.send({ embeds: [embed] });
    },
};
