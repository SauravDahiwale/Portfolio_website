let tabLinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (let tablink of tabLinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidebar-menu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

const dynamicContent=document.getElementById("typewriting");

const Name="Saurav Dahiwale";
let pindex=0;
function getName(){
    if(pindex==Name.length)
    {
        clearName();
    }
    else if(pindex<Name.length){
        dynamicContent.innerText+=Name.charAt(pindex);
        pindex++;
        setTimeout(function(){
            getName();
        },3000);
    }
}
function clearName(){
    if(pindex==-1)
    {
        getName();
    }
    else if(pindex>=0){
        str="";
        for(let i=0;i<pindex;i++)
        {
            str+=Name.charAt(i);
        }
        pindex--;
        dynamicContent.textContent= str;
        setTimeout(function(){
            clearName();
        },3000);
    }
}

getName();