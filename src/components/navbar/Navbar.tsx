export const Navbar = () => {
  return (
    <div className="flex flex-row sticky">
      <div className="flex flex-row px-20 py-4 justify-between w-full font-bold text-sm">
        <div className="flex flex-row">
          <h1>webbydom.works</h1>
        </div>
        <div className="flex flex-row gap-4">
          <a>projects</a>
          <a>blog</a>
          <a>contact</a>
        </div>
      </div>
    </div>
  );
};
