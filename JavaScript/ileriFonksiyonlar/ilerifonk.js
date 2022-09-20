 var selamFonksiyonu=function selam()
{
    console.log("Selamlar")
}

selamFonksiyonu();

//()=> fonksiyon olduğunu ifade eder.

var selamFonksiyonu2=()=>console.log("Selamlar merhaba")

selamFonksiyonu2();

var selamFonksiyonu3=(mesaj)=>{
    console.log(mesaj)
}

selamFonksiyonu3("Merhaba Dünya");


var topla=(sayi1,sayi2)=>{
    return sayi1+sayi2
}

let toplam=topla(3,4)
console.log(toplam)
