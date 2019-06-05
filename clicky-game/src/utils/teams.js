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
    for (var i = 0; i <= this.names.length; i++) {
      const imgSrc = "./logos/" + teams[i] + ".png";
      this.imageExtentions.push(imgSrc);
    }
  }
};

export default teams;
