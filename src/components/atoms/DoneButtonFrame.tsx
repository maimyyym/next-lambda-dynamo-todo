import React, {ReactNode} from "react";

export type DoneButtonFrameProps = {
  children: ReactNode;
};

export const DoneButtonFrame: React.VFC<DoneButtonFrameProps> = ({ children }) => {
    return (
      <button className="flex items-center justify-center w-6 h-6 bg-transparent border-2 rounded-full border-purple">{children}</button>
       
    );
};

export default DoneButtonFrame;

