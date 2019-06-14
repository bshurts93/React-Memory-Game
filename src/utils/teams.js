const teams = {
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
    },
    {
      team: "canes",
      id: 6
    },
    {
      team: "caps",
      id: 7
    },
    {
      team: "cbj",
      id: 8
    },
    {
      team: "coyotes",
      id: 9
    },
    {
      team: "devils",
      id: 10
    },
    {
      team: "ducks",
      id: 11
    },
    {
      team: "flames",
      id: 12
    },
    {
      team: "flyers",
      id: 13
    },
    {
      team: "hawks",
      id: 14
    },
    {
      team: "islanders",
      id: 15
    },
    {
      team: "jets",
      id: 16
    },
    {
      team: "kings",
      id: 17
    },
    {
      team: "leafs",
      id: 18
    },
    {
      team: "nucks",
      id: 19
    },
    {
      team: "oilers",
      id: 20
    },
    {
      team: "panthers",
      id: 21
    },
    {
      team: "pens",
      id: 22
    },
    {
      team: "preds",
      id: 23
    },
    {
      team: "rangers",
      id: 24
    },
    {
      team: "sabres",
      id: 25
    },
    {
      team: "sens",
      id: 26
    },
    {
      team: "sharks",
      id: 27
    },
    {
      team: "stars",
      id: 28
    },
    {
      team: "tbl",
      id: 29
    },
    {
      team: "vgk",
      id: 30
    },
    {
      team: "wild",
      id: 31
    },
    {
      team: "wings",
      id: 32
    }
  ],
  getImageExtentions: function() {
    for (var i = 0; i < this.nameObjects.length; i++) {
      const imgSrc = "./logos/" + this.nameObjects[i].team + ".png";
      this.nameObjects[i].src = imgSrc;
    }
    return this.nameObjects;
  }
};

export default teams;
