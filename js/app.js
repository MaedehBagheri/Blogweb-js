import Productview from "./Productview.js";
import "./modal.js";

document.addEventListener("DOMContentLoaded",()=>{
    Productview.setApp()
    Productview.createNewProduct(Productview.products);
    console.log(Productview)
})