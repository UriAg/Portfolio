import "./globals.css";
import Header from "./components/Header.js";
import LateralProfile from "./components/LateralProfile.js";
import SubLayout from "./SubLayout";
import { Provider } from "./context/utilsContext";

export const metadata = {
  title: "¡Bienvenido!",
  description:
    "¿Buscas crear un sitio altamente personalizado y funcional para tu comercio? Estoy para ayudarte, ¡hablemos!",
  keywords: [
    "Portfolio",
    "Uriel",
    "Aguero",
    "Uriel Aguero",
    "Programación",
    "Desarrollador",
    "Reactjs",
    "NextJS",
    "Tailwind",
    "Developer",
    "Programador",
    "Web",
    "Fullstack",
    "Backend",
    "Frontend",
    "Lead",
    "Confianza",
  ],
  author: "Uriel Agüero",
  creator: "Uriel Agüero",
  copyright: "Uriel Agüero",
  openGraph: {
    title: "Uriel Agüero portfolio",
    description:
      "¿Buscas crear un sitio altamente personalizado y funcional para tu comercio? Estoy para ayudarte, ¡hablemos!",
    image: "@/app/public/image/favicon.ico",
    type: "website",
    title: "Uriel Agüero portfolio",
    locale: "es_ES",
    title: "Uriel Agüero portfolio",
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "@/app/public/image/favicon.ico",
    },
  ],
};

const RootLayout = ({ children }) => {
  return (
    <Provider>
      <SubLayout>
        <Header />
        <div className="bg-slate-900 pt-11 px-6 lg:px-16 pb-5 gap-x-3 relative flex flex-col lg:flex-row overflow-x-scroll sm:overflow-x-hidden">
          <LateralProfile />
          <div className="custom-shape-divider-bottom-1716966669 absolute left-0 top-0 w-full -z-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                className="fill-slate-800"
                fillOpacity="1"
                d="M0,32L48,80C96,128,192,224,288,245.3C384,267,480,213,576,197.3C672,181,768,203,864,224C960,245,1056,267,1152,277.3C1248,288,1344,288,1392,288L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
              <path
                className="fill-slate-950 z-20"
                fillOpacity="1"
                d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,170.7C672,139,768,117,864,122.7C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
          {children}
        </div>
        <footer className="bg-slate-900 text-center pt-6 pb-3">
          <span>Desarrollado con ❤️ por el de la foto</span>
        </footer>
      </SubLayout>
    </Provider>
  );
};

export default RootLayout;
