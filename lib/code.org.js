
export const setContent = (extractFunction, id) => {
    document.getElementById(id).innerHTML = extractFunction;
}

export const onEvent = (id, event, fn) => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener(event, fn, false);
    }
}; 
export const showElement = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.classList.remove('hidden');
    }
}; 
export const hideElement = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.classList.add('hidden');
    }
}; 


let beforeScreen = 'screenMaker';
export const setScreen = (id) => {
    hideElement(beforeScreen);
    showElement(id)
    beforeScreen = id;
}; 

export const getProperty = (id, prop) => {
    const el = document.getElementById(id);
    if (el) {
        return el[prop]
    }
};

export const setProperty = (id, prop, value) => {
    const el = document.getElementById(id);
    if (el) {
        el[prop] = value;
    }
};

export const setImageURL = (id, src) => {
    const el = document.getElementById(id);
    const url = `https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/${src}?t=1670932317000`
    
    if (el) {
        el.setAttribute('src', url);
    }
};
