exports.run = {
   usage: ['runtime'],
   hidden: ['run'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      let _uptime = process.uptime() * 1000
      let uptime = Func.toTime(_uptime)
      client.reply(m.chat, Func.texted('bold', `Bot Berjalan selama :  ${uptime} `), m)
   },
   error: false
}