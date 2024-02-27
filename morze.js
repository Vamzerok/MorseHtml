//json
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
  
  //converting the text to morse
  var output = ""
  function convertToMorse(){
      output = ""
      const input = document.getElementById('text').innerText.toLowerCase()
      const print = document.getElementById('morse')

      for(let i = 0; i < input.length; i++){
          const b = input[i]
          if(codes[b]){
              output += codes[b] + " " 
          }
      }

      print.innerText = "Morze kód: \n" + output
      
  }
/*
  function convertToMorseOnchange(){
    const input = document.getElementById('text').innerText.toLowerCase()
    const print = document.getElementById('morse')
      for(let i = 0; i < input.length; i++){
          const b = input[i]
          if(codes[b]){
              output += codes[b] + " " 
          }
      }
      
      print.innerText = "Morze kód: \n" + output
  }
  */


  //convert text to morse after enter press
  function enter(event){
      if(event.keyCode === 13){
          convertToMorse()
      }
  }
  
  //copy text to clipboard
  function copy(){
      navigator.clipboard.writeText(output)
  }
  
  