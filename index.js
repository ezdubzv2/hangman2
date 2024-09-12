const wordDisplay = document.querySelector(".word-display");
const keyboardDiv = document.querySelector(".keyboard");

const getRandomWord = () => {
     const{ word , hint } =  wordList[Math.floor(Math.random() *wordList.length)];
     console.log(word);
     document.querySelectorAll(".hint-text b").innerText = hint;
     wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");

}

for (let index = 97; i<=122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    console.log(String.fromCharCode(i));
    keyboardDiv.appendChild(button);
    
}
getRandomWord();