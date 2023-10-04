import HomeScreen from '@/screens/Home';
import { Stack } from 'expo-router';


const Home = () => (
  <>
    <Stack.Screen
      options={{
        title: 'Recipes',
      }}
    />
    <HomeScreen/>
  </>
);

export default Home;
