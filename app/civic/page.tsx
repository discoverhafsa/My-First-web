import Image from "next/image";
import Link from "next/link"
export default function Civic(){
    return(
        <div>
            <div className="text-center">
                <div className="text-black text-5xl font-bold py-2">Honda Civic </div>

                <div className="flex justify-center items-center py-10 px-10">
                    <Image src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254" alt="Honda Civic" width={420} className="border-black" />
                </div>
                    <div className="flex justify-center items-center gap-3 py-2 px-2">
                        <button className="text-blue-700 bg-white border rounded-lg border-blue-800 hover:bg-blue-600">
                            Book a test drive</button>
                        <button className="text-blue-700 bg-white border rounded-lg border-blue-800 hover:bg-blue-600">
                            Request bank finance</button>
                        <button className="text-blue-700 bg-white border rounded-lg border-blue-800 hover:bg-blue-600">
                            Visit place</button>
                        <button className="text-blue-700 bg-white border rounded-lg border-blue-800 hover:bg-blue-600">
                            Car inspection</button>
                    </div>
                    <div className="flex justify-center font-bold text-2xl">
                        Vehicle Discription
                    </div>
                    <div >
                    <p><b>Number of door</b> 4 <b>Enginee</b> 1800CC <b>Condition</b> 8.5 / 10 
                            <b>Driven</b> 9,500KM <b>Suspension Type</b> soft suspension <b>Avg</b> 13km per ltr
                            <b>Transmission</b> Automatic <b>Fuel Type</b> High Octane</p>
                    </div>
                    <div className="text-3xl text-green-500 font-semibold py-2 px-2">
                        <span>
                            PKR 86,50,000
                        </span>
                    </div>
                    <button className="bg-blue-600 text-black rounded-3xl py-2 px-2">
                            <Link href="/payment">
                            Make Payment</Link>
                    </button>
            </div>
        </div>
    );
}