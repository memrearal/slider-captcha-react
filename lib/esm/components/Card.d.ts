/// <reference types="react" />
import { TextType } from './ReactSliderCaptcha';
interface CardProps {
    text: TextType;
    fetchCaptcha: () => Promise<any>;
    submitResponse: (response: any, trail: any) => Promise<any>;
    hasReloadButton?: boolean;
}
declare function Card(props: CardProps): JSX.Element;
export default Card;
