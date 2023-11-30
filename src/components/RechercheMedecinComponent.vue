<template>
    <v-container>
        <!--
            Ici a chaque pression du clavier , l'action getLesMedecins va se déclencher
            pour mettre à jour la liste en fonction de la saisie
        -->
        <v-text-field @keyup="getLesMedecins" label="Nom de medecin" v-model="nomMedecin">
        </v-text-field>

        <!--
            Ensuite nous créons la v-card qui va afficher la liste des medecins trouvés.
            Elle sera affichée que pendant une recherche (attribut isListVisible)
            Chaque permettera de selectionner les informations du medecin choisi

        -->

        <v-card class="mx-auto">
            <v-list v-show="isListVisible">
            <v-list-item v-for="item in items" :key="item.id" :value="item.nom" 
            @click="getInfos(item)">
                {{ item.nom + " " + item.prenom}}
                </v-list-item>
            
            </v-list>
        </v-card>



    </v-container>
</template>

<script>
export default{
    name: 'RechercheMedecinComponent',
    data(){
        return{
            idMedecin: '', // ID du medecin selectionné
            nomMedecin: '', // Nom du medecin selectionné
            items: [], //Liste qui va contenir les medecins trouvés
            isListVisible: false, //Attribut pour la visibilité de la liste
        }
    },
    methods:{
        /*
        Méthode qui va faire appel au DataService , afin de récupérer la liste de medecins
        */
       getLesMedecins(){
        // À compléter
        this.$store.state.DataService.getMedecins(this.nomMedecin)
        .then(
      (data)=>{
        //Enregistrement dans le store, dans la varaible utilisateur
        this.items = data;
        this.isListVisible = true;
        
        
      })
      //on affiche la banière d'erreur
      .catch(
        (error)=>{
            console.log(error);
          
      })
       },
       /*
        Fontion qui permet de récupérer les informations 
        du médecin selectionné
        */
       getInfos(item){
        this.nomMedecin = item.nom+" "+item.prenom+" ; "+item.id
        this.isListVisible = false;
        this.$store.state.medecin = item;
        this.$parent.isListVisible = true;
        //return this.$store.state.DataService.getMedecins(this.nomMedecin) ;
       }
    }
}
</script>