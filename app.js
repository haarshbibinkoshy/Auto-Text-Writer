const text =`hi, just checking if this works or not.`
let index = 0
function autoWrite() {
    document.body.innerText=text.slice(0,index)

index++
if (index> text.length-1) {
    index=0
}
}
setInterval(()=>{
    autoWrite()
}, 200);