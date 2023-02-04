import React from "react";
import Memo from "./card";

const MemoWrapper = ({ filtered }) => {
    return (
        <div className="wrapper">
            {
                filtered.map((memo, index) => (
                    <Memo key={index} intro={memo.intro} title={memo.title} banner={memo.banner} link={memo.memId} />
                ))
            }
        </div>
    )
}

export default MemoWrapper;