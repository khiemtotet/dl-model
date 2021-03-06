import React, { useState } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeAni from "./HomeAni";
import WeaponAni from "./WeaponAni";
import OtherUnique from "./OtherUnique";
import UniqueByWeapon from "./UniqueByWeapon";

import "./styles/AnimationSelect.css";

import {
    skills,
    uniqueCombo,
    unidentified,
    questAnimation,
    uniqueFS,
    uniqueVictory,
} from "./data/animationList";
import { aniButtonsFromObject } from "./helpers";

function GameAni({ handleSelect }) {
    const [category, setCategory] = useState(0);

    const handleChange = (_, value) => {
        setCategory(value);
    };

    let content;
    switch (category) {
        case 0: // Home screen animations
            content = <HomeAni handleSelect={handleSelect} />;
            break;
        case 1: // In quest animations
            content = aniButtonsFromObject(questAnimation, handleSelect);
            break;
        case 2: // Weapon specific animations
            content = <WeaponAni handleSelect={handleSelect} />;
            break;
        case 3: // Unique Combo animations
            content = (
                <UniqueByWeapon
                    data={uniqueCombo}
                    handleSelect={handleSelect}
                />
            );
            break;
        case 4: // Unique FS
            content = (
                <UniqueByWeapon data={uniqueFS} handleSelect={handleSelect} />
            );
            break;
        case 5: // Unique victory
            content = (
                <UniqueByWeapon
                    data={uniqueVictory}
                    handleSelect={handleSelect}
                />
            );
            break;
        case 6: // Skills
            content = (
                <UniqueByWeapon data={skills} handleSelect={handleSelect} />
            );
            break;
        case 7: // Special characters
            content = <OtherUnique handleSelect={handleSelect} />;
            break;
        case 8: // Unused
            content = aniButtonsFromObject(unidentified, handleSelect);
            break;
        default:
    }

    return (
        <div className="AnimationSelect-categories">
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={category}
                onChange={handleChange}
            >
                <Tab label="Home Screen" />
                <Tab label="In Quest Common" />
                <Tab label="Weapon Specific" />
                <Tab label="Unique Combo" />
                <Tab label="Unique Force Strike" />
                <Tab label="Unique Victory" />
                <Tab label="Skills" />
                <Tab label="Other Unique" />
                <Tab label="Unused" />
            </Tabs>
            <div className="AnimationSelect-subCategory">{content}</div>
        </div>
    );
}

export default GameAni;
