var app = new Vue({
  el: "#todo__list",
  data: {
    list: ["Latte", "Pasta", "Uova"],
    listAdd: "",
  },
  methods: {
    deleteItem: function(itemIndex) {
      this.list.splice(itemIndex, 1);
    },
    addItem: function() {
      if (this.listAdd !== "") {
        this.list.push(this.listAdd);
        this.listAdd = "";
      }
    },
  }
});
