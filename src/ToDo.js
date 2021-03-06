function ToDo() {
  this.toDoList = [];
  this.doneList = [];
};

ToDo.prototype.addItem = function(toDoItem) {
  this.toDoList.push(toDoItem);
	return this.toDoList;
};

ToDo.prototype.tickItem = function(toDoItem) {
  var index = this.toDoList.indexOf(toDoItem);
  if (index >= 0) {
    this.toDoList.splice( index, 1 );
  }
  this.doneList.unshift(toDoItem);
	return this.doneList;
};

ToDo.prototype.deleteItem = function(doneItem) {
  var index = this.doneList.indexOf(doneItem);
  if (index >= 0) {
    this.doneList.splice( index, 1 );
  }
}

// app vvvvvvvvvvvvvvvvvv //

toDo = new ToDo();

function addToToDoList(){
	var newItem = document.getElementById('add-to-to-do-list').value;
  toDo.addItem(newItem);
  updateToDoList();
  document.getElementById('add-to-to-do-list').value='';
}

function addToDoneList(doneItem){
  toDo.tickItem(doneItem);
  updateToDoList();
  updateDoneList();
}

function deleteFromDoneList(itemToDelete){
  toDo.deleteItem(itemToDelete);
  updateDoneList();
};

function updateToDoList(){
  var toDoLister = '';
  var item;
  for (item in toDo.toDoList) {
      toDoLister
      +="<li class='to-do-item'>"
      +toDo.toDoList[item]
      +"<button class='tick' onclick='addToDoneList(\""
      +toDo.toDoList[item]
      +"\")'>"
      +"x"
      +"</li>";
  }
	document.getElementById('to-do-list').innerHTML = toDoLister;
};

function updateDoneList(){
  var doneLister = '';
  var item;
  for (item in toDo.doneList) {
      doneLister
      +="<li class='done-item'>"
      + toDo.doneList[item]
      +"<button id='delete' onclick='deleteFromDoneList(\""
      +toDo.doneList[item]
      +"\")'>"
      +"x"
      +"</li>";
  }
	document.getElementById('done-list').innerHTML = doneLister;
};

document.onkeydown=function(evt){
    var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
    if(keyCode == 13)
    {
      addToToDoList()
    }
}
