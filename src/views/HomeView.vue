<template>
  <div class="home-container">
    <!-- Profile Picture and Intro Section -->
    <div class="intro-section">
      <img src="@/assets/me.jpg" alt="Zachary Hendrix" class="profile-picture" />
      <div class="intro-text">
        <h1>Zack Hendrix</h1>
        <h2> Full Stack Web/Software/Mobile Developer</h2>
        <h3> "FULL STACK ZACK" </h3>
        <p>
          With a solid background in both front-end and back-end development. I'm dedicated to building efficient, user-friendly projects. Skilled in most modern frameworks, responsive design, and agile methods.
        </p>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="skills-section">
      <h3>Technical Skills</h3>
      <div v-for="(category, index) in skillsCategories" :key="index" class="skill-category">
        <div class="category-header" @click="toggleCategory(index)">
          <span>{{ category.title }}</span>
          <span class="icon" :class="{ expanded: expandedCategories[index] }">
            <i v-if="expandedCategories[index]" class="fas fa-chevron-up"></i>
            <i v-else class="fas fa-chevron-down"></i>
          </span>
        </div>
        <transition name="slide">
          <ul v-if="expandedCategories[index]" class="skills-list">
            <li v-for="skill in category.skills" :key="skill" class="skill-item">
              {{ skill }}
              <hr v-if="index < category.skills.length - 1" class="skill-divider" />
            </li>
          </ul>
        </transition>
      </div>
    </div>

    <!-- LinkedIn Profile Link -->
    <a 
      href="https://www.linkedin.com/in/zachary-hendrix-8672432ba/" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="linkedin-link interactive-link" style="color: var(--accent-color);"
    >
      Click to View LinkedIn Profile
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Skills categories data
const skillsCategories = ref([
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Vue.js', 'HTML', 'CSS', 'AJAX', 'Quasar Framework', 'React']
  },
  {
    title: 'Backend Development',
    skills: ['API Development', 'ASP.NET', 'ASP.NET MVC', 'SQL', 'C#', '.NET Framework']
  },
  {
    title: 'Tools & Methodologies',
    skills: ['Git', 'HTTP', 'Agile Development']
  },
  {
    title: 'UI/UX Design',
    skills: ['Front-End Design', 'User Interface & User Experience Design', 'Graphical User Interface (GUI)']
  },
  {
    title: 'Mobile Development',
    skills: ['.NET MAUI', 'Flutter']
  }
]);

// State to keep track of expanded categories
const expandedCategories = ref(skillsCategories.value.map(() => false));

// Method to toggle expand/collapse for each category
function toggleCategory(index) {
  expandedCategories.value[index] = !expandedCategories.value[index];
}
</script>

<style scoped>
:root {
  --primary-bg-color: #7284A8;
  --accent-color: #990D35;
  --secondary-color: #8CDEDC;
  --text-color: #FFFFFF;
}

.home-container {
  color: var(--text-color);
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
  background-color: var(--primary-bg-color);
}

.intro-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid var(--secondary-color);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

.intro-text {
  flex: 1;
}

h1 {
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.skills-section {
  background-color: var(--secondary-color);
  padding: 1rem;
  border-radius: 8px;
  color: var(--text-color);
  margin-bottom: 2rem;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
}

.section-title {
  font-size: 1.8rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  text-align: center;
}

.skill-category {
  margin-bottom: 10px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--accent-color);
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  font-weight: bold;
  font-size: 1.2rem;
}

.category-header:hover {
  background-color: var(--text-color);
  color: var(--accent-color);
  transform: translateY(-2px);
}

.icon {
  transition: transform 0.3s;
}

.icon.expanded {
  transform: rotate(180deg);
}

.skills-list {
  padding: 10px;
  list-style: none;
  margin: 0;
  background-color: var(--primary-bg-color);
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.skill-item {
  padding: 5px 0;
  color: var(--text-color);
  font-weight: bold;
  position: relative;
}

.skill-divider {
  border: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 5px 0;
}

/* Slide transition for expanding/collapsing lists */
.slide-enter-active, .slide-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.linkedin-link {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  background-color: var(--secondary-color);
  color: var(--primary-bg-color);
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.linkedin-link:hover {
  background-color: var(--accent-color);
  color: var(--text-color);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
