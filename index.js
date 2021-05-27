const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
  sharding: false, //true or false 
  shardAmount: 2, //Shard amount 
  mobile: false, //true or false - Discord Mobile Status
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
  token: "ODQ3NTAzNDQ3ODAwODA3NDg0.YK_BFw.-us5Eb2RAxTbXJLJTLY0jjBVcD4", //Discord Bot Token
  prefix: ["+"] //Change PREFIX to your Prefix
})

bot.onMessage()
//commands
bot.command({
  name: "help",
  code: "Ok!"
})


//status

bot.status({
  text: "+help",
  type: "WATCHING",
  time: 12
})



//Read more information about status in docs:
//https://dbd.leref.ga/guide/bot-status

//variables

bot.variables({
    Coins: "0", 
    Name2: "Value2"
  })

//You can add more variables :)
//Join our Support Server & read Documentation for help :)
