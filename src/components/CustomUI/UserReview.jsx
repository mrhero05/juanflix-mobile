import { View, Text, Image } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";
import { colors } from "@utils/Constants";

const UserReview = ({ username, comment, rating }) => {
    return (
        <View className="flex-row gap-3 w-full mb-[30]">
            <Image
                resizeMode="cover"
                className="w-[40] h-[40] rounded-full"
                source={require("@images/default_avatar.png")}
            />
            <View className="flex-1">
                <View className="flex-row gap-4 justify-between">
                    <View className="mt-2">
                        <Rating
                            type="custom"
                            showRating={false}
                            startingValue={rating}
                            tintColor={colors.customBlack}
                            imageSize={13}
                            ratingColor={colors.customYellow}
                            ratingBackgroundColor={colors.customGray}
                            readonly={true}
                            style={{
                                alignItems: "flex-start",
                            }}
                        />
                        <Text className="text-customWhite">
                            {username ?? "Anonymous"}
                        </Text>
                    </View>
                    <Rating
                        className="ml-auto"
                        type="heart"
                        ratingCount={1}
                        showRating={false}
                        imageSize={22}
                        tintColor={colors.customBlack}
                        ratingColor={colors.customYellow}
                        ratingBackgroundColor={colors.customGray}
                        startingValue={0}
                        fractions={0}
                    />
                </View>
                <Text className="text-customWhite mt-2">{comment}</Text>
            </View>
        </View>
    );
};

export default UserReview;
