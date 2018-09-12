// @flow
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Theme, withTheme } from 'react-native-zero-theme';
import showcaseTheme from './showcaseTheme';

const ThemedView = withTheme()(View);
const ThemedText = withTheme({ className: ['style', 'text'] })(Text);
const ThemedScrollView = withTheme({
  className: ['style'],
  contentContainerClassName: ['contentContainerStyle'],
})(ScrollView);

const BasicShowcase = () => (
  <Theme.Provider value={showcaseTheme}>
    <ThemedScrollView className="flex" contentContainerClassName="flex flex-grow">
      <ThemedView className="center flex p-24">
        <ThemedText>
          My font size is 14 and color is #333
        </ThemedText>
        <ThemedText className="text--error">
          There is danger ahead! I look just like text above, but my text is red
        </ThemedText>
        <ThemedText className="p-24 text--center text--bold">
          Well that is all good for you, but I am in the center of attention!
        </ThemedText>
      </ThemedView>
    </ThemedScrollView>
  </Theme.Provider>
);

export default BasicShowcase;
