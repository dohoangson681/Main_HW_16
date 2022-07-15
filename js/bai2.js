var x ; 
var n ; 
function resultB2(x , n) {
    x = Number(document.getElementById("inputX").value) ; 
    n = Number(document.getElementById("inputN").value) ;
    var sum = 0 ; 
    for(var i = 1 ; i <= n ; i++){
        sum += Sum(x , i) ; 
    }
    console.log(sum) ; 
}
function Sum(x , n) {
    return Math.pow(x,n) ; 
}
document.getElementById("btnBai2").onclick = resultB2 ; 