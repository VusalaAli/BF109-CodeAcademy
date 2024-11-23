
fetch("https://northwind.vercel.app/api/suppliers")
    .then((response) => response.json())
    .then((data) => drawTable(data))

const tBody = document.querySelector("tbody");

function drawTable(element) {
    tBody.innerHTML = ""
    element.forEach(elem => {
        tBody.innerHTML += `
        <tr>
        <td>${elem.id}</td>
        <td>${elem.companyName}</td>
        <td>${elem.contactName}</td>
        <td>${elem.contactTitle}</td>
        <td><a><i class="fa-solid fa-heart"></i></a></td>
        <td><a href="details.html?id=${elem.id}">Details</a></td>
        <td><button type="button" data-id=${elem.id} class="btn delete btn-outline-danger">Delete</button></td>
        <td><button type="button" class="btn btn-outline-success">Edit</button></td>
        </tr>
      `
      const deleteBtn = document.querySelectorAll(".delete")
      deleteBtn.forEach((btn)=> {
         btn.addEventListener("click", ()=>{
             let id = btn.getAttribute("data-id")
             deleleData(id)
      })

    });
});


}
function deleleData(id){
    fetch("https://northwind.vercel.app/api/suppliers/"+id, {
        method: "DELETE" 
    }).then((response) =>{
        if(response.ok){
            fetch("https://northwind.vercel.app/api/suppliers")
    .then((response) => response.json())
    .then((data) => drawTable(data))
        }
})

}
