import { websiteStorageUrl } from "@utils/Constants";

const FormatterUtils = {
    capitalizeFirstLetter: (string) => {
        return string
            .split(" ")
            .map(
                (item) =>
                    item[0].toUpperCase() + item.substring(1).toLowerCase()
            )
            .join(" ");
    },
    stripHtmlTag: (text) => {
        if (typeof text === "string") {
            return text.replace(/<[^>]*>/g, "");
        }
    },
    formatImageSource: (imageSource, type = "poster") => {
        if (typeof imageSource !== "string" || imageSource === "") {
            return type === "poster"
                ? require("@images/defaultImg9x16.png")
                : require("@images/defaultImg16x9.png");
        }
        if (imageSource.includes("uploaded-files/")) {
            return { uri: websiteStorageUrl + imageSource };
        }
        return { uri: imageSource };
    },
    remainingTimeCalculation: (duration, current) => {
        let remainingTime = duration - current;
        let remainingTimeText = "";
        if (remainingTime >= 60) {
            remainingTimeText = `${Math.floor(remainingTime / 60)}h`;
            remainingTime % 60 > 0 ? (remainingTimeText += " ") : null;
        }
        if (remainingTime % 60 > 0) {
            remainingTimeText += `${remainingTime % 60}m`;
        }
        return remainingTimeText;
    },
};

export default FormatterUtils;
