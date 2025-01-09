// import React from 'react';

// const Btn = () => {
//   return (
//     <div className="flex items-center justify-center pt-10">
//       <div className="w-[218px] h-[52px] items-center rounded-[62px] px-[54px] flex justify-center hover:bg-gray-200 border-[1px] bg-[#faf8f8]">
//         <h4 className="text-black text-[16px] leading-[21.6px] font-normal border-gray-600 ">View All</h4>
//       </div>
    
//     </div>
//   );
// };

// export default Btn;

import React from 'react';

const Btn = () => {
  return (
    <div className="flex items-center justify-center pt-6 sm:pt-8 md:pt-10">
      <div className="w-[180px] sm:w-[200px] md:w-[218px] h-[44px] sm:h-[48px] md:h-[52px] rounded-[62px] px-[32px] sm:px-[44px] md:px-[54px] flex items-center justify-center hover:bg-gray-200 border bg-[#faf8f8] border-gray-300">
        <h4 className="text-black text-[14px] sm:text-[15px] md:text-[16px] leading-[21px] font-normal">
          View All
        </h4>
      </div>
    </div>
  );
};

export default Btn;

