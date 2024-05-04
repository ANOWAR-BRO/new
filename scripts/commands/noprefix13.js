module.exports.config = {
  name: "🤭",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "🤭",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  const content = event.body ? event.body : '';
    const body = content.toLowerCase();
  if (body.startsWith("🤭")) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var rahad = [
      "🐹 \nরাখার মানুষ রাখ'তে জান'লে থাকা'র\nমানুষ থাকতে বাধ্য‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎༉-:))",
      "🥀তোমার মুচকি হাসি আমি অনেক ভালোবাসি 💚\n            💕ভালোবাসতে মন লাগে 🙂🙃\n  দেহ নয়   🥰💯",
"ভালবাসতে জানলে সুন্দর  😍", "আমার কাছে সম্পর্ক হল মায়া  🌺🙂", "তুমি থেকে আমি ডাকটা সুন্দর 🥰🥰", "আমি তোমাকে ভালোবাসি ", "ভালবাসতে চাই 😔", "তোমার জন্য আমি সব করতে পারি 🙃", " রাখতে জানলে পৃথিবীর সব কিছুই সুন্দর 🥰🙃"
    ];
    
    var rahad2 = rahad[Math.floor(Math.random() * rahad.length)];
 
    var link = ["https://i.imgur.com/JIXxIcU.mp4", "https://i.imgur.com/gBBguGt.mp4", "https://i.imgur.com/uih9VDV.mp4", "https://i.imgur.com/n0zOn60.mp4", "https://i.imgur.com/u44tOf5.mp4",
"https://i.imgur.com/3Kk39e7.mp4",
"https://i.imgur.com/6S3RUak.mp4",
"https://i.imgur.com/hLa78EJ.mp4",
"https://i.imgur.com/6bL7J0i.mp4",
"https://i.imgur.com/TDEkBlY.mp4",
"https://i.imgur.com/aSAWuLn.mp4",
"https://i.imgur.com/3ogGqKf.mp4",
"https://i.imgur.com/aT9kIvt.mp4",
"https://i.imgur.com/fM99HMf.mp4",
"https://i.imgur.com/Vdfazfb.mp4",
"https://i.imgur.com/0US7gEb.mp4",
"https://i.imgur.com/dZYiRFv.mp4",
"https://i.imgur.com/yE7KKPt.mp4",
"https://i.imgur.com/o7BZQjS.mp4",];
    var callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
    
    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
    return requestStream;
  }
};
module.exports.run = async ({ api, event, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["🤭"] == "undefined" || data["🤭"] == true) data["🤭"] = false;
  else data["🤭"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["🤭"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
