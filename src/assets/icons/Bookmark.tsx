import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Bookmark({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2530_13040)">
        <path
          d="M3 2.25V22.8609C3 23.4891 3.51094 24 4.13906 24C4.37344 24 4.60312 23.9297 4.79531 23.7938L12 18.75L19.2047 23.7938C19.3969 23.9297 19.6266 24 19.8609 24C20.4891 24 21 23.4891 21 22.8609V2.25C21 1.00781 19.9922 0 18.75 0H5.25C4.00781 0 3 1.00781 3 2.25Z"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_13040">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
