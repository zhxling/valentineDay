/**
 * 页面滑动
 */

/**
 * [Swipe description]
 * @param {[type]} container [页面容器节点]
 * @param {[type]} options   [参数]
 */

 function Swipe(container){
    var container=$("#content");
    var element=container.find(":first");
    var slides=element.find("li");

    //滑动对象
    var swipe={};

    //获取容器的宽和高
    var width=container.width();
    var height=container.height();

    //设置li页面总宽度
    element.css({
      width:(slides.length*width)+'px',
      height:height+'px',
    })

    //设置li的页面宽度
    $.each(slides,function(index){
      // slides[index].style.width=width+'px';  slides[index]是dom节点
      // slides[index].style.height=height+'px';

      var slide=slides.eq(index);   //.eq() 方法会用集合中的一个元素构造一个新的 jQuery 对象
      slide.css({
        width:width+'px',
        height:height+'px'
      })
    })

    //点击切换页面
    swipe.scrollTo=function(slideWidth,speed){
      //执行动画移动
      // element.css({
      //   transform:'translate3d(-'+ (slides.length-1)*width +'px,0px,0px)',
      //   transition:'all '+ speed + 'ms linear 0s'
      // });
      element.css({
        transform:'translate3d(-'+ slideWidth +'px,0px,0px)',
        transition:'all '+ speed + 'ms linear 0s'
      });

      return this;
    }

    return swipe;
 }