function czas()
{
    var timer = new Date();
    var godzina = timer.getHours();


    var minuta = timer.getMinutes();

    var sekunda = timer.getSeconds();

    document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;
    
    setTimeout("czas()",1000)



}