import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { blogPosts } from "../Blog/sampleData";

const BlogPage = () => {
  const pathname = useParams();

  const [blogData, setBlogData] = useState({
    category: "",
    date: "",
    title: "",
    description: "",
    coverImg: "",
  });

  useEffect(() => {
    const fetchData = () => {
      blogPosts
        .filter((post) => post.slug === pathname.slug)
        .map((post) => {
          setBlogData(post);
        });
    };

    fetchData();
  }, [pathname.slug]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20">
      <div className="mb-8 max-w-2xl mx-auto">
        <h6 className="mb-3 text-center font-light text-sm">
          <span className="px-3 py-1 bg-black text-white rounded-full mr-2">
            {blogData?.category}
          </span>{" "}
          {blogData?.date}
        </h6>
        <h1
          className="text-4xl md:text-5xl font-semibold font-playwrite text-center capitalize"
          style={{ lineHeight: "1.4" }}
        >
          {blogData?.title}
        </h1>
        <p className="md:text-lg text-center text-muted-foreground mt-4">
          {blogData?.description}
        </p>
        <div className="mt-10 aspect-video">
          <img
            src={blogData.coverImg}
            alt={blogData.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-10 space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            nesciunt optio molestias quasi. Nisi labore sint quia dolores,
            beatae magnam soluta modi deserunt nobis perferendis illum minima
            quibusdam suscipit blanditiis exercitationem tempora aliquid ea
            commodi vel iure! Repellendus, quae? Accusamus ipsam iure, libero
            ratione natus culpa eligendi minus delectus rem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            nesciunt optio molestias quasi. Nisi labore sint quia dolores,
            beatae magnam soluta modi deserunt nobis perferendis illum minima
            quibusdam suscipit blanditiis exercitationem tempora aliquid ea
            commodi vel iure! Repellendus, quae? Accusamus ipsam iure, libero
            ratione natus culpa eligendi minus delectus rem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            nesciunt optio molestias quasi. Nisi labore sint quia dolores,
            beatae magnam soluta modi deserunt nobis perferendis illum minima
            quibusdam suscipit blanditiis exercitationem tempora aliquid ea
            commodi vel iure! Repellendus, quae? Accusamus ipsam iure, libero
            ratione natus culpa eligendi minus delectus rem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            nesciunt optio molestias quasi. Nisi labore sint quia dolores,
            beatae magnam soluta modi deserunt nobis perferendis illum minima
            quibusdam suscipit blanditiis exercitationem tempora aliquid ea
            commodi vel iure! Repellendus, quae? Accusamus ipsam iure, libero
            ratione natus culpa eligendi minus delectus rem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            nesciunt optio molestias quasi. Nisi labore sint quia dolores,
            beatae magnam soluta modi deserunt nobis perferendis illum minima
            quibusdam suscipit blanditiis exercitationem tempora aliquid ea
            commodi vel iure! Repellendus, quae? Accusamus ipsam iure, libero
            ratione natus culpa eligendi minus delectus rem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
