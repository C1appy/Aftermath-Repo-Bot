var repoVehicles = [
  ["18challenger"],
  ["300ss"],
  ["406"],
  ["750il"],
  ["812superfast"],
  ["911r"],
  ["911speedster"],
  ["999"],
  ["999r"],
  ["camaro1990"],
  ["challenger"],
  ["elantra"],
  ["explorer2020"],
  ["festiva"],,
  ["fordgt17"],
  ["giulietta"],
  ["gt40"],
  ["hayabusa"],
  ["hornet"],
  ["i30n"],
  ["k5"],
  ["laf"],
  ["lfa"],
  ["mbs65"],
  ["monaro"],
  ["murcielago"],
  ["mustanggt18"],
  ["patrol"],
  ["quadbike"],
  ["r35"],
  ["rs3"],
  ["titan"],
  ["tmax"],
  ["touraeg"],
  ["twingo"],
  ["vanquish"],
  ["w202"]
]
const { EmbedBuilder, Client, GatewayIntentBits, Partials, AttachmentBuilder } = require('discord.js');
require('dotenv').config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.MessageContent
  ],
  partials: [
    Partials.Channel, Partials.Message, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.Reaction, Partials.ThreadMember, Partials.User
  ],
});

client.on('ready', () => {
  console.log('Simeon Is Ready!');
});

console.log('[AntiCrash] Has been loaded successfully');

client.on('error', (err) => {
  console.log('[antiCrash] :: Error:');
  console.log(err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('[antiCrash] :: Unhandled Rejection/Catch');
  console.log(reason, '\n', promise);
});
process.on('uncaughtException', (err, origin) => {
  console.log('[antiCrash] :: Uncaught Exception/Catch');
  console.log(err, '\n', origin);
});
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('[antiCrash] :: Uncaught Exception/Catch (MONITOR)');
  console.log(err, '\n', origin);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith('!repo')) { // Check if the command starts with '!repo'
    for (let i = repoVehicles.length - 1; i >= 0; i--) {
      if (message.content.endsWith(repoVehicles[i])) { // If the message ends with the vehicle listed
        const file = new AttachmentBuilder(`./repoimages/${repoVehicles[i][0]}.png`);
        const myEmbed = new EmbedBuilder()
          .setImage(`attachment://${repoVehicles[i][0]}.png`)
          .setDescription(`${repoVehicles[i][1] || "Description Coming soon"}`);
        message.reply({ embeds: [myEmbed], files: [file] }); // Send the message containing the image attachment
      }
    }
  } 
});


client.login(process.env.Token);