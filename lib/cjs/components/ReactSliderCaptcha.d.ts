/// <reference types="react" />
export interface TextType {
    anchor: string;
    challenge: string;
}
interface ReactSliderCaptchaProps {
    callback: (token: string) => void;
    create: string | (() => Promise<any>);
    verify: string | ((response: any, trail: any) => Promise<any>);
    variant?: 'light' | 'dark';
    text?: TextType;
    hasReloadButton?: boolean;
    hasOutsideClick?: boolean;
    hideButton?: boolean;
}
declare const SliderCaptcha: (props: ReactSliderCaptchaProps) => JSX.Element;
export default SliderCaptcha;
