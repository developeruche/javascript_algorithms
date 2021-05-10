const calculateMean = (data) => {
    let inSum = 0

    for (let i = 0; i < data.length; i++) {
        inSum += data[i]
    }

    let average = inSum/data.length 

    return average
}

const calculateMedian = (data) => {
    data.sort((a, b) => a - b) //Arranging in ascending other
    if(data.length%2 > 0){
        let lower_bound = Math.floor(data.length/2)
        let upper_bound = lower_bound + 2

        let meadian = (data[upper_bound] + data[lower_bound])/2

        return meadian
    }else{
        let median_position = data.length / 2
        return data[median_position]
    }
}

const calculateMode = (data) => {
    // This is the number of highest occurance
    let start_up_object = {}

    data.forEach(ele => {
        if(!start_up_object[ele]) start_up_object[ele] = 0;
        start_up_object[ele]++
    })

    // Now calculate the highest occuring

    for (let d in start_up_object){
        
    }
    console.log(start_up_object)
}


const MeanMedianMode = (data) => {

}


console.log(calculateMode([10,1,1,2,2,3,4,3,4,4,56,6,6,7,5,12,34,56,78,90,68]))
