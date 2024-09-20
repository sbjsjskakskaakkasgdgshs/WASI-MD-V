//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUh2M0NudUg0Ym93N09NanNVdDBLMWhDVlE0ZisyeXk4U25GRm1CQ0pGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0lFaTNHclBLa2ZnaVV1UHh1TDdmcEhmYnhzZDZUTDhBWTMvR3R3Y0NrOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTk9SZkRxTGlQeFQ4NmdMRURnSkJkdmlrbFgwQ2k0anNRNmQ2bXV6MGtRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIveXdoeEEyQUZ0dy9SdHE3UWp0OVpyVzd0dndDaUQ5a3BsL3hoQlpsLzM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFITDZPdFdqYnNCaXZRVFVPY1pneG4vMlA5SkhOQ2duZXRDdWJ2NVVCMUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQzRlFPSU5KUFBYa1ZzMFYvaXVlZFlaTm85Y2ZkNHFBdGFyeUFvYzlYd0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUR2WGlLOHdCVFZpUzBwYWpkMWw5NkdmbzdQek41ZTdwOGtaVm5NaGRHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlJXOUs4dmFSaG9JbEdUOHZCbHhLYWR2NlFEZmM4WUhvNGc1Vk82OGJ5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlUaFkvZ0dSazRGdnRXTHhHRTdQeTRycXJ2MGFqeEtpWHVxcGNCNkwzQU1PMFNqd1F6WkVxVmZJNnoxNWFZRll1Y3JIWVZadXkrWHliU3lYWjU0QkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAwLCJhZHZTZWNyZXRLZXkiOiI1eVMwVkFKaVpQYVBnek52QkI4S1czNHpLc0tSZkIxeGxvRDhrN2VzY1A0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzNTQ3MTY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg5RENENDkwNjBFRDQ3OUMyQzcwMjNFQkZGMTlDNzZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4MDQ4ODB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzNTQ3MTY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjAwNTIwM0M1MTE5NTE0ODk5NjVBOTg5ODZGNjBDRjdFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4MDQ4ODB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzNTQ3MTY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE3M0Y5Q0RBN0M2RDhBMTFBNTlFMTJENDk0NkNDQjQ4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4MDQ4ODJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzNTQ3MTY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjAwQzAxRDIxMzY2RDgzMzU5Njk0Njk3RDFFNzhCQzIyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4MDQ4ODJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InN5VFRkT0hiUXlHX0ttYjZqeVdTLXciLCJwaG9uZUlkIjoiOGRmNDQ1ZjItYjYwNi00NGU0LTg5YTYtMzRhYjU5MmE1OTUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRkd2QwNXA3cVRQOUYxOWpNcDYxTDB1Y2JqZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSTJkYzFGWUJWTnlUdmVyY05ZYlI1WjE4MW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQzFRQ1dRSkYiLCJtZSI6eyJpZCI6Ijk0NzIzNTQ3MTY5OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFd6K1BvQ0VJSG5zN2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOFV5VUZhZVpBR1B5RmdwdmxBeC9UOUhUUjB2TW8zWDFPRHVkWkl5Q0JTdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK2lqbDZCRFhWT1VSemlTdGkzSUgrOGx6QmlVUjhoTnFScGxGVm5CeGh4dHhBT0dmTUFPa2VoYkpUdVR4cjByUGFMcE1MQlQ4YjhjcHRaVld3REVHQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImNrU0NhVks5L2IxbkY4VlV4bStVMjArZGZ1QTBoL2NuSGMzM01NSnJrQmNJV2VWREhxSGg2LzNXSTFjelA5TFpVSjE4NkoweFFwc3pLNXlMRWZrdkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjM1NDcxNjk6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmRk1sQldubVFCajhoWUtiNVFNZjAvUjAwZEx6S04xOVRnN25XU01nZ1VzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2ODA0ODc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1XQSJ9";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
