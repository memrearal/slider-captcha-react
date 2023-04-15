import { useState } from 'react';
import { ArrowIcon, SuccessIcon, FailureIcon } from './icons';
import ReloadIcon from './icons/ReloadIcon';
import { TextType } from './ReactSliderCaptcha';

const imageDataUrl = (image: any) =>
  `data:image/png;base64,${Buffer.from(image).toString('base64')}`;

const slider = {
  default: {
    track: 'scaptcha-card-slider-track-default',
    control: 'scaptcha-card-slider-control-default',
    icon: <ArrowIcon />,
  },
  active: {
    track: 'scaptcha-card-slider-track-active',
    control: 'scaptcha-card-slider-control-active',
    icon: <ArrowIcon />,
  },
  success: {
    track: 'scaptcha-card-slider-track-success',
    control: 'scaptcha-card-slider-control-success',
    icon: <SuccessIcon />,
  },
  failure: {
    track: 'scaptcha-card-slider-track-failure',
    control: 'scaptcha-card-slider-control-failure',
    icon: <FailureIcon />,
  },
};

interface ChallengeProps {
  text: TextType;
  captcha: any;
  completeCaptcha: (response: number, trail: any) => Promise<any>;
  reloadCaptcha: () => void;
  hasReloadButton?: boolean;
}

function Challenge(props: ChallengeProps) {
  const { text, captcha, completeCaptcha, reloadCaptcha, hasReloadButton } =
    props;
  const [sliderVariant, setSliderVariant] = useState(slider.default);
  const [solving, setSolving] = useState(false);
  const [submittedResponse, setSubmittedResponse] = useState(false);
  const [origin, setOrigin] = useState({
    x: 0,
    y: 0,
  });
  const [trail, setTrail] = useState({
    x: [0],
    y: [0],
  });

  // Converts distances along the control track to corresponding distances moved by the puzzle piece
  const scaleSliderPosition = (x: number) => 5 + 0.86 * x;

  const handleStart = (e: any) => {
    if (submittedResponse) return;
    setOrigin({
      x: e.clientX || e.touches[0].clientX,
      y: e.clientY || e.touches[0].clientY,
    });
    setSolving(true);
    setSliderVariant(slider.active);
  };

  const handleMove = (e: any) => {
    if (!solving || submittedResponse) return;
    const move = {
      x: (e.clientX || e.touches[0].clientX) - origin.x,
      y: (e.clientY || e.touches[0].clientY) - origin.y,
    };
    if (move.x > 325 || move.x < 0) return; // Don't update if outside bounds of captcha
    setTrail({
      x: trail.x.concat([move.x]),
      y: trail.y.concat([move.y]),
    });
  };

  const handleEnd = () => {
    if (!solving || submittedResponse) return;
    setSubmittedResponse(true);
    completeCaptcha(
      scaleSliderPosition(trail.x[trail.x.length - 1]),
      trail,
    ).then((validated) => {
      setSliderVariant(validated ? slider.success : slider.failure);
    });
  };

  const handleEnter = () => {
    if (solving || submittedResponse) return;
    setSliderVariant(slider.active);
  };

  const handleLeave = () => {
    if (solving) return;
    setSliderVariant(slider.default);
  };

  return (
    <div
      className="scaptcha-card-element"
      draggable="false"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      <div
        className="scaptcha-card-background scaptcha-card-element"
        style={{
          backgroundImage: `url('${imageDataUrl(captcha.background)}')`,
        }}
      />
      {hasReloadButton && (
        <div
          className=".scaptcha-card-reload-button scaptcha-card-element"
          onClick={reloadCaptcha}
        >
          <ReloadIcon />
        </div>
      )}

      <div
        className="scaptcha-card-slider-puzzle scaptcha-card-element"
        style={{
          backgroundImage: `url('${imageDataUrl(captcha.slider)}')`,
          left: `${scaleSliderPosition(trail.x[trail.x.length - 1])}px`,
        }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      />
      <div className="scaptcha-card-slider-container scaptcha-card-element">
        <div className="scaptcha-card-slider-track scaptcha-card-element" />
        <div
          className="scaptcha-card-slider-label scaptcha-card-element"
          style={{ opacity: solving ? 0 : 1 }}
        >
          <span>{text.challenge}</span>
        </div>
        <div
          className={`scaptcha-card-slider-mask ${sliderVariant.track} scaptcha-card-element`}
          style={{ width: `${trail.x[trail.x.length - 1] + 30}px` }}
        />
        <div
          className="scaptcha-card-slider-container scaptcha-card-element"
          draggable="false"
        />
        <div
          className={`scaptcha-card-slider-control ${sliderVariant.control} scaptcha-card-element`}
          style={{ left: `${trail.x[trail.x.length - 1]}px` }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {sliderVariant.icon}
        </div>
      </div>
    </div>
  );
}

export default Challenge;
