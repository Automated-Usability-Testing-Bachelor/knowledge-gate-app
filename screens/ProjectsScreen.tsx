import React from 'react'
import Background from '../components/BackgroundTemplate'
import Projects from '../components/projectsComponents/ProjectCard'

const ProjectsScreen = () => {
  return <Background body={Projects()} />
}

export default ProjectsScreen
