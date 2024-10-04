import experienceJson from "../../../public/experience.json";
import WorkDesk from "../_components/WorkDesk";

export const metadata = {
  title: "Experiencia"
}

const Experience = () => {
  return <WorkDesk workJson={experienceJson.work} type='experience'/>;
};

export default Experience;
