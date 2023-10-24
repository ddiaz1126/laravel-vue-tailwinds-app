<template>
  <div>
    <!-- ... your existing code ... -->
    
    <!-- Include the color picker component in your template -->
    <v-color-picker v-model="selectedColor" @input="updateEventColor" />
    
    <div class="calendar-container">
      <FullCalendar :options="calendarOptions" ref="calendar" />
    </div>
  </div>
</template>
  
  <script>
  import FullCalendar from '@fullcalendar/vue3';
  import interactionPlugin from '@fullcalendar/interaction'; // Import the interaction plugin
  import dayGridPlugin from '@fullcalendar/daygrid';
  import ContextMenu from '@imengyu/vue3-context-menu'
  export default {
    components: {
      FullCalendar,
      'v-contextmenu': ContextMenu,
    },
    data() {
      return {
        calendarOptions: {
          plugins: [dayGridPlugin, interactionPlugin], // Add the interaction plugin
          initialView: 'dayGridMonth',
          weekends: true,
          fixedWeekCount: true,
          weekNumbers: false,
          selectable: true, // Allow date selection
          select: this.handleDateSelect, // Specify the event handler for date selection
          events: [
            { title: 'Client 1', start: '2023-10-16T10:00:00' },
            { title: 'Client 1', start: '2023-10-12T10:00:00' },
            { title: 'Client 1', start: '2023-10-13T10:00:00' },
            { title: 'Client 1', start: '2023-10-20T10:00:00' },
            { title: 'Client 1', start: '2023-10-22T10:00:00' },
            { title: 'Client 1', start: '2023-10-18T10:00:00' },
            { title: 'Client 2', start: '2023-10-08T10:00:00' },
            { title: 'Client 2', start: '2023-10-10T10:00:00' },
            { title: 'Client 2', start: '2023-10-16T10:00:00' },
            { title: 'Client 3', start: '2023-10-18T10:00:00' },
            // Add more events as needed
          ],
          editable: true,
          eventResizableFromStart: true,
          eventDurationEditable: true,
          displayEventTime: true,
          eventClick: this.handleEventClick, // Handle regular event click
          eventContextClick: this.handleEventContextClick, // Handle right-click event
        },
        isContextMenuOpen: false,
        contextMenuPosition: { top: 0, left: 0 },
        selectedEventId: null,
        availableColors: ['blue', 'red', 'green', 'yellow', 'purple'], // Add your color option
      };
    },
    methods: {
      handleDateSelect(info) {
        // You can access the selected range through info.start and info.end
        // You can use this information to create a new event
        const newEvent = {
          title: 'Client', // Provide a default title
          start: info.startStr,
          end: info.endStr,
          borderColor: 'blue',
        };
  
        // Add the new event to the FullCalendar
        this.$refs.calendar.getApi().addEvent(newEvent);
      },
    handleEventContextClick(arg) {
      const newColor = prompt('Enter a new border color for the event (e.g., red, blue, #FF5733):', arg.event.borderColor);
      if (newColor !== null) {
        // Update the event's border color with the user's choice
        arg.event.setProp('borderColor', newColor);
      }
    },
        // Method to update the event color with the selected color
        updateEventColor() {
      const selectedEvent = this.$refs.calendar.getApi().getEventById(this.selectedEventId);
      if (selectedEvent) {
        selectedEvent.setProp('borderColor', this.selectedColor);
      }
    },
  },
};
  </script>
  

  <style scoped>
  
  .calendar-container {
    width: 1000px; /* Adjust the width as needed */
  }
  
  /* You can set the height here without affecting the width */
  .calendar-container .fc {
    height: 900px; /* Adjust the height as needed */
    width: 1700px;
  }
  </style>

 