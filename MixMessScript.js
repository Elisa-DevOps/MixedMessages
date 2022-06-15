//console.log('this is a test');
//console.log('this is the second line of text');
const returnRandNeed = () => {
    const needs = ['sleep', 'food', 'water'];
    return needs[Math.floor(Math.random() * 3)]; //selects a random array value
  };

  const returnRandWant = () => {
    const wants = ['vacation', 'pool time', 'cheese'];
    return wants[Math.floor(Math.random() * 3)]; //selects a random array value
  };

  const returnRandQuote = () => {
    const needs = ['Be someone you look up to!', 'You are enough!', 'Set boundaries. No is an answer.'];
    return needs[Math.floor(Math.random() * 3)]; //selects a random array value
  };

  /////////////////script start///////////
  let need = returnRandNeed();
  let want = returnRandWant();
  let quote = returnRandQuote();

  console.log(`You Need: ${need}`); //outputs either sleep, food, water
  console.log(`You Want: ${want}`); //outputs either vacation, pool time, cheese
  console.log(`Remember: ${quote}`); //outputs either 'Be someone you look up to', 'You are enough', 'Set boundaries. No is an answer.'