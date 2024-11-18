import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import ThemeContext from "../Contexts/ThemeContext";
import { useContext } from "react";

export default function Content() {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;
  return (
    <div>
      <h1>This is Content</h1>
      <Counter>
        {({ count, incrementCount, hover, incrementHover }) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            hover={hover}
            incrementHover={incrementHover}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
}
