import { ShopsNavbar } from "../components/navbar/ShopsNavbar";

const NotFound = () => {
  return (
    <section className="custom-containerr px-2 py-12 text-left  md:text-center">
      <ShopsNavbar />
      <div className="mt-16">
        <h1 className="mb-1 text-5xl font-bold text-gray-900 text  md:text-4xl md:leading-tight md:font-extrabold">
          Coming Soon!
        </h1>
        <p className="mb-6 text-lg md:text-center font-light md:leading-normal">
          Stay tuned for more updates.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
