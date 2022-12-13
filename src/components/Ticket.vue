<script setup>
defineProps({
    ticket: {
        type: Object,
        required: true,
    }
});
</script>
 
<template>
    <div class="flex justify-center m-6">
        <div class="rounded-lg shadow-lg bg-white max-w-xl ">

            <div class="py-5 px-6 border-b text-gray-900 text-xl font-medium">
                <div class="relative text-teal-500 text-xl font-medium mb-2">
                    DESTINATION <p class="text-red-400 absolute right-0 inline-block">** {{ ticket.type }}</p>
                </div>
                {{ ticket.route.destination }}
            </div>
            <div class="p-8">
                <div class="grid grid-cols-2 gap-2 mb-6">
                    <div>
                        <p class="text-teal-500 text-xl font-medium mb-2">
                            ADULT
                        </p>
                        <p class="text-gray-600 text-xl font-medium mb-2">
                            {{ ticket.price }} baht / person
                        </p>
                    </div>
                    <div>
                        <p class="text-lg font-medium text-gray-600 text-center mb-2">Number of Passenger</p>
                        <div class="flex justify-center">
                            <button data-action="decrement"
                                class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-8 rounded-l cursor-pointer outline-none">
                                <span class="m-auto text-xl font-thin">−</span>
                            </button>
                            <span
                                class="pt-1 text-base font-medium focus:outline-none text-center px-4 bg-gray-300 hover:text-black focus:text-black text-gray-700">0</span>
                            <button data-action="increment"
                                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-8 rounded-r cursor-pointer">
                                <span class="m-auto text-xl font-thin">+</span>
                            </button>
                        </div>
                    </div>

                </div>

                <div class="text-teal-500 text-xl font-medium mb-2">BEGINNING :
                    <select name="beginning" id="beginning"
                        class="font-normal rounded-lg border-slate-300 border-solid border-2 px-4 text-gray-400">
                        <option value="hold" class="text-gray-400">Please select your beginning.</option>
                        <option v-for="beginning in ticket.route.beginning" :value="beginning" class="text-gray-600">{{
                                beginning
                        }}</option>
                    </select>
                </div>

                <p class="text-gray-400 font-medium relative mt-4"> TOTAL : BAHT 
                    <button type="button"
                        class="absolute right-0 inline-block mr-4 px-6 py-2 bg-teal-500 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Select</button>
                </p>


            </div>

        </div>
    </div>


</template>
 
<style>

</style>