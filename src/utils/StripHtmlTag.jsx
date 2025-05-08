const stripHtmlTag = (text) => {
    return text.replace(/<[^>]*>/g, "");
};

export default stripHtmlTag;
