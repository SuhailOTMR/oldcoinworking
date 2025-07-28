import React from 'react'

const TermCondition = () => {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4" style={{paddingTop:"20vh"}}>
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-3xl w-full term-condition">
        <h1 className="text-2xl font-bold text-white mb-4">Terms and Conditions</h1>
        <div className="h-80 overflow-y-auto p-2 rounded-md">
          <p className="text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-white mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-white mb-4">
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          </p>
          <p className="text-white mb-4">
            Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <button className="px-6 py-2 text-white rounded-full submit-btn transition">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default TermCondition