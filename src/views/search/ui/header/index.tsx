import React, { FC, useMemo } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { IStackNavigation } from "../../../../navigation/IStackNavigation";
import { getStyle } from "./styles";

interface Props {
    navigation: IStackNavigation
}

export const SearchHeader: FC<Props> = ({navigation}) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput style={{ flex: 0.95, marginHorizontal: 5 }} />
                <Pressable onPress={() => console.log('onPress')}>
                    <Text style={{ color: 'black' }}>
                        Search
                    </Text>
                </Pressable>
            </View>
            <Pressable onPress={() => navigation.navigate('FavoritesScreen')}>
                <Text style={{ marginRight: 10, color: 'black' }}>
                    Favorites
                </Text>
            </Pressable>
        </View>
    )
}