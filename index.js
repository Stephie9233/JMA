/* Gestion des boutons des articles*/
const moreEnterpriseElement = document.querySelector("#enterprise-link");
const dialogEnterprise = document.querySelector("#entreprise");
const closeCrossElement = document.querySelector(".body__dialog--close");
console.log(closeCrossElement);
const close = document.querySelectorAll(".close")

moreEnterpriseElement.addEventListener("click", () => {
    dialogEnterprise.showModal();
})

const moreServicesElement = document.querySelector("#services-link");
const dialogServices = document.querySelector("#services");

moreServicesElement.addEventListener("click", () => {
    dialogServices.showModal();
})

const moreRhElement = document.querySelector("#rh-link");
const dialogRh = document.querySelector("#rh");

moreRhElement.addEventListener("click", () => {
    dialogRh.showModal();
})

for(element of close) {
    element.addEventListener("click", () => {
        dialogEnterprise.close();
        dialogServices.close();
        dialogRh.close();
    })
}

