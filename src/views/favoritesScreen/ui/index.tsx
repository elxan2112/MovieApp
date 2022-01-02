import React, { FC, useCallback, useMemo } from "react"
import { FlatList, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { IStackNavigation } from "../../../navigation/IStackNavigation";
import { increment } from "../../../reduxToolkit/toolkitSlice";
import { PostScreen } from "../../post/ui";
import { SearchHeader } from "./header";
import { getStyle } from "./styles";

interface Props{
    navigation: IStackNavigation
}

export const FavoritesScreen: FC<Props> = ({navigation}) => {
    const styles = useMemo(() => getStyle(), []);
    const favoritePosts = useSelector(state => state.toolkit.favoritePosts)
    const dispatch = useDispatch()
    const renderItem = useCallback(
        ({ item }: { item: any }) => <PostScreen item={item} key={item.id} functionForButton={() => dispatch(increment(item))} textForButton={'delete from favorites'}/>,
        []
    )

    return (
        <View style={styles.container}>
            <SearchHeader {...{navigation}} />
            <FlatList
                style={{ width: '100%' }}
                data={favoritePosts}
                renderItem={renderItem}
            />
        </View>
    )
}