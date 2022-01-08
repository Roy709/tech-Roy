<template>
  <div id="navigation">
    <div id="menu">
      <ul>
        <li>
          <router-link class="style1 home" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="style1 about" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="style1 projects" to="/">Projects</router-link>
        </li>
      </ul>
    </div>

    <div id="logo">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <div id="button">
      <ul>
        <li>
          <button class="style2" @click="logout">Logout</button>
        </li>
        &nbsp;&nbsp;
        <li>
          <button class="style2">
            <router-link to="/register">Register</router-link>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
require("firebase/compat/auth");
export default {
setup(){

  const logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Sign Out"))
        .catch((err) => alert(err.message));
    };
    return{
      logout,
    };
}


};
</script>

<style scoped>
#navigation {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 95px;
  background-color: rgba(0, 0, 0, 0.7);
}

li {
  list-style: none;
}
a {
  text-decoration: none;
  /* padding: 25px; */
  font-family: poppins;
}
.style1 {
  /* background-color: white; */
  color: #ef4136;
  border: 1px solid white;
  border-radius: 10px;
  padding: 15px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 17px;
}
.style1:hover {
  color: rgb(255, 255, 255);
  background: #ef4136;
  border:1px solid #ef4136;
}
#button{
  margin-right: 8px;
}
.style2 a {
  color: white;
  padding: 8px 20px 8px 20px;
  /* padding-ri: 10px; */
}
button a:hover {
  color:#ef4136 ;
}
button {
  border-style: none;
  color: white;
}
button:hover{
  color:#ef4136 ;
}
.style2 {
  outline: none;
  /* margin-right: 15px; */
  padding: 9px 12px 9px 12px;
  font-size: 20px;
  background-color: #ef4136;
  border-radius: 8px;
}
.style2:hover {
  background-color: white;
}

ul {
  display: flex;
}
#logo {
  display: flex;
  justify-items: center;
  width: 100px;
  height: 90px;
}
</style>