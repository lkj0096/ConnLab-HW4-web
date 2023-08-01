const btn = document.getElementById("button1");

let input = document.getElementById("input1");

btn.onclick = function (){
    if (input.value == "Ntust"){
        alert("Typed in \"Ntust\"\n jump to NTUST website");
        window.location.href = "https://www.ntust.edu.tw/";
    }else {
        alert("Please Type in \"Ntust\"");
    }
}