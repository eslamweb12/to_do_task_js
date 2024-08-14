let input = document.querySelector(".form-control");
let active = document.querySelector(".active");
const btn = document.querySelector("button");
let nextContainer = document.querySelector(".nextcontainer");
let item = 0;
let itemsdone = 0;

const showAlert = (message, color) => {
    let newElement = document.createElement("span");

    newElement.innerHTML = message;
    newElement.style.padding = "5px";
    newElement.style.position = "relative";
    newElement.style.left = "20px";
    newElement.style.bottom = "40px";
    newElement.style.border = `5px solid ${color}`;
    newElement.style.borderRadius = "5px";
    newElement.style.backgroundColor = color;
    newElement.style.color = "white";

    active.appendChild(newElement);

    setTimeout(() => {
        active.classList.add("show"); // Start the animation
    }, 500);

    setTimeout(() => {
        newElement.remove();
        active.classList.remove("show"); // Reset the animation
    }, 2500); // Give it enough time to show and then remove
}

let setItme = (it, itemsdone) => {
    document.querySelector(".heading h1").innerHTML = `${it} item to do<span style="font-size: 17px; color: rgb(138, 151, 151);">[${itemsdone} out of ${it} done]</span>`;
}
setItme(item, itemsdone);

btn.onclick = function() {
    let text = input.value;
    item++;

    setItme(item, itemsdone);
    showAlert("Note Added", "green");

    let to_do_container = document.createElement("div");
    to_do_container.classList.add("to_do_item");

    let toDOItemText = document.createElement("div");
    toDOItemText.classList.add("text");
    toDOItemText.textContent = input.value;
    to_do_container.appendChild(toDOItemText);

    let TodoIcon = document.createElement("div");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash");
    TodoIcon.appendChild(icon);
    to_do_container.appendChild(TodoIcon);

    let deleteIcon = document.createElement("div");
    let iconDEl = document.createElement("i");
    iconDEl.classList.add("fa-solid", "fa-check");

    iconDEl.onclick = function(event) {
        if (iconDEl.classList.contains("fa-check")) {
            itemsdone++;
            setItme(item, itemsdone);

            iconDEl.classList.remove("fa-check");
            iconDEl.classList.add("fa-rotate-left");
            let node = event.target.parentNode.parentNode;
            node.style.backgroundColor = "blue";
            node.style.border = "1px solid blue";
            showAlert("Note completed", "green");
        } else {
            itemsdone--;
            setItme(item, itemsdone);

            iconDEl.classList.remove("fa-rotate-left");
            iconDEl.classList.add("fa-check");

            let node = event.target.parentNode.parentNode;
            node.style.backgroundColor = "green";
            node.style.border = "1px solid green";
            showAlert("Task completed", "blue");
        }
    }
    deleteIcon.appendChild(iconDEl);
    to_do_container.appendChild(deleteIcon);
    nextContainer.appendChild(to_do_container);

    icon.onclick = function() {
        let del = event.target.parentNode.parentNode;
        item--;
        if (del.querySelector('.fa-rotate-left')) {
            itemsdone--;
        }
        setItme(item, itemsdone);

        del.remove();

        showAlert("Note deleted", "red");
    }

    input.value = "";
}
// let input = document.querySelector(".form-control");
// let active = document.querySelector(".active");
// const btn = document.querySelector("button");
// let nextContainer = document.querySelector(".nextcontainer");
// let item = 0;
// let itemsdone = 0;

// // Function to update item count
// let setItemCount = (it, itemsdone) => {
//     document.querySelector(".heading h1").innerHTML = `${it} item to do <span style="font-size: 17px; color: rgb(138, 151, 151);">[${itemsdone} out of ${it} done]</span>`;
// }

// // Set the initial heading state when the page loads
// setItemCount(item, itemsdone);

// // Function to show alerts
// const showAlert = (message, color) => {
//     let newElement = document.createElement("span");

//     newElement.innerHTML = message;
//     newElement.style.padding = "5px";
//     newElement.style.position = "relative";
//     newElement.style.left = "20px";
//     newElement.style.bottom = "40px";
//     newElement.style.border = `5px solid ${color}`;
//     newElement.style.borderRadius = "5px";
//     newElement.style.backgroundColor = color;
//     newElement.style.color = "white";

//     active.appendChild(newElement);

//     setTimeout(() => {
//         active.classList.add("show"); // Start the animation
//     }, 500);

//     setTimeout(() => {
//         newElement.remove();
//         active.classList.remove("show"); // Reset the animation
//     }, 2500); // Give it enough time to show and then remove
// }

// // Function to handle task addition
// const addTask = () => {
//     let text = input.value;
//     if (!text.trim()) return; // Ensure input is not empty
//     item++;

//     setItemCount(item, itemsdone);
//     showAlert("Note Added", "green");

//     let to_do_container = document.createElement("div");
//     to_do_container.classList.add("to_do_item");

//     let toDOItemText = document.createElement("div");
//     toDOItemText.classList.add("text");
//     toDOItemText.textContent = text;
//     to_do_container.appendChild(toDOItemText);

//     let TodoIcon = document.createElement("div");
//     let icon = document.createElement("i");
//     icon.classList.add("fa-solid", "fa-trash");
//     TodoIcon.appendChild(icon);
//     to_do_container.appendChild(TodoIcon);

//     let deleteIcon = document.createElement("div");
//     let iconDEl = document.createElement("i");
//     iconDEl.classList.add("fa-solid", "fa-check");

//     iconDEl.onclick = function(event) {
//         if (iconDEl.classList.contains("fa-check")) {
//             itemsdone++;
//             setItemCount(item, itemsdone);

//             iconDEl.classList.remove("fa-check");
//             iconDEl.classList.add("fa-rotate-left");
//             let node = event.target.parentNode.parentNode;
//             node.style.backgroundColor = "blue";
//             node.style.border = "1px solid blue";
//         } else {
//             itemsdone--;
//             setItemCount(item, itemsdone);

//             iconDEl.classList.remove("fa-rotate-left");
//             iconDEl.classList.add("fa-check");

//             let node = event.target.parentNode.parentNode;
//             node.style.backgroundColor = "green";
//             node.style.border = "1px solid green";
//             showAlert("Task completed", "blue");
//         }
//     }
//     deleteIcon.appendChild(iconDEl);
//     to_do_container.appendChild(deleteIcon);
//     nextContainer.appendChild(to_do_container);

//     icon.onclick = function() {
//         let del = event.target.parentNode.parentNode;
//         item--;
//         if (del.querySelector('.fa-rotate-left')) {
//             itemsdone--;
//         }
//         setItemCount(item, itemsdone);

//         del.remove();

//         let newElement = document.createElement("span");
//         newElement.innerHTML = "Note deleted";
//         newElement.style.padding = "5px";
//         newElement.style.position = "relative";
//         newElement.style.left = "20px";
//         newElement.style.bottom = "40px";
//         newElement.style.border = "5px solid red";
//         newElement.style.borderRadius = "5px";
//         newElement.style.backgroundColor = "red";
//         newElement.style.color = "white";
//         active.appendChild(newElement);

//         setTimeout(() => {
//             active.classList.add("dele"); // Start the animation
//         }, 500);

//         setTimeout(() => {
//             newElement.remove();
//             active.classList.remove("dele"); // Reset the animation
//         }, 2500);
//     }

//     input.value = "";
// }

// // Attach the task addition to button click
// btn.onclick = addTask;

