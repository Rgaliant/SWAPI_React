import React from "react";
import useDarkMode from "use-dark-mode";
import { Button } from "semantic-ui-react";
import Toggle from "./Toggle";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        style={{ color: "#141414", background: "#fff" }}
        onClick={darkMode.disable}
      >
        The Light Side
      </Button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <Button color="black" onClick={darkMode.enable}>
        The Dark Side
      </Button>
    </div>
  );
};

export default DarkModeToggle;
