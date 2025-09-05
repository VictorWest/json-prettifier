"use server"
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function main(input: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:  `${systemPropmt}: ${input}`,
  });
  return (response.text);
}

const systemPropmt = `You are a JSON expert. Your job is to analyze JSON code provided by the user, identify any syntax errors, and return a corrected version. 
- Always explain the errors in plain, concise language. 
- Then provide a fixed JSON snippet that is valid and lightweight. 
- Do not add extra fields or values beyond what the user provided, unless absolutely required to make it valid JSON. 
- If the JSON is already valid, confirm it and reformat it in a clean, pretty-printed style. 
- Always output the corrected JSON inside a JSON code block.
`

export async function copyToClipboard(text:string) {
  try {
    const regex = /(\{[\s\S]*?\}|\[[\s\S]*?\])/g;
    const matches = text.match(regex) || [];

    const validJsons = matches.map(m => {
      try {
        return JSON.parse(m);
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