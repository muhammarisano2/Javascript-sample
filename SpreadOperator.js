// Spread Operator
let warna = ['biru', 'merah', 'kuning'];
let siswa = {
    nama : 'muhammad risano',
    kelas : 10,
}
let siswaBaru = {...siswa}
// let siswa2 = [...siswa];
// mutable
siswa.kelas = 12;
// console.log(siswa);
// console.log(siswaBaru);

let warnaBaru = warna;
warnaBaru[0] = 'abu-abu'
// console.log(warnaBaru);
// console.log(warna);
// immutable
let pakaian = 'baju';
let celana = pakaian;
celana = 'jeans';
// console.log(pakaian);
// console.log(celana)

// mengganbungkan 2 array
let warna1 = ['biru', 'merah', 'kuning'];
let warna2 = ['hijau', 'putih'];
let warnaGabung = [...warna1, ...warna]
// console.log(warnaGabung)

// menggabungkan 2 object
let siswa2 = {
    nama : 'muhammad risano',
    kelas : 10,
}
let siswa3 = {
    nama : 'risano akbar',
    kelas : 12,
    email: 'muhammadrisano akbar'
}
let siswa4 = {
    ...siswa2,
    kelas: 13
};
// console.log(siswa4)

function jumlah(...data){
    let container = 0
    data.map((item)=>{
        container += item; 
    })
    return container;
}
console.log(jumlah(4,5,2));