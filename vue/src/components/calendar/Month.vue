<template>
  <div class="bg-gray-700 p-3 grid place-items-center">
    <span class="flex items-center space-x-3 select-none text-gray-50">
      <ChevronLeftIcon class="h-5 w-5 text-gray-400 cursor-pointer" @click="() => modifyMonth(-1)" />
      <span>{{ cMonthWithYear }}</span> <!-- Combine year and month -->
      <ChevronRightIcon class="h-5 w-5 text-gray-400 cursor-pointer" @click="() => modifyMonth(1)" />
    </span>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { ref, computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const monthEmit = defineEmits<{ (e: 'selected', v: number): void }>()

const year = ref<number>(dayjs().year())
const month = ref<number>(dayjs().month())

const cMonth = computed(() => dayjs().month(month.value).format('MMMM'))
const cMonthWithYear = computed(() => `${cMonth.value} ${year.value}`) // Combine year and month

function modifyMonth(v) {
  month.value += v
  monthEmit('selected', month.value)
}
</script>