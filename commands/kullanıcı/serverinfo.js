const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "serverinfo",
    description: "Sunucu hakkında detaylı bilgi gösterir.",
    execute(message) {
        const guild = message.guild;
        const channelCount = guild.channels.cache.size;
        const memberCount = guild.memberCount;
        const owner = guild.fetchOwner ? guild.fetchOwner().then(o => o.user.tag).catch(()=> "Bilinmiyor") : guild.ownerId;

        const embed = new EmbedBuilder()
            .setTitle(`${guild.name} — Sunucu Bilgisi`)
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .addFields(
                { name: "🆔 Sunucu ID", value: `${guild.id}`, inline: true },
                { name: "👑 Kurucu", value: `${guild.ownerId ? `<@${guild.ownerId}>` : "Bilinmiyor"}`, inline: true },
                { name: "👥 Üye Sayısı", value: `${memberCount}`, inline: true },
                { name: "📁 Kanal Sayısı", value: `${channelCount}`, inline: true },
                { name: "🗂️ Rol Sayısı", value: `${guild.roles.cache.size}`, inline: true },
                { name: "🌍 Bölge / Boost Seviyesi", value: `Boost: ${guild.premiumSubscriptionCount || 0}`, inline: true }
            )
            .setFooter({ text: `İsteyen: ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};
