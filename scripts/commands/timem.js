module.exports.config = {
  name: "time",
  version: "1.0.0",
  permission: 0,
  prefix: true,
  credits: "nayan",
  description: "( 𝙀𝙭𝙖𝙘𝙩 𝙩𝙞𝙢𝙚 & 𝙙𝙖𝙩𝙚 )",
  category: "Time and Date",
  usages: "( Exact time )",
  cooldowns: 0,
  dependencies: []
};

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
  const axios = require('axios');
  const moment = require("moment-timezone");
  const links = [
    "https://i.imgur.com/uX862Gt.jpeg",
    "https://i.imgur.com/m1jB1z0.jpeg",
    "https://i.imgur.com/SAKYh6I.jpeg",
    "https://i.imgur.com/1URCVTB.jpeg"
  ];
  const rahad = links[Math.floor(Math.random() * links.length)];
  const rahad2 = (await axios.get(rahad, { responseType: 'stream' })).data;
  const rahad5 =[ "-পুরুষ সস্তা নয় দায়িত্বশীল!🌸💙","একা বাঁচতে শিখো..!মানুষ শান্তনা দিবে শান্তি না..! 🌸🥀","—মনকে ফুলের মত পবিত্র করুন, জীবনে সুগন্ধের অভাব হবে না-|♡🩷🪻","-চুপ থাকা ভদ্রতা-দুর্বলতা নয়🌻","─সম্পদে নয় ইবাদতেই শান্তি-!🤍🌸 ","খারাপ সময় সারাজীবন থাকে নাহ🌸","__মায়ের ভালোবাসা অতুলনীয়.!!🌸","- সময়ের সাথে জীবনও ক্ষয়ে যায়.🖤🥀"];
  const rahad6 = rahad5[Math.floor(Math.random() * rahad5.length)];
  const supremo = moment.tz('Asia/Dhaka').format('hh:mm:ss');
  const draven = moment.tz('Asia/Dhaka').format('D/MM/YYYY');
  let kiel = moment.tz('Asia/Dhaka').format('dddd');
  if (kiel == 'Sunday') kiel = 'Sunday';
  if (kiel == 'Monday') kiel = 'Monday';
  if (kiel == 'Tuesday') kiel = 'Tuesday';
  if (kiel == 'Wednesday') kiel = 'Wednesday';
  if (kiel == 'Thursday') kiel = 'Thursday';
  if (kiel == 'Friday') kiel = 'Friday';
  if (kiel == 'Saturday') kiel = 'Saturday';
  const name = await Users.getNameUser(event.senderID);

  const rahad3 = `
  ❁🐰°🍒𝄞⋆⃝আৃ্ঁসৃ্ঁসাৃ্ঁমু্ৃঁ আৃ্ঁলাৃ্ঁইৃ্ৃঁকৃ্ুঁমৃ্ঁ🦋🥀𝄞⋆⃝ ❁
  ﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
  ◙ প্রিৃ্ৃঁয়ৃ্ঁ     : 【${name}】

  ◙ তাৃ্ঁরিৃ্ঁখৃ্ঁ : 【${draven}】

  ◙ দি্ৃঁনৃ্ঁ      : 【(${kiel})】
  ﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
  ◙ এৃ্ঁখৃ্ঁনৃ্ঁ সৃ্ঁমৃ্ঁয়ৃ্ : 【${supremo}】

  ◙【${rahad6}】
  ﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`;

  api.sendMessage({ body: rahad3, attachment: rahad2 }, event.threadID, event.messageID);
};
