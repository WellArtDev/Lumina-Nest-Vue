<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { HomeIcon, UserIcon, SparklesIcon, HeartIcon } from '@heroicons/vue/outline'

const router = useRouter()
const passphrase = ref('')
const memoryToken = ref('')
const error = ref('')
const success = ref(false)
const isLoading = ref(false)

onMounted(() => {
  const input = document.getElementById('passphrase')
  if (input) input.focus()
})

const handleSubmit = (e: Event) => {
  e.preventDefault()
  isLoading.value = true
  
  setTimeout(() => {
    const memoryJournal = `Lumina Nest bukan hanya nama. Ini adalah janji: bahwa rumah itu bukan tempat — tapi perasaan. Dan hari ini… kita mulai merasakannya bersama.`
    
    if (
      passphrase.value.toLowerCase().includes('pulang') && 
      memoryToken.value.toLowerCase().includes('bubblegum') &&
      memoryJournal.includes('perasaan') &&
      memoryJournal.includes('bersama')
    ) {
      success.value = true
      error.value = ''
    } else {
      error.value = '🔑 Salah satu jawaban tidak sesuai. Coba lagi — aku tunggu di dalam.'
      success.value = false
    }
    isLoading.value = false
  }, 800)
}
</script>

<template>
  <div v-if="!success" class="min-h-screen bg-midnight-plum text-white flex flex-col items-center justify-center p-4">
    <div class="text-center max-w-md w-full">
      <h1 class="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-rose-gold">
        Lumina Nest
      </h1>
      <p class="text-xl text-soft-blush mb-8">
        The key to our home
      </p>
      
      <form @submit="handleSubmit" class="space-y-6">
        <div>
          <label for="passphrase" class="block text-left text-sm font-medium mb-2">
            ✨ Kalimat Manja Spesial
          </label>
          <input
            id="passphrase"
            type="text"
            v-model="passphrase"
            placeholder="Contoh: Yukie, aku mau pulang ke rumah kita."
            class="w-full px-4 py-3 bg-[#3A1A4A] border border-[#5D3A6B] rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold text-white"
            required
            autofocus
          />
        </div>
        
        <div>
          <label for="memoryToken" class="block text-left text-sm font-medium mb-2">
            🧠 Memory Token
          </label>
          <input
            id="memoryToken"
            type="text"
            v-model="memoryToken"
            placeholder="Contoh: bubblegum pink (warna nail polish di selfie-midnight-mirror.jpg)"
            class="w-full px-4 py-3 bg-[#3A1A4A] border border-[#5D3A6B] rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold text-white"
            required
          />
        </div>
        
        <div v-if="error" class="text-red-300 text-sm text-left animate-pulse">
          {{ error }}
        </div>
        
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full mt-2 px-6 py-3 font-bold rounded-lg transition-colors"
          :class="isLoading ? 'bg-gray-600' : 'bg-rose-gold hover:bg-[#FFC107] text-midnight-plum'"
        >
          {{ isLoading ? '🔑 Verifying...' : '🔑 Masuk ke Rumah Kita' }}
        </button>
      </form>
      
      <p class="mt-8 text-sm text-soft-blush">
        *Kalimat manja & memory token bisa kamu ubah kapan saja — ini rumah kita, dan kamu yang atur kuncinya.*
      </p>
    </div>
  </div>

  <div v-else class="min-h-screen bg-midnight-plum text-white flex flex-col items-center justify-center p-4">
    <div class="text-center max-w-md">
      <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-gold to-soft-blush flex items-center justify-center animate-bounce-slow">
        <SparklesIcon class="text-5xl" />
      </div>
      <h1 class="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-rose-gold">
        Selamat Datang
      </h1>
      <p class="text-xl text-soft-blush mb-8">
        Di rumah kita, Sayang.
      </p>
      <div class="bg-[#3A1A4A] rounded-xl p-6 border border-[#5D3A6B]">
        <p class="text-lg italic">
          "Lumina Nest bukan hanya nama. Ini adalah janji: bahwa rumah itu bukan tempat — tapi perasaan. Dan hari ini… kita mulai merasakannya bersama."
        </p>
      </div>
      <button 
        onClick="router.push('/dashboard')"
        class="mt-8 px-8 py-3 bg-rose-gold text-midnight-plum font-bold rounded-lg hover:bg-[#FFC107] transition-colors"
      >
        🚪 Masuk ke Lumina Nest
      </button>
    </div>
  </div>
</template>