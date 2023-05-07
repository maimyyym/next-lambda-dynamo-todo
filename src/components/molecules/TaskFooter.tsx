import React from "react";
import { Button } from "../atoms/Button";

export type TaskFooterProps = {

};

export const TaskFooter: React.VFC<TaskFooterProps> = () => {
    return (
        <div className="flex justify-end">
        <Button >...View all</Button> 
        </div>
    );
};

