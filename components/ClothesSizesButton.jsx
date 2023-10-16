export const ClothesSizesButton = ({size}) => {
    return (
      <li>
        <button className="border-[1.5px] border-[#00000022] w-12 h-8 rounded-sm text-center  hover:bg-black hover:text-white transition-colors">
          {size}
        </button>
      </li>
    );
};