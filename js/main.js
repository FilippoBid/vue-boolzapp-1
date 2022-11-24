import { users } from "./usersList.js";
console.log(users);

const { createApp } = Vue;
createApp({
  data () {
    return {
        message: "Hello Vue!",
    };
  },
}).mount("#app")
