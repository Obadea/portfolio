import * as React from 'react';

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    imageRendering="optimizeQuality"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    width="1em"
    height="1em"
    viewBox="0 0 512 462.799"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fillRule="nonzero"
      d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
    />
  </svg>
);

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#CB1F27"
      d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
    />
  </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#E74D89"
      d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
    />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    // height="24"
    height="1em"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.4em"
    height="1.4em"
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    viewBox="0 0 496 496"
    className={`w-full h-auto ${className}`}
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      imageRendering: 'optimizeQuality',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }}
    {...rest}
  >
    <path
      d="M234.5 83.5h-6c-.237 1.291.096 2.291 1 3 5.888 7.123 12.555 7.79 20 2a10.76 10.76 0 0 1 3 2.5c-2.982 4.406-7.149 6.24-12.5 5.5-7.193.573-12.193-2.427-15-9-1.859-17.647 5.641-23.813 22.5-18.5 4.322 3.477 6.322 7.977 6 13.5a123.926 123.926 0 0 1-19 1Zm14-6-3 2a67.962 67.962 0 0 0-15.5 1c-.974-2.673-.14-5.173 2.5-7.5 6.867-3.135 12.2-1.635 16 4.5Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M261.5 66.5h4c-.262 1.478.071 2.811 1 4 2.953-2.374 6.286-3.207 10-2.5.466 1.299.466 2.799 0 4.5-3.692-.529-6.858.471-9.5 3a81.25 81.25 0 0 0-3.5 21h-5a380.969 380.969 0 0 1 3-30Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M189.5 76.5c1.447-1.385 2.447-1.052 3 1a5.728 5.728 0 0 0-3-1Z"
      style={{
        opacity: 0.286,
      }}
    />
    <path
      d="M202.5 113.5c-1.55 1.22-3.216 1.22-5 0a1083.606 1083.606 0 0 0-10-36c.457-.797 1.124-1.13 2-1a5.728 5.728 0 0 1 3 1v1c.286 2.433.952 2.433 2 0 5.07-7.154 11.737-8.82 20-5 8.877 8.577 9.211 17.41 1 26.5-5.147 2.962-10.314 3.128-15.5.5.655 4.3 1.488 8.634 2.5 13Zm1-37c9.899-.49 14.066 4.177 12.5 14-2.682 5.757-7.182 7.924-13.5 6.5-7.153-4.618-8.486-10.618-4-18a38.715 38.715 0 0 0 5-2.5Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M331.5 74.5c1.987.664 3.654 1.83 5 3.5A503.19 503.19 0 0 0 325 96.5c-4.843 10.314-1.676 16.647 9.5 19 4.405-.894 7.905-3.227 10.5-7a2963.59 2963.59 0 0 1 9-17c2.024-2.384 4.191-2.551 6.5-.5a302.812 302.812 0 0 1-14.5 24.5c-5.823 5.624-12.323 6.457-19.5 2.5-8.234-4.65-10.734-11.484-7.5-20.5 4.191-7.72 8.358-15.387 12.5-23Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M192.5 78.5h2c-1.048 2.433-1.714 2.433-2 0Z"
      style={{
        opacity: 0.216,
      }}
    />
    <path
      d="M248.5 77.5c.543.06.876.393 1 1-1.189.929-2.522 1.262-4 1l3-2Z"
      style={{
        opacity: 0.553,
      }}
    />
    <path
      d="M234.5 83.5c-2.031.472-3.698 1.472-5 3-.904-.709-1.237-1.709-1-3h6Z"
      style={{
        opacity: 0.012,
      }}
    />
    <path
      d="M169.5 84.5c13.065.35 18.899 7.016 17.5 20-4.32 10.405-11.82 13.571-22.5 9.5-7.964-5.908-9.797-13.408-5.5-22.5 3.043-3.254 6.543-5.588 10.5-7Zm-3 25a6.547 6.547 0 0 0-3-3c-4.021-7.745-2.021-13.245 6-16.5 5.828-1.056 9.995 1.111 12.5 6.5 1.888 8.45-1.445 13.45-10 15a53.467 53.467 0 0 1-5.5-2Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M136.5 89.5c.996-.086 1.829.248 2.5 1a504.62 504.62 0 0 0 22 31c.636 3.022-.53 4.522-3.5 4.5A606.993 606.993 0 0 0 134 93.5c-.667-.667-.667-1.333 0-2 .995-.566 1.828-1.233 2.5-2Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M291.5 102.5c-.841-1.879-1.175-3.88-1-6 3.139-1.694 5.139-.694 6 3-.614 3.342-2.28 4.342-5 3Z"
      style={{
        opacity: 0.998,
      }}
    />
    <path
      d="M290.5 96.5c-.175 2.12.159 4.121 1 6-1.193-.47-1.86-1.47-2-3 .02-1.226.353-2.226 1-3Z"
      style={{
        opacity: 0.641,
      }}
    />
    <path
      d="M373.5 102.5c.61.891.943 1.891 1 3a988.274 988.274 0 0 1-24.5 29c-2.741-.722-3.741-2.388-3-5a696.612 696.612 0 0 0 23-27c1.292-1.291 2.458-1.291 3.5 0Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M373.5 102.5c2.052.553 2.385 1.553 1 3a5.727 5.727 0 0 0-1-3Z"
      style={{
        opacity: 0.004,
      }}
    />
    <path
      d="M163.5 106.5a6.547 6.547 0 0 1 3 3c-2 0-3-1-3-3Z"
      style={{
        opacity: 0.761,
      }}
    />
    <path
      d="M129.5 112.5c6.253-.425 11.253 1.741 15 6.5l-17 17c5.808 3.708 10.974 2.875 15.5-2.5 1.411-2.15 2.245-4.484 2.5-7h4c-.326 10.326-5.66 15.66-16 16-9.148-.812-14.481-5.812-16-15 1.092-7.416 5.092-12.416 12-15Zm-1 5c3.802-.62 7.135.214 10 2.5a83.668 83.668 0 0 1-14 12.5c-1.936-2.708-2.436-5.708-1.5-9a46.752 46.752 0 0 0 5.5-6Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M197.5 113.5c1.784 1.22 3.45 1.22 5 0 .543.06.876.393 1 1l-3 1c-1.53-.14-2.53-.807-3-2Z"
      style={{
        opacity: 0.212,
      }}
    />
    <path
      d="M397.5 115.5c2.044.531 3.711 1.698 5 3.5-17.071 7.872-34.071 15.705-51 23.5-2.262-.845-2.929-2.178-2-4a1055.176 1055.176 0 0 0 48-23Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M383.5 171.5c-.473-1.406-1.473-2.073-3-2-9.655-9.46-9.321-18.627 1-27.5l18-12c3.206.038 4.206 1.538 3 4.5a532.413 532.413 0 0 0-22.5 16c-2.896 8.874.104 14.874 9 18a113.552 113.552 0 0 0 27-16 12.14 12.14 0 0 1 3.5 4.5l-22 14c-4.659 1.702-9.325 1.869-14 .5Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M108.5 130.5c.996-.086 1.829.248 2.5 1l15.5 27a7.248 7.248 0 0 1-2 2.5 129.66 129.66 0 0 1-33-6.5c.837-2.005 2.337-3.005 4.5-3a1492.288 1492.288 0 0 1 24.5 4.5 637.966 637.966 0 0 1-12.5-20.5c-.384-1.697-.218-3.363.5-5Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M108.5 171.5c1.459-.067 2.792.266 4 1 1.303 13.865-5.031 20.365-19 19.5-7.104-2.27-11.104-7.104-12-14.5 2.118-12.061 9.118-16.561 21-13.5.928.388 1.595 1.055 2 2a151.468 151.468 0 0 1-10 21c10.611.547 15.277-4.62 14-15.5Zm-16-4c2.357-.163 4.69.003 7 .5-2.54 5.82-5.54 11.32-9 16.5-4.207-3.595-5.04-7.928-2.5-13 1.397-1.57 2.897-2.904 4.5-4Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M416.5 186.5c-1.385 1.447-1.052 2.447 1 3a57.752 57.752 0 0 1 15.5 4c1.03.336 1.53 1.003 1.5 2 0 1.333-.667 2-2 2a83.213 83.213 0 0 1-18.5-5l-15 21c-1.15-2.254-1.484-4.587-1-7a386.473 386.473 0 0 0 10.5-15.5l-18.5-5.5c-1.03-.336-1.53-1.003-1.5-2 .321-1.548 1.321-2.215 3-2a164.381 164.381 0 0 1 19 5 400.39 400.39 0 0 0 13.5-19c1.84 1.665 2.507 3.665 2 6a116.733 116.733 0 0 1-9.5 13Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M108.5 171.5c.417-.624 1.084-.957 2-1 1.213.247 1.88.914 2 2-1.208-.734-2.541-1.067-4-1Z"
      style={{
        opacity: 0.329,
      }}
    />
    <path
      d="M380.5 169.5c1.527-.073 2.527.594 3 2-1.527.073-2.527-.594-3-2Z"
      style={{
        opacity: 0.255,
      }}
    />
    <path
      d="M391.5 181.5c-1.679-.215-2.679.452-3 2-1.098-1.101-1.265-2.434-.5-4a19.602 19.602 0 0 1 3.5 2Z"
      style={{
        opacity: 0.761,
      }}
    />
    <path
      d="M416.5 186.5a5.727 5.727 0 0 0 1 3c-2.052-.553-2.385-1.553-1-3Z"
      style={{
        opacity: 0.024,
      }}
    />
    <path
      d="M94.5 198.5c-.073 1.527.594 2.527 2 3 2.321 3.194 3.655 6.86 4 11l-4 20-2 1a1623.884 1623.884 0 0 0-35-7c-.8-1.542-1.134-3.208-1-5-.072-9.915 3.261-18.415 10-25.5 9.331-5.116 17.998-4.283 26 2.5Zm-1 28c-1.88.841-3.88 1.175-6 1a689.678 689.678 0 0 1-25-6.5 99.475 99.475 0 0 1 5.5-17.5c8.63-8.199 16.963-7.866 25 1 1.838 2.537 2.67 5.371 2.5 8.5a374.756 374.756 0 0 0-2 13.5Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M434.5 195.5c.904.709 1.237 1.709 1 3-1.291.237-2.291-.096-3-1 1.333 0 2-.667 2-2Z"
      style={{
        opacity: 0.29,
      }}
    />
    <path
      d="M94.5 198.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3Z"
      style={{
        opacity: 0.427,
      }}
    />
    <path
      d="M58.5 221.5c-.134 1.792.2 3.458 1 5-1.15-.291-1.816-1.124-2-2.5.028-1.07.361-1.903 1-2.5Z"
      style={{
        opacity: 0.635,
      }}
    />
    <path
      d="M93.5 226.5c-.47 1.193-1.47 1.86-3 2-1.226-.02-2.226-.353-3-1 2.12.175 4.12-.159 6-1Z"
      style={{
        opacity: 0.18,
      }}
    />
    <path
      d="M410.5 260.5c-.473-1.406-1.473-2.073-3-2a47 47 0 0 1-4.5-8c-.5-7.659-.666-15.326-.5-23 13.02.187 26.02-.146 39-1a92.698 92.698 0 0 0 1 17c-1.651 16.482-10.651 23.316-27 20.5-2.084-.697-3.751-1.864-5-3.5Zm26-9c-1.762.762-2.762 2.096-3 4-6.805 4.894-13.805 5.227-21 1a6.547 6.547 0 0 0-3-3c-2.481-6.746-3.481-13.746-3-21 10.36.204 20.694-.129 31-1a122.16 122.16 0 0 1-1 20Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M96.5 232.5c-.21 1.924-.877 2.257-2 1l2-1Z"
      style={{
        opacity: 0.059,
      }}
    />
    <path
      d="M436.5 251.5c-.238 1.904-1.238 3.238-3 4 .238-1.904 1.238-3.238 3-4Z"
      style={{
        opacity: 0.847,
      }}
    />
    <path
      d="m95.5 256.5-5 2c-.722 1.051-1.722 1.718-3 2-11.267-2.064-16.6 2.603-16 14-1.464-.905-2.798-.905-4 0-1.252-4.323-.586-8.323 2-12 .79-.283 1.456-.783 2-1.5-2.538-.796-4.872-.629-7 .5-3.564.923-7.23 1.256-11 1v-4a902.132 902.132 0 0 1 42-5v3Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M409.5 253.5a6.547 6.547 0 0 1 3 3c-2 0-3-1-3-3Z"
      style={{
        opacity: 0.78,
      }}
    />
    <path
      d="M95.5 256.5c.543.06.876.393 1 1a71.015 71.015 0 0 0-4 2c-.992.172-1.658-.162-2-1l5-2Z"
      style={{
        opacity: 0.49,
      }}
    />
    <path
      d="M407.5 258.5c1.527-.073 2.527.594 3 2-1.527.073-2.527-.594-3-2Z"
      style={{
        opacity: 0.651,
      }}
    />
    <path
      d="M90.5 258.5c.342.838 1.008 1.172 2 1 3.38 2.778 5.047 6.445 5 11-2.04 13.621-9.707 18.121-23 13.5-3.426-2.349-5.76-5.516-7-9.5 1.202-.905 2.536-.905 4 0 4.872 6.391 10.872 7.557 18 3.5 5.446-6.507 4.779-12.34-2-17.5 1.278-.282 2.278-.949 3-2Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M64.5 261.5c2.128-1.129 4.462-1.296 7-.5-.544.717-1.21 1.217-2 1.5-1.419-.951-3.085-1.284-5-1Z"
      style={{
        opacity: 0.141,
      }}
    />
    <path
      d="M424.5 271.5c-.073 1.527.594 2.527 2 3 4.76 8.146 3.427 15.313-4 21.5-3.928 1.325-7.928 1.658-12 1a3.647 3.647 0 0 1-1-1.5 235.617 235.617 0 0 0 5-23c-10.651 2.468-13.651 8.635-9 18.5-3.358 3.398-5.525 2.564-6.5-2.5.028-18.268 8.528-23.935 25.5-17Zm-4 3c6.681 6.148 6.348 11.981-1 17.5-1.667.667-3.333.667-5 0a240.695 240.695 0 0 0 3-16.5 5.727 5.727 0 0 1 3-1Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M424.5 271.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3Z"
      style={{
        opacity: 0.62,
      }}
    />
    <path
      d="M420.5 274.5a5.727 5.727 0 0 0-3 1c.553-2.052 1.553-2.385 3-1Z"
      style={{
        opacity: 0.004,
      }}
    />
    <path
      d="M97.5 287.5c1.447-1.385 2.447-1.052 3 1a5.727 5.727 0 0 0-3-1Z"
      style={{
        opacity: 0.545,
      }}
    />
    <path
      d="M97.5 287.5a5.727 5.727 0 0 1 3 1c1.098.897 1.098 1.73 0 2.5a180.047 180.047 0 0 1-17 6c-6.524 5.533-6.19 10.866 1 16 2.667.667 5.333.667 8 0a99.763 99.763 0 0 1 13-4.5c2.585.573 3.585 2.239 3 5a279.21 279.21 0 0 0-26.5 8c-4.783-2.109-4.616-3.942.5-5.5-3.977-1.409-6.477-4.242-7.5-8.5-2.143-8.547 1.024-14.047 9.5-16.5a187.266 187.266 0 0 1 13-3.5Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M397.5 295.5c2.458-.273 4.125.727 5 3-3.507 3.003-6.007 6.669-7.5 11-.564 5.436 1.603 6.936 6.5 4.5a52.244 52.244 0 0 1 8-11c9.612-1.383 13.446 2.784 11.5 12.5-1.539 4.531-4.205 8.198-8 11a15.645 15.645 0 0 0-2.5-4c4.68-3.848 6.347-8.681 5-14.5-1.333-.667-2.667-.667-4 0a127.522 127.522 0 0 1-10 12c-9.659.651-13.159-3.849-10.5-13.5 1.674-4.024 3.841-7.691 6.5-11Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M82.5 338.5c-.073 1.527.594 2.527 2 3 2.67 4.008 5.336 8.008 8 12 3.756-1.603 7.09-3.77 10-6.5a199.233 199.233 0 0 0-10-16c1.272-2.261 2.938-2.761 5-1.5a191.884 191.884 0 0 1 9.5 16 70.787 70.787 0 0 1 11.5-7.5 559.502 559.502 0 0 1-12-19.5 23.65 23.65 0 0 0 3.5-3 551.515 551.515 0 0 0 14.5 24 279.9 279.9 0 0 1-33 21 311.488 311.488 0 0 1-13.5-20c-.986-2.425-.32-4.091 2-5 1.31.63 2.144 1.63 2.5 3Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M384.5 320.5a484.207 484.207 0 0 1 26 13.5c1.194 2.94.194 4.273-3 4a376.938 376.938 0 0 1-23-12c-1.252-1.828-1.252-3.661 0-5.5Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M373.5 327.5c1.447-1.385 2.447-1.052 3 1a5.727 5.727 0 0 0-3-1Z"
      style={{
        opacity: 0.282,
      }}
    />
    <path
      d="M373.5 327.5a5.727 5.727 0 0 1 3 1c1.098.897 1.098 1.73 0 2.5-9.634 2.916-13.134 9.082-10.5 18.5a13.92 13.92 0 0 0 4 3c1.007-12.752 7.84-18.252 20.5-16.5 9.891 5.674 12.057 13.508 6.5 23.5-2.357 2.591-5.191 4.258-8.5 5-3.353-.155-3.686.512-1 2 2.547 1.79 2.214 3.456-1 5a211.823 211.823 0 0 1-19-15c-.473-1.406-1.473-2.073-3-2-4.624-3.888-6.124-8.888-4.5-15 2.836-6.01 7.336-10.01 13.5-12Zm16 13c1 1.667 2.333 3 4 4 3.699 8.93.699 14.596-9 17-7.784-1.607-10.951-6.273-9.5-14a25.55 25.55 0 0 1 5.5-6.5 40.914 40.914 0 0 1 9-.5Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="m419.5 338.5-4 1c1.038-2.019 2.372-2.353 4-1Z"
      style={{
        opacity: 0.894,
      }}
    />
    <path
      d="M419.5 338.5c2.245 1.328 2.578 3.161 1 5.5-4.319.842-5.986-.658-5-4.5l4-1Z"
      style={{
        opacity: 0.998,
      }}
    />
    <path
      d="M82.5 338.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3Z"
      style={{
        opacity: 0.271,
      }}
    />
    <path
      d="M389.5 340.5c2.333.333 3.667 1.667 4 4-1.667-1-3-2.333-4-4Z"
      style={{
        opacity: 0.902,
      }}
    />
    <path
      d="M137.5 355.5c-1.459-.067-2.792.266-4 1 .12-1.086.787-1.753 2-2 .916.043 1.583.376 2 1Z"
      style={{
        opacity: 0.463,
      }}
    />
    <path
      d="M364.5 354.5c1.527-.073 2.527.594 3 2-1.527.073-2.527-.594-3-2Z"
      style={{
        opacity: 0.451,
      }}
    />
    <path
      d="M356.5 358.5a8.43 8.43 0 0 1 4 .5 550.236 550.236 0 0 0 18 21.5c-2.186 3.898-4.352 3.898-6.5 0-.911 8.078-5.411 12.745-13.5 14-3.547-.457-6.547-1.957-9-4.5a109.905 109.905 0 0 1-11-14c.454-1.622 1.454-2.788 3-3.5 4.701 6.868 10.534 12.535 17.5 17 8.438-2.863 10.772-8.196 7-16a195.148 195.148 0 0 1-10.5-13c.363-.683.696-1.35 1-2Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M137.5 360.5c1.149.291 1.816 1.124 2 2.5-.028 1.07-.361 1.903-1 2.5.134-1.792-.199-3.458-1-5Z"
      style={{
        opacity: 0.033,
      }}
    />
    <path
      d="m388.5 364.5-1 2c-2.686-1.488-2.353-2.155 1-2Z"
      style={{
        opacity: 0.145,
      }}
    />
    <path
      d="M136.5 367.5c-1.257 2.927-3.257 5.261-6 7 1.257-2.927 3.257-5.261 6-7Z"
      style={{
        opacity: 0.627,
      }}
    />
    <path
      d="M155.5 405.5c.767-.672 1.434-1.505 2-2.5a40.914 40.914 0 0 0-9-.5c-7.349-2.867-10.183-8.2-8.5-16a105.523 105.523 0 0 1 12.5-17 7.293 7.293 0 0 1 3 2c-1.85 5.009-4.683 9.342-8.5 13-4.509 9.811-1.342 14.644 9.5 14.5a25.55 25.55 0 0 0 6.5-5.5 58.317 58.317 0 0 1 7.5-10.5c1.576-.388 2.909.112 4 1.5a627.829 627.829 0 0 1-16.5 25 9.454 9.454 0 0 0-2.5-1.5c-1.274-.977-1.274-1.811 0-2.5Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M137.5 355.5c5.296 2.266 7.13 6.266 5.5 12a128.578 128.578 0 0 1-13 14c.027 1.917.861 3.584 2.5 5a10.756 10.756 0 0 1-2.5 3l-4-4-5 5a15.645 15.645 0 0 0-2.5-4c3.909-3.568 3.409-6.568-1.5-9-.833-3.167.333-4.333 3.5-3.5a31.84 31.84 0 0 0 5 4.5c1.686-1.357 3.352-2.69 5-4 2.743-1.739 4.743-4.073 6-7 .333-1 1-1.667 2-2 .639-.597.972-1.43 1-2.5-.184-1.376-.851-2.209-2-2.5-.763-.768-1.763-1.268-3-1.5-.752-.671-1.086-1.504-1-2.5 1.208-.734 2.541-1.067 4-1Z"
      style={{
        opacity: 0.999,
      }}
    />
    <path
      d="M325.5 382.5c7.644-1.072 13.477 1.595 17.5 8 3.963 15.913-2.203 23.08-18.5 21.5-4.013-1.346-6.68-4.013-8-8a112.105 112.105 0 0 1 21-13c-8.748-6.229-15.748-4.396-21 5.5a7.293 7.293 0 0 1-3-2c1.718-6.385 5.718-10.385 12-12Zm13 13c.968 2.107 1.302 4.441 1 7-5.015 7.051-10.681 7.718-17 2 5.35-3.028 10.684-6.028 16-9Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M180.5 390.5c17.769-.745 23.936 7.255 18.5 24-8.557 9.169-17.224 9.169-26 0-4.427-10.216-1.927-18.216 7.5-24Zm4 4c10.59 1.26 14.09 6.926 10.5 17-4.832 5.832-10.332 6.499-16.5 2-3.834-5.382-3.668-10.715.5-16 2.058-.729 3.891-1.729 5.5-3Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M303.5 393.5a5.727 5.727 0 0 1 3 1c.61.891.943 1.891 1 3-.09 2.652.576 4.985 2 7 2.435 4.299 4.102 8.966 5 14-.683 1.676-2.017 2.343-4 2v-1c-.801-2.293-1.468-1.96-2 1-1.421 2.582-3.588 4.249-6.5 5-1.301-.598-2.135-1.598-2.5-3 1.529-1.688 3.363-3.021 5.5-4a40.79 40.79 0 0 0 2.5-5.5l-6-18c.336-1.03 1.003-1.53 2-1.5Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M303.5 393.5c1.447-1.385 2.447-1.052 3 1a5.727 5.727 0 0 0-3-1Z"
      style={{
        opacity: 0.298,
      }}
    />
    <path
      d="M338.5 395.5c.06-.543.393-.876 1-1 1.3 2.809 1.3 5.476 0 8 .302-2.559-.032-4.893-1-7Z"
      style={{
        opacity: 0.114,
      }}
    />
    <path
      d="M219.5 400.5a5.727 5.727 0 0 0-3 1c.553-2.052 1.553-2.385 3-1Z"
      style={{
        opacity: 0.212,
      }}
    />
    <path
      d="M219.5 400.5c1.149.291 1.816 1.124 2 2.5a1533.93 1533.93 0 0 1-6 26.5c-3.833.661-5.333-.672-4.5-4-.671.752-1.504 1.086-2.5 1h-7v-4c6.362.811 10.528-1.856 12.5-8a149.336 149.336 0 0 1 2.5-13 5.727 5.727 0 0 1 3-1Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M307.5 397.5c1.424 2.015 2.09 4.348 2 7-1.424-2.015-2.09-4.348-2-7Z"
      style={{
        opacity: 0.922,
      }}
    />
    <path
      d="M272.5 400.5c3.357.621 4.524 2.621 3.5 6-1.699.906-3.533 1.239-5.5 1-.315-2.711.352-5.044 2-7Z"
      style={{
        opacity: 0.998,
      }}
    />
    <path
      d="M148.5 402.5a40.914 40.914 0 0 1 9 .5c-.566.995-1.233 1.828-2 2.5-2.008-1.583-4.341-2.583-7-3Z"
      style={{
        opacity: 0.565,
      }}
    />
    <path
      d="M250.5 403.5a4.934 4.934 0 0 1 3 .5 598.267 598.267 0 0 0-2.5 35.5 10.258 10.258 0 0 1-1.5 4 412.173 412.173 0 0 0-26-2v-4a283.8 283.8 0 0 1 22 1c.416-4.993.749-9.993 1-15a103.043 103.043 0 0 1-19-1v-3h12c2.448.973 5.115 1.306 8 1v-11c.44-2.344 1.44-4.344 3-6Z"
      style={{
        opacity: 1,
      }}
    />
    <path
      d="M250.5 403.5c-1.56 1.656-2.56 3.656-3 6v-7c1.291-.237 2.291.096 3 1Z"
      style={{
        opacity: 0.714,
      }}
    />
    <path
      d="m310.5 419.5-2 1c.532-2.96 1.199-3.293 2-1Z"
      style={{
        opacity: 0.078,
      }}
    />
    <path
      d="M247.5 414.5v6c-2.885.306-5.552-.027-8-1h7c-.284-1.915.049-3.581 1-5Z"
      style={{
        opacity: 0.498,
      }}
    />
    <path
      d="M314.5 418.5c.904.709 1.237 1.709 1 3-1.915.284-3.581-.049-5-1 1.983.343 3.317-.324 4-2Z"
      style={{
        opacity: 0.835,
      }}
    />
    <path
      d="M235.5 419.5h-8v3c-.934-1.068-1.268-2.401-1-4 3.213-.31 6.213.023 9 1Z"
      style={{
        opacity: 0.196,
      }}
    />
    <path
      d="M201.5 422.5v4h7c-2.448.973-5.115 1.306-8 1-.284-1.915.049-3.581 1-5Z"
      style={{
        opacity: 0.6,
      }}
    />
  </svg>
);
