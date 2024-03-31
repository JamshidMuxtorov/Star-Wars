import UiButton from "./UiButton";
export default {
    title: 'Ui-Kit/Ui',
    component: UiButton

}
const props = {
    text: 'hello',
    onclick: () => console.log('Hello world'),
    disabled: false,
    theme: 'light',
    classes: ""
}

export const Dark = {
    args: {
        ...props,
        theme: 'dark'
    },
};
export const Light = {
    args: {
        ...props,
        theme: 'light'
    },
};
export const Disable = {
    args: {
        ...props,
        disabled: true,
    },
};