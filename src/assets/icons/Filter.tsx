import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Filter({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2530_13055)">
        <path
          d="M0.182812 2.57344C0.492187 1.91719 1.14844 1.5 1.875 1.5H22.125C22.8516 1.5 23.5078 1.91719 23.8172 2.57344C24.1266 3.22969 24.0328 4.00313 23.5734 4.56563L15 15.0422V21C15 21.5672 14.6812 22.0875 14.1703 22.3406C13.6594 22.5938 13.0547 22.5422 12.6 22.2L9.6 19.95C9.22031 19.6688 9 19.2234 9 18.75V15.0422L0.421874 4.56094C-0.0328133 4.00313 -0.131251 3.225 0.182812 2.57344Z"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_13055">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
