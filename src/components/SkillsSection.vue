<template>
  <div class="skills-section">
    <h2 class="section-title">Technical Skills</h2>

    <div v-for="(category, index) in skillsCategories" :key="index" class="skill-category">
      <div class="category-header" @click="toggleCategory(index)">
        <span>{{ category.title }}</span>
        <span class="icon" :class="{ expanded: expandedCategories[index] }">
          <font-awesome-icon v-if="expandedCategories[index]" icon="chevron-up" />
          <font-awesome-icon v-else icon="chevron-down" />
        </span>
      </div>
      <transition name="slide">
        <ul v-if="expandedCategories[index]" class="skills-list">
          <li v-for="skill in category.skills" :key="skill" class="skill-item">{{ skill }}</li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Add Font Awesome icons to the library
library.add(faChevronUp, faChevronDown);

// Skills categories data
const skillsCategories = ref([
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Vue.js', 'HTML', 'CSS', 'AJAX', 'Quasar Framework']
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
]);

// State to keep track of expanded categories
const expandedCategories = ref(skillsCategories.value.map(() => false));

// Method to toggle expand/collapse for each category
function toggleCategory(index) {
  expandedCategories.value[index] = !expandedCategories.value[index];
}
</script>

<style scoped>
.skills-section {
  background-color: var(--accent-color);
  padding: 1rem;
  border-radius: 8px;
  color: var(--text-color-light);
  margin-bottom: 2rem;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
}

.section-title {
  font-size: 2rem;
  color: var(--secondary-color);
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
  background-color: var(--secondary-color);
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.category-header:hover {
  background-color: var(--text-color-light);
  color: var(--primary-color);
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
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.skill-item {
  padding: 5px 0;
  color: var(--text-color-light);
}

/* Slide transition for expanding/collapsing lists */
.slide-enter-active, .slide-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
