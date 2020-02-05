
colorgame();
function colorgame(){
   
var diff='hard';




function randgen(){

	var c11=Math.ceil(Math.random()*255);
	var c22=Math.ceil(Math.random()*255);
	var c33=Math.ceil(Math.random()*255);
	var rt=[c11,c22,c33];
	return rt;
}
var intial=randgen();
    var q=document.querySelector(".navbar-brand");
    q.textContent="Guess The Color RGB("+intial[0]+","+intial[1]+","+intial[2]+") ?";
var div1=randgen();
var div2=randgen();
var div3=randgen();
var div4=randgen();
var div5=randgen();
var div6=randgen();
    var ran=Math.ceil((Math.random()*6));
    switch(ran){
        case 1:
            div1=intial;
            break;
            case 2:
            div2=intial;
            break;
            case 3:
            div3=intial;
            break;
            case 4:
            div4=intial;
            break;
            case 5:
            div5=intial;
            break;
        default:
            div6=intial;
            break;
    
    }
    

var c1=document.querySelector(".a1");
c1.style.backgroundColor ="rgb("+div1[0]+","+div1[1]+","+div1[2]+")";
c1.addEventListener("click",function(){
	if(div1==intial)
	{
       c1.textContent="success";
        count=0;
        location.reload(true);

	}
	else{

      c1.textContent="non-success";
        
            
c1.style.backgroundColor ="rgb("+0+","+0+","+0+")";
      
	}
    
    count++;

    if(count==6)
        {
            location.reload(true);
        }
});
var c2=document.querySelector(".a2");
c2.style.backgroundColor ="rgb("+div2[0]+","+div2[1]+","+div2[2]+")";
c2.addEventListener("click",function(){
	if(div2==intial)
	{ c2.textContent="success";
     count=0;
     location.reload(true);
       

	}
	else{

      c2.textContent="non-success";
        c2.style.backgroundColor ="rgb("+0+","+0+","+0+")";

	}
    
    count++;
	
    if(count==6)
        {
            location.reload(true);
        }
});
var c3=document.querySelector(".a3");
c3.style.backgroundColor ="rgb("+div3[0]+","+div3[1]+","+div3[2]+")";
c3.addEventListener("click",function(){
	if(div3==intial)
	{
       c3.textContent="success";
        count=0;
        location.reload(true);

	}
	else{

      c3.textContent="non-success";
        c3.style.backgroundColor ="rgb("+0+","+0+","+0+")";
      
	}
     
    count++;
	
    if(count==6)
        {
            location.reload(true);
        }
});

var c4=document.querySelector(".a4");
c4.style.backgroundColor ="rgb("+div4[0]+","+div4[1]+","+div4[2]+")";
c4.addEventListener("click",function(){
	if(div4==intial)
	{
       c4.textContent="success";
        count=0;
        location.reload(true);

	}
	else{

      c4.textContent="non-success";
        c4.style.backgroundColor ="rgb("+0+","+0+","+0+")";
      
	}
     
    count++;

    if(count==6)
        {
            location.reload(true);
        }
});
    var c5=document.querySelector(".a5");

    if(diff=='hard'){

c5.style.backgroundColor ="rgb("+div5[0]+","+div5[1]+","+div5[2]+")";
c5.addEventListener("click",function(){
	if(div5==intial)
	{
       c5.textContent="success";
        count=0;
        location.reload(true);

	}
	else{

      c5.textContent="non-success";
        c5.style.backgroundColor ="rgb("+0+","+0+","+0+")";
    
	}
   
    count++;
    
    if(count==6)
        {
            location.reload(true);
        }
	
});
    }
    else{
        c5.textContent="";
    }
    var c6=document.querySelector(".a6");
if(diff=="hard"){

c6.style.backgroundColor ="rgb("+div6[0]+","+div6[1]+","+div6[2]+")";
c6.addEventListener("click",function(){
	if(div6==intial)
	{
       c6.textContent="success";
        count=0;
        location.reload(true);

	}
	else{

      c6.textContent="non-success";
        c6.style.backgroundColor ="rgb("+0+","+0+","+0+")";
      
	}
     
    count++;

    if(count==6)
        {
            location.reload(true);
        }
});
}
    else{
       c6.textContent=""; 
    }

}
function diffculty(){

var diff='hard';
    var h=document.querySelector(".hard");
    h.addEventListener("click",function(){
        diff="hard";
    });
      var e=document.querySelector(".easy");
    e.addEventListener("click",function(){
        diff="easy";
    });
    return diff;


}
