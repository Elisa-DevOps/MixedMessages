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

  const returnAsciiArt = () => {
    //let i = 0;
    let arts1 = ['--------', '|      |', '--------'];
    for (let i = 0; i < 3; i++) {
    let arts2 = arts1[i];
    //const arts2 = ['|      |'];
    //const arts3 = ['--------'];
    //return needs[Math.floor(Math.random() * 3)]; //selects a random array value
    console.log(arts2);
    }
  };
  /////////////////script start///////////
  let need = returnRandNeed();
  let want = returnRandWant();
  let quote = returnRandQuote();
  //let art = returnAsciiArt();

  console.log(`You Need: ${need}`); //outputs either sleep, food, water
  console.log(`You Want: ${want}`); //outputs either vacation, pool time, cheese
  console.log(`Remember: ${quote}`); //outputs either 'Be someone you look up to', 'You are enough', 'Set boundaries. No is an answer.'
  console.log(`Ascii Art: `);
  returnAsciiArt();

  //this iis a change