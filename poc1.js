alert('\\new js file');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; 
  var url = "https://newsys1.herokuapp.com?enter=1";
  var xhp = new XMLHttpRequest();
 
  xhp.open("GET", url , true);
   xhp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');//
    xhp.onreadystatechange = function(){
      if(xhp.readyState == 4 && (xhp.status == 200 || xhp.status == 0)){
             
        }           
   }
   xhp.send("sent");
