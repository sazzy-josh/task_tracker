<template>
  <v-col cols="12" sm="6" md="4">
    <v-card :class="getBgColor" class="rounded-xl">
      <v-card-text>
        <div class="d-flex justify-space-between align-center">
          <p class="text-subtitle-1 font-weight-bold text-h6">
            {{ task?.title }}
          </p>
          <v-btn
            icon="mdi-pencil"
            size="x-small"
            @click="$emit('toggleDrawer', task.id)"
          >
            <v-icon fab></v-icon>
          </v-btn>
        </div>
        <p class="my-2">
          {{ task.info }}
        </p>

        <v-chip
          :class="getStatusColor"
          class="mt-4"
          size="small"
          text-color="white"
        >
          {{ task.status }}
        </v-chip>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent ({
      name: "TaskCard",
      props: {
        task: {
          type: Object,
          required: true
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
      },
    });
</script>
