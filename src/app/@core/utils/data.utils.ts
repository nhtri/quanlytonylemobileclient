export const isEmpty = (object: any): boolean => {
    return [Object, Array].includes((object || {}).constructor) && !Object.entries(object || {}).length;
};

export const notEmpty = (object: any): boolean => {
    return !isEmpty(object);
};

export const isNil = (object: any): boolean => {
    return object == null;
};

export const notNil = (object: any): boolean => {
    return !isNil(object);
};

export const isNull = (object: any): boolean => {
    return object === null;
};

export const notNull = (object: any): boolean => {
    return !isNull(object);
};


export const objectWithKey = (key: string, value: any) => {
    return (Array.isArray(value) && value.length > 0) ||
    (!Array.isArray(value) && value)
        ? {[key]: value}
        : {};
};

export const isJson = (jsonString: string) => {
    try {
        const o = JSON.parse(jsonString);
        if (o && typeof o === 'object') {
            return true;
        }
    } catch (e) {
        return false;
    }
    return false;
};
