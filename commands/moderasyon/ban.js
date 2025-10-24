module.exports = {
    name: "ban",
    description: "Bir kullanıcıyı sunucudan yasaklar.",
    async execute(message, args) {
        if (!message.member.permissions.has("BanMembers"))
            return message.reply("🚫 Bu komutu kullanmak için yetkin yok!");

        const member = message.mentions.members.first();
        if (!member) return message.reply("Banlamak için bir kullanıcı etiketle!");

        const reason = args.slice(1).join(" ") || "Sebep belirtilmedi.";

        try {
            await member.ban({ reason });
            message.channel.send(`✅ ${member.user.tag} banlandı. Sebep: ${reason}`);
        } catch (err) {
            console.error(err);
            message.reply("❌ Kullanıcı banlanamadı!");
        }
    },
};
