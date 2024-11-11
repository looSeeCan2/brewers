const brewersData = async () => {
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
// const fetchedData = await fetchData();

export default brewersData;
