import { TextType } from './ReactSliderCaptcha';
interface AnchorProps {
    text: TextType;
    fetchCaptcha: () => Promise<any>;
    submitResponse: (response: any, trail: any) => Promise<any>;
    verified: boolean;
    hasReloadButton?: boolean;
    hasOutsideClick?: boolean;
    hideButton?: boolean;
}
declare function Anchor(props: AnchorProps): import("react/jsx-runtime").JSX.Element;
export default Anchor;
