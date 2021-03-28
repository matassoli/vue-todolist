var app = new Vue({
  el: "#todo__list",
  data: {
    lista: ["Latte", "Pasta", "Uova"],
    listaAdd: "",
  },
  methods: {
    deleteItem: function(itemIndex) {
      this.lista.splice(itemIndex, 1);
    },
    addItem: function() {
      if (this.listaAdd !== "") {
        this.lista.push(this.listaAdd);
        this.listaAdd = "";
      }
    },
  }
});
