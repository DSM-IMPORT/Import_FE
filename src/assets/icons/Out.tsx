import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Out({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3014_32959)">
        <path
          d="M7.5 4.5C8.32969 4.5 9 3.82969 9 3C9 2.17031 8.32969 1.5 7.5 1.5H4.5C2.01562 1.5 0 3.51562 0 6V18C0 20.4844 2.01562 22.5 4.5 22.5H7.5C8.32969 22.5 9 21.8297 9 21C9 20.1703 8.32969 19.5 7.5 19.5H4.5C3.67031 19.5 3 18.8297 3 18V6C3 5.17031 3.67031 4.5 4.5 4.5H7.5ZM23.6484 12.8156C23.8734 12.6047 24 12.3094 24 12C24 11.6906 23.8734 11.3953 23.6484 11.1844L16.8984 4.80937C16.5703 4.5 16.0922 4.41563 15.6797 4.59375C15.2672 4.77187 15 5.17969 15 5.625V9H9C8.17031 9 7.5 9.67031 7.5 10.5V13.5C7.5 14.3297 8.17031 15 9 15H15V18.375C15 18.825 15.2672 19.2281 15.6797 19.4062C16.0922 19.5844 16.5703 19.5 16.8984 19.1906L23.6484 12.8156Z"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3014_32959">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
