<template>
  <div class="flex flex-col gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
    <div class="relative group overflow-hidden rounded-lg bg-violet-50">
      <img src="https://res.cloudinary.com/dznadalbq/image/upload/v1763565147/image/globalmarketplace_vjtd5n.png"
        alt="project image" class="w-full h-full object-cover rounded-lg" />
      <div
        class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <a href="https://marketplace.com.mm/" target="_blank"
          class="px-4 py-2 bg-white text-gray-800 rounded-md font-semibold">View Project</a>
      </div>
    </div>
    <div class="relative">
      <div>
        <h2 class="text-xl font-semibold">Global Marketplace</h2>
        <p class="text-gray-600 dark:text-gray-400">Tech Stack: NuxtJs, HTML, CSS, JavaScript, TailwindCSS, Websockets
        </p>
      </div>
    </div>

  </div>
</template>
