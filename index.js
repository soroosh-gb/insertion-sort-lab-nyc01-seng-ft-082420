// Begin by implementing a function to find the minimum in an array and remove that element.
function findMinAndRemove(array){
    let min = array[0];
    let minIndex = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
            minIndex = i;
        }
    }
    array.splice(minIndex, 1)
    return min;
}


// Move on to implement the selection sort function, and call on the minAndRemove function in its implementation.
function selectionSort(array){
    let newMin;
    let sorted = [];
    while(array.length != 0){
        newMin = findMinAndRemove(array)
        sorted.push(newMin)
    }
    return sorted;
}
