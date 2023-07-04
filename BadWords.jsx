import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Censurator = () => {
  const [text, setText] = useState('');
  const badWords = ['Coloque', 'Sua', 'Badwords', 'aqui', 'desta', 'Forma'];

  
  const filterBadWords = (inputText: string) => {
    let filteredText = inputText;
    badWords.forEach(badWord => {
      if (filteredText.includes(badWord)) {
        filteredText = filteredText.replace(badWord, '*'.repeat(badWord.length));
      }
    });
    return filteredText;
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Type here to translate!"
        onChangeText={newText => setText(filterBadWords(newText))}
        value={text}
      />
    </View>
  );
};

export default Censurator;
