/* 
The function take a string as it parameter and return true if the string a same when it is spelt same way frontward and backward
*/

const Palindrome = (pWord) => {
    /* 
        Problem to solve 
        1. Turn every word to lowercase
        2. remove all punctuation
    */

    //Turning every word to lowercase
    pWord = pWord.toLowerCase("")
    let charactersList = pWord.split("");

    console.log(charactersList, "This is the first stage")

    // Forming the list of Charaters That is accepted in the function which is all the lowercase alphabet.
    let validCharaters = "abcdefghijklmnopqrstuvwxyz".split("")

    console.log(validCharaters, "This the second stage.")


    // I would be reverceing all the string that are not letter so in would  get a comfirmation when every the word matches frontword and back  word.
    let letterArr = [] //This are the letters which are present in the letter and are valid. 

    console.log(letterArr, "This is the third stage")


    // Looping through the array and pushing into the letterArr
    charactersList.forEach(char => {
        if(validCharaters.indexOf(char) > 1) {
            letterArr.push(char)
        }
    })

    console.log(letterArr, "This is the last stage")

    // Next thing to do is to convert the new letter array into a string
    // and compare it back and front. 

    if (letterArr.join("") === letterArr.reverse().join("")) {
        return true
    }else {
        return false
    }
    

} 

// Testing the function
console.log(Palindrome("Madam I'm Adam"))