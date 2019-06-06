const teams = {
  names: [
    "avs",
    "blues",
    "bruins",
    "canadiens",
    "canes",
    "caps",
    "cbj",
    "coyotes",
    "devils",
    "ducks",
    "flames",
    "flyers",
    "hawks",
    "islanders",
    "jets",
    "kings",
    "leafs",
    "nucks",
    "oilers",
    "panthers",
    "pens",
    "preds",
    "rangers",
    "sabres",
    "sens",
    "sharks",
    "stars",
    "tbl",
    "vgk",
    "wild",
    "wings"
  ],
  imageExtentions: [],
  getImageExtentions: function() {
    this.imageExtentions = [];
    for (var i = 0; i < this.names.length; i++) {
      const imgSrc = "./logos/" + this.names[i] + ".png";
      this.imageExtentions.push(imgSrc);
    }
    return this.imageExtentions;
  }
};

export default teams;
