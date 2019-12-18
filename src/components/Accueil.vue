<template>
  <div class="accueil">
    <div class="titreAccueil">
      <div class="wrapper">
        <div class="text1">Littérature</div>
        <div class="text2">Littérature</div>
      </div>
      <img src="../assets/plume.png" alt="plume" class="imageAccueil">
      <div>
        <router-link to="/auteurs" class="listeDesAuteurs">Liste des auteurs</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.accueil {
  min-height: 92vh;
  background-color: rgb(207, 18, 18);
}
.titreAccueil {
  padding-top: 5%;
  text-align: center;
  color: white;
}
.text1{
  margin: 0;
  font-family: 'Great Vibes', cursive, sans-serif;
  font-size: 5em;
}
.text2{
  margin: 0;
  font-family: 'Great Vibes', cursive, sans-serif;
  font-size: 5em;
  transform: scaleY(-1);
  -webkit-mask-image: -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(20%, transparent), to(rgba(0, 0, 0, 0.7)));
}
@media screen and (min-width: 768px) {
  .text2 {
    font-size: 5em;
  }
}
.imageAccueil {
  width: 15%;
}
.listeDesAuteurs {
  font-size: 1em;
  font-family: 'Petit Formal Script', cursive, sans-serif;
  color: white;
  text-decoration: none;
}
.listeDesAuteurs:hover {
  text-decoration: underline;
}
</style>