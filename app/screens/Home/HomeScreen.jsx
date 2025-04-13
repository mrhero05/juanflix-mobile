import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import MainBanner from '@components/Banner/MainBanner';
import FilmRow from '@components/Films/FilmRow';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '@/src/styles/global.style';
import FilmService from '@services/FilmService';

const HomeScreen = () => {
	const [filmRegionData, setFilmRegionData] = useState([]);
	useEffect(() => {
		const getFilmRegionData = async () => {
			try {
				const response = await FilmService.getFilmRegionData();
				if (response) {
					setFilmRegionData(response.record);
				}
				console.log(filmRegionData, "%o test response");
			} catch (error) {
				setError('Something went wrong!');
			}
		};
		getFilmRegionData();
	}, []);

	return (
		<SafeAreaView style={globalStyles.container}>
			<FlatList
				data={filmRegionData}
				keyExtractor={(item, index) => `${item.category}-${index}`}
				renderItem={({ item }) => (
					<FilmRow title={item.category} films={item.films} />
				)}
				ListHeaderComponent={() => (
					<View style={{ paddingVertical: 16 }}>
						<MainBanner />
					</View>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;
