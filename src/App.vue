<script >
import { RouterLink, RouterView } from 'vue-router'

export default {

  name: 'App',

  data() {
    return {
   
    };
  },
 
  methods: {
    login () {
      this.$store.dispatch('login')

    },
    logout() {
      this.$store.dispatch('logout')
    },
  },

  computed: {
    isLogged() {
      return this.$store.getters.isLogged

    },
  },
};

</script>

<template>
    <div id="app">
      <div class="con>">
      
  <header>
   <nav>

    <div class="nav-items">
      <div class="logo">
       <p>iamdoris</p>
      </div>
      </div>

      <div class="nav-links">
        <input type="text" placeholder="search" class="input">
        <ul>
       <li><RouterLink to="/">Home</RouterLink></li>
       <li> <RouterLink to="/Shop">Shop</RouterLink></li>
       <li> <RouterLink to="/CartView">Cart</RouterLink></li>
       <li><RouterLink to="NotFound">404</RouterLink></li>
      <li> <RouterLink to="/SignUp">
        <button v-if="isLogged" @click="logout">SignOut</button>
        <button v-else @click="login">SignUp</button>
      </RouterLink></li>

        </ul>
      </div>
      </nav>
  </header>

<section>
  <RouterView />
  </section>

    </div>
    </div>
</template>



<style  scoped
>


.con {
 
  text-align: center;
  width: 100%;
  height: 100%;
  /* background-color:hsl(228, 83%, 43%); */
  display: flex;
  justify-content: center;
  /* display: grid;
  flex-direction: column; */
}

section {
  width: 100%;
  height: 90%;
  
}

header {
background-color: hsl(225, 100%, 98%);
  color: black;
  width: 1800px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  height: 50px;
 

}

.nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
}
.nav-links ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 20px;
  list-style-type: none;
}
.input {
  width: 550px;
  height: 30px;
  border-radius: 10px;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 20px;
}

@media (min-width: 1024px) {
 
}
</style>
