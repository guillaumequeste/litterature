<template>
  <div class="bodyAuteurs">
    <div v-for="auteur in auteurs" :key="auteur.id" class="divAuteurs">
      <router-link :to="{name: 'auteur', params: {id:auteur.id, nom:auteur.nom, prenom:auteur.prenom, date_de_naissance:auteur.date_de_naissance, lieu_de_naissance:auteur.lieu_de_naissance, date_de_deces:auteur.date_de_deces, lieu_de_deces:auteur.lieu_de_deces, oeuvres_majeures:auteur.oeuvres_majeures, citation1:auteur.citation1, oeuvreCitation1:auteur.oeuvreCitation1, citation2:auteur.citation2, oeuvreCitation2:auteur.oeuvreCitation2, citation3:auteur.citation3, oeuvreCitation3:auteur.oeuvreCitation3, photo:auteur.photo}}" class="lienAut">
        <span class="lienAuteurs">{{auteur.nom}}</span> <span class="lienAuteurs2">{{ auteur.prenom }}</span></router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Auteurs',
  data () {
    return {
      auteurs: null
    }
  },
  mounted () {
    axios
      .get('auteurs.json')
      .then(response => {
        this.auteurs = response.data
      })
    
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bodyAuteurs {
  min-height: 92vh;
  background-color: rgb(207, 18, 18);
  display: flex;
  flex-direction: column;
  text-align: center;
}
.divAuteurs {
  margin: auto;
}
.lienAut {
  text-decoration: none;
}
.lienAut:hover {
  color: white;
  text-decoration: underline;
}
.lienAuteurs {
  color: white;
  text-decoration: none;
  font-family: 'Courgette', cursive, sans-serif;
  font-size: 1.5em;
}

@media screen and (min-width: 768px) {
  .lienAuteurs {
    font-size: 2em;
  }
}
.lienAuteurs2 {
  color: white;
  text-decoration: none;
  font-family: 'Courgette', cursive, sans-serif;
  font-size: 1em;
}

</style>