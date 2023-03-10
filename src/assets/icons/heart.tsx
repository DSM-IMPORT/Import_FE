import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Heart({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2514_11988)">
        <path
          d="M2.23125 14.081L10.7016 21.9888C11.0531 22.317 11.5172 22.4998 12 22.4998C12.4828 22.4998 12.9469 22.317 13.2984 21.9888L21.7687 14.081C23.1938 12.7545 24 10.8935 24 8.9482V8.67633C24 5.39976 21.6328 2.60601 18.4031 2.06695C16.2656 1.7107 14.0906 2.40914 12.5625 3.93726L12 4.49976L11.4375 3.93726C9.90938 2.40914 7.73438 1.7107 5.59688 2.06695C2.36719 2.60601 0 5.39976 0 8.67633V8.9482C0 10.8935 0.80625 12.7545 2.23125 14.081Z"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2514_11988">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
