// Slider the images
var count=1;
setInterval(slide,6000);

function slide(){
    document.getElementById("radio"+count).checked=true;
    count++;
    if(count>2){
        count=1;
    }
}

// Mouseover event
var div=document.getElementById("cont1");
var div1=document.getElementById("cont2");
var div2=document.getElementById("cont3");
var div3=document.getElementById("cont4");
var div4=document.getElementById("cont5");
var icon=document.getElementById("logo");
var heading=document.getElementById("heading");
var para=document.getElementById("para");
var icon1=document.getElementById("logo1");
var heading1=document.getElementById("heading1");
var para1=document.getElementById("para1");
var icon2=document.getElementById("logo2");
var heading2=document.getElementById("heading2");
var para2=document.getElementById("para2");
var icon3=document.getElementById("logo3");
var heading3=document.getElementById("heading3");
var para3=document.getElementById("para3");
var icon4=document.getElementById("logo4");
var heading4=document.getElementById("heading4");
var para4=document.getElementById("para4");
function mouseOver(){
    icon.style.color="#73b925";
    icon.style.backgroundColor="white";
    heading.style.color="white";
    para.style.color="white";
}
function mouseOut(){
    icon.style.color="white";
    icon.style.backgroundColor="#73b925";
    heading.style.color="rgba(0, 0, 0, 0.8)";
    para.style.color="#8c8c8c";
}
function mouseOver1(){
    icon1.style.color="#73b925";
    icon1.style.backgroundColor="white";
    heading1.style.color="white";
    para1.style.color="white";
}
function mouseOut1(){
    icon1.style.color="white";
    icon1.style.backgroundColor="#73b925";
    heading1.style.color="rgba(0, 0, 0, 0.8)";
    para1.style.color="#8c8c8c";
}
function mouseOver2(){
    icon2.style.color="#73b925";
    icon2.style.backgroundColor="white";
    heading2.style.color="white";
    para2.style.color="white";
}
function mouseOut2(){
    icon2.style.color="white";
    icon2.style.backgroundColor="#73b925";
    heading2.style.color="rgba(0, 0, 0, 0.8)";
    para2.style.color="#8c8c8c";
}
function mouseOver3(){
    icon3.style.color="#73b925";
    icon3.style.backgroundColor="white";
    heading3.style.color="white";
    para3.style.color="white";
}
function mouseOut3(){
    icon3.style.color="white";
    icon3.style.backgroundColor="#73b925";
    heading3.style.color="rgba(0, 0, 0, 0.8)";
    para3.style.color="#8c8c8c";
}
function mouseOver4(){
    icon4.style.color="#73b925";
    icon4.style.backgroundColor="white";
    heading4.style.color="white";
    para4.style.color="white";
}
function mouseOut4(){
    icon4.style.color="white";
    icon4.style.backgroundColor="#73b925";
    heading4.style.color="rgba(0, 0, 0, 0.8)";
    para4.style.color="#8c8c8c";
}

div.addEventListener("mouseover",mouseOver);
div.addEventListener("mouseout",mouseOut);
div1.addEventListener("mouseover",mouseOver1);
div1.addEventListener("mouseout",mouseOut1);
div2.addEventListener("mouseover",mouseOver2);
div2.addEventListener("mouseout",mouseOut2);
div3.addEventListener("mouseover",mouseOver3);
div3.addEventListener("mouseout",mouseOut3);
div4.addEventListener("mouseover",mouseOver4);
div4.addEventListener("mouseout",mouseOut4);

var container1=document.getElementById("con1");
var head1=document.getElementById("head1");
var ihead1=document.getElementById("ihead1");
var ohead1=document.getElementById("ohead1");
var log1=document.getElementById("log1");
var log2=document.getElementById("log2");
var log3=document.getElementById("log3");
var log4=document.getElementById("log4");
var p1=document.getElementById("p1");
function over1(){
    head1.style.color="white";
    ihead1.style.color="white";
    ohead1.style.color="white";
    log1.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log1.style.color="white";
    log2.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log2.style.color="white";
    log3.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log3.style.color="white";
    log4.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log4.style.color="white";
    p1.style.color="white";
}
function out1(){
    head1.style.color="#000000CC";
    ihead1.style.color="#73b925";
    ohead1.style.color="white";
    log1.style.backgroundColor="#73b925";
    log1.style.color="white";
    log2.style.backgroundColor="#73b925";
    log2.style.color="white";
    log3.style.backgroundColor="#73b925";
    log3.style.color="white";
    log4.style.backgroundColor="#73b925";
    log4.style.color="white";
    p1.style.color="#8c8c8c";
}
container1.addEventListener("mouseover",over1);
container1.addEventListener("mouseout",out1);

var container2=document.getElementById("con2");
var head2=document.getElementById("head2");
var ihead2=document.getElementById("ihead2");
var ohead2=document.getElementById("ohead2");
var log11=document.getElementById("log11");
var log22=document.getElementById("log22");
var log33=document.getElementById("log33");
var log44=document.getElementById("log44");
var p2=document.getElementById("p2");
function over2(){
    head2.style.color="white";
    ihead2.style.color="white";
    ohead2.style.color="white";
    log11.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log11.style.color="white";
    log22.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log22.style.color="white";
    log33.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log33.style.color="white";
    log44.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log44.style.color="white";
    p2.style.color="white";
}
function out2(){
    head2.style.color="#000000CC";
    ihead2.style.color="#73b925";
    ohead2.style.color="white";
    log11.style.backgroundColor="#73b925";
    log11.style.color="white";
    log22.style.backgroundColor="#73b925";
    log22.style.color="white";
    log33.style.backgroundColor="#73b925";
    log33.style.color="white";
    log44.style.backgroundColor="#73b925";
    log44.style.color="white";
    p2.style.color="#8c8c8c";
}
container2.addEventListener("mouseover",over2);
container2.addEventListener("mouseout",out2);

var container3=document.getElementById("con3");
var head3=document.getElementById("head3");
var ihead3=document.getElementById("ihead3");
var ohead3=document.getElementById("ohead3");
var log111=document.getElementById("log111");
var log222=document.getElementById("log222");
var log333=document.getElementById("log333");
var log444=document.getElementById("log444");
var p3=document.getElementById("p3");
function over3(){
    head3.style.color="white";
    ihead3.style.color="white";
    ohead3.style.color="white";
    log111.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log111.style.color="white";
    log222.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log222.style.color="white";
    log333.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log333.style.color="white";
    log444.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log444.style.color="white";
    p3.style.color="white";
}
function out3(){
    head3.style.color="#000000CC";
    ihead3.style.color="#73b925";
    ohead3.style.color="white";
    log111.style.backgroundColor="#73b925";
    log111.style.color="white";
    log222.style.backgroundColor="#73b925";
    log222.style.color="white";
    log333.style.backgroundColor="#73b925";
    log333.style.color="white";
    log444.style.backgroundColor="#73b925";
    log444.style.color="white";
    p3.style.color="#8c8c8c";
}
container3.addEventListener("mouseover",over3);
container3.addEventListener("mouseout",out3);


var container4=document.getElementById("con4");
var head4=document.getElementById("head4");
var ihead4=document.getElementById("ihead4");
var ohead4=document.getElementById("ohead4");
var log1111=document.getElementById("log1111");
var log2222=document.getElementById("log2222");
var log3333=document.getElementById("log3333");
var log4444=document.getElementById("log4444");
var p4=document.getElementById("p4");
function over4(){
    head4.style.color="white";
    ihead4.style.color="white";
    ohead4.style.color="white";
    log1111.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log1111.style.color="white";
    log2222.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log2222.style.color="white";
    log3333.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log3333.style.color="white";
    log4444.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    log4444.style.color="white";
    p4.style.color="white";
}
function out4(){
    head4.style.color="#000000CC";
    ihead4.style.color="#73b925";
    ohead4.style.color="white";
    log1111.style.backgroundColor="#73b925";
    log1111.style.color="white";
    log2222.style.backgroundColor="#73b925";
    log2222.style.color="white";
    log3333.style.backgroundColor="#73b925";
    log3333.style.color="white";
    log4444.style.backgroundColor="#73b925";
    log4444.style.color="white";
    p4.style.color="#8c8c8c";
}
container4.addEventListener("mouseover",over4);
container4.addEventListener("mouseout",out4);