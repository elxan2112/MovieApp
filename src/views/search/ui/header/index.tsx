import React, { FC, useMemo } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { getStyle } from "./styles";

export const SearchHeader: FC = () => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput style={{ flex: 0.95, marginHorizontal: 5 }} />
                <Pressable onPress={() =>console.log('onPress')}>
                    <Text style={{color: 'black'}}>
                        Search
                    </Text>
                </Pressable>
            </View>
            <Text style={{marginRight: 10, color: 'black'}}>
                Favorites
            </Text>
        </View>
    )
}