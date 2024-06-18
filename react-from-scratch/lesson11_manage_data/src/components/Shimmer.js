import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div>
      <div className="animate-pulse">
        <div className="flex justify-center">
          <div className="border bg-slate-200 shadow-xl h-10 w-3/4 p-2 rounded ml-5 my-5"></div>
          <div className="border bg-slate-200 shadow-xl h-10 w-20 p-2 rounded mx-2 my-5"></div>
          <div className="border bg-slate-200 shadow-l h-10 w-28 p-2 rounded mx-2 my-5"></div>
        </div>
        <div className="flex flex-wrap justify-center">
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
