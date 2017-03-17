// function todoList() {
// 	var item =document.getElementById("list")
// 	var text =document.createTextNode(item)
// 	var newItem =document.createElement("LI")
// 	newItem.appendChild(text)
// 	document.getElementById("todoList").appendChild(newItem)
// }

function todoList() {
	var item = document.getElementById("todoInput").value
	var text = document.createTextNode(item)
	var newItem = document.createElement("li")
	newItem.appendChild(text)
	var list = document.getElementById("list")
	list.appendChild(newItem)
	
	
}

// //targets my body with the id of addHere
// var addHere = document.getElementById("addHere")
// //creates new div element
// var newDiv = document.createElement("div")
// //creates text
// var textHere = document.createTextNode ('my text')
// //put the text into newDiv
// newDiv.appendChild(textHere)
// //pets newDiv onto body
// addHere.appendChild(newDiv)

