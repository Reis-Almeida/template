const d = [
    {q:'b', w:121212},
    {q:'c', w:121213},
    {q:'a', w:121211},
]

var s = new Date();
var n = s.getTime();

function a(a, b) {
    return a.w < b.w ? 1: a.w > b.w ? -1 : 0 
}

d.sort(a)

console.log(undefined == undefined)