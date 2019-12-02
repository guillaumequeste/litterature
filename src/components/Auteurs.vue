<template>
  <div class="auteurs">
    <p>liste</p>
    <div v-for="auteur in auteurs" :key="auteur.id">
      <router-link :to="{name: 'auteur', params: {id:auteur.id, nom:auteur.nom, prenom:auteur.prenom, date_de_naissance:auteur.date_de_naissance, lieu_de_naissance:auteur.lieu_de_naissance, date_de_deces:auteur.date_de_deces, lieu_de_deces:auteur.lieu_de_deces, oeuvres_majeures:auteur.oeuvres_majeures, citation1:auteur.citation1, citation2:auteur.citation2, citation3:auteur.citation3, photo:auteur.photo}}">{{auteur.id}}</router-link> - {{ auteur.nom }} {{auteur.prenom}}
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
.auteurs {
  min-height: 92vh;
  background-color: rgb(207, 18, 18);
}
</style>