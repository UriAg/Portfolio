import experienceJson from '../../../public/experience.json'
import WorkDesk from '../components/WorkDesk'

export default function experience() {
  return (
    <WorkDesk workJson={experienceJson.work}/>
  )
}
