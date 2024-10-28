
import Image from "next/image"
export default function Navbar(){
    return(
        <header>
        <nav  className="flex bg-blue-900 w-full h-20 gap-3">
            <div>
            <Image alt="Pakwheels logo white"  height={150} width={150}
             src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg"/>
            
            </div>
            <div className=" flex  p-2 m-4 justify-centre items-center 
             text-white gap-4">
                <div>Used Cars</div>
                <div>New Cars</div>
                <div>Bikes</div>
                <div>Auto Store</div>
                <div>Video</div>
                <div>Forum</div>
                <div>Blog</div>
                <div>More</div>   
                <button className="bg-red-800 gap-2 text-white">Post An Add</button> 

            </div>
        </nav>
        </header>
    );
}