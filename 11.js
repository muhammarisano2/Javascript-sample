
function muncul(data){
    console.log(data);
}
data.map((item)=>{
    
})
function proses(a,callback){
    callback(a);
}

setTimeout(function, delay)
// proses(10, muncul);

// promise

function proses2(){
    return new Promise((resolve, reject)=>{
        let nilai = 9;
        if(nilai> 8){
            resolve(nilai)
        }else{
            reject('nilai terlalu rendah')
        }
    })
}
proses2()
.then((res)=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})
// let dataBaru = proses2();
// console.log(dataBaru)