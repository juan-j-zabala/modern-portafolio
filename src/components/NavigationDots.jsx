const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation flex justify-center items-center flex-col p-4">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a
            className={`app__navigation_dot w-[10px] h-[10px] rounded-[50%] m-2 transition-colors ease-in-out duration-200 hover:bg-skin-secondary-color 3xl:w-5 3xl:h-5 ${
              active === item ? "bg-skin-secondary-color" : "bg-anothergrat"
            }`}
            key={item + index}
            href={`#${item}`}
          /> 
        ))}
    </div>
  );
};

export default NavigationDots;
