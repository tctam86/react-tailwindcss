import { PropsWithChildren } from "react";

interface IProps {
  // Tham so cho component
  name?: string;
  chaper?: number;
  subTitle?: string;
  imgSrc: string;
  link?: string;
  color?: "blue" | "white" | "red";
}

export const Template: React.FunctionComponent<PropsWithChildren<IProps>> = ({
  name,
  chaper,
  subTitle,
  children,
}) => {
  return <div>{name}</div>;
};

{/* <Template
  imgSrc=""
  chaper={1}
  color="blue"
  subTitle="4 ngay"
  link=""
  name={"Tien"}
>
  "Hello World" */}
// </Template>;
