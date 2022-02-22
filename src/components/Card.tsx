import { IProduct } from "../interfaces"

function Card({
  title,
  price,
  onsale,
  available,
  category,
  img,
  description,
}: IProduct) {
  return (
    <a
      href="?"
      className="card w-auto bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-all rounded"
    >
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {onsale && <div className="badge badge-success">SALE</div>}
        </h2>
        <p className="line-clamp-3">{description}</p>
        <div className="justify-end card-actions">
          <div className="badge badge-outline">{category}</div>
          {!available && (
            <div className="badge badge-outline">Out of Stock</div>
          )}
        </div>
      </div>
    </a>
  )
}

export default Card
