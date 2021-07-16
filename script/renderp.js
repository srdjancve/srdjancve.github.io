var p = [];
var m = [];

p = document.getElementById('swap_projects').getElementsByTagName("div");
m = document.getElementById('swap_artwork').getElementsByTagName("div");

var i;
var j;

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

var mql = window.matchMedia("(max-width: 768px)");
if(mql.matches){
    for (j = 0; j < m.length; j++) {
        m[j].classList.add("col-6");
        m[j].classList.remove("col-md-3");
    } 
}
else{
    for (j = 0; j < m.length; j++) {
        m[j].classList.add("col-md-3");
        m[j].classList.remove("col-6");
    }
}
mql.addEventListener("change", (e)=>{
    if(e.matches){
        for (j = 0; j < m.length; j++) {
            m[j].classList.add("col-6");
            m[j].classList.remove("col-md-3");
        }  
    }
    else{
        for (j = 0; j < m.length; j++) {
            m[j].classList.add("col-md-3");
            m[j].classList.remove("col-6");
        }
    }
})