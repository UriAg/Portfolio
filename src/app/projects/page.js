import projectsJson from "../../../public/experience.json";
import WorkDesk from "../_components/WorkDesk.js";

export const metadata = {
  title: "Proyectos"
}

const Information = () => {
  return <WorkDesk workJson={projectsJson.projects} type='projects'/>;
};
export default Information;
