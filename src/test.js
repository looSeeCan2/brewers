const numArray = [];

for (let i = 0; i < 3; i++) {
  const ranNum = Math.floor(Math.random() * 100);
  numArray.push(ranNum);
}

for (let i = 0; i < numArray.length; i++) {
  ///the index in the parent for loop gets compared to the index in the j loop
  for (let j = 0; j < numArray.length; j++) {
    if (numArray[i] < numArray[j]) {
      let newNum = numArray[i];
      numArray[i] = numArray[j];
      console.log(numArray);
      numArray[j] = newNum;
      console.log(numArray);
    }
  }
}
console.log(numArray);
