/**
 * Tinh giai thua
 */
var x ; 
function showRes(x) {
    x = Number(document.getElementById("inputGT").value) ; 
    var gT ; 
    gT = sumGT(x) ; 
    document.getElementById("resultBai3").innerHTML = 
    "Giai thừa của " + x + " là " + gT ; 
}
function sumGT(x) {
    var sum = 1 ; 
    for(var i = 1 ; i <= x ; i++){
        sum *= i ; 
    }
    return sum ; 
}
document.getElementById("btnBai3").onclick = showRes ; 