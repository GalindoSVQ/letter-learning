const root = document.getElementById("root");
const searchBarElement = document.getElementById("searchBar");

const alphabet = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
  { name: "G" },
  { name: "H" },
  { name: "I" },
  { name: "J" },
  { name: "K" },
  { name: "L" },
  { name: "M" },
  { name: "N" },
  { name: "Ñ" },
  { name: "O" },
  { name: "P" },
  { name: "Q" },
  { name: "R" },
  { name: "S" },
  { name: "T" },
  { name: "U" },
  { name: "V" },
  { name: "W" },
  { name: "X" },
  { name: "Y" },
  { name: "Z" },
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

// LETTERS
document.addEventListener("keydown", (e) => {
  if (input === document.activeElement) {
    return;
  }

  const letter = alphabet.find((letter) => letter.name === e.key.toUpperCase());

  if (!letter) {
    return;
  }

  // ADD SOUND
});

const letterCard = (item) => `<div class='cardWrapper'>
<img src='assets/images/${item.name}.png' />
    </div>`;

const filterLetters = (letter) => filterAlphabetList.includes(letter.name);
const createCards = alphabet.map(letterCard);

root.innerHTML = createCards.join("");
