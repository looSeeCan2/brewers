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
///TODO: fixed this to make it more reusable by passing in any data that i want.
/// changed some names to reflect reusable component
