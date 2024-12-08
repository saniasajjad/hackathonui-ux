import Image from "next/image";
import Link from "next/link";

function Navabar({isAdmin}: {isAdmin?: boolean}) {
  return (
    <div className="bg-[#ffffff]  py-3">
      <div className="flex items-start  md:items-center justify-between py-4 w-full  md:gap-4  max-w-[1440px]  px-5 mx-auto">
        <div className="flex md:flex-row items-start w-full flex-col gap-12  md:items-center  justify-between md:max-w-[75%]  lg:max-w-[50%]  ">
          <div className="flex justify-between w-full md:max-w-[150px] ">
            {!isAdmin && (
            <h1 className="text-[color:var(--primary-dark-500)] text-2xl font-[700] ">
              <Link href={"/"}>MORENT</Link>
            </h1>
            )}
            <Image
              src={"/icons/menu.svg"}
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer block md:hidden"
            />
          </div>
          <div className="flex border  w-full border-[color:var(--secondary-light-100)] px-6 py-3 gap-6 rounded-full items-center  ">
            <label htmlFor="search" className="block min-w-[24px] ">
              <Image
                src={"/icons/search.svg"}
                alt="search"
                width={24}
                height={24}
              />
            </label>
            <input
              type="text"
              name="search"
              id="search"
              className="border-none focus:outline-none w-full"
              placeholder="Search something here."
            />
            <Image
              className="cursor-pointer"
              src={"/icons/filter.svg"}
              alt="filter"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 ">
          <Image
            className="cursor-pointer"
            src={"/icons/heart.svg"}
            alt="heart"
            width={24}
            height={24}
          />
          <div className="relative cursor-pointer  min-w-[24px] ">
            <Image src={"/icons/bell.svg"} alt="bell" width={24} height={24} />
            <span className="absolute top-0 right-0 w-[8px] rounded-full h-[8px] bg-red-600"></span>
          </div>
          <Image
            className="cursor-pointer"
            src={"/icons/setting.svg"}
            alt="setting"
            width={24}
            height={24}
          />
          <Image src={"/images/Profil.png"} alt="user" width={44} height={44} />
        </div>
      </div>
    </div>
  );
}

export default Navabar;
