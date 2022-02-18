import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa"

function Footer() {
  return (
    <footer className="items-center justify-center p-4 footer bg-base-300 text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col justify-center w-full gap-4 md:place-self-center md:justify-self-end">
        <a className="text-lg md:text-xl" href="?">
          <FaTwitter />
        </a>
        <a className="text-lg md:text-xl" href="?">
          <FaYoutube />
        </a>
        <a className="text-lg md:text-xl" href="?">
          <FaFacebook />
        </a>
      </div>
    </footer>
  )
}

export default Footer
