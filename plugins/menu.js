exports.run = {
   usage: ['menu', 'bot', 'allmenu'],
   hidden: ['menutype'],
   async: async (m, {
      client,
      text,
      isPrefix
   }) => {
      try {
      let captions = `╭────❏ *Info Bot* ❏
│➪  Sistem otomatis (WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu,
│➪  mencari dan mendapatkan data/informasi hanya melalui WhatsApp.
│➪  Harap jangan spam
╰────────────────────❏

╭────❏ *Info cmd* ❏
│➪ Owner 🅟
│➪ Gratis/Free 🅕
╰───────────❏

╭────❏ *Main Menu* ❏
│➪  ${isPrefix}limit 🅕
│➪  ${isPrefix}me 🅕
╰─────────────❏

╭────❏ *Group Menu* ❏
│➪  ${isPrefix}antidelete *on / off* 🅕
│➪  ${isPrefix}antilink *on / off* 🅕
│➪  ${isPrefix}antivirtex *on / off* 🅕
│➪  ${isPrefix}demote *mention or reply* 🅕
│➪  ${isPrefix}everyone *text (optional)* 🅕
│➪  ${isPrefix}filter *on / off* 🅕
│➪  ${isPrefix}group *open / close* 🅕
│➪  ${isPrefix}hidetag *text* 🅕
│➪  ${isPrefix}kick *mention or reply* 🅕
│➪  ${isPrefix}left *on / off* 🅕
│➪  ${isPrefix}localonly *on / off* 🅕
│➪  ${isPrefix}mute *0 / 1* 🅕
│➪  ${isPrefix}setdesc *text* 🅕
│➪  ${isPrefix}setleft *text* 🅟
│➪  ${isPrefix}setname *text* 🅟
│➪  ${isPrefix}setout *text* 🅕
│➪  ${isPrefix}setwelcome *text* 🅕
│➪  ${isPrefix}welcome *on / off* 🅕
│➪  ${isPrefix}afk *reason (optional)* 🅕
│➪  ${isPrefix}ava *mention or reply* 🅕
│➪  ${isPrefix}delete *reply chat* 🅟
│➪  ${isPrefix}q *reply chat* 🅟
╰─────────────────────❏

╭────❏ *Convert Menu* ❏
│➪  ${isPrefix}emojimix *emoji + emoji* 🅕
│➪  ${isPrefix}sticker *reply media* 🅕
│➪  ${isPrefix}swm *packname | author* 🅕
│➪  ${isPrefix}take *packname | author* 🅕
│➪  ${isPrefix}toimg *reply sticker* 🅕
│➪  ${isPrefix}tomp3 *reply media* 🅕
│➪  ${isPrefix}tovn *reply media* 🅕
╰─────────────────────────❏

╭────❏ *Download Menu* ❏
│➪  ${isPrefix}apk *query* 🅕
│➪  ${isPrefix}fb *link* 🅕
│➪  ${isPrefix}ig *link* 🅕
│➪  ${isPrefix}igs *username / link* 🅕
│➪  ${isPrefix}mediafire *link* 🅕
│➪  ${isPrefix}pin *link* 🅕
│➪  ${isPrefix}play *query* 🅕
│➪  ${isPrefix}podcast *link* 🅕
│➪  ${isPrefix}soundcloud *query / link* 🅕
│➪  ${isPrefix}tikmp3 *link* 🅕
│➪  ${isPrefix}tiktok *link* 🅕
│➪  ${isPrefix}tikwm *link* 🅕
│➪  ${isPrefix}twitter *link* 🅕
│➪  ${isPrefix}video *query* 🅕
│➪  ${isPrefix}ytmp3 *link* 🅕
│➪  ${isPrefix}ytmp4 *link* 🅕
╰─────────────────────❏

╭────❏ *Search Menu* ❏
│➪  ${isPrefix}brainly *question* 🅕
│➪  ${isPrefix}halah *text or reply chat* 🅕
│➪  ${isPrefix}heleh *text or reply chat* 🅕
│➪  ${isPrefix}hilih *text or reply chat* 🅕
│➪  ${isPrefix}holoh *text or reply chat* 🅕
│➪  ${isPrefix}huluh *text or reply chat* 🅕
│➪  ${isPrefix}pinterest *query* 🅕
│➪  ${isPrefix}response *link* 🅕
│➪  ${isPrefix}server 🅕
│➪  ${isPrefix}wallpaper *query* 🅕
╰────────────────────────❏

╭────❏ *Text Maker* ❏
│➪  ${isPrefix}blackpink *text* 🅕
│➪  ${isPrefix}blood *text* 🅕
│➪  ${isPrefix}breakwall *text* 🅕
│➪  ${isPrefix}glow *text* 🅕
│➪  ${isPrefix}joker *text* 🅕
│➪  ${isPrefix}magma *text* 🅕
│➪  ${isPrefix}matrix *text* 🅕
│➪  ${isPrefix}multicolor *text* 🅕
│➪  ${isPrefix}neon *text* 🅕
│➪  ${isPrefix}papercut *text* 🅕
│➪  ${isPrefix}slice *text* 🅕
│➪  ${isPrefix}alien *reply foto* 🅕
│➪  ${isPrefix}brick *reply foto* 🅕
│➪  ${isPrefix}bunny *reply foto* 🅕
│➪  ${isPrefix}caricature *reply foto* 🅕
│➪  ${isPrefix}clown *reply foto* 🅕
│➪  ${isPrefix}ink *reply foto* 🅕
│➪  ${isPrefix}latte *reply foto* 🅕
│➪  ${isPrefix}letter *reply foto* 🅕
│➪  ${isPrefix}pencil *reply foto* 🅕
│➪  ${isPrefix}puzzle *reply foto* 🅕
│➪  ${isPrefix}roses *reply foto* 🅕
│➪  ${isPrefix}sketch *reply foto* 🅕 
│➪  ${isPrefix}splash *reply foto* 🅕
│➪  ${isPrefix}staco *reply foto* 🅕
╰────────────────────────❏

╭────❏ *Owner Menu* ❏
│➪  ${isPrefix}-cmdstic *text / command* 🅟
│➪  ${isPrefix}-mimic *mention or reply* 🅟
│➪  ${isPrefix}-owner *mention or reply* 🅟
│➪  ${isPrefix}-prefix *symbol* 🅟
│➪  ${isPrefix}-prem *mention or reply* 🅟
│➪  ${isPrefix}+cmdstic *text / command* 🅟
│➪  ${isPrefix}+mimic *mention or reply* 🅟
│➪  ${isPrefix}+owner *mention or reply* 🅟
│➪  ${isPrefix}+prefix *symbol* 🅟
│➪  ${isPrefix}+prem *mention or reply* 🅟
│➪  ${isPrefix}autodownload *on / off* 🅟
│➪  ${isPrefix}autoread *on / off* 🅟
│➪  ${isPrefix}backup 🅟
│➪  ${isPrefix}ban *mention or reply* 🅟
│➪  ${isPrefix}bc *text or reply media* 🅟
│➪  ${isPrefix}bcgc *text or reply media* 🅟
│➪  ${isPrefix}block *mention or reply* 🅟
│➪  ${isPrefix}changename *text* 🅟
│➪  ${isPrefix}chatbot *on / off* 🅟
│➪  ${isPrefix}cmdstic 🅟
│➪  ${isPrefix}debug *on / off* 🅟
│➪  ${isPrefix}groupmode *on / off* 🅟
│➪  ${isPrefix}join *group link* 🅟
│➪  ${isPrefix}multiprefix *on / off* 🅟
│➪  ${isPrefix}ohidetag *text* 🅟
│➪  ${isPrefix}oleft *on / off* 🅟
│➪  ${isPrefix}omute *0 / 1* 🅟
│➪  ${isPrefix}online *on / off* 🅟
│➪  ${isPrefix}owelcome *on / off* 🅟
│➪  ${isPrefix}plugdis *plugin name* 🅟
│➪  ${isPrefix}plugen *plugin name* 🅟
│➪  ${isPrefix}prefix *symbol* 🅟
│➪  ${isPrefix}reset 🅟
│➪  ${isPrefix}restart 🅟
│➪  ${isPrefix}self *on / off* 🅟
│➪  ${isPrefix}setmsg *text* 🅟
│➪  ${isPrefix}setpp *reply photo* 🅟
│➪  ${isPrefix}setwm *packname | author* 🅟
│➪  ${isPrefix}unban *mention or reply* 🅟
│➪  ${isPrefix}unblock *mention or reply* 🅟
│➪  ${isPrefix}update 🅟
╰─────────────────❏

╭────❏ *Other menu* ❏
│➪  ${isPrefix}botstat 
│➪  ${isPrefix}checkapi 
│➪  ${isPrefix}groups 
│➪  ${isPrefix}hitdaily 
│➪  ${isPrefix}hitstat 
│➪  ${isPrefix}list 
│➪  ${isPrefix}owner 
│➪  ${isPrefix}premium 
│➪  ${isPrefix}runtime
╰───────────────❏

`
      client.sendMessageModify(m.chat, captions, m, {
               title: 'Slime Bot',
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/0c8b241f44d718f8a9f86.jpg'),
               url: ''
            })
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false
}
