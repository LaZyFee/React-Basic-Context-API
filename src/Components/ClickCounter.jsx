/*eslint-disable*/
const ClickCounter = ({
  count,
  incrementCount,
  hover,
  incrementHover,
  theme,
  switchTheme,
}) => {
  const buttonClass = theme === "light" ? "btn-light" : "btn-dark";

  // Combined handler for the onClick event
  const handleClick = () => {
    incrementCount();
    switchTheme();
  };

  return (
    <>
      <button
        type="button"
        className={buttonClass}
        onClick={handleClick}
        onMouseOver={incrementHover}
      >
        Clicked {count} times Hovered {hover} times
      </button>
    </>
  );
};

export default ClickCounter;
