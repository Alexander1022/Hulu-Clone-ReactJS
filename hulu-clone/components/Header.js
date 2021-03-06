import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon, UserIcon, SearchIcon, LightningBoltIcon, BadgeCheckIcon, CollectionIcon } from "@heroicons/react/outline";

function Header()
{
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon}/>
                <HeaderItem title="Trending" Icon={LightningBoltIcon}/>
                <HeaderItem title="Verified" Icon={BadgeCheckIcon}/>
                <HeaderItem title="Collections" Icon={CollectionIcon}/>
                <HeaderItem title="Search" Icon={SearchIcon}/>
                <HeaderItem title="Account" Icon={UserIcon}/>
            </div>
            <Image 
            className="object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hulu_logo_2017.svg/2560px-Hulu_logo_2017.svg.png" 
            width={200} 
            height={100} />
        </header> 
    )
}

export default Header;

