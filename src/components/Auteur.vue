<template>
  <div class="auteur">
    <p>{{ auteurPrenom }} {{auteurNom}}</p>
    <p>Né le {{ auteurDateDeNaissance }} à {{ auteurLieuDeNaissance }}</p>
    <p>Mort le {{ auteurDateDeDeces }} à {{ auteurLieuDeDeces }}</p>
    <p>oeuvres majeures : {{ auteurOeuvresMajeures }}</p>
    <p>{{ auteurCitation1 }}</p>
    <p>{{ auteurCitation2 }}</p>
    <p>{{ auteurCitation3 }}</p>
    <p><img :src="require( `../assets/${this.auteurPhoto}`)" class="photo"/></p>
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
      auteurCitation2: this.$route.params.citation2,
      auteurCitation3: this.$route.params.citation3,
      auteurPhoto: this.$route.params.photo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.auteur {
  min-height: 92vh;
  background-color: rgb(207, 18, 18);
}
.photo {
  width: 18vw;
  height: 40vh;
}
</style>