import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Sobre() {
  return (
    <>
      <div className="m-6">
        <div className="gap-5 w-full p-4 flex text-center">
          <div className="w-full flex justify-center">
            <img src="src/assets/nisia.png" alt="Logo Nisía Floresta" className="w-80 rounded-md" />
          </div>

          <div className="flex flex-col justify-center leading-6 ">
            <h1 className="text-4xl font-semibold p-2">Centro de Desenvolvimento Nisía Floresta</h1>
            <p className="mb-5">Educação de qualidade para um futuro brilhante!</p>
            <p className="text-justify">
              Nosso projeto busca promover a igualdade de gênero e empoderar mulheres e meninas. Utilizando a tecnologia, queremos enfrentar os desafios do mercado de trabalho, identificando barreiras e promovendo oportunidades justas. Através da nossa aplicação, ofereceremos recursos educacionais, mentoria e palestras, contribuindo para o crescimento pessoal e profissional das mulheres. Nosso objetivo é criar um ambiente mais inclusivo, onde todas tenham as mesmas chances de sucesso.
            </p>
            <p className="text-justify mt-2">
              Escolhemos o nome Nísia Floresta em homenagem a Nísia Floresta Brasileira Augusta, pseudônimo de Dionísia Gonçalves Pinto (1810-1885). Ela foi uma escritora, educadora e feminista brasileira, pioneira na luta pelos direitos das mulheres e pela educação feminina no Brasil. Nísia Floresta foi uma figura visionária e corajosa, que dedicou sua vida à causa da educação e dos direitos das mulheres. Sua trajetória inspiradora reflete os valores e objetivos do nosso projeto, que busca
              empoderar mulheres e promover a igualdade de gênero.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <h2 className="text-3xl font-medium mb-6 p-2">Quem Somos</h2>

          <div className="flex flex-row gap-6 p-3">
            <div className="border border-bright-turquoise-200 hover:border-bright-turquoise-500 rounded-md w-56 p-12">
              <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre+N%C3%B3s_2/DSCF0184-500x500.jpg" alt="Beatriz" />
              <h3 className="text-lg font-medium mt-2">Beatriz Alves</h3>
              <p className="text-sm">Desenvolvedora FullStack JavaScript</p>
              <div className="flex gap-2 mt-3 justify-center">
                <a target="_blanck" href="https://www.linkedin.com/in/beatrizalsilva/" className="hover:text-bright-turquoise-500">
                  <LinkedinLogo size={30} weight="light" />
                </a>
                <a target="_blanck" href="https://github.com/beatrizalsilva" className="hover:text-bright-turquoise-500">
                  <GithubLogo size={30} weight="light" />
                </a>
              </div>
            </div>

            <div className="border border-bright-turquoise-200 hover:border-bright-turquoise-500 rounded-md w-56 p-12">
              <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre+N%C3%B3s_2/DSCF0246-500x500.jpg" alt="Christian" />
              <h3 className="text-lg font-medium mt-2">Christian Alvim</h3>
              <p className="text-sm">Desenvolvedor FullStack JavaScript</p>
              <div className="flex gap-2 mt-3 justify-center">
                <a target="_blanck" href="https://www.linkedin.com/in/christian-a-8a4084137/" className="hover:text-bright-turquoise-500">
                  <LinkedinLogo size={30} weight="light" />
                </a>
                <a target="_blanck" href="https://github.com/christianfelps" className="hover:text-bright-turquoise-500">
                  <GithubLogo size={30} weight="light" />
                </a>
              </div>
            </div>

            <div className="border border-bright-turquoise-200 hover:border-bright-turquoise-500 rounded-md w-56 p-12">
              <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre+N%C3%B3s_2/DSCF0190-500x500%20(1).jpg" alt="Ingrid" />
              <h3 className="text-lg font-medium mt-2">Ingrid Dias</h3>
              <p className="text-sm">Desenvolvedora FullStack JavaScript</p>
              <div className="flex gap-2 mt-3 justify-center">
                <a target="_blanck" href="https://www.linkedin.com/in/ingrid-dias-souza" className="hover:text-bright-turquoise-500">
                  <LinkedinLogo size={30} weight="light" />
                </a>
                <a target="_blanck" href="https://github.com/ingrid-dias" className="hover:text-bright-turquoise-500">
                  <GithubLogo size={30} weight="light" />
                </a>
              </div>
            </div>

            <div className="border border-bright-turquoise-200 hover:border-bright-turquoise-500 rounded-md w-56 p-12">
              <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre+N%C3%B3s_2/D75F0B2E-FA28-490F-AD1E-C1986F493DB5_1_201_a-500x500.jpg" alt="Lucas" />
              <h3 className="text-lg font-medium mt-2">Lucas Cardoso</h3>
              <p className="text-sm">Desenvolvedor FullStack JavaScript</p>
              <div className="flex gap-2 mt-3 justify-center">
                <a target="_blanck" href="https://www.linkedin.com/in/lucas-henrique-ferreira-cardoso-/" className="hover:text-bright-turquoise-500">
                  <LinkedinLogo size={30} weight="light" />
                </a>
                <a target="_blanck" href="https://github.com/lucashfcardoso" className="hover:text-bright-turquoise-500">
                  <GithubLogo size={30} weight="light" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-6 mt-7 justify-center p-3 mb-6">
            <div className="border border-bright-turquoise-200 hover:border-bright-turquoise-500 rounded-md w-56 p-12">
              <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre+N%C3%B3s_2/85A4359D-DD1D-4244-8265-E32D05AB6CE2.jpeg" alt="Marcelo" />
              <h3 className="text-lg font-medium mt-2">Marcelo Henrique</h3>
              <p className="text-sm">Desenvolvedor FullStack JavaScript</p>
              <div className="flex gap-2 mt-3 justify-center">
                <a target="_blanck" href="https://www.linkedin.com/in/marcelohsoares/" className="hover:text-bright-turquoise-500">
                  <LinkedinLogo size={30} weight="light" />
                </a>
                <a target="_blanck" href="https://github.com/Marshel0" className="hover:text-bright-turquoise-500">
                  <GithubLogo size={30} weight="light" />
                </a>
              </div>
            </div>

            <div className="border border-bright-turquoise-200 hover:border-bright-turquoise-500 rounded-md w-56 p-12">
              <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre%20n%C3%B3s/milena500.png?updatedAt=1717691735278" alt="Milena" />
              <h3 className="text-lg font-medium mt-2">Milena Semanaka</h3>
              <p className="text-sm">Desenvolvedora FullStack JavaScript</p>
              <div className="flex gap-2 mt-3 justify-center">
                <a target="_blanck" href="https://www.linkedin.com/in/msemanaka/" className="hover:text-bright-turquoise-500">
                  <LinkedinLogo size={30} weight="light" />
                </a>
                <a target="_blanck" href="https://github.com/msemanaka" className="hover:text-bright-turquoise-500">
                  <GithubLogo size={30} weight="light" />
                </a>
              </div>
            </div>

            <div className="border border-bright-turquoise-200 hover:border-bright-turquoise-500 rounded-md w-56 p-12">
              <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre+N%C3%B3s_2/977A07B9-9A33-4397-8380-7F86390DC51A_1_201_a.jpeg" alt="Pamela" />
              <h3 className="text-lg font-medium mt-2">Pamela Rodrigues</h3>
              <p className="text-sm">Desenvolvedora FullStack JavaScript</p>
              <div className="flex gap-2 mt-3 justify-center">
                <a target="_blanck" href="https://www.linkedin.com/in/pamelarodriguesqueiroz/" className="hover:text-bright-turquoise-500">
                  <LinkedinLogo size={30} weight="light" />
                </a>
                <a target="_blanck" href="https://github.com/PamelaZuni" className="hover:text-bright-turquoise-500">
                  <GithubLogo size={30} weight="light" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
