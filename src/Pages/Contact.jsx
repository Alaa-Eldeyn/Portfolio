import { social } from "../data";
import Title from "../Component/Title";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  const welcomeTitle = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="container">
      <Title title="Contact" />
      <div className="row justify-content-center d-flex gap-4 row-gap-0">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{ x: "-100vw" }}
          className="col col-lg-4 my-3 rounded contact-cont p-4 flex-grow-1"
        >
          <div className="contact-info">
            <div className="contact-name">
              <div className="sm-title">
                <h3>Email</h3>
              </div>
              <p>
                <a href="mailto:alaa.eldeyn@gmail.com">alaa.eldeyn@gmail.com</a>
              </p>
              <p>
                <a href="mailto:support@domain.com">support@domain.com</a>
              </p>
            </div>
            <div className="contact-name">
              <div className="sm-title mt-4">
                <h3>Phone</h3>
              </div>
              <p>
                <Link to={"https://wa.me/+201010385495"}>
                  +20 0101 038 5495
                </Link>
                <br />
                <Link to={"https://wa.me/+201111453263"}>
                  +20 0111 145 3263
                </Link>
              </p>
            </div>
            <div className="d-flex gap-3 mt-3">
              {social.map((item, index) => {
                return (
                  <motion.span
                    key={item.id}
                    variants={welcomeTitle}
                    initial={"hidden"}
                    animate={"visible"}
                    transition={{ delay:  index * 0.03 }}
                    exit={{ x: -100, opacity: 0 }}
                  >
                    <Link
                      to={item.link}
                      className="fs-2 p-2 rounded contact-icon"
                    >
                      {item.icon}
                    </Link>
                  </motion.span>
                );
              })}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x:"100vw" }}
          className="col-lg-7 my-3 rounded contact-cont p-4 flex-grow-1"
        >
          <div className="contact-form">
            <div className="sm-title">
              <h3>Get In Touch</h3>
            </div>
            <form id="contact-form" method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="Name"
                      id="name"
                      placeholder="Name *"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="Email"
                      id="email"
                      placeholder="Email *"
                      className="form-control"
                      type="email"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      name="Subject"
                      id="subject"
                      placeholder="Subject *"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your message *"
                      rows="3"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="send">
                    <button className="btn " type="button" value="Send">
                      <span>Contact Us</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
