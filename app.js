//Tạo đối tượng vue mới
new Vue({
  el: "#vue-app",
  data: {
    x: 0,
    y: 0,
    name: "My~",
    job: "IT",
    website: "http://hoclamwebnhanh.com",
    websiteTag: '<a href="http://hoclamwebnhanh.com">Hoc Lam Web Nhanh</a>',
    age: 25,
  },
  methods: {
    greet: function (time) {
      return "Good " + time + " " + this.name; // Good morning My~
    },
    add: function (inc) {
      this.age += inc;
    },
    sub: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    click: function () {
      alert("You are clicked me");
    },
  },
});
