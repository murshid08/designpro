function bclick(val){
    document.getElementById("screen").value+=val
}
function clearlayDisplay(){
    document.getElementById("screen").value=""
}
function equalto(){
    var inp=document.getElementById("screen").value
    var result=eval(inp)
    document.getElementById("screen").value=result
}