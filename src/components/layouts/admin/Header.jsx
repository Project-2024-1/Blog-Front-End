const Header = () => {
  return (
    <div className="p-5 header">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-Toa">Hello, Lekan</h1>
          <p className="text-sm text-T75">Have a nice day</p>
        </div>
        <div className="flex items-center gap-6">
          <span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0189 7.47509C21.0209 9.40509 19.4526 10.9767 17.5226 10.9787C15.5926 10.9807 14.0209 9.41234 14.0189 7.48234C14.0169 5.55234 15.5853 3.98072 17.5153 3.97872C19.4453 3.97672 21.0169 5.54509 21.0189 7.47509ZM19.0244 12.7672C18.5246 12.8977 18.0246 12.9782 17.5246 12.9787C16.0668 12.9776 14.6687 12.3987 13.6368 11.3689C12.6049 10.3391 12.0231 8.94229 12.0189 7.48442C12.0174 6.01442 12.596 4.68382 13.515 3.69286C13.3333 3.47059 13.1043 3.29166 12.8447 3.1691C12.5851 3.04655 12.3014 2.98345 12.0143 2.98442C10.9143 2.98556 10.0152 3.88649 10.0164 4.98649L10.0167 5.27649C7.04757 6.15957 5.0204 8.89167 5.02361 11.9917L5.02983 17.9917L3.03191 19.9937L3.03294 20.9937L21.0329 20.9751L21.0319 19.9751L19.0298 17.9772L19.0244 12.7672ZM12.036 23.9844C13.146 23.9833 14.0351 23.0923 14.034 21.9823L10.034 21.9865C10.0345 22.5169 10.2458 23.0254 10.6212 23.4001C10.9967 23.7748 11.5056 23.985 12.036 23.9844Z"
                fill="#0A0A0A"
              />
              <circle
                cx="17.5189"
                cy="7.4787"
                r="3.5"
                transform="rotate(-0.0593957 17.5189 7.4787)"
                fill="#4A85F6"
              />
            </svg>
          </span>
          <div className="flex items-center gap-4 pl-6 border-l border-Toa">
            <div className="w-12 h-12 rounded-full">
              <img
                src="https://images.pexels.com/photos/20927624/pexels-photo-20927624/free-photo-of-a-woman-sitting-on-the-floor-with-her-legs-crossed.jpeg"
                alt="avatar"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="text-Toa">
              <h3 className="text-base font-semibold">Lekan Okeowo</h3>
              <p className="text-sm ">Admin</p>
            </div>
          </div>
          <span className="cursor-pointer">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.47763 9.3006L12.0724 13.8858L16.6576 9.29108L18.0691 10.7096L12.0753 16.7158L6.0691 10.7221L7.47763 9.3006Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
