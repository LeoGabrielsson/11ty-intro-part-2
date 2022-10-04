module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img")

    eleventyConfig.addPassthroughCopy('image', function (src, alt, width, height){
        return `<img src="${src}" alt="${alt}" width="${width}" height="${height}">`;
    });
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};