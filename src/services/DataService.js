export default class DataService{

        // fonction qui va permettre d'authentifier un visiteur
        async getVisiteur(unLogin,unPassword){
            //Je passe ici les parametres de mon appel de l'API
            console.log(unLogin,unPassword)
            var params = new URLSearchParams({
                login: unLogin,
                mdp : unPassword 
            })
            //Appel de l'API
            var response = await fetch('http://localhost/restGSB/connexion?'+params);
            //récupration de la réponse, et retour
            var items = await response.json();
            return items;
           }

        async getMedecins(unMedecin){
            var params = new URLSearchParams({
                nom : unMedecin
            });
        var response = await fetch('http://localhost/restGSB/medecins?'+params);
        var items = await response.json();
        console.log(items)
        return items;
        }
        

}