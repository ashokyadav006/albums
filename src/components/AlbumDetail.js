import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {

	const { thumbnail_image, title, artist } = album;
	const { headerContentStyle, imageStyle } = styles;

	return (
		<Card>
			<CardSection>
				<View>
					<Image 	
						style={imageStyle} 
						source={{ uri: thumbnail_image }} />
				</View>
				<View style={headerContentStyle}>
					<Text>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'	
	},
	imageStyle: {
		height: 50,
		width: 50
	}
}

export default AlbumDetail;