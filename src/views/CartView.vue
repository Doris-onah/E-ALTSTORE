<!-- <script setup>
</script>
<template>
    <div>
        <h1>cart page</h1>
    </div>
</template> -->


<template>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}
            <ul>
                <li>{{ user.email }}</li>
                <li>{{ user.phone }}</li>
                <li>{{ user.website }}</li>
            </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
      };
    },
    mounted() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
  </script>
