import { IconProps } from "./@types";

export default function Search({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3081_41278)">
        <g clip-path="url(#clip1_3081_41278)">
          <path
            d="M19.5 9.75C19.5 11.9016 18.8016 13.8891 17.625 15.5016L23.5594 21.4406C24.1453 22.0266 24.1453 22.9781 23.5594 23.5641C22.9734 24.15 22.0219 24.15 21.4359 23.5641L15.5016 17.625C13.8891 18.8062 11.9016 19.5 9.75 19.5C4.36406 19.5 0 15.1359 0 9.75C0 4.36406 4.36406 0 9.75 0C15.1359 0 19.5 4.36406 19.5 9.75ZM9.75 16.5C13.4766 16.5 16.5 13.4766 16.5 9.75C16.5 6.02344 13.4766 3 9.75 3C6.02344 3 3 6.02344 3 9.75C3 13.4766 6.02344 16.5 9.75 16.5Z"
            fill={fill ?? "black"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3081_41278">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3081_41278">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
