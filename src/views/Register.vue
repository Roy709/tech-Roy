<template>
<div class="registerPage">
  <div class="register">
    <h1>Register</h1>
    <form class="input" @submit.prevent="register">
      <div class="inputAlign">
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
      />
      </div>
      <div>
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
      />
      </div>
      <div class="button" >
      <input type="submit" value="Register" />
      </div>
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
.registerPage {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/login_bg.jpg");
  background-size: cover;
}
.register {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 800px;
  height: 500px;
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  ;
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
.inputAlign{
  padding-bottom: 8px;
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