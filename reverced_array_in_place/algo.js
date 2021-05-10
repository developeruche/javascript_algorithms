/* 
    This function would take an array (e.g. let arr1 = [1, 2, 3, 4, 5, 6, 7])
    would return [7, 6, 5, 4, 3, 2, 1]
*/

const arr_reverse_in_place = (arr) => {
    for (let i = 0; i >= arr.length; i++){
        let tempo_i = arr[i]
        arr[i] = arr[arr.length  -1 - i]
        console.log(tempo_i)
        // arr[-1 + arr.length - i] = tempo_i
    }
    console.log(arr)
}




// STEP ONE: LOOP through the array
// STEP TWO: While still looping get the intial and replace it with it nagative



const arr_reverse_in_place_two = (list) => {
    // Looping
    console.log("Looping")
    for (let il = 0; il < list.length; il++) {
        let element = list[il]; //This is temp variable
        list[il] = list[list.length -1 + il]        
    }

    console.log(list)
}

arr_reverse_in_place_two(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
