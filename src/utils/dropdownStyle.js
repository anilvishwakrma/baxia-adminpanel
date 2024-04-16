import reactCSS from "reactcss";

const stylesDate = reactCSS({
  default: {
    swatch: {
      padding: "0px",
      background: "#fff",
      borderRadius: "1px",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      display: "inline-block",
      cursor: "pointer",
    },
    popover: {
      position: "absolute",
      zIndex: "1",
      right: "0",
      background: "#fff",
      width: "91%",
      left: "27px",
      marginTop: "-12px",
    },
    cover: {
      position: "sticky",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
  },
});
export { stylesDate };
