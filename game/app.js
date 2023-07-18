document.addEventListener("DOMContentLoaded", () => {
  // card option
  const cardArray = [
    {
      name: "spongebob",
      img: "images/SpongeBob_Squar.png",
    },
    {
      name: "spongebob",
      img: "images/SpongeBob_Squar.png",
    },
    {
      name: "patrick",
      img: "images/patrick-start.png",
    },
    {
      name: "patrick",
      img: "images/patrick-start.png",
    },
    {
      name: "krabs",
      img: "images/Mr._Krabs.png",
    },
    {
      name: "krabs",
      img: "images/Mr._Krabs.png",
    },
    {
      name: "puff",
      img: "images/Mrs._Puff.png",
    },
    {
      name: "puff",
      img: "images/Mrs._Puff.png",
    },
    {
      name: "sandy",
      img: "images/Sandy_Cheeks.png",
    },
    {
      name: "sandy",
      img: "images/Sandy_Cheeks.png",
    },
    {
      name: "garry",
      img: "images/garry.png",
    },
    {
      name: "garry",
      img: "images/garry.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //   create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/colorfull.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // check your matches
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    let benar = new Audio(`/game/sound/benar.mp3`);
    let salah = new Audio(`/game/sound/salah.mp3`);
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      // alert("you found a match");
      benar.play();
      cards[optionOneId].setAttribute("src", "images/blank-white.jpg");
      cards[optionTwoId].setAttribute("src", "images/blank-white.jpg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/colorfull.jpg");
      cards[optionTwoId].setAttribute("src", "images/colorfull.jpg");
      // alert("Sorry, try Again");
      salah.play();
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You Found Them All";
      const menu = document.querySelector(".menu");
      menu.classList.add("open_menu");
    }
  }

  // flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
