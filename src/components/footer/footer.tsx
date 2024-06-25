import { GithubLogo, UsersThree } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="m-6">
        <div className="flex justify-between items-center bg-white text-black py-1 px-4 mx-10">
          <Link to="/sobre" className="">
            <p className="text-2xl font-light flex-1">Nísia Floresta</p>
          </Link>

          <div className="flex-2 ml-80 ">
            <p className="pt-3">© 2024 Centro de Desenvolvimento Nísia Floresta</p>
          </div>

          <div className="flex-1 flex justify-end gap-3">
            <a target="_blank" href="https://github.com/Centro-D-Nisia-Floresta">
              <GithubLogo size={30} weight="regular" />
            </a>
            <a target="_blank" href="cdnisiafloresta@gmail.com">
              <UsersThree size={30} weight="regular" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 pb-[-50px]">
          <hr className="border-black w-[26%] justify-center mt-3" />
        </div>
      </div>
    </>
  );
}
