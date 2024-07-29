import { FaNetworkWired, FaUserSecret, FaBug, FaShieldAlt } from "react-icons/fa"
import { IoIosConstruct, IoMdHelp } from "react-icons/io"
import { RiVirusFill, RiSpyFill } from "react-icons/ri"
import { SiBurpsuite, SiMetasploit, SiLinuxfoundation, SiNginx } from "react-icons/si"
import { IconContainer } from "./IconContainer"

export const TechnologiesSection = () => {
  return (
    <section id="tecnologias" className="w-full min-h-screen flex justify-center items-center gap-x-20" data-aos="zoom-in-up">
      <div className="flex flex-col items-center justify-center mt-10 max870:mt-20 w-[600px]">
        <h2 className="text-title font-semibold text-primary-blue tracking-[2px] mt-8 max620:text-[2.5rem] max480:text-[2rem]">Tecnologias</h2>
        <p className="text-[1.1rem] w-[700px] mb-10 mt-4 text-center max720:w-[600px] max620:w-[500px] max550:w-[450px] max480:w-[350px] max400:text-[15px] max400:w-[300px]">
          Desenvolvi um amplo conjunto de habilidades em várias ferramentas de pentest ao longo desse tempo, que abrangem desde técnicas de exploração até metodologias de segurança, incluindo:
        </p>
        <div className="flex flex-row items-center justify-center gap-x-10 border-b-2 border-dashed pb-4 border-soft-blue flex-wrap w-[900px] gap-y-10 max870:w-[600px] max620:w-[500px] max550:w-[450px] max480:w-[350px] max367:w-[300px]">
          <IconContainer>
            <SiLinuxfoundation className="text-icons text-blue-600 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Kali Linux</p>
          </IconContainer>

          <IconContainer>
            <SiNginx className="text-icons text-green-600 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Nmap</p>
          </IconContainer>

          <IconContainer>
            <FaNetworkWired className="text-icons text-gray-600 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Network Analysis</p>
          </IconContainer>

          <IconContainer>
            <SiMetasploit className="text-icons text-orange-700 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Metasploit</p>
          </IconContainer>

          <IconContainer>
            <SiBurpsuite className="text-icons text-pink-700 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Burp Suite</p>
          </IconContainer>

          <IconContainer>
            <FaBug className="text-icons text-red-600 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Bug Bounty</p>
          </IconContainer>

          <IconContainer>
            <RiVirusFill className="text-icons text-purple-800 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Malware Analysis</p>
          </IconContainer>

          <IconContainer>
            <FaUserSecret className="text-icons text-black transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Ethical Hacking</p>
          </IconContainer>

          <IconContainer>
            <FaShieldAlt className="text-icons text-green-600 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Security Audits</p>
          </IconContainer>

          <IconContainer>
            <RiSpyFill className="text-icons text-gray-500 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Threat Hunting</p>
          </IconContainer>

          <IconContainer>
            <IoIosConstruct className="text-icons text-yellow-600 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Security Tools</p>
          </IconContainer>
        </div>
      </div>
    </section>
  )
}
