import { Navbar } from "../components/navbar/Navbar";

export const NotFound = () => {
  return (
    <>
      <div className="h-[90vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <img className="w-1/2" src="/not-found.png" />
      </div>
      <Navbar />
    </>
  );
};
