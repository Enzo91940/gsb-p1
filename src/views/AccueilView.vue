<template>
  <NavbarComponent />
    Bienvenue {{ this.$store.state.utilisateur.nom +""+this.$store.state.utilisateur.prenom }}
    <div class ="acc">
        <h1> PINGOUIN</h1>

    </div>
    <div v-if ="utilisateur">
        <h1>{{ utilisateur }}</h1>

    </div>
    
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
    computed: {
        utilisateur() {
            return this.$store.state.utilisateur;
        }
    },
    components: { NavbarComponent }
}
</script>