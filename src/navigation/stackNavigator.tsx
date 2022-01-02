import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../views/search/ui';
import { FavoritesScreen } from '../views/favoritesScreen/ui';

const Stack = createStackNavigator();

export const StackNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName='SearchScreen'>
            <Stack.Screen name='SearchScreen' component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name='FavoritesScreen' component={FavoritesScreen} options={{ headerShown: false }} />
        </Stack.Navigator >
    );
}
