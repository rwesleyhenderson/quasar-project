<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" style="width: 600px">
      <q-card-section>
        <div class="text-h4">To-Do List</div>
      </q-card-section>

      <q-card-section>
        <div class="row justify-center">
          <div class="col-12 q-pb-md">
            <q-input
              v-model="todoTask"
              label="Input Task"
              @keyup.enter="addItem"
            >
              <template v-slot:after>
                <q-btn round dense flat icon="send" @click="addItem" />
              </template>
            </q-input>
          </div>
        </div>
      </q-card-section>

      <q-separator />
      <q-card-section v-if="todoList.length">
        <div
          class="row justify-center"
          v-for="(item, index) in todoList"
          :key="index"
        >
          <div class="col-8 q-py-md">
            {{ item.value }}
          </div>
          <div class="col-auto q-py-md">
            <q-btn round dense flat icon="done" @click="removeItem(index)" />
          </div>
        </div>
      </q-card-section>

      <q-card-section v-else>
        <div class="row justify-center">
          <div class="col-12">
            <div class="text-h6">No Items in the List</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <figure
      class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800"
    >
      <img
        class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
          <div class="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      todoTask: "",
      todoList: [{ value: "Create an app" }, { value: "Build an app" }],
    };
  },
  methods: {
    addItem() {
      this.todoList.push({ value: this.todoTask });
    },
    removeItem(index) {
      this.todoList.splice(index, 1);
    },
  },
});
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
