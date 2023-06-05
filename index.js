const userInfo = require("./information");
const cowsay = require("cowsay");

console.log(` years old`);
console.log(
  cowsay.say({
    text: `Hi, my name is ${userInfo.info.nom} and I come from ${userInfo.info.campus}`,
    e: "oO",
    T: "U ",
  })
);
