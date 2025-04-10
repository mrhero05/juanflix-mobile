import { Text, TouchableOpacity } from "react-native";
import React from "react";

const PressableLink = ({ title, ...touchableOption }) => {
    return (
        <TouchableOpacity {...touchableOption}>
            <Text className="text-customYellow underline">{title}</Text>
        </TouchableOpacity>
    );
};

export default PressableLink;
