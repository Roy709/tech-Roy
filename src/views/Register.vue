<template>
<div class="logi">
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register">
      Enter Your Full-Name :
      <input
        type="text"
        placeholder="Your Full-Name"
        v-model="fullName"
      />&nbsp;&nbsp;&nbsp;&nbsp; Enter Your E-mail :
      <input
        type="email"
        placeholder="Your email"
        v-model="email"
      /><br /><br />
      Enter Your Password :
      <input
        type="password"
        placeholder="Your password"
        v-model="password1"
      />&nbsp;&nbsp;&nbsp;&nbsp; Re-Enter Your Password :
      <input
        type="password"
        placeholder="Re-Enter Your password"
        v-model="password2"
      /><br /><br />
      <input type="submit" value="Register" />
    </form>
    <p>Have a account?<router-link to="/login">Login</router-link></p>
  </div>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase/compat/app";

export default {
  setup() {
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const password1 = ref("");
    const password2 = ref("");

    const register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => alert(user))
        .catch(() => alert("Enter Valid Data"));

      if (password1.value === password2.value) {
        password.value = password2.value;
      } else {
        alert("Your passwords are mismatch");
      }
    };
    return {
      fullName,
      email,
      password,
      password1,
      password2,
      register,
    };
  },
};
</script>

<style scoped>


</style>