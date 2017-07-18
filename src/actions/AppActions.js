export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        payload: data
    }
}

export function setCityFilter(city) {
    return {
        type: 'SET_CITY_FILTER',
        payload: city
    }
}