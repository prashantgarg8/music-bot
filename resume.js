/** 

@code Design By Parrot 
@for support join discord.gg/ice-cafe

**/
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "resume",
  aliases: ["resume", "r"],
  category: "Music",
  desc: "Resume the Music!",dev: false,
  options: {
    owner: false,
    inVc: true,
    sameVc: true,
    player: {
      playing: false,
      active: false,
    },
    premium: false,
    vote: false,
  },

  run: async ({ client, message, args }) => {
    try {
      if (!message.member.voice.channel) {
        const embed = new EmbedBuilder()
          .setAuthor({
            name: `You need to be in a voice channel to use this command`,
            iconURL: message.author.displayAvatarURL(),
          })
          .setColor(client.config.color);
        return message.channel
          .send({
            embeds: [embed],
          })
          .then((x) => {
            setTimeout(() => x.delete(), 5000);
          });
      }
      client.music.Resume(message);
    } catch (e) {
      console.log(e);
    }
  },
};
