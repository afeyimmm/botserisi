module.exports = {
    name: "clear",
    description: "Belirtilen miktarda mesaj siler.",
    async execute(message, args) {
        if (!message.member.permissions.has("ManageMessages"))
            return message.reply("🚫 Bu komutu kullanmak için yetkin yok!");

        const amount = parseInt(args[0]);
        if (isNaN(amount) || amount < 1 || amount > 100)
            return message.reply("1 ile 100 arasında bir sayı gir!");

        await message.channel.bulkDelete(amount, true);
        const msg = await message.channel.send(`🧹 ${amount} mesaj silindi!`);
        setTimeout(() => msg.delete(), 3000);
    },
};
