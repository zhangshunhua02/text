$(function() {
    var speed = 150, //跑马灯速度
      click = true, //阻止多次点击
      img_index = -1, //阴影停在当前奖品的序号
      circle = 0, //跑马灯跑了多少次
      maths,//取一个随机数;
      num=$('.red').text();
    $('.start').click(function() {
      if(click && num>0) {
        click = false;
        maths = parseInt((Math.random() * 10) + 80);
        light();
      } else if(click && num == 0){
        alert("抽奖次数已用尽")
      } else {
        return false;
      }
    });
    function light() {
      img();
      circle++;
      // console.log(circle)
      console.log(maths)
      var timer = setTimeout(light, speed);
      if(circle > 0 && circle < 5) {
        speed -= 10;
      } else if(circle > 5 && circle < 20) {
        speed -= 5;
      } else if(circle > 50 && circle < 70) {
        speed += 5
      } else if(circle > 70 && circle < maths) {
        speed += 10
      } else if(circle == maths) {
        var text = $('.gift_div .gift:eq(' + img_index + ')').text();
        console.log(circle + maths, 'aaa', img_index, $('.gift_div .gift:eq(' + img_index + ')').text())
        clearTimeout(timer);
        setTimeout(function() {
          alert('恭喜获得' + text)
        }, 300)
        click = true;
        speed = 150;
        circle = 0;
        img_index = -1;
        num--;
        $('.red').text(num)
      }
    }
    function img() {
      if(img_index < 7) {
        img_index++;
      } else if(img_index == 7) {
        img_index = 0;
      }
      $('.gift_div .gift:eq(' + img_index + ')').addClass('gift_b').siblings().removeClass('gift_b');
    }
  });