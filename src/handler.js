'use strict';

module.exports.generateRandomNumber = async (event) => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log(`The random generated integer is: ${randomNumber}`)
  
  return {
    statusCode: 200,
    body: JSON.stringify({message: randomNumber})
  }
}