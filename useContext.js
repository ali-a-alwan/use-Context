import React, { createContext, useContext, useState } from "react";
import { View, Text, Button } from "react-native";

const MyContext = createContext();

const MyComponent1 = () => {
  const { count } = useContext(MyContext);

  return <Text>Count: {count}</Text>;
};

const MyComponent2 = () => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      <MyComponent1 />
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </MyContext.Provider>
  );
};

export default MyComponent2;