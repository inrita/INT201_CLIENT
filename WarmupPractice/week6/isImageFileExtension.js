function isImageFileExtension(fileName) {
    if (fileName === null || fileName === undefined) {
        return false
    } else {
        // .png, .jpg, .jpeg, .gif, .svg
        return (
        fileName.endsWith('.png') ||
        fileName.endsWith('.jpg') ||
        fileName.endsWith('.jpeg') ||
        fileName.endsWith('.gif') ||
        fileName.endsWith('.svg')
        )
    }
}

console.log(isImageFileExtension('sample.png'))
console.log(isImageFileExtension('sample.jpg'))
console.log(isImageFileExtension('sample.jpeg'))
console.log(isImageFileExtension('sample.gif'))
console.log(isImageFileExtension('sample.svg'))
console.log(isImageFileExtension(null))
console.log(isImageFileExtension(undefined))
console.log(isImageFileExtension('sample.sve'))


// โจทย์เพิ่มเติม -> output ที่ได้คือ filename
function findFileExtension(filename) {
    return filename.substring(filename.lastIndexOf('.'))
}
findFileExtension('sample.ex.jpeg')

console.log(findFileExtension('sample.ex.jpeg'))
console.log(findFileExtension('sample.ex.svg'))

 