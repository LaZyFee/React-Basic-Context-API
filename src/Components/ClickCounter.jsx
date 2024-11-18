/*eslint-disable*/
const ClickCounter = ({
  count,
  incrementCount,
  hover,
  incrementHover,
  theme,
}) => {
  const buttonClass = theme === "light" ? "btn-light" : "btn-dark";
  return (
    <>
      <button
        type="button"
        className={buttonClass}
        onClick={incrementCount}
        onMouseOver={incrementHover}
      >
        Clicked {count} times Hovered {hover} times
      </button>
    </>
  );
};

export default ClickCounter;
