function link_checker(str) {
    const regexp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}

export { link_checker }