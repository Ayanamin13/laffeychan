const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Command: !help");
    console.log("Connected");
});

bot.login("ODcwMjI1MzE0NzUwNTQxODU0.YQJqew.RWBcQ68lNRWPT_VVOy0NuJVzB_s");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -!help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué)");
   }
});
