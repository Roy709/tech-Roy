<template>
  <div class="main">
    <div class="nav">
      <Nav v-if='this.$route.path !== "/login" && this.$route.path !== "/register"' />
    </div>
    <router-view />
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import firebase from "firebase/compat/app";
require("firebase/compat/auth");
import Nav from "./views/Nav.vue";

export default {
  components: {
    Nav,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace("/login");
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace("/");
        }
      });
    });
  },
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
  font-family: poppins;
}
/* body {
  /* background-image: url(https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80);
  background-size: cover; */
  /* color: white; */

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
</style>
