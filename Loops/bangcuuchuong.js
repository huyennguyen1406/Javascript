let data = "<table>"
for (let i = 1; i < 11; i++) {
    data += "<tr>"
    for (let j = 1; j < 11; j++) {
        data += ("<td>" + i + " x " + j + " = " + (i*j) +"</td>")
    }
    data += "</tr>"
}
data += "</table>"
console.log(data)
document.getElementById("demo").innerHTML = data