<template>
  <v-col cols="12" sm="6" md="4">
    <v-sheet
      :class="getBgColor"
      class="d-flex flex-column justify-space-between rounded-xl py-4 px-3"
      :height="$vuetify.display.mdAndUp ? 150 : 180"
      elevation="2"
    >
      <div class="d-flex justify-space-between align-center">
        <p class="text-subtitle-1 font-weight-bold text-h6">
          {{ task.title }}
        </p>
        <v-btn icon="mdi-pencil" size="x-small" @click="editTask">
          <v-icon fab></v-icon>
        </v-btn>
      </div>
      <p class="my-2">
        {{
          `${
            task.info.length > 80
              ? task.info.substring(0, 80) + "..."
              : task.info
          }`
        }}
      </p>

      <div class="d-flex justify-space-between align-center">
        <v-chip :class="getStatusColor" size="small" text-color="white">
          {{ task.status }}
        </v-chip>

        <p>{{ formattedDate }}</p>
      </div>
    </v-sheet>
  </v-col>
</template>

<script lang="ts">
  import {formatDistanceToNow} from "date-fns";
  import {defineComponent} from "vue";
  import type {PropType} from "vue";
  import type {TaskList} from "@/type";

  export default defineComponent({
    name: "TaskCard",
    props: {
      task: {
        type: Object as PropType<TaskList>,
        required: true,
      },
    },
    computed: {
      getBgColor() {
        switch (this.task.bgColor) {
          case "green":
            return "bg-light-green-lighten-5";
          case "blue":
            return "bg-light-blue-lighten-5";
          case "red":
            return "bg-deep-orange-lighten-5";
          case "yellow":
            return "bg-yellow-lighten-5";
          default:
            return "";
        }
      },
      getStatusColor() {
        switch (this.task.status) {
          case "backlog":
            return "bg-red";
          case "completed":
            return "bg-green";
          case "ongoing":
            return "bg-blue";
          default:
            return "";
        }
      },
      formattedDate() {
        return formatDistanceToNow(new Date(this.task.Date), {addSuffix: true});
      },
    },
    methods: {
      editTask() {
        this.$router.push(`/edit/${this.task.id}`);
      },
    },
  });
</script>


