import { IconProps } from "./@types";

export default function Mail({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2530_13049)">
        <path
          d="M2.25 3C1.00781 3 0 4.00781 0 5.25C0 5.95781 0.332813 6.62344 0.9 7.05L11.1 14.7C11.6344 15.0984 12.3656 15.0984 12.9 14.7L23.1 7.05C23.6672 6.62344 24 5.95781 24 5.25C24 4.00781 22.9922 3 21.75 3H2.25ZM0 8.25V18C0 19.6547 1.34531 21 3 21H21C22.6547 21 24 19.6547 24 18V8.25L13.8 15.9C12.7312 16.7016 11.2688 16.7016 10.2 15.9L0 8.25Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_13049">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
