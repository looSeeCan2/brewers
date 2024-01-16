const click = (brewersDataArg, sectionArg, callbackArg) => {
  sectionArg.addEventListener("click", (e) => {
    // console.log(e.target);

    let id = e.target.closest(".player").id;

    let clickedPlayer = brewersDataArg.find((el) => {
      return el.id == id; /// == the id attribute is a  string not a number
    });

    callbackArg(clickedPlayer);
  });

  // return selectedPlayer;
};

export default click;
