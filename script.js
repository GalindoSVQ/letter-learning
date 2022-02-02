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

// LETTERS
document.addEventListener("keydown", (e) => {
  if (input === document.activeElement) {
    return;
  }

  const letter = alphabet.find((letter) => letter.name === e.key.toUpperCase());

  if (!letter) {
    return;
  }
});

const letterCard = (item) => `<div class='cardWrapper'>
<img src='assets/images/${item.name}.png' />
    </div>`;

const createCards = filterAlphabetList.length
  ? alphabet
      .filter((letter) => {
        return filterAlphabetList.includes(letter.name);
      })
      .map(letterCard)
  : alphabet.map((letter) => {
      return letterCard(letter);
    });

root.innerHTML = createCards.join("");

const handleChange = (event) => {
  filterAlphabetList = event.target.value.split("");
  root.innerHTML = createCards.join("");
};
input.onkeydown = handleChange;
