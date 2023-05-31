// Récupérer l'élément de la barre latérale (sidebar) avec l'identifiant "side-bar" et le stocker dans la variable "sidebar"
// const sidebar = document.getElementById("side-bar");
const sidebar = document.querySelector("#side-bar");
// Ajouter un événement de clic au bouton de menu hamburger (btn) pour faire apparaître ou masquer la barre latérale (sidebar)
let sideBarActive = false;
btn.addEventListener("click", function () {
  //Méthode 1 : Ajouter ou supprimer la classe "active" de la barre latérale (sidebar)
  //   if (sideBarActive) {
  //     sidebar.classList.remove("active");
  //   } else {
  //     sidebar.classList.add("active");
  //   }
  //   sideBarActive = !sideBarActive;

  //Méthode 2
  // Inverser l'état de la classe "active" de la barre latérale (si elle est présente, la supprimer, sinon l'ajouter)
  sidebar.classList.toggle("active");
});

const content = document.querySelector(".content");

// Ajouter un événement de clic au contenu principal pour masquer la barre latérale (sidebar)
content.addEventListener("click", () => {
  // Supprimer la classe "active" de la barre latérale pour la masquer
  sidebar.classList.remove("active");
});