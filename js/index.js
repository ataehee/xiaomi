var tabs = document.getElementById("tabs").getElementsByTagName("li");
var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);

for(i = 0; i < tabs.length; i++){
    tabs[i].onclick = showlist;
    // XXX.onclick js事件绑定
    // 注意： showlist调用不需写成：showlist()
}

function showlist(){
    for(i = 0; i < tabs.length; i++){
        if (tabs[i] === this){
            // this指针代表的是当前点击的li
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }
        else{
            tabs[i].className = "";
            lists[i].className = "clearfix";
        }
    }

}

// nav-banner fixed when the scroll is down.
var navfixed = document.getElementById("seckill-nav-fixed");

window.onscroll = function(){
    var scrolltop = document.documentElement.scrollTop;
    console.log(scrolltop);

    if (scrolltop >= 263){
        navfixed.className = "seckill-nav seckill-nav-fixed";
    }
    else {
        navfixed.className = "seckill-nav";
    }
}


