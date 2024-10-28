import Link from "next/link"
export default function Footer(){
    return(
        <footer className="flex justify-center bg-blue-800 text-white gap-3">
            <div> Made By Hafsa</div>
           <Link href="https://pk.linkedin.com/in/hafsa-ahmed-0467a3199">Linkedin</Link>
        </footer>
    )
}