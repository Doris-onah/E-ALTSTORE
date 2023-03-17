

<template>
  <div class="home">
   <main>
    <div class="home-con">
    <div class="text">
      <div class="text-con">
      
<h1> <b>BE CONNECTED</b> <br>
<b>STAY CONNECTED </b></h1>

<p>we have more than 1000 products for you to choose from
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Delectus aut distinctio fugit dignissimos ipsam vero numquam
   voluptatibus. Similique dolorum delectus commodi ducimus? 
  Soluta aperiam dignissimos, autem ipsum aliquid neque facere.
</p>
    </div>

   <span> <RouterLink to="/Shop"><button>Shop Now</button></RouterLink>
          <RouterLink to="/SignUp"> <button>SignUp</button></RouterLink></span>

    </div>

    <RouterView />
    <div class="hero">
<img src="../assets/hero.png" alt="hero" class="hero-img">
    </div>
    </div>
  </main>

  
    <div class="phone">
    <div class="card" >
     <img src="https://i.dummyjson.com/data/products/5/2.jpg" alt="product">
    </div>


    <div class="card-2" >
     <img src="https://i.dummyjson.com/data/products/1/3.jpg" alt="product">
    </div>
  </div>
   
<footer>
  <i class="fa-brands fa-facebook" ></i>
  <i class="fa-brands fa-twitter"></i>
  <i class="fa-brands fa-square-instagram"></i>
</footer>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },


};


</script>


<style>
.home {
  width: 100%;
  height: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  background-image: url(../assets/pattern-background-desktop.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;
}
.card {
  width: 190px;
  height: 254px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
 
}
.card-1 {
  width: 170px;
  height: 234px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.card-2 {
  width: 150px;
  height: 214px;
  /* background: rgb(226, 229, 243); */
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
}

main {
  width: 100%;
height: 70%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
main div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .hero-img {
 width: 800px;
} */
.text {
  width: 100%;
  height: 600px;
  display: flex;
  /* background-color: red; */
  flex-direction: column;
  justify-content: center;
 

}
.text-con {
  width: 60%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
h1, h2 {
  font-size: 50px;
  color: #090909;
  font-weight: 900;
  
  line-height: 1.5em;
  font-family: Montserrat;
}
button {
 color: #090909;
 padding: 0.7em 2.9em;

 font-size: 18px;
 border-radius: 0.5em;
 background: rgb(93, 93, 213);
 border: 1px solid #e8e8e8;
 
}

button:active {
 color: #e3f656;
 
}
.phone {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
footer {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position:absolute;
    bottom:0;
  background-color: rgb(162, 188, 188);
 
}
i {
  font-size: 20px;

}
span {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
p {
  font-size: 20px;
 
}
@media screen {
  
}

</style>