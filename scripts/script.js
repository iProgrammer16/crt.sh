function printAll() {
    document.getElementById("print").innerHTML = '';
    if(document.getElementById("info").value.length <= 0) {
        alert("Please enter json values");
    } else {
        var data = document.getElementById("info").value;
        
        var jsData = JSON.parse(data);
        var ch = document.getElementById("flexSwitchCheckChecked");
        var i;
        for(i in jsData){
            if(jsData[i]instanceof Object){
                var show = "";
                if(ch.checked == true)
                show = document.getElementById("print").innerHTML += i + " - " + jsData[i].common_name + "<br>";
                else
                show = document.getElementById("print").innerHTML += jsData[i].common_name + "<br>";
            }
        }
    }
    document.getElementById("info").value='';
}