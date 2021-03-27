var app = new Vue({
  el: "#todo__list",
  data: {
    lista: ["Latte", "Pasta", "Uova"],
    listaNew: "",
  },
  methods: {
    deleteItem: function(itemIndex) {
      this.lista.splice(itemIndex, 1);
    },
    addItem: function() {
      this.lista.push(this.listaNew);
      this.listaNew = "";
    },
  }
});
