<template>
  <div class="loginPage">
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login">
        Enter Your E-mail :
        <input
          type="email"
          placeholder="Your email"
          v-model="email"
        /><br /><br />
        Enter Your Password :
        <input
          type="password"
          placeholder="Your password"
          v-model="password"
        /><br /><br />
        <input type="submit" value="Login" />
      </form>
      <p>Need an account? <router-link to="/register">Register</router-link></p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase/compat/app";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));
    };
    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style scoped>
.loginPage {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.250);
}
</style>