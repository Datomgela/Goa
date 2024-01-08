/*
მთავარი ლოგიკა არის ის რომ მომხმარებელი 
ეჯიბრება კომპიუტერს თამაშში სახელად dice-roll
სადაც ვინც უფრო მაღალ ქულას გააგორებს ისე იგებს

1) საიტზე შესვლის დროს მომხმარებელს ვთხოვოთ სახელი

  ა) გამოვიყენოთ prompt ფუნქცია

2) როდესაც მომხმარებელი დააჭერს ხელს roll ღილაკს 
   მაშინ უნდა დავაგენერიროთ შემთხვევითი რიცხვები
   კომპიუტერისთვის და მომხარებლისთვის

   ა) გამოვიყენოთ addEventListener რომ დავაფიქსიროთ 
      დაკლიკების მოვლენა.

   ბ) დაკლიკების შემდეგ გამოვიყენოთ მათემატიკური method
      სახელად Math.random() იმისთვის რომ მომხარებელს და 
      კომპიუტერს შევუქმნათ შემთხვევითი რიცხვი

   გ) დაგენერირების შემდეგ შევინახოთ ორივე 
      მონაცემი ცვლადებში

3) თუ მოიგებს მომხმარებელი მოემატოს ქულა მომხმარებელს 
  თუ კომპიუტერი მოემატოს კომპიუტერს

   ა) შევქმნათ ცვლადები კომპიუტერისთვის და მომხარებლისთვის

   ბ) შევამოწმოთ if-else გამოყენებით რომლის ქულა არის უფრო მეტი.

   გ) მოგებულს კი მოვუმატოთ თამაშის მთლიანი ქულა და გამოვუტანოთ
      მომხარებელს UI ში

4) თუ მომხარებელი დააწკაპებს ხელს reset ღილაკს მაშინ თამაშის ქულები გავანულოთ

    ა) გამოვიყენოთ addEventListener რომ დავაფიქსიროთ 
       დაკლიკების მოვლენა.

    ბ) ცვლადები რომლებიხ შევქმენით თამაშინ ქულების შესანახად გავანულოთ და
      აგრეთვე გავანულოთ შემთხვევითი რიცხვისთვის შექმნილი ცვლადები და გამოვუტანოთ მომხარებელს UI ში.
*/

const userFinalScoreHtml = document.getElementById('user-game-score');
const computerFinalScoreHtml = document.getElementById('computer-game-score');
const playerNameHtml = document.getElementById('player-name');
const playerScoreHtml = document.getElementById('player-score');
const computerScoreHtml = document.getElementById('computer-score');
const rollBtn = document.getElementById('roll-btn');
const resetBtn = document.getElementById('reset-btn');

let randomPlayerNum = 0;
let randomComputerNum = 0;

// Prompt for player name
let playerName = prompt("Enter your name:");
// Check if the user clicked Cancel or entered an empty name
if (!playerName) {
    playerName = "Anonymous";
}
playerNameHtml.textContent = playerName;

rollBtn.addEventListener("click", function(){
   randomPlayerNum = Math.floor(Math.random() * 7);
   randomComputerNum = Math.floor(Math.random() * 7);

   playerScoreHtml.textContent = randomPlayerNum;
   computerScoreHtml.textContent = randomComputerNum;

   if (randomPlayerNum > randomComputerNum) {
      userFinalScoreHtml.textContent = +userFinalScoreHtml.textContent + 1;
   } else if (randomPlayerNum < randomComputerNum) {
      computerFinalScoreHtml.textContent = +computerFinalScoreHtml.textContent + 1;
   }

   console.log(userFinalScoreHtml.textContent + " : " + computerFinalScoreHtml.textContent);
});

console.log(randomPlayerNum, randomComputerNum);

resetBtn.addEventListener("click", function(){

   userFinalScoreHtml.textContent = 0;
   computerFinalScoreHtml.textContent = 0;

   console.log("Scores reset to 0");
});