import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Layout from "../layouts/Layout";
import Card from "../components/Card";
import Contact from "../components/Contact";

const Carta = ({comidas}) => {
  useDocumentTitle("Carta - ChickenBai");

  const animation1 = useAnimation();
  const [section1, inView1] = useInView({
    triggerOnce: true,
  });

  const animation2 = useAnimation();
  const [section2, inView2] = useInView({
    triggerOnce: true,
  });

  const animation3 = useAnimation();
  const [section3, inView3] = useInView({
    triggerOnce: true,
  });

  const animation4 = useAnimation();
  const [section4, inView4] = useInView({
    triggerOnce: true,
  });

  const animation5 = useAnimation();
  const [section5, inView5] = useInView({
    triggerOnce: true,
  });

  const animation6 = useAnimation();
  const [section6, inView6] = useInView({
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

  useEffect(() => {
    if (inView3) {
      animation3.start({
        opacity: 1,
        transition: { duration: 1.2 },
      });
    }
    if (!inView3) {
      animation3.start({ opacity: 0 });
    }
  }, [animation3, inView3]);

  useEffect(() => {
    if (inView4) {
      animation4.start({
        opacity: 1,
        transition: { duration: 1.2 },
      });
    }
    if (!inView4) {
      animation4.start({ opacity: 0 });
    }
  }, [animation4, inView4]);

  useEffect(() => {
    if (inView5) {
      animation5.start({
        opacity: 1,
        transition: { duration: 1.2 },
      });
    }
    if (!inView5) {
      animation5.start({ opacity: 0 });
    }
  }, [animation5, inView5]);

  useEffect(() => {
    if (inView6) {
      animation6.start({
        opacity: 1,
        transition: { duration: 1.2 },
      });
    }
    if (!inView6) {
      animation6.start({ opacity: 0 });
    }
  }, [animation6, inView6]);

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").slice(1); // Obtiene el id de la sección desde el href del enlace
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <section className="w-[90%] mx-auto flex gap-6 overflow-auto p-4 border-2 mt-4 rounded-lg">
        <a
          href="#personales"
          className="w-full flex justify-center items-center rounded-md bg-yellow-300 px-4 py-2 font-serif"
          onClick={handleClick}
        >
          Personales
        </a>
        <a
          href="#duplas"
          className="w-full flex justify-center items-center rounded-md bg-yellow-300 px-4 py-2 font-serif"
          onClick={handleClick}
        >
          Duplas
        </a>
        <a
          href="#familiares"
          className="w-full flex justify-center items-center rounded-md bg-yellow-300 px-4 py-2 font-serif"
          onClick={handleClick}
        >
          Familiares
        </a>
        <a
          href="#broaster"
          className="w-full flex justify-center items-center rounded-md bg-yellow-300 px-4 py-2 font-serif"
          onClick={handleClick}
        >
          Broaster
        </a>
        <a
          href="#mostritos"
          className="w-full flex justify-center items-center rounded-md bg-yellow-300 px-4 py-2 font-serif"
          onClick={handleClick}
        >
          Mostritos
        </a>
        <a
          href="#bebidas"
          className="w-full flex justify-center items-center rounded-md bg-yellow-300 px-4 py-2 font-serif"
          onClick={handleClick}
        >
          Bebidas
        </a>
      </section>
      <section
        id="personales"
        data-aos="fade-up"
        className="aos animate__animated"
      >
        <article className="w-[90%] mx-auto p-4">
          <h1 className="font-serif text-2xl font-bold text-green-700 my-4 text-center md:text-3xl md:text-left md:my-12">
            PERSONALES
          </h1>
          <motion.div
            ref={section1}
            animate={animation1}
            className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2"
          >
            {comidas.map((item) =>
              item.category == "personales" ? (
                <Card
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  isDiscount={item.isDiscount}
                  images={`images/${item.images}`}
                />
              ) : (
                ""
              )
            )}
          </motion.div>
        </article>
      </section>
      <section id="duplas">
        <article className="w-[90%] mx-auto p-4">
          <h1 className="font-serif text-2xl font-bold text-green-700 my-4 text-center md:text-3xl md:text-left md:my-12">
            DUPLAS
          </h1>
          <motion.div
            ref={section2}
            animate={animation2}
            className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2"
          >
            {comidas.map((item) =>
              item.category == "duplas" ? (
                <Card
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  isDiscount={item.isDiscount}
                  images={`images/${item.images}`}
                />
              ) : (
                ""
              )
            )}
          </motion.div>
        </article>
      </section>
      <section id="familiares">
        <article className="w-[90%] mx-auto p-4">
          <h1 className="font-serif text-2xl font-bold text-green-700 my-4 text-center md:text-3xl md:text-left md:my-12">
            FAMILIARES
          </h1>
          <motion.div
            ref={section3}
            animate={animation3}
            className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2"
          >
            {comidas.map((item) =>
              item.category == "familiares" ? (
                <Card
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  isDiscount={item.isDiscount}
                  images={`images/${item.images}`}
                />
              ) : (
                ""
              )
            )}
          </motion.div>
        </article>
      </section>
      <section id="broaster">
        <article className="w-[90%] mx-auto p-4">
          <h1 className="font-serif text-2xl font-bold text-green-700 my-4 text-center md:text-3xl md:text-left md:my-12">
            BROASTER
          </h1>
          <motion.div
            ref={section4}
            animate={animation4}
            className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2"
          >
            {comidas.map((item) =>
              item.category == "broaster" ? (
                <Card
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  isDiscount={item.isDiscount}
                  images={`images/${item.images}`}
                />
              ) : (
                ""
              )
            )}
          </motion.div>
        </article>
      </section>
      <section id="mostritos">
        <article className="w-[90%] mx-auto p-4">
          <h1 className="font-serif text-2xl font-bold text-green-700 my-4 text-center md:text-3xl md:text-left md:my-12">
            MOSTRITOS
          </h1>
          <motion.div
            ref={section5}
            animate={animation5}
            className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2"
          >
            {comidas.map((item) =>
              item.category == "mostritos" ? (
                <Card
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  isDiscount={item.isDiscount}
                  images={`images/${item.images}`}
                />
              ) : (
                ""
              )
            )}
          </motion.div>
        </article>
      </section>
      <section id="bebidas">
        <article className="w-[90%] mx-auto p-4">
          <h1 className="font-serif text-2xl font-bold text-green-700 my-4 text-center md:text-3xl md:text-left md:my-12">
            BEBIDAS
          </h1>
          <motion.div
            ref={section6}
            animate={animation6}
            className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2"
          >
            {comidas.map((item) =>
              item.category == "bebidas" ? (
                <Card
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  isDiscount={item.isDiscount}
                  images={`images/${item.images}`}
                />
              ) : (
                ""
              )
            )}
          </motion.div>
        </article>
      </section>
      <Contact />
    </Layout>
  );
};

export default Carta;
