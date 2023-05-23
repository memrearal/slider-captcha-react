import { TextType } from './ReactSliderCaptcha';
interface ChallengeProps {
    text: TextType;
    captcha: any;
    completeCaptcha: (response: number, trail: any) => Promise<any>;
    reloadCaptcha: () => void;
    hasReloadButton?: boolean;
}
declare function Challenge(props: ChallengeProps): import("react/jsx-runtime").JSX.Element;
export default Challenge;
