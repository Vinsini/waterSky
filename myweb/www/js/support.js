function Tab(control,controlTag,show,showTag,eve){
    var each=document.getElementById(control).getElementsByTagName(controlTag);
    var showEach=document.getElementById(show).getElementsByTagName(showTag);
    for(var i=0;i<showEach.length;i++){
        showEach[i].style.display='none'
    }
    showEach[0].style.display='block';
    for(var j=0;j<each.length;j++){
        each[j].addEventListener(eve,function(){
            $(this).addClass("active").siblings().removeClass("active");
            for(var k=0;k<showEach.length;k++){
                if(this==each[k]){
                    showEach[k].style.display='block'
                }else{
                    showEach[k].style.display='none'
                }
            }
        })
    }
}
Tab('J-sup-control','a','J-sup-show','section','click');

var li=document.getElementById('J-sup-open');
var ul=document.getElementById('J-sup-more');
li.onclick=function(){
    if(ul.style.display=='block'){
        ul.style.display='none'
    }else{
        ul.style.display='block'
    }
};


