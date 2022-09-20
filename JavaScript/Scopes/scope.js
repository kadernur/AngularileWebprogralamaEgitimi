
var sayi=10;
var sehir="Van";
sayi=11;
sehir="istanbul"

var sehir="Adana"
//var ile aynı isimde farklı bir değişken tanımayabiliriz. buda problem oluşturur.
//burada devreye let keywordü girecektir.

let il="Ankara"
il="bursa"

function mesajVer()
{
    console.log(sehir)
}
console.log(sayi)
console.log(sehir);
console.log(il)

//const sabit değeri ifade eder. değişmeyecek veriler için kullanılır.
//burada değer ve referans kavramı önemli
//değer tiplerde değişim olmaz , fakat referans tiplerde değişime izin verir.

const soyad="demiroğ"
//soyad="demir" // izin vermez

const sehirler=["van","Adana"]
sehirler.push("izmir")
console.log(sehirler)
