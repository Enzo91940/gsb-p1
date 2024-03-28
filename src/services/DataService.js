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
        async getLesRapports(unId){
            var response = await fetch('http://localhost/restGSB/rapports/'+unId);
            var items = await response.json();
            return items;
        }

        async majMedecin(props){
            console.log(props);
            var requestOptions ={
                method: "PUT", //On définit la méthode d'envoi
                headers: {
                    'Content-Type': 'application/json', // On définit le type des données transmises
                },
                body: JSON.stringify(props) // Dans le corps, on ajoute les propriétés sous format JSON
            };
            var item = await fetch('http://localhost/restGSB/majMedecin', requestOptions);
            return item;
        }

        async getLesRapportsADate(unId,uneDate){
            var params = new URLSearchParams({
                idVisiteur : unId,
                date: uneDate
            });
            var response = await fetch('http://localhost/restGSB/rapports_a_date?'+params);
            var items = await response.json();
            console.log(items)
            return items;
        }

        async majRapports(props){
            console.log(props);
            var requestOptions ={
                method: "PUT",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(props)
            };
            var item = await fetch('http://localhost/restGSB/majRapports', requestOptions);
            return item;
        }
        

       
        
        

}