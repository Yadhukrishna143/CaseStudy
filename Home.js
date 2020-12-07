var btn2 = document.getElementById("btn2");
btn2.addEventListener("click",function(){
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET','https://jsonplaceholder.typicode.com/todos');
    xhttp.onload=function(){
        var data = JSON.parse(xhttp.responseText);
        console.log(data[0]);
    };
    xhttp.send();
});
