<template>
  <div class="container">
    <h2 class="projects-title">My Projects</h2>
    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
      >
        <div class="carousel">
          <img :src="project.images[activeImageIndex[project.id]]" alt="Project Image" class="project-image" />
          <div v-if="project.images.length > 1" class="carousel-controls">
            <button @click="prevImage(project.id)">‹</button>
            <button @click="nextImage(project.id)">›</button>
          </div>
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank" rel="noopener noreferrer" class="view-project-link">
          View Project
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TurnerFinancialImage from '@/assets/TurnerFinancial.png';
import OlympicMedalsImage from '@/assets/olympic-medals-screenshot.png';
import ItsTrippyLogin from '@/assets/ItsTrippyLogin.png';
import MyTrips from '@/assets/MyTrips.png';
import MostRecentTrip from '@/assets/MostRecentTrip.png';

const projects = ref([
{
  id: 1,
  title: 'Turner Financial',
  description: 'A financial planning website developed with a focus on comprehensive financial services. Built with WordPress and customized for seamless user experience.',
  images: [TurnerFinancialImage],
  link: 'https://turnerfinancial.com'
},
{
  id: 2,
  title: 'Olympic Medals Tracker',
  description: 'An application built with React, .NET, and AWS for tracking Olympic medals across countries. It features a RESTful API and utilizes cloud storage.',
  images: [OlympicMedalsImage],
  link: 'https://olympicmedalsapp.example.com' // Replace with actual link if available
},
{
  id: 3,
  title: 'ItsTrippy - Image Upload and Sharing App',
  description: 'A Vue 3 and Quasar CLI app allowing users to upload, comment, like, and share travel images, featuring Google OAuth login.',
  images: [ItsTrippyLogin, MostRecentTrip, MyTrips],
  link: 'https://itstrippy.example.com' // Replace with actual link if available
}
]);

// Track active image index for each project with multiple images
const activeImageIndex = ref(
projects.value.reduce((acc, project) => {
  acc[project.id] = 0;
  return acc;
}, {})
);

function nextImage(projectId) {
const project = projects.value.find(p => p.id === projectId);
if (project) {
  activeImageIndex.value[projectId] = (activeImageIndex.value[projectId] + 1) % project.images.length;
}
}

function prevImage(projectId) {
const project = projects.value.find(p => p.id === projectId);
if (project) {
  activeImageIndex.value[projectId] = (activeImageIndex.value[projectId] - 1 + project.images.length) % project.images.length;
}
}
</script>

<style scoped>
.container {
max-width: 1280px;
margin: 0 auto;
padding: 20px;
text-align: center;
}

.projects-title {
font-size: 3em;
font-weight: bold;
color: #7284A8;
margin-bottom: 20px;
text-align: center;
animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
0% {
  opacity: 0;
  transform: translateY(-20px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
}

.projects-grid {
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
}

.project-card {
width: 300px;
padding: 20px;
border-radius: 8px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
transition: transform 0.3s ease, box-shadow 0.3s ease;
background-color: #fff;
text-align: center;
}

.project-card:hover {
transform: translateY(-10px);
box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
}

.carousel {
position: relative;
}

.project-image {
width: 100%;
height: auto;
border-radius: 8px;
margin-bottom: 10px;
}

.carousel-controls {
position: absolute;
top: 50%;
width: 100%;
display: flex;
justify-content: space-between;
transform: translateY(-50%);
}

.carousel-controls button {
background: rgba(0, 0, 0, 0.5);
color: #fff;
border: none;
padding: 5px 10px;
cursor: pointer;
font-size: 18px;
}

.view-project-link {
display: inline-block;
margin-top: 10px;
padding: 8px 16px;
background-color: #1e88e5;
color: #fff;
border-radius: 4px;
text-decoration: none;
transition: background-color 0.3s ease;
}

.view-project-link:hover {
background-color: #1565c0;
}
</style>
