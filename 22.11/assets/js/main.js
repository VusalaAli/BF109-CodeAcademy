import { BASE_URL } from "./data.js";
fetch("https://northwind.vercel.app/api/suppliers")
.then((response)=>response.json())
.then((data) => drawTable(data))

const tBody = document.querySelector("tbody");

 function drawTable(element){
    tBody.innerHTML = ""
    element.forEach(elem => {
       tBody.innerHTML += `
          <tr>
          <td>${elem.id}</td>
          <td>${elem.companyName}</td>
          <td>${elem.contactName}</td>
          <td>${elem.contactTitle}</td>
          <td><button class="btn btn-outline-danger delete data-id=${elem.id}">Delete</button></td>
          </tr>
       ` 
       const deleteBtn = document.querySelectorAll(".delete")
       deleteBtn.forEach((btn)=> {
          btn.addEventListener("click", ()=>{
              let id = btn.getAttribute("data-id")
              console.log(id);
       })
      
      })
    });
 }




