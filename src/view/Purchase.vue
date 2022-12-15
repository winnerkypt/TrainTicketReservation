<script setup>
import { ref, onMounted, onBeforeUpdate } from 'vue'
import { query, collection, where, onSnapshot, getDocs, getCountFromServer } from 'firebase/firestore'
import db from '../firebase/init.js'
import Bill from '../components/Bill.vue'
import Filter from '../components/Filter.vue'

const purchases = ref([])

async function getPurchase() {
    const purchaseRef = collection(db, 'purchase')
    const qry = await getDocs(query(purchaseRef, where("userId", "==", localStorage.getItem("firstname"))))
    purchases.value = []
    qry.forEach(async (docs) => {
        let data = docs.data();
        data.id = docs.id;

        purchases.value.push(data);
    })
}


const isLoggedIn = ref(false)

if (localStorage.getItem("firstname") == null) {
    isLoggedIn.value = false
} else {
    isLoggedIn.value = true
}


async function filter(index, startPrice, endPrice) {
    let qry = null
    if (index == 'paid') {
        const purchaseRef = collection(db, 'purchase')
        qry = query(purchaseRef, where("paymentStatus", "==", true))
    } else if (index == 'pending') {
        const purchaseRef = collection(db, 'purchase')
        qry = query(purchaseRef, where("paymentStatus", "==", false))
    } else if (index == 'rangePrice') {
        const purchaseRef = collection(db, 'purchase')
        qry = query(purchaseRef, where("totalPrice", ">=", startPrice), where("totalPrice", "<=", endPrice))
    }
    purchases.value = []
    const querySnap = await getDocs(qry);
    querySnap.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        purchases.value.push(data);
    });
}

onMounted(() => {
    getPurchase()

})



</script>
 
<template>
    <div>
        <Filter @filter="filter" />
        <p v-if="isLoggedIn == false" class="text-center my-72 text-4xl text-gray-500 font-bold">Please <router-link
                :to="{ name: 'Login' }" class="underline"> log in
            </router-link> first !!!</p>

        <Bill v-for="purchase in purchases" :purchase="purchase" :key="purchase.id" />
    </div>

</template>
 
<style>

</style>