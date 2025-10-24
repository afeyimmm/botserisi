require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const prefix = "!";

// Komutları yükle
client.commands = new Map();

// commands klasöründeki hem dosyaları hem klasörleri tara
const commandItems = fs.readdirSync('./commands');

for (const item of commandItems) {
    const itemPath = path.join('./commands', item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
        // Alt klasördeki komutları yükle
        const commandFiles = fs.readdirSync(itemPath).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`./commands/${item}/${file}`);
            client.commands.set(command.name, command);
            console.log(`✅ Yüklendi: [${item}] ${command.name}`);
        }
    } else if (stat.isFile() && item.endsWith('.js')) {
        // Kök dizindeki komut dosyasını yükle
        const command = require(`./commands/${item}`);
        client.commands.set(command.name, command);
        console.log(`✅ Yüklendi: [root] ${command.name}`);
    }
}

client.once('ready', () => {
    console.log(`${client.user.tag} aktif ve hazır!`);
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('❌ Komut çalıştırılırken bir hata oluştu.');
    }
});

client.login(process.env.BOT_TOKEN);