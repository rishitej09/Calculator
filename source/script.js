var flag=0
function clr(){
    document.getElementById('result').value=""
}
function send(val){
    if(flag==1){
        clr()}
        document.getElementById('result').value += val
}
function evaluate1() {
    var x = document.getElementById('result').value
    var y = eval(x)
    document.getElementById('result').value = y
    flag == 1
}

   


