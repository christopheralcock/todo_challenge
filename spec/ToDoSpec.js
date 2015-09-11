describe('ToDo', function() {

  var toDo;
  beforeEach(function() {
    toDo = new ToDo();
  });


  describe('stores an item', function() {

    it('in a to do list', function() {
      toDo.addItem('wash dishes')
      expect(toDo.toDoList).toEqual(['wash dishes']);
    });

    it('in a to do list that already includes another item', function() {
      toDo.addItem('wash dishes');
      toDo.addItem('laundry');
      expect(toDo.toDoList).toEqual(['wash dishes','laundry']);
    });

    it("in a done list when they've been ticked", function(){
      toDo.addItem('wash dishes');
      toDo.addItem('laundry');
      toDo.tickItem('wash dishes');
      expect(toDo.toDoList).toEqual(['laundry']);
      expect(toDo.doneList).toEqual(['wash dishes']);
    });


  });

});
