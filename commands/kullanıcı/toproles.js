const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "toproles",
    description: "Sunucudaki rolleri üye sayısına göre listeler (ilk 10).",
    execute(message) {
        const roles = message.guild.roles.cache
            .filter(r => r.id !== message.guild.id) // @everyone hariç
            .sort((a,b) => b.members.size - a.members.size)
            .first(10);

        const lines = roles.map(r => `**${r.name}** — ${r.members.size} üye`);
        const embed = new EmbedBuilder()
            .setTitle("📊 Sunucunun En Popüler Rolleri")
            .setDescription(lines.join("\n") || "Rol bulunamadı")
            .setFooter({ text: `İsteyen: ${message.author.tag}`, iconURL: message.author.displayAvatarURL() });

        message.channel.send({ embeds: [embed] });
    },
};
