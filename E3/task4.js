let a = 4
let b = 14
const intervalid = setInterval(function (){
    console.log(a+=1)
}, 1000)
setTimeout(function (){
    clearInterval(intervalid)
}, (b - a + 2) * 1000)