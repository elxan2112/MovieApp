import React, { FC, useCallback, useMemo } from "react"
import { FlatList, Text, View } from "react-native"
import { PostScreen } from "../../post/ui";
import { SearchHeader } from "./header";
import { getStyle } from "./styles";

export const SearchScreen: FC = () => {
    const styles = useMemo(() => getStyle(), []);
    const mockData = [
        {
            text: 'text1',
            id: 'id1'
        },
        {
            text: 'text2',
            id: 'id2'
        }
    ]

    const renderItem = useCallback(
        ({ item }: { item: any }) => <PostScreen item={item} key={item.id} />,
        []
    )

    return (
        <View style={styles.container}>
            <SearchHeader />
            <FlatList
                style={{ width: '100%',  backgroundColor: '#e0dcdc', }}
                data={mockData}
                renderItem={renderItem}
            />
        </View>
    )
}