// eslint-disable-next-line react/prop-types
const DashboardIcon = ({ color = "#020D23" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.93449 3.06551C8.15622 2.28723 7.10065 1.85 6 1.85C4.89935 1.85 3.84378 2.28723 3.06551 3.06551C2.28723 3.84378 1.85 4.89935 1.85 6C1.85 7.10065 2.28723 8.15622 3.06551 8.93449C3.84378 9.71277 4.89935 10.15 6 10.15H7.85V13.85H6C4.89935 13.85 3.84378 14.2872 3.06551 15.0655C2.28723 15.8438 1.85 16.8994 1.85 18C1.85 19.1006 2.28723 20.1562 3.06551 20.9345C3.84378 21.7128 4.89935 22.15 6 22.15C7.10065 22.15 8.15622 21.7128 8.93449 20.9345C9.71277 20.1562 10.15 19.1006 10.15 18V16.15H13.85V18C13.85 19.1006 14.2872 20.1562 15.0655 20.9345C15.8438 21.7128 16.8994 22.15 18 22.15C19.1006 22.15 20.1562 21.7128 20.9345 20.9345C21.7128 20.1562 22.15 19.1006 22.15 18C22.15 16.8994 21.7128 15.8438 20.9345 15.0655C20.1562 14.2872 19.1006 13.85 18 13.85H16.15V10.15H18C19.1006 10.15 20.1562 9.71277 20.9345 8.93449C21.7128 8.15622 22.15 7.10065 22.15 6C22.15 4.89935 21.7128 3.84378 20.9345 3.06551C20.1562 2.28723 19.1006 1.85 18 1.85C16.8994 1.85 15.8438 2.28723 15.0655 3.06551C14.2872 3.84378 13.85 4.89935 13.85 6V7.85H10.15V6C10.15 4.89935 9.71277 3.84378 8.93449 3.06551ZM16.6919 19.3081C16.3449 18.9612 16.15 18.4907 16.15 18V16.15H18C18.4907 16.15 18.9612 16.3449 19.3081 16.6919C19.6551 17.0388 19.85 17.5093 19.85 18C19.85 18.4907 19.6551 18.9612 19.3081 19.3081C18.9612 19.6551 18.4907 19.85 18 19.85C17.5093 19.85 17.0388 19.6551 16.6919 19.3081ZM10.15 13.85V10.15H13.85V13.85H10.15ZM4.69185 16.6919C5.03879 16.3449 5.50935 16.15 6 16.15H7.85V18C7.85 18.4907 7.65509 18.9612 7.30815 19.3081C6.96121 19.6551 6.49065 19.85 6 19.85C5.50935 19.85 5.03879 19.6551 4.69185 19.3081C4.34491 18.9612 4.15 18.4907 4.15 18C4.15 17.5093 4.34491 17.0388 4.69185 16.6919ZM7.30815 4.69185C7.65509 5.03879 7.85 5.50935 7.85 6V7.85H6C5.50935 7.85 5.03879 7.65509 4.69185 7.30815C4.34491 6.96121 4.15 6.49065 4.15 6C4.15 5.50935 4.34491 5.03879 4.69185 4.69185C5.03879 4.34491 5.50935 4.15 6 4.15C6.49065 4.15 6.96121 4.34491 7.30815 4.69185ZM19.3081 7.30815C18.9612 7.65509 18.4907 7.85 18 7.85H16.15V6C16.15 5.50935 16.3449 5.03879 16.6919 4.69185C17.0388 4.34491 17.5093 4.15 18 4.15C18.4907 4.15 18.9612 4.34491 19.3081 4.69185C19.6551 5.03879 19.85 5.50935 19.85 6C19.85 6.49065 19.6551 6.96121 19.3081 7.30815Z"
        fill={color}
        stroke={color}
        strokeWidth="0.3"
      />
    </svg>
  );
};

export default DashboardIcon;
