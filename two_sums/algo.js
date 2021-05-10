const two_sum_testing = (num_array, sum) => {
    let result = []
    // Filling the hash table
    num_array.forEach(ele_1 => {
        num_array.forEach(ele_2 => {
            if((ele_1 + ele_2) === sum){
                result.push([ele_1, ele_2])
            }
        })

    });

    console.log(result)
}

// two_sum_testing([1,2,3,4,5,6,7], 8)

const two_sum = (num_array, sum) => {
    let pair = []
    let hash_table = []

    for (let i = 0; i < num_array.length; i++){
        let current_num = num_array[i]
        let counter_part = sum - current_num
        if(hash_table.indexOf(counter_part) !== -1){
            pair.push([current_num, counter_part])
        }
        hash_table.push(current_num)
    }

    return pair
}

console.log(two_sum([1,2,3,3,4,4,5,5,6,7], 8))