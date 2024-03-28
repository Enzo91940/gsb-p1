<template>
  <NavbarComponent />
  <div>


  </div>
  <v-text-field @change="getRapports(); this.isListVisible = false; this.isModifFormVisible = false" label="Date du rapport"
    v-model="dateRapport" type="date">
  </v-text-field>
  <!-- Liste  -->
  <v-card class="mx-auto">
    <v-list v-show="isListVisible">
      <v-list-item v-for="item in items" :key="item.id" :value="item.nom" @click="getRapport(item)">
        {{ item.nomMedecin + " " + item.prenomMedecin }}
      </v-list-item>
    </v-list>
  </v-card>
  <div v-show="isModifFormVisible" :key="maj">
    <v-text-field label="Bilan" v-model="bilan"></v-text-field>
    <v-text-field label="Motif" v-model="motif"></v-text-field>
    <v-btn @click="majRapport">Modifier</v-btn>
  </div>





</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';




export default {
  name: "RapportsView",
  components: {
    NavbarComponent
  },
  data() {
    return {
      idVisiteur: this.$store.state.utilisateur.id,
      idRapport: '', //l'id du rapport selectionné
      motif: '', // Le motif du rappor selectionné
      bilan: '', //le bilan 
      dateRapport: '',// la date du rapport
      items: [], // variable stocker  le retour de l'api
      isModifFormVisible: false, //Afichage du formulaire modif
      isListVisible: false // affichage de la liste medecin visités
    }

  },
  methods: {
    //Méthode qui permet d'appeler l'API pour récupérer la liste des medecins
    // visités à la date choisie
    getRapports() {
      console.log(this.idVisiteur, this.dateRapport);
      this.$store.state.DataService.getLesRapportsADate(this.idVisiteur, this.dateRapport)
        .then(
          (data) => {
            this.isListVisible = true;
            this.items = data;
          })
        .catch(
          (error) => {
            console.log(error);
          }
        )
    },
    // Méthode qui permet de selectionner le rapport du medecin visité
    // dans la liste
    getRapport(item) {
      this.idRapport = item.idRapport;
      this.motif = item.motif;
      this.bilan = item.bilan;
      this.dateRapport = item.date;
      this.isModifFormVisible = true;
      this.isListVisible = false;

    },
    //Méthode qui permet de mettre à jour le rapport modifié
    majRapport() {
      let medecinModifier = {
        idRapport: this.idRapport,
        motif: this.motif,
        bilan: this.bilan,
      };

      this.$store.state.DataService.majRapports(medecinModifier)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        })

    }
  }

}

</script>