// var _ = require('lodash');

// var arr = [2,3,4,5,7,8];
// console.log(_.without(arr,2))

let input = document.querySelector(".input");
let addButton = document.querySelector(".addButton");
let containerSec = document.querySelector("#container");
let containerSec1 = document.querySelector("#container1");


class item{
	constructor(itemInput){
		// create div item

		this.createDiv(itemInput)
	}

	createDiv(itemInput){
		let itemContent = document.createElement("div");
		itemContent.classList.add("item");

		let done = document.createElement("button");
		done.classList.add("done");
		done.innerHTML = "DONE";

		let radio = document.createElement("input");
		radio.classList.add("radio");
		radio.type = "radio";

		let inputContent = document.createElement("input");
		inputContent.classList.add("inputItem");
		inputContent.type = "text";
		inputContent.disabled = true;
		inputContent.value = itemInput;

		let editButton = document.createElement("button");
		editButton.classList.add("editButton");
		editButton.innerHTML = "Edit";


		let removeButton = document.createElement("button");
		removeButton.classList.add("removeButton");
		removeButton.innerHTML = "Remove";

		// Appendchild Element in the container
		containerSec.appendChild(itemContent);
		itemContent.appendChild(radio);
		itemContent.appendChild(inputContent);
		itemContent.appendChild(editButton);
		itemContent.appendChild(removeButton);

		//Edit and Remove Button event
		editButton.addEventListener("click", () =>{
			inputContent.disabled = !inputContent.disabled;
		})

		removeButton.addEventListener("click", () =>{
			container.removeChild(itemContent);
		})

		radio.addEventListener("click", () =>{
			containerSec1.appendChild(itemContent);
			// itemContent.appendChild(done);
			itemContent.removeChild(radio);
			itemContent.removeChild(editButton);
			removeButton.innerHTML = "DONE";
			removeButton.classList.add("done");

		})


	}
}

// Input item into Todo list
function put(){
	if (input.value != "") {
		new item(input.value);
		input.value = "";
	}
}
addButton.addEventListener("click", put)

//Completed todo list

		// radio.addEventListener("click", () =>{
		// 	container.removeChild(itemContent);
		// 	done.appendChild(inputContent)
		// })