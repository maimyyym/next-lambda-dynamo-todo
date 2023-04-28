import React from "react";
import { PageTitle } from "../molecules/PageTitle";
import { AddForm } from "../molecules/AddForm";

export type PageHeaderProps = {

};

export const PageHeader: React.VFC<PageHeaderProps> = () => {
    return (
        <div className="flex-row w-full h-full p-8 pb-4 bg-lightBlue">
            <PageTitle />
            <AddForm />
        </div>
       
    );
};

