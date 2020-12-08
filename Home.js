 function display(){
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET','https://jsonplaceholder.typicode.com/todos');
    xhttp.onload=function(){
        var data = JSON.parse(xhttp.responseText);
    };
    xhttp.send();
};

// binding

var databind= function(){
    var dataitem = databind.bind(func);
    var tableData=data;

    for (var i in tableData){
        //Keep in mind we are using "Template Litterals to create rows"
        var row = `<tr>
                    <td>${tableData[i].Userid}</td>
                    <td>${tableData[i].id}</td>
                    <td>${tableData[i].title}</td>
                    <td>${tableData[i].Completed}</td>
                      `
          var table = $('#table-body')
        table.append(row)
      }
    
}
