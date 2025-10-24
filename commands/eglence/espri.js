const fetch = require("node-fetch");

module.exports = {
    name: "api-espri",
    description: "API'den rastgele espri çeker 😄",
    async execute(message) {
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any?lang=tr&type=single");
            const data = await response.json();

            if (data.error) {
                return message.reply("😢 API'den espri alınamadı, sonra tekrar dene!");
            }

            message.channel.send(`😂 **${data.joke}**`);
        } catch (error) {
            console.error(error);
            message.reply("❌ API bağlantısında bir hata oluştu!");
        }
    },
};
