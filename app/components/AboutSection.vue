<template>
  <div class="overflow-hidden">
    <h1 ref="text" class="handwrite-text">
      Hello, I am Kyaw Zin Thet
    </h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const text = ref(null)

onMounted(() => {
  gsap.fromTo(
    text.value,
    {
      width: '0ch'
    },
    {
      width: '24ch',
      duration: 3,
      ease: 'steps(24)'
    }
  )
})
</script>

<style scoped>
.handwrite-text {
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #000;
  font-family: cursive;
  font-size: 2rem;
  display: inline-block;
}

/* blinking cursor */
.handwrite-text::after {
  content: '';
  animation: blink 0.7s infinite;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>