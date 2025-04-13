import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const FilmRow = ({ title, films }) => {
    return (
        <View className="p-5" style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={films}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View className="p-0" style={styles.filmItem}>
                        <Image className="w-full h-full rounded"
                            resizeMode="cover" source={{ uri: item.image }}></Image>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginBottom: 20 },
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    filmItem: {
        width: 120,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
});

export default FilmRow;
