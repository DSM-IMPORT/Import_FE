import { IconProps } from "./@types";

export default function Circlular_Add({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2514_11992)">
        <path
          d="M12 18C12.34 18 12.6252 17.8848 12.8556 17.6544C13.0852 17.4248 13.2 17.14 13.2 16.8V13.2H16.83C17.17 13.2 17.45 13.0848 17.67 12.8544C17.89 12.6248 18 12.34 18 12C18 11.66 17.8848 11.3748 17.6544 11.1444C17.4248 10.9148 17.14 10.8 16.8 10.8H13.2V7.17C13.2 6.83 13.0852 6.55 12.8556 6.33C12.6252 6.11 12.34 6 12 6C11.66 6 11.3752 6.1148 11.1456 6.3444C10.9152 6.5748 10.8 6.86 10.8 7.2V10.8H7.17C6.83 10.8 6.55 10.9148 6.33 11.1444C6.11 11.3748 6 11.66 6 12C6 12.34 6.1148 12.6248 6.3444 12.8544C6.5748 13.0848 6.86 13.2 7.2 13.2H10.8V16.83C10.8 17.17 10.9152 17.45 11.1456 17.67C11.3752 17.89 11.66 18 12 18ZM12 24C10.34 24 8.78 23.6848 7.32 23.0544C5.86 22.4248 4.59 21.57 3.51 20.49C2.43 19.41 1.5752 18.14 0.9456 16.68C0.3152 15.22 0 13.66 0 12C0 10.34 0.3152 8.78 0.9456 7.32C1.5752 5.86 2.43 4.59 3.51 3.51C4.59 2.43 5.86 1.5748 7.32 0.9444C8.78 0.3148 10.34 0 12 0C13.66 0 15.22 0.3148 16.68 0.9444C18.14 1.5748 19.41 2.43 20.49 3.51C21.57 4.59 22.4248 5.86 23.0544 7.32C23.6848 8.78 24 10.34 24 12C24 13.66 23.6848 15.22 23.0544 16.68C22.4248 18.14 21.57 19.41 20.49 20.49C19.41 21.57 18.14 22.4248 16.68 23.0544C15.22 23.6848 13.66 24 12 24Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2514_11992">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
