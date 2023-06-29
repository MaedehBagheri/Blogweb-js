export default class Storage{


    static getProduct(sort ="newest"){
        const  savedProducts = JSON.parse(localStorage.getItem("product")) || [];

      return savedProducts.sort((a,b)=>{
           if(sort === "newest"){
            return new Date(a.createdAt) >  new Date(b.createdAt) ? -1 : 1;
          
           }else if(sort === "oldest"){
            return new Date(a.createdAt) >  new Date(b.createdAt) ? 1 : -1 ;
           }
        })}

    static saveProduct(productTosave){
const savedProducts =Storage.getProduct();

const existedItem =savedProducts.find((c)=> c.id === productTosave.id);

if(existedItem){
    existedItem.title =productTosave.title;
}else{
    productTosave.id= new Date().getTime();
    productTosave.createdAt= new Date().toISOString();
    savedProducts.push(productTosave)
}
localStorage.setItem("product",JSON.stringify(savedProducts))
    }

    static deleteProduct (id){
        const savedProducts=Storage.getProduct();

       const deletedProducts= savedProducts.filter((p)=> p.id != id)
        localStorage.setItem("product",JSON.stringify(deletedProducts));
    }
}