import { IconProps } from "./@types";

export default function User({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2530_13047)">
        <path
          d="M12 12C15.4719 12 18.2857 9.31406 18.2857 6C18.2857 2.68594 15.4719 0 12 0C8.52812 0 5.71429 2.68594 5.71429 6C5.71429 9.31406 8.52812 12 12 12ZM9.7558 14.25C4.91875 14.25 1 17.9906 1 22.6078C1 23.3766 1.65313 24 2.45848 24H21.5415C22.3469 24 23 23.3766 23 22.6078C23 17.9906 19.0813 14.25 14.2442 14.25H9.7558Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_13047">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
