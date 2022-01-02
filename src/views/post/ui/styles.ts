import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#e0dcdc',
            marginHorizontal: 10,
            marginVertical: 5,
        },
    });
    return styles;
}