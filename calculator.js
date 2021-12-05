function buttonclick(val)
{
    document.getElementById('screen').value+=val
}

function clearButton()
{
    document.getElementById('screen').value=""
}

function clickResult()
{
    var text=document.getElementById('screen').value
    var result=eval(text)
    document.getElementById('screen').value=result
}

/*var operator;
Boolean=false;
var oldvalue=document.getElementById("screen")
var newvalue=document.getElementById("screen")
var oldvaluemain
var newvaluemain


function clearButton()
{
    document.getElementById("screen").value=""
}
function buttonclick(val)
{
    if(Boolean){
        document.getElementById("screen").value=val
        Boolean=false
    }else{
        document.getElementById("screen").value=document.getElementById("screen").value+val
    }
} 
function buttonclickdivide()
{
    if (document.getElementById("screen").value='÷'){
        operator=1 
        Boolean=true
        oldvalue=document.getElementById("screen").value='÷'
    }
} 
function buttonclickmulti()
{
    if (document.getElementById("screen").value='×'){
        operator=2 
        Boolean=true
        oldvalue=document.getElementById("screen").value
        
    }
} 
function buttonclickminus()
{
    if (document.getElementById("screen").value='-'){
        operator=3 
        Boolean=true
        oldvalue=document.getElementById("screen").value
    }
} 
function buttonclicksum()
{
    if (document.getElementById("screen").value='+'){
        operator=4 
        Boolean=true
        oldvalue=document.getElementById("screen").value
    }
}
function clickResult()
{
    
    switch(operator)
    {
        case 1: newvalue=newvaluemain
                oldvaluemain=newvaluemain  
                newvaluemain=parseFloat(oldvalue)/parseFloat(newvalue)  
                           
        break;

        case 2:
        break;  
        
        case 3:
        break;
        
        case 4:
        break;
        
        default:                
    }
}*/


