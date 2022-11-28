const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      messageArray: [
        {
          newMessage: "",
        },
      ],
      selectedUser: null,
      search: "",
      dateTime : luxon.DateTime,
      usersList: [
        {
          name: "Michele",
          avatar: "img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Scusa, devo fare la spesa.",
              status: "received",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il gatto?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Ci penso io!",
              status: "received",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il topo?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Non dire altro!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il lupo?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Allora, calma!",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  methods: {
    sendText() {
      this.selectedUser.messages.push({
        date: this.dateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
        message: this.messageArray.newMessage,
        status: "sent",
      });
      this.messageArray.newMessage = "";
      setTimeout(this.sendOk, 1000);
    },
    sendOk() {
      this.selectedUser.messages.push({
        date: this.dateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
        message: "Ok.",
        status: "received",
      });
    },
    onDeleteMessage(index) {
      this.selectedUser.messages.splice(index, 1);
    },
    onInfoMessage(index) {
      alert("Data e ora dell'ultimo messaggio: " + this.selectedUser.messages[index].date);
    },
/*     searchUserChat(){
      this.usersList.forEach(user => {
        if(user.name.toLowerCase().includes(this.search.toLowerCase())){
          user.visible = true;
        } else {
          user.visible = false;
        }
      });
    }, */
  },
  computed: {
    searchUserChat(){
      return this.usersList.filter(user =>{
        return user.name.toLowerCase().includes(this.search.toLowerCase())
      });
    },
  },
}).mount("#app");
