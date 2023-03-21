<template>
  <!-- <v-dialog v-model="addTaskDialog" width="600">
    <v-card class="pa-4 pa-md-8">
      <h2 class="my-2 text-center">Add Task</h2>
      <v-form ref="form" @submit.prevent="submitForm">
        <v-text-field
          label="Title"
          placeholder="Enter your Title"
          v-model="formData.title"
          :rules="[
            (v) => !!v || 'Title is required',
            (v) =>
              (v && v.length <= 30) || 'Title must be less than 30 characters',
          ]"
          :counter="30"
          required
        >
        </v-text-field>

        <v-textarea
          label="Description"
          placeholder="Enter your task details"
          v-model="formData.info"
          :rules="[(v) => !!v || 'Task info is required']"
          required
        ></v-textarea>

        <v-select
          label="status"
          :items="statusSelect"
          :rules="[(v) => !!v || 'Status is required']"
          v-model="formData.status"
          required
        ></v-select>

        <v-select
          label="Bg Color"
          :items="bgColorSelect"
          :rules="[(v) => !!v || 'Background color is required']"
          v-model="formData.bgColor"
          required
        ></v-select>

        <v-btn color="success" type="submit" block :loading="isLoading">
          Add Task</v-btn
        >
      </v-form>
    </v-card>
  </v-dialog> -->
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import {mapState} from 'pinia'


  export default defineComponent({
      name : "editTask",
      computed: {

      },
      mounted() {

      },
  })
</script>
