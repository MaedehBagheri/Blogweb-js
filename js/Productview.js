import Storage from "./Storage.js";
const searchInput =document.querySelector("#search-product");
const addNewProductBtn =document.querySelector(".new-blog");
const selectedSort =document.querySelector(".filter-blogs")

class ProductView{
constructor(){
    addNewProductBtn.addEventListener("click",(e)=> this.addNewProduct(e));
    searchInput.addEventListener("input",(e)=>this.searchProduct(e))
    selectedSort.addEventListener("change" ,(e)=> this.sortProducts(e))
this.products =[];
}


addNewProduct(e){
    e.preventDefault()

    const title =document.querySelector(".title").value;
    if(!title) return;
    Storage.saveProduct({title})
    this.products= Storage.getProduct();
    this.createNewProduct(this.products);
    document.querySelector(".title").value="";
    document.querySelector(".description").value="";
}

setApp(){
    this.products=Storage.getProduct();
}
createNewProduct(products){
let result ="";
products.forEach(item =>{
    result+=`
    <div class="cart">
    <h1 class="title">${item.title}</h1>

    <span class="date">${(new Date().toLocaleDateString("fa-IR")) }</span>
    <div>
   
    <div data-id=${item.id} id="delete-btn">
 <button class="delete">حذف</button>
    </div>
    </div>
</div>
    `
})
const productDOM =document.querySelector(".carts-blog");
productDOM.innerHTML=result;

const deleteBtns =[...document.querySelectorAll("#delete-btn")];
deleteBtns.forEach((i)=>{
    i.addEventListener("click",e=>this.deleteProduct(e))
})
}

searchProduct(e){
const value =e.target.value.trim().toLowerCase();
const filteredProduct =this.products.filter((p)=>p.title.toLowerCase().includes(value));
this.createNewProduct(filteredProduct);
}

sortProducts(e){
    const value =e.target.value;
  this.products= Storage.getProduct(value)
    this.createNewProduct(this.products)
}

deleteProduct(e){
    const productId =e.target.dataset.id;
    Storage.deleteProduct(productId);
   this.products= Storage.getProduct();
   this.createNewProduct(this.products)
}
}

export default new ProductView();