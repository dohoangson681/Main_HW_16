/**
 * In ra cac so nguyen to <= input
 */
var x ;
function showRes(x) {
    x= Number(document.getElementById("inputB5").value) ; 
    
    var text = ""  ;
    for(var i = 2 ; i <= x ; i++){
        if(check(i)){
            text += i + " " ; 
        }
    }
    if(x < 2){
        document.getElementById("resultBai5").innerHTML = "Không có số nguyên tố nào nhỏ hơn 2.<br> Hãy nhập vào 1 số lớn hơn hoặc bằng 2"
    }else {
        document.getElementById("resultBai5").innerHTML = "Các số nguyên tố nhỏ hơn " + x + " là " + text ; 
    }
}
function check(x) {
    if(n < 2) return false ; 
    for(var i = 2 ; i*i <= x ; i++){
        if(x % i == 0) return false ;
    }
    return true ; 
}
document.getElementById("btnBai5").onclick = showRes ; 
