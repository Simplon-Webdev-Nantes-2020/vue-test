/**
 * Slugify a string
 * @param {string} text - The string to slugify
 * @return {string} The slugified string
 */
export default (text) => {
    if (!text) return "";

    return text.toString().toLowerCase().replace(/\W/g, "-");
}
