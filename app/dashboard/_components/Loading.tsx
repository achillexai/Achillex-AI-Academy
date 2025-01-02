import React from "react";

export default function DashboardLoading() {
  return (
    <div className="fixed inset-0 bg-slate-100 flex items-center justify-center z-50">
      <div className="text-center">
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        <p className="mt-4 text-blue-600 font-semibold text-xl">
          Loading Dashboard...
        </p>
      </div>
    </div>
  );
}
