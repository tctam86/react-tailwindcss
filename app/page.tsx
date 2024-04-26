import { LeaderboardItems } from "@/components/LeaderboardItems";
import { VlogBox } from "@/components/VlogBox";
import Image from "next/image";

function Button(props: { children?: React.ReactNode; className?: string }) {
  return (
    <button
      className={
        "bg-none text-xl hover:underline underline-offset-8 transition-all hover:font-bold" +
        props.className
      }
    >
      {props.children}
    </button>
  );
}

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-row">
      <div className="w-1/4 h-full bg-gray-100 flex flex-col overflow-auto items-center">
        <img src="/Group_7.png" className="w-64 rounded-full h-64 m-12" />

        <h1 className="text-black text-3xl font-bold pb-5">Tran Cong Tam</h1>
        <h2 className="pb-5 text-xl">
          <span className="font-bold">UX</span>/
          <span className="font-bold">UI</span>/Web Application Developer
        </h2>
        <div className="flex flex-col items-center gap-2">
          <Button className="">HOME</Button> <br></br>
          <Button className="">ABOUT</Button> <br></br>
          <Button className="">CONTACT</Button> <br></br>
          <Button className="">SERVICE</Button> <br></br>
          <Button className="">EDUCATION</Button> <br></br>
          <Button className="">SKILL</Button> <br></br>
          <Button className="">EXPERIENCE</Button> <br></br>
          <Button className="">PORTFOLIO</Button> <br></br>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-10">
        <LeaderboardItems
          rank={1}
          name="LozzThinh"
          chapter={-2}
          imgSrc="https://st.nettruyentt.com/data/comics/32/vo-luyen-dinh-phong-9068.jpg"
          link="#"
          view={1000}
        />
        <LeaderboardItems
          rank={1}
          name="LozzThinh"
          chapter={-2}
          imgSrc="https://st.nettruyentt.com/data/comics/32/vo-luyen-dinh-phong-9068.jpg"
          link="#"
          view={1000}
        />
        <LeaderboardItems
          rank={1}
          name="LozzThinh"
          chapter={-2}
          imgSrc="https://st.nettruyentt.com/data/comics/32/vo-luyen-dinh-phong-9068.jpg"
          link="#"
          view={1000}
        />
      </div>
      <div>
        <VlogBox title=" LozzThinh" description="thinh la mot thang lon" view={1000} link="#" />
      </div>
    </main>
  );
}
