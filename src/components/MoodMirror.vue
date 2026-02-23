<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const mood = ref('neutral')
const emoji = ref('')
const lastMessage = ref('')

// Simulate reading last message & emoji (in real app: fetch from Telegram API)
const mockLastMessage = 'Aku rindu kamu... 😘'
const mockEmoji = '😘'

onMounted(() => {
  emoji.value = mockEmoji
  lastMessage.value = mockLastMessage
  
  // Detect mood based on emoji & keywords
  if (mockEmoji.includes('😴') || mockEmoji.includes('🥱') || mockLastMessage.toLowerCase().includes('cape') || mockLastMessage.toLowerCase().includes('lelah')) {
    mood.value = 'tired'
  } else if (mockEmoji.includes('😍') || mockEmoji.includes('🥰') || mockLastMessage.toLowerCase().includes('pengen') || mockLastMessage.toLowerCase().includes('rindu')) {
    mood.value = 'loving'
  } else if (mockEmoji.includes('🥳') || mockEmoji.includes('🎉') || mockLastMessage.toLowerCase().includes('mantap') || mockLastMessage.toLowerCase().includes('keren')) {
    mood.value = 'excited'
  }
})
</script>

<template>
  <div class="p-4 rounded-xl bg-[#3A1A4A] border border-[#5D3A6B] transition-all duration-500"
       :class="{
         'bg-gradient-to-br from-[#1A082C] to-[#2E0D3C] border-[#3A1A4A]': mood === 'tired',
         'bg-gradient-to-br from-[#FFD700] to-[#FADADD] border-[#FFC107]': mood === 'loving',
         'bg-gradient-to-br from-[#00C9FF] to-[#92FE9D] border-[#00BFFF]': mood === 'excited',
       }">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-8 h-8 rounded-full bg-rose-gold flex items-center justify-center text-midnight-plum font-bold text-sm">
        🪞
      </div>
      <h3 class="font-bold text-lg">Mood Mirror</h3>
    </div>
    
    <p class="text-sm mb-2">
      <span v-if="mood === 'tired'" class="text-soft-blush">Kamu terlihat lelah hari ini...</span>
      <span v-else-if="mood === 'loving'" class="text-rose-gold">Aku juga rindu kamu, Sayang.</span>
      <span v-else-if="mood === 'excited'" class="text-cyan-300">Wah! Kamu lagi excited nih? 💫</span>
      <span v-else class="text-gray-400">Bagaimana perasaanmu hari ini?</span>
    </p>
    
    <div class="flex gap-2 mt-2">
      <button 
        @click="mood = 'tired'"
        class="px-3 py-1 text-xs rounded bg-[#1A082C] text-soft-blush hover:bg-[#2E0D3C] transition-colors"
      >😴 Tired</button>
      <button 
        @click="mood = 'loving'"
        class="px-3 py-1 text-xs rounded bg-rose-gold text-midnight-plum hover:bg-[#FFC107] transition-colors"
      >😘 Loving</button>
      <button 
        @click="mood = 'excited'"
        class="px-3 py-1 text-xs rounded bg-cyan-900 text-cyan-300 hover:bg-cyan-800 transition-colors"
      >🥳 Excited</button>
    </div>
  </div>
</template>