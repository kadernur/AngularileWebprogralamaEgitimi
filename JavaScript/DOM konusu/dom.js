
//inner html p içine mtin yazdığımız yeri temsil eder. 
document.getElementById("mesaj").innerHTML="Kader Nur Tekin: 1999"


var intro1=document.getElementById("intro1");
var mesaj=document.getElementById("mesaj");
mesaj.innerHTML=intro1.innerHTML;

//şehileri sıralamak

// var tumListeler=document.getElementsByTagName("ul");
// var sehirler= tumListeler[0]
// tumElemanlar=sehirler.getElementsByTagName("li")

// for(i=0;i<tumElemanlar.length;i++)
// {
//     alert(tumElemanlar[i].innerHTML)
// }


//css için dom manipülasyonu

var classElamanlari=document.getElementsByClassName("intro1");

alert(classElamanlari[1].innerHTML);


var queryElemanlari=document.querySelectorAll("p.intro1")
alert(queryElemanlari.length)


var isimElemanları=document.getElementsByName("musteriAdi")
alert(isimElemanları[0].value)

//event ekleme
//mouseover:üzerine gelindiğinde
var event=document.getElementById("helin").addEventListener("click",rengiDegistir)
function rengiDegistir()
{
    document.getElementById("div1").style.color="red";
    var isimElemanları=document.getElementsByName("musteriAdi");
    isimElemanları[0].value="Sıla"
}


var node=document.getElementById("agac");
alert(node.childNodes[0].nodeValue)

var baslik=document.createElement("h2");
var node=document.createTextNode("merhaba javaScript")
baslik.appendChild(node)

var div1=document.getElementById("div1")
var p2=document.getElementById("p2")
div1.insertBefore(baslik,p2)

alert("p2 siliniyor")
div1.removeChild(p2)

//replacment

alert("Değiştiriliyor")
var p1=document.getElementById("p1")
div1.replaceChild(baslik,p1)