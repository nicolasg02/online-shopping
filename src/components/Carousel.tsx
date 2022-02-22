function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden rounded">
        <a href="?" className="carousel-item active relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            className="block w-full"
            alt="Wild Landscape"
          />
        </a>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
            className="block w-full"
            alt="Camera"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
            className="block w-full"
            alt="Exotic Fruits"
          />
        </div>
      </div>
    </div>
  )
}

export default Carousel