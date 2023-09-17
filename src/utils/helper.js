

export function filterData(searchTxt, allrestData) {
    const filteredData = allrestData.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchTxt)
    );
    return filteredData;
  }