import { motion } from "framer-motion";
import Title from "../Component/Title";
import { useGetProjects } from "../Component/GetProjects";
import { Link } from "react-router-dom";

const Projects = () => {
  const { loading, projects } = useGetProjects();
  const welcomeTitle = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  if (loading) {
    return (
      <div className="page-container d-flex justify-content-center align-items-center">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <section className="container">
      <Title title="Projects" />
      <div className="row row-gap-4">
        {projects.map((project,index) => {
          const { title, liveDemo, repoUrl, img, id } = project;
          return (
            <motion.div
              variants={welcomeTitle}
              initial={"hidden"}
              animate={"visible"}
              transition={{ delay: index * 0.05 }}
              exit={{ y: "100%", opacity: 0 }}
              key={id}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="card project-card">
                <div className="project-img">
                  <img src={img} className="card-img-top" alt={title} />
                </div>
                <div className="card-body">
                  <Link to={repoUrl} target="_blank">
                    <h5 className=" text-light">{title}</h5>
                  </Link>
                  <div className="d-flex gap-2">
                    <Link to={repoUrl} target="_blank" className="btn">
                      View Code
                    </Link>
                    <Link to={liveDemo} target="_blank" className="btn">
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
