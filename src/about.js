import instaImg from "./insta.png";
import whatsImg from "./whatsap.png";
function createAboutDiv(){
    const mainDiv = document.createElement("div");
    mainDiv.style.cssText += `
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    width : calc(80% - 4vh);
    height : calc(80% - 4vh);
    font-weight:600;
    border-radius:5px;
    padding : 4vh;
    display:flex;
    flex-direction: column;
    row-gap: 3vh;
    `.trim();
    let h1_1 = document.createElement("h1");
    h1_1.textContent=`Poignant \u00A9`;
    h1_1.style.cssText +="text-align: center;"
    let h2_2 = document.createElement("h2");
    h2_2.textContent=`37 Rue Saint-Jean Baptiste Quartier du Faubourg Saint-Jean`;
    h2_2.style.cssText +="text-align: center;"
    let h2_3 = document.createElement("h2");
    h2_3.textContent=`Québec City, Quebec G1R 1J3 Canada`;
    h2_3.style.cssText +="text-align: center;"
    let socialDiv = document.createElement("div");
    socialDiv.style.cssText += `
    display : flex;
    flex-direction:row;
    column-gap: 10%;
    width: 100%;
    justify-content:center;
    `.trim();
    let instaDiv = document.createElement("div");
    instaDiv.style.cssText +=`
    display : flex;
    width:45%;
    column-gap: 10%;
    align-items:center;
    justify-content:center;
    `.trim();
    let instaImage= document.createElement("img");
    instaImage.src =instaImg;
    instaImage.style.cssText+=`
    height: 5vh;
    `.trim();
    let instaText = document.createElement("span");
    instaText.textContent="@poignantca";
    instaDiv.appendChild(instaImage);
    instaDiv.appendChild(instaText);
    socialDiv.appendChild(instaDiv);
    let whatsDiv = document.createElement("div");
    whatsDiv.style.cssText +=`
    display : flex;
    width:45%;
    column-gap: 10%;
    align-items:center;
    justify-content:center;
    `.trim();
    let whatsImage= document.createElement("img");
    whatsImage.src = whatsImg;
    whatsImage.style.cssText+=`
    height:5vh;
    `.trim();
    let whatsText = document.createElement("span");
    whatsText.textContent="+1 (613) 555-1212";
    whatsDiv.appendChild(whatsImage);
    whatsDiv.appendChild(whatsText);
    socialDiv.appendChild(whatsDiv);
    mainDiv.appendChild(h1_1);
    mainDiv.appendChild(h2_2);
    mainDiv.appendChild(h2_3);
    mainDiv.appendChild(socialDiv);

 
    return mainDiv;
}
export{ createAboutDiv};