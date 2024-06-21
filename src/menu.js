function createMenu(){
    let foodItems = [
        "Foie Gras Terrine",
        "Coq au Vin",
        "Lobster Bisque",
        "Beef Wellington",
        "Truffle Risotto",
        "Duck Confit",
        "Creme Brulee",
        "Tiramisu"
    ];
    let descriptions = [
        "Indulgent delicacy with a rich flavor profile.",
        "Tender chicken braised in red wine with aromatic herbs.",
        "Velvety smooth soup infused with the essence of fresh lobster.",
        "Prime beef fillet encased in flaky pastry, a culinary masterpiece.",
        "Creamy Arborio rice infused with earthy truffle essence.",
        "Succulent duck leg slow-cooked to perfection.",
        "Classic French dessert with a caramelized sugar crust.",
        "Italian delight with layers of coffee-soaked ladyfingers and mascarpone."
    ];
    let prices = [
        "$15",
        "$8",
        "$9",
        "$12",
        "$11",
        "$13",
        "$10",
        "$7"
    ];
    
    const mainDiv = document.createElement("div");

    mainDiv.style.cssText += `
    width: calc(100% - 10vh);
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 5vh;
    padding : 0px 5vh;
    `.trim();
    for (let i=0; i<8 ;i++){
        const menuItem = document.createElement("div");
        menuItem.style.cssText +=  `
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        font-weight:600;
        border-radius:5px;
        padding : 2vh;
        display:flex;
        flex-direction: column;
        row-gap: 1vh;
        `.trim();
        let h2_1 = document.createElement("h2");
        h2_1.textContent=foodItems[i];
        h2_1.style.cssText +="text-align: center;"
        let h2_2 = document.createElement("h2");
        h2_2.textContent=descriptions[i];
        h2_2.style.cssText +="text-align: center;"
        let p_1 = document.createElement("p");
        p_1.style.cssText += "text-align: center; font-size: 1.4rem;"
        p_1.textContent = prices[i];
        menuItem.appendChild(h2_1);
        menuItem.appendChild(h2_2);
        menuItem.appendChild(p_1);
        mainDiv.appendChild(menuItem);
    }
    

    return mainDiv;
}
export{ createMenu};