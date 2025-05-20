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
};

export default FormatterUtils;
