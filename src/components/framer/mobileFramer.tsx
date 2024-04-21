import { useEffect, useRef, useState } from "react";

import { BiMenu } from "react-icons/bi";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { AnimatePresence, motion } from 'framer-motion';
import { Tab } from "../../hooks/navUse-tabs";

const transition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.20,
}

type Props = {
    selectedTabIndex: number;
    tabs: Tab[];
    setSelectedTab: (input: [number, number]) => void;
};

const Tabs = ({ tabs, selectedTabIndex, setSelectedTab }: Props): JSX.Element => {
    const [ toggle, setToggle ] = useState(false);

    const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>([],);

    useEffect(() => {
        setButtonRefs((prev) => prev.slice(0, tabs.length));
    }, [tabs.length]);

    const navRef = useRef<HTMLDivElement>(null);
    const navRect = navRef.current?.getBoundingClientRect();

    const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

    const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null)
    const hoveredRect = buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();


    return (
        <div className="md:hidden flex justify-center">
            <div className={`text-2xl text-purple-700/80 cursor-pointer absolute top-2 left-2 flex items-center justify-center outline-none bg-white rounded-xl p-2 shadow-xl`} onClick={() => setToggle(!toggle)}>
                <BiMenu />
            </div>
            {/* <div className={` text-purple-700/80 bottom-0 top-0 h-full left-0 fixed items-center flex-shrink-0 flex transition-all duration-500 ease-in-out`}> */}
                
                
                <motion.div transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }} ref={navRef} className={`shadow-2xl flex flex-col bottom-0 top-0 h-full bg-white items-center fixed justify-start overflow-hidden py-4 px-1 gap-2 z-10 w-[60%] left-0 ${toggle ? 'left-0 ' : 'left-[-100%]'}`} onPointerLeave={(_e) => setHoveredTabIndex(null)}>
                    <div className={`text-2xl text-purple-700/80 cursor-pointer absolute bottom-3 right-2 flex items-center justify-center outline-none bg-white rounded-xl p-2 shadow-xl`} onClick={() => setToggle(!toggle)}>
                        <MdKeyboardArrowLeft />
                    </div>
                    {/* Add your sidebar content here */}
                    {/* You can use conditional rendering to show/hide sidebar items */}
                    {tabs.map((item, i) => {
                        const isActive = hoveredTabIndex === i || selectedTabIndex === i;

                        return (
                            <motion.button key={i} className={`flex flex-row h-[50px] items-center gap-3 text-xs outline-none lg:text-sm py-2 px-2 w-full rounded-lg cursor-pointer font-medium z-20 ${isActive ? 'text-white bg-purple-700/80' : 'text-purple-700/80'}`} ref={(el) => (buttonRefs[i] =el)} onPointerEnter={() => {setHoveredTabIndex(i)}} onFocus={() => {setHoveredTabIndex(i)}} onClick={() => {setSelectedTab([i, i > selectedTabIndex ? i : -1])}} >
                                {item.icon}
                                <span>{item.label}</span>
                            </motion.button>
                        )
                    })}

                    <AnimatePresence>
                        {hoveredRect && navRect && (
                            <motion.div key={'hover'} className="absolute h-[0%] rounded-lg p-1 bg-transparent" initial={{ x: hoveredRect.left - navRect.left, y: hoveredRect.top - navRect.top, width: hoveredRect.width, height: hoveredRect.height, opacity: 0, }} animate={{ x: hoveredRect.left - navRect.left, y: hoveredRect.top - navRect.top, width: hoveredRect.width, height: hoveredRect.height, opacity: 1, }} exit={{ x: hoveredRect.left - navRect.left, y: hoveredRect.top - navRect.top, width: hoveredRect.width, height: hoveredRect.height, opacity: 0, }} transition={transition} />
                        )}
                    </AnimatePresence>

                {selectedRect && navRect && (
                    <motion.div className={`absolute rounded-lg z-10 h-[0%] bg-transparent hover:text-white`} initial={false} animate={{ width: selectedRect.width * 1, x: `calc(${selectedRect.left }px + 0%)`, y: `calc(${selectedRect.top - navRect.top}px + 10%)`, opacity: 1, }} transition={transition} />
                )}

               
                </motion.div>
            {/* </div> */}
        </div>
    );
};

export const mobFramer = { Tabs };              