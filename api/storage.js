import { AsyncStorage } from "react-native"

storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(`@Cuentas:${key}`, value);
    } catch (error) {
        return {error: error};
    }


getData = async () => {
    try {
        AsyncStorage.getAllKeys((err, keys) => {
            if(err)
                return {error: err};
            AsyncStorage.multiGet(keys, (err, stores) => {
                if(err)
                    return {error: err};
                return stores.map((result, i, store) => {
                    // get at each store's key/value so you can work with it
                    let key = store[i][0];
                    let value = store[i][1];
                });
            });
        });
    } catch (error) {
         // Error retrieving data
    }
}