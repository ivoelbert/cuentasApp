import { AsyncStorage } from "react-native";

const getKeys = async () => {
    return new Promise( (resolve, reject) => {
        AsyncStorage.getAllKeys((err, keys) => {
            if(err) resolve([]);
            resolve(keys);
        });
    });
};

const getSome = async keys => {
    return new Promise( (resolve, reject) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
            if(err) resolve([]);
            resolve(stores);
        });
    });
};

const name = '@Cuentasv3';

export const cleanAll = async () => {
    try {
        const allKeys = await getKeys();

        return new Promise( (resolve, reject) => {
            const keys = allKeys.filter(key => key.indexOf('@Cuentas') !== -1);
            AsyncStorage.multiRemove(keys, (err) => {
                resolve();
            });
        });
    } catch(err) {
        return Promise.resolve();
    }
};

export const storeData = async (key, value) => {
    try {
        const nkey = name + key;
        const val = JSON.stringify(value);
        await AsyncStorage.setItem(nkey, val);
    } catch (error) {
        return {error: error};
    }
};

export const getData = async () => {
    try {
        const allKeys = await getKeys();
        const keys = allKeys.filter(key => key.indexOf(name) != -1);
        const stores = await getSome(keys);
        const entries = stores.map( (result, i, store) => ({
            key: store[i][0],
            val: JSON.parse(store[i][1])
        }));

        return entries;
    } catch(err) {
        return ([]);
    }
};
