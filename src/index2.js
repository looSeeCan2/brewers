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
console.log(brewersData);

///Using elements other than table to display data

const grabMain = document.querySelector("main");

for (let element of brewersData) {
  const createSection = document.createElement("section");
  for (let key in element) {
    grabMain.appendChild(createSection);

    if (key === "picture") {
      const img = document.createElement("img");
      img.src = element.picture;
      createSection.appendChild(img);
    } else {
      // const p = document.createElement("p");
      // p.textContent = `${key}: ${element[key]}`;
      // createSection.appendChild(p);
    }
  }
}
