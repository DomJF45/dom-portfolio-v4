export const Screen = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <div className="relative h-screen w-screen">
        <img
          src="/donut-irid.png"
          className="w-[100px] absolute top-20 right 0"
        />
        <img src="/cyl.png" className="w-[100px] absolute bottom-0 left-20" />
      </div>
    </div>
  );
};
