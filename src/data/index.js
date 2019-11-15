const storeToLocal = (key, value) =>{
    window.localStorage.setItem(key, value)
}

const getFromLocal = (key) =>{
    return window.localStorage.getItem(key)
}

export {
    storeToLocal,
    getFromLocal
};