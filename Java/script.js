function update() {
    document.getElementById("t1_1").innerHTML= +wood.toPrecision(5);
    document.getElementById("t2_1").innerHTML= +lvl_wood;
    document.getElementById("t1_2").innerHTML= +ore;
    document.getElementById("t2_2").innerHTML= +lvl_ore;
    document.getElementById("t1_3").innerHTML= +sulfur;
    document.getElementById("t2_3").innerHTML= +lvl_sul;
}

function drewno()   {
    wood+=1*lvl_wood;
    update();
}

function ruda()   {
    if(lvl_ore>0) {
        ore+=1*lvl_ore;
        update();
    }
    else if(wood>=100) {
    wood-=100;
    ore+=1;
    update();
    }
    else alert("mozesz wymienic 100 drewna za 1 rude)"); 
}
function siarka()   {
    if(lvl_sul>0) {
        sulfur+=1*lvl_sul;
        update();
    }
    else if(ore>=100) {
    ore-=100;
    sulfur+=1;
    update();
    }
    else alert("mozesz wymienic 100 rudy za 1 siarke)"); 
}
function drwal()    {
    if(wood>=10)    {
        lvl_wood+=1;
        wood-=10;
        update();
    }
    else alert("do ulepszenia tartaku potrzeba 10 drewna");
}
function k_ore()  {
    if(ore>=10 && lvl_ore>0) {
        ore-=10;
        lvl_ore+=1;
        
        update();
    }    
    else if(ore<10 && lvl_ore>0) alert("do ulepszenia kopalni rudy potrzeba 10 rud");  
}
function k_sul()  {
    if(sulfur>=10 && lvl_sul>0) {
        sulfur-=10;
        lvl_sul+=1;
        
        update();
    }    
    else if(sulfur<10 && lvl_sul>0) alert("do ulepszenia kopalni rudy potrzeba 10 rud");  
}

function z_ore()  {
    if(ore>=10 && lvl_ore==0) {
        
        ore-=10;
        lvl_ore+=1;
        b5.parentNode.removeChild(b5);
        h2_1.outerHTML='<th><button type="button" onclick="k_ore()" id="b5"><img src="img\\oremine.png"></button></th>';
        
        update();
    
    }
    else alert("potrzeba 10 rudy");

}

function z_sul()  {
    if(sulfur>=10 && lvl_sul==0) {
        sulfur-=10;
        lvl_sul+=1;
        b6.parentNode.removeChild(b6);
        h2_2.outerHTML='<th><button type="button" onclick="k_sul()" id="b6"><img src="img\\sulfurmine.png"></button></th>';
        
        update();
    }
    else alert("potrzeba 10 siarki ");
}
function i_wood()  {
    setInterval(function i_wood2(){wood+=0.1; update();},200);
}
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const h2_1 = document.getElementById("h2_1");
const h2_2 = document.getElementById("h2_2");

var ore=0.0;
var wood=0.0;
var sulfur=0.0;
var lvl_ore=0;
var lvl_sul=0;
var lvl_wood=1;

update();
