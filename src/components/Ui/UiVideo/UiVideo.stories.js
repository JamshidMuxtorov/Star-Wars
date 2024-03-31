import UiVideo from "./UiVideo";
import video from "./video/video.mp4"
export default {
    title: 'Ui-kit/UiVideo',
    component: UiVideo
};
const Template = (args) => <UiVideo {...arg} />
const props = {
    src: video,
    plabackRate: 1.0,
    classes: ''
}
export const Default = Template.bind({});
Default.args = {
    ...props
}