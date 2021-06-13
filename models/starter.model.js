class Marvel {
  constructor(data) {
    this.name = data.name;
    this.slug = data.name.toLowerCase().split(' ').join('-');
    this.img = `${data.thumbnail.path}.${data.thumbnail.extension}`;
    this.description = data.description;
    this.modified = data.modified;
  }
}
module.exports = Marvel;