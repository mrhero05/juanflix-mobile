import { Image } from "react-native";
import { images } from "@utils/Constants";

const BrandLogo = ({ style }) => {
    return (
        <Image
            source={images.brandLogo}
            style={[
                {
                    width: 150,
                    height: 50,
                    resizeMode: "contain",
                },
                style,
            ]}
        />
    );
};

export default BrandLogo;
