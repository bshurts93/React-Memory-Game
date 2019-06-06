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
  nameObjects: [
    {
      team: "avs",
      id: 1
    },
    {
      team: "blues",
      id: 2
    },
    {
      team: "bruins",
      id: 3
    },
    {
      team: "canadiens",
      id: 4
    }
  ],
  // imageExtentions: [],
  // getImageExtentions: function() {
  //   this.imageExtentions = [];
  //   for (var i = 0; i < this.names.length; i++) {
  //     const imgSrc = "./logos/" + this.names[i] + ".png";
  //     this.imageExtentions.push(imgSrc);
  //   }
  //   return this.imageExtentions;
  // }
  getImageExtentions: function() {
    for (var i = 0; i < this.nameObjects.length; i++) {
      const imgSrc = "./logos/" + this.nameObjects[i].team + ".png";
      this.nameObjects[i].src = imgSrc;
    }
    return this.nameObjects;
  }
};

export default teams;
