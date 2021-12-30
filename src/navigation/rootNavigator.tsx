import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { StackNavigator } from "./stackNavigator";

export const RootNavigation: FC = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}