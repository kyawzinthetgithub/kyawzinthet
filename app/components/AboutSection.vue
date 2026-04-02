<template>
  <div>
    <div class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold text-center mb-5">About Me</h2>
      <div class="grid md:grid-cols-3 gap-8 items-center">
        <div class="flex justify-center items-center">
          <img :src="developer" alt="Developer"
            class="border border-gray-300 rounded-full shadow-lg object-cover md:grayscale hover:grayscale-0 transition duration-300 cursor-pointer hover:rotate-y-10">
        </div>

        <div class="md:col-span-2">
          <h1 class="text-3xl font-bold">Kyaw Zin Thet</h1>
          <p class="text-info my-5 bg-info/10 inline-block px-4 py rounded">Full Stack Web Developer</p>
          <p class="text-lg mb-4">Experienced Full Stack Web Developer with {{ experienceYears }}+ years of experience
            building scalable
            and efficient applications using PHP, Laravel, Vue.js, and Nuxt.js. I specialize in backend API
            development and strive to write clean, well-documented code following test-driven development practices.</p>
          <p class="text-lg mb-4">Skilled at collaborating with cross-functional teams, including mobile developers and
            UI/UX designers, to deliver high-quality solutions. I have a track record of mentoring junior
            developers, troubleshooting and resolving critical issues, and effectively leveraging AI tools to
            enhance productivity.</p>
          <p class="text-lg">Experienced in supporting POS systems by improving usability, training users, and ensuring
            smooth and accurate business operations. I am driven to develop practical, user-focused applications
            that simplify complex workflows and solve real-world operational challenges.</p>
            <button class="bg-primary text-white mt-3 py-2 px-4 rounded hover:bg-primary-dark transition cursor-pointer">Resume</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const developer = '/imgs/about_developer.png';
const experienceYears = new Date().getFullYear() - 2023;
</script>