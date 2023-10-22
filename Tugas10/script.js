function konverDollar(){
    let output = document.getElementById("output");
    let input = document.getElementById("idr").value;

    let convert = parseFloat(input) * 15878.75 + " Rupiah";
    output.innerText = convert;

}

document.getElementById("konvert").addEventListener("click",konverDollar)