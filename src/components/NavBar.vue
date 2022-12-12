<script setup>

</script>
 
<template>
<div>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 px-8 py-4">
      <div class="flex justify-between  items-center flex-shrink-0 text-white mr-12">

        <svg height="50" id="Layer_1" version="1.1" viewBox="0 0 30 30" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 30 30">
          <path
            d="M22.6 5.8c-.1-1-.9-1.8-2-1.8H19c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1H9.4c-1 0-1.9.8-2 1.8l-.8 12c-.1 1.2.9 2.2 2 2.2h12.8c1.2 0 2.1-1 2-2.2l-.8-12zM10 18c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0-6V8c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-8c-.6 0-1-.4-1-1zm10 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM5.9 27l2.8-5H11l-.6 1h9.3l-.6-1h2.3l2.8 5h-2.3l-1.1-2H9.3l-1.1 2H5.9z"
            fill="#fafafa" class="fill-c6c9cc"></path>
        </svg>

        <div class="font-semibold text-xl tracking-tight ml-4">Train Ticket Reservation</div>
      </div>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="lg:flex-grow">
          
        </div>
        <div>
          <router-link :to="{name: 'Home'}" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline text-lg mr-12">
            Home
          </router-link>
          <router-link :to="{name: 'Purchase'}" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline text-lg mr-12">
            Purchase History
          </router-link>
          <router-link :to="{name:'Login'}"
            class="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">LOGIN</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
 
<style>

</style>