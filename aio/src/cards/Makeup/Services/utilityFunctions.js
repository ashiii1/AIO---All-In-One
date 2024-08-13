export const getPriceRangedData = (data, priceRange) => {
    if (priceRange > 0) {
        return data.filter(item => item.price < priceRange)
    }
    return data
}

export const getSortedData = (data, sortType) => {
    if (sortType === "low-to-high") {
        return [...data].sort((a, b) => a['price'] - b['price'])
    } else if (sortType === "high-to-low") {
        return [...data].sort((a, b) => b['price'] - a['price'])
    }
    return data;
}

export const getRatingSortedData = (data, rating) => {
    if (rating !== 0) {
        return data.filter(item => item.rating >= rating)
    }
    return data
}

export const getFilteredData = (data, state, dispatch) => {

    let filteredData = [...data];
    if (state.sortByFilters.sortByCategory.length !== 0) {
        filteredData = filteredData.filter(item => state.sortByFilters.sortByCategory.includes(item.categoryName))
    }
    if (state.sortByFilters.sortByBrands.length !== 0) {
        filteredData = filteredData.filter(item => state.sortByFilters.sortByBrands.includes(item.brand))
    }
    // if (state.sortByFilters.sortBySubCategory.length !== 0) {
    //     filteredData = filteredData.filter(item => state.sortByFilters.sortBySubCategory.includes(item.subCategoryName))
    // }
    if (state.subCategory !== null) {
        filteredData = filteredData.filter(item => item.subCategoryName === state.subCategory)

    }

    if (state.tag !== null) {
        filteredData = filteredData.filter(item => item.group === state.tag)

    }

    return filteredData;
}