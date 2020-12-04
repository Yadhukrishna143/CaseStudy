
var promise=new Promise((resolve,reject)=>{
    var user=document.getElementById("user").value;
    var pwd =document.getElementById("pwd").value;


    if(user==="admin" && pwd===12345)
    {
        resolve("Successfully login");
    }
    else{
        reject("Fields does not match");
    }

});
promise
.then((message)=>{
    alert(message);
})
.catch((message2)=>{
    alert(message2);
})