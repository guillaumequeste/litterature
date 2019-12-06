<template>
  <div class="auteur">
    <h1 class="title">{{ auteurPrenom }} {{auteurNom}}</h1>
    <p class="text">Né le {{ auteurDateDeNaissance }} à {{ auteurLieuDeNaissance }}.</p>
    <p class="text">Mort le {{ auteurDateDeDeces }} à {{ auteurLieuDeDeces }}.</p>
    <p class="text"><span class="title2">Oeuvres majeures</span> : {{ auteurOeuvresMajeures }}</p>
    <div class="citations">
      <p class="citation">{{ auteurCitation1 }}<span class="titleOeuvre"> - {{ oeuvreCitation1 }}</span></p>
      <p class="citation">{{ auteurCitation2 }}<span class="titleOeuvre"> - {{ oeuvreCitation2 }}</span></p>
      <p class="citation">{{ auteurCitation3 }}<span class="titleOeuvre"> - {{ oeuvreCitation3 }}</span></p>
    </div>
    <p class="divPhoto"><img :src="require( `../assets/${this.auteurPhoto}`)" class="photo"/></p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
        //id is name of the dynamic segment we created in router
      auteurId: this.$route.params.id,
      auteurNom: this.$route.params.nom,
      auteurPrenom: this.$route.params.prenom,
      auteurDateDeNaissance: this.$route.params.date_de_naissance,
      auteurLieuDeNaissance: this.$route.params.lieu_de_naissance,
      auteurDateDeDeces: this.$route.params.date_de_deces,
      auteurLieuDeDeces: this.$route.params.lieu_de_deces,
      auteurOeuvresMajeures: this.$route.params.oeuvres_majeures,
      auteurCitation1: this.$route.params.citation1,
      oeuvreCitation1: this.$route.params.oeuvreCitation1,
      auteurCitation2: this.$route.params.citation2,
      oeuvreCitation2: this.$route.params.oeuvreCitation2,
      auteurCitation3: this.$route.params.citation3,
      oeuvreCitation3: this.$route.params.oeuvreCitation3,
      auteurPhoto: this.$route.params.photo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Great+Vibes|Petit+Formal+Script|Oxygen&display=swap');
.auteur {
  min-height: 92vh;
  background-color: rgb(207, 18, 18);
  padding: 3%;
}
.title {
  font-family: 'Great Vibes', cursive, sans-serif;
  color: white;
  font-size: 1.5em;
  text-align: center;
}
@media screen and (min-width: 760px) {
  .title {
    font-size: 3em;
  }
}
@media screen and (min-width: 1020px) {
  .title {
    font-size: 4em;
  }
}
@media screen and (min-width: 1050px) {
  .title {
    font-size: 3em;
  }
}
.text {
  font-family: 'Oxygen', sans-serif;
  font-size: 0.8em;
  margin: 0;
  color: yellow;
  opacity: 0.7;
}
@media screen and (min-width: 750px) {
  .text {
    font-size: 1.5em;
  }
}
@media screen and (min-width: 1050px) {
  .text {
    font-size: 1em;
  }
}
.title2 {
  text-decoration: underline;
  font-family: 'Times New Roman', Times, serif;
}
.citations {
  padding: 3% 0 3% 0;
}
@media screen and (min-width: 370px) {
  .citations {
    padding: 5% 0 5% 0;
  }
}
@media screen and (min-width: 1050px) {
  .citations {
    padding: 1% 0 1% 0;
  }
}
.citation {
  font-family: 'Petit Formal Script', cursive, sans-serif;
  color: white;
  font-size: 0.8em;
}
@media screen and (min-width: 760px) {
  .citation {
    font-size: 1.5em;
    padding-bottom: 3%;
  }
}
@media screen and (min-width: 1020px) {
  .citation {
    font-size: 1.8em;
    padding-bottom: 5%;
  }
}
@media screen and (min-width: 1050px) {
  .citation {
    font-size: 1.2em;
    padding-bottom: 0%;
  }
}
.titleOeuvre {
  color: black;
}
.divPhoto {
  text-align: center;
}
.photo {
  width: 170px;
  height: 200px;
}
@media screen and (min-width: 370px) {
  .photo {
    width: 200px;
    height: 230px;
  }
}
@media screen and (min-width: 1020px) {
  .photo {
    width: 300px;
    height: 330px;
  }
}
@media screen and (min-width: 1050px) {
  .photo {
    width: 150px;
    height: 180px;
  }
}
</style>