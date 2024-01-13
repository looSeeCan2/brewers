const click = (brewersDataArg, grabMainSectionArg) => {
  grabMainSectionArg.addEventListener("click", (e) => {
    // console.log(e.target);

    let id = e.target.closest(".player").id;

    let player = brewersDataArg.find((el) => {
      return el.id == id;
    });

    console.log(player);
  });
  return grabMainSectionArg;
};

export default click;
