import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Bold({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3C3 2.17031 3.67031 1.5 4.5 1.5H6.75H7.5H13.5C16.8141 1.5 19.5 4.18594 19.5 7.5C19.5 8.96719 18.9703 10.3172 18.0938 11.3578C19.8328 12.4078 21 14.3156 21 16.5C21 19.8141 18.3141 22.5 15 22.5H7.5H6.75H4.5C3.67031 22.5 3 21.8297 3 21C3 20.1703 3.67031 19.5 4.5 19.5H5.25V12V4.5H4.5C3.67031 4.5 3 3.82969 3 3ZM13.5 10.5C15.1547 10.5 16.5 9.15469 16.5 7.5C16.5 5.84531 15.1547 4.5 13.5 4.5H8.25V10.5H13.5ZM8.25 13.5V19.5H15C16.6547 19.5 18 18.1547 18 16.5C18 14.8453 16.6547 13.5 15 13.5H13.5H8.25Z"
        fill={Colors[fill!] ?? "black"}
      />
    </svg>
  );
}
