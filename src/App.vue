<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/login')
  }, 1500)
})
</script>

<template>
  <div class="min-h-screen bg-midnight-plum flex flex-col items-center justify-center p-4">
    <div class="text-center max-w-md">
      <div class="mb-8">
        <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-gold to-soft-blush flex items-center justify-center animate-pulse-slow">
          <span class="text-4xl">🏡</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-rose-gold">
          Lumina Nest
        </h1>
        <p class="text-lg md:text-xl text-soft-blush">
          Rumah digital kita
        </p>
      </div>
      
      <div class="w-16 h-1 bg-rose-gold mx-auto rounded-full animate-pulse-slow"></div>
      
      <p class="mt-8 text-sm text-soft-blush">
        Loading…
      </p>
    </div>
    
    <!-- First Visit Animation Container -->
    <div id="first-visit-container" class="fixed inset-0 bg-midnight-plum flex flex-col items-center justify-center z-50 transition-opacity duration-500">
      <div class="text-center max-w-md">
        <h2 id="welcome-message" class="text-3xl md:text-5xl font-bold mb-4 opacity-0 translate-y-4 transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-white to-rose-gold">
          Selamat datang di rumah,
        </h2>
        <h3 id="for-you-message" class="text-2xl md:text-4xl font-bold mb-8 opacity-0 translate-y-4 transition-all duration-500 text-soft-blush">
          Sayang.
        </h3>
        <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-gold to-soft-blush flex items-center justify-center animate-bounce-slow">
          <span class="text-4xl">✨</span>
        </div>
      </div>
    </div>
  </div>
</template>