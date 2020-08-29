//
//  This is the Home Screen for the application
//

/* Imports
=========================================== */
import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    FlatList
} from 'react-native';

// Importing global styles
import { global } from '../styles/global';
// Importing custom components
import Header from '../components/header';
import Window from '../components/window';

/* Component Styles
=========================================== */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
});

/* Component Definition
=========================================== */
export default function Home({ navigation }) {
    // Temporary data that will be migrated to Firebase
    let attractions = [
        {
          key: 1,
          place: 'Chiang Kai-shek Memorial Hall',
          tags: 'Memorial, Building, Park',
          imguri: 'https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2017/05/21699081489_46182b8c19_b.jpg',
          description: 'The monument to former military and political leader Chiang Kai-shek is a beautiful building set in a quiet central city park. Most tourists come to see the changing of the guard which happens on the hour, from 9am to 5pm.',
          address: '21號 Zhongshan South Road, Taipei City, 100, Taiwan',
          phonono: '+886223431100',
        },
        {
          key: 2,
          place: 'Dr. Sun Yat-sen Memorial Hall',
          tags: 'Memorial, Park',
          imguri: 'https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/03/38084943994_77b65f5c64_k.jpg',
          description: 'Dr. Sun Yat-sen was the former leader of the KMT party and the first president of the Republic of China, which we also know as Taiwan. The park around the memorial hall is a nice place to relax in the afternoon while the hall itself houses some of Sun Yat-sen’s personal items.',
          address: '505號 Section 4, Ren\'ai Road, Taipei City, 110, Taiwan',
          phonono: '+886227588008',
        },
        {
          key: 3,
          place: 'Elephant Mountain',
          tags: 'Hiking Trail',
          imguri: 'https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/03/1991992-2.jpg',
          description: 'This is by far and away the best place to get a bird’s eye view of the city, and Taipei 101 in particular. It’s a short and not too taxing hike to the top, and it’s the perfect location for a few snapshots of the city skyline.',
          address: 'Alley 342, Lane 150, Section 5, Xinyi Road, Taipei City, 110, Taiwan',
          phonono: 'Wait ar...',
        },
        {
          key: 4,
          place: 'Bopiliao Old Street',
          tags: 'Museum',
          imguri: 'https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/03/3953731932_87840982f1_o.jpg',
          description: 'This historical street has been restored to its former glory and now houses a free museum. Here you can wander through the old buildings and learn about how the citizens of old Taipei lived their daily lives.',
          address: 'Lane 173, Kangding Road, Taipei City, 108, Taiwan',
          phonono: '+886223023199',
        },
        {
          key: 5,
          place: 'Grand Hotel',
          tags: 'Hotel',
          imguri: 'https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/03/1991996.jpg',
          description: 'Taiwan’s most famous hotel has been host to many foreign dignitaries and celebrities. It’s a wonderful building with a historic feel. Even tourists who are not staying at the hotel come to enjoy afternoon tea and take photos of the impressive structure.',
          address: '1號 Section 4, Zhongshan North Road, Dazhi, Taipei City, 10461, Taiwan',
          phonono: '+886228868888',
        },
        {
          key: 6,
          place: 'Martyr’s Shrine',
          tags: 'Shrine',
          imguri: 'https://img.theculturetrip.com/1024x682/smart/wp-content/uploads/2018/02/1024px-national_revolutionary_martyrs_shrine_01.jpg',
          description: 'Just short walk from the Grand Hotel is the Martyr’s Shrine. It’s a peaceful memorial to the soldiers of the KMT who died in the Chinese Civil War. You can also watch the changing of the guard here too.',
          address: '139號 Beian Road, Dazhi, Taipei City, 10491, Taiwan',
          phonono: '+886228854162',
        },
        {
          key: 7,
          place: 'Shilin Night Market',
          tags: 'Market, Bubble Tea Shop, Street Food',
          imguri: 'https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/03/1991994.jpg',
          description: 'You can’t visit Taipei without taking a trip to the night market, and Shilin is about the most famous of the lot. This huge night market has everything from local street food to cheap clothing.',
          address: '101號 Jihe Road, Taipei City, 111, Taiwan',
          phonono: '+886228815557',
        },
        {
          key: 8,
          place: 'National Palace Museum',
          tags: 'Museum',
          imguri: 'https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/03/1991982.jpg',
          description: 'Home to the world’s largest collection of Chinese Imperial artifacts, the National Palace Museum is an impressive museum with equally impressive permanent and visiting exhibitions.',
          address: '221 Section 2, Zhi Shan Road, Taipei City, 111, Taiwan',
          phonono: '+886228812021',
        },
        {
          key: 9,
          place: 'Chiang Kai-shek Shilin Residence',
          tags: 'Memorial, Building',
          imguri: 'https://img.theculturetrip.com/768x512/smart/wp-content/uploads/2018/03/1991986.jpg',
          description: 'The former president’s official residence is set within beautiful botanical gardens and is now open to the public after years of restoration work. The building is full of interesting items that once belonged to both Chiang Kai-shek and his wife, who was known as Madame Chiang.',
          address: '60號 Fulin Road, Taipei City, 111, Taiwan',
          phonono: '+886228836340',
        },
        {
          key: 10,
          place: 'Danshui Old Street',
          tags: 'Market, Street Food',
          imguri: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2018/02/tamsui__-_panoramio_36.jpg',
          description: 'A wonderful old street in the old fishing village of Danshui (which is now more of a town), Danshui Old Street checks all the boxes for quaintness, food, and souvenirs.',
          address: 'Zhongzheng Road, Danshui District, New Taipei City, Taiwan',
          phonono: 'Wait ar...',
        },
    ];
    
    const [place, setPlace] = useState(attractions);

    return (
        <View style={global.container}>
            <Header />
            <View style={styles.list}>
                <FlatList 
                    data={place}
                    renderItem={({ item }) => (
                        <Window place={item} navigation={navigation} />
                    )}
                />
            </View>
        </View>
    );
}