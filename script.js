function disp(val){
    document.getElementById("result").value += val
}

function solve(){
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value=y
}

function clr(){
    document.getElementById("result").value=" "
}

function delOne(){
   let x = document.getElementById("result").value;
   y = x.slice(0,-1)
   document.getElementById("result").value = y
}

function fact(){
    var n = document.getElementById("result").value
    let ans = 1
    if(n == 0 || n == 1){
        ans = 1
    }else{
        for(var i = n; i >= 1; i--){
            ans = ans * i
        }
        //return ans
        console.log(ans)
    }
     document.getElementById("result").value = ans ;
}

function per(){
    var x = document.getElementById('result').value
    var temp = eval(x)
    var amp = temp * 100 + "%"
    document.getElementById("result").value = amp
}