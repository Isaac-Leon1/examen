export default function Alert({ setMessage,message, success }) {
  return (
    <>
      <div
        className={`fixed z-50 top-2 right-2 font-regular w-full max-w-screen-md rounded-lg ${
          success ? "bg-green-400" : "bg-red-400"
        } px-4 py-4 text-base text-white`}
        data-dismissible="alert"
      >
        <div className="absolute top-4 left-4">
          {success ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4167 26.9167H20.5834V17.4167H17.4167V26.9167ZM19 14.25C19.4486 14.25 19.8249 14.098 20.1289 13.794C20.4329 13.49 20.5844 13.1142 20.5834 12.6667C20.5823 12.2191 20.4303 11.8434 20.1274 11.5394C19.8244 11.2354 19.4486 11.0834 19 11.0834C18.5514 11.0834 18.1756 11.2354 17.8727 11.5394C17.5697 11.8434 17.4177 12.2191 17.4167 12.6667C17.4156 13.1142 17.5676 13.4905 17.8727 13.7956C18.1777 14.1007 18.5535 14.2521 19 14.25ZM19 34.8334C16.8097 34.8334 14.7514 34.4175 12.825 33.5857C10.8986 32.7539 9.22294 31.6261 7.79794 30.2021C6.37294 28.7782 5.24508 27.1025 4.41436 25.175C3.58363 23.2476 3.16774 21.1892 3.16669 19C3.16563 16.8108 3.58152 14.7525 4.41436 12.825C5.24719 10.8976 6.37505 9.22188 7.79794 7.79794C9.22083 6.37399 10.8965 5.24613 12.825 4.41435C14.7535 3.58258 16.8119 3.16669 19 3.16669C21.1882 3.16669 23.2465 3.58258 25.175 4.41435C27.1035 5.24613 28.7792 6.37399 30.2021 7.79794C31.625 9.22188 32.7534 10.8976 33.5873 12.825C34.4212 14.7525 34.8365 16.8108 34.8334 19C34.8302 21.1892 34.4143 23.2476 33.5857 25.175C32.7571 27.1025 31.6292 28.7782 30.2021 30.2021C28.775 31.6261 27.0993 32.7544 25.175 33.5873C23.2507 34.4201 21.1924 34.8355 19 34.8334Z"
                fill="#00B127"
              />
            </svg>
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3997 4.00899C19.8519 2.97349 18.1482 2.97349 17.6004 4.00899L3.35036 30.9257C3.22256 31.167 3.15935 31.4372 3.16686 31.7102C3.17437 31.9831 3.25234 32.2495 3.3932 32.4834C3.53407 32.7174 3.73303 32.9109 3.97078 33.0452C4.20852 33.1795 4.47696 33.2501 4.75002 33.25H33.25C33.5231 33.2506 33.7916 33.1804 34.0295 33.0462C34.2673 32.9121 34.4663 32.7187 34.6071 32.4847C34.7479 32.2508 34.8257 31.9843 34.8329 31.7114C34.8401 31.4384 34.7764 31.1683 34.6481 30.9272L20.3997 4.00899ZM20.5834 28.5H17.4167V25.3333H20.5834V28.5ZM17.4167 22.1667V14.25H20.5834L20.5849 22.1667H17.4167Z"
                fill="#EE3232"
              />
            </svg>
          )}
        </div>
        <div className="ml-8">
          <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
            {success ? "Exitoso" : "Error"}
          </h5>
          <p className="mt-2 block font-sans text-base font-normal leading-relaxed text-white antialiased">
            {message}
          </p>
        </div>
        <div
          data-dismissible-target="alert"
          data-ripple-dark="true"
          className="absolute top-3 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
        >
          <div role="button" className="w-max rounded-lg p-1" onClick={()=>setMessage('')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
      </div>    
    </>
  );
}
