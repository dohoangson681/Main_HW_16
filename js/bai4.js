var para ; 
function creatDiv(para) {

    for(var i = 1 ; i <= 10 ; i++ ){
        para = document.createElement("div") ;
        para.innerHTML = "Div " + i ;  
        document.getElementById("content").appendChild(para) ; 
        if(i % 2 == 0){
            para.style.background = "red" ;
            para.style.margin = "10px 0px" ;
            para.style.padding = "10px 30px" ;
            para.style.color = "white" ;

        }else {
            para.style.background = "blue" ;
            para.style.margin = "10px 0px" ;
            para.style.padding = "10px 30px" ;
            para.style.color = "white" ;
        }
    }
}
document.getElementById("btnBai4").onclick = creatDiv ; 
