import React from 'react'

export default function Header(props) {
    return (
        <div className="lg:flex lg:items-center lg:justify-between top-0 left-0 right-0 fixed bg-indigo-500 shadow-md z-50">
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-7 text-white sm:text-5xl sm:truncate my-5">
            {props.title}
          </h2>
        </div>
      </div>
    )
}
