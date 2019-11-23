async function getManufacturerNames() {
    let response = await fetch('/manufacturerNames');
    let body = await response.json();
    return body;

function manufacturersToSelect() {
    getManufacturerNames().then(data => {
        var x = document.getElementById("manufacturer");
        console.log(data);
        document.getElementById("manufacturer").innerHTML = "";
        for(i=0; i<data.length;i++) {
            var option = document.createElement("option");
            option.text = data[i];
            x.options.add(option, i);
        }
    });
}