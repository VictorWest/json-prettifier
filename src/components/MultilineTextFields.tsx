"use client"
import * as React from 'react';
import BasicButtons from './BasicButtons';
import { FaCopy } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function MultilineTextFields() {
    const [ input, setInput ] = React.useState<string>("")
    const [ formatted, setFormatted ] = React.useState("")
    const [ isLoading, setIsLoading ] = React.useState(false)
    const [ isCopied, setIsCopied ] = React.useState(false)
    const [ canCopy, setCanCopy ] = React.useState(false)

    const handlePrettify = () => {
        if(input === "" ) return

        setIsLoading(true)

        try {
            setFormatted(JSON.stringify(JSON.parse(input.trim()), null, 4))
            setCanCopy(true)
        } catch (error) {
            setCanCopy(false)
            error instanceof Error ? setFormatted(error.message) : String(error)
        } finally {
            setIsLoading(false) 
        }
    }

    async function copyToClipboard(text:string) {
        try {
            const regex = /(\{[\s\S]*?\}|\[[\s\S]*?\])/g;
            const matches = text.match(regex) || [];

            const validJsons = matches.map(m => {
                try {
                    const data =  JSON.parse(m);
                    setIsCopied(true)

                    setTimeout(() => {
                        setIsCopied(false)
                    }, 2000)
                    return data
                } catch {
                    return null;
                }
            }).filter(Boolean);
        
            await navigator.clipboard.writeText(JSON.stringify(validJsons[0], null, 4))
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    return (
        <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
            <div className='bg-[#303030] rounded-xl h-96 w-1/2'>
                <textarea value={input} onChange={(e) => setInput(e.target.value)} className='resize-none outline-0 text-stone-300 p-5 w-full h-full' placeholder='Enter JSON here'>
                </textarea>
            </div>

            <div className='w-20 space-y-5'>
                <div style={{ opacity: isLoading ? "50%" : "100%"}} onClick={!isLoading ? handlePrettify : undefined}><BasicButtons /></div>
            </div>

            <div className='bg-[#303030] rounded-lg h-96 w-1/2 relative'>
                {canCopy && <div onClick={() => copyToClipboard(formatted)} className='absolute right-5 top-0 bg-[#1565C0] px-3 py-1 text-xs *:flex *:items-center *:gap-1 cursor-pointer hover:opacity-90'>{isCopied ? <span><IoCheckmarkOutline /> Copied!</span> : <span><FaCopy />Copy</span>}</div>}
                <textarea value={isLoading === false ? formatted : "Debugging possible errors..."} readOnly className='resize-none outline-0 text-stone-300 p-5 w-full h-full' placeholder='Your JSON will appear here'>
                </textarea>
            </div>
        </div>    
    );
}