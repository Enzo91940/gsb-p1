<template>
  <div>
    <div v-if="items.length > 0">
      <table class="rapports-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Bilan</th>
            <th>Motif</th>
            <th>Nom Visiteur</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.date }}</td>
            <td>{{ item.bilan }}</td>
            <td>{{ item.motif }}</td>
            <td>{{ item.nom }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p class="no-data-message">Il n'y a aucune donnée disponible.</p>
    </div>
  </div>
</template>

<style scoped>
/* Styles spécifiques à ce composant */
.rapports-table {
  width: 100%;
  border-collapse: collapse;
}

.rapports-table th, .rapports-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.rapports-table th {
  background-color: #f2f2f2;
}

.no-data-message {
  color: red;
  font-weight: bold;
}
</style>

<script>
export default {
  name: 'ListeRapportsComponent',
  data() {
    return {
      nomMedecin: this.$store.state.medecin, 
      isListeRapportsVisible: false,
      infosListeRapports: this.$store.state.medecin.id,
      isListVisible: true,
      isFicheMedVisible: false,
      items: [],
    }
  },
  mounted() {
    //console.log(this.$store.state.medecin);
    this.$store.state.DataService.getLesRapports(this.$store.state.medecin.id)
      .then((data) => {
        this.items = data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
    this.$parent.maj++;
  }
}
</script>