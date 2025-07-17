import { sets } from "../config.js";


const container = document.getElementById("cardsContainer");

sets.forEach(set => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${set.image}" alt="${set.title}">
        <div class="card-title">${set.title}</div>
      `;
    card.addEventListener("click", () => {
        window.location.href = set.file;
    });
    container.appendChild(card);
});