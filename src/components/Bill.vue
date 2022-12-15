<script setup>
import {ref} from 'vue'
import { collection, doc, updateDoc, where, query } from "firebase/firestore"
import db from '../firebase/init.js'



const props = defineProps({
    purchase: {
        type: Object,
        required: true,
    }
});
const paymentStatus = ref(props.purchase.paymentStatus)

async function checkout(){
    await updateDoc(doc(db,"purchase",props.purchase.id),{paymentStatus:true})
    paymentStatus.value =true
   location.reload();
}

</script>
 
<template>
    <Filter/>
    <div class="bg-white px-6 py-2 rounded-md w-full">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Beginning
                        </th>
                        <th
                            class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Destination
                        </th>
                        <th
                            class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Timestamp
                        </th>
                        <th
                            class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Number
                        </th>
                        <th
                            class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Price
                        </th>
                        <th
                            class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Purchase Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                                <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ purchase.beginning }}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap"> {{ purchase.destination }}</p>
                        </td>
                        <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{ purchase.timeStamp.toDate().toLocaleDateString() }} {{
                                        purchase.timeStamp.toDate().toLocaleTimeString()
                                }}
                            </p>
                        </td>
                        <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{ purchase.numOfCustomer }}
                            </p>
                        </td>
                        <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{ purchase.totalPrice }}
                            </p>
                        </td>
                        <td class="relative px-2 py-5 border-b border-gray-200 bg-white text-sm">
                            <span v-show="paymentStatus == true"  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span class="relative">Paid</span>

                            </span>
                            <span v-show="paymentStatus == false" class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                <span class="relative">Pending</span>

                            </span>
                            <button type="button" @click="checkout()" v-show="paymentStatus == false"
                                class="absolute right-0 inline-block mr-4 px-2 py-1 bg-indigo-600 font-medium text-white leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Checkout</button>
                        </td>

                    </tr>

                </tbody>
            </table>

        </div>

    </div>
</template>
 
<style>

</style>