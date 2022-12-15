<script setup>
import { ref } from 'vue'

const beginning = ref()

defineEmits(['filter'])

const props = defineProps({
    countTickets: {
        type: Number,
        required: true,
    }
});

</script>
 
<template>
    <div class="2xl:container 2xl:mx-auto">

        <div id="filterSection"
            class="grid grid-cols-3 gap-3 block relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 dark:bg-gray-800 w-full">

            <!-- Collection Section -->
            <div>
                <div class="flex space-x-2 text-gray-800 dark:text-white ">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg6.svg"
                        alt="collection" />
                    <img class="hidden dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg6dark.svg" alt="collection" />
                    <p class="text-lg font-medium ">Beginning : </p>

                    <span class="flex justify-center items-center">
                        <input
                            class="w-36 font-normal rounded-lg border-slate-300 border-solid border-2 px-1 text-gray-400"
                            placeholder="beginning" type="text" v-model="beginning" />
                    </span>



                    <button
                        class="inline-block mr-4 px-4 py-1 bg-teal-500 text-white font-normal text-base leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        @click="$emit('filter', 'beginning', beginning)">search</button>

                </div>
            </div>



            <div>
                <div class="flex justify-center flex space-x-2 text-gray-800 dark:text-white ">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg6.svg"
                        alt="collection" />

                    <p class="text-lg font-medium pr-2">Sort price </p>

                    <div class="flex justify-center items-center text-lg font-medium ">

                        <input name="sort" type="radio" id="desc" value="desc"
                            @click="$emit('filter', 'price', `desc`)">
                        <label for="desc" class="pl-2 pr-1">Descending</label>

                        <input name="sort" type="radio" id="asc" value="asc" @click="$emit('filter', 'price', `asc`)">
                        <label for="asc" class="pl-2 pr-1">Ascending</label>


                    </div>


                </div>
            </div>


            <div>
                <div class="flex justify-center space-x-2 text-gray-800 dark:text-white ">
                    <button
                        class="inline-block mr-1 px-2 py-1 bg-teal-500 text-white font-normal text-base leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        @click="$emit('filter', 'minPrice')">min</button>

                    <button
                        class="inline-block px-2 py-1 bg-teal-500 text-white font-normal text-base leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        @click="$emit('filter', 'maxPrice')">max</button>

                    <p class="text-lg font-medium">All Ticket : {{ countTickets }}</p>

                    <button
                        class="inline-block mr-4 px-4 py-1 bg-teal-500 text-white font-normal text-base leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        @click="$emit('filter', 'countTicket')">count</button>
                </div>
            </div>

        </div>
    </div>

</template>
 
<style>

</style>