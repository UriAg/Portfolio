import projectsJson from "../../../public/experience.json";
import WorkDesk from "../components/WorkDesk.js";

const Information = () => {
  return <WorkDesk workJson={projectsJson.projects} type='projects'/>;
};
export default Information;
