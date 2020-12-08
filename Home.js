function display(){
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET','https://jsonplaceholder.typicode.com/todos');
    xhttp.onload=function(){
    var data = JSON.parse(xhttp.responseText);
    for (var i in data){
        //Keep in mind we are using "Template Litterals to create rows"
        var row = `<tr>
                    <td>${data[i].Userid}</td>
                    <td>${data[i].id}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].Completed}</td>
                     </tr> `
          var table = $('#table-body')
        table.append(row)
      }
    };
    xhttp.send();
};


