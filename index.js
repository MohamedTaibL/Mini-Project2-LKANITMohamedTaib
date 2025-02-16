function addlist(event){

    if (event.key ==="Enter"){
        event.preventDefault();
        const input = document.getElementsByName("add")[0];

        if (input.value == ""){
            alert("You haven't typed a task yet.");
            return
        }

        const container = document.querySelector("#tasks-container");

        container.innerHTML +=
        `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${input.value}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
        `;
        input.value = ""; 
}

    return

}


function deleting(event){
    const clicked = event.target;
    if (clicked.classList.contains("delete")){
        clicked.parentElement.remove();
    }

    return
    
}


function searching() {
    
    const input = document.getElementsByName("search")[0];
    const all_lists = document.querySelectorAll(".list-group-item");

    console.log(all_lists); 

    all_lists.forEach((element) => {
        const todoText = element.querySelector("span").textContent.toLowerCase();
        console.log(todoText);
        const searchText = input.value.toLowerCase();
        console.log(searchText);


        if (todoText.includes(searchText)) {
            element.style.setProperty("display", "flex", "important");

        } else {
            element.style.setProperty("display", "none", "important");

        }
    });
}


