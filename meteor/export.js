// moment.js makes `moment` global on the window (or global) object, while Meteor expects a file-scoped global variable
dicomParser = this.dicomParser;
try {
    delete this.dicomParser;
} catch (e) {
}
