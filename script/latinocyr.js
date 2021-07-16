function getClip(){
    navigator.clipboard.readText().then(clipText => cliboard = clipText);
}
getClip();
document.getElementById('pastegrab').onclick = function pastegrab(){
    getClip();
    if (document.getElementById('textbox').value == "" && cliboard !== ""){
        document.getElementById("textbox").value = cliboard;
        document.getElementById('pastegrab').value = "Zgrabi";
    }  
    else{
        var copyText = document.getElementById("textbox");
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand("copy");

        document.getElementById('textbox').value = "";
        document.getElementById('pastegrab').value = "Nalepi"; 
    }
};

document.getElementById('osvezi').onclick = function osvezi(){
    location.reload();
};

document.getElementById('all2low').onclick = function all2low(){
    if (document.getElementById('textbox').value != ""){
        var str = document.getElementById('textbox').value;

        str = str.toLowerCase();

        document.getElementById('textbox').value = str;
    }
};

document.getElementById('all2big').onclick = function all2big(){
    if (document.getElementById('textbox').value != ""){
        var str = document.getElementById('textbox').value;

        str = str.toUpperCase();

        document.getElementById('textbox').value = str;
    }
};

document.getElementById('swcase1').onclick = function swcase1(){
    if (document.getElementById('textbox').value != ""){
        var str = document.getElementById('textbox').value;

        str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

        document.getElementById('textbox').value = str;    
    }
};

document.getElementById('swcase2').onclick = function swcase2(){
    if (document.getElementById('textbox').value != ""){
        var str = document.getElementById('textbox').value;

        str = str.replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, match => match.toUpperCase());

        document.getElementById('textbox').value = str;    
    }
};

var p = [];
p = document.getElementsByClassName("kontrole");
var i;

var mql = window.matchMedia("(max-width: 768px)");
if(mql.matches){
    for (i = 0; i < p.length; i++) {
        p[i].classList.add("col-6");
        p[i].classList.remove("col-md-3");
    } 
}
else{
    for (i = 0; i < p.length; i++) {
        p[i].classList.add("col-md-3");
        p[i].classList.remove("col-6");
    }
}
mql.addEventListener("change", (e)=>{
    if(e.matches){
        for (i = 0; i < p.length; i++) {
            p[i].classList.add("col-6");
            p[i].classList.remove("col-md-3");
        } 
    }
    else{
        for (i = 0; i < p.length; i++) {
            p[i].classList.add("col-md-3");
            p[i].classList.remove("col-6");
        }
    }
})

document.getElementById('lat2cyr').onclick = function lat2cyr(){
    if (document.getElementById('textbox').value != ""){
        var str = document.getElementById('textbox').value;

        // Uppercase special characters
        str = str.replace(/DŽ/g, "Џ");
        str = str.replace(/Dž/g, "Џ");
        str = str.replace(/DJ/g, "Ђ");
        str = str.replace(/Dj/g, "Ђ");
        str = str.replace(/LJ/g, "Љ");
        str = str.replace(/Lj/g, "Љ");
        str = str.replace(/NJ/g, "Њ");
        str = str.replace(/Nj/g, "Њ");

        // Lowercase special characters
        str = str.replace(/dž/g, "џ");
        str = str.replace(/dj/g, "ђ");
        str = str.replace(/lj/g, "љ");
        str = str.replace(/nj/g, "њ");

        // Uppercase characters
        str = str.replace(/A/g, "А");
        str = str.replace(/B/g, "Б");
        str = str.replace(/V/g, "В");
        str = str.replace(/G/g, "Г");
        str = str.replace(/D/g, "Д");
        str = str.replace(/Đ/g, "Ђ");
        str = str.replace(/E/g, "Е");
        str = str.replace(/Ž/g, "Ж");
        str = str.replace(/Z/g, "З");
        str = str.replace(/I/g, "И");
        str = str.replace(/J/g, "Ј");
        str = str.replace(/K/g, "К");
        str = str.replace(/L/g, "Л");
        str = str.replace(/M/g, "М");
        str = str.replace(/N/g, "Н");
        str = str.replace(/O/g, "О");
        str = str.replace(/P/g, "П");
        str = str.replace(/R/g, "Р");
        str = str.replace(/S/g, "С");
        str = str.replace(/T/g, "Т");
        str = str.replace(/Ć/g, "Ћ");
        str = str.replace(/U/g, "У");
        str = str.replace(/F/g, "Ф");
        str = str.replace(/H/g, "Х");
        str = str.replace(/C/g, "Ц");
        str = str.replace(/Č/g, "Ч");
        str = str.replace(/Š/g, "Ш");

        // Lowercase characters
        str = str.replace(/a/g, "а");
        str = str.replace(/b/g, "б");
        str = str.replace(/v/g, "в");
        str = str.replace(/g/g, "г");
        str = str.replace(/d/g, "д");
        str = str.replace(/đ/g, "ђ");
        str = str.replace(/e/g, "е");
        str = str.replace(/ž/g, "ж");
        str = str.replace(/z/g, "з");
        str = str.replace(/i/g, "и");
        str = str.replace(/j/g, "ј");
        str = str.replace(/k/g, "к");
        str = str.replace(/l/g, "л");
        str = str.replace(/m/g, "м");
        str = str.replace(/n/g, "н");
        str = str.replace(/o/g, "о");
        str = str.replace(/p/g, "п");
        str = str.replace(/r/g, "р");
        str = str.replace(/s/g, "с");
        str = str.replace(/t/g, "т");
        str = str.replace(/ć/g, "ћ");
        str = str.replace(/u/g, "у");
        str = str.replace(/f/g, "ф");
        str = str.replace(/h/g, "х");
        str = str.replace(/c/g, "ц");
        str = str.replace(/č/g, "ч");
        str = str.replace(/š/g, "ш");

        document.getElementById('textbox').value = str;
    }
};

document.getElementById('cyr2lat').onclick = function cyr2lat(){
    if (document.getElementById('textbox').value != ""){ 
        var str = document.getElementById('textbox').value;

        // Uppercase special characters
        str = str.replace(/Џ/g, "DŽ");
        str = str.replace(/Љ/g, "LJ");
        str = str.replace(/Њ/g, "NJ");

        // Lowercase special characters
        str = str.replace(/џ/g, "dž");
        str = str.replace(/љ/g, "lj");
        str = str.replace(/њ/g, "nj");

        // Uppercase characters
        str = str.replace(/А/g, "A");
        str = str.replace(/Б/g, "B");
        str = str.replace(/В/g, "V");
        str = str.replace(/Г/g, "G");
        str = str.replace(/Д/g, "D");
        str = str.replace(/Ђ/g, "Đ");
        str = str.replace(/Е/g, "E");
        str = str.replace(/Ж/g, "Ž");
        str = str.replace(/З/g, "Z");
        str = str.replace(/И/g, "I");
        str = str.replace(/Ј/g, "J");
        str = str.replace(/К/g, "K");
        str = str.replace(/Л/g, "L");
        str = str.replace(/М/g, "M");
        str = str.replace(/Н/g, "N");
        str = str.replace(/О/g, "O");
        str = str.replace(/П/g, "P");
        str = str.replace(/Р/g, "R");
        str = str.replace(/С/g, "S");
        str = str.replace(/Т/g, "T");
        str = str.replace(/Ћ/g, "Ć");
        str = str.replace(/У/g, "U");
        str = str.replace(/Ф/g, "F");
        str = str.replace(/Х/g, "H");
        str = str.replace(/Ц/g, "C");
        str = str.replace(/Ч/g, "Č");
        str = str.replace(/Ш/g, "Š");

        // Lowercase characters
        str = str.replace(/а/g, "a");
        str = str.replace(/б/g, "b");
        str = str.replace(/в/g, "v");
        str = str.replace(/г/g, "g");
        str = str.replace(/д/g, "d");
        str = str.replace(/ђ/g, "đ");
        str = str.replace(/е/g, "e");
        str = str.replace(/ж/g, "ž");
        str = str.replace(/з/g, "z");
        str = str.replace(/и/g, "i");
        str = str.replace(/ј/g, "j");
        str = str.replace(/к/g, "k");
        str = str.replace(/л/g, "l");
        str = str.replace(/м/g, "m");
        str = str.replace(/н/g, "n");
        str = str.replace(/о/g, "o");
        str = str.replace(/п/g, "p");
        str = str.replace(/р/g, "r");
        str = str.replace(/с/g, "s");
        str = str.replace(/т/g, "t");
        str = str.replace(/ћ/g, "ć");
        str = str.replace(/у/g, "u");
        str = str.replace(/ф/g, "f");
        str = str.replace(/х/g, "h");
        str = str.replace(/ц/g, "c");
        str = str.replace(/ч/g, "č");
        str = str.replace(/ш/g, "š");

        document.getElementById('textbox').value = str;
    }
};