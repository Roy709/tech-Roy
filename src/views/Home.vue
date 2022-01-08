<template>
  <div class="home">
    <div class="heading">
      <h1>Hi, I'am Roy</h1>
      <h2>I make websites come alive</h2>
    </div>
    <div class="total">
      <div class="content">
        <h1>
          Welcome, <span class="name">{{ name }}</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, enim
          quod? Quia maxime, sunt obcaecati mollitia minima dolor unde eligendi
          exercitationem ex ut at aliquid odio quo libero iste nam.
        </p>
        <!-- <button class="logout" @click="logout">Logout</button> -->
        <div class="about">
            <button >
          <h4><router-link to="/about">Know More</router-link></h4>
        </button>
        </div>
      
      </div>
      <div class="image">
        <img src="../assets/home.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase/compat/app";
require("firebase/compat/auth");
export default {
  setup() {
    const name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    // const logout = () => {
    //   firebase
    //     .auth()
    //     .signOut()
    //     .then(() => console.log("Sign Out"))
    //     .catch((err) => alert(err.message));
    // };

    return {
      name,
      // logout,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Teko:wght@300;400&family=The+Nautigal:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap");
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.heading {
  /* display: flex; */
  /* justify-content: center; */
  text-align: center;
  /* width: 100px; */
}
.total {
  /* margin-top: 50px; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.content {
  width: 600px;
}
img {
  width: 400px;
}

.heading h1 {
  margin-top: 20px;
  font-size: 50px;
  /* font-family:'Montserrat', sans-serif ; */
  font-family: "Teko", sans-serif;

  color: #e23b1e;
}
.heading h1:hover {
  text-shadow: 0 0 5px #cfa49e, 0 0 10px #a75b4e, 0 0 20px #88594d,
    0 0 30px #8a3b3b, 0 0 40px #974d4d;
}
h2 {
  /* font-family: 'Teko', sans-serif; */
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
}
.content h1 {
  font-family: "Montserrat", sans-serif;
  padding-bottom: 8px;
}
.name {
  /* font-size: 40px; */
  font-family: "Montserrat", sans-serif;
  color: #e23b1e;
}
.content p {
  font-family: "Metal Mania", cursive;
  font-size: 20px;
  line-height: normal;
  letter-spacing: normal;
}
.about{
  padding-top:15px;
}
button {
background-color: #e23b1e;
border: none;
padding: 9px 12px 9px 12px;
font-size: 18px;
border-radius: 8px;
}
a{
  padding: 9px 12px 9px 12px;
  color: white;
    text-decoration: none;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  }
  button:hover{
    background-color: #b62e16;

  }
</style>