import { Envelope, GithubLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="mx-auto bg-gradient-to-b from-sky-100 to-magenta-/-fuchsia-100 bg-left bg-cover ">
        <div className="flex justify-between items-center text-black py-1 px-4 mx-20 mt-10 ">
          <Link to="/sobre" className=" items-center">
            <p className="text-2xl font-medium">NÍSIA FLORESTA</p>
          </Link>
          <div className="flex-1 flex justify-center ml-60">
            <Link to="/contato" className="hover:underline font-semibold">
              Fale conosco
            </Link>
          </div>

          <div className="flex-1 flex justify-end gap-3 p-2">
            <a target="_blank" href="https://github.com/Centro-D-Nisia-Floresta">
              <GithubLogo size={36} weight="regular" />
            </a>
            <a target="_blank" href="https:/cdnisiafloresta@gmail.com">
              <Envelope size={36} weight="regular" />
            </a>
          </div>
        </div>

        <div className="text-xs pb-5 flex flex-col justify-center items-center gap-0 ">
          <hr className="border-black w-[26%] justify-center mt-3" />
          <p className="pt-3">© 2024 Centro de Desenvolvimento Nísia Floresta</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
