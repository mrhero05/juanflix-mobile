import AsyncStorage from "@react-native-async-storage/async-storage";

const LocalStorageService = {
    saveData: async (key, value) => {
        try {
            console.log("run localStorage saveData");
            await AsyncStorage.setItem(key, value);
            console.log("Data saved");
        } catch (e) {
            console.error("Failed to save data", e);
        }
    },

    getData: async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            } else {
                console.log("No data found for the given key");
                return null;
            }
        } catch (e) {
            console.error("Failed to load data", e);
            return null;
        }
    },

    removeData: async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            console.log("Data removed");
        } catch (e) {
            console.error("Failed to remove data", e);
        }
    },

    clearAllData: async () => {
        try {
            await AsyncStorage.clear();
            console.log("All data cleared");
        } catch (e) {
            console.error("Failed to clear data", e);
        }
    },
};

export default LocalStorageService;
