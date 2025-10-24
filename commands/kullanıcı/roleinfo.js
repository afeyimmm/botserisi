const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "roleinfo",
    description: "Belirtilen rol hakkında bilgi verir. Örnek: `!roleinfo @rol`",
    execute(message) {
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(message.content.split(" ")[1]);
        if (!role) return message.reply("Bilgi almak istediğin rolü etiketle veya ID'sini yaz!");

        const embed = new EmbedBuilder()
            .setTitle(`Rol: ${role.name}`)
            .addFields(
                { name: "🆔 ID", value: role.id, inline: true },
                { name: "📛 Renk Hex", value: role.hexColor, inline: true },
                { name: "👥 Üye Sayısı", value: `${role.members.size}`, inline: true },
                { name: "🔼 Yüksek Sıra", value: `${role.position}`, inline: true },
                { name: "👑 Yönetici Rolü (hoş?)", value: role.managed ? "Evet (bot/entegrasyon rolü)" : "Hayır", inline: true }
            )
            .setColor(role.color || "Random")
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};
