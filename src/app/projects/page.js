import React from 'react'
import projectsJson from '../../../public/experience.json'
import WorkDesk from '../components/WorkDesk.js'

function page() {
  return (
    <WorkDesk workJson={projectsJson.projects}/>
  )
}

export default page