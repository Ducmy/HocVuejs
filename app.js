//Tạo đối tượng vue mới
new Vue({
  el: "#vue-app",
  data: {
    age: "",
    name: "",
  },
  methods: {
    logName: function () {
      console.log("You are enter your name");
    },
    logAge: function () {
      console.log("You are enter your age");
    },
  },
});
