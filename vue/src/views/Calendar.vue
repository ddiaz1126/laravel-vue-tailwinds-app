<template>
  <div class="flex flex-col justify-center items-centerace-x-5" v-bind="$attrs">
    <div class="flex flex-row">
      <!-- Left Container -->
      <div class="p-3" style="width: 280px;">
        <button class="bg-green-500 text-white p-2 rounded-md" style="margin-top: 40px;">
          Add Client
        </button>
        <div class="flex flex-col">
          <!-- Include your existing content here -->
          <Month @selected="changeMonth" />
          <Dates :selectedValues="selectedValues" :selectedDate="selectedDateValue" @selected="changeDate" />
        </div>
        <div class="gray-container" style="margin-top: 20px; margin-left: 3px">
          <h2 class="title">My Clients:</h2>
          <ul>
            <li>
              <label>
                <input type="checkbox" v-model="client1Selected" /> Client 1
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" v-model="client2Selected" /> Client 2
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" v-model="client3Selected" /> Client 3
              </label>
            </li>
          </ul>
        </div>
      </div>
      <!-- Right Container for Big Calendar -->
      <div class="flex flex-grow">
        <BigCalendar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { defineAsyncComponent, ref, reactive } from 'vue'
import BigCalendar from './BigCalendar.vue';


// const Year = defineAsyncComponent(() => import('../components/calendar/Year.vue'))
const Month = defineAsyncComponent(() => import('../components/calendar/Month.vue'))
const Dates = defineAsyncComponent(() => import('../components/calendar/Dates.vue'))

const selectedDateValue = ref(dayjs().date())

const selectedValues = reactive({
    month: dayjs().month(),
    year: dayjs().year(),
})

function changeMonth(v) {
    selectedDateValue.value = null
    selectedValues.month = v
}
function changeYear(v) {
    selectedDateValue.value= null
    selectedValues.year = v
}
function changeDate(v){
    selectedDateValue.value = v
}
</script>

<style scoped>
.gray-container {
  background-color: rgb(219, 219, 219);
  padding: 20px;
  height: 400px;
  width: 250px;
  border-radius: 10px;
  margin-left: 20px;
}
.title {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px; 
}
</style>