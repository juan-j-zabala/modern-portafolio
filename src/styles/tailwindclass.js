const ngClass = {
    cssnavbar: {
        app__navbar: `w-full flex justify-between items-center py-4 px-8 bg-skin-white-color bg-opacity-25 backdrop-blur-sm border-[1px] border-white/20 fixed z-[2]`,
        app__navbar_log: `flex justify-start items-center`,
        imgcss: `w-[90px] h-5 3xl:w-[180px] 3xl:h-10`,
        app__navbar_links: `flex-1 flex justify-center items-center list-none max-[900px]:hidden`,
        licss: `flex justify-center items-center text-[0.8rem] text-left text-skin-gray-color leading-6 3xl:text-[1.75rem] my-0 mx-4 cursor-pointer flex-col [&>div]:hover:bg-skin-secondary-color `,
        divcss: `w-[5px] h-[5px] bg-transparent rounded-3xl mb-[5px]`,
        acss: `text-skin-gray-color no-underline flex-col uppercase font-medium transition-all ease-in-out duration-300 hover:text-skin-secondary-color`,
        app__navbar_menu: `w-[35px] h-[35px] rounded-[50%] relative flex justify-center items-center bg-skin-secondary-color md2:hidden `,
        svgcss: `text-skin-white-color w-[70%] h-[70%]`,
        divcss2: `fixed top-0 bottom-0 right-0 z-[5] p-4 w-4/5 h-screen flex justify-end items-end flex-col bg-bgWhite bg-skin-white-color bg-cover bg-repeat shadow-ligthshadow md2:hidden`,
        svgcss2: `w-[35px] h-[35px] text-skin-secondary-color my-2 mx-2`,
        app__navbar_links2: `list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col`,
        acss2: `text-skin-gray-color text-base uppercase font-medium transition-all ease-in-out duration-300 hover:text-skin-secondary-color`
    },
    cssheader: {
        app__header: `app__header flex justify-center items-start`,
        idhome: ``,
        app__header_info: ``
    }
}

export default ngClass