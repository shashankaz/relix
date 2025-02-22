import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-[150px] sm:text-[200px] drop-shadow-[3px_3px_6px_gray]">
        404
      </h1>
      <h3 className="text-4xl sm:text-5xl -mt-10 sm:-mt-12">Page Not Found</h3>
      <Link to="/">
        <Button className="mt-6">Go back home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
