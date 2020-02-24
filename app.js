let html='';
for (let i = 2;i<10;i++ ){
    html+="<tr>";
    for (j=2;j<10;j++){
        html +="<td>"
        html += j +"x"+i + "=" + j * i;
        html += "</td>"
    }
    html+="</tr>";
}
document.getElementById("html").innerHTML = html;