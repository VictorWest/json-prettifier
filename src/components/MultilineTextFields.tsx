"use client"
import * as React from 'react';
import BasicButtons from './BasicButtons';
import { copyToClipboard, main } from '@/backend/app';
import { FaCopy } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function MultilineTextFields() {
    const [ input, setInput ] = React.useState<string>("")
    const [ formatted, setFormatted ] = React.useState("")
    const [ isLoading, setIsLoading ] = React.useState(false)
    const [ isCopied, setIsCopied ] = React.useState(false)

    const handlePrettify = async () => {
        if(input === "" ) return
        try {
            setFormatted(JSON.stringify(JSON.parse(input.trim()), null, 4))
        } catch (error) {
            setIsLoading(true)
            const data = await main(input)
            console.log(data)
            setFormatted(data || "")   
            setIsLoading(false)         
        }
    }

    const handleCopy = async () => {
        const hasCopied = await copyToClipboard(formatted)
        if (hasCopied) {
            setIsCopied(true)

            setTimeout(() => {
                setIsCopied(false)
            }, 2000)
        }
    }
    return (
        <div className='flex items-center justify-between gap-5'>
            <div className='bg-[#303030] rounded-xl h-96 w-1/2'>
                <textarea value={input} onChange={(e) => setInput(e.target.value)} className='resize-none outline-0 text-stone-300 p-5 w-full h-full' placeholder='Enter JSON here'>
                </textarea>
            </div>

            <div className='w-20 space-y-5'>
                <div style={{ opacity: isLoading ? "50%" : "100%"}} onClick={!isLoading ? handlePrettify : undefined}><BasicButtons /></div>
            </div>

            <div className='bg-[#303030] rounded-lg h-96 w-1/2 relative'>
                <div onClick={handleCopy} className='absolute right-5 top-0 bg-[#1565C0] px-3 py-1 text-xs *:flex *:items-center *:gap-1 cursor-pointer hover:opacity-90'>{isCopied ? <span><IoCheckmarkOutline /> Copied!</span> : <span><FaCopy />Copy</span>}</div>
                <textarea value={isLoading === false ? formatted : "There appears to be an error in your JSON. We are working out what it is."} readOnly className='resize-none outline-0 text-stone-300 p-5 w-full h-full' placeholder='Your JSON will appear here'>
                </textarea>
            </div>
        </div>    
    );
}