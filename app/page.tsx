import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col">
      <div className="flex  justify-end w-screen bg-white px-5 mt-2">
        <button className="px-2">Gmail</button>
        <button className="px-2">Images</button>
        <svg
          className="px-2 py-2 relative w-12"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        <button className="px-4 bg-blue-500 rounded-lg text-white py-2 font-normal hover:bg-blue-600 transition-all active:scale-95">
          Sign in
        </button>
      </div>
      <div className="flex-auto flex justify-center items-center flex-col mb-12">
        {/* Phai quang trong div lon moi day duoc  */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/325px-Google_2015_logo.svg.png"
          className="relative w-96 justify-center items-center"
        />
        <div className="border-solid border border-black/40 rounded-full py-2 mt-7 flex gap-2 px-3 w-full max-w-2xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 opacity-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          {/* Search bar */}
          <input type="text" className="!border-none !outline-none flex-auto" />
        </div>
        <div className="flex justify-center items-center gap-6 mt-7">
          <button className="px-4 bg-neutral-200 rounded-sm  py-2 font-normal hover:bg-neutral-300 transition-all active:scale-95">
            Google Search
          </button>
          <button className="px-6 bg-neutral-200 rounded-sm  py-2 font-normal hover:bg-neutral-300 transition-all active:scale-95">
            I'm Feel Lucky
          </button>
        </div>
      </div>
    </main>
  );
}
