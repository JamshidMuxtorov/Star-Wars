import { element } from "prop-types";

export const changeCssVariables = theme => {
    const root = document.querySelector(':root');
    // root.style.setProperty('--theme-def-h', `var(--theme-${theme}-header)`);
    // root.style.setProperty('--theme-def-img', `var(--theme-${theme}-img)`);
    const cssVariables = ['header', 'img'];
    cssVariables.forEach(element => {
        root.style.setProperty(`--theme-def-${element}`, `var(--theme-${theme}-${element})`)
    })
}