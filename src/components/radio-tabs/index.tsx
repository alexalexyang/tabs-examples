import React, { useState } from 'react';

interface Tab {
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const RadioTabs: React.FC<TabsProps> = ({ tabs }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedIndex(Number(event.target.value));
    };

    return (
        <div>
            <form>
                {tabs.map((tab, index) => (
                    <div key={tab.label}>
                        <input
                            type="radio"
                            id={`radio-${index}`}
                            name="tabs"
                            value={index}
                            checked={index === selectedIndex}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor={`radio-${index}`}>{tab.label}</label>
                    </div>
                ))}
            </form>
            <div>
                {tabs[selectedIndex].content}
            </div>
        </div>
    );
};

export default RadioTabs;
