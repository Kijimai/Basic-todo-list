model = {
  items: []
}

view = {

  clearList: function() {
    let range = document.createRange()
    range.selectNodeContents
    range.deleteContents
  },

  render: function() {

    this.clearList()

    if(model.items.length != 0) {

      list = document.getElementById("list")

      for(let i = model.items.length - 1; i >= 0; i--) {
        console.log(model.items[i])

        let item = document.createElement('li')
        let span = document.createElement('span')
        let check = document.createElement('a')
        let trash = document.createElement('a')
        let iconCheck = document.createElement('i')
        let iconCross = document.createElement('i')

        item.classList.add('item')
        span.classList.add('item-text')
        check.classList.add('item-complete')
        cross.classList.add('item-delete')

        
      }
    }
  }

}

controller = {

  //renders the todolist's initial state on start
  init: function() {
    view.render()
  },

  addItem: function(item) {
    //Each list item being with a false 'completed' state, it can be set to true with the button controls
    list_item = { text: item, completed: false }
    model.items.push(list_item) //push the individual task into the items array
    console.log(list_item)
    document.getElementById("add-item").value = "" //target the id of input element (no need to declare into variable)
    view.render()
  },

  completeItem: function(item_index) {
    model.items[item_index].complete = !model.items[item_index].completed
    console.log(model.items[item_index].completed)
    view.render()
  }


}

controller.addItem("This is the todo list!")
controller.addItem("You can cross out")
controller.addItem("or delete an item by")
controller.addItem("using the controllers to the right of")
controller.addItem("each item! Have fun being productive!")
