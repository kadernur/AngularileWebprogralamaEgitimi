const dizi=[1,2,3,4]

const kareDizisi=[]

dizi.forEach(sayi=>{
    console.log(sayi)
    kareDizisi.push(sayi*sayi)

})

console.log(kareDizisi)

//map yeni bir dizi oluşturabiliriz.

const mapDizi= dizi.map(sayi=>sayi*3)

console.log(mapDizi)

//veri geldiğinde değiştirip baska yere koymak içinde kullanılır:map


const filtreliDizi=dizi.filter(sayi=>sayi>2)
console.log(filtreliDizi)


//reduce ile kümületif toplama işlemi yapılır.

const toplam =dizi.reduce((acc,sayi)=>{
    return acc+sayi

},10)

console.log(toplam)

