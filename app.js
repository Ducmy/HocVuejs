//Tạo đối tượng vue mới
new Vue({
  el: "#vue-app",
  data: {
    age: 20,
    a: 0,
    b: 0,
  },
  methods: {
    // addtoA: function () {
    //   console.log("Add to A");
    //   return this.a + this.age;
    // },
    // addtoB: function () {
    //   console.log("Add to B");
    //   return this.b + this.age;
    // },
  },

  computed: {
    addtoA: function () {
      console.log("Add to A");
      return this.a + this.age;
    },
    addtoB: function () {
      console.log("Add to B");
      return this.b + this.age;
    },
  },
});
