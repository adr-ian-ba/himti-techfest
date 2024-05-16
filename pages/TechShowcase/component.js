// Define the Custom Card Web Component
class CustomCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Define the styles for the custom card
    const style = document.createElement("style");
    style.textContent = `
        .card {
          display: grid;
          object-fit:conver;
          width: 364px;
          height: 364px;
          grid-template-rows: 1fr 264px 100px;
          color: white;
          letter-spacing: 0.025em;
          text-align:center;
        }
        .name {
          grid-row: 1 / span 1;
          background-color: #d98fcd;
          border-radius: 8px;
          display:flex;
          justify-content:center;
          align-items:center
        }
        .name h1{
            font-size:1rem;
             font-family: "Atmospheric", sans-serif;
            
        }
        .image__card {
          grid-row: 2 / span 1;
          background-color: pink;
        }
        .image__card img{
            width:100%;
            height:100%
        }
        .card__description {
          border-radius: 16px;
          grid-row: 3 / span 1;
          background: linear-gradient(180deg, #ffb3fe 0%, #491e8e 100%);
           padding:12px;
           margin:0;
           display:flex;
           justify-content:center;
           align-items:center;
           flex-direction: column;
           
        }
        .card__description h3{
            font-size:0.875rem;
            font-family: "Atmospheric";
            padding:0;
            margin:0;
        }
        .card__description p{
            padding:0;
            margin:0;
        }
      `;

    // Create the card container

    const card = document.createElement("div");
    card.classList.add("card");

    // Create the name div
    const name = document.createElement("div");
    name.classList.add("name");
    const nameH1 = document.createElement("h1");
    nameH1.innerText = this.getAttribute("name");
    name.innerHTML = `<h1>${this.getAttribute("name") || "Default Name"}</h1>`;

    // Create the image div
    const imageCard = document.createElement("div");
    imageCard.classList.add("image__card");
    const image = document.createElement("img");
    image.src = this.getAttribute("image") || "";
    image.alt = this.getAttribute("alt") || "";
    imageCard.appendChild(image);

    // Create the description div
    const description = document.createElement("div");
    description.classList.add("card__description");
    description.innerHTML = `
        <h3>${this.getAttribute("title") || "Default Title"}</h3>
        <p>${this.getAttribute("description") || "Default Description"}</p>
      `;

    // Append elements to the shadow DOM
    shadow.appendChild(style); // Add the styles
    shadow.appendChild(card);
    card.appendChild(name);
    card.appendChild(imageCard);
    card.appendChild(description);
  }
}

// Define the custom element
customElements.define("custom-card", CustomCard);
