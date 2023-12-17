

export function filterData(searchTxt, allrestData) {
    const filteredData = allrestData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchTxt)
    );
    return filteredData;
  }