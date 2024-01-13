import table from "../table.js";

const click = (brewersDataArg, sectionArg, callbackArg) => {
  sectionArg.addEventListener("click", (e) => {
    // console.log(e.target);

    let id = e.target.closest(".player").id;

    let clickedPlayer = brewersDataArg.find((el) => {
      return el.id == id;
    });

    callbackArg(clickedPlayer);
  });

  // return selectedPlayer;
};

export default click;
