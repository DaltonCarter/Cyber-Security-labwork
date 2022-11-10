let source =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let theSource =['t', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's']

let cipher = (str) => {
    str.toLowerCase()
    let result = []
    for(i = 0; i < str.length; i++){
        for(j = 0; j < source.length; j++){
            if(str[i] === source[j]){
                result.push(theSource[j])
            }
        }
    }
    return result.join("")
}

console.log(cipher('Ilovecryptography'))

let deCipher = (str) => {
    str.toLowerCase()
    let result = []
    for(i = 0; i < str.length; i++){
        for(j = 0; j < theSource.length; j++){
            if(str[i] === theSource[j]){
                result.push(source[j])
            }
        }
    }
    return result.join("")
}

console.log(deCipher('ehoxvkrimhzktiar'))