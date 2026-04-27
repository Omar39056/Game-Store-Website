// function switchtoar(){
//     localStorage.setItem("lang", "ar");
//     console.log('wtiched to ar');
// }
function switchtoen(){
    var x =  document.getElementById("language").value;
    if(x=='english'){
        localStorage.setItem("lang", "en");
    }
    else {
        localStorage.setItem("lang", "ar");

    }
        

}