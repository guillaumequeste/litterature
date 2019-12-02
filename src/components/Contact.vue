<template>
  <div class="bodyContact">
    <div class="divContact">
      <h3 class="mail">guillaume.queste@laposte.net</h3>
      <a href="http://www.guillaumequeste.fr" target="_blank" class="lienPortfolio">http://www.guillaumequeste.fr</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bodyContact {
  min-height: 92vh;
  background-color: rgb(207, 18, 18);
  display: flex;
}
.divContact {
    margin: auto;
    color: white;
}

.lienPortfolio {
    color: white;
    text-decoration: none;
    font-size: 1.8em;
}
@media screen and (max-width: 640px) {
    .mail {
        font-size: 0.8em;
    }
    .lienPortfolio {
        font-size: 1em;
    }
    .maj {
        font-size: 0.8em;
    }
}
</style>