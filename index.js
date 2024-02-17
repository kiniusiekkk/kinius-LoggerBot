 //
  //            LOGGER BOT BY KINIUS POZDRO
   //           LOGGER BOT BY KINIUS POZDRO
    //          LOGGER BOT BY KINIUS POZDRO
   //           LOGGER BOT BY KINIUS POZDRO
 // 

const Discord = require('discord.js');
const client = new Discord.Client();
client.login("ZMIEN TOKEN") // wpisz se swoj token
client.on('ready', ()=> {
  console.log('Działam bezpiecznie ;]')
  client.user.setActivity('Kinius robi cos na GH', {type:'LISTENING'}) 
})


const kolorembed = '#6600ff'; 
const footer = 'DevilHub - Logi'; 
const authorXD = 'Logi'; 
const ikonka = 'https://devilhub.cf/logo.png'; 
const kanalLOGI = '1179772981518540820';

client.on('messageDelete', (wiadomosc) => {

    if(wiadomosc.author.id === client.user.id) return;
    const embed = new Discord.MessageEmbed()
    .setColor(kolorembed)
    .setTimestamp()
    .setFooter(footer)
    .setAuthor(`${authorXD}`, `${ikonka}`)
    .setDescription(`> **Uzytkownik**: <@${wiadomosc.author.id}>\n> **Usunieta wiadomosc**:\n ${wiadomosc.content}`)
    client.channels.cache.get(`${kanalLOGI}`).send(embed)
});
client.on('messageUpdate', async(starawiadomosc, nowawiadomosc) => {
    if(starawiadomosc.author.id === client.user.id) return;
    const embed = new Discord.MessageEmbed()
    .setColor(kolorembed)
    .setTimestamp()
    .setFooter(footer)
    .setAuthor(`${authorXD}`, `${ikonka}`)
    .setDescription(`> **Uzytkownik**: <@${starawiadomosc.author.id}>\n> **Usunieta wiadomosc**:\n ${starawiadomosc.content}\n> **Nowa wiadomosc**:\n ${nowawiadomosc.content}`)
    client.channels.cache.get(`${kanalLOGI}`).send(embed)
   
});
client.on('guildBanAdd', async (guild, user) => {
  const fetchedLogs = await guild.fetchAuditLogs({
      type: 'MEMBER_BAN_ADD',
      limit: 1,
  });

  const banLog = fetchedLogs.entries.first();
  if (!banLog) return;

  const { executor, target } = banLog;

  const embed = new Discord.MessageEmbed()
      .setColor(kolorembed)
      .setTimestamp()
      .setFooter(footer)
      .setAuthor(`${authorXD}`, `${ikonka}`)
      .setDescription(`> **Zbanowany/a**: ${target.tag}\n> **Przez**: ${executor.tag}`);
  client.channels.cache.get(kanalLOGI).send(embed);
});

client.on('guildBanRemove', async (guild, user) => {
  const fetchedLogs = await guild.fetchAuditLogs({
      type: 'MEMBER_BAN_REMOVE',
      limit: 1,
  });

  const unbanLog = fetchedLogs.entries.first();
  if (!unbanLog) return;

  const { executor, target } = unbanLog;
  const embed = new Discord.MessageEmbed()
      .setColor(kolorembed)
      .setTimestamp()
      .setFooter(footer)
      .setAuthor(`${authorXD}`, `${ikonka}`)
      .setDescription(`> **Odbanowany/a**: ${target.tag}\n> **Przez**: ${executor.tag}`);
  client.channels.cache.get(kanalLOGI).send(embed);
});

client.on('guildMemberAdd', (member) => {
  const embed = new Discord.MessageEmbed()
      .setColor(kolorembed)
      .setTimestamp()
      .setFooter(footer)
      .setAuthor(`${authorXD}`, `${ikonka}`)
      .setDescription(`> **Dołączył/a**: <@${member.user.id}>`);
  client.channels.cache.get(kanalLOGI).send(embed);
});

client.on('guildMemberRemove', (member) => {
  const embed = new Discord.MessageEmbed()
      .setColor(kolorembed)
      .setTimestamp()
      .setFooter(footer)
      .setAuthor(`${authorXD}`, `${ikonka}`)
      .setDescription(`> **Opuścił/a**: ${member.user.tag}`);
  client.channels.cache.get(kanalLOGI).send(embed);
});

client.on('emojiCreate', (emoji) => {
  const embed = new Discord.MessageEmbed()
      .setColor(kolorembed)
      .setTimestamp()
      .setFooter(footer)
      .setAuthor(`${authorXD}`, `${ikonka}`)
      .setDescription(`> **Dodano emotkę**: ${emoji.name}`);
  client.channels.cache.get(kanalLOGI).send(embed);
});

client.on('roleCreate', (role) => {
  const embed = new Discord.MessageEmbed()
      .setColor(kolorembed)
      .setTimestamp()
      .setFooter(footer)
      .setAuthor(`${authorXD}`, `${ikonka}`)
      .setDescription(`> **Dodano rolę**: ${role.name}`);
  client.channels.cache.get(kanalLOGI).send(embed);
});

client.on('emojiDelete', (emoji) => {
  const embed = new Discord.MessageEmbed()
      .setColor(kolorembed)
      .setTimestamp()
      .setFooter(footer)
      .setAuthor(`${authorXD}`, `${ikonka}`)
      .setDescription(`> **Usunięto emotkę**: ${emoji.name}`);
  client.channels.cache.get(kanalLOGI).send(embed);
});

client.on('roleDelete', (role) => {
  const embed = new Discord.MessageEmbed()
      .setColor(kolorembed)
      .setTimestamp()
      .setFooter(footer)
      .setAuthor(`${authorXD}`, `${ikonka}`)
      .setDescription(`> **Usunięto rolę**: ${role.name}`);
  client.channels.cache.get(kanalLOGI).send(embed);
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
  if (oldMember.nickname !== newMember.nickname) {
      const embed = new Discord.MessageEmbed()
          .setColor(kolorembed)
          .setTimestamp()
          .setFooter(footer)
          .setAuthor(`${authorXD}`, `${ikonka}`)
          .setDescription(`> **Zaktualizowano nick**: ${oldMember.nickname || oldMember.user.username} ➔ ${newMember.nickname || newMember.user.username}`);
      client.channels.cache.get(kanalLOGI).send(embed);

  }
  const oldRoles = oldMember.roles.cache.map(role => role.name);
  const newRoles = newMember.roles.cache.map(role => role.name);
  const addedRoles = newRoles.filter(role => !oldRoles.includes(role));
  const removedRoles = oldRoles.filter(role => !newRoles.includes(role));

  if (addedRoles.length || removedRoles.length) {
      let rolesDescription = '';
      if (addedRoles.length) {
          rolesDescription += `> **Dodano role**: ${addedRoles.join(', ')}\n`;
      }
      if (removedRoles.length) {
          rolesDescription += `> **Usunięto role**: ${removedRoles.join(', ')}\n`;
      }

      const embed = new Discord.MessageEmbed()
          .setColor(kolorembed)
          .setTimestamp()
          .setFooter(footer)
          .setAuthor(`${authorXD}`, `${ikonka}`)
          .setDescription(rolesDescription);
      client.channels.cache.get(kanalLOGI).send(embed);
  }
});

client.on('userUpdate', (oldUser, newUser) => {
  const embed = new Discord.MessageEmbed()
      .setColor(kolorembed)
      .setTimestamp()
      .setFooter(footer)
      .setAuthor(`${authorXD}`, `${ikonka}`)
      .setDescription(`> **Zaktualizowano użytkownika**: ${oldUser.username}#${oldUser.discriminator} ➔ ${newUser.username}#${newUser.discriminator}`);
  client.channels.cache.get(kanalLOGI).send(embed);
});

client.on('channelCreate', (channel) => {
  const embed = new Discord.MessageEmbed()
      .setColor(kolorembed)
      .setTimestamp()
      .setFooter(footer)
      .setAuthor(`${authorXD}`, `${ikonka}`)
      .setDescription(`> **Utworzono kanał**: ${channel.type === 'text' ? 'Tekstowy' : 'Głosowy'}: ${channel.name}`);
  client.channels.cache.get(kanalLOGI).send(embed);
});

client.on('channelDelete', (channel) => {
  const embed = new Discord.MessageEmbed()
      .setColor(kolorembed)
      .setTimestamp()
      .setFooter(footer)
      .setAuthor(`${authorXD}`, `${ikonka}`)
      .setDescription(`> **Usunięto kanał**: ${channel.type === 'text' ? 'Tekstowy' : 'Głosowy'}: ${channel.name}`);
  client.channels.cache.get(kanalLOGI).send(embed);
});

client.on('channelUpdate', (oldChannel, newChannel) => {
  const embed = new Discord.MessageEmbed()
      .setColor(kolorembed)
      .setTimestamp()
      .setFooter(footer)
      .setAuthor(`${authorXD}`, `${ikonka}`);

  if (oldChannel.name !== newChannel.name) {
      embed.setDescription(`> **Zaktualizowano nazwę kanału ${newChannel.type === 'text' ? 'tekstowego' : 'głosowego'}**: ${oldChannel.name} ➔ ${newChannel.name}`);
  } else {
      embed.setDescription(`> **Zaktualizowano kanał ${newChannel.type === 'text' ? 'tekstowy' : 'głosowy'}**: ${newChannel.name}`);
  }
  client.channels.cache.get(kanalLOGI).send(embed);
});
client.on('voiceStateUpdate', (oldState, newState) => {
  if (!oldState.channel && newState.channel) {
      const embed = new Discord.MessageEmbed()
          .setColor(kolorembed)
          .setTimestamp()
          .setFooter(footer)
          .setAuthor(`${authorXD}`, `${ikonka}`)
          .setDescription(`> **Dołączono do kanału głosowego**: ${newState.member.user.tag} (${newState.member.displayName})`);
      client.channels.cache.get(kanalLOGI).send(embed);
  } else if (oldState.channel && !newState.channel) {
      const embed = new Discord.MessageEmbed()
          .setColor(kolorembed)
          .setTimestamp()
          .setFooter(footer)
          .setAuthor(`${authorXD}`, `${ikonka}`)
          .setDescription(`> **Opuściano kanał głosowy**: ${oldState.member.user.tag} (${oldState.member.displayName})`);
      client.channels.cache.get(kanalLOGI).send(embed);

  } else if (oldState.channel && newState.channel && oldState.channelID !== newState.channelID) {
      const embed = new Discord.MessageEmbed()
          .setColor(kolorembed)
          .setTimestamp()
          .setFooter(footer)
          .setAuthor(`${authorXD}`, `${ikonka}`)
          .setDescription(`> **Przeniesiono się między kanałami głosowymi**: ${oldState.member.user.tag} (${oldState.member.displayName}) z ${oldState.channel.name} do ${newState.channel.name}`);
      client.channels.cache.get(kanalLOGI).send(embed);

  }
});
