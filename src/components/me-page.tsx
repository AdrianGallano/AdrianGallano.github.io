import AdrianGallno from "../assets/adriangallano.png"
import "../App.css"
import { FlipWords } from "./flip-words"
import html5Image from "../assets/html5.png"
import cssImage from "../assets/css.png"
import jsImage from "../assets/js.png"
import tsImage from "../assets/typescript.png"
import reactImage from "../assets/reactjs.png"
import angularImage from "../assets/angular.png"
import tailwindImage from "../assets/tailwind.png"
import pythonImage from "../assets/python.png"
import csImage from "../assets/cs.png"
import djangoImage from "../assets/django.png"
import phpImage from "../assets/php.png"
import mysqlImage from "../assets/mysql.png"
import postmanImage from "../assets/postman.png"
import { HoverBorderGradient } from "./hover-border-gradient"
import { Github } from "lucide-react"
import { Linkedin } from "lucide-react"

export default function MePage({ callbackChangeTab }: { callbackChangeTab: (tab: string) => void }) {
    function redirectToBuilds() {
        callbackChangeTab("Builds")
    }

    return (
        <>
            <div className="flex flex-col gap-10 h-full w-full items-center justify-center">
                <section className="flex flex-col md:flex-row md:gap-20 justify-center items-center">
                    <div className="flex">
                        <HoverBorderGradient
                            containerClassName="mt-6 rounded-sm"
                            as="div"
                            onClick={redirectToBuilds}
                            className=" dark:bg-[#020817] font-bold dark:text-white flex items-center space-x-2">
                            <div className="h-60">
                                <img src={AdrianGallno} alt="adriangallano" className="max-h-full rounded-full" />
                            </div>
                        </HoverBorderGradient>
                    </div>
                    <div className="flex flex-col flex-1">
                        <div className="flex flex-col text-center items-center md:items-start md:text-left">
                            <h1 id="main-text" className="scroll-m-20 text-4xl  font-extrabold tracking-tight lg:text-5xl">
                                Adrian Cris Gallano
                            </h1>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                <FlipWords words={["Software", "AI"]} />Engineer
                            </h4>
                            <div className="flex gap-6 mx-2 my-4">
                                <a href="https://github.com/AdrianGallano"><Github /></a>
                                <a href="https://www.linkedin.com/in/aidgallano/"><Linkedin /></a>
                            </div>
                            <HoverBorderGradient
                                containerClassName="mt-10 rounded-sm"
                                as="button"
                                onClick={redirectToBuilds}
                                className=" dark:bg-[#020817] font-bold dark:text-white flex items-center space-x-2">
                                <span>Know more</span>
                            </HoverBorderGradient>
                        </div>
                    </div>
                </section >
                <section className="flex justify-center">
                    <ul className="flex flex-wrap justify-center w-2/3">
                        <li><img src={html5Image} alt="html" /></li>
                        <li><img src={cssImage} alt="css" /></li>
                        <li><img src={jsImage} alt="js" /></li>
                        <li><img src={tsImage} alt="ts" /></li>
                        <li><img src={reactImage} alt="react" /></li>
                        <li><img src={angularImage} alt="angular" /></li>
                        <li><img src={tailwindImage} alt="tailwind" /></li>
                        <li><img src={pythonImage} alt="python" /></li>
                        <li><img src={csImage} alt="cs" /></li>
                        <li><img src={djangoImage} alt="django" /></li>
                        <li><img src={phpImage} alt="php" /></li>
                        <li><img src={mysqlImage} alt="mysql" /></li>
                        <li><img src={postmanImage} alt="postman" /></li>
                    </ul>
                </section>
            </div >
        </>
    )
}