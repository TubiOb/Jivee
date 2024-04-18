import { useEffect, useRef, useState } from "react";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";

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
        <div className="hidden md:flex justify-center">
            <div className={`rounded-xl text-purple-700/80 w-14 items-center justify-center flex-shrink-0 flex flex-col shadow-xl ${toggle ? 'h-[60%] gap-7' : 'h-[9%] gap-0'} flex-shrink-0 transition-all duration-500 ease-in-out`}>
                <motion.div transition={{ type: 'tween', ease: 'easeInOut' }} className={`text-2xl w-14 cursor-pointer bg-white rounded-xl p-4 ${toggle ? 'shadow-xl' : 'shadow-xl'}`} onClick={() => setToggle(!toggle)}>
                    {toggle ? <BiMenuAltLeft /> : <BiMenu />}
                </motion.div>
                
                <motion.div ref={navRef} transition={{ type: 'spring', ease: 'easeInOut', duration: 0.40 }} className={`rounded-xl shadow-2xl flex flex-col bg-white items-center justify-center py-4 px-1 gap-2 w-14 ${toggle ? 'h-full flex' : 'h-0 hidden'}`} onPointerLeave={(e) => setHoveredTabIndex(null)}>
                    {/* Add your sidebar content here */}
                    {/* You can use conditional rendering to show/hide sidebar items */}
                    {tabs.map((item, i) => {
                        const isActive = hoveredTabIndex === i || selectedTabIndex === i;

                        return (
                            <motion.button key={i} className={`flex flex-col h-[10%] items-center gap-1 w-[54px] text-xs lg:text-sm py-2 px-2 rounded-lg cursor-pointer font-medium z-20 ${isActive ? 'text-white bg-purple-700/80' : 'text-purple-700/80'}`} ref={(el) => (buttonRefs[i] =el)} onPointerEnter={() => {setHoveredTabIndex(i)}} onFocus={() => {setHoveredTabIndex(i)}} onClick={() => {setSelectedTab([i, i > selectedTabIndex ? i : -1])}} >
                                {item.icon}
                                <span>{item.label}</span>
                            </motion.button>
                        )
                    })}

                    {/* <AnimatePresence>
                        {hoveredRect && navRect && (
                            <motion.div key={'hover'} className="absolute h-[10%] rounded-lg p-1 bg-transparent" initial={{ x: hoveredRect.left - navRect.left, y: hoveredRect.top - navRect.top, width: hoveredRect.width, height: hoveredRect.height, opacity: 1, }} animate={{ x: hoveredRect.left - navRect.left, y: hoveredRect.top - navRect.top, width: hoveredRect.width, height: hoveredRect.height, opacity: 1, }} exit={{ x: hoveredRect.left - navRect.left, y: hoveredRect.top - navRect.top, width: hoveredRect.width, height: hoveredRect.height, opacity: 1, }} transition={transition} />
                        )}
                    </AnimatePresence> */}

                {/* {selectedRect && navRect && (
                    <motion.div className={`absolute rounded-lg z-10 h-[8%] my-auto bg-transparent hover:text-white`} initial={false} animate={{ width: selectedRect.width * 1, x: `calc(${selectedRect.left - navRect.left}px + 0%)`, y: `calc(${selectedRect.top - navRect.top}px + 0%)`, opacity: 1, }} transition={transition} />
                )} */}
                </motion.div>
            </div>
        </div>
    );
};

export const Framer = { Tabs };              