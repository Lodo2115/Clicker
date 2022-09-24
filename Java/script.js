function update() {
    document.getElementById("t1").innerHTML= +wood;
    document.getElementById("t2").innerHTML= +lj;
    document.getElementById("t3").innerHTML= +ore;
    document.getElementById("t4").innerHTML= +k_ore;
    document.getElementById("t5").innerHTML= +sul;
    document.getElementById("t6").innerHTML= +k_sul;
}

function drewno()   {
    wood+=1*lj;
    update();
}
function drwal()    {
    if(wood>=10)    {
        lj+=1;
        wood-=10;
        update();
    }
    else alert("do ulepszenia tartaku potrzeba 10 drewna");
}
function ruda()   {
    if(k_ore>0) {
        ore+=1*k_ore;
        update();
    }
    if(wood>=100) {
    wood-=100;
    ore+=1;
    update();
    }
    
}
function k_r()  {
    if(ore>=10) {
        ore-=10;
        k_ore+=1*;

        update();
    }    
    else alert("do ulepszenia kopalni rudy potrzeba 100 rud");  
}

var ore=0;
var k_ore=0;
var sul=0;
var k_sul=0;
var wood=0;
var lj=1;
update();
