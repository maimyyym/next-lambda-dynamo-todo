import React from "react";
import { Title } from "../atoms/Title";
import { Text } from "../atoms/Text";

export type PageTitleProps = {

};

export const PageTitle: React.VFC<PageTitleProps> = () => {
    return (
      <div>
        <Title>My Next Task</Title>
        <Text>Let's do it!!</Text>
      </div> 
    );
};

