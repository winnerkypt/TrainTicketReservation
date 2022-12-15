<script setup>
import { ref, onMounted } from 'vue'
import { query, getDoc, collection, where, orderBy, getDocs, getCountFromServer, limit } from 'firebase/firestore'
import db from '../firebase/init.js'
import Ticket from '../components/Ticket.vue'
import FilterTicket from '../components/FilterTicket.vue'

const tickets = ref([])
const countTickets = ref(0)

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
async function filterTicket(index, value) {

  let qry = null
  if (index == 'beginning') {
    const trainRef = collection(db, 'trains')
    qry = query(trainRef, where("route.beginning", "array-contains", value))
  } else if (index == 'price') {
    const trainRef = collection(db, 'trains')
    qry = query(trainRef, orderBy("price", value))
  } else if (index == 'countTicket') {
    const trainRef = collection(db, 'trains')
    qry = query(trainRef)
    countTickets.value = (await getCountFromServer(qry)).data().count
  } else if (index == 'maxPrice') {
    const trainRef = collection(db, 'trains')
    let qry1 = query(trainRef, orderBy("price", 'desc'), limit(1))
    let price = ref()
    const querySnap = await getDocs(qry1);
    querySnap.forEach((doc) => {
      price.value = doc.data().price
    });
    console.log(price.value)
    qry = query(trainRef, where("price", "==", price.value))
  } else if (index == 'minPrice') {
    const trainRef = collection(db, 'trains')
    let qry1 = query(trainRef, orderBy("price", 'asc'), limit(1))

    let price = ref()
    const querySnap = await getDocs(qry1);
    querySnap.forEach((doc) => {
      price.value = doc.data().price
    });
    console.log(price.value)
    qry = query(trainRef, where("price", "==", price.value))

  }
  tickets.value = []
  const querySnap = await getDocs(qry);
  querySnap.forEach((doc) => {
    let data = doc.data();
    data.id = doc.id;
    tickets.value.push(data);
    console.log(tickets.value)
  });

  if (index == 'countTicket') {
    const trainRef = collection(db, 'trains')
    qry = query(trainRef)
    countTickets.value = (await getCountFromServer(qry)).data().count
    console.log(countTickets.value)
  }
}


onMounted(() => {
  getTickets()
})
</script>
 
<template>
  <FilterTicket @filter="filterTicket" :countTickets="countTickets" />
  <div class="grid grid-cols-2 gap-2 ">

    <Ticket v-for="ticket in tickets" :ticket="ticket" :key="ticket.id" />
  </div>


</template>
 
<style>

</style>