import Logo from "./_components/Logo.js";

const Home = () => {
  return (
    <section className="w-full lg:w-3/4 z-10">
      <div className="lg:px-12 pb-9">
        <h1 className="text-2xl pb-2 lg:pb-6">Sobre mí</h1>
        <p className="text-lg">
          Profesionalizando mis habilidades de desarrollo durante{" "}
          <b className="text-blue-400">+3 años</b>.{" "}
          <b className="text-blue-400">Autodidacta</b>,{" "}
          <b className="text-blue-400">resiliente</b> y{" "}
          <b className="text-blue-400">dinámico</b>. Disfruto del trabajo en
          equipo, brindo apoyo y orientación para lograr objetivos. Me gusta
          crear interfaces atractivas y funcionales. Comprometido con el
          autodesarrollo y profesionalismo.{" "}
          <b className="text-blue-400">Liderazgo</b>,{" "}
          <b className="text-blue-400">seriedad</b> y{" "}
          <b className="text-blue-400">proactividad</b> para enfrentar nuevos
          desafíos.
          <br />
          ¡Contactame para conversar sobre tecnología y oportunidades
          profesionales!
        </p>
      </div>
      <div className="lg:px-12">
        <h2 className="text-2xl pb-3">Tecnologías</h2>
        <div className="w-full flex justify-evenly flex-wrap gap-4">
          <Logo icon="icon-[logos--html-5]" tooltipText="HTML5" />
          <Logo icon="icon-[logos--css-3]" tooltipText="CSS3" />
          <Logo icon="icon-[logos--sass]" tooltipText="SASS" />
          <Logo icon="icon-[logos--tailwindcss-icon]" tooltipText="Tailwind" />
          <Logo icon="icon-[logos--bootstrap]" tooltipText="Bootstrap" />
          <Logo icon="icon-[logos--firebase]" tooltipText="Firebase" />
          <Logo icon="icon-[logos--material-ui]" tooltipText="Material UI" />
          <Logo icon="icon-[logos--javascript]" tooltipText="JavaScript" />
          <Logo icon="icon-[logos--typescript-icon]" tooltipText="TypeScript" />
          <Logo icon="icon-[logos--react]" tooltipText="ReactJS" />
          <Logo icon="icon-[logos--nextjs-icon]" tooltipText="NextJS" />
          <Logo icon="icon-[logos--nodejs-icon]" tooltipText="NodeJS" />
          <Logo icon="icon-[logos--express] invert" tooltipText="ExpressJS" />
          <Logo icon="icon-[logos--git-icon]" tooltipText="Git" />
          <Logo icon="icon-[logos--mongodb-icon]" tooltipText="MongoDB" />
        </div>
      </div>
    </section>
  );
};

export default Home;
