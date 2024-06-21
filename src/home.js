function createMainDiv(){
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
    let homeParag = `
    Welcome to Poignant since 1947,
    where culinary mastery meets timeless tradition.
    Nestled in the heart of toulouse, our enchanting establishment has been a beacon of gastronomic delight 
    since its inception. Embark on a journey of exquisite flavors meticulously crafted by our seasoned chefs,
    each dish a symphony of taste and texture. From the tantalizing aromas that greet you at the door to the last
    decadent bite, every moment at Poignant since 1947 is a celebration of the senses. Join us and indulge in an 
    unparalleled dining experience where history, innovation, and passion converge to create memories that linger 
    long after the final course.`.trim();
    let h2_1 = document.createElement("h2");
    h2_1.textContent="Poignant";
    h2_1.style.cssText +="text-align: center;"
    let h2_2 = document.createElement("h2");
    h2_2.textContent="Since 1947";
    h2_2.style.cssText +="text-align: center;"
    let p_1 = document.createElement("p");
    p_1.style.cssText +="font-size: 1.3rem;"
    p_1.textContent=homeParag;
    mainDiv.appendChild(h2_1);
    mainDiv.appendChild(h2_2);
    mainDiv.appendChild(p_1);
 
    return mainDiv;
}
export{ createMainDiv};