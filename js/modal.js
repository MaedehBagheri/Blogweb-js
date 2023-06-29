const showModal =document.querySelector(".add-blog");
const modal =document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const backdrop =document.querySelector(".backdrop");

showModal.addEventListener("click",()=>{

    backdrop.classList.remove("hidden");
    modal.classList.remove("hidden");

})

closeModal.addEventListener("click",()=>{
    backdrop.classList.add("hidden");
    modal.classList.add("hidden")
})