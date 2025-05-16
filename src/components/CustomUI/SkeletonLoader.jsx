import { View, Text } from "react-native";
import React from "react";
import { colors } from "@utils/Constants";
import Skeleton from "react-native-reanimated-skeleton";

export const SkeletonPosterLoader = ({ itemWidth }) => {
    const skeletonData = {
        width: itemWidth,
        height: itemWidth * 1.5,
        marginLeft: 20,
    };
    return <SkeletonLayout layoutData={skeletonData} />;
};

export const SkeletonThumbnailLoader = ({ itemWidth }) => {
    const skeletonData = {
        width: itemWidth,
        height: itemWidth * 0.75,
        marginLeft: 20,
    };
    return <SkeletonLayout layoutData={skeletonData} />;
};

const SkeletonLayout = ({ layoutData }) => {
    return (
        <Skeleton
            containerStyle={{
                flex: 1,
                flexDirection: "row",
                marginTop: 15,
            }}
            animationDirection="diagonalTopRight"
            boneColor={colors.skeletonBoneColor}
            highlightColor={colors.skeletonHighlightColor}
            isLoading={true}
            layout={[...Array(3)].map(() => ({ ...layoutData }))}
        />
    );
};
