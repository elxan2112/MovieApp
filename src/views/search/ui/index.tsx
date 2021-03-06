import React, { FC, useCallback, useMemo } from "react"
import { FlatList, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { IStackNavigation } from "../../../navigation/IStackNavigation";
import { addToFavorites } from "../../../reduxToolkit/toolkitSlice";
import { PostScreen } from "../../post/ui";
import { SearchHeader } from "./header";
import { getStyle } from "./styles";

interface Props{
    navigation: IStackNavigation
}

export const SearchScreen: FC<Props> = ({navigation}) => {
    const styles = useMemo(() => getStyle(), []);
    const post = useSelector(state => state.toolkit.post)
    const dispatch = useDispatch()

    const renderItem = useCallback(
        ({ item }: { item: any }) => <PostScreen item={item} key={item.id} functionForButton={() => dispatch(addToFavorites(item))} textForButton={'add to favorites'}/>,
        []
    )

    return (
        <View style={styles.container}>
            <SearchHeader {...{navigation}} />
            <FlatList
                style={{ width: '100%' }}
                data={post}
                renderItem={renderItem}
            />
        </View>
    )
}