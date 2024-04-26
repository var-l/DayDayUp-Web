<template>
  <div class="wrap">
    <div
        :class="{ 'hovered': isHovered }"
        class="cube"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
    >
        <div class="out_front">
          <el-image src="/public/IMG_0025.JPG"  class="pic"/>
        </div>
        <div class="out_back">
          <el-image src="/public/IMG_0025.JPG"  class="pic"/>
        </div>
        <div class="out_left">
          <el-image src="/public/IMG_0025.JPG"  class="pic"/>
        </div>
        <div class="out_right">
          <el-image src="/public/IMG_0025.JPG"  class="pic"/>
        </div>
        <div class="out_top">
          <el-image src="/public/IMG_0025.JPG"  class="pic"/>
        </div>
        <div class="out_bottom">
          <el-image src="/public/IMG_0025.JPG"  class="pic"/>
        </div>
        <span class="in_front">
		 <el-image src="/public/IMG_0025.JPG"  class="pic"/>
	</span>
        <span class="in_back">
		  <el-image src="/public/IMG_0025.JPG"  class="pic"/>
	</span>
        <span class="in_left">
		 <el-image src="/public/IMG_0025.JPG"  class="pic"/>
	</span>
        <span class="in_right">
		 <el-image src="/public/IMG_0025.JPG"  class="pic"/>
	</span>
        <span class="in_top">
		 <el-image src="/public/IMG_0025.JPG"  class="pic"/>
	</span>
        <span class="in_bottom">
		 <el-image src="/public/IMG_0025.JPG"  class="pic"/>
	</span>
      </div>
    </div>
</template>

<script setup lang="ts" name="images">

import { ref } from 'vue';

const isHovered = ref(false);

function handleMouseOver() {
  isHovered.value = true;
}

function handleMouseOut() {
  isHovered.value = false;
}
</script>

<style scoped lang="scss">
/* CSS Document */
html{
  background: #1ab394;
  height: 100%;
}
.wrap{
  width: 10px;
  height: 10px;
  /*改变左右上下,图片方块移动*/
  margin: 200px 400px;
  position: relative;

}
.cube{
  width:600px;
  height:400px;
  margin: 0 auto;
  transform-style: preserve-3d;
  transform: rotateX(-30deg) rotateY(-80deg);
  -webkit-animation: rotate 20s infinite;
  animation-timing-function: linear;
}
@-webkit-keyframes rotate{
  from{transform: rotateX(0deg) rotateY(0deg);}
  to{transform: rotateX(360deg) rotateY(360deg);}
}
.cube div{
  position: absolute;
  width: 300px;
  height: 300px;
  opacity: 0.8;
  transition: all .4s;
}
.pic{
  width: 300px;
  height: 300px;
}
.cube .out_front{
  transform: rotateY(0deg) translateZ(150px);
}
.cube .out_back{
  transform: translateZ(-150px) rotateY(180deg);
}
.cube .out_left{
  transform: rotateY(90deg) translateZ(150px);
}
.cube .out_right{
  transform: rotateY(-90deg) translateZ(150px);
}
.cube .out_top{
  transform: rotateX(90deg) translateZ(150px);
}
.cube .out_bottom{
  transform: rotateX(-90deg) translateZ(150px);
}
.cube span{
  display: bloack;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50px;
  left: 50px;
}
.cube .in_pic{
  width: 200px;
  height: 200px;
}
.cube .in_front{
  transform: rotateY(0deg) translateZ(100px);
}
.cube .in_back{
  transform: translateZ(-100px) rotateY(180deg);
}
.cube .in_left{
  transform: rotateY(90deg) translateZ(100px);
}
.cube .in_right{
  transform: rotateY(-90deg) translateZ(100px);
}
.cube .in_top{
  transform: rotateX(90deg) translateZ(100px);
}
.cube .in_bottom{
  transform: rotateX(-90deg) translateZ(100px);
}
.cube:hover .out_front{
  transform: rotateY(0deg) translateZ(400px);
}
.cube:hover .out_back{
  transform: translateZ(-400px) rotateY(180deg);
}
.cube:hover .out_left{
  transform: rotateY(90deg) translateZ(400px);
}
.cube:hover .out_right{
  transform: rotateY(-90deg) translateZ(400px);
}
.cube:hover .out_top{
  transform: rotateX(90deg) translateZ(400px);
}
.cube:hover .out_bottom{
  transform: rotateX(-90deg) translateZ(400px);
}

/* 添加鼠标悬停时的动画样式（SCSS版本） */
.hovered {
  .out_front {
    transform: rotateY(0deg) translateZ(400px);
  }

  .out_back {
    transform: translateZ(-400px) rotateY(180deg);
  }

  .out_left {
    transform: rotateY(90deg) translateZ(400px);
  }

  .out_right {
    transform: rotateY(-90deg) translateZ(400px);
  }

  .out_top {
    transform: rotateX(90deg) translateZ(400px);
  }

  .out_bottom {
    transform: rotateX(-90deg) translateZ(400px);
  }
}

</style>
