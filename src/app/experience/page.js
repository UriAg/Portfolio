import experienceJson from "../../../public/experience.json";
import WorkDesk from "../components/WorkDesk";

const Experience = () => {
  return <WorkDesk workJson={experienceJson.work} />;
};

export default Experience;
