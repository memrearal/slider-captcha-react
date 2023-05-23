import { TextType } from './ReactSliderCaptcha';
interface CardProps {
    text: TextType;
    fetchCaptcha: () => Promise<any>;
    submitResponse: (response: any, trail: any) => Promise<any>;
    hasReloadButton?: boolean;
}
declare function Card(props: CardProps): import("react/jsx-runtime").JSX.Element;
export default Card;
