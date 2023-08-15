<!--An electron login page-->

<template>
  <div class="container">
    <div class="login-form" ref="loginForm">
      <div class="login-form-title">登录</div>
      <div class="login-form-input">
        <input type="text" required/>
        <span ref="usernameSpan">用户名</span>
      </div>
      <div class="login-form-input">
        <input type="password" required/>
        <span ref="passwordSpan">密码</span>
      </div>
      <div class="login-form-btn">
        <button @click="login">登录</button>
        <button @click="checkInstruction">说明</button>
      </div>
    </div>
  </div>
  <div class="blur-overlay">
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {useRouter} from "vue-router";

// 获取表单DOM元素
const loginForm = ref();

// 获取两个span的DOM元素
const usernameSpan = ref();
const passwordSpan = ref();

// 获取路由实例
const router = useRouter();

// 使登录框位置随窗口大小变化而变化
const handleResize = () => {
  const width = window.innerWidth;
  loginForm.value.style.right = width / 10 + 'px';
}

onMounted(() => {
  // 设置窗口大小
  window.resizeTo(800, 600);
  // 初始化设置登录框位置
  handleResize();
});

// 添加窗口变动监听事件
window.addEventListener('resize', handleResize);

const checkInstruction = () => {
  router.push('/instruct');
}

</script>

<style lang="scss" scoped>

// 将所有内部元素移至右侧
.container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  background: url("@/assets/images/login_bg.jpg") no-repeat center center;
  background-size: cover;
}

// 模糊背景
.blur-overlay {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.login-form {
  z-index: 1;
  position: fixed;
  display: flex;
  right: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 30px;
}

.login-form-title {
  font-size: $font-size-large;
  margin-bottom: 10px;
  text-align: center;
  color: #fff;
}

.login-form-input {
  position: relative;
  width: 200px;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0);
    border-radius: 5px;
    outline: none;
    color: #fff;
    font-size: $font-size-small;
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px;
    pointer-events: none;
    font-size: $font-size-small;
    color: rgba(255, 255, 255, 0.25);
  }

  input:valid ~ span,
  input:focus ~ span {
    color: #00dfc4;
    @include ease(0.3s);
    transform: translateX(-2px) translateY(-20px);
    font-size: 0.8em;
    padding: 0 10px;
  }

  input:valid,
  input:focus {
    border-color: #00dfc4;
    @include ease(0.3s);
  }
}

</style>