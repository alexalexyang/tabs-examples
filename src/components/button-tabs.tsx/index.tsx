import React, { useState } from 'react';

interface Tab {
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const ButtonTabs: React.FC<TabsProps> = ({ tabs }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleTabClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div>
            <div role="tablist">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.label}
                        role="tab"
                        aria-selected={index === selectedIndex}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div role="tabpanel">
                {tabs[selectedIndex].content}
            </div>
        </div>
    );
};

export default ButtonTabs;
