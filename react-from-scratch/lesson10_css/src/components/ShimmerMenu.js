import ShimmerMenuCard from "./ShimmerMenuCard";

const ShimmerMenu = () => {
  return (
    <div class="border p-3 m-5 shadow-2xl">
      <div class="animate-pulse space-x-2"></div>
      <div className="flex justify-between m-2">
        <div class="h-3 w-1/4 bg-slate-200 rounded m-2"></div>
        <div class="h-3 w-8 bg-slate-200 rounded m-2"></div>
      </div>
      <div class="h-2 space-y-5 w-3/4 bg-slate-200 rounded m-2"></div>
      <div class="h-4 w-10 space-y-5 m-4 bg-slate-200 rounded"></div>
      <ShimmerMenuCard />
      <ShimmerMenuCard />
      <ShimmerMenuCard />
      <ShimmerMenuCard />
      <ShimmerMenuCard />
      <ShimmerMenuCard />
      <ShimmerMenuCard />
      <ShimmerMenuCard />
      <ShimmerMenuCard />
      <ShimmerMenuCard />
    </div>
  );
};

export default ShimmerMenu;
