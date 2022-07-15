function showResult() {
     var num = min() ; 
     document.getElementById("resultBai1").innerHTML = "Số nguyên dương nhỏ nhất để 1 + .. + n > 1000 là " + num ; 
}
document.getElementById("btnBai1").onclick = showResult ; 
function min() {
    for(var i = 2 ; i <= 1000 ; i++){
        var sum = 0 ; 
        sum = i*(1+i) / 2 ; 
        if(sum > 1000) return i ; 
    }
}
