const root = document.getElementById("root");
const searchBarElement = document.getElementById("searchBar");

const alphabet = [
  { name: "A", key: "65" },
  { name: "B", key: "66" },
  { name: "C", key: "67" },
  { name: "D", key: "68" },
  { name: "E", key: "69" },
  { name: "F", key: "70" },
  { name: "G", key: "71" },
  { name: "H", key: "72" },
  { name: "I", key: "73" },
  { name: "J", key: "74" },
  { name: "K", key: "75" },
  { name: "L", key: "76" },
  { name: "M", key: "77" },
  { name: "N", key: "78" },
  { name: "Ñ", key: "192" },
  { name: "O", key: "79" },
  { name: "P", key: "80" },
  { name: "Q", key: "81" },
  { name: "R", key: "82" },
  { name: "S", key: "83" },
  { name: "T", key: "84" },
  { name: "U", key: "85" },
  { name: "V", key: "86" },
  { name: "W", key: "87" },
  { name: "X", key: "88" },
  { name: "Y", key: "89" },
  { name: "Z", key: "90" },
];

// SEARCH BAR
let filterAlphabetList = [];
const searchBar =
  '<input type="text" id="searchLetterInput" name="searchLetterInput" oninput="value=value.toUpperCase()">';
searchBarElement.innerHTML += searchBar;
const input = document.getElementById("searchLetterInput");

input.addEventListener("keyup", (event) => {
  filterAlphabetList = event.target.value.split("");

  if (!!filterAlphabetList.length) {
    root.classList.add("center");
    root.style.flexFlow = "row nowrap";

    root.innerHTML = filterAlphabetList
      .map((letter) => {
        const findLetter = alphabet.find(
          (character) => character.name === letter
        );

        if (!!findLetter) {
          return letterCard(findLetter);
        }
      })
      .join("");
  } else {
    root.classList.remove("center");
    root.style.flexFlow = "row wrap";
    root.innerHTML = createCards.join("");
  }
});

// KEY PRESS EVENTS
document.addEventListener("keydown", (e) => {
  if (input === document.activeElement) {
    return;
  }

  const letter = alphabet.find((letter) => letter.name === e.key.toUpperCase());

  if (!letter) {
    return;
  }

  // HIDE LETTERS NO PRESEED
  const lettersNoPresed = [];

  alphabet.forEach((letter) => {
    if (!(letter.name === e.key.toUpperCase())) {
      lettersNoPresed.push(document.querySelector(`#${letter.name}`));
    }
  });

  lettersNoPresed.forEach((letter) => letter.classList.add("hideCard"));

  setTimeout(() => {
    lettersNoPresed.forEach((letter) => letter.classList.remove("hideCard"));
  }, 1500);

  // PLAY SOUND
  const audio = document.querySelector(
    `audio[data-key="${e.key.toLowerCase()}"]`
  );

  console.log(audio);
});

const letterCard = (item) => `<div class='cardWrapper' id="${item.name}">
<img src='assets/images/${item.name.toLowerCase()}.png' />
<audio src="assets/audio/${item.name.toLowerCase()}.mp3"></audio>
    </div>`;

const filterLetters = (letter) => filterAlphabetList.includes(letter.name);
const createCards = alphabet.map(letterCard);

root.innerHTML = createCards.join("");
