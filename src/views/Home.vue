<template>
  <div class="home">
    <h1>Welcome, {{name}} </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, enim quod? Quia maxime, sunt obcaecati mollitia minima dolor unde eligendi exercitationem ex ut at aliquid odio quo libero iste nam.</p>
    <button class="logout" @click="logout">Logout</button>
    <h4><router-link to="/about">About</router-link></h4>
  </div>
</template>
<script>
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase/compat/app';
require('firebase/compat/auth');
export default {
  setup() {
    const name = ref("");

onBeforeMount(()=>{
const user = firebase.auth().currentUser;
if (user) {
  name.value = user.email.split('@')[0];
};
});

const logout = () => {
  firebase
  .auth()
  .signOut()
  .then(()=>console.log("Sign Out"))
  .catch(err => alert(err.message))
}

return{
  name,
  logout,
}
  },
}
</script>

<style scoped>


</style>