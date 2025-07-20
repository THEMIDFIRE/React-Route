import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";
import { useMemo } from "react";

export default function Avatar() {
    const avatar = useMemo(() => {
        return createAvatar(avataaars, {
        backgroundColor: ['5199e4'],
        backgroundType: ['solid'],
        clothesColor: ['262e33'],
        clothing: ['hoodie'],
        eyebrows: ['defaultNatural'],
        eyes: ['happy'],
        accessories: ['prescription02'],
        accessoriesColor: ['262e33'],
        accessoriesProbability: 100,
        facialHairProbability: 100,
        facialHair: ['beardLight'],
        facialHairColor: ['2c1b18'],
        hairColor: ['2c1b18'],
        mouth: ['smile'],
        skinColor: ['edb98a'],
        style: ['circle'],
        top: ['shortCurly']
    }).toDataUri();
}, []);


    return <img src={avatar} alt="Avatar" id="avatar" className="mb-4"/>;
}
