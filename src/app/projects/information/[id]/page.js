import SearchParamsHandler from "./SearchParamsHandler.js";
import experience from "@/../public/experience.json";

export function generateMetadata({ params }) {
  const works = Object.values(experience.work);
  const projects = Object.values(experience.projects);
  const jsonJoin = [...works, ...projects];
  const selectedProject = Object.values(jsonJoin).filter((e) => e.id === params.id);
  return{
    title: selectedProject[0].title
  }
}

const Details = async ({params}) => {

  const id = params.id;

  const works = Object.values(experience.work);
  const projects = Object.values(experience.projects);
  const jsonJoin = [...works, ...projects];

  const selectedItem = await Object.values(jsonJoin).filter((e) => e.id === id);
  return (
    <SearchParamsHandler selectedItem={selectedItem}/>
  );
};

export default Details;
