const ShimmerMenuCard = () => {
  return (
    <div className="animate-pulse space-x-2">
      <div className="p-2 m-2 flex flex-wrap">
        <div className="border p-2 m-2 shadow-xl flex w-full justify-between">
          <div className="h-4 w-20 bg-slate-200 rounded m-2"></div>
          <div className="h-10 w-3/4 bg-slate-200 rounded m-2"></div>
          <div className="flex justify-between">
            <div className="h-3 w-10 bg-slate-200 rounded m-2"></div>
            <div className="bg-slate-200 w-24 h-24 m-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerMenuCard;
