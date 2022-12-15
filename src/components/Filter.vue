<script setup>
import { ref, onBeforeMount, onUpdated } from 'vue'
import { collection, doc, getCountFromServer, where, query } from "firebase/firestore"
import db from '../firebase/init.js'

defineEmits(['filter'])

const startPrice = ref()
const endPrice = ref()

const countPaid = ref()
const countPending = ref()


async function countPaidPending() {
    const purchaseRef = collection(db, 'purchase')
    countPaid.value = (await getCountFromServer(query(purchaseRef, where("paymentStatus", "==", true)))).data().count
    countPending.value = (await getCountFromServer(query(purchaseRef, where("paymentStatus", "==", false)))).data().count
}

onBeforeMount(() => {
    countPaidPending()
})


</script>
 

<template>

    <div class="2xl:container 2xl:mx-auto">

        <div id="filterSection"
            class="grid grid-cols-2 gap-2 block relative md:py-10 lg:px-10 md:px-6 py-9 px-4 bg-gray-50 dark:bg-gray-800 w-full">


            <!-- Colors Section -->
            <div>
                <div class="flex space-x-2 text-gray-800 dark:text-white">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg3.svg"
                        alt="colors" />
                    <img class="hidden dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg3dark.svg" alt="colors" />
                    <p class="text-lg font-medium">Payment Status</p>
                    <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                        <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                        <button class="relative" @click="$emit('filter', 'pending')">Pending ({{ countPending
                        }})</button>

                    </span>
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <button class="relative" @click="$emit('filter', 'paid')">Paid ({{ countPaid }})</button>

                    </span>
                </div>
            </div>


            <!-- Collection Section -->
            <div>
                <div class="flex space-x-2 text-gray-800 dark:text-white ">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg6.svg"
                        alt="collection" />
                    <img class="hidden dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg6dark.svg" alt="collection" />
                    <p class="text-lg font-medium ">Price Range</p>

                    <span class="flex justify-center items-center">
                        <input
                            class="w-36 font-normal rounded-lg border-slate-300 border-solid border-2 px-1 text-gray-400"
                            placeholder="start price" type="number" v-model="startPrice" />
                    </span>
                    <span class="flex justify-center items-center">
                        <input
                            class="w-36 font-normal rounded-lg border-slate-300 border-solid border-2 px-1 text-gray-400"
                            placeholder="end price" type="number" v-model="endPrice" />
                    </span>

                    <button
                        class="inline-block mr-4 px-4 py-1 bg-teal-500 text-white font-normal text-base leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        @click="$emit('filter', 'beginning', startPrice, endPrice)">apply</button>

                </div>
            </div>


        </div>
    </div>




</template>
 
<style>

</style>