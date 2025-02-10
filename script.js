function res(){
        
    if(document.getElementById('table').value) {
        var a = document.getElementById('table').value;
        
    // if you don't put any value or number in the input box it will give by default 0
    } else {
        var a = a ? parseInt(a) : 0;
    }

    var b = parseInt(document.getElementById('l-val1').value);
    var c = parseInt(document.getElementById('l-val2').value);

    // before executing the for loop previous value will be blank
    document.getElementById('TableResult').innerHTML = "";
    
    //this is the for loop condition
  if (b<=c) {
        for(var i=b ; i<=c; i++){  
            // var output = (`${a} x ${i} = ${a*i}`);
            //here is the result in this condition it will result = result + condition
            document.getElementById('TableResult').innerHTML = document.getElementById('TableResult').innerHTML + "<br>" + `${a} x ${i} = ${a*i}`;
        }   
    }else{
        for(var i=b ; i>=c; i--){ 
            
            document.getElementById('TableResult').innerHTML = document.getElementById('TableResult').innerHTML + "<br>" + `${a} x ${i} = ${a*i}`;
        }  
    }

    /*
        for(i=1; i<=10; i++)
        for(i=b; i<=c; i++)
    */

    return false;
}
