import Image from "next/image";
import { about } from "@/resources/content";
import Card from "@/components/Card";

export default function Page() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="w-full pt-20">
                <div className="w-full mt-20 px-5">
                    <Image src="/logo.jpg" alt="logo" width={200} height={200} className="mt-20 rounded-full border-2 border-gray-100 absolute top-0 left-[50%] transform -translate-x-1/2" />
                    <div className="w-full rounded-xl pt-30 p-5 shadow-md bg-white">
                        <h1 className="text-3xl">{about.title}</h1>
                        <p className="my-5">{about.description}</p>
                    </div>
                </div>
            </div>
            {!about.education.hidden &&
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-fr gap-5 m-5 ">
                    <Card className="col-span-2 flex flex-col justify-between shadow-md p-5 bg-white">
                        <h1 className="text-3xl lg:text-4xl">{about.education.title}</h1>
                        <h2 className="text-md">{about.education.description}</h2>
                    </Card>
                    {about.education.background.map((value, index) => (
                        <Card className="col-span-2 flex flex-col justify-between shadow-md p-5 bg-white" key={index}>
                            <div>
                                <h1 className="text-3xl lg:text-4xl">{value.title}</h1>
                                <h2 className="text-md">{value.description}</h2>
                            </div>
                            <p className="text-md">{value.footer}</p>
                        </Card>
                    ))}
                </div>
            }
        </div>
    );
}