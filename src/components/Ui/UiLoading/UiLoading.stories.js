import Uiloading from "./UiLoading";
export default {
  title: "Ui-Kit/UiLoading",
  component: Uiloading,
};

const props = {
  isShadow: false,
  theme: "Black",
  classes: "",
};

export const Black = {
  args: {
    ...props,
    theme: "black",
  },
};
export const White = {
  args: {
    ...props,
    theme: "white",
    isShadow: true,
  },
};
export const Blue = {
  args: {
    ...props,
    theme: "blue",
  },
};
