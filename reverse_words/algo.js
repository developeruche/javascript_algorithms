/* 
This algorithm would take in a string And return the reverse of the indiviual words
*/

const r_sentences = (string_sentence) => {
    // First split the sentence to an aray of indiviual word.
    let forward_array = string_sentence.split(" ")
    let reversed_array = []

    

    forward_array.forEach(arr => {

    })
    // Looping through the forward array and appending the reversed
    for(let i = forward_array.length - 1 ; i >= 0; i--){
        // This would counted from 9 to zero
        reversed_array.push(forward_array[i])
    }

    // Converting the array to string

    let reversed_string = reversed_array.join(" ")

    console.log(reversed_string)
}

r_sentences("This is my house")