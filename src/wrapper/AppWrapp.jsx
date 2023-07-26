import { NavigationDots, SocialMedia } from "../components/Navbar"

const AppWrapp = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container w-full min-h-full flex flex-row ${classNames}`}>
        <SocialMedia/>
        <div className="app__wrapper flex-1 w-full flex-col py-16 px-8 max-[450px]:pt-16 max-[450px]:px-4 max-[450px]:pb-8 flex justify-center items-center">
            <Component />
            <div className="copyrigth pt-8 px-0 pb-0 flex flex-col justify-end items-end">
                <p className="uppercase text-skin-gray-color-color text-sm text-left leading-6 3xl:text-base">@2023 JUAN</p>
                <p className="uppercase text-skin-gray-color-color text-sm text-left leading-6 3xl:text-base">All rights reserved</p>
            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrapp