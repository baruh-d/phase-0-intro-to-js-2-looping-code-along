// Code your solutions in this file
function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
   countDown(10); //example

   function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }
    
  const names = ['Alice', 'Mike', 'Charlie'];
  const eventName = 'birthday';
  const messages = writeCards(names, eventName);
  console.log(messages);
  
  