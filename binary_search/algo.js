const binary_search = (list, key) => {
    // Building the function with recurion
    let middle_index = Math.floor(list.length / 2);

    let middle_ele = list[middle_index];

    console.log(middle_index, middle_ele)

    // Defining the base case
    if(middle_ele === key){
        return true
    }else if(middle_ele < key && list.length > 1) {
        // Discarding the lower half of the array
        return binary_search(list.splice(middle_index, list.length), key)
    }else if (middle_ele > key && list.length > 1){
        return binary_search(list.splice(0, middle_index), key)
    }else{
        return false
    }


}


console.log(binary_search([0,1,2,3,4,5,6,7,8,9,10], 10))

