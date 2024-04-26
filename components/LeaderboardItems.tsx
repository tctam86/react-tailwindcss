import { PropsWithChildren } from "react";

interface IProps {
  // Tham so cho component
  name?: string;
  rank?: number;
  chapter?: number;
  view?: number;
  imgSrc: string;
  link?: string;
  color?: "blue" | "white" | "red";
}

export const LeaderboardItems: React.FunctionComponent<
  PropsWithChildren<IProps>
> = ({ name, chapter, rank, view, imgSrc, link, children }) => {
  return (
    <div className="flex gap-2">
      <span className="p-4 text-xl font-bold">{rank}</span>
      <img src={imgSrc} className="aspect-square max-w-16 object-cover" />
      <div className="flex flex-col justify-center ">
        <p>{name}</p>
        <div className="flex justify-between gap-10">
          <span>Chapter {chapter}</span>
          <span>{view}</span>
        </div>
      </div>
    </div>
  );
};

{
  /* <Template
  imgSrc=""
  chaper={1}
  color="blue"
  subTitle="4 ngay"
  link=""
  name={"Tien"}
>
  "Hello World" */
}
// </Template>;
