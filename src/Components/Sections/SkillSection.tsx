import Bash from "../../assets/skills/Bash-Dark.svg";
import Bootstrap from "../../assets/skills/Bootstrap.svg";
import CSS from "../../assets/skills/CSS.svg";
import Django from "../../assets/skills/Django.svg";
import Docker from "../../assets/skills/Docker.svg";
import ExpressJS from "../../assets/skills/ExpressJS-Dark.svg";
import Git from "../../assets/skills/Git.svg";
import Github from "../../assets/skills/Github-Dark.svg";
import GraphQL from "../../assets/skills/GraphQL-Dark.svg";
import HTML from "../../assets/skills/HTML.svg";
import JavaScript from "../../assets/skills/JavaScript.svg";
import Markdown from "../../assets/skills/Markdown-Dark.svg";
import MongoDB from "../../assets/skills/MongoDB.svg";
import Nginx from "../../assets/skills/Nginx.svg";
import NodeJS from "../../assets/skills/NodeJS-Dark.svg";
import Npm from "../../assets/skills/Npm-Dark.svg";
import Postgres from "../../assets/skills/PostgreSQL-Dark.svg";
import Postman from "../../assets/skills/Postman.svg";
import Powershell from "../../assets/skills/Powershell-Dark.svg";
import Python from "../../assets/skills/Python-Dark.svg";
import RabbitMQ from "../../assets/skills/RabbitMQ-Dark.svg";
import React from "../../assets/skills/React-Dark.svg";
import Redux from "../../assets/skills/Redux.svg";
import SQLite from "../../assets/skills/SQLite.svg";
import TailwindCSS from "../../assets/skills/TailwindCSS-Dark.svg";
import TypeScript from "../../assets/skills/TypeScript.svg";
import Ubuntu from "../../assets/skills/Ubuntu-Dark.svg";
import Vercel from "../../assets/skills/Vercel-Dark.svg";
import VIM from "../../assets/skills/VIM-Dark.svg";
import VSCode from "../../assets/skills/VSCode-Dark.svg";

function SkillSection() {
  return (
    <>
      <div className="mt-[5em]" id="skills">
        <div className="w-[1024px] mx-auto">
          <div className="flex items-center justify-center flex-col gap-2">
            <h4 className="uppercase text-[0.7rem] text-slate-500 tracking-widest">
              SKills
            </h4>
            <h2 className="flex items-center gap-2 text-2xl">
              <span>My</span>
              <span className="text-green-cool">Stack</span>
            </h2>
            <p className="w-[300px] text-center text-[0.85rem] text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              blanditiis ipsum ducimus fugiat laudantium nam?
            </p>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-4 text-center">
            <img src={Bash} alt="" />
            <img src={Bootstrap} alt="" />
            <img src={CSS} alt="" />
            <img src={Django} alt="" />
            <img src={Docker} alt="" />
            <img src={ExpressJS} alt="" />
            <img src={Git} alt="" />
            <img src={Github} alt="" />
            <img src={GraphQL} alt="" />
            <img src={HTML} alt="" />
            <img src={JavaScript} alt="" />
            <img src={Markdown} alt="" />
            <img src={MongoDB} alt="" />
            <img src={Nginx} alt="" />
            <img src={NodeJS} alt="" />
            <img src={Npm} alt="" />
            <img src={Postgres} alt="" />
            <img src={Postman} alt="" />
            <img src={Powershell} alt="" />
            <img src={Python} alt="" />
            <img src={RabbitMQ} alt="" />
            <img src={React} alt="" />
            <img src={Redux} alt="" />
            <img src={SQLite} alt="" />
            <img src={TailwindCSS} alt="" />
            <img src={TypeScript} alt="" />
            <img src={Ubuntu} alt="" />
            <img src={Vercel} alt="" />
            <img src={VIM} alt="" />
            <img src={VSCode} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillSection;
