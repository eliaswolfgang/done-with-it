import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './components/ListItem';
import Screen from './components/Screen';

interface Message {
  id: number;
  text: string;
  description: string;
  image: any;
}

export const Messages: React.FC = () => {
  const messages: Message[] = [
    {
      id: 1,
      text: 'T1',
      description: 'D1',
      image: require('./assets/mosh.jpg'),
    },
    {
      id: 2,
      text: 'T2',
      description: 'D2',
      image: require('./assets/mosh.jpg'),
    },
  ];
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message: Message) => message.id.toString()}
        renderItem={({ item }: { item: Message }) => (
          <ListItem
            title={item.text}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default Messages;
