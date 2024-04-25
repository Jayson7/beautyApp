import * as React from "react";
import { ToggleButton } from "react-native-paper";

const ToggleButtonMenu = () => {
  return (
    <ToggleButton
      icon="menu"
      value="menu"
      style={{ backgroundColor: "transparent" }}
      onPress={menuTogger}
    />
  );
};

export default ToggleButtonMenu;
