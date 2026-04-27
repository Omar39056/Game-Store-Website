
function fun (i) {
    if (document.getElementById("an"+i).style.display == "none"){
        document.getElementById("an"+i).style.display = "block";
        document.getElementById("ic"+i).style.transform = "rotate(180deg)";
    }
    else{
        document.getElementById("an"+i).style.display = "none";
        document.getElementById("ic"+i).style.transform = "rotate(90deg)";
    }
}