import { motion, useScroll } from "motion/react";

const About = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 origin-left h-1 bg-gradient-to-r from-red-500 to-pink-500"
      ></motion.div>
      <div className="p-20">
        <h1 className="text-7xl text-center font-semibold mb-10">
          Lorem ipsum dolor sit amet.
        </h1>
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            voluptates in iure eius ipsa sequi omnis sit deleniti aut dolores
            ullam, expedita impedit? Beatae, eos provident. Ipsum voluptatum
            vitae veritatis perferendis, laboriosam illum tempore aperiam cum,
            recusandae quia libero nam ipsa incidunt soluta molestiae earum
            porro quam? Expedita modi assumenda, recusandae, at quae architecto
            esse praesentium qui quaerat excepturi quia. Necessitatibus
            assumenda amet, harum dicta sit ipsum minus at animi sequi
            voluptatibus quos, nam laudantium aliquid iure recusandae mollitia
            iusto officia, facere numquam. Totam, odio, ipsum at vitae magni
            tenetur dignissimos similique sapiente corrupti optio nemo.
            Molestias, nesciunt quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
