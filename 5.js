// for dan while
let container = 0
for(let i =0; i<10; i++){
    container += i;
}
// console.log(container)

//while
let text = ''
let i =1;
while (i < 10) {
    text += 'The number is ' + i +"\n";
    i++;
}
console.log(text)


let siswa = [2, 3, 4];
let umur = [
    {
        id : 1,
        nama : 'andi',
        umur : 30,
    },
    {
        id : 2,
        nama : 'bodi',
        umur : 40,
    },
    {
        id : 3,
        nama : 'beni',
        umur : 35,
    },
    {
        id : 4,
        nama : 'susi',
        umur : 16,
    }
];

// siswa.forEach(function(e){
//     console.log('ini adalah ' +e);
// })

let databaru = siswa.map(function(item){
   return item +2;
})
let umurFilter = umur.filter((e)=>{
    return e.umur<35
})
console.log(umurFilter)