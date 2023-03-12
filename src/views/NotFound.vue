<script setup>

</script>
<template>
    <div class="con">
        <div class="container">
                    <h1>404</h1>
                    <p>THE PAGE YOURE LOOKING FOR MIGHT HAVE BEEN REMOVED OR TERMPORARY NOT AVAILABLE</p>
                  <RouterLink to="/" ><button>GO BACK</button></RouterLink> 
                </div>
           
        </div>

</template>

<style>
.con {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
   
}
.container {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    border-radius: 10px;
}
</style>