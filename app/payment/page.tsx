import Link from "next/link";
export default function Payment(){
    return(
        <div>
        <h1 className="text-5xl font-semibold text-center uppercase">Entre your details</h1>
        
        <div>
            <form className="flex mt-10 gap-5 justify-center flex-col items-center bg-slate-500 h-96">
                <input type="email" className="py-2 px-3 rounded-2xl w-2/5 border border-red-400 "
                placeholder="Entre your Email" />
                <input type="Account number" className="py-2 px-3 rounded-2xl w-2/5 border border-red-400 "
                placeholder="Entre your Account number" />
                <input type="CVV" className="py-2 px-3 rounded-2xl w-2/5 border border-red-400 "
                placeholder="CVV" />
                <input type="password" className="py-2 px-3 rounded-2xl w-2/5 border border-red-400 "
                placeholder="Entre your Password" />
               <Link href="/thankyou"> <button className=" py-3 px-7 rounded-lg bg-blue-950 text-white"> 
                Place your order</button> </Link>
            </form>
        </div>
        </div>
    );
}