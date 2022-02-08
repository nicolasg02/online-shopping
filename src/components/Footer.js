import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="text-center text-white bg-black">
      <div className="container mx-auto pt-9">
        <div className="flex justify-center mb-9">
          <a href="#!" className="mr-9">
            <FaFacebookF />
          </a>
          <a href="#!" className="mr-9">
            <FaTwitter />
          </a>
          <a href="#!" className="mr-9">
            <FaInstagram />
          </a>
          <a href="#!" className="mr-9">
            <FaLinkedin />
          </a>
          <a href="#!">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="text-center text-white p-4">© 20XX Copyright</div>
    </footer>
  )
}
