import { PropsWithChildren } from "react";

interface IProps {
  // Tham so cho component
  title?: string;
  description?: string;
  view?: number;
  link?: string;
  color?: "blue" | "white" | "red";
}

export const VlogBox: React.FunctionComponent<PropsWithChildren<IProps>> = ({
  title,
  description,
  view,
  link,
  children,
}) => {
  return (
    <div className="flex gap-2 flex-col ">
      <div className="font-bold text-2xl">{title}</div>
      <div className="flex justify-between gap-20">
        <span>{description}</span>
        <span>{view}</span>
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
