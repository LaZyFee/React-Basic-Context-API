import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import ThemeContext from "../Contexts/ThemeContext";

export default function Content() {
  return (
    <div>
      <h1>This is Content</h1>
      <Counter>
        {({ count, incrementCount, hover, incrementHover }) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              <ClickCounter
                count={count}
                incrementCount={incrementCount}
                hover={hover}
                incrementHover={incrementHover}
                theme={theme}
              />
            )}
          </ThemeContext.Consumer>
        )}
      </Counter>
    </div>
  );
}
