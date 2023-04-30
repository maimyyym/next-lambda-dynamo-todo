import React from "react";

export type DoneButtonProps = {
    onClick: ()=> void;
};

export const DoneButton: React.VFC<DoneButtonProps> = ({ onClick }) => {
    return (
        <button className="w-3 h-3 rounded-full bg-darkGray" onClick={onClick} />
    );
};

export default DoneButton;
