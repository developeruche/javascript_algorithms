// This algorithm is used for  checking if a word ccan be formed 
// From a larger piece of text returning True if it is possible and 
// If not it would return false.

const harmlessRansomNote = (note, magazineText) => {

    // Change  the note abd magazine text to an array of words
    let noteList = note.split(" ")
    let magazineList = magazineText.split(" ")

    // Applying a method called the hash table method
    let magazineObject = {};

    // Building the hash table for magazine Object
    magazineList.forEach(word => {
        if(!magazineObject[word]){
            magazineObject[word] = 0;
        }
        magazineObject[word]++
    });

    let NoteIsPossible = true

    // Comparing the note words to tha hash table 
    noteList.forEach(word => {
        if(magazineObject[word]){
            // This means the word in present in the hash table (So now i would decrement the count of current word)
            magazineObject[word]--
            if(magazineObject[word] < 0){
                NoteIsPossible = false
            }
        }else{
            // In this case the word in not in the hash table so i would return false
            NoteIsPossible = false
        }
    })

    // Return the variable the would show that the note can be complied
    return NoteIsPossible
}

console.log(harmlessRansomNote("this is a not", "Now this is a note from a magazine, testing out the algorithm."))
