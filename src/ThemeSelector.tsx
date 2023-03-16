import {
    tokyoNight,
    dracula,
    gruvboxDark,
    vscodeDark,
    nord,
    xcodeLight,
    tokyoNightDay,
} from "@uiw/codemirror-themes-all";

const lightThemes = [
    { name: "Tokyo Night Day", theme: tokyoNightDay },
    { name: "Xcode Light", theme: xcodeLight },
];

const darkThemes = [
    { name: "Dracula", theme: dracula },
    { name: "Gruvbox", theme: gruvboxDark },
    { name: "Nord", theme: nord },
    { name: "Tokyo Night", theme: tokyoNight },
    { name: "VSCode Dark", theme: vscodeDark },
];

interface Props {
    setTheme: Dispatch<SetStateAction<>>
}

export default function ThemeSelector() {
    return (
        <select name="theme" id="theme">
            {darkThemes.map((theme) => (
                <option value={theme.name}>{theme.name}</option>
            ))}
        </select>
    );
}
