var d = new Date();
var uren = d.getHours();
var minuten = d.getMinutes();
var seconden = d.getSeconds();
document.getElementById("klok").innerHTML = uren + ":" + minuten + ":" + seconden;
function berekening() {
    const pi = 3.14;
    var diameterString = document.getElementById("diameter").value;
    var diameter = parseFloat(diameterString);
    {
        let output = diameter * pi;
        let declaratie = "Omtrek is: ";
        document.getElementById("omtrek").innerHTML = declaratie + output;
    
        let output2 = diameter * diameter * pi * 0.25;
        var declaratie2 = "Oppervlakte is: ";
        document.getElementById("oppervlakte").innerHTML = declaratie2 + output2;
    }
}