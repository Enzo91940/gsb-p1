<template>
  <v-container>
    <!-- Barre d'outils avec les boutons "Consulter les rapports" et "Gérer le Médecin" -->
    <v-toolbar v-if="selectMedecin">
      <v-col class="d-flex justify-space-around">
  

      <v-btn @click= "this.$parent.isFicheMedVisible = false, this.$parent.isListeRapportsVisible = true" >Consulter les rapports</v-btn>
      <v-btn @click="this.$parent.isListeRapportsVisible = false, this.$parent.isFicheMedVisible = true ">Gérer le Médecin</v-btn>
  
      </v-col>
    </v-toolbar>

    <br>

    <!-- Barre de recherche -->
    <v-text-field @keyup="getLesMedecins" label="Nom de médecin" v-model="nomMedecin"></v-text-field>

    <!-- Liste des médecins -->
    <v-card class="mx-auto">
      <v-list v-show="isListVisible">
        <v-list-item v-for="item in items" :key="item.id" :value="item.nom" @click="getInfos(item)">
          {{ item.nom + " " + item.prenom }}
        </v-list-item>
      </v-list>
    </v-card>

  </v-container>


  
</template>

<script>


export default {
  name: 'RechercheMedecinComponent',
  data() {
    return {
      idMedecin: '',
      nomMedecin: '',
      items: [],
      isListVisible: false,
      item: '',
      isNavMedVisible: false,
      selectMedecin: null,
    };
  },

  methods: {
    getLesMedecins() {
      console.log(this.nomMedecin);
      this.$store.state.DataService.getMedecins(this.nomMedecin)
        .then(
          (data) => {
            console.log(data);
            this.items = data;
            this.isListVisible = true;
          })
        .catch(
          (error) => {
            console.log(error);
          }
        );
        this.$parent.maj++;
    },

    getInfos(item) {
      this.isListVisible = false;
      this.selectMedecin = item;
      this.nomMedecin = item.nom + " " + item.prenom + ": " + item.id;
      this.$parent.isNavMedVisible = false;
      this.$parent.FicheMedecin = false;
      this.$store.state.medecin = item;
      this.$parent.maj++;
    }
  },
};
      

</script>