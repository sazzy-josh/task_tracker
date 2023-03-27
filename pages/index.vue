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
                <p class="font-weight-bold text-h5 text-md-h3">
                  {{ getAllCompleted }}
                </p>
              </v-col>

              <v-col xs="3" md="4">
                <p>Ongoing</p>
                <p class="font-weight-bold text-h5 text-md-h3">
                  {{ getAllOngoing }}
                </p>
              </v-col>

              <v-col xs="3" md="4">
                <p>Backlog</p>
                <p class="font-weight-bold text-h5 text-md-h3">
                  {{ getAllBacklogs }}
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <div class="d-flex justify-end my-4">
        <v-btn
          prepend-icon="mdi-plus"
          color="grey lighten-4"
          @click="goToAddTask"
          >Add Task</v-btn
        >
      </div>

      <v-divider></v-divider>
      <v-container fluid class="task_list pa-2 pa-md-4">
        <div v-if="taskList.length">
          <v-row>
            <TaskCard
              v-for="(task, idx) in getLimitedTask"
              :key="idx"
              :task="task"
            />
          </v-row>
          <v-row justify="center" v-if="taskList.length > 5">
            <v-btn
              class="rounded-xl"
              append-icon="mdi-chevron-right"
              to="alltask"
              >More Task</v-btn
            >
          </v-row>
        </div>

        <div
          v-else
          class="d-flex flex-column justify-center align-center h-auto mt-md-6"
        >
          <v-icon icon="mdi-package-variant" size="150"></v-icon>
          <p class="text-h6 my-2">Ooops🙊!No Task</p>
          <v-btn color="grey lighten-5">Add Task</v-btn>
        </div>
      </v-container>

      <NuxtPage />
    </v-container>
  </NuxtLayout>
</template>

<script lang="ts">
  import TaskCard from "../components/TaskCard.vue";
  import {defineComponent} from "vue";
  import {mapState, mapActions} from "pinia";
  import {useGlobalStore} from "@/store/useGlobalStore";

  export default defineComponent({
    name: "Home",
    components: {
      TaskCard,
    },
    computed: {
      ...mapState(useGlobalStore, [
        "taskList",
        "getAllBacklogs",
        "getAllCompleted",
        "getAllOngoing",
        "addTaskDialog",
      ]),
      getLimitedTask() {
        return this.taskList.slice(0, 5);
      },
    },
    methods: {
      ...mapActions(useGlobalStore, ["getAllTask"]),
      goToAddTask() {
        this.$router.push("addTask");
      },
      
    },
    created() {
      this.getAllTask();
    },
  });
</script>

<style></style>
