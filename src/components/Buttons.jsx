import { useState } from 'react'
import './Buttons.css'

export default function Buttons() {
    const [text, setText] = useState("");
    const handleclick = () => {
        if(text) {
            setText(text.toUpperCase())
        }
    }
    const handlechange = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            
            <div className="justify-center align-center flex ">
                <textarea className="w-[60%] h-[50vh] border rounded-[1em] p-[10px] bg-[rgba(0,0,255,0.1)]" value={text} onChange={handlechange} rows="3"></textarea>
            </div>
            <div className="justify-center align-center flex mt-[20px] gap-[2em] ">
                <button className="border rounded-[5px] cursor-pointer bg-cyan-500" type="button" onClick={handleclick}>
                    Click to uppercase
                </button>
            </div>
            <div className="justify-center align-center flex gap-[2em] ml-[19em] mt-[2em] mr-[18.25em] bg-[rgba(255,255,255,0.7)] rounded-t-[1em]">
                <h1 className="relative right-[16em]">Preview</h1>    
                <p>{text.length} characters and {text.split(" ").length} words</p>
                <p>{0.000 * text.length} minutes read</p> 
            </div>
            <p className="h-[20vh] ml-[19em] w-[61%] border justify-center items-center flex  p-[10px] overflow-hidden overflow-y-scroll OverFlow bg-[rgba(0,0,0,0.8)] text-[white]">{text}</p>
        </div>
    )
}