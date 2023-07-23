const ngClass = {
    cssnavbar: {
        app__navbar: `w-full flex justify-between items-center py-4 px-8 bg-skin-white-color bg-opacity-25 backdrop-blur-sm border-[1px] border-white/20 fixed z-20`,
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
        app__header: `relative bg-bgIMG bg-cover bg-repeat bg-center idhome  flex-1 w-full h-full flex-row pt-24 pb-24 px-0 3xl:pt-32 max-[1200px]:flex-col max-[450px]:pt-24 max-[450px]:pb-4 max-[450px]:px-8 flex justify-center items-start`,
        idhome: ``,
        app__header_info: `flex-[0.65_1_0%] flex flex-col justify-start items-start h-full max-[2000px]:w-full mr-0`,
        app__header_badge: `w-full flex justify-end items-end flex-col`,
        badge_cmp: `flex justify-center items-center py-4 px-8 border-white rounded-[15px] flex-row w-auto shadow-shadow2`,
        span: `text-[2.5rem] 3xl:text-[5rem]`,
        p: `text-sm text-left text-skin-gray-color leading-6 3xl:text-[1.75rem]`,
        h1: `text-[2.75rem] font-extrabold text-center text-skin-black-color capitalize [&>span]:text-skin-secondary-color 3xl:text-[4rem] msm:text-[2rem]`,
        tag_cmp: `py-4 px-8 border-white rounded-[15px] w-auto shadow-shadow2 flex justify-center items-center flex-col mt-12`,
        p2: `text-sm text-skin-gray-color leading-6 3xl:text-[1.75rem] w-full uppercase text-right`,
        app__header_img: `flex-1 h-full flex justify-end items-end relative max-[1200px]:my-8 max-[1200px]:mx-8`,
        overlay_circle: `w-full object-contain absolute left-0 right-0 bottom-0 h-[90%] z-0`,
        app__header_circles: `flex-[0.75_1_0%] flex flex-col max-[1200px]:flex-row justify-evenly items-center h-full m-auto [&>*:nth-child(2)]:m-7 [&>*:nth-child(2)]:w-36 [&>*:nth-child(2)]:h-36 [&>*:nth-child(3)]:w-16 [&>*:nth-child(3)]:h-16 
        3xl:[&>*:nth-child(1)]:w-96 3xl:[&>*:nth-child(1)]:h-96 3xl:[&>*:nth-child(2)]:w-44 3xl:[&>*:nth-child(2)]:h-44 3xl:[&>*:nth-child(3)]:w-52 3xl:[&>*:nth-child(3)]:h-52`,
        div: `cicle_cmp flex justify-center items-center w-[100px] h-[100px] rounded-[50%] bg-skin-white-color shadow-shadow2`
    }
}

export default ngClass