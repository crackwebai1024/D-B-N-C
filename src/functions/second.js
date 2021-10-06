const modNum = (num) => {
  if (num <= 0) {
    console.log("You should input positive integer");
  }
  if (num % 14 === 0) {
    console.log("foobar");
  } else if (num % 7 === 0) {
    console.log("bar");
  } else if (num % 2 === 0) {
    console.log("foo");
  } else {
    console.log(num);
  }
};
