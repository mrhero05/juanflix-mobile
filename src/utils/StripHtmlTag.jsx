const stripHtmlTag = (text) => {
    if (typeof text === "string") {
        return text.replace(/<[^>]*>/g, "");
    }
};

export default stripHtmlTag;
