import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "./_components/ProductCard";

const Catalogue = () => {
  const [images, setImages] = useState([
    {
      id: "",
      urls: {
        regular: "",
      },
      alt_description: "",
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: {
              query: "interior design",
              count: 50,
              client_id: "eK8QNmGK4t7NJI_Evp5YZDpw89L52c_YVZNr5B4cjqY",
            },
          }
        );

        setImages(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20">
      <div className="text-center mb-8">
        <h6 className="text-lg font-semibold mb-2">
          Our <span>Catalogue</span>
        </h6>
        <h1
          className="text-4xl md:text-5xl font-semibold font-playwrite"
          style={{ lineHeight: "1.4" }}
        >
          Explore Our Curated Collections
        </h1>
        <p className="md:text-lg text-muted-foreground mt-4">
          Discover a wide range of designs, furniture, and decor to elevate your
          space.
        </p>
      </div>
      <div>
        {loading ? (
          <p className="text-center text-2xl font-medium mt-10">Loading...</p>
        ) : (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-5 w-full space-y-5">
            {images.map((image) => (
              <ProductCard
                key={image.id}
                src={image.urls.regular}
                alt={image.alt_description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogue;
