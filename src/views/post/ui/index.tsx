import React, { FC, useMemo } from "react"
import { Image, Pressable, Text, View } from "react-native"
import { getStyle } from "./styles";

interface Props {
    item: any;
    functionForButton: () => void;
    textForButton: string;
}

export const PostScreen: FC<Props> = ({ item, functionForButton, textForButton }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <>
            <View style={styles.container}>
                {item.image && <Image style={{ height: 150 }} resizeMode='contain' source={{ uri: item.image }} />}
                <Text>
                    {item.text}
                </Text>
                <Pressable onPress={functionForButton}>
                    <Text>
                        {textForButton}
                    </Text>
                </Pressable>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'white', marginHorizontal: 10 }} />
        </>
    )
}