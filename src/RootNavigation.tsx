import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobListScreen from './screens/JobListScreen';
import JobDescriptionScreen from './screens/JobDescriptionScreen';
import { RootStackParamList } from './types';
import JobDescriptionHeader from './components/JobDescriptionHeader';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC<{}> = () => {
  return  (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="JobList" component={JobListScreen} />
        <Stack.Screen
          name="JobDescription"
          component={JobDescriptionScreen}
          options={({ route }) => ({
              title: route.params.job.employer_name,
              headerTitle: () => <JobDescriptionHeader job={route.params.job} />,
              headerTitleStyle: { flex: 1, textAlign: 'center', 
              borderWidth: 1,
              borderColor: 'blue'
       },
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;