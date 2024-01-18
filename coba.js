var mood = "happy"
if ( mood == "sad" ) {
    console.log("hari ini aku bahagia!")
} else {
    console.log("jangan ganggu akuu")
}

var pasar="close"
var minuteRemainingToOpen = 20
if (pasar == "open"){
    console.log("saya akan beli telur")

} else if (minuteRemainingToOpen <=20){
    console.log("minimarket , saya tungguin")
} else {
    console.log("minimarket masih lama , pulang aja deh")
}

var buttonPushed = 3;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }}

