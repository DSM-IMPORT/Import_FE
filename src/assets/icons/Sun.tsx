import { IconProps } from "./@types";

export default function Sun({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3128_42340)">
        <g clip-path="url(#clip1_3128_42340)">
          <path
            d="M16.9453 0.0560324C17.1797 0.15447 17.3484 0.365407 17.3953 0.613845L18.3281 5.67166L23.3859 6.59978C23.6344 6.64666 23.8453 6.81541 23.9437 7.04978C24.0422 7.28416 24.0141 7.55134 23.8687 7.76228L20.9484 11.9998L23.8687 16.2326C24.0141 16.4435 24.0422 16.7107 23.9437 16.9451C23.8453 17.1795 23.6344 17.3482 23.3859 17.3951L18.3281 18.3279L17.3953 23.3857C17.3484 23.6342 17.1797 23.8451 16.9453 23.9435C16.7109 24.042 16.4437 24.0138 16.2328 23.8685L12 20.9482L7.76718 23.8685C7.55625 24.0138 7.28906 24.042 7.05468 23.9435C6.82031 23.8451 6.65156 23.6342 6.60468 23.3857L5.67187 18.3279L0.614059 17.3951C0.365621 17.3482 0.154684 17.1795 0.056246 16.9451C-0.0421915 16.7107 -0.0140665 16.4435 0.131246 16.2326L3.05156 11.9998L0.131246 7.76697C-0.0140665 7.55603 -0.0421915 7.28884 0.056246 7.05447C0.154684 6.82009 0.365621 6.65134 0.614059 6.60447L5.67187 5.67166L6.60468 0.613845C6.65156 0.365407 6.82031 0.15447 7.05468 0.0560324C7.28906 -0.0424051 7.55625 -0.0142801 7.76718 0.131032L12 3.05134L16.2328 0.131032C16.4437 -0.0142801 16.7109 -0.0424051 16.9453 0.0560324ZM16.5 11.9998C16.5 14.4842 14.4844 16.4998 12 16.4998C9.51562 16.4998 7.5 14.4842 7.5 11.9998C7.5 9.51541 9.51562 7.49978 12 7.49978C14.4844 7.49978 16.5 9.51541 16.5 11.9998ZM18 11.9998C18 8.68572 15.3141 5.99978 12 5.99978C8.68593 5.99978 6 8.68572 6 11.9998C6 15.3138 8.68593 17.9998 12 17.9998C15.3141 17.9998 18 15.3138 18 11.9998Z"
            fill={fill ?? "black"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3128_42340">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3128_42340">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}