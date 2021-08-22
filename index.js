// Soal Pertama
let tampung_ganjil  = [];
let tampung_genap   = [];

for(let i=0; i<=100; i++){
    if(i%2==0){
        tampung_genap = [...tampung_genap, i];
    }else{
        tampung_ganjil = [...tampung_ganjil, i];
    }
}

// console.log({tampung_genap, tampung_ganjil});

// Soal Kedua

let tampung_prima = [];
for(let i=1; i<=100; i++){
    let bill = 0;
    for(let a=1; a<=i; a++){
        if(i%a == 0){
            bill = bill+1
        }
    }

    if(bill == 2){
        tampung_prima = [...tampung_prima, i];
    }
}
// console.log(tampung_prima);


// Soal No 3

let tampung_fibonancci = [];
let n1 = 0;
let n2 = 1;

for(let i=0; i<=10; i++){
    if(i===0 || i===1){
        tampung_fibonancci = [...tampung_fibonancci, i];  
    }else{
        let total = n1+n2;
        tampung_fibonancci = [...tampung_fibonancci, total];
        n1 = n2;
        n2 = total;
    }
}

// console.log(tampung_fibonancci);


// Soal No 4

let uangAndi = 750000;
let hasil = "";
for(let i=1; i<=12; i++){
    let bunga = 0;
    let sisih = 0;
    if(i>1){
        bunga = uangAndi*6/100;
        if(uangAndi+bunga > 800000){
            sisih = 800000*3/100;
        }else{
            sisih = (uangAndi+bunga)*3/100;
        }
    }

    hasil += `Tabungan Awal : ${uangAndi.toFixed(2)} \n Bunga : ${bunga.toFixed(2)} \n Sisih : ${sisih.toFixed(2)} \n Uang Bulang ${i} : ${((uangAndi+bunga)-sisih).toFixed(2)} \n------------------\n`;
    uangAndi = (uangAndi+bunga)-sisih;
}

// console.log(hasil);

// Soal No 5

const dataArray         = [1,4,5,3,2,5,3,4,8,5,4,3,6,0,4,3,2,1,5,9,9,4,3,1,3,0,2,2,4,6,2,4,7,4];
let dataArrayTampung    = [];
let dataArrayCount      = "";

for(let i=0; i<dataArray.length; i++){
    let ketemu = false;

    for(let a=0; a<dataArrayTampung.length; a++){
        if(dataArray[i] == dataArrayTampung[a]){
            ketemu = true;
        }
    }

    if(!ketemu){
        dataArrayTampung = [...dataArrayTampung, dataArray[i]];

        let totalKetemu = 0;
        for(let e=0; e<dataArray.length; e++){
            if(dataArray[i] == dataArray[e]){
                totalKetemu = totalKetemu+1;
            }
        }

        dataArrayCount += `Angka ${dataArray[i]} sebanyak ${totalKetemu} \n`;
    }
}

console.log(dataArrayTampung);
console.log(dataArrayTampung.length);
console.log(dataArrayCount);