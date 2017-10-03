import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

	const { thumbnail_image, title, artist, image, url } = album;
	const { headerContentStyle, 
			imageStyle,
			imageContainerStyle,
			headerTextStyle,
			albumCoverStyle } = styles;

	return (
		<Card>
			<CardSection>
				<View style={imageContainerStyle}>
					<Image 	
						style={imageStyle} 
						source={{ uri: thumbnail_image }} />
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image 
					style={albumCoverStyle}
					source={{uri: image}}/>
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(url)}/>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'	
	},
	headerTextStyle: {
		fontSize: 18
	},
	albumCoverStyle: {
		height: 300,
		flex: 1,
		width: null
	},
	imageStyle: {
		height: 50,
		width: 50
	},
	imageContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	}
}

export default AlbumDetail;