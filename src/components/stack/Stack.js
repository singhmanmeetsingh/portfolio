import React from 'react';
import "./Stack.css";
import Javascript from "../../assets/javascript.svg";
import TypeScript from "../../assets/typescript.svg";
import CSharp from "../../assets/CSharp.svg";
import ReactImg from "../../assets/react.svg";
import NextImg from "../../assets/next.svg";
import ReduxImg from "../../assets/redux.svg";
import Sql from "../../assets/sql.svg";
import Mongo from "../../assets/mongo.svg";
import Rust from "../../assets/rust.svg";
import Node from "../../assets/node.svg";

function Stack() {
  // these images from svgrepo
  let items = [
    {imgsrc: Javascript , imgTitle: "Javascript"},
    {imgsrc: TypeScript, imgTitle: "TypeScript"},
    {imgsrc: CSharp, imgTitle: "CSharp"},
    {imgsrc: ReactImg, imgTitle: "Reactjs"},
    {imgsrc: NextImg, imgTitle: "Nextjs"},
    {imgsrc: ReduxImg , imgTitle: "Redux"},
    {imgsrc: Sql, imgTitle: "SQL"},
    {imgsrc: Mongo, imgTitle: "MongoDB"},
    {imgsrc: Rust, imgTitle: "Rust"},
    {imgsrc: Node, imgTitle: "Node js"}

  ]
  return (
    <div className='stack'>
      <div className='stack-pad'>
        <h2 className='stack-heading'>My Stack...</h2>
        <div className='stack-container stack-heading'>
            <div className='stack-block'>
                {
                  items.map((obj) => <img src={obj.imgsrc} title={obj.imgTitle}/>)
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stack
