import React from 'react'
import errorCss from "./ErrorMessage.module.css"
import UiVideo from 'components/Ui/UiVideo'
import video from "./video/han-solo.mp4"
function ErrorMessage() {
    return (
        <>
            <p className={errorCss.ERtext} >Error.🤬 <br /> We cannot display data🤷‍♂️ <br /> Come Back When we fix everything.😶‍🌫️</p>



            <UiVideo src={video} classes={errorCss.video} playbackRate={2} />

        </>
    )
}

export default ErrorMessage


