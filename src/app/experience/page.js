import experienceJson from "../../../public/experience.json";
import WorkDesk from "../components/WorkDesk";

const Experience = () => {
  return <WorkDesk workJson={experienceJson.work} type='experience'/>;
};

export default Experience;
