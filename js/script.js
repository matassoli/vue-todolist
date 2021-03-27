var app = new Vue({
  el: "#todo__list",
  data: {
    lista: ["Latte", "Pasta", "Uova"]
  },
  methods: {
    deleteItem: function(itemIndex) {
      this.lista.splice(itemIndex, 1);
    }
  }
});
