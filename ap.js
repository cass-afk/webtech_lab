function change(){
    var div=document.getElementById('box');
    var bgcolor = document.getElementById('bgcolor').value;
    div.style.backgroundColor=bgcolor;
    var fcolor=document.getElementById('fontcolor').value;
    div.style.color=fcolor;
    var width=document.getElementById('width').value;
    div.style.width=width+"px";
    var height=document.getElementById('height').value;
    div.style.height=height+"px";
    var radius=document.getElementById('radius').value;
    div.style.borderRadius=radius+"%";
    var tsize=document.getElementById('tsize').value;
    div.style.fontsize=tsize+"px";
}
var car=null;
var timer=null;
function init(){
    car=document.getElementById('car');
    car.style.position='relative';
    car.style.left='2px';//intial position
    document.getElementById("Dangerbox").innerHTML='';
    
}
function move(){
    car.style.left=parseInt(car.style.left)+100+"px";
    timer=setTimeout(move,300);
    if( parseInt(car.style.left) >= 650 )
    {
        stop();
        document.getElementById("Dangerbox").innerHTML='<div id ="danger" style="border:1px solid red; background-color: red; color: white ; width: 150px; height: 50px;margin-left: 750px;" >DANGER</div>'
    }

}
function stop(){
    clearTimeout(timer);
}
