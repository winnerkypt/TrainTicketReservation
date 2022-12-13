<script setup>
import { ref, onMounted } from 'vue'
import { query, collection, updateDoc, onSnapshot, getDocs, getCountFromServer } from 'firebase/firestore'
import db from '../firebase/init.js'
import Ticket from '../components/Ticket.vue'

const tickets = ref([])

async function getTickets() {
  const ticketRef = collection(db, 'trains')
  const qry = await getDocs(ticketRef)
    tickets.value = []
    qry.forEach(async (docs) => {
      let data = docs.data();
      data.id = docs.id;

      tickets.value.push(data);
    })
}

onMounted(() => {
  getTickets()
})
</script>
 
<template>
  <div class="grid grid-cols-2 gap-2 ">
    <Ticket v-for="ticket in tickets" :ticket="ticket" :key="ticket.id"/>
  </div>


</template>
 
<style>

</style>