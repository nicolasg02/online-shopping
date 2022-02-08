import React from 'react'

export default function Slider() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide relative border-2 border-black m-2"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full p-5">
          <div className="flex flex-col md:flex-row">
            <img
              src="https://images.unsplash.com/photo-1624814448280-0f2d7d399b07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80"
              className="block w-auto h-96"
              alt="Wild Landscape"
            />
            <div className="h-100 border-2 border-red-500 w-full p-5">
              <h1></h1>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full p-5">
          <div className="flex flex-col md:flex-row">
            <img
              src="https://images.unsplash.com/photo-1624814448280-0f2d7d399b07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80"
              className="block w-auto h-96"
              alt="Wild Landscape"
            />
            <p>asdsd</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full p-5">
          <div className="flex flex-col md:flex-row">
            <img
              src="https://images.unsplash.com/photo-1624814448280-0f2d7d399b07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80"
              className="block w-auto h-96"
              alt="Wild Landscape"
            />
            <p>asdsd</p>
          </div>
        </div>
      </div>
    </div>
  )
}
