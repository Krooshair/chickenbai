import Layout from "../layouts/Layout";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const Contacto = () => {

  useDocumentTitle("Contacto - ChickenBai");

  const animation1 = useAnimation();
  const [section1, inView1] = useInView({
    triggerOnce: true,
  });

  const animation2 = useAnimation();
  const [section2, inView2] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView1) {
      animation1.start({
        opacity: 1,
        transition: { duration: 1.2 },
      });
    }
    if (!inView1) {
      animation1.start({ opacity: 0 });
    }
  }, [animation1, inView1]);

  useEffect(() => {
    if (inView2) {
      animation2.start({
        opacity: 1,
        transition: { duration: 1.2 },
      });
    }
    if (!inView2) {
      animation2.start({ opacity: 0 });
    }
  }, [animation2, inView2]);

  return (
    <Layout>
      <motion.div
        ref={section1}
        animate={animation1}
        className="w-[90%] mx-auto flex flex-col gap-4 my-6 h-[65vh] justify-center items-center md:flex-row"
      >
        <img
          src="images/contactenos.webp"
          alt="Contactenos"
          className="hidden w-1/2 max-w-lg md:block"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-serif text-2xl font-bold text-green-700 text-center md:text-3xl">
            No dejes pasar tu antojo
          </h1>
          <p className="text-center text-black/50">LLama | Escribenos</p>
          <a
            href="https://wa.link/tuvh6h"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[90%] max-w-xl flex justify-center items-center gap-10 text-3xl bg-[#33bc46] text-white py-2 rounded-lg font-bold"
          >
            <IoLogoWhatsapp />
            985 148 351
          </a>
        </div>
      </motion.div>
      <motion.div
        ref={section2}
        animate={animation2}
        className="w-[90%] mx-auto flex flex-col gap-2 my-6"
      >
        <h1 className="font-serif text-2xl font-bold text-green-700 text-center md:text-3xl md:text-left">
          Encuentranos en
        </h1>
        <p className="text-black/50">Guayabos 107, El Agustino 15007</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d975.5156706490446!2d-76.9934289!3d-12.0392057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c787746b850f%3A0x83417cdb5d6ecae!2sPolleria%20Oskar&#39;s!5e0!3m2!1ses!2spe!4v1700872535223!5m2!1ses!2spe"
          className="border-0 w-full h-96"
          loading="lazy"
        ></iframe>
      </motion.div>
    </Layout>
  );
};

export default Contacto;
