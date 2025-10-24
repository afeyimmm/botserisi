module.exports = {
    name: "roll",
    description: "Zar atar. Örnek: `!roll`, `!roll 6`, `!roll 2d8`",
    execute(message, args) {
        try {
            if (!args[0]) {
                const r = Math.floor(Math.random() * 6) + 1;
                return message.reply(`🎲 Tek zar: **${r}**`);
            }

            const arg = args[0].toLowerCase();
            // NdM formatı (örn 2d6)
            if (arg.includes("d")) {
                const [nStr, mStr] = arg.split("d");
                const n = parseInt(nStr) || 1;
                const m = parseInt(mStr) || 6;
                if (n < 1 || n > 50 || m < 2 || m > 1000) return message.reply("Geçersiz parametre. Maks 50 zar, her zar en fazla 1000 yüzlü olabilir.");
                const rolls = [];
                for (let i = 0; i < n; i++) rolls.push(Math.floor(Math.random() * m) + 1);
                const total = rolls.reduce((a,b) => a+b, 0);
                return message.reply(`🎲 Roll (${arg}): ${rolls.join(", ")} — **Toplam: ${total}**`);
            }

            // tek sayı: 0..N-1 -> 1..N
            const faces = parseInt(arg);
            if (isNaN(faces) || faces < 2 || faces > 1000) return message.reply("Lütfen geçerli bir sayı gir (2-1000).");
            const r = Math.floor(Math.random() * faces) + 1;
            message.reply(`🎲 1d${faces}: **${r}**`);
        } catch (err) {
            console.error(err);
            message.reply("❌ Zar atılırken hata oluştu.");
        }
    },
};