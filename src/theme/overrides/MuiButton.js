import { white, orange } from "../colors";

export default {
  root: {
    background: orange,
    borderRadius: 3,
    border: "1px solid",
    borderColor: "transparent",
    color: white,
    padding: "0 30px",
    "&:hover": {
      background: white,
      color: orange,
      border: `1px solid ${orange}`
    }
  },
  textSecondary: {
    background: white,
    color: "#000",
    "&:hover": {
      background: orange,
      border: `1px solid ${orange}`
    }
  },
  containedPrimary: {
    background: white,
    color: orange
  }
};
