import { Redirect, Stack } from "expo-router";

const Home = () => (
  <>
    <Stack.Screen/>
      <Redirect href={"(drawer)/home"} />
  </>
);

export default Home;
