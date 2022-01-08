<template>
  <div class="loginPage">
    <div class="login">
      <h1>Login</h1>

      <form class="input" @submit.prevent="login">
          <div>
        Enter Your E-mail :
        <input
          type="email"
          placeholder="Your email"
          v-model="email"
        />
          </div>
          <div>
        Enter Your Password :
        <input
          type="password"
          placeholder="Your password"
          v-model="password"
        />
          </div>
          <div class="button">
              <input  type="submit" value="Login" />
          </div>
        
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
  background: url("../assets/login_bg.jpg");
  background-size: cover;
}
.login {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  height: 400px;
  border-radius: 40px;
  /* color: black; */
  background-color: rgba(0, 0, 0, 0.479);
  color: white;
}
.input {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100px;
}
.button{
  margin-top: 15px;
}
.button input{
    outline: none;
  /* margin-right: 15px; */
  padding: 9px 17px 9px 17px;
  font-size: 20px;
  background-color: #ef4136;
  border-radius: 8px;
  margin-top:10px;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.button input:hover{
    background-color: white;
    color:#ef4136 ;
}
input{
    font-family: sans-serif;
    outline: none;
    border-style:none;
    padding: 5px;
    margin: 8px;

}
a{
    color:#ef4136 ;
}
a:hover{
color: white;
}
a:active{
color: rgba(60, 233, 17, 0.657);
}
</style>