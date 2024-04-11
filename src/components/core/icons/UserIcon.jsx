// eslint-disable-next-line react/prop-types
const UserIcon = ({ color = "#020D23" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 22V8H7V22H3ZM10 22V2H14V22H10ZM17 22V14H21V22H17Z"
        fill={color}
      />
    </svg>
  );
};

export default UserIcon;
