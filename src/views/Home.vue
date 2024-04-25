<template>
  <div>
    <Header/>
    <HomeMain/>
    <Footer/>
  </div>
</template>

<script>
import HomeMain from "@/components/HomeMain";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {Footer, Header, HomeMain}
}
</script>
