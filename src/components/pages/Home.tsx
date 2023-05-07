import React from "react";
import { PageHeader } from "../organisms/PageHeader";
import { TaskList } from "../organisms/TaskList";

export type HomeProps = {

};

export const Home: React.VFC<HomeProps> = () => {
    return (
        <div className="w-full h-full m-auto">
            <TaskList />
        </div>
       
    );
};

