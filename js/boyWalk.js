function BoyWalk(){
  //获取容器的属性
  var container=$("#content");
  //页面可视区域
  var clientWidth=container.width();
  var clientHeight=container.height();
  //男生
  var $boy=$("#boy");
  var boyHeight=$boy.height();
  var boyWidth=$boy.width();
  //获取位置信息
  var getValue=function(className){
    var ele=$(className);

    return {
      height:ele.height(),
      top:ele[0].offsetTop
    }
  }

  //路的Y轴
  var PathY=function(){
    var data=getValue(".a_middle_background");
    return data.height/2+data.top;
  }

  //修正男生的位置
  $boy.css({
    top:PathY()-boyHeight+25
  })

  // 暂停走路
  function pauseWalk(){
    $boy.addClass('pauseWalk');
  }

  // 恢复走路
  function restoreWalk(){
    $boy.removeClass('pauseWalk');
  }

  //启动 css3 animation动画
  function slowWalk(){
    $boy.addClass('slowWalk');
  }

  //用transition做运动,options是要动作的属性
  function startRun(options,runTime){
    // 异步编程
    var dfdPlay=$.Deferred();

    // 恢复走路
    restoreWalk();

    // transition动画
    $boy.transition(
      options,
      runTime,
      'linear',
      function(){
        dfdPlay.resolve(); //修改动画状态，动画完成
      }
    );

    return dfdPlay;
  }

  // 开始走路
  function walkRun(time,dist,distY){
    time=time||3000;

    //脚的动作
    slowWalk();

    //开始走路
    var d1=startRun({
      'left':dist+'px',
      'top':distY+'px'
    },time);

    return d1;
  }

  // 计算移动距离
  function calculateDist(direction,proportion){
    return (direction=='x' ? clientWidth :clientHeight) * proportion;
  }

  return{
    //开始走路
    walkTo:function(time,proportionX,proportionY){
      var distX=calculateDist('x',proportionX);
      var distY=calculateDist('y',proportionY);

      return walkRun(time,distX,distY);
    },

    //暂停走路
    stopWalk:function(){
      pauseWalk();
    },

    //设置颜色
    setColor:function(value){
      $boy.css('background-color',value)
    }

  }

}