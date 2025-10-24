# Discord Botu – Node.js & Discord.js v14

Bu proje, `Node.js` ve `Discord.js` v14 kullanılarak geliştirilmiş modüler bir Discord botudur. Komutlar `commands` klasöründe ayrı dosyalar halinde tutulur ve `.env` dosyası ile token güvenliği sağlanır.


#       değişenler  
```index.js ```
#            yeni eklenen 
 ```
commands/ klasörüne 20+ komut detaylar  !help.js
 ```


# 📂 Proje Yapısı
project/                   
|── index.js   # Botun ana dosyası                   
├── .env      # Bot token'ı                                          
├── LICENSE   
├── package.json        
├── package-lock.json           
├── README.md                      
└── commands/             
    ├── eglence/                                             
    │   ├── emojify.js                                                        
    │   ├── espri.js                                     
    │   ├── hug.js                                                          
    │   ├── kiss.js                                 
    │   ├── roll.js        
    │   ├── slot.js                                                    
    │   └── yazıtura.js                                       
    ├── kullanıcı/                            
    │   ├── avatar.js                                              
    │   ├── kullanicibilgi.js                   
    │   ├── ping.js                                 
    │   ├── remindme.js                              
    │   ├── roleinfo.js                   
    │   ├── say.js                                                 
    │   ├── serverinfo.js                                             
    │   └── toproles.js                                   
    ├── moderasyon/                                               
    │   ├── ban.js                                    
    │   ├── clear.js                                          
    │   ├── kick.js                  
    │   ├── mute.js                         
    │   └── unmute.js                                                    
    └── help.js               

 
### ⚙️ Özellikler

✅ Tam modüler yapı (komutlar klasörlere ayrılmış)            
✅ ```.env``` ile güvenli token yönetimi                     
✅ Mesaj tabanlı prefix sistemi (```!help```)                     
✅ Embed tabanlı gelişmiş ```!help``` komutu                                    
✅ Eğlence, kullanıcı ve moderasyon kategorileri                       
✅ API destekli komutlar (örneğin ```espri.js```)                    
✅ Kolay genişletilebilir sistem              


# 🛠 Kurulum ve Başlatma
 Evet botumuzun herşeyi bitti ve şimdi gerekli kurulumları yapıp başlatıcaz

## 1️⃣ Node.js ve npm Kurulumu

```
# Node.js ve npm sürümünü kontrol et
node -v
npm -v
```
### Node.js >=16 sürümü gereklidir.
# (yeni) bunuda yapmanız gerek
```
npm install discord.js dotenv node-fetch
```


## 2️⃣ Projeyi Klonla
Projenizi kendi bilgisayarınıza klonlamak için aşağıdaki adımları takip edin:
```bash 
# GitHub deposunu klonlayın
git clone https://github.com/afeyimmm/botserisi.git

# Proje klasörüne girin
cd botserisi
```
Bu komutlar:
1.GitHub reposunu bilgisayarınıza indirir.                   
2.```cd``` komutu ile proje klasörüne geçmenizi sağlar.               






## 4️⃣ ```.env``` Dosyasını Doldur

```
BOT_TOKEN=buraya_bot_tokeninizi_yazın
```

## 5️⃣ Botu Çalıştır

```
node index.js
```
1.Konsola ```[BotAdı] aktif ve hazır!``` mesajı geldiğinde bot Discord sunucunuzda aktif olur.                            
2.Örnek komutu test etmek için sunucuda ```!ping``` yazabilirsiniz. Bot ```“Pong!”``` ile cevap verir.                             




# 📝 Komut Eklemek

1.commands klasörüne yeni bir .js dosyası oluştur:                                          

```
touch commands/hello.js
```
2.İçine örnek komut kodunu ekle:                                      

```
// commands/hello.js
module.exports = {
    name: 'hello',
    description: 'Merhaba komutu!',
    execute(message, args) {
        message.channel.send(`Merhaba, ${message.author.username}!`);
    }
};
```
3.```index.js``` otomatik olarak komutu yükler, ekstra ayar yapmanıza gerek yok.      






# 🚀 Gelecek Özellikler

- Slash (/) komut desteği
- Otomatik rol sistemi
- XP / seviye sistemi
- Müzik sistemi
- Web panel entegrasyonu







# 📚 Kaynaklar
- [Discord.js Resmi Dokümantasyon](https://discord.js.org/)                                        
- [Node.js Resmi Dokümantasyon](https://nodejs.org/)
- [JokeAPI (espri API’si)](https://v2.jokeapi.dev/)                                  

# 🧑‍💻 Lisans

MIT Lisansı
Telif Hakkı © 2025 AfeDev

Yazılım “olduğu gibi” sağlanmaktadır. Kullanıcı, değiştirme ve dağıtma haklarına sahiptir.
