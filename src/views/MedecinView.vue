<template>
    <NavbarComponent />
    <div>
        <h1>Medecin info</h1>
    </div>
    <div>

        <v-toolbar border density="comfortable">
        <v-col class="d-flex justify-space-around">
            <v-btn>Consulter les rapports </v-btn>
            <v-btn>Gérer le Médecin</v-btn>
        </v-col>
    </v-toolbar>
    </div>
    <RechercheMedecinComponent/>


</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import RechercheMedecinComponent from '@/components/RechercheMedecinComponent.vue';
import FicheMedecinComponent from '@/components/FicheMedecinComponent.vue';
import ListeRapportsComponent from '@/components/ListeRapportsComponent.vue';

export default{
    components: { NavbarComponent, RechercheMedecinComponent }
}
</script>