import {defineStore} from "pinia";
import {TaskList} from "@/type";
import axios from "axios";

type globalStoreShape = {
  addTaskDialog: Boolean;
  editTaskDialog: Boolean;
  taskList: TaskList[];
};
export const useGlobalStore = defineStore("global", {
  state: (): globalStoreShape => {
    return {
      addTaskDialog: true,
      editTaskDialog: false,
      taskList: [],
    };
  },
  actions: {
    async getAllTask(): Promise<void> {
      const {data} = await axios.get("http://localhost:4000/task");
      this.taskList = data;
    },

    async addTask(payload: TaskList): Promise<void> {
      try {
        await axios.post(" http://localhost:4000/task", payload);
        this.getAllTask();
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getAllBacklogs(): number {
      return this.taskList.filter((task) => task.status === "backlog").length;
    },
    getAllCompleted(): number {
      return this.taskList.filter((task) => task.status === "completed").length;
    },
    getAllOngoing(): number {
      return this.taskList.filter((task) => task.status === "ongoing").length;
    },
  },
});
