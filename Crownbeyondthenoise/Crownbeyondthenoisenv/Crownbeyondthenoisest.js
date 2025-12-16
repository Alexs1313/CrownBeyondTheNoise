import { createStackNavigator } from '@react-navigation/stack';
import Crownbeyondthenoisetb from './Crownbeyondthenoisetb';
import Crownbeyondthenoiseonb from '../Crownbeyondthenoisescrn/Crownbeyondthenoiseonb';
import Crownbeyondthenoisetmrsess from '../Crownbeyondthenoisescrn/Crownbeyondthenoisetmrsess';
import Crownbeyondthenoiseld from '../Crownbeyondthenoisecmpnt/Crownbeyondthenoiseld';

const Stack = createStackNavigator();

const Crownbeyondthenoisest = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Crownbeyondthenoiseld"
        component={Crownbeyondthenoiseld}
      />
      <Stack.Screen
        name="Crownbeyondthenoiseonb"
        component={Crownbeyondthenoiseonb}
      />
      <Stack.Screen
        name="Crownbeyondthenoisetb"
        component={Crownbeyondthenoisetb}
      />
      <Stack.Screen
        name="Crownbeyondthenoisetmrsess"
        component={Crownbeyondthenoisetmrsess}
      />
    </Stack.Navigator>
  );
};

export default Crownbeyondthenoisest;
