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

function kullaniciVarmi(email,sifre){
    console.log(email)
    console.log(sifre)
    for(i=0;i<kullanicilar.length;i++)
    {
        if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre)
        {
            return true
        }
    }
    return false
}

function giris()
{
    if(kullaniciVarmi(email,sifre))
    {
        console.log(tivitler)

    }
    else{
        console.log("Kullanıcı adı veya şifre yanlış!!")
    }
}

giris(email,sifre)