<template>
  <v-dialog v-model="editTaskDialog" width="600">
    <v-card class="pa-4 pa-md-8">
      <h2 class="my-2 text-center">Edit Task</h2>
      <v-form ref="form" @submit.prevent="submitEditForm">
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

        <div class="w-100 d-flex justify-end">
          <v-btn
            right
            variant="plain"
            :loading="isDeleteLoading"
            class="font-weight-bold mb-2 text-red-darken-2 text-right"
            @click="deleteTask"
          >
            Remove Task
          </v-btn>
        </div>
        <v-btn color="success" type="submit" block :loading="isAddLoading">
          Edit Task</v-btn
        >
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import {mapState, mapActions} from "pinia";
  import {useGlobalStore} from "@/store/useGlobalStore";
  import axios from "axios";
  import {TaskList} from "@/type";

  export default defineComponent({
    name: "editTask",
    data() {
      return {
        statusSelect: ["ongoing", "backlog", "completed"],
        bgColorSelect: ["red", "green", "blue", "yellow"],
        isAddLoading: false,
        isDeleteLoading: false,
        formData: {
          id: "",
          title: "",
          info: "",
          status: "",
          bgColor: "",
          Date: "",
        },
      };
    },
    computed: {
      ...mapState(useGlobalStore, ["editTaskDialog"]),
    },
    methods: {
      ...mapActions(useGlobalStore, ["getTaskById", "editTask", "getAllTask"]),
      submitEditForm() {
        const form = this.$refs.form as HTMLInputElement;
        const payload = {
          id: this.formData.id,
          title: this.formData.title,
          info: this.formData.info,
          status: this.formData.status,
          bgColor: this.formData.bgColor,
          Date: this.formData.Date,
        } as TaskList;
        if (!form.checkValidity()) {
          this.isAddLoading = false;
          return;
        }
        if (this.formData.title.length > 30) {
          this.isAddLoading = false;
          return;
        }
        this.editTask(payload);
        this.$router.push("/");
      },

      async deleteTask() {
        this.isDeleteLoading = true;
        await axios.delete(
          `http://localhost:4000/task/${this.$route.params.id}`,
        );
        setTimeout(() => {
          this.isDeleteLoading = false;
          this.getAllTask();
          this.$router.push("/");
        }, 1000);
        //@ts-expect-error
        this.$snackbar.add({
                type: 'success',
                text: 'Removed task successfully'
            })
      },
    },
    async created() {
      const data = await this.getTaskById(this.$route.params.id as string);
      this.formData = data;
      // console.log(JSON.stringify(data, null, 2));
    },
  });
</script>
