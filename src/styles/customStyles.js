// import { theme } from "../assets/themes/theme.jsx";
export const customStyles = {
  option: (provided) => {
    return {
      ...provided,
      background: "transparent",
      outline: "none",
      color: "#FBFBFB",
      fontSize: "20px",
      fontWeight: "500",
      backgroundColor: "transparent",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#5cd3a8",
        fontWeight: "500",
      },
      textAlign: "left",
    };
  },
  control: (styles) => ({
    ...styles,
    border: "1px solid rgba(255, 255, 255, 0.4)",
    borderRadius: 8,
    background: "#cca9f1",
    height: "50px",
    width: "240px",
    cursor: "pointer",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return {
      ...provided,
      opacity,
      transition,
      right: 5,
      color: "#FBFBFB",
      fontSize: "20px",
      fontWeight: "600",
      padding: "8px 20px",
    };
  },
  menu: (provided) => {
    return {
      ...provided,
      background: "#cca9f1",
      borderRadius: "8px",
      blur: "5px",
      width: "240px",
    };
  },
  menuList: (base) => ({
    ...base,
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
  placeholder: () => {
    return {
      color: "rgba(255, 255, 255, 0.5)",
      position: "absolute",
      left: 10,
      padding: "8px 20px",
    };
  },
  indicatorSeparator: () => ({}),

  indicators: () => {
    return {
      cursor: "pointer",
    };
  },
  dropdownIndicator: (provided) => {
    return {
      ...provided,
      color: "rgba(255, 255, 255, 0.4)",
      "&:hover": {
        color: "#fbfbfb",
      },
    };
  },
  input: (provided) => {
    return {
      ...provided,
      margin: "0px",
      color: "#FBFBFB",
      padding: "8px 20px",
      maxWidth: "100%",
    };
  },
};
