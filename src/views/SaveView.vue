<script setup>
import { ref } from 'vue';
import appwriteService from "@/appwrite/config"

const body = ref("")

const handleSubmit = async () => {
  try {
    // Call the method from your Appwrite service to add data to the database
    await appwriteService.addId({ body: body.value });
    // Clear the input field after successful submission
    body.value = "";
    console.log("Data added successfully!");
  } catch (error) {
    console.error("Error adding data:", error);
  }
};

</script>
<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col space-y-3 w-full">
    <input type="text" placeholder="Enter Your account Id name" v-model="body"
      class="w-full p-2 border border-gray-400 rounded-md" />
    <button type="submit" class="bg-pink-600 text-white rounded-md p-2.5">Add</button>
  </form>
</template>
