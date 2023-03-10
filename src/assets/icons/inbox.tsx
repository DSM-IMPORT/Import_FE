import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Inbox({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2989_22665)">
        <path
          d="M5.67188 1.5C4.29375 1.5 3.09375 2.4375 2.76094 3.77344L0.0890625 14.4562C0.028125 14.6953 0 14.9391 0 15.1828V19.5C0 21.1547 1.34531 22.5 3 22.5H21C22.6547 22.5 24 21.1547 24 19.5V15.1828C24 14.9391 23.9719 14.6953 23.9109 14.4562L21.2391 3.77344C20.9062 2.4375 19.7062 1.5 18.3281 1.5H5.67188ZM5.67188 4.5H18.3281L20.5781 13.5H18.1781C17.6109 13.5 17.0906 13.8188 16.8375 14.3297L16.1672 15.6703C15.9141 16.1766 15.3937 16.5 14.8266 16.5H9.17813C8.61094 16.5 8.09062 16.1812 7.8375 15.6703L7.16719 14.3297C6.91406 13.8234 6.39375 13.5 5.82656 13.5H3.42188L5.67188 4.5Z"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2989_22665">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
