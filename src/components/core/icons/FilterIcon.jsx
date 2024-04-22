// eslint-disable-next-line react/prop-types
const FilterIcon = ({ color = "#020D23" }) => {
    return (
        <svg 
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <g clipPath ="url(#clip0_111_1394)">
        <path d="M7.6 0C6.365 0 5.32 0.798 4.921 1.9H0V3.8H4.921C5.3105 4.902 6.3555 5.7 7.6 5.7C9.1675 5.7 10.45 4.4175 10.45 2.85C10.45 1.2825 9.1675 0 7.6 0ZM12.35 1.9V3.8H19V1.9H12.35ZM12.35 6.65C11.115 6.65 10.07 7.448 9.671 8.55H0V10.45H9.671C10.0605 11.552 11.1055 12.35 12.35 12.35C13.9175 12.35 15.2 11.0675 15.2 9.5C15.2 7.9325 13.9175 6.65 12.35 6.65ZM17.1 8.55V10.45H19V8.55H17.1ZM4.75 13.3C3.515 13.3 2.47 14.098 2.071 15.2H0V17.1H2.071C2.4605 18.202 3.5055 19 4.75 19C6.3175 19 7.6 17.7175 7.6 16.15C7.6 14.5825 6.3175 13.3 4.75 13.3ZM9.5 15.2V17.1H19V15.2H9.5Z" fill={color}/>
        </g>
        <defs>
        <clipPath  id="clip0_111_1394">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
    );
  };
  
  export default FilterIcon;
  