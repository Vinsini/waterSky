

    var cn=document.getElementById('J-header-cn');
    var low=document.getElementById('J-header-low');
    var over=document.getElementById('J-header-over');
    var tab=document.getElementById('J-header-tab');
    var show=document.getElementById('J-header-show');
    cn.onmouseover=function(){
        low.style.display='block';
    };
    cn.onmouseout=function(){
        low.style.display='none';
    };
    low.onmouseover=function(){
        low.style.display='block';
    };
    low.onmouseout=function(){
        low.style.display='none';
    };

    tab.onmouseover=function() {
        show.style.display = 'block';
    };
    tab.onmouseout=function(){
        show.style.display='none';
    };