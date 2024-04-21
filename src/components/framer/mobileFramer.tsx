import { useEffect, useRef, useState } from "react";

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
        <div className="md:hidden flex justify-center w-[96%] mx-auto h-[9%] flex-1 flex-shrink-0">
            <div className={` text-purple-700/80 w-full bottom-0 left-0 sticky rounded-xl h-full items-center flex-shrink-0 flex transition-all duration-500 ease-in-out`}>
                
                <div ref={navRef} className={` shadow-2xl flex flex-row bg-white items-center rounded-xl justify-center overflow-hidden h-full py-4 px-1 gap-2 w-full `} onPointerLeave={(_e) => setHoveredTabIndex(null)}>
                    {/* Add your sidebar content here */}
                    {/* You can use conditional rendering to show/hide sidebar items */}
                    {tabs.map((item, i) => {
                        const isActive = hoveredTabIndex === i || selectedTabIndex === i;

                        return (
                            <motion.button key={i} className={`flex flex-col h-[50px] items-center gap-1 text-xs outline-none lg:text-sm py-2 px-2 rounded-lg cursor-pointer font-medium z-20 ${isActive ? 'text-white bg-purple-700/80' : 'text-purple-700/80'}`} ref={(el) => (buttonRefs[i] =el)} onPointerEnter={() => {setHoveredTabIndex(i)}} onFocus={() => {setHoveredTabIndex(i)}} onClick={() => {setSelectedTab([i, i > selectedTabIndex ? i : -1])}} >
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
                    <motion.div className={`absolute rounded-lg z-10 h-[0%] bg-transparent hover:text-white`} initial={false} animate={{ width: selectedRect.width * 1, x: `calc(${selectedRect.left - navRect.left}px + 0%)`, y: `calc(${selectedRect.top - navRect.top}px + 10%)`, opacity: 1, }} transition={transition} />
                )}
                </div>
            </div>
        </div>
    );
};

export const mobFramer = { Tabs };              