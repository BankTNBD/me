import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";
import { DynamicIcon } from 'lucide-react/dynamic';
import { home } from "@/resources/content"
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="mx-10 text-center text-6xl lg:text-8xl">{home.title}</h1>
        <h3 className="mx-10 text-center text-3xl lg:text-4xl">{home.description}</h3>
        <Link className="my-10 m-5 rounded-2xl bg-[var(--color-primary-background)] hover:bg-[var(--color-secondary-background)] shadow-md" href={home.button.path}>
          <button className="w-max m-3 mx-5">
            {home.button.title}
          </button>
        </Link>
        <ChevronDown className="absolute bottom-5 size-10 animate-bounce" />
      </div>
      {!home.link.hide &&
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-fr gap-5 m-5">
          {(home.link.title || home.link.description) &&
            <Card className="col-span-2 flex flex-col justify-center shadow-md">
              <h1 className="text-center text-4xl lg:text-6xl">{home.link.title}</h1>
              <h2 className="text-center text-md lg:text-2xl">{home.link.description}</h2>
            </Card>
          }
          {home.link.links.map((value, index) => (
            <Card key={index} className="aspect-square shadow-md rounded-xl transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <Link className="h-full w-full" href={value.path}>
                <button className="h-full w-full rounded-xl p-0 flex justify-center items-center" style={value.style}>
                  <div>
                    <DynamicIcon name={value.icon ?? "globe"} style={{ width: "48px", height: "48px" }} className="m-2 text-white" />
                    <p className="text-center bottom-0 text-white">{value.title}</p>
                  </div>
                </button>
              </Link>
            </Card>
          ))}
          {(home.link.contact.title || home.link.contact.description) &&
            <Card className="col-span-2 flex flex-col justify-between shadow-md p-5">
              <div>
                <h1 className="text-3xl lg:text-5xl">{home.link.contact.title}</h1>
                <h2 className="text-md">{home.link.contact.description}</h2>
              </div>
              <a href={"mailto:" + home.link.contact.email}>{home.link.contact.email}</a>
            </Card>
          }
        </div>
      }
    </div>
  );
}