<template>
    <div class="login">
<form>
    <label for="name">email</label>
    <input type="email" id="name"  v-model="email" required/>


    <label for="password">Password</label>
    <input type="password" id="password" v-model="password" required />

 

    <button  :disabled="!email && !password" @click="onSubmit" >submit</button>
</form>
    </div>
</template>


<script>

export default {
    name: "LoginUser",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        onSubmit() {
          if (this.email && this.password) {
         this.$router.push({ name: "ShopView" });
            }
          }
        },
    
    
    mounted() {
       this.onSubmit();
    },
   
};
</script>
<style  >
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
label {
    margin: 10px;
    text-transform: uppercase;
}
input {
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
}



</style>




