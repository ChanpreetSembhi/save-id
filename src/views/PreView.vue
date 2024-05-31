<script setup>
import { onMounted, ref } from "vue";
import appwriteService from "@/appwrite/config"
import DeleteIcon from "@/components/DeleteIcon.vue"
import CopyIcon from "@/components/CopyIcon.vue";

const notes = ref([])

onMounted(async () => {
  const response = await appwriteService.getList()
  notes.value = response.documents
})

const deleteId = async (id) => {
  try {
    await appwriteService.deleteId(id);
    console.log("Data Seleted successfully!");
    window.location.reload()
  } catch (error) {
    console.error("Error seleting data:", error);
  }

}

const copyText = (toCopy) => {
  navigator.clipboard.writeText(toCopy)
    .then(() => console.log('Test Copy successfully!'))
    .catch(error => console.error('Error coping text:', error))
}

</script>
<template>
  <div class="flex flex-col space-y-3">
    <div v-for="note in notes" :key="note.$id"
      class="bg-gray-50 border border-gray-300 rounded-lg shadow-sm flex items-center gap-3 p-4">
      <CopyIcon @click="copyText(note.body)" class="text-gray-500 size-6 cursor-pointer" />
      {{ note.body }}
      <DeleteIcon @click="deleteId(note.$id)" class="text-red-600 size-6 ml-auto cursor-pointer" />
    </div>
  </div>
</template>
