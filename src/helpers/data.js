const data = async (item) => {
  try {
    const response = await fetch(item);
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export default data;
