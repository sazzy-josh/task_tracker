import {defineStore} from "pinia";
import {TaskList} from "@/type";

type globalStoreShape = {
  addFormDialog: Boolean;
  editFormDialog: Boolean;
  taskList: TaskList[];
};
export const useGlobalStore = defineStore("global", {
  state: (): globalStoreShape => {
    return {
      addFormDialog: false,
      editFormDialog: false,
      taskList: [
        {
          id: 1,
          title: "Hope dey give me hope",
          info: "lorem ipsum budy asa ipsum vim asj jur dkd dh fhdihd dfhihd",
          status: "completed",
          date: "15th Feb 2023",
          bgColor: "red",
        },
        {
          id: 2,
          title: "Learning Vue and Nuxt",
          info: "lorem ipsum budy asa ipsum vim asj jur dkd dh fhdihd dfhihd",
          status: "completed",
          date: "12th Jan 2023",
          bgColor: "green",
        },
        {
          id: 3,
          title: "Nuxt Got nothing on me",
          info: "lorem ipsum budy asa ipsum vim asj jur dkd dh fhdihd dfhihd",
          status: "ongoing",
          date: "24th Dec 2022",
          bgColor: "blue",
        },
        {
          id: 4,
          title: "Osheey let's Go!",
          info: "lorem ipsum budy asa ipsum vim asj jur dkd dh fhdihd dfhihd",
          status: "backlog",
          date: "12th Dec 2022",
          bgColor: "yellow",
        },
        {
          id: 5,
          title: "Learning Vue and Nuxt",
          info: "lorem ipsum budy asa ipsum vim asj jur dkd dh fhdihd dfhihd",
          status: "completed",
          date: "12th Jan 2023",
          bgColor: "green",
        },
      ],
    };
  },
  actions: {},
  getters: {},
});
