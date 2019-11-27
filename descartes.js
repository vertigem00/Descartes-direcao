function abrir(evt, secao, sub) {
    var i, tabcontent, tablink, sub;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");

    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");}

    subtab = document.getElementsByClassName("subtab");
    for (i = 0; i < subtab.length; i++) {
        subtab[i].style.display = "none";
    }
    document.getElementById(secao).style.display = "block";
    document.getElementById(sub).style.display = "block";

    evt.currentTarget.className += " active";

    
}