import click from "./utils/click.js";
import table from "./table.js";
import ul from "./ul.js";

const main = async (player) => {
  const fetchData = async () => {
    try {
      const response = await fetch("./data.json");
      console.log(response);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const brewersData = await fetchData();
  console.table(brewersData);

  ///Using elements other than table to display data

  const grabMain = document.querySelector("main");
  const grabMainSection = document.getElementById("main-section");
  const grabMainSection2 = document.getElementById("main-section2");
  const grabMainSection3 = document.getElementById("main-section3");

  ///for each
  brewersData.forEach((player, index) => {
    const createDiv = document.createElement("div");
    //asign id to div
    // createDiv.id = `${player.id}`;
    createDiv.id = player.id;

    //assign class to div
    createDiv.className = "player";

    const createImg = document.createElement("img");
    createImg.src = player.picture;

    createDiv.appendChild(createImg);
    grabMainSection.appendChild(createDiv);

    ///in each div with the picture, I want to add id, firstName, lastName
    for (let key in player) {
      // console.log(key);
      if (key === "id" || key === "firstName" || key === "lastName") {
        const createP = document.createElement("p");
        createP.textContent = player[key];
        createDiv.appendChild(createP);
      }
    }
  });

  ///click
  grabMainSection.addEventListener("click", (e) => {
    // console.log(e.target);

    let id = e.target.closest(".player").id;

    let clickedPlayer = brewersData.find((el) => {
      return el.id == id; /// == the id attribute is a  string not a number
    });
    table(clickedPlayer);
    ul(clickedPlayer, grabMainSection3);
  });

  // return selectedPlayer;
  ///test
};

main();
