import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../views/search/ui';

const Stack = createStackNavigator();

export const StackNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SearchScreen' component={SearchScreen} options={{ headerShown: false }} />
        </Stack.Navigator >
    );
}
