/* 
    This algorithm would take in a sentence and some number and move the indivual 
    letters by the amont of  number input.
*/


const indexPrep = (al, __num) => {
    let alphabetHashInternal = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ]

    // Getting the index of the al
    al_index = alphabetHashInternal.indexOf(al)

    new_al_index = al_index + __num

    // Taking in some logic
    if (new_al_index > 25) {
        new_al_index = new_al_index - 25
    }

    return alphabetHashInternal[new_al_index]
}

const mainFunction = (_string, _num) => {
    // Formatting the input string.
    let formatted_string = _string.toLowerCase()

    let formatted_string__list = formatted_string.split("")

    // Preparing something more like and hash table.
    alphabetHash = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ]

    let result_list = []

    formatted_string__list.forEach(fStr => {
        result_list.push(indexPrep(fStr, _num))
    })
    
    console.log(result_list)
}

mainFunction("How are you doinz", 3)