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

function updateToDoList(){
  var toDoLister = '';
  var item;
  for (item in toDo.toDoList) {
      toDoLister +="<li>"+toDo.toDoList[item]+"<button id='tick' onclick='addToDoneList(\""+toDo.toDoList[item]+"\")'>"+"x"+"</li>";
  }
	document.getElementById('to-do-list').innerHTML = toDoLister;
};

function updateDoneList(){
  var doneLister = '';
  var item;
  for (item in toDo.doneList) {
      doneLister
      +="<li id='done-item'>"
      + toDo.doneList[item]
      +"</li>";
  }
	document.getElementById('done-list').innerHTML = doneLister;
};
