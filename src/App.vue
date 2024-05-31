<template>
  <div class="h-svh flex flex-col max-w-md mx-auto bg-gray-200">
    <header class="bg-white border-b border-gray-300 drop-shadow-sm p-4">
      <h4 class="text-2xl text-center font-bold uppercase">Save Id</h4>
    </header>

    <main class="p-4 overflow-y-auto h-full">
      <RouterView />
    </main>

    <footer class="bg-white border-t border-gray-300 drop-shadow-sm p-4">
      <div class="grid grid-cols-2 gap-4 *:text-center *:rounded">
        <RouterLink to="/" class="bg-gray-200 p-2" active-class="bg-pink-600 text-white">Save</RouterLink>
        <RouterLink to="/preview" class="bg-gray-200 p-2" active-class="bg-pink-600 text-white">Preview</RouterLink>
      </div>
    </footer>
  </div>
</template>