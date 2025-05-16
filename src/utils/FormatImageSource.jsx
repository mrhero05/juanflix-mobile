import { websiteStorageUrl } from "@utils/Constants";

export const formatImageSource = (imageSource, type = "poster") => {
    if (typeof imageSource !== "string" || imageSource === "") {
        return type === "poster"
            ? require("@images/defaultImg9x16.png")
            : require("@images/defaultImg16x9.png");
    }
    if (imageSource.includes("uploaded-files/")) {
        return { uri: websiteStorageUrl + imageSource };
    }
    return { uri: imageSource };
};
