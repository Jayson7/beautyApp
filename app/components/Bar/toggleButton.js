import * as React from "react";
import { ToggleButton } from "react-native-paper";

const ToggleButtonMenu = () => {
  const [status, setStatus] = React.useState("checked");

  const menuTogger = (value) => {
    setStatus(status === "checked" ? "unchecked" : "checked");
  };

  return (
    <ToggleButton
      icon="menu"
      value="menu"
      status={status}
      size={35}
      style={{ backgroundColor: "#" }}
      onPress={menuTogger}
    />
  );
};

export default ToggleButtonMenu;
