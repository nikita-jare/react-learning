const ShimmerCard = () => {
  return (
    <div className="border shadow-xl rounded p-2 m-2 w-64 h-96">
      <div className="animate-pulse space-x-2">
        <div className="bg-slate-200 h-48 "></div>
        <div className="space-y-6 justify-between mt-5">
          <div className="flex justify-between">
            <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
            <div className="h-2 w-5 bg-slate-200 rounded"></div>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded"></div>
          <div className="h-2 w-full bg-slate-200 rounded"></div>

          <div className="h-2 w-5 space-y-3 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
