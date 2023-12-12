<template>
  <q-page>
    <q-page-container>
      <div class="schedule-container">
        <!-- Calendar for selecting date and time -->
        <q-date v-model="selectedDate" :min="currentDate" @input="updateTimeSlots" />

        <!-- Time slots selection -->
        <div class="time-slots">
          <div
            v-for="(slot, index) in timeSlots"
            :key="index"
            class="time-slot"
            :class="{ 'selected': selectedTimeSlot === slot }"
            @click="selectTimeSlot(slot)"
          >
            {{ slot }}
          </div>
        </div>

        <!-- User details form -->
        <q-form @submit="submitReservation">
          <q-input v-model="userName" label="Your Name" />
          <q-input v-model="email" label="Email" type="email" />
          <q-btn label="Confirm Reservation" color="primary" type="submit" />
        </q-form>

        <!-- Notifications -->
        <q-notification
          v-if="notification"
          :message="notification"
          color="positive"
          position="top"
          :timeout="3000"
          @hide="clearNotification"
        />
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().toISOString(),
      selectedDate: null,
      timeSlots: [],
      selectedTimeSlot: null,
      userName: '',
      email: '',
      notification: null,
    };
  },
  methods: {
    updateTimeSlots() {
      // Example: Fetch available time slots for the selected date from the server
      // Replace this with your actual API call
      // Mocking the response for demonstration purposes
      const availableTimeSlots = this.fetchAvailableTimeSlots(this.selectedDate);
      this.timeSlots = availableTimeSlots;
      this.selectedTimeSlot = null;
    },
    fetchAvailableTimeSlots(selectedDate) {
      // Replace this with your actual API call to get available time slots
      // This is just a mock function for demonstration
      const mockedResponse = [
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '01:00 PM',
        '02:00 PM',
        '03:00 PM',
        '04:00 PM',
      ];
      return mockedResponse;
    },
    selectTimeSlot(slot) {
      this.selectedTimeSlot = slot;
    },
    submitReservation() {
      // Example: Send reservation details to the server
      // Replace this with your actual API call
      // Mocking the response for demonstration purposes
      const reservationDetails = {
        date: this.selectedDate,
        timeSlot: this.selectedTimeSlot,
        userName: this.userName,
        email: this.email,
      };
      this.sendReservationDetails(reservationDetails);
    },
    sendReservationDetails(reservationDetails) {
      // Replace this with your actual API call to save reservation details
      // This is just a mock function for demonstration
      console.log('Reservation details:', reservationDetails);
      this.showNotification('Reservation confirmed!');
    },
    showNotification(message) {
      this.notification = message;
    },
    clearNotification() {
      this.notification = null;
    },
  },
};
</script>

<style scoped>
/* Add custom styles as needed */
.schedule-container {
  max-width: 600px;
  margin: auto;
}

.time-slots {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.time-slot {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.time-slot.selected {
  background-color: #4285f4; /* Selected color */
  color: #fff;
}

/* Customize the appearance of the notification */
.q-notification.positive {
  background-color: #4caf50; /* Green */
  color: #fff;
}
</style>
