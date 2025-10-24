module.exports = {
    name: "unmute",
    description: "Bir kullanıcının susturmasını kaldırır.",
    async execute(message, args) {
        if (!message.member.permissions.has("ModerateMembers"))
            return message.reply("🚫 Bu komutu kullanmak için yetkin yok!");

        const member = message.mentions.members.first();
        if (!member) return message.reply("Susturmasını kaldırmak için bir kullanıcı etiketle!");

        try {
            await member.timeout(null);
            message.channel.send(`🔊 ${member.user.tag} artık konuşabilir.`);
        } catch (err) {
            console.error(err);
            message.reply("❌ Kullanıcı susturulamadı!");
        }
    },
};
