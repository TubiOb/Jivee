import { useEffect, useState, useRef } from "react";

import { Tab } from "../../hooks/use-tabs";
import classNames from 'classnames';
import { AnimatePresence, motion } from "framer-motion";

const transition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.01,
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

    const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

    const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null)
    const hoveredRect = buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();
    const [tabWidths, setTabWidths] = useState<number[]>([]);

    const tabRef = useRef<HTMLDivElement>(null);
    const tabRect = tabRef.current?.getBoundingClientRect();

    // Calculate and cache tab widths
    useEffect(() => {
        if (buttonRefs.length === tabs.length && buttonRefs.every(Boolean)) {
            const widths = buttonRefs.map(button => button?.getBoundingClientRect().width ?? 0);
            setTabWidths(widths);
        }
    }, [buttonRefs, tabs.length]);

    // Use the cached width for selected tab if available
    const selectedWidth = tabWidths[selectedTabIndex] || buttonRefs[selectedTabIndex]?.getBoundingClientRect().width;
    const hoveredWidth = tabWidths[hoveredTabIndex ?? -1] || buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect().width;

    return (
        <div ref={tabRef} className='flex flex-shrink-0 items-center justify-center relative z-0 h-12 overflow-hidden shadow-lg bg-purple-400/50 rounded-xl py-2 px-1' onPointerLeave={() => setHoveredTabIndex(null)} style={{ gap: '8px' }} >
            {tabs.map((item, i) => {
                const isActive = hoveredTabIndex === i || selectedTabIndex === i;
                const targetWidth = tabWidths[i] || 170;

                return (
                    <motion.button key={i} className={classNames('flex items-center justify-center flex-1 h-10 px-4 z-20 font-medium rounded-xl sticky outline-none cursor-pointer select-none hover:bg-transparent transition-colors duration-100', { 'text-purple-500': !isActive, 'text-white hover:text-white': isActive, },)} ref={(el) => (buttonRefs[i] = el)} onPointerEnter={() => {setHoveredTabIndex(i)}} onFocus={() => {setHoveredTabIndex(i)}} onClick={() => {setSelectedTab([i, i > selectedTabIndex ? i : -1])}} style={{width: `${targetWidth}px`, minWidth: `${targetWidth}px`, maxWidth: `${targetWidth}px`, whiteSpace: "nowrap", flex: 1, position: 'relative' }} >
                        {item.label}
                    </motion.button>
                )
            })}

            <AnimatePresence>
                {hoveredRect && tabRect && (
                    <motion.div key={'hover'} className="absolute inset-0 z-10 top-0 left-0 rounded-xl p-1" initial={{ x: hoveredRect.left - tabRect.left, y: hoveredRect.top - tabRect.top, width: hoveredWidth || 170, height: hoveredRect.height, opacity: 1, }} animate={{ x: hoveredRect.left - tabRect.left, y: hoveredRect.top - tabRect.top, width: hoveredWidth || 170, height: hoveredRect.height, opacity: 1, }} exit={{ x: hoveredRect.left - tabRect.left, y: hoveredRect.top - tabRect.top, width: hoveredWidth || 170, height: hoveredRect.height, opacity: 1, }} transition={transition} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', }} />
                )}
            </AnimatePresence>

            {selectedRect && tabRect && (
                <motion.div className={`absolute inset-0 rounded-xl z-10 h-10 my-auto bg-purple-500 hover:text-white`} initial={false} animate={{ width: selectedWidth || 170, x: selectedRect.left - tabRect.left, opacity: 1, }} transition={transition} style={{ maxWidth: `${selectedWidth || 170}px`, }} />
            )}
        </div>
    );
};

export const Framer = { Tabs };              