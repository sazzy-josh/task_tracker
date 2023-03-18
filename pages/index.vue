import { TaskCard } from '../.nuxt/components';
<template>
  <NuxtLayout>
    <v-container>
      <v-row justify="center" align="center">
        <v-col justify="center" align="center">
          <v-card
            elevation-19
            class="bg-grey-lighten-3 pa-1 pa-sm-3 rounded-lg rounded-md-pill"
          >
            <v-row>
              <v-col xs="3" md="4">
                <p>Completed</p>
                <p class="font-weight-bold text-h3">0</p>
              </v-col>

              <v-col xs="3" md="4">
                <p>Ongoing</p>
                <p class="font-weight-bold text-h3">0</p>
              </v-col>

              <v-col xs="3" md="4">
                <p>Backlog</p>
                <p class="font-weight-bold text-h3">0</p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <div class="d-flex justify-end my-4">
        <v-btn prepend-icon="mdi-plus" color="grey lighten-4">Add Task</v-btn>
      </div>

      <v-divider></v-divider>
      <v-container fluid class="task_list pa-2 pa-md-4">
        <v-row>
          <TaskCard v-for="(task, n) in taskList" :key="n" :task="task" />
        </v-row>
        <v-row justify="center">
          <v-btn class="rounded-xl" append-icon="mdi-chevron-right" to="alltask"
            >More Task</v-btn
          >
        </v-row>
      </v-container>
    </v-container>
  </NuxtLayout>
</template>

<script lang="ts">
  import TaskCard from "../components/TaskCard.vue";
  import {defineComponent} from "vue";
  import type {TaskList} from "@/type";

  type DataShape = {
    taskList: TaskList[];
  };

  export default defineComponent({
    name: "Home",
    components: {
      TaskCard,
    },
    data: (): DataShape => ({
      taskList: [
        {
          id: 1,
          title: "Hope dey give me hope",
          info: "lorem ipsum budy asa ipsum vim asj jur dkd dh fhdihd dfhihd",
          status: "completed",
          time: Date.now(),
          bgColor: "red",
        },
        {
          id: 2,
          title: "Learning Vue and Nuxt",
          info: "lorem ipsum budy asa ipsum vim asj jur dkd dh fhdihd dfhihd",
          status: "completed",
          time: Date.now(),
          bgColor: "green",
        },
        {
          id: 3,
          title: "Nuxt Got nothing on me",
          info: "lorem ipsum budy asa ipsum vim asj jur dkd dh fhdihd dfhihd",
          status: "ongoing",
          time: Date.now(),
          bgColor: "blue",
        },
        {
          id: 4,
          title: "Osheey let's Go!",
          info: "lorem ipsum budy asa ipsum vim asj jur dkd dh fhdihd dfhihd",
          status: "backlog",
          time: Date.now(),
          bgColor: "yellow",
        },
      ],
    }),
  });
</script>

<style></style>
