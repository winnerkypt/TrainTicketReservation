<script setup>
import { collection, doc, getDocs, where, query } from "firebase/firestore"
import { ref, onMounted } from 'vue'
import db from '../firebase/init.js'
const email = ref("")
const password = ref("")

const user = ref({});
const isLoggedIn = ref(false);

async function login() {
  user.value = {};
  const usersRef = collection(db, "users");
  const qry = await getDocs(query(usersRef, where("email", "==", email.value),
    where("password", "==", password.value)));
  qry.forEach(e => {
    if (e.data() != null) {
      user.value = {
        firstname: e.data().firstname,
        name: e.data().firstname + ' ' + e.data().lastname,
        email: e.data().email
      }
      isLoggedIn.value = true;
      location.reload()
    }
  });
  if (!isLoggedIn.value) {
    alert('please login again')
  } else {
    alert('login successful')
    localStorage.setItem('firstname', user.value.firstname);
  }

}

</script>
 
<template>
  
  <section  class="h-screen">
    <div class="px-6 h-screen text-gray-800">
      <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-5/6 g-6 mx-36">
        <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="w-11/12"
            alt="Sample image" />
        </div>
        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <form>
            <!-- Email input -->
            <div class="mb-6">
              <input type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2" placeholder="Email address" v-model="email" />
            </div>

            <!-- Password input -->
            <div class="mb-6">
              <input type="password"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2" placeholder="Password" v-model="password" />
            </div>

            <div class="text-center lg:text-left">
              <button type="button"
                class="inline-block px-7 py-3 bg-teal-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                @click="login()">
                LOGIN
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
 
<style>

</style>