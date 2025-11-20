export function Ellipsis({ size = 24, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
      <circle cx="4" cy="12" r="2" fill="currentColor">
        <animate id="ellipsis1" begin="0;ellipsis3.end+0.25s" attributeName="cy" calcMode="spline" dur="0.6s" values="12;6;12" keySplines=".33,.66,.66,1;.33,0,.66,.33" />
      </circle>
      <circle cx="12" cy="12" r="2" fill="currentColor">
        <animate begin="ellipsis1.begin+0.1s" attributeName="cy" calcMode="spline" dur="0.6s" values="12;6;12" keySplines=".33,.66,.66,1;.33,0,.66,.33" />
      </circle>
      <circle cx="20" cy="12" r="2" fill="currentColor">
        <animate id="ellipsis3" begin="ellipsis1.begin+0.2s" attributeName="cy" calcMode="spline" dur="0.6s" values="12;6;12" keySplines=".33,.66,.66,1;.33,0,.66,.33" />
      </circle>
    </svg>
  );
}

export function Ring({ size = 24, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" stroke="currentColor" {...props}>
      <g fill="none" fillRule="evenodd" strokeWidth="2">
        <circle cx="22" cy="22" r="1">
          <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="22" r="1">
          <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

export function Bars({ size = 24, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
      <style>{`.spinner-bar{animation:spinner-bars-animation .8s linear infinite;animation-delay:-.8s}.spinner-bars-2{animation-delay:-.65s}.spinner-bars-3{animation-delay:-.5s}@keyframes spinner-bars-animation{0%{y:1px;height:22px}93.75%{y:5px;height:14px;opacity:.2}}`}</style>
      <rect className="spinner-bar" x="1" y="1" width="6" height="22" fill="currentColor" />
      <rect className="spinner-bar spinner-bars-2" x="9" y="1" width="6" height="22" fill="currentColor" />
      <rect className="spinner-bar spinner-bars-3" x="17" y="1" width="6" height="22" fill="currentColor" />
    </svg>
  );
}

export function Infinite({ size = 24, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" {...props}>
      <path fill="none" stroke="currentColor" strokeWidth="10" strokeDasharray="205.271142578125 51.317785644531256" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" strokeLinecap="round" style={{ transform: "scale(0.8)", transformOrigin: "50px 50px" }}>
        <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="2s" keyTimes="0;1" values="0;256.58892822265625" />
      </path>
    </svg>
  );
}

export default function Spinner({ variant = "infinite", size = 48, className = "", ...props }) {
  const common = { className, width: size, height: size };
  switch (variant) {
    case "ellipsis":
      return <Ellipsis {...common} {...props} />;
    case "ring":
      return <Ring {...common} {...props} />;
    case "bars":
      return <Bars {...common} {...props} />;
    case "infinite":
    default:
      return <Infinite {...common} {...props} />;
  }
}

