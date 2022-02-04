let letterArray = [
   "A",
   "B",
   "C",
   "D",
   "E",
   "F",
   "G",
   "H",
   "I",
   "J",
   "K",
   "L",
   "M",
   "N",
   "O",
   "P",
   "Q",
   "R",
   "S",
   "T",
   "U",
   "V",
   "W",
   "X",
   "Y",
   "Z",
];
let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbolsArray = [
   "!",
   "@",
   "#",
   "$",
   "%",
   "*",
   "(",
   ")",
   "=",
   "+",
   "?",
   "/",
   "]",
   "[",
   "-",
   ":",
   ".",
   "~",
];
//lower case array from uppercase array
let arrayLowerCase = letterArray.map((letter) => letter.toLowerCase());
//concat all four arrays
let emptyArray = [];
let concat = emptyArray.concat(
   symbolsArray,
   numbersArray,
   arrayLowerCase,
   letterArray
);
//shuffleArray + getting user input length
const shuffleArray = (arr) => {
   for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
   }

   let inputLength = +document.querySelector(".length").value;

   if (inputLength >= 6) {
      let filtered = arr.filter((x) => x !== undefined);
      const arraySlice = filtered.slice(0, inputLength);
      return arraySlice.join("");
   } else {
      return (document.querySelector("#passwordField").innerHTML =
         "Please input 6 or higher");
   }
};

//generate button on click use shuffleArray function
//and display the finished password to user
document
   .querySelector(".generatePass")
   .addEventListener(
      "click",
      () =>
         (document.querySelector("#passwordField").innerHTML =
            shuffleArray(concat))
   );

//clipboard for password field===========================================
document.querySelectorAll(".clipboard")[1].addEventListener("click", () => {
   const textarea = document.createElement("textarea");
   const password = document.querySelector("#passwordField").innerText;

   if (!password) {
      return;
   }

   textarea.value = password;
   document.body.appendChild(textarea);
   textarea.select();
   document.execCommand("copy");
   textarea.remove();
   alert("Password copied to clipboard");
});
//clipboard for username field============================================
document.querySelectorAll(".clipboard")[0].addEventListener("click", () => {
   const textarea = document.createElement("textarea");
   const password = document.querySelector("#usernameField").innerText;

   if (!password) {
      return;
   }

   textarea.value = password;
   document.body.appendChild(textarea);
   textarea.select();
   document.execCommand("copy");
   textarea.remove();
   alert("username copied to clipboard");
});

// let username = document.querySelector("#usernameField").innerHTML = convertToString
