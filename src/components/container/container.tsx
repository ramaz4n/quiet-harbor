import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  width?: number;
}>;

export default function Container({ children, width = 1400 }: ContainerProps) {
  return (
    <div className="w-full px-6 mx-auto" style={{ maxWidth: width }}>
      {children}
    </div>
  );
}
