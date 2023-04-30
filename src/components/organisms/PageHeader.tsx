import React from "react";
import { HeaderText } from "../molecules/HeaderText";
import { AddForm } from "../molecules/AddForm";

export type PageHeaderProps = {

};

export const PageHeader: React.VFC<PageHeaderProps> = () => {
    return (
        <div className="flex-row w-full h-56 p-8 pb-4 bg-lightBlue">
            <HeaderText />
            <AddForm />
        </div>
       
    );
};

