/// <reference types="react" />
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
declare function Anchor(props: AnchorProps): JSX.Element;
export default Anchor;
