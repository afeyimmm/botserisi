module.exports = {
    name: "remindme",
    description: "Basit hatırlatma. Örnek: `!remindme 10 mesajı gönder` (10 saniye sonra hatırlatır)",
    execute(message, args) {
        const time = parseInt(args[0]);
        const text = args.slice(1).join(" ");

        if (isNaN(time) || time <= 0) return message.reply("Lütfen saniye cinsinden geçerli bir süre gir (örn. `10`).");
        if (!text) return message.reply("Hatırlatılacak metni yaz.");

        // Güvenlik: maksimum 86400s = 24 saat
        if (time > 86400) return message.reply("Maksimum süre 24 saat (86400 saniye).");

        message.reply(`⏱️ Tamam! ${time} saniye sonra seni DM ile hatırlatacağım.`).then(() => {
            setTimeout(async () => {
                try {
                    await message.author.send(`🔔 Hatırlatma: ${text}`);
                } catch (err) {
                    // DM açıksa yoksa kanalda bildir
                    message.channel.send(`${message.author}, hatırlatma: ${text}`);
                }
            }, time * 1000);
        });
    },
};
