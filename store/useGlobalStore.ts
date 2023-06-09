import {defineStore} from "pinia";
import axios from "axios";
import {TaskList} from "../type";

type globalStoreShape = {
  addTaskDialog: any;
  editTaskDialog: any;
  taskList: TaskList[];
};
export const useGlobalStore = defineStore("global", {
  state: (): globalStoreShape => {
    return {
      addTaskDialog: true,
      editTaskDialog: true,
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
        await axios.post("http://localhost:4000/task", payload);
        this.getAllTask();
        this.addTaskDialog = false
      } catch (error) {
        console.log(error);
      }
    },

    async getTaskById(params: string): Promise<any> {
      try {
        const {data} = await axios.get(`http://localhost:4000/task/${params}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async editTask(payload: TaskList): Promise<void> {
      await axios.put(`http://localhost:4000/task/${payload.id}`, payload);
      this.getAllTask();
    },
  },
  
  getters: {
    getAllBacklogs(): number {
      return this.taskList.filter((task: TaskList) => task.status === "backlog")
        .length;
    },
    getAllCompleted(): number {
      return this.taskList.filter(
        (task: TaskList) => task.status === "completed",
      ).length;
    },
    getAllOngoing(): number {
      return this.taskList.filter((task: TaskList) => task.status === "ongoing")
        .length;
    },
  },
});
