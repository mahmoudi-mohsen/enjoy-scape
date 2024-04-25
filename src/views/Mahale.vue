<template>
  <div>
    <Header/>
    <MahaleMain/>
    <Footer/>
  </div>
</template>

<script>
import MahaleMain from "@/components/MahaleMain";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Footer,
    Header,
    MahaleMain
  }
}
</script>
