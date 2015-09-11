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
  this.doneList.push(toDoItem);
	return this.doneList;
};
