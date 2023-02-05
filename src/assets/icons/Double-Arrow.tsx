import { IconProps } from "./@types";

export default function Double_Arrow({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3435_50689)">
        <path
          d="M1.94062 10.9407C1.35469 11.5267 1.35469 12.4782 1.94062 13.0642L9.44062 20.5642C10.0266 21.1501 10.9781 21.1501 11.5641 20.5642C12.15 19.9782 12.15 19.0267 11.5641 18.4407L5.12344 12.0001L11.5594 5.55947C12.1453 4.97353 12.1453 4.02197 11.5594 3.43604C10.9734 2.8501 10.0219 2.8501 9.43594 3.43604L1.93594 10.936L1.94062 10.9407ZM18.4406 3.44072L10.9406 10.9407C10.3547 11.5267 10.3547 12.4782 10.9406 13.0642L18.4406 20.5642C19.0266 21.1501 19.9781 21.1501 20.5641 20.5642C21.15 19.9782 21.15 19.0267 20.5641 18.4407L14.1234 12.0001L20.5594 5.55947C21.1453 4.97353 21.1453 4.02197 20.5594 3.43604C19.9734 2.8501 19.0219 2.8501 18.4359 3.43604L18.4406 3.44072Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3435_50689">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
