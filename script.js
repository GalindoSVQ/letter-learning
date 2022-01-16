const root = document.getElementById("root");

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

const letterCard = (letter) => {
  return (
    <div>
      <p>{p.name}</p>
    </div>
  );
};

root.innerHTML = alphabet.map((letter) => letter);
