module.exports = {
    name: "slot",
    description: "Basit slot makinesi. `!slot`",
    execute(message) {
        const symbols = ["🍒","🍋","🔔","🍀","⭐","7️⃣"];
        const a = symbols[Math.floor(Math.random() * symbols.length)];
        const b = symbols[Math.floor(Math.random() * symbols.length)];
        const c = symbols[Math.floor(Math.random() * symbols.length)];

        let reply = `🎰 | ${a} ${b} ${c}\n`;
        if (a === b && b === c) reply += "🏆 **JACKPOT!** Tebrikler!";
        else if (a === b || b === c || a === c) reply += "✨ **Biraz şanslısın!**";
        else reply += "😢 Maalesef, şansın yaver gitmedi.";

        message.channel.send(reply);
    },
};
