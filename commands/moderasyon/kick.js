module.exports = {
    name: "kick",
    description: "Bir kullanıcıyı sunucudan atar.",
    async execute(message, args) {
        if (!message.member.permissions.has("KickMembers"))
            return message.reply("🚫 Bu komutu kullanmak için yetkin yok!");

        const member = message.mentions.members.first();
        if (!member) return message.reply("Atmak için bir kullanıcı etiketle!");

        const reason = args.slice(1).join(" ") || "Sebep belirtilmedi.";

        try {
            await member.kick(reason);
            message.channel.send(`✅ ${member.user.tag} atıldı. Sebep: ${reason}`);
        } catch (err) {
            console.error(err);
            message.reply("❌ Kullanıcı atılamadı!");
        }
    },
};
