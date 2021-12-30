import React, { FC, useMemo } from "react"
import { Text, View } from "react-native"
import { getStyle } from "./styles";

interface Props {
    item: any
}

export const PostScreen: FC<Props> = ({ item }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <>
        <View style={styles.container}>
            <Text>
                {item.text}
            </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black', marginHorizontal: 10}}/>
        </>
    )
}