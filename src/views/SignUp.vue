<template>
    <div class="signpage">
      <form @submit.prevent="submit">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
        <input type="submit" id="submit" value="Sign Up" />
      </form>
    </div>
  </template>
  
  <script>
  import ShopView from "./ShopView.vue";
  
  export default {
    name: "SignUp",
    components: {
      ShopView,
    },
    data() {
      return {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
  
    methods: {
      submit() {
        this.$router.push({ name: "ShopView" });
      },
    },
  };
  </script>
  




<!-- <template>
    <div class="signpage">
        <form  @submit="submit">
            <label for="name">Name</label>
            <input type="text" id="name"  v-model="name" required/>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required/>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
            <label for="password">Confirm Password</label>
            <input type="password" id="password"  required />
           <input type="submit" id="submit" value="Sign Up" />
        </form>
    </div>
</template>

<script>
import ShopView from "./ShopView.vue";

export default {
    name: "SignUp",
    components: {
        ShopView,
      
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    
  methods: {
    submit() {  
      console.log("Submitted");
      this.$router.push({ name: "ShopView" }); 
    },
      
},
computed: {
    isLogged() {
      return this.$store.getters.isLogged
    },
  },
};


</script> -->
<style>
.signpage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
   
}
form {
    background-color: #fff;
    width: 700;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

form label {
    display: block;
    margin-bottom: 5px;
}

form input,
select {
    display: block;
    width: 500px;
    height: 40px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    background-color: #f9f9f9;
}

#submit {
    background-color: #007bff;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
   height: 50px;
}

#submit:hover {
    background-color: #0062cc;
}
</style>