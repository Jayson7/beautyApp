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
      style={{ backgroundColor: "transparent" }}
      onPress={menuTogger}
    />
  );
};

export default ToggleButtonMenu;
