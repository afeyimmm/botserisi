module.exports = {
    name: "mute",
    description: "Bir kullanıcıyı belirli süreliğine susturur.",
    async execute(message, args) {
        if (!message.member.permissions.has("ModerateMembers"))
            return message.reply("🚫 Bu komutu kullanmak için yetkin yok!");

        const member = message.mentions.members.first();
        if (!member) return message.reply("Susturmak için bir kullanıcı etiketle!");

        const duration = parseInt(args[1]) * 1000 || 60000; // 60 saniye varsayılan
        try {
            await member.timeout(duration, "Mute komutu ile susturuldu");
            message.channel.send(`🔇 ${member.user.tag} susturuldu (${duration / 1000} saniye).`);
        } catch (err) {
            console.error(err);
            message.reply("❌ Kullanıcı susturulamadı!");
        }
    },
};
