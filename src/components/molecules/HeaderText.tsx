import React from "react";
import { HomeTitle } from "../atoms/HomeTitle";
import { Text } from "../atoms/Text";

export type HeaderTextProps = {

};

export const HeaderText: React.VFC<HeaderTextProps> = () => {
    return (
      <div>
        <HomeTitle>My Next Task</HomeTitle>
        <Text>Let's do it!!</Text>
      </div> 
    );
};

