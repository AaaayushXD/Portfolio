import React from 'react'

export const Footers = () => {
  return (
    <footer class="bg-white shadow dark:bg-[#171923] absolute w-full h-[80px]">
      <div class="w-full h-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between flex justify-center items-center lg:m-0">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
            Aayush Lamichhane
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
