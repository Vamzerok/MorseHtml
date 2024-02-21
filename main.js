var codes = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}


//const div = document.getElementById('div')


/*
for(const betu of input){
    for(const code of codes){
        if(input[betu] === codes.code){
            console.log()
        }
    }
}
*/

//checks the letter that it has a morse code or dont and returns true or false
function notHave(letter){

    for(const l of codes){
        if(codes[l] === letter){
            return true
        }
    }
    return false
}



//checks the letter if it is number or not
function isNumber(number){

}
/* main function

goes trough the input's each letter
checks it has a morse or dont
print the morse code 

*/
function translate(){
    const input = document.getElementById('input').value
    console.log(input)
    //String(input)

    for(const l of input){

        //console.log(input[l])
        for(const c of Object.keys(codes)){
            //console.log(codes[c])
            if(input[l] === Object.keys(codes).c){
                console.log(codes[c])
            }
        }
    }
}

function main(){
    translate()
}