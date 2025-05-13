export const colors = {
    customYellow: "#FFC300",
    customGray: "#C1C1C1",
    customMildGray: "#505050",
    customDarkGray: "#2e2e2e",
    customDarkerGray: "#131313",
    customBlack: "#000000",
    customMidBlack: "#262626",
    customWhite: "#ffffff",
    customLowOpacityGray: "#00000099",
};
export const websiteStorageUrl = `${process.env.EXPO_PUBLIC_JUANFLIX_BASE_URL}storage/`;
export const images = {
    brandLogo: require("@images/Juanflix Logo.png"),
    backgroundImg: require("@images/Juanflix-Background.png"),
    backgroundHomeScreen: require("@images/Homescreen-Background.png"),
    indexImg1: require("@images/index-img-1.png"),
    indexImg2: require("@images/index-img-2.png"),
    indexImg3: require("@images/index-img-3.png"),
    icon1: require("@images/Icon1.png"),
    icon2: require("@images/Icon2.png"),
    icon3: require("@images/Icon3.png"),
    curveBackground: require("@images/Curve-Background.png"),
    homeIcon: require("@images/HomeIcon.png"),
    homeIconActive: require("@images/HomeIconActive.png"),
    watchListIcon: require("@images/WatchListIcon.png"),
    watchListIconActive: require("@images/WatchListIconActive.png"),
    browseIcon: require("@images/BrowseIcon.png"),
    browseIconActive: require("@images/BrowseIconActive.png"),
    bellIcon: require("@images/BellIcon.png"),
    searchIcon: require("@images/SearchIcon.png"),
    hamburgerIcon: require("@images/HamburgerIcon.png"),
    auston: require("@images/game-icons--tiger-head.png"),
    waves: require("@images/cbi--duco-logo.png"),
    filled: require("@images/tdesign--logo-qq-filled.png"),
};
export const topFilmImage = {
    number1: require("@images/number1.png"),
    number2: require("@images/number2.png"),
    number3: require("@images/number3.png"),
    number4: require("@images/number1.png"),
    number5: require("@images/number1.png"),
    number6: require("@images/number1.png"),
    number7: require("@images/number1.png"),
    number7: require("@images/number1.png"),
    number8: require("@images/number1.png"),
    number9: require("@images/number1.png"),
    number1: require("@images/number1.png"),
};
export const indexFilmData = [
    { id: 1, source: images.indexImg1 },
    { id: 2, source: images.indexImg2 },
    { id: 3, source: images.indexImg3 },
    { id: 9, source: images.indexImg2 },
    { id: 4, source: images.indexImg3 },
    { id: 5, source: images.indexImg1 },
    { id: 6, source: images.indexImg1 },
    { id: 7, source: images.indexImg2 },
    { id: 8, source: images.indexImg3 },
];
export const indexIconTitleData = [
    {
        id: 1,
        source: images.icon1,
        title: "Endless Entertainment",
        description:
            "Watch Original filipino shows and movies that speak to you.",
    },
    {
        id: 2,
        source: images.icon2,
        title: "Lots Of Entertainment",
        description:
            "From killing hits to epic thrills, explore thousands of hours full of love, laughter and adventure",
    },
    {
        id: 3,
        source: images.icon3,
        title: "Uncover Your New Favorite",
        description:
            "Dive into an ever-growing collection where every story matters.",
    },
];
export const benefitsData = [
    {
        id: 1,
        text: "Access to all Free Content",
    },
    {
        id: 2,
        text: "Access to JuanFlix Subscription library",
    },
    {
        id: 3,
        text: "Watch on your desktop computer, laptop, smartphone, or tablet.",
    },
    {
        id: 4,
        text: "Special invites to JuanFlix in-person events.",
    },
];

export const awardsData = [
    {
        title: "Auston Film Festival",
        subtitle: "2021 | Official Selection",
        source: "auston",
    },
    {
        title: "Waves Film Festival",
        subtitle: "2021 | Official Selection",
        source: "waves",
    },
    {
        title: "Filled Film Festival",
        subtitle: "2021 | Official Selection",
        source: "filled",
    },
];
export const reviewData = [
    {
        rating: 4,
        username: "John Doe",
        comment:
            "Just watched this and I’m seriously impressed! The storytelling, visuals, and performances all came together beautifully. Congrats to the entire team behind this film. Can't wait to see what you create next!",
    },
    {
        rating: 1,
        username: "Michelle Connors",
        comment:
            "What a powerful film! The message really hit home and the cinematography was stunning. Amazing work by the cast and crew—truly a job well done!",
    },
    {
        rating: 5,
        username: "Genedeve Santos",
        comment:
            "This film was a masterpiece from start to finish. The direction, acting, and soundtrack were all on point! Huge respect to everyone who brought this story to life.",
    },
];

export const profileData = [
    { id: 1, name: "Mark Glenn", source: require("@images/ProfileSample.png") },
    { id: 2, name: "Jasper", source: require("@images/ProfileSample2.png") },
    { id: 3, name: "Ogie", source: require("@images/ProfileSample3.png") },
    { id: 4, name: "Jandy", source: require("@images/ProfileSample4.png") },
    // { id: 5, name: "Byron", source: require("@images/ProfileSample4.png") },
];

export const accountData = [
    {
        section: "Manage Profiles",
        subtitle: "Switch, manage or add profiles.",
        menus: ["Primary User", "Secondary Profile(s)"],
    },
    {
        section: "Continue Watching",
        subtitle: "Check all your previous watched films.",
        menus: ["Recent History"],
    },
    {
        section: "Settings",
        subtitle: "Edit info, change password, or cancel anytime.",
        menus: ["Account Information", "Security and Privacy", "App Settings"],
    },
];
