module.exports = {
    name: "say",
    description: "Botun adını kullanarak mesaj gönderir (yetkili). Örnek: `!say Merhaba!`",
    execute(message, args) {
        if (!message.member.permissions.has("ManageMessages")) return message.reply("🚫 Bu komutu kullanmak için yetkin yok!");
        const text = args.join(" ");
        if (!text) return message.reply("Botun göndermesini istediğin mesajı yaz.");
        // Orijinal komutu sil (isteğe bağlı)
        if (message.deletable) message.delete().catch(() => {});
        message.channel.send(text);
    },
};
