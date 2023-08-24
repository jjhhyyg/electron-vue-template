<!-- 自定义按钮组件 -->

<template>
<button class="button" :class="buttonClass" @click="$emit('click')">
  <slot></slot>
</button>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "default"
  },
})
const buttonClass = computed(() => {
  return `button-${props.type}`;
})
</script>

<style scoped lang="scss">
.button {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
    @include ease(0.3s);
  }
}

.button-default {
  background-color: #ccc;
  color: #fff;
}

.button-primary {
  background-color: #007bff;
  color: #fff;
}
</style>