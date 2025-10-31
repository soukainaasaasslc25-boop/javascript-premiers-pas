
let bibliotheque = [
    {code:1, titre:"histoire", auteur:"gaclin", annee:2006, prixDh:200, disponible:true},
    {code:2, titre:"history", auteur:"gaclin", annee:2006, prixDh:256, disponible:true}
];

// Ouvrir ajouter.html
function ouvrirAjouter() {
    window.open("ajouter.html", "AjouterLivre", "width=500,height=500");
}

// Afficher la liste des livres
function AfficherlistesLivres() {
    const liste = document.getElementById("liste");
    liste.innerHTML = "";

    bibliotheque.forEach(livre => {
        const carte = document.createElement("div");
        carte.classList.add("carte");
          carte.style.border = "2px solid #ffcd97ff";
        carte.style.borderRadius = "10px";
        carte.style.padding = "15px";
        carte.style.margin = "10px";
        carte.style.width = "250px";
        carte.style.display = "inline-block";
        carte.style.verticalAlign = "top";

        if (!livre.disponible) {
            carte.style.background = "#c79777ff";
        }else{
            carte.style.background = "#ffffffff";
        }

        carte.innerHTML = `
            <h3>${livre.titre}</h3>
            <p>Auteur : ${livre.auteur}</p>
            <p>Année : ${livre.annee}</p>
            <p>Prix : ${livre.prixDh} DH</p>
            <p>Statut : ${livre.disponible ? "✅ Disponible" : "❌ Emprunté"}</p>
        `;

        const actions = document.createElement("div");
        actions.classList.add("actions");
        // style
        actions.style.display = "flex";             
        actions.style.gap = "10px";

        const btnAction = document.createElement("button");
        btnAction.textContent = livre.disponible ? "Emprunter" : "Rendre";
        btnAction.onclick = () => {
          livre.disponible = !livre.disponible;
          AfficherlistesLivres();
        }
        // style
        btnAction.style.backgroundColor =  livre.disponible ? "#a34706ff" : "#fb9700ff";
     

        const btnSupprimer = document.createElement("button");
        btnSupprimer.textContent = "Supprimer";
        
        btnSupprimer.onclick = () => supprimerLivre(livre.code);
        // style
         btnSupprimer.style.backgroundColor = "#784f2cff";
        btnSupprimer.style.color = "#fff";
      ;
       
        actions.appendChild(btnAction);
        actions.appendChild(btnSupprimer);
        carte.appendChild(actions);
        liste.appendChild(carte);
    });

    afficherstatus();
}

// Changer la disponibilité
// function changerDisponibilite(code) {
//     const livre = bibliotheque.find(l => l.code === code);
//     if (livre) livre.disponible = !livre.disponible;
//     AfficherlistesLivres();
// }
document.getElementById("search").oninput = function () {
  const mot = this.value.toLowerCase();
  const cartes = document.getElementsByClassName("carte");

  for (let i = 0; i < cartes.length; i++) {
    const titre = cartes[i].querySelector("h3").textContent.toLowerCase();
    if (titre.includes(mot)) {
      cartes[i].style.display = "block";
    } else {
      cartes[i].style.display = "none";
    }
  }
};

// Supprimer un livre
function supprimerLivre(code) {
   for (let i = 0; i < bibliotheque.length; i++) {
  if (bibliotheque[i].code === code) {
    bibliotheque.splice(i, 1); 
    break;
  }
}
    AfficherlistesLivres();
}

// Statistiques
function afficherstatus() {
    let total = bibliotheque.length;
    let disponible = 0;
    let prixTotale = 0;
    let prixMax = 0;
    let prixMin = bibliotheque.length > 0 ? bibliotheque[0].prixDh : 0;
    let nomMax = "";
    let nomMin = bibliotheque.length > 0 ? bibliotheque[0].titre : "";

    bibliotheque.forEach(livre => {
        prixTotale += livre.prixDh;
        if(livre.disponible) disponible++;
        if(livre.prixDh > prixMax) { prixMax = livre.prixDh; nomMax = livre.titre; }
        if(livre.prixDh < prixMin) { prixMin = livre.prixDh; nomMin = livre.titre; }
    });

    let moyennePrix = total ? (prixTotale/total).toFixed(2) : 0;

    document.getElementById("stats").textContent =
    `Total livres: ${total} | Disponible: ${disponible} | Empruntés: ${total-disponible} | Total prix: ${prixTotale} DH | Plus cher: ${nomMax} (${prixMax} DH) | Moins cher: ${nomMin} (${prixMin} DH) | Prix moyen: ${moyennePrix} DH`;
}

// Fonction appelée par ajouter.html
function ajouterLivre(livre) {
    bibliotheque.push(livre);
    AfficherlistesLivres();
}

// Affichage initial
AfficherlistesLivres();


const stats = document.getElementById("stats");

// Style de base
stats.style.border = "2px solid #d88837ff";
stats.style.padding = "10px 15px";
stats.style.borderRadius = "8px";
stats.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
stats.style.fontWeight = "bold";
stats.style.marginTop = "20px";

