import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import AutoHeightImage from 'react-native-auto-height-image';
import Downic from '../../assets/icons/download.png';

const windowWidth = Dimensions.get('window').width;
const Post = ({ title, image }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: '500', fontSize: 17, color: '#333333', marginBottom: 15 }}>{title}</Text>
      <AutoHeightImage style={{ borderRadius: 10 }} width={windowWidth - 54} source={{ uri: image }} />
      <View
        style={{ flexDirection: 'row', marginTop: 10, flexGrow: 1, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Button isActive={true} title={'Make variation'} />
        <Button title={'Like'} />
        <Button title={'Change'}>
          <Image style={{ width: 16, height: 16 }} source={Downic} />
        </Button>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginHorizontal: 12,
    borderRadius: 10,
    paddingBottom: 5,
    marginBottom: 15,
  },
  image: {
    width: windowWidth - 20,
  },
});
