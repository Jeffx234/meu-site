import Link from 'next/link'

interface ImageProps {
  srcImage: string
  alt: string
  title: string
  date: string
  name: string
  src: string
}

export function Card({ srcImage, src, alt, title, date, name }: ImageProps) {
  return (
    <div className="p-4 md:w-full ">
      <div className="h-full border-2 border-solid rounded-lg  roundedLg overflow-hidden">
        <div className="w-full">
          <div className="w-full flex p-2">
            <div className="p-2 ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939"
                alt="author"
                className="w-10 h-10 rounded-full overflow-hidden"
              />
            </div>
            <div className="pl-2 pt-2 ">
              <p className="font-bold">{title} </p>
              <p className="text-xs">{date}</p>
            </div>
          </div>
        </div>
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={srcImage}
          alt={alt}
        />

        <div className="p-4">
          <h2 className="trackingWidest text-xs title-font font-bold text-green-400 mb-1 uppercase ">
            {name}
          </h2>

          <div className="flex items-center flexWrap ">
            <Link href={src}>
              <a className="text-green-800  md:mb-2 lg:mb-0">
                <p className="inline-flex items-center">
                  ver no github
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </p>
              </a>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  ">
              <svg
                className="w-4 h-4 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              24
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              89
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
