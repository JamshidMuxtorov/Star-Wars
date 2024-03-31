import React from 'react'
import cn from 'classnames'
import css from './ChooseSide.module.css'
import PropTypes from 'react'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from 'Context/ThemeProvider'
import dark from './img/dark-side.jpg';
import light from './img/light-side.jpg';
import neitral from './img/falcon.jpg';
import classNames from 'classnames'


const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme()
  return (

    <div className={cn(css.item, classes)} onClick={() => isTheme.change(theme)}>

      <div className={css.item__header}>{text}</div>
      <img src={img} className={css.item__img} alt="sd" />

    </div>
  )
}

ChooseSideItem.prototype = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  classes: PropTypes.string,
  img: PropTypes.string,
}




function ChooseSide() {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      classes: css.item__light,
      img: light
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      classes: css.item__dark,
      img: dark
    },
    {
      theme: THEME_NEITRAL,
      text: "I'm Han Solo",
      classes: css.item__neitral,
      img: neitral
    }

  ]
  return (
    <div className={css.container}>
      {elements.map(({ theme, text, img, classes, index }) => (
        <ChooseSideItem
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}



    </div>
  )
}
export default ChooseSide
