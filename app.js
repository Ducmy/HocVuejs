//Tạo đối tượng vue mới
new Vue({
  el: "#vue-app",
  data: {
    name: "My~",
    job: "IT",
    website: "http://hoclamwebnhanh.com",
    websiteTag: '<a href="http://hoclamwebnhanh.com">Hoc Lam Web Nhanh</a>',
  },
  methods: {
    greet: function (time) {
      return "Good " + time + " " + this.name; // Good morning My~
    },
  },
});
