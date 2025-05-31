import { ReactNode, useCallback, useState } from 'react';

export type Tab = { label: string; id: string; children: ReactNode };

export function useTabs({
    tabs,
    initialTabId,
    onChange,
}: {
    tabs: Tab[];
    initialTabId: string;
    onChange?: (id: string) => void;
}) {
    const [[ selectedTabIndex, direction ], setState] = useState(() => {
        const indexOfInitialTab = tabs.findIndex((tab) => tab.id === initialTabId);
        return [ indexOfInitialTab === -1 ? 0 : indexOfInitialTab, 0];
    })

    const setSelectedTab = useCallback((input: [number, number]) => {
        const [newIndex, newDirection] = input;
        setState([newIndex, newDirection]);
        onChange?.(tabs[newIndex]?.id);
    }, [onChange, tabs]);

    return {
        tabProps: {
            tabs,
            selectedTabIndex,
            onChange,
            setSelectedTab,
        },
        setSelectedTab: tabs[selectedTabIndex],
        contentProps: {
            direction,
            selectedTabIndex,
        },
    };
}

