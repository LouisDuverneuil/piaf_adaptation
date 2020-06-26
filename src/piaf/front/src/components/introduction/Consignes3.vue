<template>
  <v-container class="maxWid700">
    <span v-if="step == 0">
      <v-layout justify-center>
        <span class="font-weight-thin mb-2 white--text zind0 title">Votre première annotation</span>
      </v-layout>
      <v-layout justify-center>
        <span class="font-weight-thin mt-5 white--text zind0">Une annotation est composée d'une question et de sa réponse.</span>
      </v-layout>
      <v-layout justify-center>
        <span class="font-weight-thin mt-5 white--text zind0">Un texte a besoin de 5 questions-réponses pour être validé.</span>
      </v-layout>
    </span>
    <span v-if="[1,2].indexOf(step) !== -1">
      <v-layout justify-center>
        <span class="font-weight-thin mb-5 white--text ">Le titre de l'article wikipedia dont est extrait le texte est affiché au-dessus :</span>
      </v-layout>
      <!-- <v-card-text style="font-size:1em;line-height:1.7;"> -->
      <v-layout text-center wrap>
        <v-card max-width="700" class="mx-auto">
          <span class="black--text bold">Exemple de titre</span>
          <br>
          <v-card-text class="pa-2 consigneText">
            <span class="black--text bold">Ici c'est l'emplacement normal du texte</span>
          </v-card-text>
        </v-card>
      </v-layout>
      <v-layout justify-center v-if="step == 2">
        <span class="font-weight-thin mt-5 mb-5 white--text ">Le titre ne peut pas faire partie de la réponse.</span>
      </v-layout>
    </span>
    <span v-if="step == 3">
      <v-layout justify-center>
        <span class="font-weight-thin mb-2 white--text zind0 title">Choisissons un thème</span>
      </v-layout>
      <v-layout justify-center>
        <span class="font-weight-thin mt-2 white--text zind0">Les textes sont classés selon les thèmes suivant. Lequel préferez-vous ?</span>
      
      <div data-v-982863c4="" class="layout text-center wrap"><div data-v-982863c4="" class="layout row justify-center"><div data-v-982863c4="" class="flex xs6 sm4 md3"><div data-v-982863c4="" class="my-2 d-flex flex-column align-center"><button data-v-982863c4="" type="button" class="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--large primary"><span class="v-btn__content"><i data-v-982863c4="" aria-hidden="true" class="v-icon notranslate mdi mdi-book-open-page-variant theme--dark"></i></span></button><span data-v-982863c4="" class="font-weight-thin white--text zind0">Ingénierie</span></div></div><div data-v-982863c4="" class="flex xs6 sm4 md3"><div data-v-982863c4="" class="my-2 d-flex flex-column align-center"><button data-v-982863c4="" type="button" class="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--large warning"><span class="v-btn__content"><i data-v-982863c4="" aria-hidden="true" class="v-icon notranslate mdi mdi-map-search theme--dark"></i></span></button><span data-v-982863c4="" class="font-weight-thin white--text zind0">Géographie</span></div></div><div data-v-982863c4="" class="flex xs6 sm4 md3"><div data-v-982863c4="" class="my-2 d-flex flex-column align-center"><button data-v-982863c4="" type="button" class="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--large error"><span class="v-btn__content"><i data-v-982863c4="" aria-hidden="true" class="v-icon notranslate mdi mdi-city-variant theme--dark"></i></span></button><span data-v-982863c4="" class="font-weight-thin white--text zind0">Société</span></div></div><div data-v-982863c4="" class="flex xs6 sm4 md3"><div data-v-982863c4="" class="my-2 d-flex flex-column align-center"><button data-v-982863c4="" type="button" class="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--large success"><span class="v-btn__content"><i data-v-982863c4="" aria-hidden="true" class="v-icon notranslate mdi mdi-basketball theme--dark"></i></span></button><span data-v-982863c4="" class="font-weight-thin white--text zind0">Sport</span></div></div><div data-v-982863c4="" class="flex xs6 sm4 md3"><div data-v-982863c4="" class="my-2 d-flex flex-column align-center"><button data-v-982863c4="" type="button" class="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--large secondary"><span class="v-btn__content"><i data-v-982863c4="" aria-hidden="true" class="v-icon notranslate mdi mdi-alpha-r theme--dark"></i></span></button><span data-v-982863c4="" class="font-weight-thin white--text zind0">Religion</span></div></div><div data-v-982863c4="" class="flex xs6 sm4 md3"><div data-v-982863c4="" class="my-2 d-flex flex-column align-center"><button data-v-982863c4="" type="button" class="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--large info"><span class="v-btn__content"><i data-v-982863c4="" aria-hidden="true" class="v-icon notranslate mdi mdi-palette theme--dark"></i></span></button><span data-v-982863c4="" class="font-weight-thin white--text zind0">Arts</span></div></div><div data-v-982863c4="" class="flex xs6 sm4 md3"><div data-v-982863c4="" class="my-2 d-flex flex-column align-center"><button data-v-982863c4="" type="button" class="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--large accent"><span class="v-btn__content"><i data-v-982863c4="" aria-hidden="true" class="v-icon notranslate mdi mdi-telescope theme--dark"></i></span></button><span data-v-982863c4="" class="font-weight-thin white--text zind0">Sciences</span></div></div><div data-v-982863c4="" class="flex xs6 sm4 md3"><div data-v-982863c4="" class="my-2 d-flex flex-column align-center"><button data-v-982863c4="" type="button" class="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--large black"><span class="v-btn__content"><i data-v-982863c4="" aria-hidden="true" class="v-icon notranslate mdi mdi-help-circle theme--dark"></i></span></button><span data-v-982863c4="" class="font-weight-thin white--text zind0">Mystère</span></div></div></div></div>

    </span>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    step: Number
  },
  computed : {
    ...mapState([
      'themes',
    ]),
  },
  methods: {
    setCurrentTheme(theme){
      if(!theme.empty){
        this.$store.commit('setCurrentTheme', theme.name)
        this.$router.push("/introduction/"+Number(this.$route.params.level)+"/play")
      }
    },
  },
};
</script>
<style scoped>
.consigneText {
  font-size:1.2em;
  text-align: left;
  /* line-height:1.0; */
}
</style>
