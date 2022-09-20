var kullanicilar=[
    {email:"engindemiroğ@gmail.com", sifre:"12345"},
    {email:"kadertekin@gmail.com",sifre:"12345"}
]

var tivitler=[
    {email:"engindemiroğ@gmail.com",tivit:"Bugün hava çok güzel"},
    {email:"engindemiroğ@gmail.com",tivit:"Bugün hava çok güzel2"},
    {email:"kadertekin@gmail.com",tivit:"Tatil başlasın!!"}
    
]


var email=prompt("email?")
var sifre=prompt("sifre?")

function giris()
{
    if((email==kullanicilar[0].email && sifre==kullanicilar[0].sifre)||
    (email==kullanicilar[1].email && sifre==kullanicilar[1].sifre))
    {
        console.log(tivitler)

    }
    else{
        console.log("Kullanıcı adı veya şifre yanlış!!")
    }
}

giris(email,sifre)