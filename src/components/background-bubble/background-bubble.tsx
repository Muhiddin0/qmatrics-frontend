import React from "react";
import classNames from "classnames";

import "./background-bubble.css";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  bubbleCount?: number; // Bubble sonini belgilash
};

function BackgroundBubble({ bubbleCount = 50, className, ...rest }: Props) {
  return (
    <div {...rest} className={className}>
      {Array.from({ length: bubbleCount }).map((_, index) => (
        <div key={index} className="bubble" />
      ))}
    </div>
  );
}

export default BackgroundBubble;
