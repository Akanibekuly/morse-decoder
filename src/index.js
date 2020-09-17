const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    res="";
    for(var i=0;i<expr.length;i+=10){
      var temp=expr.substr(i,10);
      if (temp=="**********"){
        res+=' ';
        continue;
      }
        var morse='';
        for(var j=0;j<temp.length;j+=2){
          if((temp.substr(j,2)=='10')){
            morse+='.';
          } else if ((temp.substr(j,2)=='11')) {
            morse+='-'
          }
        }
        // console.log(morse);
        res+=MORSE_TABLE[morse];
    }
    return res;
}

module.exports = {
    decode
}