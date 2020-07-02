export default function printMe() {
    var abc = 'abc';
    if(abc=='aaa'){
        alert('oi');
    } else {
        chamadaX();
    }
    console.log('I get called from print.js!');
}

function chamadaX(){
    console.log('blabla');
}