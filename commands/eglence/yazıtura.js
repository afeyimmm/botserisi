module.exports = {
    name: "yazıtura",
    description: "Yazı tura atar!",
    execute(message) {
        const sonuc = Math.random() < 0.5 ? "🪙 Yazı!" : "🪙 Tura!";
        message.reply(`🎲 ${sonuc}`);
    },
};
