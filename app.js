//Tạo đối tượng vue mới
new Vue({
  el: "#vue-app",
  data: {
    name: "My~",
    job: "IT",
  },
  methods: {
    greet: function (time) {
      return "Good " + time + " " + this.name; // Good morning My~
    },
  },
});
