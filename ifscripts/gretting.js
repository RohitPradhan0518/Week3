// IfScripts
// hour = 10

// if(hour < 12){
//     console.log("Good Morning!!!")
// }else if(hour < 17){
//     console.log("Good Day!")
// }else{
//     console.log("Good Evening.")
// }

function getGreeting(hour){
    if(hour < 10){
        return "Good Morning!!!";
    }else if(hour < 17){
        return "Good Day!";
    }else{
        return "Good Evening.";
    } 
}
console.log(getGreeting(9))
console.log(getGreeting(12))
console.log(getGreeting(17))