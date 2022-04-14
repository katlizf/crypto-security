
const encryptor = str => {
    let encrypted = ''

    for (let i = 1; i < str.length; i++) {
        encrypted += String.fromCharCode(str.charCodeAt(i) + Number(str[0]))
    }
    return encrypted
 } 


// const decryptor = msg => {
//     let decrypted = []

//     return decrypted.join('')
// }

console.log(encryptor('hello'))