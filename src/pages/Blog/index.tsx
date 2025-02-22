import Card from "./_components/Card";
import { blogPosts } from "./sampleData";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20">
      <div className="text-center mb-8">
        <h6 className="text-lg font-semibold mb-2">
          Blog & <span>Inspiration</span>
        </h6>
        <h1
          className="text-4xl md:text-5xl font-semibold font-playwrite"
          style={{ lineHeight: "1.4" }}
        >
          Design Ideas & Trends
        </h1>
        <p className="md:text-lg text-muted-foreground mt-4">
          Stay updated with the latest interior design tips, trends, and
          inspiration.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            category={post.category}
            date={post.date}
            title={post.title}
            description={post.description}
            author={post.author}
            coverImg={post.coverImg}
            profileImg={post.profileImg}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
