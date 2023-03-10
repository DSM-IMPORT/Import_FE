import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Chart({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3014_29070)">
        <path
          d="M12.0458 11.6287V1.73515C12.0458 1.33658 12.3559 1 12.7544 1C18.2326 1 22.6745 5.44191 22.6745 10.9201C22.6745 11.3187 22.338 11.6287 21.9394 11.6287H12.0458ZM0 13.0458C0 7.67393 3.99019 3.2276 9.16725 2.51902C9.57468 2.46144 9.92011 2.78916 9.92011 3.20102V13.7544L16.8509 20.6852C17.1476 20.9819 17.1255 21.4691 16.7845 21.7082C15.0485 22.9482 12.9227 23.6745 10.6287 23.6745C4.76077 23.6745 0 18.9182 0 13.0458ZM23.3123 13.7544C23.7241 13.7544 24.0474 14.0999 23.9943 14.5073C23.6533 16.9829 22.462 19.1839 20.7215 20.8092C20.4558 21.0572 20.0395 21.0395 19.7826 20.7782L12.7544 13.7544H23.3123Z"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3014_29070">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
