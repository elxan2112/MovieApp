import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#e0dcdc',
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 25,
            borderColor: 'black',
            borderWidth: 1,
            marginHorizontal: 10,
            flex: 1
        },
    });
    return styles;
}