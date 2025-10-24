module.exports = {
    name: "emojify",
    description: "Yazdığın metni emojiye çevirir. Örnek: `!emojify selam`",
    execute(message, args) {
        const text = args.join(" ");
        if (!text) return message.reply("Lütfen çevirmek istediğin metni yaz.");
        const letters = text.toLowerCase().split("");
        const map = {
            "a":"🇦","b":"🇧","c":"🇨","d":"🇩","e":"🇪","f":"🇫","g":"🇬","h":"🇭","i":"🇮","j":"🇯","k":"🇰","l":"🇱","m":"🇲",
            "n":"🇳","o":"🇴","p":"🇵","q":"🇶","r":"🇷","s":"🇸","t":"🇹","u":"🇺","v":"🇻","w":"🇼","x":"🇽","y":"🇾","z":"🇿",
            "0":"0️⃣","1":"1️⃣","2":"2️⃣","3":"3️⃣","4":"4️⃣","5":"5️⃣","6":"6️⃣","7":"7️⃣","8":"8️⃣","9":"9️⃣",
            "!":"❗","?":"❓"," ":"   "
        };
        const converted = letters.map(ch => map[ch] || ch).join("");
        message.channel.send(converted);
    },
};
