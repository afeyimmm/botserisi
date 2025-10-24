const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "help",
    description: "Tüm komutları kategorilere ayrılmış şekilde gösterir. `!help [komut]`",
    execute(message, args) {
        const commands = message.client.commands; // Map
        const prefix = "!";

        // Eğer belirli komut hakkında bilgi istenirse
        if (args[0]) {
            const cmdName = args[0].toLowerCase();
            const cmd = commands.get(cmdName);
            if (!cmd) return message.reply("Böyle bir komut bulunamadı.");
            const embed = new EmbedBuilder()
                .setTitle(`Komut: ${prefix}${cmd.name}`)
                .addFields(
                    { name: "Açıklama", value: cmd.description || "Açıklama yok." }
                )
                .setFooter({ text: `İsteyen: ${message.author.tag}` })
                .setTimestamp();
            return message.channel.send({ embeds: [embed] });
        }

        // Kategorilere ayır (folder bilgisini saklamıyoruz, o yüzden isimlerden tahmin yapacağız)
        const categories = {
            "Moderasyon": [],
            "Eğlence": [],
            "Kullanıcı": [],
            "Genel": []
        };

        for (const [, cmd] of commands) {
            const name = cmd.name;
            // basit eşleme: isimlere göre kategoriye koy
            if (["ban","kick","clear","mute","unmute"].includes(name)) categories.Moderasyon.push(name);
            else if (["yazıtura","espri","api-espri","slot","roll","hug","kiss","emojify"].includes(name)) categories.Eğlence.push(name);
            else if (["avatar","kullanıcıbilgi","kullanıcıinfo","serverinfo","roleinfo","toproles","ping","say","remindme"].includes(name)) categories.Kullanıcı.push(name);
            else categories.Genel.push(name);
        }

        const embed = new EmbedBuilder()
            .setTitle("📚 Yardım Menüsü")
            .setDescription(`Komutlar kategorilere ayrıldı. Detay için \`${prefix}help <komut>\` yazabilirsin.`)
            .addFields(
                { name: "🛡️ Moderasyon", value: categories.Moderasyon.length ? categories.Moderasyon.map(c => `\`${prefix}${c}\``).join(" • ") : "Yok", inline: false },
                { name: "🎉 Eğlence", value: categories.Eğlence.length ? categories.Eğlence.map(c => `\`${prefix}${c}\``).join(" • ") : "Yok", inline: false },
                { name: "👤 Kullanıcı", value: categories.Kullanıcı.length ? categories.Kullanıcı.map(c => `\`${prefix}${c}\``).join(" • ") : "Yok", inline: false },
                { name: "🔎 Genel", value: categories.Genel.length ? categories.Genel.map(c => `\`${prefix}${c}\``).join(" • ") : "Yok", inline: false },
                { name: "📌 Not", value: "Bazı komutlar için sunucuda belirli izinler gereklidir. Ör: `Ban, Kick, Clear, Mute`." }
            )
            .setFooter({ text: `İsteyen: ${message.author.tag}`, iconURL: message.author.displayAvatarURL() })
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};
