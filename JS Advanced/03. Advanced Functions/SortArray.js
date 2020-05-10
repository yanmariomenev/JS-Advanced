function sortArray(array, criteria) {
    console.log(array
        .sort((a, b) =>
            criteria == "asc" ? a - b : b - a));
}

sortArray([14, 7, 17, 6, 8], 'asc');

sortArray([14, 7, 17, 6, 8], 'desc');