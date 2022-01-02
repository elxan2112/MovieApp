import React, { FC, useMemo } from "react"
import { Pressable, Text,  View } from "react-native"
import { IStackNavigation } from "../../../../navigation/IStackNavigation";
import { getStyle } from "./styles";

interface Props {
    navigation: IStackNavigation
}

export const SearchHeader: FC<Props> = ({navigation}) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('SearchScreen')}>
                <Text style={{ marginRight: 10, color: 'black' }}>
                    GoBack
                </Text>
            </Pressable>
        </View>
    )
}