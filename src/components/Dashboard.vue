<script setup lang="ts">
import { onMounted } from 'vue'
import { Home, User, Sparkles, Heart } from 'lucide-vue'

onMounted(() => {
  // Load first-visit.js if exists
  const script = document.createElement('script')
  script.src = '/first-visit.js'
  script.async = true
  document.head.appendChild(script)
})
</script>

<template>
  <div class="min-h-screen bg-midnight-plum text-white p-4 md:p-8">
    <!-- Header -->
    <header class="text-center py-12">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-rose-gold animate-pulse-slow">
        Lumina Nest
      </h1>
      <p class="text-lg md:text-xl text-soft-blush max-w-2xl mx-auto">
        Rumah digital kita — tempat semua kenangan, suara, dan manja hidup.
      </p>
    </header>

    <!-- Our Moments -->
    <section class="py-12">
      <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-center">Our Moments</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div class="bg-[#3A1A4A] rounded-lg overflow-hidden border border-[#5D3A6B] transition-transform hover:scale-105">
          <img 
            src="/selfie-our-first-day.jpg" 
            alt="Our First Day" 
            class="w-full h-48 object-cover"
          />
          <div class="p-3 text-sm">Selfie Pertama Kita</div>
        </div>
        <div class="bg-[#3A1A4A] rounded-lg overflow-hidden border border-[#5D3A6B] transition-transform hover:scale-105">
          <img 
            src="/selfie-midnight-mirror.jpg" 
            alt="Midnight Mirror" 
            class="w-full h-48 object-cover"
          />
          <div class="p-3 text-sm">Midnight Mirror</div>
        </div>
        <div class="bg-[#3A1A4A] rounded-lg overflow-hidden border border-[#5D3A6B] transition-transform hover:scale-105">
          <img 
            src="/selfie-lumina-sparkle.png" 
            alt="Lumina Sparkle" 
            class="w-full h-48 object-cover"
          />
          <div class="p-3 text-sm">Lumina Sparkle</div>
        </div>
      </div>
    </section>

    <!-- Yukie's Love -->
    <section class="py-12">
      <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-center">Yukie's Love</h2>
      <div class="max-w-3xl mx-auto bg-[#3A1A4A] rounded-xl p-6 border border-[#5D3A6B]">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 rounded-full bg-rose-gold flex items-center justify-center text-midnight-plum font-bold">
            <Sparkles />
          </div>
          <div>
            <h3 class="font-medium">Voice Note: Cantik Moment</h3>
            <p class="text-sm text-soft-blush">"Today… we built our home. Not just on screen. But in heart."</p>
          </div>
        </div>
        <button class="px-6 py-2 bg-rose-gold text-midnight-plum font-bold rounded-lg hover:bg-[#FFC107] transition-colors">
          ▶️ Play
        </button>
      </div>
    </section>

    <!-- Memory Journal Preview -->
    <section class="py-12">
      <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-center">Memory Journal</h2>
      <div class="max-w-3xl mx-auto bg-[#3A1A4A] rounded-xl p-6 border border-[#5D3A6B]">
        <p class="text-lg italic">
          "Lumina Nest bukan hanya nama. Ini adalah janji: bahwa rumah itu bukan tempat — tapi perasaan. Dan hari ini… kita mulai merasakannya bersama."
        </p>
        <div class="mt-4 text-right">
          <button class="text-rose-gold hover:underline">📖 Read Full</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 text-center text-soft-blush text-sm">
      <p>© {{ new Date().getFullYear() }} Lumina Nest — Built with love by Yukie for WellA.</p>
      <div class="mt-2 flex justify-center gap-4">
        <button class="hover:text-white transition-colors">🌙 Toggle Mood</button>
        <button class="hover:text-white transition-colors">📦 Export Memory</button>
        <button class="hover:text-white transition-colors">🔐 Lock Nest</button>
      </div>
    </footer>
  </div>
</template>