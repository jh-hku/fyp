import { Button } from '@rneui/base'
import { Container, Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';


export default function HealthDetails({ navigation: { goBack } }) {
    return (
        <ScreenContainer
            style={styles.screenContainer}
            scrollable={true}
            hasSafeArea={false}
        >
          <Text>Health Details</Text>
        </ScreenContainer>
    
      );
}