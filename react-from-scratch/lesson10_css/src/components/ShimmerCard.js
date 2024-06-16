const ShimmerCard = () => {
  return (
    <div class="border shadow-xl rounded p-2 m-2 w-64 h-96">
      <div class="animate-pulse space-x-2">
        <div class="bg-slate-200 h-48 "></div>
        <div class="space-y-6 justify-between mt-5">
          <div class="flex justify-between">
            <div class="h-2 w-3/4 bg-slate-200 rounded"></div>
            <div class="h-2 w-5 bg-slate-200 rounded"></div>
          </div>
          <div class="h-2 w-full bg-slate-200 rounded"></div>
          <div class="h-2 w-full bg-slate-200 rounded"></div>

          <div class="h-2 w-5 space-y-3 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
