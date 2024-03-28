<template>
    <div>
    <NavbarComponent />
    <RechercheMedecinComponent/>
    <v-container>
        <ListeRapportsComponent v-show="isListeRapportsVisible" :key="maj" />
        <FicheMedecinComponent v-show="isFicheMedVisible" :key="maj" />
    </v-container>
    </div>

      

</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import RechercheMedecinComponent from '@/components/RechercheMedecinComponent.vue';
import FicheMedecinComponent from '@/components/FicheMedecinComponent.vue';
import ListeRapportsComponent from '@/components/ListeRapportsComponent.vue';

export default {
    name: 'MedecinView',
    data() {
        return {
            maj: 0,
            isListeRapportsVisible: false,
            isFicheMedVisible: false
        }
    },

    components: {
        NavbarComponent,
        RechercheMedecinComponent,
        FicheMedecinComponent,
        ListeRapportsComponent
    }
}


</script>