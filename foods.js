/* Database Tabel Komposisi Pangan Indonesia (TKPI 2020) Kemenkes RI */
const foods = [
  {
    "id": "ar001",
    "code": "AR001",
    "name": "Beras giling, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 357.0,
      "protein": 8.4,
      "fat": 1.7,
      "carbs": 77.1,
      "fiber": 0.2,
      "sodium": 27.0,
      "calcium": 147.0,
      "iron": 1.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar002",
    "code": "AR002",
    "name": "Beras giling var pelita, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 369.0,
      "protein": 9.5,
      "fat": 1.4,
      "carbs": 77.1,
      "fiber": 0.4,
      "sodium": 34.0,
      "calcium": 68.0,
      "iron": 1.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar003",
    "code": "AR003",
    "name": "Beras giling var rojolele, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 357.0,
      "protein": 8.4,
      "fat": 1.7,
      "carbs": 77.1,
      "fiber": 0.2,
      "sodium": 34.0,
      "calcium": 147.0,
      "iron": 1.8,
      "vitA": 80.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar004",
    "code": "AR004",
    "name": "Beras hitam, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 351.0,
      "protein": 8.0,
      "fat": 1.3,
      "carbs": 76.9,
      "fiber": 20.1,
      "sodium": 15.0,
      "calcium": 0.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar005",
    "code": "AR005",
    "name": "Beras jagung kuning, kering, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 358.0,
      "protein": 5.5,
      "fat": 0.1,
      "carbs": 82.7,
      "fiber": 10.0,
      "sodium": 1.0,
      "calcium": 20.0,
      "iron": 1.4,
      "vitA": 0.0,
      "vitC": 3.0
    }
  },
  {
    "id": "ar006",
    "code": "AR006",
    "name": "Beras jagung putih, kering, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 307.0,
      "protein": 4.8,
      "fat": 0.1,
      "carbs": 71.8,
      "fiber": 10.0,
      "sodium": 1.0,
      "calcium": 17.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar007",
    "code": "AR007",
    "name": "Beras ketan hitam tumbuk, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 360.0,
      "protein": 8.0,
      "fat": 2.3,
      "carbs": 74.5,
      "fiber": 1.0,
      "sodium": 11.0,
      "calcium": 10.0,
      "iron": 6.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar008",
    "code": "AR008",
    "name": "Beras ketan putih tumbuk, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 361.0,
      "protein": 7.4,
      "fat": 0.8,
      "carbs": 78.4,
      "fiber": 0.4,
      "sodium": 3.0,
      "calcium": 13.0,
      "iron": 3.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar009",
    "code": "AR009",
    "name": "Beras ladang, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 376.0,
      "protein": 7.5,
      "fat": 3.8,
      "carbs": 78.0,
      "fiber": 5.9,
      "sodium": 10.0,
      "calcium": 20.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar010",
    "code": "AR010",
    "name": "Beras menir, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 362.0,
      "protein": 7.7,
      "fat": 4.4,
      "carbs": 73.0,
      "fiber": 0.2,
      "sodium": 90.0,
      "calcium": 22.0,
      "iron": 3.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar011",
    "code": "AR011",
    "name": "Beras parboiled",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 353.0,
      "protein": 6.8,
      "fat": 0.6,
      "carbs": 80.0,
      "fiber": 0.5,
      "sodium": 2.0,
      "calcium": 0.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar012",
    "code": "AR012",
    "name": "Beras tumbuk, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 354.0,
      "protein": 7.8,
      "fat": 0.4,
      "carbs": 79.9,
      "fiber": 3.8,
      "sodium": 5.0,
      "calcium": 0.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar013",
    "code": "AR013",
    "name": "Beras tumbuk merah, mentahmentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 352.0,
      "protein": 7.3,
      "fat": 0.9,
      "carbs": 76.2,
      "fiber": 0.8,
      "sodium": 10.0,
      "calcium": 115.0,
      "iron": 4.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar014",
    "code": "AR014",
    "name": "Cantel, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 366.0,
      "protein": 11.0,
      "fat": 3.3,
      "carbs": 73.0,
      "fiber": 1.2,
      "sodium": 7.0,
      "calcium": 28.0,
      "iron": 4.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar015",
    "code": "AR015",
    "name": "Jagung muda, kuning, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 147.0,
      "protein": 5.1,
      "fat": 0.7,
      "carbs": 31.5,
      "fiber": 1.3,
      "sodium": 5.0,
      "calcium": 0.0,
      "iron": 1.1,
      "vitA": 261.0,
      "vitC": 9.0
    }
  },
  {
    "id": "ar016",
    "code": "AR016",
    "name": "Jagung kuning pipil, kering, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 366.0,
      "protein": 9.8,
      "fat": 7.3,
      "carbs": 69.1,
      "fiber": 2.2,
      "sodium": 5.0,
      "calcium": 30.0,
      "iron": 2.3,
      "vitA": 641.0,
      "vitC": 3.0
    }
  },
  {
    "id": "ar017",
    "code": "AR017",
    "name": "Jagung pipil var, harapan, kering",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 367.0,
      "protein": 6.2,
      "fat": 5.1,
      "carbs": 76.2,
      "fiber": 2.6,
      "sodium": 1.0,
      "calcium": 0.0,
      "iron": 2.8,
      "vitA": 385.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar018",
    "code": "AR018",
    "name": "Jagung pipil var, metro, kering",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 368.0,
      "protein": 5.5,
      "fat": 4.6,
      "carbs": 78.0,
      "fiber": 2.9,
      "sodium": 1.0,
      "calcium": 0.0,
      "iron": 2.4,
      "vitA": 554.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar019",
    "code": "AR019",
    "name": "Jali, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 324.0,
      "protein": 11.0,
      "fat": 4.0,
      "carbs": 61.0,
      "fiber": 3.1,
      "sodium": 24.0,
      "calcium": 1213.0,
      "iron": 11.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar020",
    "code": "AR020",
    "name": "Jawawut, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 364.0,
      "protein": 9.7,
      "fat": 3.5,
      "carbs": 73.4,
      "fiber": 8.2,
      "sodium": 7.0,
      "calcium": 28.0,
      "iron": 5.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ar021",
    "code": "AR021",
    "name": "Jampang huma, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 350.0,
      "protein": 6.2,
      "fat": 1.4,
      "carbs": 78.2,
      "fiber": 1.7,
      "sodium": 53.0,
      "calcium": 329.0,
      "iron": 5.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap001",
    "code": "AP001",
    "name": "Nasi",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 180.0,
      "protein": 3.0,
      "fat": 0.3,
      "carbs": 39.8,
      "fiber": 0.2,
      "sodium": 1.0,
      "calcium": 25.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap002",
    "code": "AP002",
    "name": "Nasi tim",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 120.0,
      "protein": 2.4,
      "fat": 0.4,
      "carbs": 26.0,
      "fiber": 0.5,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap003",
    "code": "AP003",
    "name": "Beras, tapai",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 99.0,
      "protein": 1.7,
      "fat": 0.3,
      "carbs": 22.4,
      "fiber": 0.0,
      "sodium": 26.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap004",
    "code": "AP004",
    "name": "Beras, tepung, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 353.0,
      "protein": 7.0,
      "fat": 0.5,
      "carbs": 80.0,
      "fiber": 2.4,
      "sodium": 5.0,
      "calcium": 0.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap005",
    "code": "AP005",
    "name": "Beras merah, Nasi",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 149.0,
      "protein": 2.8,
      "fat": 0.4,
      "carbs": 32.5,
      "fiber": 0.3,
      "sodium": 5.0,
      "calcium": 0.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap006",
    "code": "AP006",
    "name": "Bihun, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 348.0,
      "protein": 4.7,
      "fat": 0.1,
      "carbs": 82.1,
      "fiber": 1.2,
      "sodium": 12.0,
      "calcium": 0.0,
      "iron": 1.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap007",
    "code": "AP007",
    "name": "Bihun goreng instan",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 381.0,
      "protein": 6.1,
      "fat": 3.9,
      "carbs": 80.3,
      "fiber": 0.0,
      "sodium": 928.0,
      "calcium": 266.0,
      "iron": 2.9,
      "vitA": 58.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap008",
    "code": "AP008",
    "name": "Bihun Jagung, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 354.0,
      "protein": 0.5,
      "fat": 0.3,
      "carbs": 87.4,
      "fiber": 3.0,
      "sodium": 49.0,
      "calcium": 13.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap009",
    "code": "AP009",
    "name": "Jagung nasi, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 357.0,
      "protein": 8.8,
      "fat": 0.5,
      "carbs": 79.5,
      "fiber": 6.2,
      "sodium": 2.0,
      "calcium": 0.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap010",
    "code": "AP010",
    "name": "Jagung muda, rebus",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 142.0,
      "protein": 5.0,
      "fat": 0.7,
      "carbs": 30.3,
      "fiber": 0.8,
      "sodium": 5.0,
      "calcium": 0.0,
      "iron": 0.8,
      "vitA": 225.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap011",
    "code": "AP011",
    "name": "Jagung kuning, tepung",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 355.0,
      "protein": 9.2,
      "fat": 3.9,
      "carbs": 73.7,
      "fiber": 7.2,
      "sodium": 11.0,
      "calcium": 10.0,
      "iron": 2.4,
      "vitA": 510.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap012",
    "code": "AP012",
    "name": "Jagung kuning pipil, rebus",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 154.0,
      "protein": 3.8,
      "fat": 3.5,
      "carbs": 28.4,
      "fiber": 0.7,
      "sodium": 5.0,
      "calcium": 0.0,
      "iron": 0.5,
      "vitA": 234.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap013",
    "code": "AP013",
    "name": "Jagung, tepung putih",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 355.0,
      "protein": 9.2,
      "fat": 3.9,
      "carbs": 73.7,
      "fiber": 7.2,
      "sodium": 11.0,
      "calcium": 10.0,
      "iron": 2.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap014",
    "code": "AP014",
    "name": "Ketan, ketupat",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 212.0,
      "protein": 4.0,
      "fat": 4.6,
      "carbs": 38.6,
      "fiber": 0.2,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap015",
    "code": "AP015",
    "name": "Ketan hitam, matang",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 181.0,
      "protein": 4.0,
      "fat": 1.2,
      "carbs": 37.3,
      "fiber": 0.3,
      "sodium": 9.0,
      "calcium": 0.0,
      "iron": 1.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap016",
    "code": "AP016",
    "name": "Ketan hitam, tapai",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 166.0,
      "protein": 3.8,
      "fat": 1.0,
      "carbs": 34.4,
      "fiber": 0.3,
      "sodium": 5.0,
      "calcium": 0.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap017",
    "code": "AP017",
    "name": "Ketan putih, matang",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 163.0,
      "protein": 3.0,
      "fat": 0.4,
      "carbs": 35.7,
      "fiber": 0.2,
      "sodium": 8.0,
      "calcium": 0.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap018",
    "code": "AP018",
    "name": "Ketan putih, tapai",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 172.0,
      "protein": 3.0,
      "fat": 0.5,
      "carbs": 37.5,
      "fiber": 0.6,
      "sodium": 1.0,
      "calcium": 0.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap019",
    "code": "AP019",
    "name": "Maizena, tepung",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 341.0,
      "protein": 0.3,
      "fat": 0.0,
      "carbs": 85.0,
      "fiber": 7.0,
      "sodium": 6.0,
      "calcium": 20.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap020",
    "code": "AP020",
    "name": "Makaroni, mentah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 353.0,
      "protein": 8.7,
      "fat": 0.4,
      "carbs": 78.7,
      "fiber": 4.9,
      "sodium": 5.0,
      "calcium": 20.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap021",
    "code": "AP021",
    "name": "Mi basah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 88.0,
      "protein": 0.6,
      "fat": 3.3,
      "carbs": 14.0,
      "fiber": 0.1,
      "sodium": 63.0,
      "calcium": 14.0,
      "iron": 6.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap022",
    "code": "AP022",
    "name": "Mi kering",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 339.0,
      "protein": 10.0,
      "fat": 1.7,
      "carbs": 6.3,
      "fiber": 0.4,
      "sodium": 760.0,
      "calcium": 31.0,
      "iron": 3.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap023",
    "code": "AP023",
    "name": "Misoa",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 345.0,
      "protein": 8.5,
      "fat": 2.2,
      "carbs": 78.0,
      "fiber": 0.5,
      "sodium": 3064.0,
      "calcium": 52.0,
      "iron": 8.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap024",
    "code": "AP024",
    "name": "Roti putih",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 248.0,
      "protein": 8.0,
      "fat": 1.2,
      "carbs": 50.0,
      "fiber": 9.1,
      "sodium": 530.0,
      "calcium": 10.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap025",
    "code": "AP025",
    "name": "Tepung terigu",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 333.0,
      "protein": 9.0,
      "fat": 1.0,
      "carbs": 77.2,
      "fiber": 0.3,
      "sodium": 2.0,
      "calcium": 122.0,
      "iron": 1.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap026",
    "code": "AP026",
    "name": "Amparan tatak",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 191.0,
      "protein": 1.3,
      "fat": 5.5,
      "carbs": 34.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap027",
    "code": "AP027",
    "name": "Apang kukus, kue",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 202.0,
      "protein": 3.0,
      "fat": 0.3,
      "carbs": 46.7,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap028",
    "code": "AP028",
    "name": "Apem, kue",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 148.0,
      "protein": 2.0,
      "fat": 0.5,
      "carbs": 33.9,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap029",
    "code": "AP029",
    "name": "Biskuit",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 458.0,
      "protein": 6.9,
      "fat": 14.4,
      "carbs": 75.1,
      "fiber": 2.1,
      "sodium": 241.0,
      "calcium": 62.0,
      "iron": 2.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap030",
    "code": "AP030",
    "name": "Bakpia, kue",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 272.0,
      "protein": 8.7,
      "fat": 6.7,
      "carbs": 44.1,
      "fiber": 0.9,
      "sodium": 0.0,
      "calcium": 194.0,
      "iron": 4.5,
      "vitA": 1392.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap031",
    "code": "AP031",
    "name": "Bakwan",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 280.0,
      "protein": 8.2,
      "fat": 10.2,
      "carbs": 39.0,
      "fiber": 3.4,
      "sodium": 0.0,
      "calcium": 204.0,
      "iron": 7.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap032",
    "code": "AP032",
    "name": "Bantal",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 190.0,
      "protein": 3.3,
      "fat": 0.3,
      "carbs": 43.5,
      "fiber": 3.4,
      "sodium": 164.0,
      "calcium": 0.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap033",
    "code": "AP033",
    "name": "Baruasa",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 417.0,
      "protein": 6.5,
      "fat": 8.2,
      "carbs": 79.3,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap034",
    "code": "AP034",
    "name": "Batar daan",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 107.0,
      "protein": 2.2,
      "fat": 2.2,
      "carbs": 19.6,
      "fiber": 0.0,
      "sodium": 200.0,
      "calcium": 20.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap035",
    "code": "AP035",
    "name": "Bika ambon",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 199.0,
      "protein": 2.1,
      "fat": 1.5,
      "carbs": 44.4,
      "fiber": 0.3,
      "sodium": 0.0,
      "calcium": 45.0,
      "iron": 1.8,
      "vitA": 408.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap036",
    "code": "AP036",
    "name": "Bingka",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 273.0,
      "protein": 5.3,
      "fat": 10.6,
      "carbs": 39.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap037",
    "code": "AP037",
    "name": "Bobengka",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 225.0,
      "protein": 5.3,
      "fat": 2.6,
      "carbs": 45.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap038",
    "code": "AP038",
    "name": "Bolu peca",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 197.0,
      "protein": 3.3,
      "fat": 4.6,
      "carbs": 35.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap039",
    "code": "AP039",
    "name": "Brem",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 249.0,
      "protein": 3.4,
      "fat": 0.4,
      "carbs": 58.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 198.0,
      "iron": 2.0,
      "vitA": 240.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap040",
    "code": "AP040",
    "name": "Bubur tinotuan(Manado)",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 156.0,
      "protein": 2.3,
      "fat": 0.2,
      "carbs": 15.6,
      "fiber": 8.2,
      "sodium": 486.0,
      "calcium": 141.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 15.0
    }
  },
  {
    "id": "ap041",
    "code": "AP041",
    "name": "Cake tape",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 323.0,
      "protein": 4.9,
      "fat": 11.5,
      "carbs": 50.1,
      "fiber": 1.4,
      "sodium": 0.0,
      "calcium": 131.0,
      "iron": 2.6,
      "vitA": 26.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap042",
    "code": "AP042",
    "name": "Cangkuning",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 204.0,
      "protein": 2.8,
      "fat": 7.5,
      "carbs": 31.4,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap043",
    "code": "AP043",
    "name": "Dodol bali",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 298.0,
      "protein": 3.7,
      "fat": 2.1,
      "carbs": 65.9,
      "fiber": 0.4,
      "sodium": 0.0,
      "calcium": 70.0,
      "iron": 2.5,
      "vitA": 496.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap044",
    "code": "AP044",
    "name": "Dodol galamai",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 348.0,
      "protein": 0.4,
      "fat": 3.8,
      "carbs": 76.1,
      "fiber": 0.5,
      "sodium": 38.0,
      "calcium": 41.0,
      "iron": 2.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap045",
    "code": "AP045",
    "name": "Dodol kedondong",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 331.0,
      "protein": 1.9,
      "fat": 7.6,
      "carbs": 63.8,
      "fiber": 1.0,
      "sodium": 0.0,
      "calcium": 90.0,
      "iron": 2.3,
      "vitA": 408.0,
      "vitC": 5.0
    }
  },
  {
    "id": "ap046",
    "code": "AP046",
    "name": "Dodol manado",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 373.0,
      "protein": 4.3,
      "fat": 16.5,
      "carbs": 51.9,
      "fiber": 0.4,
      "sodium": 35.0,
      "calcium": 41.0,
      "iron": 2.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap047",
    "code": "AP047",
    "name": "Emping beras",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 403.0,
      "protein": 10.6,
      "fat": 2.2,
      "carbs": 71.7,
      "fiber": 0.2,
      "sodium": 1.0,
      "calcium": 11.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap048",
    "code": "AP048",
    "name": "Gemblong",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 274.0,
      "protein": 1.7,
      "fat": 5.4,
      "carbs": 55.5,
      "fiber": 2.2,
      "sodium": 0.0,
      "calcium": 69.0,
      "iron": 3.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap049",
    "code": "AP049",
    "name": "Gendar goreng",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 407.0,
      "protein": 6.4,
      "fat": 28.2,
      "carbs": 32.0,
      "fiber": 0.1,
      "sodium": 0.0,
      "calcium": 3216.0,
      "iron": 1.6,
      "vitA": 184.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap050",
    "code": "AP050",
    "name": "Intip goreng",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 474.0,
      "protein": 7.6,
      "fat": 21.6,
      "carbs": 62.3,
      "fiber": 1.2,
      "sodium": 0.0,
      "calcium": 2323.0,
      "iron": 2.5,
      "vitA": 200.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap051",
    "code": "AP051",
    "name": "Jagung gerontol",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 156.0,
      "protein": 2.7,
      "fat": 1.3,
      "carbs": 33.3,
      "fiber": 1.0,
      "sodium": 0.0,
      "calcium": 51.0,
      "iron": 1.2,
      "vitA": 162.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap052",
    "code": "AP052",
    "name": "Jagung titi",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 374.0,
      "protein": 9.4,
      "fat": 2.2,
      "carbs": 79.1,
      "fiber": 0.8,
      "sodium": 0.0,
      "calcium": 14.0,
      "iron": 2.9,
      "vitA": 11507.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap053",
    "code": "AP053",
    "name": "Japilus",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 500.0,
      "protein": 1.2,
      "fat": 25.1,
      "carbs": 67.3,
      "fiber": 0.4,
      "sodium": 0.0,
      "calcium": 186.0,
      "iron": 4.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap054",
    "code": "AP054",
    "name": "Kakicak",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 296.0,
      "protein": 3.4,
      "fat": 15.1,
      "carbs": 36.7,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap055",
    "code": "AP055",
    "name": "Kambose",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 164.0,
      "protein": 3.0,
      "fat": 2.4,
      "carbs": 32.6,
      "fiber": 4.3,
      "sodium": 0.0,
      "calcium": 16.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap056",
    "code": "AP056",
    "name": "Kapusa",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 158.0,
      "protein": 4.4,
      "fat": 3.2,
      "carbs": 27.8,
      "fiber": 5.3,
      "sodium": 104.0,
      "calcium": 179.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap057",
    "code": "AP057",
    "name": "Keddo bodong",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 290.0,
      "protein": 4.6,
      "fat": 5.7,
      "carbs": 55.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap058",
    "code": "AP058",
    "name": "Kelepon, kue",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 215.0,
      "protein": 3.7,
      "fat": 3.7,
      "carbs": 41.8,
      "fiber": 1.0,
      "sodium": 0.0,
      "calcium": 232.0,
      "iron": 3.3,
      "vitA": 872.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap059",
    "code": "AP059",
    "name": "Kereput",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 580.0,
      "protein": 4.8,
      "fat": 39.6,
      "carbs": 51.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 1.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap060",
    "code": "AP060",
    "name": "Ketoprak",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 153.0,
      "protein": 7.9,
      "fat": 7.7,
      "carbs": 13.0,
      "fiber": 2.9,
      "sodium": 0.0,
      "calcium": 153.0,
      "iron": 3.4,
      "vitA": 3.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap061",
    "code": "AP061",
    "name": "Ketupat kandangan",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 109.0,
      "protein": 2.2,
      "fat": 5.2,
      "carbs": 13.4,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap062",
    "code": "AP062",
    "name": "Koya",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 366.0,
      "protein": 4.2,
      "fat": 4.3,
      "carbs": 77.5,
      "fiber": 0.8,
      "sodium": 0.0,
      "calcium": 153.0,
      "iron": 7.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap063",
    "code": "AP063",
    "name": "Koya mirasa",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 370.0,
      "protein": 8.0,
      "fat": 1.0,
      "carbs": 82.2,
      "fiber": 0.4,
      "sodium": 0.0,
      "calcium": 83.0,
      "iron": 17.0,
      "vitA": 3.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap064",
    "code": "AP064",
    "name": "Koyabu",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 241.0,
      "protein": 3.4,
      "fat": 4.3,
      "carbs": 47.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap065",
    "code": "AP065",
    "name": "Kue ali",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 440.0,
      "protein": 3.8,
      "fat": 18.5,
      "carbs": 64.5,
      "fiber": 0.3,
      "sodium": 0.0,
      "calcium": 27.0,
      "iron": 2.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap066",
    "code": "AP066",
    "name": "Kue bangen",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 442.0,
      "protein": 3.3,
      "fat": 14.7,
      "carbs": 74.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap067",
    "code": "AP067",
    "name": "Kue gelang",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 448.0,
      "protein": 5.8,
      "fat": 16.1,
      "carbs": 70.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 1.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap068",
    "code": "AP068",
    "name": "Kue jahe",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 425.0,
      "protein": 1.6,
      "fat": 8.8,
      "carbs": 84.6,
      "fiber": 1.2,
      "sodium": 0.0,
      "calcium": 155.0,
      "iron": 4.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap069",
    "code": "AP069",
    "name": "Kue kelapa",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 591.0,
      "protein": 5.6,
      "fat": 42.1,
      "carbs": 47.5,
      "fiber": 0.0,
      "sodium": 33.0,
      "calcium": 32.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap070",
    "code": "AP070",
    "name": "Kue koa",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 340.0,
      "protein": 4.8,
      "fat": 0.4,
      "carbs": 79.3,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 1.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap071",
    "code": "AP071",
    "name": "Kue ku temu",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 214.0,
      "protein": 3.5,
      "fat": 0.2,
      "carbs": 49.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap072",
    "code": "AP072",
    "name": "Kue lumpur",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 291.0,
      "protein": 3.6,
      "fat": 11.1,
      "carbs": 44.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 96.0,
      "iron": 2.3,
      "vitA": 20.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap073",
    "code": "AP073",
    "name": "Kue pelita",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 141.0,
      "protein": 5.3,
      "fat": 5.5,
      "carbs": 17.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap074",
    "code": "AP074",
    "name": "Kue putu cangkir",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 304.0,
      "protein": 5.3,
      "fat": 7.0,
      "carbs": 54.9,
      "fiber": 0.9,
      "sodium": 0.0,
      "calcium": 18.0,
      "iron": 4.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap075",
    "code": "AP075",
    "name": "Kue sus",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 221.0,
      "protein": 7.5,
      "fat": 10.2,
      "carbs": 24.8,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 105.0,
      "iron": 2.5,
      "vitA": 26.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap076",
    "code": "AP076",
    "name": "Kue thipan",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 247.0,
      "protein": 2.9,
      "fat": 4.2,
      "carbs": 49.5,
      "fiber": 0.0,
      "sodium": 95.0,
      "calcium": 16.0,
      "iron": 1.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap077",
    "code": "AP077",
    "name": "Laksa/Putu mayang",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 121.0,
      "protein": 1.7,
      "fat": 3.4,
      "carbs": 21.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap078",
    "code": "AP078",
    "name": "Lapis legit",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 389.0,
      "protein": 6.6,
      "fat": 15.7,
      "carbs": 55.5,
      "fiber": 0.5,
      "sodium": 0.0,
      "calcium": 16.0,
      "iron": 1.9,
      "vitA": 41.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap079",
    "code": "AP079",
    "name": "Lupis ketan",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 164.0,
      "protein": 1.8,
      "fat": 2.1,
      "carbs": 34.5,
      "fiber": 0.7,
      "sodium": 0.0,
      "calcium": 119.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap080",
    "code": "AP080",
    "name": "Manan samin",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 379.0,
      "protein": 3.4,
      "fat": 18.1,
      "carbs": 50.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap081",
    "code": "AP081",
    "name": "Martabak india",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 153.0,
      "protein": 4.5,
      "fat": 4.2,
      "carbs": 24.3,
      "fiber": 0.0,
      "sodium": 240.0,
      "calcium": 14.0,
      "iron": 2.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap082",
    "code": "AP082",
    "name": "Martabak mesir",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 278.0,
      "protein": 5.1,
      "fat": 8.6,
      "carbs": 45.0,
      "fiber": 0.0,
      "sodium": 193.0,
      "calcium": 49.0,
      "iron": 3.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap083",
    "code": "AP083",
    "name": "Masekat",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 369.0,
      "protein": 2.1,
      "fat": 7.0,
      "carbs": 74.1,
      "fiber": 4.0,
      "sodium": 141.0,
      "calcium": 17.0,
      "iron": 0.8,
      "vitA": 155.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap084",
    "code": "AP084",
    "name": "Mie aceh rebus",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 113.0,
      "protein": 3.0,
      "fat": 3.2,
      "carbs": 18.1,
      "fiber": 0.0,
      "sodium": 191.0,
      "calcium": 22.0,
      "iron": 1.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap085",
    "code": "AP085",
    "name": "Mie ayam",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 102.0,
      "protein": 6.2,
      "fat": 3.9,
      "carbs": 10.5,
      "fiber": 0.0,
      "sodium": 279.0,
      "calcium": 262.0,
      "iron": 1.8,
      "vitA": 39.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap086",
    "code": "AP086",
    "name": "Mie bakso",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 114.0,
      "protein": 5.3,
      "fat": 3.0,
      "carbs": 16.4,
      "fiber": 0.1,
      "sodium": 760.0,
      "calcium": 286.0,
      "iron": 1.9,
      "vitA": 17.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap087",
    "code": "AP087",
    "name": "Mie celon",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 102.0,
      "protein": 3.0,
      "fat": 2.1,
      "carbs": 17.8,
      "fiber": 0.0,
      "sodium": 451.0,
      "calcium": 12.0,
      "iron": 1.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap088",
    "code": "AP088",
    "name": "Mie pangsit basah",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 105.0,
      "protein": 5.9,
      "fat": 4.9,
      "carbs": 9.4,
      "fiber": 0.0,
      "sodium": 530.0,
      "calcium": 208.0,
      "iron": 2.0,
      "vitA": 25.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap089",
    "code": "AP089",
    "name": "Nasi gemuk",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 192.0,
      "protein": 3.8,
      "fat": 8.8,
      "carbs": 24.4,
      "fiber": 0.7,
      "sodium": 355.0,
      "calcium": 15.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap090",
    "code": "AP090",
    "name": "Nasi gurih",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 190.0,
      "protein": 4.7,
      "fat": 7.5,
      "carbs": 26.0,
      "fiber": 0.7,
      "sodium": 296.0,
      "calcium": 12.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap091",
    "code": "AP091",
    "name": "Nasi minyak",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 207.0,
      "protein": 3.5,
      "fat": 5.0,
      "carbs": 37.1,
      "fiber": 0.8,
      "sodium": 74.0,
      "calcium": 26.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap092",
    "code": "AP092",
    "name": "Nasi rames",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 155.0,
      "protein": 10.3,
      "fat": 4.2,
      "carbs": 19.1,
      "fiber": 0.0,
      "sodium": 265.0,
      "calcium": 239.0,
      "iron": 1.8,
      "vitA": 96.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap093",
    "code": "AP093",
    "name": "Nopia spesial",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 387.0,
      "protein": 5.3,
      "fat": 7.6,
      "carbs": 74.3,
      "fiber": 0.3,
      "sodium": 0.0,
      "calcium": 903.0,
      "iron": 4.2,
      "vitA": 512.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap094",
    "code": "AP094",
    "name": "Onde-onde",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 336.0,
      "protein": 4.0,
      "fat": 9.8,
      "carbs": 57.9,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap095",
    "code": "AP095",
    "name": "Padamaran",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 171.0,
      "protein": 3.9,
      "fat": 8.9,
      "carbs": 18.8,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap096",
    "code": "AP096",
    "name": "Pastel",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 307.0,
      "protein": 4.5,
      "fat": 13.3,
      "carbs": 42.4,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 296.0,
      "iron": 2.5,
      "vitA": 5360.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap097",
    "code": "AP097",
    "name": "Pulut",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 216.0,
      "protein": 2.6,
      "fat": 3.1,
      "carbs": 44.4,
      "fiber": 0.0,
      "sodium": 100.0,
      "calcium": 0.0,
      "iron": 3.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap098",
    "code": "AP098",
    "name": "Pundut nasi",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 104.0,
      "protein": 1.9,
      "fat": 4.1,
      "carbs": 15.1,
      "fiber": 0.4,
      "sodium": 74.0,
      "calcium": 26.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap099",
    "code": "AP099",
    "name": "Putri hijau",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 189.0,
      "protein": 5.4,
      "fat": 2.1,
      "carbs": 37.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap100",
    "code": "AP100",
    "name": "Putri selat",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 163.0,
      "protein": 2.2,
      "fat": 6.5,
      "carbs": 23.8,
      "fiber": 0.0,
      "sodium": 6.0,
      "calcium": 72.0,
      "iron": 4.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap101",
    "code": "AP101",
    "name": "Putu sopa",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 215.0,
      "protein": 3.3,
      "fat": 4.1,
      "carbs": 41.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap102",
    "code": "AP102",
    "name": "Renggi goreng",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 471.0,
      "protein": 4.7,
      "fat": 21.8,
      "carbs": 64.1,
      "fiber": 6.4,
      "sodium": 126.0,
      "calcium": 0.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap103",
    "code": "AP103",
    "name": "Roti boong",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 341.0,
      "protein": 5.5,
      "fat": 16.2,
      "carbs": 43.3,
      "fiber": 0.0,
      "sodium": 161.0,
      "calcium": 15.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap104",
    "code": "AP104",
    "name": "Roti warna sawo matang",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 249.0,
      "protein": 7.9,
      "fat": 1.5,
      "carbs": 49.7,
      "fiber": 0.0,
      "sodium": 500.0,
      "calcium": 20.0,
      "iron": 2.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap105",
    "code": "AP105",
    "name": "Sarimuka",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 166.0,
      "protein": 2.3,
      "fat": 2.8,
      "carbs": 32.9,
      "fiber": 0.0,
      "sodium": 3.0,
      "calcium": 36.0,
      "iron": 2.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap106",
    "code": "AP106",
    "name": "Spaghetti",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 139.0,
      "protein": 7.4,
      "fat": 2.1,
      "carbs": 22.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 109.0,
      "iron": 4.7,
      "vitA": 42.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap107",
    "code": "AP107",
    "name": "Srikaya ketan",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 265.0,
      "protein": 2.7,
      "fat": 6.4,
      "carbs": 49.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap108",
    "code": "AP108",
    "name": "Sunduk lawang",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 181.0,
      "protein": 1.9,
      "fat": 1.3,
      "carbs": 32.4,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap109",
    "code": "AP109",
    "name": "Suwir-suwir",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 347.0,
      "protein": 0.5,
      "fat": 0.9,
      "carbs": 84.2,
      "fiber": 0.8,
      "sodium": 0.0,
      "calcium": 42.0,
      "iron": 4.3,
      "vitA": 1.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap110",
    "code": "AP110",
    "name": "Tipa-tipa",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 355.0,
      "protein": 6.2,
      "fat": 1.2,
      "carbs": 79.8,
      "fiber": 1.3,
      "sodium": 0.0,
      "calcium": 17.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap111",
    "code": "AP111",
    "name": "Wajit camilan",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 303.0,
      "protein": 6.3,
      "fat": 2.7,
      "carbs": 63.3,
      "fiber": 6.9,
      "sodium": 0.0,
      "calcium": 61.0,
      "iron": 5.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap112",
    "code": "AP112",
    "name": "Widaran",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 424.0,
      "protein": 1.3,
      "fat": 10.7,
      "carbs": 80.7,
      "fiber": 0.2,
      "sodium": 0.0,
      "calcium": 49.0,
      "iron": 2.5,
      "vitA": 21.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap113",
    "code": "AP113",
    "name": "Wingko babat",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 355.0,
      "protein": 3.2,
      "fat": 15.1,
      "carbs": 51.4,
      "fiber": 2.4,
      "sodium": 0.0,
      "calcium": 47.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ap114",
    "code": "AP114",
    "name": "Yangko",
    "category": "Serealia & Olahan",
    "n": {
      "energy": 254.0,
      "protein": 3.0,
      "fat": 1.1,
      "carbs": 58.1,
      "fiber": 0.8,
      "sodium": 0.0,
      "calcium": 184.0,
      "iron": 2.6,
      "vitA": 96.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br001",
    "code": "BR001",
    "name": "Arrowroot, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 102.0,
      "protein": 1.0,
      "fat": 0.2,
      "carbs": 24.1,
      "fiber": 1.7,
      "sodium": 36.0,
      "calcium": 28.0,
      "iron": 1.7,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "br002",
    "code": "BR002",
    "name": "Batatas gembili, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 76.0,
      "protein": 1.1,
      "fat": 0.9,
      "carbs": 16.0,
      "fiber": 4.2,
      "sodium": 10.0,
      "calcium": 0.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br003",
    "code": "BR003",
    "name": "Batatas kelapa, ubi, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 89.0,
      "protein": 1.1,
      "fat": 0.1,
      "carbs": 21.0,
      "fiber": 4.0,
      "sodium": 20.0,
      "calcium": 0.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br004",
    "code": "BR004",
    "name": "Belitung, talas, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 145.0,
      "protein": 1.2,
      "fat": 0.4,
      "carbs": 34.2,
      "fiber": 1.5,
      "sodium": 6.0,
      "calcium": 26.0,
      "iron": 1.4,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "br005",
    "code": "BR005",
    "name": "Bengkuang, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 59.0,
      "protein": 1.4,
      "fat": 0.2,
      "carbs": 12.8,
      "fiber": 1.0,
      "sodium": 2.0,
      "calcium": 15.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 20.0
    }
  },
  {
    "id": "br006",
    "code": "BR006",
    "name": "Bentul (Komba), talas, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 98.0,
      "protein": 1.6,
      "fat": 0.7,
      "carbs": 20.9,
      "fiber": 0.7,
      "sodium": 0.0,
      "calcium": 44.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br007",
    "code": "BR007",
    "name": "Gadeng/Gadung, kering",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 322.0,
      "protein": 2.4,
      "fat": 0.6,
      "carbs": 76.6,
      "fiber": 0.0,
      "sodium": 5.0,
      "calcium": 39.0,
      "iron": 2.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br008",
    "code": "BR008",
    "name": "Gadung, ubi, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 100.0,
      "protein": 0.9,
      "fat": 0.3,
      "carbs": 23.5,
      "fiber": 2.1,
      "sodium": 8.0,
      "calcium": 79.0,
      "iron": 0.9,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "br009",
    "code": "BR009",
    "name": "Ganyong, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 77.0,
      "protein": 0.6,
      "fat": 0.2,
      "carbs": 18.4,
      "fiber": 0.8,
      "sodium": 0.0,
      "calcium": 15.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "br010",
    "code": "BR010",
    "name": "Gembili, ubi, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 131.0,
      "protein": 1.1,
      "fat": 0.2,
      "carbs": 31.3,
      "fiber": 1.1,
      "sodium": 10.0,
      "calcium": 14.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "br011",
    "code": "BR011",
    "name": "Hofa/Ubi hutan, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 127.0,
      "protein": 1.2,
      "fat": 0.5,
      "carbs": 29.5,
      "fiber": 3.4,
      "sodium": 3.0,
      "calcium": 30.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br012",
    "code": "BR012",
    "name": "Kaburan, ubi, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 133.0,
      "protein": 1.0,
      "fat": 0.2,
      "carbs": 32.2,
      "fiber": 0.7,
      "sodium": 10.0,
      "calcium": 65.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br013",
    "code": "BR013",
    "name": "Kentang, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 62.0,
      "protein": 2.1,
      "fat": 0.2,
      "carbs": 13.5,
      "fiber": 0.5,
      "sodium": 7.0,
      "calcium": 63.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 21.0
    }
  },
  {
    "id": "br014",
    "code": "BR014",
    "name": "Kentang hitam, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 142.0,
      "protein": 0.9,
      "fat": 0.4,
      "carbs": 33.7,
      "fiber": 5.4,
      "sodium": 22.0,
      "calcium": 34.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 38.0
    }
  },
  {
    "id": "br015",
    "code": "BR015",
    "name": "Keribang, ubi, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 137.0,
      "protein": 1.3,
      "fat": 1.1,
      "carbs": 29.8,
      "fiber": 0.6,
      "sodium": 10.0,
      "calcium": 45.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br016",
    "code": "BR016",
    "name": "Ketela pohon/singkong, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 154.0,
      "protein": 1.0,
      "fat": 0.3,
      "carbs": 36.8,
      "fiber": 0.9,
      "sodium": 2.0,
      "calcium": 77.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 31.0
    }
  },
  {
    "id": "br017",
    "code": "BR017",
    "name": "Lepok/Ubi rumput",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 181.0,
      "protein": 2.8,
      "fat": 1.2,
      "carbs": 39.8,
      "fiber": 10.7,
      "sodium": 116.0,
      "calcium": 0.0,
      "iron": 3.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br018",
    "code": "BR018",
    "name": "Sagu aren, kering",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 355.0,
      "protein": 0.6,
      "fat": 1.1,
      "carbs": 85.6,
      "fiber": 0.3,
      "sodium": 2.0,
      "calcium": 91.0,
      "iron": 2.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br019",
    "code": "BR019",
    "name": "Sagu aren, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 231.0,
      "protein": 0.6,
      "fat": 0.2,
      "carbs": 56.6,
      "fiber": 3.2,
      "sodium": 7.0,
      "calcium": 20.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br020",
    "code": "BR020",
    "name": "Sagu kasbi segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 230.0,
      "protein": 0.6,
      "fat": 0.2,
      "carbs": 56.5,
      "fiber": 3.0,
      "sodium": 100.0,
      "calcium": 20.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br021",
    "code": "BR021",
    "name": "Sagu lempeng",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 347.0,
      "protein": 0.9,
      "fat": 0.3,
      "carbs": 85.2,
      "fiber": 4.7,
      "sodium": 11.0,
      "calcium": 30.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br022",
    "code": "BR022",
    "name": "Sagu singkong, kering",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 362.0,
      "protein": 0.5,
      "fat": 0.3,
      "carbs": 86.9,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br023",
    "code": "BR023",
    "name": "Sente, talas, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 353.0,
      "protein": 0.7,
      "fat": 0.2,
      "carbs": 84.7,
      "fiber": 6.6,
      "sodium": 30.0,
      "calcium": 11.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 5.0
    }
  },
  {
    "id": "br024",
    "code": "BR024",
    "name": "Suweg, talas, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 74.0,
      "protein": 1.4,
      "fat": 0.1,
      "carbs": 17.2,
      "fiber": 1.4,
      "sodium": 7.0,
      "calcium": 42.0,
      "iron": 1.3,
      "vitA": 254.0,
      "vitC": 2.0
    }
  },
  {
    "id": "br025",
    "code": "BR025",
    "name": "Talas bogor, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 108.0,
      "protein": 1.4,
      "fat": 0.4,
      "carbs": 25.0,
      "fiber": 0.9,
      "sodium": 10.0,
      "calcium": 47.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "br026",
    "code": "BR026",
    "name": "Talas pontianak, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 163.0,
      "protein": 2.3,
      "fat": 0.5,
      "carbs": 36.4,
      "fiber": 0.7,
      "sodium": 14.0,
      "calcium": 45.0,
      "iron": 1.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br027",
    "code": "BR027",
    "name": "Talas viqueque, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 115.0,
      "protein": 1.8,
      "fat": 0.5,
      "carbs": 25.9,
      "fiber": 8.6,
      "sodium": 1.0,
      "calcium": 50.0,
      "iron": 0.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br028",
    "code": "BR028",
    "name": "Ubi jalar, kuning, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 119.0,
      "protein": 0.5,
      "fat": 0.4,
      "carbs": 25.1,
      "fiber": 4.2,
      "sodium": 3.0,
      "calcium": 30.0,
      "iron": 0.4,
      "vitA": 4948.0,
      "vitC": 21.0
    }
  },
  {
    "id": "br029",
    "code": "BR029",
    "name": "Ubi jalar manis, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 83.0,
      "protein": 1.5,
      "fat": 0.2,
      "carbs": 18.8,
      "fiber": 0.6,
      "sodium": 52.0,
      "calcium": 27.0,
      "iron": 2.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "br030",
    "code": "BR030",
    "name": "Ubi jalar merah, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 151.0,
      "protein": 1.6,
      "fat": 0.3,
      "carbs": 35.4,
      "fiber": 0.7,
      "sodium": 92.0,
      "calcium": 29.0,
      "iron": 0.7,
      "vitA": 1208.0,
      "vitC": 11.0
    }
  },
  {
    "id": "br031",
    "code": "BR031",
    "name": "Ubi jalar putih, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 88.0,
      "protein": 0.4,
      "fat": 0.4,
      "carbs": 20.6,
      "fiber": 4.0,
      "sodium": 2.0,
      "calcium": 30.0,
      "iron": 0.5,
      "vitA": 264.0,
      "vitC": 36.0
    }
  },
  {
    "id": "br032",
    "code": "BR032",
    "name": "Ubi jalar tinta/kemayung",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 108.0,
      "protein": 0.5,
      "fat": 0.4,
      "carbs": 25.6,
      "fiber": 4.2,
      "sodium": 1.0,
      "calcium": 30.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 24.0
    }
  },
  {
    "id": "br033",
    "code": "BR033",
    "name": "Umbi Uwi, segar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 120.0,
      "protein": 2.8,
      "fat": 0.5,
      "carbs": 82.3,
      "fiber": 2.6,
      "sodium": 12.0,
      "calcium": 0.0,
      "iron": 1.3,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "bp001",
    "code": "BP001",
    "name": "Batatas kelapa, ubi, bakar",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 110.0,
      "protein": 1.4,
      "fat": 1.1,
      "carbs": 23.4,
      "fiber": 4.5,
      "sodium": 12.0,
      "calcium": 0.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp002",
    "code": "BP002",
    "name": "Batatas kelapa, ubi, kukus",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 92.0,
      "protein": 1.2,
      "fat": 0.3,
      "carbs": 21.0,
      "fiber": 4.1,
      "sodium": 10.0,
      "calcium": 0.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp003",
    "code": "BP003",
    "name": "Batatas tali, ubi, rebus",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 182.0,
      "protein": 2.4,
      "fat": 0.4,
      "carbs": 42.2,
      "fiber": 9.2,
      "sodium": 20.0,
      "calcium": 0.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp004",
    "code": "BP004",
    "name": "Belitung, talas, kukus",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 145.0,
      "protein": 1.2,
      "fat": 0.4,
      "carbs": 34.2,
      "fiber": 1.0,
      "sodium": 7.0,
      "calcium": 21.0,
      "iron": 0.9,
      "vitA": 0.0,
      "vitC": 1.0
    }
  },
  {
    "id": "bp005",
    "code": "BP005",
    "name": "Bentul, talas, kukus",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 71.0,
      "protein": 2.3,
      "fat": 0.3,
      "carbs": 15.4,
      "fiber": 0.5,
      "sodium": 0.0,
      "calcium": 29.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 21.0
    }
  },
  {
    "id": "bp006",
    "code": "BP006",
    "name": "Gadung, ubi, kukus",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 88.0,
      "protein": 0.6,
      "fat": 0.3,
      "carbs": 20.9,
      "fiber": 0.9,
      "sodium": 6.0,
      "calcium": 26.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp007",
    "code": "BP007",
    "name": "Ganyong, rebus",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 100.0,
      "protein": 0.8,
      "fat": 0.2,
      "carbs": 23.8,
      "fiber": 0.9,
      "sodium": 0.0,
      "calcium": 15.0,
      "iron": 0.9,
      "vitA": 0.0,
      "vitC": 6.0
    }
  },
  {
    "id": "bp008",
    "code": "BP008",
    "name": "Ketela pohon/singkong kukus",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 153.0,
      "protein": 1.2,
      "fat": 0.3,
      "carbs": 36.4,
      "fiber": 1.3,
      "sodium": 2.0,
      "calcium": 56.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 20.0
    }
  },
  {
    "id": "bp009",
    "code": "BP009",
    "name": "Suweg, talas, kukus",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 93.0,
      "protein": 1.5,
      "fat": 0.1,
      "carbs": 21.9,
      "fiber": 0.9,
      "sodium": 6.0,
      "calcium": 150.0,
      "iron": 0.8,
      "vitA": 283.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp010",
    "code": "BP010",
    "name": "Talas bogor, kukus",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 120.0,
      "protein": 1.5,
      "fat": 0.3,
      "carbs": 28.2,
      "fiber": 0.7,
      "sodium": 11.0,
      "calcium": 31.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "bp011",
    "code": "BP011",
    "name": "Ubi jalar, kuning, kukus",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 100.0,
      "protein": 0.7,
      "fat": 0.3,
      "carbs": 23.8,
      "fiber": 1.0,
      "sodium": 3.0,
      "calcium": 144.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 16.0
    }
  },
  {
    "id": "bp012",
    "code": "BP012",
    "name": "Ubi jalar tinta/kemayung kukus",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 165.0,
      "protein": 0.9,
      "fat": 0.2,
      "carbs": 39.8,
      "fiber": 1.1,
      "sodium": 1.0,
      "calcium": 20.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp013",
    "code": "BP013",
    "name": "Bagea kelapa asin",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 450.0,
      "protein": 3.2,
      "fat": 13.9,
      "carbs": 78.1,
      "fiber": 0.0,
      "sodium": 74.0,
      "calcium": 38.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp014",
    "code": "BP014",
    "name": "Bagea kelapa manis",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 452.0,
      "protein": 1.3,
      "fat": 13.8,
      "carbs": 80.6,
      "fiber": 0.0,
      "sodium": 75.0,
      "calcium": 38.0,
      "iron": 0.3,
      "vitA": 0.3,
      "vitC": 0.0
    }
  },
  {
    "id": "bp015",
    "code": "BP015",
    "name": "Bagea kenari asin",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 529.0,
      "protein": 3.2,
      "fat": 29.1,
      "carbs": 63.6,
      "fiber": 0.0,
      "sodium": 74.0,
      "calcium": 38.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp016",
    "code": "BP016",
    "name": "Bagea kenari manis",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 523.0,
      "protein": 3.2,
      "fat": 28.2,
      "carbs": 64.2,
      "fiber": 0.0,
      "sodium": 74.0,
      "calcium": 38.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp017",
    "code": "BP017",
    "name": "Bagea kw 1",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 416.0,
      "protein": 6.5,
      "fat": 9.4,
      "carbs": 76.3,
      "fiber": 0.4,
      "sodium": 0.0,
      "calcium": 49.0,
      "iron": 4.9,
      "vitA": 13.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp018",
    "code": "BP018",
    "name": "Bagea kw 2",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 382.0,
      "protein": 0.3,
      "fat": 3.5,
      "carbs": 87.2,
      "fiber": 8.0,
      "sodium": 0.0,
      "calcium": 172.0,
      "iron": 7.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp019",
    "code": "BP019",
    "name": "Beras Cerdas",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 350.0,
      "protein": 2.7,
      "fat": 1.1,
      "carbs": 82.3,
      "fiber": 6.2,
      "sodium": 358.0,
      "calcium": 28.0,
      "iron": 2.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp020",
    "code": "BP020",
    "name": "Beras ganyong",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 364.0,
      "protein": 3.4,
      "fat": 0.7,
      "carbs": 86.3,
      "fiber": 4.7,
      "sodium": 4.0,
      "calcium": 0.0,
      "iron": 5.0,
      "vitA": 0.1,
      "vitC": 0.0
    }
  },
  {
    "id": "bp021",
    "code": "BP021",
    "name": "Beras Siger",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 344.0,
      "protein": 1.1,
      "fat": 0.2,
      "carbs": 28.3,
      "fiber": 5.6,
      "sodium": 106.0,
      "calcium": 32.0,
      "iron": 5.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp022",
    "code": "BP022",
    "name": "Biji nangka/Biji salak",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 262.0,
      "protein": 2.3,
      "fat": 5.4,
      "carbs": 51.1,
      "fiber": 8.0,
      "sodium": 10.0,
      "calcium": 60.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 10.0
    }
  },
  {
    "id": "bp023",
    "code": "BP023",
    "name": "Bubur sagu",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 167.0,
      "protein": 0.2,
      "fat": 4.0,
      "carbs": 33.0,
      "fiber": 0.0,
      "sodium": 7.0,
      "calcium": 0.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp024",
    "code": "BP024",
    "name": "Cassavastick",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 460.0,
      "protein": 0.8,
      "fat": 18.7,
      "carbs": 71.8,
      "fiber": 1.6,
      "sodium": 0.0,
      "calcium": 144.0,
      "iron": 7.5,
      "vitA": 107.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp025",
    "code": "BP025",
    "name": "Ceriping getuk singkong",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 462.0,
      "protein": 1.2,
      "fat": 20.7,
      "carbs": 67.7,
      "fiber": 0.6,
      "sodium": 0.0,
      "calcium": 1248.0,
      "iron": 8.8,
      "vitA": 152.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp026",
    "code": "BP026",
    "name": "Gatot",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 347.0,
      "protein": 1.3,
      "fat": 0.7,
      "carbs": 83.8,
      "fiber": 5.8,
      "sodium": 28.0,
      "calcium": 78.0,
      "iron": 17.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp027",
    "code": "BP027",
    "name": "Geblek",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 195.0,
      "protein": 0.4,
      "fat": 1.7,
      "carbs": 44.4,
      "fiber": 3.6,
      "sodium": 353.0,
      "calcium": 35.0,
      "iron": 0.6,
      "vitA": 0.3,
      "vitC": 0.0
    }
  },
  {
    "id": "bp028",
    "code": "BP028",
    "name": "Getuk goreng",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 360.0,
      "protein": 1.3,
      "fat": 6.4,
      "carbs": 74.3,
      "fiber": 0.8,
      "sodium": 0.0,
      "calcium": 59.0,
      "iron": 3.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp029",
    "code": "BP029",
    "name": "Getuk singkong",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 204.0,
      "protein": 0.5,
      "fat": 1.4,
      "carbs": 47.4,
      "fiber": 0.8,
      "sodium": 0.0,
      "calcium": 97.0,
      "iron": 1.5,
      "vitA": 208.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp030",
    "code": "BP030",
    "name": "Gurandil",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 218.0,
      "protein": 0.5,
      "fat": 2.5,
      "carbs": 48.5,
      "fiber": 3.1,
      "sodium": 0.0,
      "calcium": 150.0,
      "iron": 2.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp031",
    "code": "BP031",
    "name": "Kabuto",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 250.0,
      "protein": 2.6,
      "fat": 2.5,
      "carbs": 35.4,
      "fiber": 1.8,
      "sodium": 2.0,
      "calcium": 35.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp032",
    "code": "BP032",
    "name": "Kapurung",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 41.0,
      "protein": 2.0,
      "fat": 0.3,
      "carbs": 7.8,
      "fiber": 2.0,
      "sodium": 185.0,
      "calcium": 34.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 15.0
    }
  },
  {
    "id": "bp033",
    "code": "BP033",
    "name": "Kecimpring singkong goreng",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 464.0,
      "protein": 1.2,
      "fat": 18.6,
      "carbs": 73.0,
      "fiber": 1.3,
      "sodium": 0.0,
      "calcium": 82.0,
      "iron": 3.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp034",
    "code": "BP034",
    "name": "Keremes",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 475.0,
      "protein": 1.6,
      "fat": 25.2,
      "carbs": 64.4,
      "fiber": 2.1,
      "sodium": 0.0,
      "calcium": 153.0,
      "iron": 1.0,
      "vitA": 1000.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp035",
    "code": "BP035",
    "name": "Keripik gadung",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 446.0,
      "protein": 2.8,
      "fat": 14.5,
      "carbs": 76.0,
      "fiber": 1.7,
      "sodium": 0.0,
      "calcium": 147.0,
      "iron": 1.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp036",
    "code": "BP036",
    "name": "Keripik kentang",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 448.0,
      "protein": 2.7,
      "fat": 18.8,
      "carbs": 67.1,
      "fiber": 3.8,
      "sodium": 712.0,
      "calcium": 25.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp037",
    "code": "BP037",
    "name": "Keripik singkong",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 478.0,
      "protein": 0.9,
      "fat": 20.7,
      "carbs": 72.0,
      "fiber": 2.0,
      "sodium": 0.0,
      "calcium": 189.0,
      "iron": 1.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp038",
    "code": "BP038",
    "name": "Keripik singkong berbumbu",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 481.0,
      "protein": 2.2,
      "fat": 19.7,
      "carbs": 73.6,
      "fiber": 1.6,
      "sodium": 0.0,
      "calcium": 156.0,
      "iron": 1.6,
      "vitA": 80.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp039",
    "code": "BP039",
    "name": "Keripik ubi",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 486.0,
      "protein": 0.2,
      "fat": 23.9,
      "carbs": 67.6,
      "fiber": 14.3,
      "sodium": 52.0,
      "calcium": 68.0,
      "iron": 0.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp040",
    "code": "BP040",
    "name": "Kerupuk cumi goreng",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 444.0,
      "protein": 6.9,
      "fat": 14.6,
      "carbs": 71.3,
      "fiber": 5.0,
      "sodium": 837.0,
      "calcium": 47.0,
      "iron": 1.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp041",
    "code": "BP041",
    "name": "Kerupuk kemplang (ikan) mentah",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 325.0,
      "protein": 1.8,
      "fat": 0.4,
      "carbs": 78.5,
      "fiber": 4.5,
      "sodium": 1123.0,
      "calcium": 59.0,
      "iron": 2.3,
      "vitA": 32.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp042",
    "code": "BP042",
    "name": "Kerupuk kemplang goreng",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 504.0,
      "protein": 5.6,
      "fat": 28.1,
      "carbs": 57.1,
      "fiber": 0.3,
      "sodium": 0.0,
      "calcium": 50.0,
      "iron": 2.9,
      "vitA": 6.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp043",
    "code": "BP043",
    "name": "Kerupuk kemplang panggang",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 356.0,
      "protein": 9.7,
      "fat": 1.1,
      "carbs": 76.9,
      "fiber": 1.0,
      "sodium": 0.0,
      "calcium": 362.0,
      "iron": 2.9,
      "vitA": 7.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp044",
    "code": "BP044",
    "name": "Kerupuk mie kuning goreng",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 476.0,
      "protein": 0.1,
      "fat": 21.1,
      "carbs": 71.3,
      "fiber": 4.2,
      "sodium": 0.0,
      "calcium": 57.0,
      "iron": 4.6,
      "vitA": 333.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp045",
    "code": "BP045",
    "name": "Kerupuk udang goreng",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 477.0,
      "protein": 4.7,
      "fat": 20.5,
      "carbs": 68.5,
      "fiber": 5.0,
      "sodium": 449.0,
      "calcium": 24.0,
      "iron": 0.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp046",
    "code": "BP046",
    "name": "Kue bangket",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 338.0,
      "protein": 1.5,
      "fat": 1.2,
      "carbs": 80.3,
      "fiber": 0.0,
      "sodium": 67.0,
      "calcium": 34.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp047",
    "code": "BP047",
    "name": "Kue putu singkong",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 217.0,
      "protein": 1.2,
      "fat": 0.5,
      "carbs": 53.2,
      "fiber": 2.4,
      "sodium": 3.0,
      "calcium": 48.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp048",
    "code": "BP048",
    "name": "Lanting getuk",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 422.0,
      "protein": 0.9,
      "fat": 10.8,
      "carbs": 80.4,
      "fiber": 1.4,
      "sodium": 0.0,
      "calcium": 206.0,
      "iron": 3.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp049",
    "code": "BP049",
    "name": "Mi golosor",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 71.0,
      "protein": 0.2,
      "fat": 0.8,
      "carbs": 15.9,
      "fiber": 0.1,
      "sodium": 0.0,
      "calcium": 117.0,
      "iron": 0.2,
      "vitA": 112.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp050",
    "code": "BP050",
    "name": "Mie Bendo",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 353.0,
      "protein": 0.3,
      "fat": 0.0,
      "carbs": 88.0,
      "fiber": 2.4,
      "sodium": 9.0,
      "calcium": 28.0,
      "iron": 2.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp051",
    "code": "BP051",
    "name": "Mie Sagu",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 190.0,
      "protein": 0.2,
      "fat": 0.4,
      "carbs": 46.5,
      "fiber": 1.4,
      "sodium": 10.0,
      "calcium": 0.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp052",
    "code": "BP052",
    "name": "Ongol-ongol sagu",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 111.0,
      "protein": 0.3,
      "fat": 2.7,
      "carbs": 21.2,
      "fiber": 0.3,
      "sodium": 0.0,
      "calcium": 79.0,
      "iron": 1.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp053",
    "code": "BP053",
    "name": "Oyek",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 351.0,
      "protein": 0.9,
      "fat": 0.9,
      "carbs": 84.9,
      "fiber": 4.3,
      "sodium": 5.0,
      "calcium": 60.0,
      "iron": 2.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp054",
    "code": "BP054",
    "name": "Papeda",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 61.0,
      "protein": 0.2,
      "fat": 0.1,
      "carbs": 14.9,
      "fiber": 0.5,
      "sodium": 4.0,
      "calcium": 0.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp055",
    "code": "BP055",
    "name": "Rasbi (Beras Ubi)",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 394.0,
      "protein": 2.2,
      "fat": 8.8,
      "carbs": 76.6,
      "fiber": 6.8,
      "sodium": 165.0,
      "calcium": 68.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp056",
    "code": "BP056",
    "name": "Rasi (Beras Singkong)",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 350.0,
      "protein": 0.9,
      "fat": 0.4,
      "carbs": 85.7,
      "fiber": 14.4,
      "sodium": 8.0,
      "calcium": 42.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp057",
    "code": "BP057",
    "name": "Sagu forno",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 291.0,
      "protein": 0.5,
      "fat": 4.0,
      "carbs": 63.4,
      "fiber": 0.0,
      "sodium": 40.0,
      "calcium": 10.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp058",
    "code": "BP058",
    "name": "Sagu Lemak (Kue Sagon)",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 452.0,
      "protein": 2.8,
      "fat": 14.8,
      "carbs": 76.8,
      "fiber": 1.1,
      "sodium": 182.0,
      "calcium": 15.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp059",
    "code": "BP059",
    "name": "Sagu manis",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 287.0,
      "protein": 0.5,
      "fat": 3.9,
      "carbs": 62.4,
      "fiber": 0.0,
      "sodium": 34.0,
      "calcium": 0.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp060",
    "code": "BP060",
    "name": "Sagu Rendang",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 364.0,
      "protein": 0.1,
      "fat": 0.2,
      "carbs": 90.5,
      "fiber": 1.9,
      "sodium": 42.0,
      "calcium": 113.0,
      "iron": 3.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp061",
    "code": "BP061",
    "name": "Sagu sinole",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 354.0,
      "protein": 0.8,
      "fat": 8.3,
      "carbs": 68.9,
      "fiber": 0.0,
      "sodium": 30.0,
      "calcium": 10.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp062",
    "code": "BP062",
    "name": "Serimping talas kebumen",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 478.0,
      "protein": 2.5,
      "fat": 21.2,
      "carbs": 69.2,
      "fiber": 1.7,
      "sodium": 0.0,
      "calcium": 112.0,
      "iron": 2.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp063",
    "code": "BP063",
    "name": "Tapai singkong",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 169.0,
      "protein": 1.4,
      "fat": 0.3,
      "carbs": 40.2,
      "fiber": 2.0,
      "sodium": 0.0,
      "calcium": 21.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "bp064",
    "code": "BP064",
    "name": "Tepung Arrowroot",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 355.0,
      "protein": 0.7,
      "fat": 0.2,
      "carbs": 85.2,
      "fiber": 0.4,
      "sodium": 2.0,
      "calcium": 0.0,
      "iron": 1.5,
      "vitA": 3.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp065",
    "code": "BP065",
    "name": "Tepung Ganyong",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 353.0,
      "protein": 0.8,
      "fat": 1.7,
      "carbs": 83.6,
      "fiber": 0.7,
      "sodium": 3.0,
      "calcium": 0.0,
      "iron": 3.3,
      "vitA": 0.0,
      "vitC": 1.0
    }
  },
  {
    "id": "bp066",
    "code": "BP066",
    "name": "Tepung Gaplek",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 345.0,
      "protein": 2.4,
      "fat": 0.4,
      "carbs": 83.1,
      "fiber": 6.7,
      "sodium": 6.0,
      "calcium": 18.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp067",
    "code": "BP067",
    "name": "Tepung kentang, kering",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 347.0,
      "protein": 0.3,
      "fat": 0.1,
      "carbs": 85.6,
      "fiber": 0.4,
      "sodium": 51.0,
      "calcium": 120.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp068",
    "code": "BP068",
    "name": "Tepung Mocaf",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 350.0,
      "protein": 1.2,
      "fat": 0.6,
      "carbs": 85.0,
      "fiber": 6.0,
      "sodium": 8.0,
      "calcium": 60.0,
      "iron": 15.8,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "bp069",
    "code": "BP069",
    "name": "Tepung Sente",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 326.0,
      "protein": 4.0,
      "fat": 0.4,
      "carbs": 76.7,
      "fiber": 8.5,
      "sodium": 14.0,
      "calcium": 41.0,
      "iron": 3.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp070",
    "code": "BP070",
    "name": "Tepung singkong/Tapioka",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 363.0,
      "protein": 1.1,
      "fat": 0.5,
      "carbs": 88.2,
      "fiber": 0.9,
      "sodium": 1.0,
      "calcium": 84.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp071",
    "code": "BP071",
    "name": "Tepung Tales Beneng",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 332.0,
      "protein": 5.7,
      "fat": 0.6,
      "carbs": 76.1,
      "fiber": 12.2,
      "sodium": 7.0,
      "calcium": 59.0,
      "iron": 10.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp072",
    "code": "BP072",
    "name": "Tepung Ubi Ungu",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 354.0,
      "protein": 2.8,
      "fat": 0.6,
      "carbs": 84.4,
      "fiber": 12.9,
      "sodium": 42.0,
      "calcium": 89.0,
      "iron": 3.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp073",
    "code": "BP073",
    "name": "Tiwul",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 353.0,
      "protein": 2.4,
      "fat": 1.1,
      "carbs": 83.4,
      "fiber": 6.5,
      "sodium": 5.0,
      "calcium": 55.0,
      "iron": 4.7,
      "vitA": 0.0,
      "vitC": 3.0
    }
  },
  {
    "id": "bp074",
    "code": "BP074",
    "name": "Tiwul Instan",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 395.0,
      "protein": 3.2,
      "fat": 8.5,
      "carbs": 76.5,
      "fiber": 4.2,
      "sodium": 377.0,
      "calcium": 81.0,
      "iron": 5.8,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "bp075",
    "code": "BP075",
    "name": "Ubi Cilembu",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 186.0,
      "protein": 1.9,
      "fat": 0.2,
      "carbs": 44.3,
      "fiber": 3.4,
      "sodium": 1.0,
      "calcium": 37.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "bp076",
    "code": "BP076",
    "name": "Uli batatas",
    "category": "Umbi Berpati & Olahan",
    "n": {
      "energy": 150.0,
      "protein": 1.1,
      "fat": 4.0,
      "carbs": 27.4,
      "fiber": 0.0,
      "sodium": 6.0,
      "calcium": 1.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr001",
    "code": "CR001",
    "name": "Kacang arab, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 330.0,
      "protein": 23.8,
      "fat": 1.4,
      "carbs": 60.2,
      "fiber": 17.4,
      "sodium": 24.0,
      "calcium": 357.0,
      "iron": 4.7,
      "vitA": 140.0,
      "vitC": 2.0
    }
  },
  {
    "id": "cr002",
    "code": "CR002",
    "name": "Kacang babi, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 341.0,
      "protein": 30.4,
      "fat": 3.2,
      "carbs": 51.3,
      "fiber": 4.5,
      "sodium": 13.0,
      "calcium": 178.0,
      "iron": 6.8,
      "vitA": 87.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr003",
    "code": "CR003",
    "name": "Kacang belimbing (kecipir), kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 400.0,
      "protein": 34.4,
      "fat": 16.9,
      "carbs": 34.1,
      "fiber": 10.7,
      "sodium": 37.0,
      "calcium": 468.0,
      "iron": 6.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr004",
    "code": "CR004",
    "name": "Kacang beracun, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 118.0,
      "protein": 4.4,
      "fat": 1.5,
      "carbs": 21.6,
      "fiber": 0.0,
      "sodium": 10.0,
      "calcium": 50.0,
      "iron": 1.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr005",
    "code": "CR005",
    "name": "Kacang bogor, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 370.0,
      "protein": 16.0,
      "fat": 6.0,
      "carbs": 65.0,
      "fiber": 26.3,
      "sodium": 44.0,
      "calcium": 385.0,
      "iron": 4.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr006",
    "code": "CR006",
    "name": "Kacang bogor, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 165.0,
      "protein": 7.7,
      "fat": 3.1,
      "carbs": 27.4,
      "fiber": 2.5,
      "sodium": 6.0,
      "calcium": 196.0,
      "iron": 5.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr007",
    "code": "CR007",
    "name": "Kacang endel, biji, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 331.0,
      "protein": 25.0,
      "fat": 1.0,
      "carbs": 58.0,
      "fiber": 23.6,
      "sodium": 12.0,
      "calcium": 280.0,
      "iron": 5.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr008",
    "code": "CR008",
    "name": "Kacang ercis, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 129.0,
      "protein": 12.4,
      "fat": 0.7,
      "carbs": 18.3,
      "fiber": 28.6,
      "sodium": 4.0,
      "calcium": 140.0,
      "iron": 2.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr009",
    "code": "CR009",
    "name": "kacang galing, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 336.0,
      "protein": 23.1,
      "fat": 1.7,
      "carbs": 59.5,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 80.0,
      "iron": 5.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr010",
    "code": "CR010",
    "name": "Kacang gude, biji, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 316.0,
      "protein": 20.7,
      "fat": 1.0,
      "carbs": 58.0,
      "fiber": 4.6,
      "sodium": 16.0,
      "calcium": 146.0,
      "iron": 4.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr011",
    "code": "CR011",
    "name": "Kacang gude, biji, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 114.0,
      "protein": 7.0,
      "fat": 0.6,
      "carbs": 20.8,
      "fiber": 4.4,
      "sodium": 4.0,
      "calcium": 0.0,
      "iron": 1.5,
      "vitA": 70.0,
      "vitC": 43.0
    }
  },
  {
    "id": "cr012",
    "code": "CR012",
    "name": "Kacang hijau var, bakti, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 350.0,
      "protein": 17.1,
      "fat": 1.8,
      "carbs": 70.7,
      "fiber": 5.7,
      "sodium": 46.0,
      "calcium": 94.0,
      "iron": 4.9,
      "vitA": 235.0,
      "vitC": 11.0
    }
  },
  {
    "id": "cr013",
    "code": "CR013",
    "name": "Kacang hijau var, siwalik, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 339.0,
      "protein": 20.8,
      "fat": 2.1,
      "carbs": 64.6,
      "fiber": 7.4,
      "sodium": 45.0,
      "calcium": 122.0,
      "iron": 4.9,
      "vitA": 321.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr014",
    "code": "CR014",
    "name": "Kacang hijau, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 323.0,
      "protein": 22.9,
      "fat": 1.5,
      "carbs": 56.8,
      "fiber": 7.5,
      "sodium": 42.0,
      "calcium": 223.0,
      "iron": 7.5,
      "vitA": 223.0,
      "vitC": 10.0
    }
  },
  {
    "id": "cr015",
    "code": "CR015",
    "name": "Kacang hitam, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 346.0,
      "protein": 16.6,
      "fat": 1.7,
      "carbs": 66.1,
      "fiber": 22.8,
      "sodium": 3.0,
      "calcium": 70.0,
      "iron": 4.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr016",
    "code": "CR016",
    "name": "Kacang kapri, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 98.0,
      "protein": 6.7,
      "fat": 0.4,
      "carbs": 17.7,
      "fiber": 6.2,
      "sodium": 6.0,
      "calcium": 22.0,
      "iron": 1.9,
      "vitA": 680.0,
      "vitC": 26.0
    }
  },
  {
    "id": "cr017",
    "code": "CR017",
    "name": "Kacang kedelai, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 381.0,
      "protein": 40.4,
      "fat": 16.7,
      "carbs": 24.9,
      "fiber": 3.2,
      "sodium": 210.0,
      "calcium": 222.0,
      "iron": 10.0,
      "vitA": 31.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr018",
    "code": "CR018",
    "name": "Kacang kedelai, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 286.0,
      "protein": 30.2,
      "fat": 15.6,
      "carbs": 30.1,
      "fiber": 2.9,
      "sodium": 28.0,
      "calcium": 196.0,
      "iron": 6.9,
      "vitA": 95.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr019",
    "code": "CR019",
    "name": "Kacang kincai, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 444.0,
      "protein": 19.9,
      "fat": 16.0,
      "carbs": 55.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 26.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr020",
    "code": "CR020",
    "name": "Kacang komak, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 327.0,
      "protein": 16.4,
      "fat": 4.3,
      "carbs": 55.8,
      "fiber": 0.5,
      "sodium": 22.0,
      "calcium": 74.0,
      "iron": 4.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr021",
    "code": "CR021",
    "name": "Kacang kuning, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 355.0,
      "protein": 17.0,
      "fat": 2.5,
      "carbs": 66.0,
      "fiber": 15.1,
      "sodium": 1.0,
      "calcium": 140.0,
      "iron": 5.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr022",
    "code": "CR022",
    "name": "Kacang lebui /iris, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 346.0,
      "protein": 16.5,
      "fat": 1.5,
      "carbs": 66.6,
      "fiber": 37.3,
      "sodium": 17.0,
      "calcium": 144.0,
      "iron": 3.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr023",
    "code": "CR023",
    "name": "Kacang mentega, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 344.0,
      "protein": 16.7,
      "fat": 2.1,
      "carbs": 64.6,
      "fiber": 13.0,
      "sodium": 1.0,
      "calcium": 110.0,
      "iron": 6.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr024",
    "code": "CR024",
    "name": "Kacang merah /banda, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 350.0,
      "protein": 13.9,
      "fat": 3.0,
      "carbs": 66.9,
      "fiber": 26.3,
      "sodium": 19.0,
      "calcium": 84.0,
      "iron": 6.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr025",
    "code": "CR025",
    "name": "Kacang merah tua, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 280.0,
      "protein": 16.7,
      "fat": 1.6,
      "carbs": 63.2,
      "fiber": 4.6,
      "sodium": 19.0,
      "calcium": 209.0,
      "iron": 6.4,
      "vitA": 0.0,
      "vitC": 6.0
    }
  },
  {
    "id": "cr026",
    "code": "CR026",
    "name": "Kacang merah, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 314.0,
      "protein": 22.1,
      "fat": 1.1,
      "carbs": 56.2,
      "fiber": 4.0,
      "sodium": 11.0,
      "calcium": 502.0,
      "iron": 10.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr027",
    "code": "CR027",
    "name": "Kacang merah, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 171.0,
      "protein": 11.0,
      "fat": 2.2,
      "carbs": 28.0,
      "fiber": 2.1,
      "sodium": 7.0,
      "calcium": 293.0,
      "iron": 3.7,
      "vitA": 10.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr028",
    "code": "CR028",
    "name": "Kacang mete/biji jambu monyet, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 616.0,
      "protein": 16.3,
      "fat": 48.4,
      "carbs": 28.7,
      "fiber": 0.9,
      "sodium": 26.0,
      "calcium": 26.0,
      "iron": 3.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr029",
    "code": "CR029",
    "name": "Kacang panjang, biji, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 357.0,
      "protein": 17.3,
      "fat": 1.5,
      "carbs": 68.6,
      "fiber": 10.6,
      "sodium": 16.0,
      "calcium": 163.0,
      "iron": 6.9,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "cr030",
    "code": "CR030",
    "name": "Kacang tanah sangan",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 560.0,
      "protein": 29.5,
      "fat": 43.0,
      "carbs": 24.1,
      "fiber": 2.9,
      "sodium": 34.0,
      "calcium": 107.0,
      "iron": 4.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr031",
    "code": "CR031",
    "name": "Kacang tanah sangan tanpa selaput",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 559.0,
      "protein": 26.9,
      "fat": 44.2,
      "carbs": 23.6,
      "fiber": 2.6,
      "sodium": 33.0,
      "calcium": 74.0,
      "iron": 1.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr032",
    "code": "CR032",
    "name": "Kacang tanah, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 525.0,
      "protein": 27.9,
      "fat": 42.7,
      "carbs": 17.4,
      "fiber": 2.4,
      "sodium": 31.0,
      "calcium": 316.0,
      "iron": 5.7,
      "vitA": 30.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr033",
    "code": "CR033",
    "name": "Kacang tolo / tunggak, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 331.0,
      "protein": 24.4,
      "fat": 1.9,
      "carbs": 56.6,
      "fiber": 1.6,
      "sodium": 15.0,
      "calcium": 481.0,
      "iron": 13.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr034",
    "code": "CR034",
    "name": "Kacang tunis, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 351.0,
      "protein": 12.2,
      "fat": 1.2,
      "carbs": 72.9,
      "fiber": 29.5,
      "sodium": 1.0,
      "calcium": 120.0,
      "iron": 6.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr035",
    "code": "CR035",
    "name": "Kacang uci, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 358.0,
      "protein": 23.4,
      "fat": 2.4,
      "carbs": 60.6,
      "fiber": 7.4,
      "sodium": 13.0,
      "calcium": 269.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "cr036",
    "code": "CR036",
    "name": "Kacang urei, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 354.0,
      "protein": 12.8,
      "fat": 1.8,
      "carbs": 69.3,
      "fiber": 26.1,
      "sodium": 1.0,
      "calcium": 220.0,
      "iron": 5.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr037",
    "code": "CR037",
    "name": "Kenari banda, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 616.0,
      "protein": 13.9,
      "fat": 56.2,
      "carbs": 13.7,
      "fiber": 0.0,
      "sodium": 11.0,
      "calcium": 0.0,
      "iron": 1.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr038",
    "code": "CR038",
    "name": "Kenari, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 657.0,
      "protein": 15.0,
      "fat": 66.0,
      "carbs": 13.0,
      "fiber": 0.0,
      "sodium": 3.0,
      "calcium": 92.0,
      "iron": 7.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr039",
    "code": "CR039",
    "name": "Komak polong, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 99.0,
      "protein": 3.3,
      "fat": 0.1,
      "carbs": 21.2,
      "fiber": 10.3,
      "sodium": 15.0,
      "calcium": 50.0,
      "iron": 13.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr040",
    "code": "CR040",
    "name": "Koro andong, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 356.0,
      "protein": 20.5,
      "fat": 4.1,
      "carbs": 61.6,
      "fiber": 7.0,
      "sodium": 18.0,
      "calcium": 150.0,
      "iron": 6.2,
      "vitA": 0.0,
      "vitC": 1.0
    }
  },
  {
    "id": "cr041",
    "code": "CR041",
    "name": "Koro benguk, biji, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 332.0,
      "protein": 24.0,
      "fat": 3.0,
      "carbs": 55.0,
      "fiber": 5.6,
      "sodium": 42.0,
      "calcium": 30.0,
      "iron": 2.0,
      "vitA": 70.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr042",
    "code": "CR042",
    "name": "Koro kerupuk, biji, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 125.0,
      "protein": 8.3,
      "fat": 0.7,
      "carbs": 22.1,
      "fiber": 2.2,
      "sodium": 16.0,
      "calcium": 17.0,
      "iron": 2.7,
      "vitA": 80.0,
      "vitC": 31.0
    }
  },
  {
    "id": "cr043",
    "code": "CR043",
    "name": "Koro loke, biji, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 33.0,
      "protein": 2.7,
      "fat": 0.2,
      "carbs": 7.9,
      "fiber": 3.5,
      "sodium": 2.0,
      "calcium": 60.0,
      "iron": 2.0,
      "vitA": 40.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr044",
    "code": "CR044",
    "name": "Koro roay, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 344.0,
      "protein": 12.5,
      "fat": 2.1,
      "carbs": 69.4,
      "fiber": 7.5,
      "sodium": 18.0,
      "calcium": 70.0,
      "iron": 4.4,
      "vitA": 28.0,
      "vitC": 1.0
    }
  },
  {
    "id": "cr045",
    "code": "CR045",
    "name": "Koro wedus, biji, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 338.0,
      "protein": 22.2,
      "fat": 1.5,
      "carbs": 61.0,
      "fiber": 5.8,
      "sodium": 43.0,
      "calcium": 88.0,
      "iron": 3.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cr046",
    "code": "CR046",
    "name": "Lamtoro biji, muda, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 85.0,
      "protein": 5.7,
      "fat": 0.3,
      "carbs": 15.4,
      "fiber": 10.8,
      "sodium": 35.0,
      "calcium": 180.0,
      "iron": 2.7,
      "vitA": 423.0,
      "vitC": 15.0
    }
  },
  {
    "id": "cr047",
    "code": "CR047",
    "name": "Lamtoro biji, tua, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 148.0,
      "protein": 10.6,
      "fat": 0.5,
      "carbs": 26.2,
      "fiber": 17.0,
      "sodium": 28.0,
      "calcium": 155.0,
      "iron": 2.2,
      "vitA": 416.0,
      "vitC": 20.0
    }
  },
  {
    "id": "cr048",
    "code": "CR048",
    "name": "Lamtoro var, gung tanpa kulit",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 367.0,
      "protein": 46.4,
      "fat": 5.4,
      "carbs": 32.5,
      "fiber": 2.6,
      "sodium": 65.0,
      "calcium": 136.0,
      "iron": 23.3,
      "vitA": 18900.0,
      "vitC": 9.0
    }
  },
  {
    "id": "cr049",
    "code": "CR049",
    "name": "Lamtoro var, lokal dengan kulit",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 336.0,
      "protein": 23.8,
      "fat": 1.2,
      "carbs": 59.7,
      "fiber": 15.4,
      "sodium": 134.0,
      "calcium": 867.0,
      "iron": 1.5,
      "vitA": 321.0,
      "vitC": 16.0
    }
  },
  {
    "id": "cr050",
    "code": "CR050",
    "name": "Nangka, biji, segar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 165.0,
      "protein": 4.2,
      "fat": 0.1,
      "carbs": 36.7,
      "fiber": 1.8,
      "sodium": 69.0,
      "calcium": 33.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 10.0
    }
  },
  {
    "id": "cr051",
    "code": "CR051",
    "name": "Saga merah terkupas, mentah",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 449.0,
      "protein": 30.6,
      "fat": 25.5,
      "carbs": 31.9,
      "fiber": 3.5,
      "sodium": 66.0,
      "calcium": 1062.0,
      "iron": 14.2,
      "vitA": 107.0,
      "vitC": 7.0
    }
  },
  {
    "id": "cr052",
    "code": "CR052",
    "name": "Wijen, mentah",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 568.0,
      "protein": 19.3,
      "fat": 51.1,
      "carbs": 18.1,
      "fiber": 3.6,
      "sodium": 18.0,
      "calcium": 1125.0,
      "iron": 9.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp001",
    "code": "CP001",
    "name": "Kacang belimbing, rebus",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 204.0,
      "protein": 16.9,
      "fat": 8.8,
      "carbs": 17.5,
      "fiber": 4.8,
      "sodium": 43.0,
      "calcium": 230.0,
      "iron": 3.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp002",
    "code": "CP002",
    "name": "Kacang bogor, goreng",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 479.0,
      "protein": 12.7,
      "fat": 23.2,
      "carbs": 58.9,
      "fiber": 1.2,
      "sodium": 0.0,
      "calcium": 135.0,
      "iron": 2.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp003",
    "code": "CP003",
    "name": "Kacang bogor, rebus",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 161.0,
      "protein": 7.7,
      "fat": 2.8,
      "carbs": 27.2,
      "fiber": 2.0,
      "sodium": 0.0,
      "calcium": 56.0,
      "iron": 1.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp004",
    "code": "CP004",
    "name": "Kacang gude, rebus",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 147.0,
      "protein": 9.0,
      "fat": 0.5,
      "carbs": 27.5,
      "fiber": 3.4,
      "sodium": 14.0,
      "calcium": 50.0,
      "iron": 2.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp005",
    "code": "CP005",
    "name": "kacang hijau, rebus",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 109.0,
      "protein": 8.7,
      "fat": 0.5,
      "carbs": 18.3,
      "fiber": 1.5,
      "sodium": 447.0,
      "calcium": 95.0,
      "iron": 1.5,
      "vitA": 120.0,
      "vitC": 3.0
    }
  },
  {
    "id": "cp006",
    "code": "CP006",
    "name": "Kacang kedelai, goreng",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 521.0,
      "protein": 32.2,
      "fat": 37.7,
      "carbs": 22.9,
      "fiber": 7.6,
      "sodium": 3492.0,
      "calcium": 296.0,
      "iron": 6.5,
      "vitA": 20.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp007",
    "code": "CP007",
    "name": "Kacang kedelai, rebus",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 189.0,
      "protein": 20.2,
      "fat": 8.2,
      "carbs": 12.7,
      "fiber": 1.6,
      "sodium": 181.0,
      "calcium": 91.0,
      "iron": 3.9,
      "vitA": 15.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp008",
    "code": "CP008",
    "name": "Kacang merah kering, rebus",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 158.0,
      "protein": 10.3,
      "fat": 0.9,
      "carbs": 28.2,
      "fiber": 2.6,
      "sodium": 6.0,
      "calcium": 1160.0,
      "iron": 3.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp009",
    "code": "CP009",
    "name": "Kacang merah segar, rebus",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 144.0,
      "protein": 10.0,
      "fat": 1.0,
      "carbs": 24.7,
      "fiber": 3.5,
      "sodium": 6.0,
      "calcium": 144.0,
      "iron": 2.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp010",
    "code": "CP010",
    "name": "Kacang mete/biji jambu monyet, goreng",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 629.0,
      "protein": 20.4,
      "fat": 56.3,
      "carbs": 19.8,
      "fiber": 1.1,
      "sodium": 13.0,
      "calcium": 502.0,
      "iron": 8.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp011",
    "code": "CP011",
    "name": "Kacang tanah rebus dg kulit",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 360.0,
      "protein": 13.5,
      "fat": 31.2,
      "carbs": 12.8,
      "fiber": 0.0,
      "sodium": 32.0,
      "calcium": 42.0,
      "iron": 1.4,
      "vitA": 0.0,
      "vitC": 5.0
    }
  },
  {
    "id": "cp012",
    "code": "CP012",
    "name": "Kacang tanah, goreng",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 564.0,
      "protein": 25.5,
      "fat": 44.4,
      "carbs": 25.5,
      "fiber": 2.8,
      "sodium": 0.0,
      "calcium": 106.0,
      "iron": 4.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp013",
    "code": "CP013",
    "name": "Kacang tanah, rebus",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 220.0,
      "protein": 10.6,
      "fat": 28.0,
      "carbs": 8.0,
      "fiber": 1.0,
      "sodium": 36.0,
      "calcium": 89.0,
      "iron": 1.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp014",
    "code": "CP014",
    "name": "Kacang tolo, rebus",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 138.0,
      "protein": 10.7,
      "fat": 1.1,
      "carbs": 22.6,
      "fiber": 0.9,
      "sodium": 13.0,
      "calcium": 165.0,
      "iron": 4.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp015",
    "code": "CP015",
    "name": "Ampas kacang hijau",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 96.0,
      "protein": 3.7,
      "fat": 0.6,
      "carbs": 19.1,
      "fiber": 2.7,
      "sodium": 0.0,
      "calcium": 133.0,
      "iron": 1.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp016",
    "code": "CP016",
    "name": "Ampas tahu, mentah",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 67.0,
      "protein": 5.0,
      "fat": 2.1,
      "carbs": 8.1,
      "fiber": 4.1,
      "sodium": 8.0,
      "calcium": 460.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp017",
    "code": "CP017",
    "name": "Ampas tahu kukus",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 75.0,
      "protein": 4.1,
      "fat": 2.1,
      "carbs": 10.7,
      "fiber": 5.1,
      "sodium": 0.0,
      "calcium": 203.0,
      "iron": 1.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp018",
    "code": "CP018",
    "name": "Ampas tahu, kering",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 414.0,
      "protein": 26.6,
      "fat": 18.3,
      "carbs": 41.3,
      "fiber": 0.0,
      "sodium": 45.0,
      "calcium": 19.0,
      "iron": 4.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp019",
    "code": "CP019",
    "name": "Pepea oncom ampas tahu",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 76.0,
      "protein": 5.2,
      "fat": 1.8,
      "carbs": 10.6,
      "fiber": 2.2,
      "sodium": 0.0,
      "calcium": 215.0,
      "iron": 12.5,
      "vitA": 268.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp020",
    "code": "CP020",
    "name": "Bungkil biji karet",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 210.0,
      "protein": 30.0,
      "fat": 10.0,
      "carbs": 10.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 102.0,
      "iron": 12.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp021",
    "code": "CP021",
    "name": "Bungkil kacang tanah",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 365.0,
      "protein": 45.0,
      "fat": 13.0,
      "carbs": 17.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 730.0,
      "iron": 30.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp022",
    "code": "CP022",
    "name": "Bungkil kelapa",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 36.0,
      "protein": 23.0,
      "fat": 15.0,
      "carbs": 35.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 137.0,
      "iron": 41.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp023",
    "code": "CP023",
    "name": "Dodol banjarmasin",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 368.0,
      "protein": 2.6,
      "fat": 8.6,
      "carbs": 70.0,
      "fiber": 0.5,
      "sodium": 48.0,
      "calcium": 51.0,
      "iron": 3.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp024",
    "code": "CP024",
    "name": "Emping (kerupuk melinjo)",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 300.0,
      "protein": 12.0,
      "fat": 1.5,
      "carbs": 61.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 100.0,
      "iron": 5.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp025",
    "code": "CP025",
    "name": "Emping komak",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 355.0,
      "protein": 17.8,
      "fat": 4.6,
      "carbs": 60.7,
      "fiber": 0.0,
      "sodium": 24.0,
      "calcium": 87.0,
      "iron": 4.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp026",
    "code": "CP026",
    "name": "Enting-enting gepuk hello kity",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 538.0,
      "protein": 13.6,
      "fat": 30.3,
      "carbs": 52.6,
      "fiber": 0.2,
      "sodium": 0.0,
      "calcium": 181.0,
      "iron": 1.6,
      "vitA": 202.6,
      "vitC": 0.0
    }
  },
  {
    "id": "cp027",
    "code": "CP027",
    "name": "Enting-enting gepuk kacang tanah",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 524.0,
      "protein": 13.3,
      "fat": 29.2,
      "carbs": 52.2,
      "fiber": 0.2,
      "sodium": 0.0,
      "calcium": 76.0,
      "iron": 1.4,
      "vitA": 272.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp028",
    "code": "CP028",
    "name": "Enting-enting wijen",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 565.0,
      "protein": 18.2,
      "fat": 38.4,
      "carbs": 36.8,
      "fiber": 1.9,
      "sodium": 0.0,
      "calcium": 3251.0,
      "iron": 10.9,
      "vitA": 240.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp029",
    "code": "CP029",
    "name": "Geplak",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 350.0,
      "protein": 1.4,
      "fat": 14.4,
      "carbs": 53.6,
      "fiber": 1.8,
      "sodium": 0.0,
      "calcium": 1151.0,
      "iron": 2.1,
      "vitA": 120.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp030",
    "code": "CP030",
    "name": "Geplak jahe",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 462.0,
      "protein": 3.1,
      "fat": 24.4,
      "carbs": 57.7,
      "fiber": 3.3,
      "sodium": 0.0,
      "calcium": 212.0,
      "iron": 6.6,
      "vitA": 272.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp031",
    "code": "CP031",
    "name": "Kacang atom",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 533.0,
      "protein": 27.8,
      "fat": 38.1,
      "carbs": 28.8,
      "fiber": 2.5,
      "sodium": 0.0,
      "calcium": 87.0,
      "iron": 3.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp032",
    "code": "CP032",
    "name": "Kacang goyang",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 516.0,
      "protein": 14.7,
      "fat": 31.1,
      "carbs": 44.4,
      "fiber": 0.0,
      "sodium": 2.0,
      "calcium": 34.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp033",
    "code": "CP033",
    "name": "Kacang negara",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 480.0,
      "protein": 18.4,
      "fat": 19.1,
      "carbs": 58.5,
      "fiber": 11.7,
      "sodium": 1010.0,
      "calcium": 34.0,
      "iron": 10.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp034",
    "code": "CP034",
    "name": "Kacang sukro",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 484.0,
      "protein": 8.8,
      "fat": 26.1,
      "carbs": 57.7,
      "fiber": 1.8,
      "sodium": 0.0,
      "calcium": 49.0,
      "iron": 2.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp035",
    "code": "CP035",
    "name": "Kacang tanah sari",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 561.0,
      "protein": 25.5,
      "fat": 43.8,
      "carbs": 26.0,
      "fiber": 2.2,
      "sodium": 0.0,
      "calcium": 50.0,
      "iron": 3.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp036",
    "code": "CP036",
    "name": "Keju kacang tanah (peanut butter)",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 590.0,
      "protein": 27.0,
      "fat": 49.0,
      "carbs": 20.9,
      "fiber": 1.6,
      "sodium": 355.0,
      "calcium": 60.0,
      "iron": 2.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp037",
    "code": "CP037",
    "name": "Kembang tahu",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 380.0,
      "protein": 48.9,
      "fat": 13.8,
      "carbs": 23.3,
      "fiber": 0.0,
      "sodium": 55.0,
      "calcium": 378.0,
      "iron": 2.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp038",
    "code": "CP038",
    "name": "Kembang tahu rebus",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 90.0,
      "protein": 10.7,
      "fat": 4.0,
      "carbs": 4.7,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 85.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp039",
    "code": "CP039",
    "name": "Keripik oncom",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 598.0,
      "protein": 8.3,
      "fat": 43.8,
      "carbs": 42.6,
      "fiber": 3.3,
      "sodium": 0.0,
      "calcium": 85.0,
      "iron": 27.7,
      "vitA": 1608.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp040",
    "code": "CP040",
    "name": "Keripik tempe",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 581.0,
      "protein": 12.1,
      "fat": 40.6,
      "carbs": 41.7,
      "fiber": 2.2,
      "sodium": 0.0,
      "calcium": 237.0,
      "iron": 6.9,
      "vitA": 320.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp041",
    "code": "CP041",
    "name": "Keripik tempe abadi besar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 556.0,
      "protein": 15.8,
      "fat": 37.1,
      "carbs": 39.8,
      "fiber": 3.5,
      "sodium": 0.0,
      "calcium": 112.0,
      "iron": 5.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp042",
    "code": "CP042",
    "name": "Keripik tempe abadi murni",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 542.0,
      "protein": 40.3,
      "fat": 42.4,
      "carbs": 11.6,
      "fiber": 2.2,
      "sodium": 0.0,
      "calcium": 175.0,
      "iron": 5.2,
      "vitA": 50.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp043",
    "code": "CP043",
    "name": "Keripik tempe abadi sedang",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 510.0,
      "protein": 12.3,
      "fat": 27.9,
      "carbs": 52.4,
      "fiber": 3.6,
      "sodium": 0.0,
      "calcium": 122.0,
      "iron": 8.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp044",
    "code": "CP044",
    "name": "Keripik tempe abadi telur",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 529.0,
      "protein": 20.8,
      "fat": 31.7,
      "carbs": 40.2,
      "fiber": 3.0,
      "sodium": 0.0,
      "calcium": 124.0,
      "iron": 5.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp045",
    "code": "CP045",
    "name": "Kerupik tempe abadi prima",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 540.0,
      "protein": 16.7,
      "fat": 33.9,
      "carbs": 42.0,
      "fiber": 2.2,
      "sodium": 0.0,
      "calcium": 92.0,
      "iron": 3.2,
      "vitA": 1080.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp046",
    "code": "CP046",
    "name": "Kwaci",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 515.0,
      "protein": 30.6,
      "fat": 42.1,
      "carbs": 13.8,
      "fiber": 13.6,
      "sodium": 124.0,
      "calcium": 54.0,
      "iron": 6.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp047",
    "code": "CP047",
    "name": "Melinjo emping tebal goreng manis",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 439.0,
      "protein": 10.0,
      "fat": 16.4,
      "carbs": 65.7,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 66.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp048",
    "code": "CP048",
    "name": "Melinjo emping tebal, goreng asin",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 431.0,
      "protein": 11.1,
      "fat": 16.2,
      "carbs": 63.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 77.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp049",
    "code": "CP049",
    "name": "Melinjo emping tipis goreng",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 485.0,
      "protein": 11.5,
      "fat": 24.5,
      "carbs": 59.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 85.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp050",
    "code": "CP050",
    "name": "Moon tahu",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 128.0,
      "protein": 8.0,
      "fat": 10.0,
      "carbs": 1.3,
      "fiber": 0.2,
      "sodium": 393.0,
      "calcium": 205.0,
      "iron": 2.5,
      "vitA": 131.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp051",
    "code": "CP051",
    "name": "Oncom",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 187.0,
      "protein": 13.0,
      "fat": 6.0,
      "carbs": 22.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 96.0,
      "iron": 27.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp052",
    "code": "CP052",
    "name": "Oncom ampas kacang hijau",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 376.0,
      "protein": 14.9,
      "fat": 6.0,
      "carbs": 65.7,
      "fiber": 12.3,
      "sodium": 0.0,
      "calcium": 199.0,
      "iron": 10.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp053",
    "code": "CP053",
    "name": "Oncom kacang hijau + singkong",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 351.0,
      "protein": 11.0,
      "fat": 5.3,
      "carbs": 65.9,
      "fiber": 9.0,
      "sodium": 0.0,
      "calcium": 164.0,
      "iron": 7.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp054",
    "code": "CP054",
    "name": "Oncom kacang tanah pepes",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 132.0,
      "protein": 12.7,
      "fat": 3.8,
      "carbs": 13.7,
      "fiber": 3.1,
      "sodium": 0.0,
      "calcium": 133.0,
      "iron": 34.4,
      "vitA": 10.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp055",
    "code": "CP055",
    "name": "Rempeyek kacang tanah",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 513.0,
      "protein": 17.5,
      "fat": 32.5,
      "carbs": 44.3,
      "fiber": 1.7,
      "sodium": 0.0,
      "calcium": 65.0,
      "iron": 2.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp056",
    "code": "CP056",
    "name": "Rempeyek kacang tolo",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 451.0,
      "protein": 11.2,
      "fat": 20.2,
      "carbs": 59.7,
      "fiber": 1.8,
      "sodium": 0.0,
      "calcium": 156.0,
      "iron": 4.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp057",
    "code": "CP057",
    "name": "Rempeyek kacang uci",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 497.0,
      "protein": 17.0,
      "fat": 27.6,
      "carbs": 50.8,
      "fiber": 2.4,
      "sodium": 0.0,
      "calcium": 166.0,
      "iron": 6.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp058",
    "code": "CP058",
    "name": "Sayur lebui",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 64.0,
      "protein": 2.1,
      "fat": 0.6,
      "carbs": 12.5,
      "fiber": 5.7,
      "sodium": 124.0,
      "calcium": 21.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp059",
    "code": "CP059",
    "name": "Saridele, bubuk",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 344.0,
      "protein": 30.0,
      "fat": 20.0,
      "carbs": 43.0,
      "fiber": 6.2,
      "sodium": 56.0,
      "calcium": 450.0,
      "iron": 4.0,
      "vitA": 2000.0,
      "vitC": 10.0
    }
  },
  {
    "id": "cp060",
    "code": "CP060",
    "name": "Susu kedelai",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 41.0,
      "protein": 3.5,
      "fat": 2.5,
      "carbs": 5.0,
      "fiber": 0.2,
      "sodium": 128.0,
      "calcium": 50.0,
      "iron": 0.7,
      "vitA": 200.0,
      "vitC": 2.0
    }
  },
  {
    "id": "cp061",
    "code": "CP061",
    "name": "Tahu, mentah",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 80.0,
      "protein": 10.9,
      "fat": 4.7,
      "carbs": 0.8,
      "fiber": 0.1,
      "sodium": 2.0,
      "calcium": 223.0,
      "iron": 3.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp062",
    "code": "CP062",
    "name": "Tahu goreng",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 115.0,
      "protein": 9.7,
      "fat": 8.5,
      "carbs": 2.5,
      "fiber": 0.1,
      "sodium": 7.0,
      "calcium": 229.0,
      "iron": 4.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp063",
    "code": "CP063",
    "name": "Tahu telur",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 328.0,
      "protein": 12.6,
      "fat": 19.9,
      "carbs": 24.6,
      "fiber": 0.4,
      "sodium": 755.0,
      "calcium": 492.0,
      "iron": 4.9,
      "vitA": 73.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp064",
    "code": "CP064",
    "name": "Takwa",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 148.0,
      "protein": 13.8,
      "fat": 8.5,
      "carbs": 4.0,
      "fiber": 0.0,
      "sodium": 3.0,
      "calcium": 140.0,
      "iron": 8.5,
      "vitA": 920.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp065",
    "code": "CP065",
    "name": "Tauco",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 184.0,
      "protein": 11.4,
      "fat": 5.5,
      "carbs": 22.2,
      "fiber": 1.9,
      "sodium": 1766.0,
      "calcium": 72.0,
      "iron": 6.0,
      "vitA": 664.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp066",
    "code": "CP066",
    "name": "Tauco cap beruang, cake",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 347.0,
      "protein": 7.4,
      "fat": 5.2,
      "carbs": 67.6,
      "fiber": 3.2,
      "sodium": 0.0,
      "calcium": 63.0,
      "iron": 6.2,
      "vitA": 936.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp067",
    "code": "CP067",
    "name": "Tauco cap DAS, cake",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 358.0,
      "protein": 7.5,
      "fat": 4.3,
      "carbs": 70.4,
      "fiber": 3.1,
      "sodium": 0.0,
      "calcium": 94.0,
      "iron": 4.5,
      "vitA": 504.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp068",
    "code": "CP068",
    "name": "Tauco cap meong",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 159.0,
      "protein": 7.4,
      "fat": 4.9,
      "carbs": 21.3,
      "fiber": 1.6,
      "sodium": 1547.0,
      "calcium": 183.0,
      "iron": 10.1,
      "vitA": 472.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp069",
    "code": "CP069",
    "name": "Tauji cap singa",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 277.0,
      "protein": 9.1,
      "fat": 4.7,
      "carbs": 49.6,
      "fiber": 1.2,
      "sodium": 0.0,
      "calcium": 68.0,
      "iron": 3.0,
      "vitA": 936.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp070",
    "code": "CP070",
    "name": "Tempe bongkrek",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 88.0,
      "protein": 10.0,
      "fat": 4.0,
      "carbs": 3.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 27.0,
      "iron": 2.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp071",
    "code": "CP071",
    "name": "Tempe gembus P3G",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 73.0,
      "protein": 5.7,
      "fat": 1.3,
      "carbs": 10.3,
      "fiber": 4.2,
      "sodium": 0.0,
      "calcium": 204.0,
      "iron": 1.5,
      "vitA": 22.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp072",
    "code": "CP072",
    "name": "Tempe gembus yogya",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 76.0,
      "protein": 6.8,
      "fat": 0.7,
      "carbs": 10.6,
      "fiber": 5.3,
      "sodium": 0.0,
      "calcium": 76.0,
      "iron": 16.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp073",
    "code": "CP073",
    "name": "Tempe kacang babi",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 139.0,
      "protein": 12.5,
      "fat": 0.8,
      "carbs": 21.9,
      "fiber": 1.8,
      "sodium": 0.0,
      "calcium": 68.0,
      "iron": 2.6,
      "vitA": 20.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp074",
    "code": "CP074",
    "name": "Tempe kacang belimbing",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 212.0,
      "protein": 17.5,
      "fat": 10.0,
      "carbs": 12.9,
      "fiber": 2.9,
      "sodium": 0.0,
      "calcium": 186.0,
      "iron": 2.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp075",
    "code": "CP075",
    "name": "Tempe kedelai + jagung",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 143.0,
      "protein": 12.0,
      "fat": 5.5,
      "carbs": 11.4,
      "fiber": 1.9,
      "sodium": 0.0,
      "calcium": 155.0,
      "iron": 6.8,
      "vitA": 1320.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp076",
    "code": "CP076",
    "name": "Tempe kedelai murni, goreng",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 350.0,
      "protein": 24.5,
      "fat": 26.6,
      "carbs": 10.4,
      "fiber": 4.2,
      "sodium": 22.0,
      "calcium": 202.0,
      "iron": 4.9,
      "vitA": 78.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp077",
    "code": "CP077",
    "name": "Tempe kedelai murni, mentah",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 201.0,
      "protein": 20.8,
      "fat": 8.8,
      "carbs": 13.5,
      "fiber": 1.4,
      "sodium": 9.0,
      "calcium": 155.0,
      "iron": 4.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp078",
    "code": "CP078",
    "name": "Tempe koro benguk",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 141.0,
      "protein": 10.2,
      "fat": 1.3,
      "carbs": 23.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 42.0,
      "iron": 2.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp079",
    "code": "CP079",
    "name": "Tempe lamtoro",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 128.0,
      "protein": 10.7,
      "fat": 0.5,
      "carbs": 21.3,
      "fiber": 7.1,
      "sodium": 0.0,
      "calcium": 203.0,
      "iron": 0.6,
      "vitA": 121.0,
      "vitC": 2.0
    }
  },
  {
    "id": "cp080",
    "code": "CP080",
    "name": "Tempe lamtoro var, gung dengan kulit",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 131.0,
      "protein": 18.0,
      "fat": 0.8,
      "carbs": 13.0,
      "fiber": 1.3,
      "sodium": 0.0,
      "calcium": 95.0,
      "iron": 12.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp081",
    "code": "CP081",
    "name": "Tempe lamtoro var, gung tanpa kulit",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 131.0,
      "protein": 18.0,
      "fat": 0.8,
      "carbs": 13.0,
      "fiber": 1.3,
      "sodium": 0.0,
      "calcium": 95.0,
      "iron": 12.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp082",
    "code": "CP082",
    "name": "Tempe pasar",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 150.0,
      "protein": 14.0,
      "fat": 7.7,
      "carbs": 9.1,
      "fiber": 1.4,
      "sodium": 7.0,
      "calcium": 517.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp083",
    "code": "CP083",
    "name": "Tempe pasar goreng",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 336.0,
      "protein": 20.0,
      "fat": 28.0,
      "carbs": 7.8,
      "fiber": 3.4,
      "sodium": 20.0,
      "calcium": 156.0,
      "iron": 3.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp084",
    "code": "CP084",
    "name": "Tepung hunkwe (pati kacang ijo)",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 364.0,
      "protein": 4.5,
      "fat": 1.0,
      "carbs": 83.5,
      "fiber": 16.1,
      "sodium": 0.0,
      "calcium": 50.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "cp085",
    "code": "CP085",
    "name": "Tepung Jalejo",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 388.0,
      "protein": 19.0,
      "fat": 7.5,
      "carbs": 61.2,
      "fiber": 5.8,
      "sodium": 3.0,
      "calcium": 101.0,
      "iron": 2.0,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "cp086",
    "code": "CP086",
    "name": "Tepung kacang kedelai",
    "category": "Kacang-kacangan & Olahan",
    "n": {
      "energy": 347.0,
      "protein": 35.9,
      "fat": 20.6,
      "carbs": 29.9,
      "fiber": 5.8,
      "sodium": 12.0,
      "calcium": 195.0,
      "iron": 8.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dr001",
    "code": "DR001",
    "name": "Akar tonjong, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 45.0,
      "protein": 1.1,
      "fat": 0.4,
      "carbs": 10.8,
      "fiber": 1.2,
      "sodium": 96.4,
      "calcium": 72.0,
      "iron": 1.3,
      "vitA": 90.0,
      "vitC": 2.0
    }
  },
  {
    "id": "dr002",
    "code": "DR002",
    "name": "Ale,toge, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 37.0,
      "protein": 4.4,
      "fat": 0.5,
      "carbs": 3.8,
      "fiber": 1.7,
      "sodium": 2.3,
      "calcium": 50.0,
      "iron": 2.0,
      "vitA": 0.0,
      "vitC": 46.0
    }
  },
  {
    "id": "dr003",
    "code": "DR003",
    "name": "Andaliman, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 99.0,
      "protein": 4.6,
      "fat": 1.0,
      "carbs": 18.0,
      "fiber": 8.5,
      "sodium": 0.0,
      "calcium": 383.0,
      "iron": 2.9,
      "vitA": 0.0,
      "vitC": 15.0
    }
  },
  {
    "id": "dr004",
    "code": "DR004",
    "name": "Andewi, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 26.0,
      "protein": 1.6,
      "fat": 0.2,
      "carbs": 5.3,
      "fiber": 4.1,
      "sodium": 29.0,
      "calcium": 33.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 10.0
    }
  },
  {
    "id": "dr005",
    "code": "DR005",
    "name": "Bakung, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 27.0,
      "protein": 2.0,
      "fat": 0.2,
      "carbs": 4.2,
      "fiber": 3.8,
      "sodium": 37.0,
      "calcium": 19.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 42.0
    }
  },
  {
    "id": "dr006",
    "code": "DR006",
    "name": "Baligo, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 15.0,
      "protein": 0.4,
      "fat": 0.2,
      "carbs": 3.0,
      "fiber": 0.4,
      "sodium": 1.7,
      "calcium": 19.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 13.0
    }
  },
  {
    "id": "dr007",
    "code": "DR007",
    "name": "Bawang bombay, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 43.0,
      "protein": 1.4,
      "fat": 0.2,
      "carbs": 10.3,
      "fiber": 2.0,
      "sodium": 12.2,
      "calcium": 32.0,
      "iron": 0.5,
      "vitA": 50.0,
      "vitC": 9.0
    }
  },
  {
    "id": "dr008",
    "code": "DR008",
    "name": "Bayam, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 16.0,
      "protein": 0.9,
      "fat": 0.4,
      "carbs": 2.9,
      "fiber": 0.7,
      "sodium": 15.8,
      "calcium": 166.0,
      "iron": 3.5,
      "vitA": 2293.0,
      "vitC": 41.0
    }
  },
  {
    "id": "dr009",
    "code": "DR009",
    "name": "Bayam merah, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 41.0,
      "protein": 2.2,
      "fat": 0.8,
      "carbs": 6.3,
      "fiber": 2.2,
      "sodium": 20.0,
      "calcium": 520.0,
      "iron": 7.0,
      "vitA": 0.0,
      "vitC": 62.0
    }
  },
  {
    "id": "dr010",
    "code": "DR010",
    "name": "Bit, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 41.0,
      "protein": 1.6,
      "fat": 0.1,
      "carbs": 9.6,
      "fiber": 2.6,
      "sodium": 28.5,
      "calcium": 27.0,
      "iron": 1.0,
      "vitA": 20.0,
      "vitC": 10.0
    }
  },
  {
    "id": "dr011",
    "code": "DR011",
    "name": "Buah kelor",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 38.0,
      "protein": 1.5,
      "fat": 0.2,
      "carbs": 7.5,
      "fiber": 3.2,
      "sodium": 48.0,
      "calcium": 30.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 25.0
    }
  },
  {
    "id": "dr012",
    "code": "DR012",
    "name": "Buah merah",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 87.0,
      "protein": 2.6,
      "fat": 2.7,
      "carbs": 13.1,
      "fiber": 4.0,
      "sodium": 110.0,
      "calcium": 30.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 15.0
    }
  },
  {
    "id": "dr013",
    "code": "DR013",
    "name": "Buncis, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 34.0,
      "protein": 2.4,
      "fat": 0.3,
      "carbs": 7.2,
      "fiber": 1.9,
      "sodium": 8.0,
      "calcium": 101.0,
      "iron": 0.7,
      "vitA": 550.0,
      "vitC": 11.0
    }
  },
  {
    "id": "dr014",
    "code": "DR014",
    "name": "Bunga pepaya, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 45.0,
      "protein": 2.6,
      "fat": 0.3,
      "carbs": 8.1,
      "fiber": 1.6,
      "sodium": 2.3,
      "calcium": 290.0,
      "iron": 4.2,
      "vitA": 5.0,
      "vitC": 23.0
    }
  },
  {
    "id": "dr015",
    "code": "DR015",
    "name": "Bunga turi, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 42.0,
      "protein": 2.0,
      "fat": 1.1,
      "carbs": 6.1,
      "fiber": 3.3,
      "sodium": 28.6,
      "calcium": 28.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 1.0
    }
  },
  {
    "id": "dr016",
    "code": "DR016",
    "name": "Caisin, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 20.0,
      "protein": 1.7,
      "fat": 0.4,
      "carbs": 3.4,
      "fiber": 1.2,
      "sodium": 15.6,
      "calcium": 123.0,
      "iron": 1.9,
      "vitA": 4188.0,
      "vitC": 3.0
    }
  },
  {
    "id": "dr017",
    "code": "DR017",
    "name": "Daun bangun-bangun, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 27.0,
      "protein": 1.3,
      "fat": 0.6,
      "carbs": 4.0,
      "fiber": 1.0,
      "sodium": 3.6,
      "calcium": 279.0,
      "iron": 13.6,
      "vitA": 13288.0,
      "vitC": 5.0
    }
  },
  {
    "id": "dr018",
    "code": "DR018",
    "name": "Daun bawang merah, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 41.0,
      "protein": 2.0,
      "fat": 0.3,
      "carbs": 7.8,
      "fiber": 2.1,
      "sodium": 30.0,
      "calcium": 60.0,
      "iron": 2.3,
      "vitA": 218.0,
      "vitC": 11.0
    }
  },
  {
    "id": "dr019",
    "code": "DR019",
    "name": "Daun bebuas, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 41.0,
      "protein": 2.7,
      "fat": 1.0,
      "carbs": 7.3,
      "fiber": 2.1,
      "sodium": 0.0,
      "calcium": 29.0,
      "iron": 1.5,
      "vitA": 3099.0,
      "vitC": 3.0
    }
  },
  {
    "id": "dr020",
    "code": "DR020",
    "name": "Daun belem, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 50.0,
      "protein": 4.4,
      "fat": 1.4,
      "carbs": 7.8,
      "fiber": 1.9,
      "sodium": 0.0,
      "calcium": 698.0,
      "iron": 7.5,
      "vitA": 13072.0,
      "vitC": 21.0
    }
  },
  {
    "id": "dr021",
    "code": "DR021",
    "name": "Daun bluntas, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 44.0,
      "protein": 1.8,
      "fat": 0.5,
      "carbs": 9.4,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 256.0,
      "iron": 5.6,
      "vitA": 3980.0,
      "vitC": 30.0
    }
  },
  {
    "id": "dr022",
    "code": "DR022",
    "name": "Daun gandaria, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 63.0,
      "protein": 3.1,
      "fat": 0.3,
      "carbs": 14.0,
      "fiber": 2.1,
      "sodium": 3.0,
      "calcium": 40.0,
      "iron": 4.7,
      "vitA": 600.0,
      "vitC": 61.0
    }
  },
  {
    "id": "dr023",
    "code": "DR023",
    "name": "Daun gedi besar, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 58.0,
      "protein": 2.9,
      "fat": 0.7,
      "carbs": 10.0,
      "fiber": 3.3,
      "sodium": 30.0,
      "calcium": 440.0,
      "iron": 1.9,
      "vitA": 0.0,
      "vitC": 11.0
    }
  },
  {
    "id": "dr024",
    "code": "DR024",
    "name": "Daun gedi kecil, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 61.0,
      "protein": 3.2,
      "fat": 0.7,
      "carbs": 10.4,
      "fiber": 3.4,
      "sodium": 20.0,
      "calcium": 2420.0,
      "iron": 1.7,
      "vitA": 0.0,
      "vitC": 11.0
    }
  },
  {
    "id": "dr025",
    "code": "DR025",
    "name": "Daun gelang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 1.3,
      "fat": 0.7,
      "carbs": 5.8,
      "fiber": 1.3,
      "sodium": 5.0,
      "calcium": 350.0,
      "iron": 11.9,
      "vitA": 1954.0,
      "vitC": 1.0
    }
  },
  {
    "id": "dr026",
    "code": "DR026",
    "name": "Daun gunda bali, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 50.0,
      "protein": 4.6,
      "fat": 0.9,
      "carbs": 7.0,
      "fiber": 1.4,
      "sodium": 0.0,
      "calcium": 167.0,
      "iron": 0.5,
      "vitA": 6571.0,
      "vitC": 20.0
    }
  },
  {
    "id": "dr027",
    "code": "DR027",
    "name": "Daun gunda serang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 62.0,
      "protein": 4.2,
      "fat": 0.9,
      "carbs": 9.2,
      "fiber": 1.3,
      "sodium": 0.0,
      "calcium": 171.0,
      "iron": 0.6,
      "vitA": 7347.0,
      "vitC": 20.0
    }
  },
  {
    "id": "dr028",
    "code": "DR028",
    "name": "Daun jambu mete muda, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 78.0,
      "protein": 4.6,
      "fat": 0.5,
      "carbs": 16.2,
      "fiber": 3.0,
      "sodium": 14.0,
      "calcium": 33.0,
      "iron": 8.9,
      "vitA": 2689.0,
      "vitC": 65.0
    }
  },
  {
    "id": "dr029",
    "code": "DR029",
    "name": "Daun jampang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 34.0,
      "protein": 3.8,
      "fat": 0.5,
      "carbs": 5.3,
      "fiber": 1.4,
      "sodium": 0.0,
      "calcium": 21.0,
      "iron": 1.0,
      "vitA": 4357.0,
      "vitC": 3.0
    }
  },
  {
    "id": "dr030",
    "code": "DR030",
    "name": "Daun jawaw seluang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 93.0,
      "protein": 5.0,
      "fat": 1.3,
      "carbs": 15.3,
      "fiber": 3.9,
      "sodium": 2.0,
      "calcium": 146.0,
      "iron": 5.3,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "dr031",
    "code": "DR031",
    "name": "Daun jonghe, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 27.0,
      "protein": 2.1,
      "fat": 0.7,
      "carbs": 4.4,
      "fiber": 2.0,
      "sodium": 0.0,
      "calcium": 253.0,
      "iron": 9.5,
      "vitA": 5057.0,
      "vitC": 1.0
    }
  },
  {
    "id": "dr032",
    "code": "DR032",
    "name": "Daun kacang ma, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 36.0,
      "protein": 2.9,
      "fat": 0.6,
      "carbs": 6.8,
      "fiber": 1.8,
      "sodium": 7.0,
      "calcium": 64.0,
      "iron": 2.2,
      "vitA": 4377.0,
      "vitC": 4.0
    }
  },
  {
    "id": "dr033",
    "code": "DR033",
    "name": "Daun kacang panjang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 3.1,
      "fat": 0.3,
      "carbs": 5.8,
      "fiber": 1.7,
      "sodium": 7.0,
      "calcium": 200.0,
      "iron": 4.5,
      "vitA": 4592.0,
      "vitC": 30.0
    }
  },
  {
    "id": "dr034",
    "code": "DR034",
    "name": "Daun kasbi/singkong karet, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 92.0,
      "protein": 4.0,
      "fat": 3.6,
      "carbs": 10.9,
      "fiber": 5.8,
      "sodium": 70.0,
      "calcium": 140.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 74.0
    }
  },
  {
    "id": "dr035",
    "code": "DR035",
    "name": "Daun katuk, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 59.0,
      "protein": 6.4,
      "fat": 1.0,
      "carbs": 9.9,
      "fiber": 1.5,
      "sodium": 21.0,
      "calcium": 233.0,
      "iron": 3.5,
      "vitA": 10020.0,
      "vitC": 16.0
    }
  },
  {
    "id": "dr036",
    "code": "DR036",
    "name": "Daun kecipir, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 52.0,
      "protein": 5.0,
      "fat": 0.5,
      "carbs": 8.5,
      "fiber": 0.0,
      "sodium": 6.0,
      "calcium": 1134.0,
      "iron": 6.2,
      "vitA": 5240.0,
      "vitC": 29.0
    }
  },
  {
    "id": "dr037",
    "code": "DR037",
    "name": "Daun kedondong, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 59.0,
      "protein": 3.5,
      "fat": 0.3,
      "carbs": 13.4,
      "fiber": 10.7,
      "sodium": 12.0,
      "calcium": 540.0,
      "iron": 6.2,
      "vitA": 2900.0,
      "vitC": 29.0
    }
  },
  {
    "id": "dr038",
    "code": "DR038",
    "name": "Daun kelor, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 92.0,
      "protein": 5.1,
      "fat": 1.6,
      "carbs": 14.3,
      "fiber": 8.2,
      "sodium": 61.0,
      "calcium": 1077.0,
      "iron": 6.0,
      "vitA": 0.0,
      "vitC": 22.0
    }
  },
  {
    "id": "dr039",
    "code": "DR039",
    "name": "Daun kemang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 43.0,
      "protein": 5.5,
      "fat": 0.3,
      "carbs": 7.5,
      "fiber": 8.4,
      "sodium": 10.0,
      "calcium": 35.0,
      "iron": 1.0,
      "vitA": 1017.0,
      "vitC": 30.0
    }
  },
  {
    "id": "dr040",
    "code": "DR040",
    "name": "Daun kenikir, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 45.0,
      "protein": 3.7,
      "fat": 0.5,
      "carbs": 6.6,
      "fiber": 5.8,
      "sodium": 6.0,
      "calcium": 328.0,
      "iron": 2.7,
      "vitA": 12.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dr041",
    "code": "DR041",
    "name": "Daun kesum, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 48.0,
      "protein": 4.5,
      "fat": 0.8,
      "carbs": 9.1,
      "fiber": 1.6,
      "sodium": 11.0,
      "calcium": 125.0,
      "iron": 2.6,
      "vitA": 8715.0,
      "vitC": 4.0
    }
  },
  {
    "id": "dr042",
    "code": "DR042",
    "name": "Daun kol sawi, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 22.0,
      "protein": 2.1,
      "fat": 0.5,
      "carbs": 3.6,
      "fiber": 0.9,
      "sodium": 19.0,
      "calcium": 200.0,
      "iron": 3.2,
      "vitA": 2177.0,
      "vitC": 3.0
    }
  },
  {
    "id": "dr043",
    "code": "DR043",
    "name": "Daun koro, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 23.0,
      "protein": 3.0,
      "fat": 0.3,
      "carbs": 3.7,
      "fiber": 0.0,
      "sodium": 4.0,
      "calcium": 2134.0,
      "iron": 6.2,
      "vitA": 5240.0,
      "vitC": 29.0
    }
  },
  {
    "id": "dr044",
    "code": "DR044",
    "name": "Daun kubis, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 51.0,
      "protein": 2.5,
      "fat": 1.1,
      "carbs": 8.0,
      "fiber": 3.4,
      "sodium": 50.0,
      "calcium": 100.0,
      "iron": 3.4,
      "vitA": 0.0,
      "vitC": 16.0
    }
  },
  {
    "id": "dr045",
    "code": "DR045",
    "name": "Daun kumak, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 14.0,
      "protein": 1.3,
      "fat": 0.3,
      "carbs": 2.3,
      "fiber": 0.9,
      "sodium": 2.0,
      "calcium": 90.0,
      "iron": 2.7,
      "vitA": 2961.0,
      "vitC": 3.0
    }
  },
  {
    "id": "dr046",
    "code": "DR046",
    "name": "Daun labu siam, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 34.0,
      "protein": 4.0,
      "fat": 0.4,
      "carbs": 4.7,
      "fiber": 3.5,
      "sodium": 16.0,
      "calcium": 58.0,
      "iron": 2.5,
      "vitA": 2025.0,
      "vitC": 16.0
    }
  },
  {
    "id": "dr047",
    "code": "DR047",
    "name": "Daun labu waluh/kuning, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 34.0,
      "protein": 3.6,
      "fat": 0.6,
      "carbs": 4.5,
      "fiber": 2.9,
      "sodium": 16.0,
      "calcium": 138.0,
      "iron": 3.7,
      "vitA": 2750.0,
      "vitC": 36.0
    }
  },
  {
    "id": "dr048",
    "code": "DR048",
    "name": "Daun lamtoro, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 87.0,
      "protein": 8.3,
      "fat": 1.8,
      "carbs": 14.4,
      "fiber": 3.3,
      "sodium": 10.0,
      "calcium": 725.0,
      "iron": 3.9,
      "vitA": 13040.0,
      "vitC": 32.0
    }
  },
  {
    "id": "dr049",
    "code": "DR049",
    "name": "Daun leilem, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 76.0,
      "protein": 2.8,
      "fat": 0.2,
      "carbs": 15.8,
      "fiber": 3.1,
      "sodium": 6.0,
      "calcium": 296.0,
      "iron": 3.4,
      "vitA": 0.0,
      "vitC": 22.0
    }
  },
  {
    "id": "dr050",
    "code": "DR050",
    "name": "Daun leunca, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 49.0,
      "protein": 4.7,
      "fat": 0.5,
      "carbs": 8.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 210.0,
      "iron": 6.1,
      "vitA": 1900.0,
      "vitC": 40.0
    }
  },
  {
    "id": "dr051",
    "code": "DR051",
    "name": "Daun lobak, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 2.3,
      "fat": 0.4,
      "carbs": 5.8,
      "fiber": 3.2,
      "sodium": 16.0,
      "calcium": 140.0,
      "iron": 3.7,
      "vitA": 1000.0,
      "vitC": 109.0
    }
  },
  {
    "id": "dr052",
    "code": "DR052",
    "name": "Daun lompong talas, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 44.0,
      "protein": 3.0,
      "fat": 0.8,
      "carbs": 7.4,
      "fiber": 3.3,
      "sodium": 3.0,
      "calcium": 76.0,
      "iron": 1.0,
      "vitA": 2000.0,
      "vitC": 31.0
    }
  },
  {
    "id": "dr053",
    "code": "DR053",
    "name": "Daun mangkokan, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 57.0,
      "protein": 3.7,
      "fat": 0.3,
      "carbs": 11.8,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 474.0,
      "iron": 4.0,
      "vitA": 5450.0,
      "vitC": 83.0
    }
  },
  {
    "id": "dr054",
    "code": "DR054",
    "name": "Daun matel ambon, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 71.0,
      "protein": 6.8,
      "fat": 1.6,
      "carbs": 11.5,
      "fiber": 4.6,
      "sodium": 0.0,
      "calcium": 393.0,
      "iron": 10.2,
      "vitA": 49.0,
      "vitC": 26.0
    }
  },
  {
    "id": "dr055",
    "code": "DR055",
    "name": "Daun melinjo, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 104.0,
      "protein": 5.0,
      "fat": 1.3,
      "carbs": 21.3,
      "fiber": 10.3,
      "sodium": 12.0,
      "calcium": 219.0,
      "iron": 4.2,
      "vitA": 10000.0,
      "vitC": 182.0
    }
  },
  {
    "id": "dr056",
    "code": "DR056",
    "name": "Daun mengkudu, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 65.0,
      "protein": 4.0,
      "fat": 1.7,
      "carbs": 11.4,
      "fiber": 3.9,
      "sodium": 0.0,
      "calcium": 2296.0,
      "iron": 6.9,
      "vitA": 4958.0,
      "vitC": 35.0
    }
  },
  {
    "id": "dr057",
    "code": "DR057",
    "name": "Daun ndusuk, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 166.0,
      "protein": 1.7,
      "fat": 0.5,
      "carbs": 38.8,
      "fiber": 10.7,
      "sodium": 40.0,
      "calcium": 340.0,
      "iron": 1.8,
      "vitA": 0.0,
      "vitC": 30.0
    }
  },
  {
    "id": "dr058",
    "code": "DR058",
    "name": "Daun oyong, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 22.0,
      "protein": 1.0,
      "fat": 0.1,
      "carbs": 5.3,
      "fiber": 2.0,
      "sodium": 40.0,
      "calcium": 21.0,
      "iron": 2.0,
      "vitA": 1000.0,
      "vitC": 15.0
    }
  },
  {
    "id": "dr059",
    "code": "DR059",
    "name": "Daun pakis, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 39.0,
      "protein": 4.5,
      "fat": 0.4,
      "carbs": 6.9,
      "fiber": 2.0,
      "sodium": 20.0,
      "calcium": 136.0,
      "iron": 2.3,
      "vitA": 3292.0,
      "vitC": 3.0
    }
  },
  {
    "id": "dr060",
    "code": "DR060",
    "name": "Daun pakis longgiho, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 54.0,
      "protein": 2.2,
      "fat": 3.6,
      "carbs": 3.1,
      "fiber": 2.1,
      "sodium": 70.0,
      "calcium": 40.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 8.0
    }
  },
  {
    "id": "dr061",
    "code": "DR061",
    "name": "Daun pakis wambateu, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 53.0,
      "protein": 3.4,
      "fat": 1.2,
      "carbs": 7.2,
      "fiber": 4.8,
      "sodium": 20.0,
      "calcium": 30.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 6.0
    }
  },
  {
    "id": "dr062",
    "code": "DR062",
    "name": "Daun paku, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 29.0,
      "protein": 3.4,
      "fat": 0.1,
      "carbs": 6.5,
      "fiber": 4.3,
      "sodium": 19.0,
      "calcium": 13.0,
      "iron": 1.3,
      "vitA": 0.0,
      "vitC": 10.0
    }
  },
  {
    "id": "dr063",
    "code": "DR063",
    "name": "Daun pangi,segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 104.0,
      "protein": 3.9,
      "fat": 0.6,
      "carbs": 17.9,
      "fiber": 8.3,
      "sodium": 4.0,
      "calcium": 256.0,
      "iron": 1.8,
      "vitA": 0.0,
      "vitC": 23.0
    }
  },
  {
    "id": "dr064",
    "code": "DR064",
    "name": "Daun pare, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 49.0,
      "protein": 2.7,
      "fat": 1.0,
      "carbs": 8.4,
      "fiber": 3.0,
      "sodium": 7.0,
      "calcium": 217.0,
      "iron": 3.3,
      "vitA": 0.0,
      "vitC": 7.0
    }
  },
  {
    "id": "dr065",
    "code": "DR065",
    "name": "Daun pepaya, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 87.0,
      "protein": 8.0,
      "fat": 2.0,
      "carbs": 11.9,
      "fiber": 1.5,
      "sodium": 4.0,
      "calcium": 353.0,
      "iron": 0.8,
      "vitA": 18250.0,
      "vitC": 140.0
    }
  },
  {
    "id": "dr066",
    "code": "DR066",
    "name": "Daun pohpohan, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 37.0,
      "protein": 2.5,
      "fat": 0.8,
      "carbs": 6.9,
      "fiber": 2.6,
      "sodium": 0.0,
      "calcium": 744.0,
      "iron": 5.9,
      "vitA": 7378.0,
      "vitC": 5.0
    }
  },
  {
    "id": "dr067",
    "code": "DR067",
    "name": "Daun selasih, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 62.0,
      "protein": 4.0,
      "fat": 0.5,
      "carbs": 10.5,
      "fiber": 5.3,
      "sodium": 3.0,
      "calcium": 122.0,
      "iron": 13.9,
      "vitA": 0.0,
      "vitC": 24.0
    }
  },
  {
    "id": "dr068",
    "code": "DR068",
    "name": "Daun semanggi, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 45.0,
      "protein": 4.4,
      "fat": 0.5,
      "carbs": 8.5,
      "fiber": 1.9,
      "sodium": 64.0,
      "calcium": 98.0,
      "iron": 7.0,
      "vitA": 3365.0,
      "vitC": 6.0
    }
  },
  {
    "id": "dr069",
    "code": "DR069",
    "name": "Daun simpur, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 53.0,
      "protein": 3.2,
      "fat": 2.5,
      "carbs": 6.9,
      "fiber": 1.6,
      "sodium": 0.0,
      "calcium": 228.0,
      "iron": 3.5,
      "vitA": 3346.0,
      "vitC": 5.0
    }
  },
  {
    "id": "dr070",
    "code": "DR070",
    "name": "Daun singkil, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 68.0,
      "protein": 2.0,
      "fat": 1.0,
      "carbs": 15.2,
      "fiber": 3.3,
      "sodium": 0.0,
      "calcium": 178.0,
      "iron": 2.1,
      "vitA": 6042.0,
      "vitC": 3.0
    }
  },
  {
    "id": "dr071",
    "code": "DR071",
    "name": "Daun singkong, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 50.0,
      "protein": 6.2,
      "fat": 1.1,
      "carbs": 7.1,
      "fiber": 2.4,
      "sodium": 17.0,
      "calcium": 166.0,
      "iron": 1.3,
      "vitA": 7052.0,
      "vitC": 10.0
    }
  },
  {
    "id": "dr072",
    "code": "DR072",
    "name": "Daun singkong ambon, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 144.0,
      "protein": 12.7,
      "fat": 1.2,
      "carbs": 25.2,
      "fiber": 10.2,
      "sodium": 44.0,
      "calcium": 165.0,
      "iron": 3.9,
      "vitA": 13000.0,
      "vitC": 22.0
    }
  },
  {
    "id": "dr073",
    "code": "DR073",
    "name": "Daun singkong ampenan, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 50.0,
      "protein": 6.2,
      "fat": 1.1,
      "carbs": 71.0,
      "fiber": 2.4,
      "sodium": 49.0,
      "calcium": 352.0,
      "iron": 2.7,
      "vitA": 0.0,
      "vitC": 10.0
    }
  },
  {
    "id": "dr074",
    "code": "DR074",
    "name": "Daun singkong kopang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 74.0,
      "protein": 6.3,
      "fat": 0.7,
      "carbs": 10.7,
      "fiber": 4.6,
      "sodium": 32.0,
      "calcium": 142.0,
      "iron": 1.7,
      "vitA": 0.0,
      "vitC": 211.0
    }
  },
  {
    "id": "dr075",
    "code": "DR075",
    "name": "Daun sintrong, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 36.0,
      "protein": 2.6,
      "fat": 0.9,
      "carbs": 6.1,
      "fiber": 1.7,
      "sodium": 64.0,
      "calcium": 398.0,
      "iron": 9.3,
      "vitA": 8868.0,
      "vitC": 3.0
    }
  },
  {
    "id": "dr076",
    "code": "DR076",
    "name": "Daun talas, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 59.0,
      "protein": 3.0,
      "fat": 0.4,
      "carbs": 13.5,
      "fiber": 3.0,
      "sodium": 4.0,
      "calcium": 2236.0,
      "iron": 2.4,
      "vitA": 5740.0,
      "vitC": 24.0
    }
  },
  {
    "id": "dr077",
    "code": "DR077",
    "name": "Daun tespong, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 70.0,
      "protein": 2.9,
      "fat": 0.3,
      "carbs": 13.9,
      "fiber": 2.3,
      "sodium": 72.0,
      "calcium": 155.0,
      "iron": 2.5,
      "vitA": 2500.0,
      "vitC": 21.0
    }
  },
  {
    "id": "dr078",
    "code": "DR078",
    "name": "Daun ubi kuning, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 62.0,
      "protein": 3.7,
      "fat": 0.3,
      "carbs": 11.1,
      "fiber": 6.4,
      "sodium": 10.0,
      "calcium": 170.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "dr079",
    "code": "DR079",
    "name": "Daun ubi merah, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 48.0,
      "protein": 3.0,
      "fat": 0.3,
      "carbs": 10.8,
      "fiber": 1.4,
      "sodium": 33.0,
      "calcium": 80.0,
      "iron": 6.4,
      "vitA": 4697.0,
      "vitC": 27.0
    }
  },
  {
    "id": "dr080",
    "code": "DR080",
    "name": "Daun ubi putih, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 46.0,
      "protein": 2.8,
      "fat": 0.2,
      "carbs": 8.2,
      "fiber": 4.8,
      "sodium": 10.0,
      "calcium": 120.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 8.0
    }
  },
  {
    "id": "dr081",
    "code": "DR081",
    "name": "Daun ubi tinta, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 55.0,
      "protein": 1.7,
      "fat": 0.1,
      "carbs": 11.9,
      "fiber": 7.6,
      "sodium": 10.0,
      "calcium": 120.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 7.0
    }
  },
  {
    "id": "dr082",
    "code": "DR082",
    "name": "Eceng, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 19.0,
      "protein": 1.0,
      "fat": 0.2,
      "carbs": 3.8,
      "fiber": 1.8,
      "sodium": 45.0,
      "calcium": 80.0,
      "iron": 3.7,
      "vitA": 1000.0,
      "vitC": 50.0
    }
  },
  {
    "id": "dr083",
    "code": "DR083",
    "name": "Gambas (oyong), segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 19.0,
      "protein": 0.8,
      "fat": 0.2,
      "carbs": 4.1,
      "fiber": 1.3,
      "sodium": 23.0,
      "calcium": 19.0,
      "iron": 0.9,
      "vitA": 380.0,
      "vitC": 8.0
    }
  },
  {
    "id": "dr084",
    "code": "DR084",
    "name": "Genjer, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 35.0,
      "protein": 1.7,
      "fat": 0.2,
      "carbs": 7.7,
      "fiber": 2.5,
      "sodium": 64.0,
      "calcium": 62.0,
      "iron": 2.1,
      "vitA": 3800.0,
      "vitC": 54.0
    }
  },
  {
    "id": "dr085",
    "code": "DR085",
    "name": "Jagung muda / semi, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 35.0,
      "protein": 2.2,
      "fat": 0.1,
      "carbs": 7.4,
      "fiber": 1.9,
      "sodium": 353.0,
      "calcium": 0.0,
      "iron": 0.5,
      "vitA": 200.0,
      "vitC": 8.0
    }
  },
  {
    "id": "dr086",
    "code": "DR086",
    "name": "Jamur encik",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 296.0,
      "protein": 9.4,
      "fat": 1.1,
      "carbs": 62.0,
      "fiber": 0.0,
      "sodium": 2.0,
      "calcium": 0.0,
      "iron": 5.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dr087",
    "code": "DR087",
    "name": "Jamur kuping, kering",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 294.0,
      "protein": 16.0,
      "fat": 0.9,
      "carbs": 64.6,
      "fiber": 46.5,
      "sodium": 174.0,
      "calcium": 51.0,
      "iron": 6.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dr088",
    "code": "DR088",
    "name": "Jamur kuping, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 21.0,
      "protein": 3.8,
      "fat": 0.6,
      "carbs": 0.9,
      "fiber": 5.1,
      "sodium": 17.0,
      "calcium": 0.0,
      "iron": 1.7,
      "vitA": 0.0,
      "vitC": 5.0
    }
  },
  {
    "id": "dr089",
    "code": "DR089",
    "name": "Jamur merang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 3.5,
      "fat": 0.2,
      "carbs": 4.0,
      "fiber": 2.4,
      "sodium": 6.0,
      "calcium": 14.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dr090",
    "code": "DR090",
    "name": "Jamur tiram, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 1.9,
      "fat": 0.1,
      "carbs": 5.5,
      "fiber": 3.6,
      "sodium": 22.0,
      "calcium": 0.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dr091",
    "code": "DR091",
    "name": "Jamur sagu",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 48.0,
      "protein": 1.9,
      "fat": 3.2,
      "carbs": 2.8,
      "fiber": 1.0,
      "sodium": 100.0,
      "calcium": 10.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dr092",
    "code": "DR092",
    "name": "Jantung pisang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 32.0,
      "protein": 1.2,
      "fat": 0.3,
      "carbs": 7.1,
      "fiber": 3.2,
      "sodium": 3.0,
      "calcium": 30.0,
      "iron": 0.1,
      "vitA": 170.0,
      "vitC": 10.0
    }
  },
  {
    "id": "dr093",
    "code": "DR093",
    "name": "Jengkol, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 192.0,
      "protein": 5.4,
      "fat": 0.3,
      "carbs": 40.7,
      "fiber": 1.5,
      "sodium": 60.0,
      "calcium": 0.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 31.0
    }
  },
  {
    "id": "dr094",
    "code": "DR094",
    "name": "Jotang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 34.0,
      "protein": 1.9,
      "fat": 0.3,
      "carbs": 7.1,
      "fiber": 3.5,
      "sodium": 59.0,
      "calcium": 162.0,
      "iron": 4.0,
      "vitA": 3918.0,
      "vitC": 20.0
    }
  },
  {
    "id": "dr095",
    "code": "DR095",
    "name": "Kabau, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 130.0,
      "protein": 6.7,
      "fat": 0.3,
      "carbs": 25.2,
      "fiber": 2.9,
      "sodium": 1.0,
      "calcium": 0.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 16.0
    }
  },
  {
    "id": "dr096",
    "code": "DR096",
    "name": "Kacang mekah, polong, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 22.0,
      "protein": 1.1,
      "fat": 1.0,
      "carbs": 3.4,
      "fiber": 1.1,
      "sodium": 2.0,
      "calcium": 63.0,
      "iron": 1.0,
      "vitA": 116.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dr097",
    "code": "DR097",
    "name": "Kacang panjang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 31.0,
      "protein": 2.3,
      "fat": 0.1,
      "carbs": 5.3,
      "fiber": 2.7,
      "sodium": 30.0,
      "calcium": 60.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 46.0
    }
  },
  {
    "id": "dr098",
    "code": "DR098",
    "name": "Kacang ranti polong",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 37.0,
      "protein": 3.1,
      "fat": 0.2,
      "carbs": 7.9,
      "fiber": 2.5,
      "sodium": 0.0,
      "calcium": 103.0,
      "iron": 0.8,
      "vitA": 2312.0,
      "vitC": 6.0
    }
  },
  {
    "id": "dr099",
    "code": "DR099",
    "name": "Kalakai, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 38.0,
      "protein": 2.4,
      "fat": 0.2,
      "carbs": 6.6,
      "fiber": 5.8,
      "sodium": 7.0,
      "calcium": 18.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 8.0
    }
  },
  {
    "id": "dr100",
    "code": "DR100",
    "name": "Kangkung, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 28.0,
      "protein": 3.4,
      "fat": 0.7,
      "carbs": 3.9,
      "fiber": 2.0,
      "sodium": 65.0,
      "calcium": 67.0,
      "iron": 2.3,
      "vitA": 5542.0,
      "vitC": 17.0
    }
  },
  {
    "id": "dr101",
    "code": "DR101",
    "name": "Kangkung tondano",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 43.0,
      "protein": 1.8,
      "fat": 0.2,
      "carbs": 8.4,
      "fiber": 4.3,
      "sodium": 30.0,
      "calcium": 72.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 23.0
    }
  },
  {
    "id": "dr102",
    "code": "DR102",
    "name": "Kapri muda, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 45.0,
      "protein": 3.3,
      "fat": 0.2,
      "carbs": 9.0,
      "fiber": 1.8,
      "sodium": 2.0,
      "calcium": 51.0,
      "iron": 1.0,
      "vitA": 440.0,
      "vitC": 49.0
    }
  },
  {
    "id": "dr103",
    "code": "DR103",
    "name": "Karawila",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 25.0,
      "protein": 2.3,
      "fat": 0.2,
      "carbs": 3.5,
      "fiber": 2.1,
      "sodium": 8.0,
      "calcium": 25.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 39.0
    }
  },
  {
    "id": "dr104",
    "code": "DR104",
    "name": "Kecipir muda, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 32.0,
      "protein": 2.9,
      "fat": 0.2,
      "carbs": 5.8,
      "fiber": 5.5,
      "sodium": 3.0,
      "calcium": 63.0,
      "iron": 0.3,
      "vitA": 595.0,
      "vitC": 19.0
    }
  },
  {
    "id": "dr105",
    "code": "DR105",
    "name": "Kecombrang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 34.0,
      "protein": 0.9,
      "fat": 1.0,
      "carbs": 6.7,
      "fiber": 2.6,
      "sodium": 47.0,
      "calcium": 60.0,
      "iron": 1.0,
      "vitA": 73.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dr106",
    "code": "DR106",
    "name": "Kelawi,kluwih, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 118.0,
      "protein": 1.5,
      "fat": 0.3,
      "carbs": 27.2,
      "fiber": 5.0,
      "sodium": 2.0,
      "calcium": 28.0,
      "iron": 0.9,
      "vitA": 20.0,
      "vitC": 19.0
    }
  },
  {
    "id": "dr107",
    "code": "DR107",
    "name": "Kembang turi, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 51.0,
      "protein": 1.8,
      "fat": 0.6,
      "carbs": 9.6,
      "fiber": 5.0,
      "sodium": 22.0,
      "calcium": 23.0,
      "iron": 0.9,
      "vitA": 105.0,
      "vitC": 41.0
    }
  },
  {
    "id": "dr108",
    "code": "DR108",
    "name": "Kerokot, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 26.0,
      "protein": 1.7,
      "fat": 0.4,
      "carbs": 3.8,
      "fiber": 1.0,
      "sodium": 4.0,
      "calcium": 103.0,
      "iron": 3.6,
      "vitA": 2550.0,
      "vitC": 25.0
    }
  },
  {
    "id": "dr109",
    "code": "DR109",
    "name": "Ketimun, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 8.0,
      "protein": 0.2,
      "fat": 0.2,
      "carbs": 1.4,
      "fiber": 0.3,
      "sodium": 2.0,
      "calcium": 29.0,
      "iron": 0.8,
      "vitA": 314.0,
      "vitC": 1.0
    }
  },
  {
    "id": "dr110",
    "code": "DR110",
    "name": "Ketimun krai, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 10.0,
      "protein": 0.5,
      "fat": 0.2,
      "carbs": 2.0,
      "fiber": 0.6,
      "sodium": 10.0,
      "calcium": 20.0,
      "iron": 1.0,
      "vitA": 21.0,
      "vitC": 3.0
    }
  },
  {
    "id": "dr111",
    "code": "DR111",
    "name": "Ketimun madura, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 9.0,
      "protein": 0.5,
      "fat": 0.1,
      "carbs": 1.9,
      "fiber": 0.7,
      "sodium": 2.0,
      "calcium": 15.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 5.0
    }
  },
  {
    "id": "dr112",
    "code": "DR112",
    "name": "Komak, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 99.0,
      "protein": 3.3,
      "fat": 0.1,
      "carbs": 21.2,
      "fiber": 10.3,
      "sodium": 15.0,
      "calcium": 50.0,
      "iron": 13.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dr113",
    "code": "DR113",
    "name": "Kool kembang",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 25.0,
      "protein": 2.4,
      "fat": 0.2,
      "carbs": 4.9,
      "fiber": 1.6,
      "sodium": 47.0,
      "calcium": 22.0,
      "iron": 1.1,
      "vitA": 90.0,
      "vitC": 69.0
    }
  },
  {
    "id": "dr114",
    "code": "DR114",
    "name": "Kool merah,kool putih",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 29.0,
      "protein": 1.4,
      "fat": 0.2,
      "carbs": 5.3,
      "fiber": 1.9,
      "sodium": 28.0,
      "calcium": 46.0,
      "iron": 0.5,
      "vitA": 80.0,
      "vitC": 50.0
    }
  },
  {
    "id": "dr115",
    "code": "DR115",
    "name": "Koro kerupuk, polong",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 128.0,
      "protein": 8.3,
      "fat": 0.7,
      "carbs": 22.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 17.0,
      "iron": 2.7,
      "vitA": 80.0,
      "vitC": 31.0
    }
  },
  {
    "id": "dr116",
    "code": "DR116",
    "name": "Koro wedus, polong",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 46.0,
      "protein": 3.0,
      "fat": 0.3,
      "carbs": 7.9,
      "fiber": 3.3,
      "sodium": 2.0,
      "calcium": 56.0,
      "iron": 1.1,
      "vitA": 870.0,
      "vitC": 17.0
    }
  },
  {
    "id": "dr117",
    "code": "DR117",
    "name": "Kucai, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 45.0,
      "protein": 2.2,
      "fat": 0.3,
      "carbs": 10.3,
      "fiber": 4.8,
      "sodium": 21.0,
      "calcium": 52.0,
      "iron": 1.1,
      "vitA": 40.0,
      "vitC": 17.0
    }
  },
  {
    "id": "dr118",
    "code": "DR118",
    "name": "Kucai muda (Lokio), segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 42.0,
      "protein": 3.8,
      "fat": 0.6,
      "carbs": 7.8,
      "fiber": 4.9,
      "sodium": 22.0,
      "calcium": 76.0,
      "iron": 2.5,
      "vitA": 500.0,
      "vitC": 59.0
    }
  },
  {
    "id": "dr119",
    "code": "DR119",
    "name": "Kulit melinjo",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 111.0,
      "protein": 4.5,
      "fat": 1.1,
      "carbs": 20.7,
      "fiber": 5.0,
      "sodium": 0.0,
      "calcium": 117.0,
      "iron": 2.6,
      "vitA": 1267.0,
      "vitC": 7.0
    }
  },
  {
    "id": "dr120",
    "code": "DR120",
    "name": "Kundur, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 22.0,
      "protein": 0.4,
      "fat": 0.2,
      "carbs": 4.7,
      "fiber": 1.3,
      "sodium": 2.0,
      "calcium": 0.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 1.0
    }
  },
  {
    "id": "dr121",
    "code": "DR121",
    "name": "Labu air, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 19.0,
      "protein": 0.6,
      "fat": 0.2,
      "carbs": 3.8,
      "fiber": 0.6,
      "sodium": 2.0,
      "calcium": 12.0,
      "iron": 0.6,
      "vitA": 70.0,
      "vitC": 10.0
    }
  },
  {
    "id": "dr122",
    "code": "DR122",
    "name": "Labu kuning, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 51.0,
      "protein": 1.7,
      "fat": 0.5,
      "carbs": 10.0,
      "fiber": 2.7,
      "sodium": 280.0,
      "calcium": 40.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "dr123",
    "code": "DR123",
    "name": "Labu siam, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 0.6,
      "fat": 0.1,
      "carbs": 6.7,
      "fiber": 6.2,
      "sodium": 3.0,
      "calcium": 14.0,
      "iron": 0.5,
      "vitA": 20.0,
      "vitC": 18.0
    }
  },
  {
    "id": "dr124",
    "code": "DR124",
    "name": "Labu waluh, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 32.0,
      "protein": 1.1,
      "fat": 0.1,
      "carbs": 6.6,
      "fiber": 0.5,
      "sodium": 1.0,
      "calcium": 145.0,
      "iron": 1.4,
      "vitA": 180.0,
      "vitC": 52.0
    }
  },
  {
    "id": "dr125",
    "code": "DR125",
    "name": "Lantar, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 34.0,
      "protein": 2.2,
      "fat": 0.3,
      "carbs": 5.5,
      "fiber": 2.9,
      "sodium": 3.0,
      "calcium": 10.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "dr126",
    "code": "DR126",
    "name": "Lobak, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 21.0,
      "protein": 0.9,
      "fat": 0.1,
      "carbs": 4.2,
      "fiber": 2.0,
      "sodium": 49.0,
      "calcium": 35.0,
      "iron": 0.6,
      "vitA": 10.0,
      "vitC": 32.0
    }
  },
  {
    "id": "dr127",
    "code": "DR127",
    "name": "Lumai/Leunca, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 38.0,
      "protein": 1.1,
      "fat": 0.3,
      "carbs": 7.6,
      "fiber": 2.0,
      "sodium": 2.0,
      "calcium": 0.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 17.0
    }
  },
  {
    "id": "dr128",
    "code": "DR128",
    "name": "Melinjo, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 66.0,
      "protein": 5.0,
      "fat": 0.7,
      "carbs": 13.3,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 1163.0,
      "iron": 2.8,
      "vitA": 1000.0,
      "vitC": 10.0
    }
  },
  {
    "id": "dr129",
    "code": "DR129",
    "name": "Mostarda metan -sawi",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 33.0,
      "protein": 2.3,
      "fat": 0.5,
      "carbs": 4.7,
      "fiber": 1.8,
      "sodium": 20.0,
      "calcium": 60.0,
      "iron": 3.1,
      "vitA": 0.0,
      "vitC": 12.0
    }
  },
  {
    "id": "dr130",
    "code": "DR130",
    "name": "Nangka muda, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 57.0,
      "protein": 2.0,
      "fat": 0.4,
      "carbs": 11.3,
      "fiber": 8.3,
      "sodium": 1.0,
      "calcium": 45.0,
      "iron": 0.5,
      "vitA": 25.0,
      "vitC": 9.0
    }
  },
  {
    "id": "dr131",
    "code": "DR131",
    "name": "Paria putih, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 19.0,
      "protein": 1.0,
      "fat": 0.4,
      "carbs": 3.6,
      "fiber": 1.3,
      "sodium": 5.0,
      "calcium": 31.0,
      "iron": 0.9,
      "vitA": 80.0,
      "vitC": 58.0
    }
  },
  {
    "id": "dr132",
    "code": "DR132",
    "name": "Pepare ular, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 19.0,
      "protein": 0.6,
      "fat": 0.1,
      "carbs": 3.9,
      "fiber": 1.0,
      "sodium": 130.0,
      "calcium": 20.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "dr133",
    "code": "DR133",
    "name": "Pepaya muda, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 29.0,
      "protein": 2.1,
      "fat": 0.1,
      "carbs": 4.9,
      "fiber": 2.1,
      "sodium": 22.0,
      "calcium": 50.0,
      "iron": 0.4,
      "vitA": 50.0,
      "vitC": 19.0
    }
  },
  {
    "id": "dr134",
    "code": "DR134",
    "name": "Petai, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 92.0,
      "protein": 5.4,
      "fat": 1.1,
      "carbs": 15.2,
      "fiber": 2.0,
      "sodium": 55.0,
      "calcium": 14.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 34.0
    }
  },
  {
    "id": "dr135",
    "code": "DR135",
    "name": "Peterseli, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 53.0,
      "protein": 3.7,
      "fat": 1.0,
      "carbs": 9.0,
      "fiber": 0.0,
      "sodium": 18.0,
      "calcium": 193.0,
      "iron": 4.3,
      "vitA": 8230.0,
      "vitC": 19.0
    }
  },
  {
    "id": "dr136",
    "code": "DR136",
    "name": "Pucuk lumai/daun leunca, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 33.0,
      "protein": 4.5,
      "fat": 0.4,
      "carbs": 2.8,
      "fiber": 0.0,
      "sodium": 2.0,
      "calcium": 13.0,
      "iron": 2.9,
      "vitA": 0.0,
      "vitC": 41.0
    }
  },
  {
    "id": "dr137",
    "code": "DR137",
    "name": "Putri malu, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 76.0,
      "protein": 3.6,
      "fat": 0.3,
      "carbs": 14.6,
      "fiber": 7.1,
      "sodium": 1.0,
      "calcium": 119.0,
      "iron": 3.3,
      "vitA": 0.0,
      "vitC": 6.0
    }
  },
  {
    "id": "dr138",
    "code": "DR138",
    "name": "Rebung, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 25.0,
      "protein": 0.8,
      "fat": 0.1,
      "carbs": 5.3,
      "fiber": 9.7,
      "sodium": 3.0,
      "calcium": 0.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dr139",
    "code": "DR139",
    "name": "Rimbang, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 75.0,
      "protein": 1.6,
      "fat": 0.6,
      "carbs": 15.8,
      "fiber": 10.0,
      "sodium": 20.0,
      "calcium": 55.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 38.0
    }
  },
  {
    "id": "dr140",
    "code": "DR140",
    "name": "Rumput laut",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 41.0,
      "protein": 1.4,
      "fat": 0.3,
      "carbs": 8.1,
      "fiber": 2.2,
      "sodium": 250.0,
      "calcium": 80.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 7.0
    }
  },
  {
    "id": "dr141",
    "code": "DR141",
    "name": "Sawi, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 28.0,
      "protein": 2.3,
      "fat": 0.3,
      "carbs": 4.0,
      "fiber": 2.5,
      "sodium": 22.0,
      "calcium": 220.0,
      "iron": 2.9,
      "vitA": 6460.0,
      "vitC": 102.0
    }
  },
  {
    "id": "dr142",
    "code": "DR142",
    "name": "Sawi putih / pecai, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 9.0,
      "protein": 1.0,
      "fat": 0.1,
      "carbs": 1.7,
      "fiber": 0.8,
      "sodium": 5.0,
      "calcium": 56.0,
      "iron": 1.1,
      "vitA": 832.0,
      "vitC": 3.0
    }
  },
  {
    "id": "dr143",
    "code": "DR143",
    "name": "Sawi taiwan, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 1.9,
      "fat": 0.5,
      "carbs": 4.4,
      "fiber": 2.7,
      "sodium": 27.0,
      "calcium": 100.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 33.0
    }
  },
  {
    "id": "dr144",
    "code": "DR144",
    "name": "Sawi tanah, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 19.0,
      "protein": 1.3,
      "fat": 0.2,
      "carbs": 2.9,
      "fiber": 2.2,
      "sodium": 17.0,
      "calcium": 192.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 36.0
    }
  },
  {
    "id": "dr145",
    "code": "DR145",
    "name": "Selada, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 18.0,
      "protein": 1.2,
      "fat": 0.2,
      "carbs": 2.9,
      "fiber": 1.8,
      "sodium": 19.0,
      "calcium": 22.0,
      "iron": 0.5,
      "vitA": 540.0,
      "vitC": 8.0
    }
  },
  {
    "id": "dr146",
    "code": "DR146",
    "name": "Selada air, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 17.0,
      "protein": 3.1,
      "fat": 0.2,
      "carbs": 2.2,
      "fiber": 0.7,
      "sodium": 65.0,
      "calcium": 95.0,
      "iron": 2.4,
      "vitA": 3727.0,
      "vitC": 56.0
    }
  },
  {
    "id": "dr147",
    "code": "DR147",
    "name": "Seledri, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 23.0,
      "protein": 1.0,
      "fat": 0.1,
      "carbs": 4.6,
      "fiber": 2.0,
      "sodium": 64.0,
      "calcium": 50.0,
      "iron": 1.0,
      "vitA": 130.0,
      "vitC": 11.0
    }
  },
  {
    "id": "dr148",
    "code": "DR148",
    "name": "Taoge, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 34.0,
      "protein": 3.7,
      "fat": 1.2,
      "carbs": 4.3,
      "fiber": 1.1,
      "sodium": 19.0,
      "calcium": 166.0,
      "iron": 0.8,
      "vitA": 20.0,
      "vitC": 5.0
    }
  },
  {
    "id": "dr149",
    "code": "DR149",
    "name": "Taoge kacang kedelai, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 76.0,
      "protein": 9.0,
      "fat": 2.6,
      "carbs": 6.4,
      "fiber": 0.7,
      "sodium": 5.0,
      "calcium": 150.0,
      "iron": 1.0,
      "vitA": 110.0,
      "vitC": 15.0
    }
  },
  {
    "id": "dr150",
    "code": "DR150",
    "name": "Taoge kacang tunggak, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 40.0,
      "protein": 5.0,
      "fat": 0.2,
      "carbs": 5.8,
      "fiber": 2.6,
      "sodium": 2.0,
      "calcium": 157.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 15.0
    }
  },
  {
    "id": "dr151",
    "code": "DR151",
    "name": "Tebu terubuk (lilin), segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 4.6,
      "fat": 0.4,
      "carbs": 3.0,
      "fiber": 0.8,
      "sodium": 699.0,
      "calcium": 140.0,
      "iron": 2.0,
      "vitA": 0.0,
      "vitC": 50.0
    }
  },
  {
    "id": "dr152",
    "code": "DR152",
    "name": "Tekokak, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 34.0,
      "protein": 2.0,
      "fat": 0.1,
      "carbs": 7.9,
      "fiber": 4.9,
      "sodium": 3.0,
      "calcium": 150.0,
      "iron": 2.0,
      "vitA": 750.0,
      "vitC": 8.0
    }
  },
  {
    "id": "dr153",
    "code": "DR153",
    "name": "Tekokak, kering",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 302.0,
      "protein": 8.3,
      "fat": 1.7,
      "carbs": 72.6,
      "fiber": 21.2,
      "sodium": 9.0,
      "calcium": 370.0,
      "iron": 22.2,
      "vitA": 750.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dr154",
    "code": "DR154",
    "name": "Terong, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 28.0,
      "protein": 1.1,
      "fat": 0.2,
      "carbs": 5.5,
      "fiber": 2.1,
      "sodium": 9.0,
      "calcium": 15.0,
      "iron": 0.4,
      "vitA": 30.0,
      "vitC": 5.0
    }
  },
  {
    "id": "dr155",
    "code": "DR155",
    "name": "Terong asam, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 37.0,
      "protein": 2.0,
      "fat": 0.4,
      "carbs": 6.3,
      "fiber": 3.2,
      "sodium": 3.0,
      "calcium": 13.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "dr156",
    "code": "DR156",
    "name": "Terung belanda, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 52.0,
      "protein": 2.1,
      "fat": 1.1,
      "carbs": 8.6,
      "fiber": 1.4,
      "sodium": 0.0,
      "calcium": 116.0,
      "iron": 1.1,
      "vitA": 8048.0,
      "vitC": 12.0
    }
  },
  {
    "id": "dr157",
    "code": "DR157",
    "name": "Terung bengkulu,segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 52.0,
      "protein": 1.1,
      "fat": 0.4,
      "carbs": 11.2,
      "fiber": 3.2,
      "sodium": 14.0,
      "calcium": 19.0,
      "iron": 1.1,
      "vitA": 600.0,
      "vitC": 6.0
    }
  },
  {
    "id": "dr158",
    "code": "DR158",
    "name": "Terong hintalo, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 45.0,
      "protein": 1.9,
      "fat": 0.8,
      "carbs": 7.5,
      "fiber": 5.1,
      "sodium": 167.0,
      "calcium": 19.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "dr159",
    "code": "DR159",
    "name": "Terung panjang",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 25.0,
      "protein": 2.1,
      "fat": 0.1,
      "carbs": 5.3,
      "fiber": 0.5,
      "sodium": 9.0,
      "calcium": 38.0,
      "iron": 0.7,
      "vitA": 24.0,
      "vitC": 8.0
    }
  },
  {
    "id": "dr160",
    "code": "DR160",
    "name": "Tomat, air (sari), segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 20.0,
      "protein": 1.0,
      "fat": 0.2,
      "carbs": 3.5,
      "fiber": 0.4,
      "sodium": 10.0,
      "calcium": 0.0,
      "iron": 0.4,
      "vitA": 600.0,
      "vitC": 10.0
    }
  },
  {
    "id": "dr161",
    "code": "DR161",
    "name": "Tomat merah, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 24.0,
      "protein": 1.3,
      "fat": 0.5,
      "carbs": 4.7,
      "fiber": 1.5,
      "sodium": 10.0,
      "calcium": 0.0,
      "iron": 0.6,
      "vitA": 2083.0,
      "vitC": 34.0
    }
  },
  {
    "id": "dr162",
    "code": "DR162",
    "name": "Tomat muda, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 24.0,
      "protein": 2.0,
      "fat": 0.7,
      "carbs": 3.3,
      "fiber": 1.8,
      "sodium": 10.0,
      "calcium": 2.0,
      "iron": 0.5,
      "vitA": 320.0,
      "vitC": 30.0
    }
  },
  {
    "id": "dr163",
    "code": "DR163",
    "name": "Uceng/ bunga melinjo, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 82.0,
      "protein": 5.8,
      "fat": 1.3,
      "carbs": 11.7,
      "fiber": 4.8,
      "sodium": 0.0,
      "calcium": 70.0,
      "iron": 2.4,
      "vitA": 58.0,
      "vitC": 3.0
    }
  },
  {
    "id": "dr164",
    "code": "DR164",
    "name": "Umbut kelapa, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 39.0,
      "protein": 2.0,
      "fat": 0.2,
      "carbs": 7.2,
      "fiber": 2.5,
      "sodium": 4.0,
      "calcium": 57.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 8.0
    }
  },
  {
    "id": "dr165",
    "code": "DR165",
    "name": "Umbut rotan",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 34.0,
      "protein": 2.4,
      "fat": 0.3,
      "carbs": 5.5,
      "fiber": 2.2,
      "sodium": 8.0,
      "calcium": 89.0,
      "iron": 1.3,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "dr166",
    "code": "DR166",
    "name": "Wortel, segar",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 36.0,
      "protein": 1.0,
      "fat": 0.6,
      "carbs": 7.9,
      "fiber": 1.0,
      "sodium": 70.0,
      "calcium": 45.0,
      "iron": 1.0,
      "vitA": 7125.0,
      "vitC": 18.0
    }
  },
  {
    "id": "dp001",
    "code": "DP001",
    "name": "Bayam, kukus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 1.3,
      "fat": 0.7,
      "carbs": 5.8,
      "fiber": 1.2,
      "sodium": 15.0,
      "calcium": 239.0,
      "iron": 5.7,
      "vitA": 3750.0,
      "vitC": 32.0
    }
  },
  {
    "id": "dp002",
    "code": "DP002",
    "name": "Bayam ,rebus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 23.0,
      "protein": 1.2,
      "fat": 0.6,
      "carbs": 3.7,
      "fiber": 1.1,
      "sodium": 16.0,
      "calcium": 1150.0,
      "iron": 0.5,
      "vitA": 2864.0,
      "vitC": 19.0
    }
  },
  {
    "id": "dp003",
    "code": "DP003",
    "name": "Buncis, rebus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 2.2,
      "fat": 0.2,
      "carbs": 6.4,
      "fiber": 1.5,
      "sodium": 7.0,
      "calcium": 107.0,
      "iron": 0.5,
      "vitA": 402.0,
      "vitC": 8.0
    }
  },
  {
    "id": "dp004",
    "code": "DP004",
    "name": "Daun kacang panjang, kukus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 40.0,
      "protein": 3.7,
      "fat": 0.3,
      "carbs": 8.0,
      "fiber": 1.8,
      "sodium": 6.0,
      "calcium": 111.0,
      "iron": 3.7,
      "vitA": 5781.0,
      "vitC": 11.0
    }
  },
  {
    "id": "dp005",
    "code": "DP005",
    "name": "Daun katuk, rebus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 53.0,
      "protein": 5.3,
      "fat": 0.9,
      "carbs": 9.1,
      "fiber": 1.2,
      "sodium": 16.0,
      "calcium": 185.0,
      "iron": 3.1,
      "vitA": 9000.0,
      "vitC": 66.0
    }
  },
  {
    "id": "dp006",
    "code": "DP006",
    "name": "Daun kelor, rebus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 61.0,
      "protein": 6.1,
      "fat": 0.9,
      "carbs": 10.0,
      "fiber": 0.9,
      "sodium": 45.0,
      "calcium": 255.0,
      "iron": 2.1,
      "vitA": 6071.0,
      "vitC": 13.0
    }
  },
  {
    "id": "dp007",
    "code": "DP007",
    "name": "Daun mengkudu, kukus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 63.0,
      "protein": 3.8,
      "fat": 1.5,
      "carbs": 11.5,
      "fiber": 2.4,
      "sodium": 0.0,
      "calcium": 300.0,
      "iron": 6.0,
      "vitA": 4900.0,
      "vitC": 11.0
    }
  },
  {
    "id": "dp008",
    "code": "DP008",
    "name": "Daun singkong, rebus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 31.0,
      "protein": 3.7,
      "fat": 0.6,
      "carbs": 4.8,
      "fiber": 1.6,
      "sodium": 13.0,
      "calcium": 160.0,
      "iron": 2.6,
      "vitA": 4150.0,
      "vitC": 34.0
    }
  },
  {
    "id": "dp009",
    "code": "DP009",
    "name": "Daun talas, rebus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 27.0,
      "protein": 1.3,
      "fat": 0.2,
      "carbs": 5.9,
      "fiber": 1.6,
      "sodium": 3.0,
      "calcium": 1119.0,
      "iron": 1.4,
      "vitA": 2682.0,
      "vitC": 7.0
    }
  },
  {
    "id": "dp010",
    "code": "DP010",
    "name": "Daun ubi merah, kukus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 56.0,
      "protein": 3.1,
      "fat": 0.3,
      "carbs": 13.0,
      "fiber": 1.5,
      "sodium": 28.0,
      "calcium": 78.0,
      "iron": 4.3,
      "vitA": 5397.0,
      "vitC": 14.0
    }
  },
  {
    "id": "dp011",
    "code": "DP011",
    "name": "Kacang panjang,kukus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 39.0,
      "protein": 3.0,
      "fat": 0.6,
      "carbs": 7.6,
      "fiber": 1.7,
      "sodium": 28.0,
      "calcium": 100.0,
      "iron": 1.2,
      "vitA": 205.0,
      "vitC": 20.0
    }
  },
  {
    "id": "dp012",
    "code": "DP012",
    "name": "Kacang panjang, rebus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 2.3,
      "fat": 0.4,
      "carbs": 5.8,
      "fiber": 1.4,
      "sodium": 24.0,
      "calcium": 71.0,
      "iron": 0.8,
      "vitA": 162.0,
      "vitC": 15.0
    }
  },
  {
    "id": "dp013",
    "code": "DP013",
    "name": "Kangkung, kukus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 3.2,
      "fat": 0.7,
      "carbs": 4.7,
      "fiber": 1.8,
      "sodium": 45.0,
      "calcium": 170.0,
      "iron": 4.4,
      "vitA": 5837.0,
      "vitC": 11.0
    }
  },
  {
    "id": "dp014",
    "code": "DP014",
    "name": "Kangkung, rebus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 22.0,
      "protein": 2.5,
      "fat": 0.6,
      "carbs": 3.1,
      "fiber": 1.2,
      "sodium": 31.0,
      "calcium": 50.0,
      "iron": 3.5,
      "vitA": 4325.0,
      "vitC": 13.0
    }
  },
  {
    "id": "dp015",
    "code": "DP015",
    "name": "Paria putih, kukus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 16.0,
      "protein": 0.8,
      "fat": 0.2,
      "carbs": 3.4,
      "fiber": 1.2,
      "sodium": 4.0,
      "calcium": 16.0,
      "iron": 0.5,
      "vitA": 65.0,
      "vitC": 35.0
    }
  },
  {
    "id": "dp016",
    "code": "DP016",
    "name": "Selada, rebus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 19.0,
      "protein": 2.7,
      "fat": 0.2,
      "carbs": 2.9,
      "fiber": 0.7,
      "sodium": 24.0,
      "calcium": 83.0,
      "iron": 1.4,
      "vitA": 3700.0,
      "vitC": 27.0
    }
  },
  {
    "id": "dp017",
    "code": "DP017",
    "name": "Taoge, goreng",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 88.0,
      "protein": 3.2,
      "fat": 2.1,
      "carbs": 14.0,
      "fiber": 0.7,
      "sodium": 0.0,
      "calcium": 168.0,
      "iron": 5.7,
      "vitA": 2.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp018",
    "code": "DP018",
    "name": "Taoge, seduh",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 28.0,
      "protein": 3.0,
      "fat": 0.8,
      "carbs": 4.0,
      "fiber": 1.0,
      "sodium": 18.0,
      "calcium": 52.0,
      "iron": 0.5,
      "vitA": 18.0,
      "vitC": 2.0
    }
  },
  {
    "id": "dp019",
    "code": "DP019",
    "name": "Terung panjang, kukus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 23.0,
      "protein": 1.8,
      "fat": 0.1,
      "carbs": 4.9,
      "fiber": 0.4,
      "sodium": 9.0,
      "calcium": 40.0,
      "iron": 0.5,
      "vitA": 20.0,
      "vitC": 1.0
    }
  },
  {
    "id": "dp020",
    "code": "DP020",
    "name": "Wortel, rebus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 28.0,
      "protein": 0.7,
      "fat": 0.5,
      "carbs": 6.3,
      "fiber": 0.8,
      "sodium": 41.0,
      "calcium": 46.0,
      "iron": 0.6,
      "vitA": 5396.0,
      "vitC": 12.0
    }
  },
  {
    "id": "dp021",
    "code": "DP021",
    "name": "Wortel, kukus",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 37.0,
      "protein": 1.0,
      "fat": 0.6,
      "carbs": 8.3,
      "fiber": 1.1,
      "sodium": 43.0,
      "calcium": 44.0,
      "iron": 0.6,
      "vitA": 7150.0,
      "vitC": 14.0
    }
  },
  {
    "id": "dp022",
    "code": "DP022",
    "name": "Asinan Bogor, sayuran",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 98.0,
      "protein": 3.9,
      "fat": 2.6,
      "carbs": 14.8,
      "fiber": 0.5,
      "sodium": 483.0,
      "calcium": 314.0,
      "iron": 1.2,
      "vitA": 10.0,
      "vitC": 5.0
    }
  },
  {
    "id": "dp023",
    "code": "DP023",
    "name": "Anyang, sayur",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 126.0,
      "protein": 3.4,
      "fat": 7.9,
      "carbs": 10.3,
      "fiber": 5.4,
      "sodium": 290.0,
      "calcium": 180.0,
      "iron": 2.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp024",
    "code": "DP024",
    "name": "Ares, sayur",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 113.0,
      "protein": 0.9,
      "fat": 7.2,
      "carbs": 11.2,
      "fiber": 4.7,
      "sodium": 1413.0,
      "calcium": 363.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp025",
    "code": "DP025",
    "name": "Arwan sirsir",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 277.0,
      "protein": 2.4,
      "fat": 25.0,
      "carbs": 10.7,
      "fiber": 4.6,
      "sodium": 240.0,
      "calcium": 120.0,
      "iron": 2.4,
      "vitA": 0.0,
      "vitC": 11.0
    }
  },
  {
    "id": "dp026",
    "code": "DP026",
    "name": "Beberuk",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 65.0,
      "protein": 1.1,
      "fat": 5.2,
      "carbs": 3.5,
      "fiber": 3.1,
      "sodium": 53.0,
      "calcium": 179.0,
      "iron": 8.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp027",
    "code": "DP027",
    "name": "Botok lamtoro",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 186.0,
      "protein": 11.7,
      "fat": 9.7,
      "carbs": 13.0,
      "fiber": 2.1,
      "sodium": 0.0,
      "calcium": 771.0,
      "iron": 26.0,
      "vitA": 18.0,
      "vitC": 2.0
    }
  },
  {
    "id": "dp028",
    "code": "DP028",
    "name": "Buntil daun talas",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 141.0,
      "protein": 4.4,
      "fat": 10.2,
      "carbs": 8.0,
      "fiber": 1.8,
      "sodium": 0.0,
      "calcium": 149.0,
      "iron": 14.5,
      "vitA": 13.0,
      "vitC": 1.0
    }
  },
  {
    "id": "dp029",
    "code": "DP029",
    "name": "Cammetutu",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 102.0,
      "protein": 3.2,
      "fat": 6.0,
      "carbs": 8.7,
      "fiber": 4.3,
      "sodium": 443.0,
      "calcium": 41.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 19.0
    }
  },
  {
    "id": "dp030",
    "code": "DP030",
    "name": "Cap cai, sayur",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 97.0,
      "protein": 5.8,
      "fat": 6.3,
      "carbs": 4.2,
      "fiber": 0.6,
      "sodium": 405.0,
      "calcium": 287.0,
      "iron": 1.8,
      "vitA": 45.0,
      "vitC": 1.0
    }
  },
  {
    "id": "dp031",
    "code": "DP031",
    "name": "Gado-gado",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 137.0,
      "protein": 6.1,
      "fat": 3.2,
      "carbs": 21.0,
      "fiber": 1.1,
      "sodium": 0.0,
      "calcium": 301.0,
      "iron": 7.5,
      "vitA": 3.0,
      "vitC": 1.0
    }
  },
  {
    "id": "dp032",
    "code": "DP032",
    "name": "Gudeg, sayur",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 160.0,
      "protein": 3.3,
      "fat": 9.2,
      "carbs": 16.0,
      "fiber": 2.3,
      "sodium": 0.0,
      "calcium": 62.0,
      "iron": 12.8,
      "vitA": 166.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp033",
    "code": "DP033",
    "name": "Gulai pakis",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 143.0,
      "protein": 4.0,
      "fat": 11.4,
      "carbs": 6.0,
      "fiber": 1.4,
      "sodium": 0.0,
      "calcium": 548.0,
      "iron": 1.7,
      "vitA": 11.0,
      "vitC": 1.0
    }
  },
  {
    "id": "dp034",
    "code": "DP034",
    "name": "Gulai pliek",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 176.0,
      "protein": 7.3,
      "fat": 14.9,
      "carbs": 3.2,
      "fiber": 0.0,
      "sodium": 257.0,
      "calcium": 39.0,
      "iron": 1.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp035",
    "code": "DP035",
    "name": "Kadada katembe",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 110.0,
      "protein": 4.5,
      "fat": 6.9,
      "carbs": 7.1,
      "fiber": 3.9,
      "sodium": 178.0,
      "calcium": 26.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 23.0
    }
  },
  {
    "id": "dp036",
    "code": "DP036",
    "name": "Kaparende, sayur",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 38.0,
      "protein": 2.4,
      "fat": 2.0,
      "carbs": 2.6,
      "fiber": 1.5,
      "sodium": 170.0,
      "calcium": 126.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 22.0
    }
  },
  {
    "id": "dp037",
    "code": "DP037",
    "name": "Karedok, sayur",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 92.0,
      "protein": 2.2,
      "fat": 3.3,
      "carbs": 14.1,
      "fiber": 1.4,
      "sodium": 0.0,
      "calcium": 174.0,
      "iron": 2.4,
      "vitA": 1.0,
      "vitC": 3.0
    }
  },
  {
    "id": "dp038",
    "code": "DP038",
    "name": "Keripik bayam",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 586.0,
      "protein": 4.9,
      "fat": 40.6,
      "carbs": 50.2,
      "fiber": 0.5,
      "sodium": 0.0,
      "calcium": 236.0,
      "iron": 3.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp039",
    "code": "DP039",
    "name": "Kotiu hinela tawang nggole",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 46.0,
      "protein": 2.2,
      "fat": 1.5,
      "carbs": 6.0,
      "fiber": 3.8,
      "sodium": 316.0,
      "calcium": 64.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 7.0
    }
  },
  {
    "id": "dp040",
    "code": "DP040",
    "name": "Lema/ Rebung asam",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 15.0,
      "protein": 1.0,
      "fat": 0.4,
      "carbs": 1.9,
      "fiber": 0.0,
      "sodium": 3.0,
      "calcium": 17.0,
      "iron": 2.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp041",
    "code": "DP041",
    "name": "Lilin bungkus gedi",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 79.0,
      "protein": 2.3,
      "fat": 5.2,
      "carbs": 5.8,
      "fiber": 2.5,
      "sodium": 170.0,
      "calcium": 170.0,
      "iron": 0.9,
      "vitA": 0.0,
      "vitC": 18.0
    }
  },
  {
    "id": "dp042",
    "code": "DP042",
    "name": "Olah-olah",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 84.0,
      "protein": 2.1,
      "fat": 6.0,
      "carbs": 7.1,
      "fiber": 4.4,
      "sodium": 289.0,
      "calcium": 26.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp043",
    "code": "DP043",
    "name": "Paku hinela wulelenggapaya",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 77.0,
      "protein": 3.5,
      "fat": 4.6,
      "carbs": 5.4,
      "fiber": 3.6,
      "sodium": 469.0,
      "calcium": 63.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "dp044",
    "code": "DP044",
    "name": "Pelecing kangkung",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 75.0,
      "protein": 2.5,
      "fat": 2.8,
      "carbs": 10.0,
      "fiber": 5.4,
      "sodium": 408.0,
      "calcium": 36.0,
      "iron": 2.1,
      "vitA": 0.0,
      "vitC": 12.0
    }
  },
  {
    "id": "dp045",
    "code": "DP045",
    "name": "Purundawa",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 25.0,
      "protein": 1.5,
      "fat": 0.5,
      "carbs": 3.6,
      "fiber": 1.7,
      "sodium": 239.0,
      "calcium": 147.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "dp046",
    "code": "DP046",
    "name": "Rujak cingur",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 153.0,
      "protein": 11.3,
      "fat": 8.4,
      "carbs": 8.0,
      "fiber": 1.4,
      "sodium": 0.0,
      "calcium": 256.0,
      "iron": 4.4,
      "vitA": 18.0,
      "vitC": 2.0
    }
  },
  {
    "id": "dp047",
    "code": "DP047",
    "name": "Sayur asem",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 29.0,
      "protein": 0.7,
      "fat": 0.6,
      "carbs": 5.0,
      "fiber": 0.6,
      "sodium": 0.0,
      "calcium": 40.0,
      "iron": 3.1,
      "vitA": 14.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp048",
    "code": "DP048",
    "name": "Sayur bunga pepaya",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 49.0,
      "protein": 1.7,
      "fat": 0.3,
      "carbs": 9.8,
      "fiber": 2.7,
      "sodium": 90.0,
      "calcium": 220.0,
      "iron": 1.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp049",
    "code": "DP049",
    "name": "Sayur garu",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 178.0,
      "protein": 2.6,
      "fat": 13.9,
      "carbs": 10.6,
      "fiber": 8.4,
      "sodium": 20.0,
      "calcium": 30.0,
      "iron": 0.9,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "dp050",
    "code": "DP050",
    "name": "Sayur kohu-kohu",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 133.0,
      "protein": 7.3,
      "fat": 6.6,
      "carbs": 11.2,
      "fiber": 1.2,
      "sodium": 20.0,
      "calcium": 40.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "dp051",
    "code": "DP051",
    "name": "Sayur lilin-terubuk",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 36.0,
      "protein": 2.7,
      "fat": 0.7,
      "carbs": 4.8,
      "fiber": 1.4,
      "sodium": 30.0,
      "calcium": 10.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 18.0
    }
  },
  {
    "id": "dp052",
    "code": "DP052",
    "name": "Sayur ndusuk",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 49.0,
      "protein": 3.1,
      "fat": 2.5,
      "carbs": 3.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 11.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 15.0
    }
  },
  {
    "id": "dp053",
    "code": "DP053",
    "name": "Sayur sop",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 27.0,
      "protein": 1.3,
      "fat": 2.0,
      "carbs": 1.0,
      "fiber": 0.3,
      "sodium": 0.0,
      "calcium": 168.0,
      "iron": 1.8,
      "vitA": 20.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp054",
    "code": "DP054",
    "name": "Sayur umbut kelapa",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 67.0,
      "protein": 5.2,
      "fat": 2.9,
      "carbs": 5.1,
      "fiber": 1.4,
      "sodium": 313.0,
      "calcium": 48.0,
      "iron": 3.2,
      "vitA": 0.0,
      "vitC": 5.0
    }
  },
  {
    "id": "dp055",
    "code": "DP055",
    "name": "Sayur umbut rotan",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 57.0,
      "protein": 5.4,
      "fat": 2.6,
      "carbs": 3.1,
      "fiber": 1.6,
      "sodium": 256.0,
      "calcium": 184.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 6.0
    }
  },
  {
    "id": "dp056",
    "code": "DP056",
    "name": "Shabu-shabu",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 88.0,
      "protein": 3.2,
      "fat": 8.0,
      "carbs": 0.8,
      "fiber": 0.9,
      "sodium": 514.0,
      "calcium": 217.0,
      "iron": 2.9,
      "vitA": 82.0,
      "vitC": 0.0
    }
  },
  {
    "id": "dp057",
    "code": "DP057",
    "name": "Semur jengkol",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 212.0,
      "protein": 6.0,
      "fat": 10.0,
      "carbs": 29.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 77.0,
      "iron": 1.0,
      "vitA": 81.0,
      "vitC": 4.0
    }
  },
  {
    "id": "dp058",
    "code": "DP058",
    "name": "Tinira ninahu nggaluku",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 33.0,
      "protein": 1.2,
      "fat": 1.3,
      "carbs": 4.1,
      "fiber": 3.1,
      "sodium": 161.0,
      "calcium": 35.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 10.0
    }
  },
  {
    "id": "dp059",
    "code": "DP059",
    "name": "Tumis bayam bersantan",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 48.0,
      "protein": 1.4,
      "fat": 4.2,
      "carbs": 2.6,
      "fiber": 0.5,
      "sodium": 0.0,
      "calcium": 129.0,
      "iron": 0.8,
      "vitA": 2988.0,
      "vitC": 22.0
    }
  },
  {
    "id": "dp060",
    "code": "DP060",
    "name": "Waluh balamak",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 45.0,
      "protein": 0.8,
      "fat": 0.9,
      "carbs": 8.1,
      "fiber": 7.9,
      "sodium": 61.0,
      "calcium": 125.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "dp061",
    "code": "DP061",
    "name": "Woku ubi",
    "category": "Sayuran & Olahan",
    "n": {
      "energy": 143.0,
      "protein": 3.1,
      "fat": 7.8,
      "carbs": 15.0,
      "fiber": 7.0,
      "sodium": 353.0,
      "calcium": 195.0,
      "iron": 2.8,
      "vitA": 0.0,
      "vitC": 15.0
    }
  },
  {
    "id": "er001",
    "code": "ER001",
    "name": "Alpukat, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 85.0,
      "protein": 0.9,
      "fat": 6.5,
      "carbs": 7.7,
      "fiber": 0.0,
      "sodium": 2.0,
      "calcium": 10.0,
      "iron": 0.9,
      "vitA": 180.0,
      "vitC": 13.0
    }
  },
  {
    "id": "er002",
    "code": "ER002",
    "name": "Anggur hutan, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 30.0,
      "protein": 0.5,
      "fat": 0.2,
      "carbs": 6.8,
      "fiber": 1.2,
      "sodium": 0.0,
      "calcium": 39.0,
      "iron": 1.1,
      "vitA": 1.0,
      "vitC": 3.0
    }
  },
  {
    "id": "er003",
    "code": "ER003",
    "name": "Apel malang, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 57.0,
      "protein": 0.5,
      "fat": 0.4,
      "carbs": 12.8,
      "fiber": 0.8,
      "sodium": 3.6,
      "calcium": 0.0,
      "iron": 0.6,
      "vitA": 2240.0,
      "vitC": 5.0
    }
  },
  {
    "id": "er004",
    "code": "ER004",
    "name": "Apel, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 58.0,
      "protein": 0.3,
      "fat": 0.4,
      "carbs": 14.9,
      "fiber": 2.6,
      "sodium": 2.0,
      "calcium": 0.0,
      "iron": 0.3,
      "vitA": 90.0,
      "vitC": 5.0
    }
  },
  {
    "id": "er005",
    "code": "ER005",
    "name": "Arbai, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 37.0,
      "protein": 0.8,
      "fat": 0.5,
      "carbs": 8.3,
      "fiber": 0.0,
      "sodium": 1.9,
      "calcium": 28.0,
      "iron": 0.8,
      "vitA": 60.0,
      "vitC": 60.0
    }
  },
  {
    "id": "er006",
    "code": "ER006",
    "name": "Belimbing, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 36.0,
      "protein": 0.4,
      "fat": 0.4,
      "carbs": 8.8,
      "fiber": 3.2,
      "sodium": 4.0,
      "calcium": 0.0,
      "iron": 1.1,
      "vitA": 170.0,
      "vitC": 35.0
    }
  },
  {
    "id": "er007",
    "code": "ER007",
    "name": "Biwah, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 51.0,
      "protein": 0.3,
      "fat": 0.1,
      "carbs": 12.1,
      "fiber": 0.7,
      "sodium": 1.0,
      "calcium": 220.0,
      "iron": 0.8,
      "vitA": 12256.0,
      "vitC": 4.0
    }
  },
  {
    "id": "er008",
    "code": "ER008",
    "name": "Buah atung, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 23.0,
      "protein": 0.8,
      "fat": 0.2,
      "carbs": 5.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 30.0,
      "iron": 4.6,
      "vitA": 0.0,
      "vitC": 38.0
    }
  },
  {
    "id": "er009",
    "code": "ER009",
    "name": "Buah kelenting, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 110.0,
      "protein": 1.4,
      "fat": 2.1,
      "carbs": 21.4,
      "fiber": 0.0,
      "sodium": 2.0,
      "calcium": 0.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 6.0
    }
  },
  {
    "id": "er010",
    "code": "ER010",
    "name": "Buah kom, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 264.0,
      "protein": 4.0,
      "fat": 1.1,
      "carbs": 59.6,
      "fiber": 9.0,
      "sodium": 0.0,
      "calcium": 306.0,
      "iron": 0.8,
      "vitA": 400.0,
      "vitC": 9.0
    }
  },
  {
    "id": "er011",
    "code": "ER011",
    "name": "Buah mentega (Bisbul), segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 39.0,
      "protein": 0.7,
      "fat": 0.2,
      "carbs": 9.7,
      "fiber": 2.0,
      "sodium": 1.0,
      "calcium": 43.0,
      "iron": 0.8,
      "vitA": 55.0,
      "vitC": 33.0
    }
  },
  {
    "id": "er012",
    "code": "ER012",
    "name": "Buah Naga Merah, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 71.0,
      "protein": 1.7,
      "fat": 3.1,
      "carbs": 9.1,
      "fiber": 3.2,
      "sodium": 10.0,
      "calcium": 13.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 1.0
    }
  },
  {
    "id": "er013",
    "code": "ER013",
    "name": "Buah Naga Putih, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 56.0,
      "protein": 0.8,
      "fat": 1.0,
      "carbs": 10.9,
      "fiber": 3.2,
      "sodium": 7.0,
      "calcium": 13.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 1.0
    }
  },
  {
    "id": "er014",
    "code": "ER014",
    "name": "Buah negri, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 55.0,
      "protein": 1.2,
      "fat": 0.1,
      "carbs": 12.2,
      "fiber": 5.2,
      "sodium": 10.0,
      "calcium": 30.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "er015",
    "code": "ER015",
    "name": "Buah nona, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 101.0,
      "protein": 1.7,
      "fat": 0.6,
      "carbs": 25.2,
      "fiber": 2.8,
      "sodium": 5.0,
      "calcium": 127.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 22.0
    }
  },
  {
    "id": "er016",
    "code": "ER016",
    "name": "Buah rotan, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 78.0,
      "protein": 0.6,
      "fat": 0.3,
      "carbs": 18.2,
      "fiber": 0.0,
      "sodium": 7.0,
      "calcium": 0.0,
      "iron": 3.4,
      "vitA": 0.0,
      "vitC": 5.0
    }
  },
  {
    "id": "er017",
    "code": "ER017",
    "name": "Buah rukam, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 113.0,
      "protein": 0.8,
      "fat": 0.3,
      "carbs": 26.8,
      "fiber": 7.7,
      "sodium": 2.0,
      "calcium": 108.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 20.0
    }
  },
  {
    "id": "er018",
    "code": "ER018",
    "name": "Buah ruruhi, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 29.0,
      "protein": 2.1,
      "fat": 0.7,
      "carbs": 3.6,
      "fiber": 2.6,
      "sodium": 36.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 10.0
    }
  },
  {
    "id": "er019",
    "code": "ER019",
    "name": "Buah tuppa, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 67.0,
      "protein": 0.4,
      "fat": 0.2,
      "carbs": 15.9,
      "fiber": 0.0,
      "sodium": 2.0,
      "calcium": 112.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 5.0
    }
  },
  {
    "id": "er020",
    "code": "ER020",
    "name": "Carica papaya, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 24.0,
      "protein": 1.9,
      "fat": 0.2,
      "carbs": 3.7,
      "fiber": 1.0,
      "sodium": 0.0,
      "calcium": 51.0,
      "iron": 1.8,
      "vitA": 1000.0,
      "vitC": 85.0
    }
  },
  {
    "id": "er021",
    "code": "ER021",
    "name": "Cempedak, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 116.0,
      "protein": 3.0,
      "fat": 0.4,
      "carbs": 28.6,
      "fiber": 3.4,
      "sodium": 25.0,
      "calcium": 120.0,
      "iron": 1.5,
      "vitA": 200.0,
      "vitC": 15.0
    }
  },
  {
    "id": "er022",
    "code": "ER022",
    "name": "Duku, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 63.0,
      "protein": 1.0,
      "fat": 0.2,
      "carbs": 16.1,
      "fiber": 4.3,
      "sodium": 2.0,
      "calcium": 18.0,
      "iron": 0.9,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "er023",
    "code": "ER023",
    "name": "Durian, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 149.0,
      "protein": 2.5,
      "fat": 3.0,
      "carbs": 21.5,
      "fiber": 3.5,
      "sodium": 1.0,
      "calcium": 8.0,
      "iron": 1.3,
      "vitA": 175.0,
      "vitC": 53.0
    }
  },
  {
    "id": "er024",
    "code": "ER024",
    "name": "Duwet, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 80.0,
      "protein": 0.5,
      "fat": 0.6,
      "carbs": 18.2,
      "fiber": 0.9,
      "sodium": 16.0,
      "calcium": 33.0,
      "iron": 1.3,
      "vitA": 0.0,
      "vitC": 130.0
    }
  },
  {
    "id": "er025",
    "code": "ER025",
    "name": "Embacang, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 98.0,
      "protein": 1.4,
      "fat": 0.2,
      "carbs": 25.4,
      "fiber": 1.9,
      "sodium": 3.0,
      "calcium": 21.0,
      "iron": 0.5,
      "vitA": 1218.0,
      "vitC": 56.0
    }
  },
  {
    "id": "er026",
    "code": "ER026",
    "name": "Encung asam, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 122.0,
      "protein": 3.5,
      "fat": 4.5,
      "carbs": 17.5,
      "fiber": 9.3,
      "sodium": 0.0,
      "calcium": 63.0,
      "iron": 3.2,
      "vitA": 2357.0,
      "vitC": 0.0
    }
  },
  {
    "id": "er027",
    "code": "ER027",
    "name": "Erbis, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 70.0,
      "protein": 0.6,
      "fat": 0.0,
      "carbs": 18.9,
      "fiber": 7.7,
      "sodium": 21.0,
      "calcium": 11.0,
      "iron": 1.1,
      "vitA": 10.0,
      "vitC": 16.0
    }
  },
  {
    "id": "er028",
    "code": "ER028",
    "name": "Gandaria masak",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 68.0,
      "protein": 0.7,
      "fat": 0.1,
      "carbs": 18.0,
      "fiber": 2.2,
      "sodium": 3.0,
      "calcium": 0.0,
      "iron": 1.0,
      "vitA": 1020.0,
      "vitC": 11.0
    }
  },
  {
    "id": "er029",
    "code": "ER029",
    "name": "Gatep, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 191.0,
      "protein": 4.5,
      "fat": 1.5,
      "carbs": 39.7,
      "fiber": 13.4,
      "sodium": 17.0,
      "calcium": 186.0,
      "iron": 3.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "er030",
    "code": "ER030",
    "name": "Jambu air, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 46.0,
      "protein": 0.6,
      "fat": 0.2,
      "carbs": 11.8,
      "fiber": 2.1,
      "sodium": 11.0,
      "calcium": 0.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 5.0
    }
  },
  {
    "id": "er031",
    "code": "ER031",
    "name": "Jambu biji",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 64.0,
      "protein": 0.9,
      "fat": 0.3,
      "carbs": 12.2,
      "fiber": 2.4,
      "sodium": 10.0,
      "calcium": 14.0,
      "iron": 1.1,
      "vitA": 25.0,
      "vitC": 87.0
    }
  },
  {
    "id": "er032",
    "code": "ER032",
    "name": "Jambu bj putih tdk brbj",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 61.0,
      "protein": 0.9,
      "fat": 0.3,
      "carbs": 15.4,
      "fiber": 4.5,
      "sodium": 20.0,
      "calcium": 31.0,
      "iron": 0.2,
      "vitA": 18.0,
      "vitC": 11.0
    }
  },
  {
    "id": "er033",
    "code": "ER033",
    "name": "Jambu bol, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 49.0,
      "protein": 2.3,
      "fat": 0.2,
      "carbs": 9.6,
      "fiber": 3.5,
      "sodium": 1.0,
      "calcium": 0.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 22.0
    }
  },
  {
    "id": "er034",
    "code": "ER034",
    "name": "Jambu monyet, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 49.0,
      "protein": 0.7,
      "fat": 0.6,
      "carbs": 15.8,
      "fiber": 1.2,
      "sodium": 12.0,
      "calcium": 0.0,
      "iron": 0.5,
      "vitA": 25.0,
      "vitC": 19.0
    }
  },
  {
    "id": "er035",
    "code": "ER035",
    "name": "Jeruk bali, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 48.0,
      "protein": 0.6,
      "fat": 0.2,
      "carbs": 12.4,
      "fiber": 0.8,
      "sodium": 21.0,
      "calcium": 23.0,
      "iron": 0.5,
      "vitA": 20.0,
      "vitC": 43.0
    }
  },
  {
    "id": "er036",
    "code": "ER036",
    "name": "Jeruk banjar, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 61.0,
      "protein": 0.8,
      "fat": 0.2,
      "carbs": 14.1,
      "fiber": 5.4,
      "sodium": 3.0,
      "calcium": 0.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 31.0
    }
  },
  {
    "id": "er037",
    "code": "ER037",
    "name": "Jeruk garut-keprok",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 44.0,
      "protein": 0.8,
      "fat": 0.3,
      "carbs": 10.9,
      "fiber": 1.6,
      "sodium": 5.0,
      "calcium": 33.0,
      "iron": 0.4,
      "vitA": 420.0,
      "vitC": 31.0
    }
  },
  {
    "id": "er038",
    "code": "ER038",
    "name": "Jeruk Kalamansi, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 39.0,
      "protein": 0.3,
      "fat": 0.3,
      "carbs": 8.9,
      "fiber": 2.3,
      "sodium": 3.0,
      "calcium": 42.0,
      "iron": 0.5,
      "vitA": 0.3,
      "vitC": 30.0
    }
  },
  {
    "id": "er039",
    "code": "ER039",
    "name": "Jeruk manis, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 45.0,
      "protein": 0.9,
      "fat": 0.2,
      "carbs": 11.2,
      "fiber": 1.4,
      "sodium": 4.0,
      "calcium": 33.0,
      "iron": 0.4,
      "vitA": 190.0,
      "vitC": 49.0
    }
  },
  {
    "id": "er040",
    "code": "ER040",
    "name": "Jeruk nipis, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 44.0,
      "protein": 0.5,
      "fat": 0.2,
      "carbs": 10.0,
      "fiber": 0.4,
      "sodium": 3.0,
      "calcium": 18.0,
      "iron": 0.2,
      "vitA": 4.0,
      "vitC": 20.0
    }
  },
  {
    "id": "er041",
    "code": "ER041",
    "name": "Jeruk ragi, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 49.0,
      "protein": 0.7,
      "fat": 0.2,
      "carbs": 11.1,
      "fiber": 0.5,
      "sodium": 4.0,
      "calcium": 36.0,
      "iron": 0.7,
      "vitA": 68.0,
      "vitC": 30.0
    }
  },
  {
    "id": "er042",
    "code": "ER042",
    "name": "Kawista, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 120.0,
      "protein": 3.5,
      "fat": 2.5,
      "carbs": 20.8,
      "fiber": 4.6,
      "sodium": 9.0,
      "calcium": 190.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 3.0
    }
  },
  {
    "id": "er043",
    "code": "ER043",
    "name": "Kedondong masak, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 46.0,
      "protein": 1.0,
      "fat": 0.1,
      "carbs": 10.3,
      "fiber": 2.6,
      "sodium": 2.0,
      "calcium": 15.0,
      "iron": 2.8,
      "vitA": 233.0,
      "vitC": 30.0
    }
  },
  {
    "id": "er044",
    "code": "ER044",
    "name": "Kedondong, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 47.0,
      "protein": 0.5,
      "fat": 0.2,
      "carbs": 10.4,
      "fiber": 2.7,
      "sodium": 2.0,
      "calcium": 0.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 32.0
    }
  },
  {
    "id": "er045",
    "code": "ER045",
    "name": "Kelapa hutan, kering",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 623.0,
      "protein": 2.0,
      "fat": 52.1,
      "carbs": 36.5,
      "fiber": 15.3,
      "sodium": 100.0,
      "calcium": 120.0,
      "iron": 3.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "er046",
    "code": "ER046",
    "name": "Kelapa muda, daging, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 68.0,
      "protein": 1.0,
      "fat": 0.9,
      "carbs": 14.0,
      "fiber": 0.0,
      "sodium": 17.9,
      "calcium": 0.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "er047",
    "code": "ER047",
    "name": "Kemang, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 48.0,
      "protein": 1.0,
      "fat": 0.2,
      "carbs": 11.9,
      "fiber": 1.7,
      "sodium": 2.0,
      "calcium": 10.0,
      "iron": 0.1,
      "vitA": 6.0,
      "vitC": 58.0
    }
  },
  {
    "id": "er048",
    "code": "ER048",
    "name": "Kesemek, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 78.0,
      "protein": 0.8,
      "fat": 0.4,
      "carbs": 20.0,
      "fiber": 0.6,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.3,
      "vitA": 2710.0,
      "vitC": 11.0
    }
  },
  {
    "id": "er049",
    "code": "ER049",
    "name": "Kokosan, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 86.0,
      "protein": 1.6,
      "fat": 0.2,
      "carbs": 13.0,
      "fiber": 1.4,
      "sodium": 2.0,
      "calcium": 22.0,
      "iron": 1.3,
      "vitA": 20.0,
      "vitC": 3.0
    }
  },
  {
    "id": "er050",
    "code": "ER050",
    "name": "Kranji, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 315.0,
      "protein": 2.1,
      "fat": 1.4,
      "carbs": 73.5,
      "fiber": 3.6,
      "sodium": 0.0,
      "calcium": 160.0,
      "iron": 3.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "er051",
    "code": "ER051",
    "name": "Langsat, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 56.0,
      "protein": 0.9,
      "fat": 0.2,
      "carbs": 14.3,
      "fiber": 1.4,
      "sodium": 1.0,
      "calcium": 17.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "er052",
    "code": "ER052",
    "name": "Lemon, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 34.0,
      "protein": 0.5,
      "fat": 0.8,
      "carbs": 6.2,
      "fiber": 0.1,
      "sodium": 31.0,
      "calcium": 23.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 50.0
    }
  },
  {
    "id": "er053",
    "code": "ER053",
    "name": "Lontar, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 27.0,
      "protein": 0.4,
      "fat": 0.2,
      "carbs": 6.0,
      "fiber": 1.6,
      "sodium": 0.0,
      "calcium": 91.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "er054",
    "code": "ER054",
    "name": "Mangga, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 52.0,
      "protein": 0.7,
      "fat": 0.0,
      "carbs": 12.3,
      "fiber": 1.6,
      "sodium": 3.0,
      "calcium": 20.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 12.0
    }
  },
  {
    "id": "er055",
    "code": "ER055",
    "name": "Mangga benggala, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 63.0,
      "protein": 2.4,
      "fat": 0.4,
      "carbs": 12.4,
      "fiber": 5.8,
      "sodium": 3.0,
      "calcium": 0.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 43.0
    }
  },
  {
    "id": "er056",
    "code": "ER056",
    "name": "Mangga gedung, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 44.0,
      "protein": 0.7,
      "fat": 0.2,
      "carbs": 11.2,
      "fiber": 1.6,
      "sodium": 2.0,
      "calcium": 13.0,
      "iron": 0.2,
      "vitA": 16400.0,
      "vitC": 30.0
    }
  },
  {
    "id": "er057",
    "code": "ER057",
    "name": "Mangga golek, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 63.0,
      "protein": 0.5,
      "fat": 0.2,
      "carbs": 16.7,
      "fiber": 2.3,
      "sodium": 3.0,
      "calcium": 14.0,
      "iron": 0.7,
      "vitA": 3715.0,
      "vitC": 65.0
    }
  },
  {
    "id": "er058",
    "code": "ER058",
    "name": "Mangga harumanis, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 46.0,
      "protein": 0.4,
      "fat": 0.2,
      "carbs": 11.9,
      "fiber": 1.7,
      "sodium": 2.0,
      "calcium": 15.0,
      "iron": 0.2,
      "vitA": 1200.0,
      "vitC": 6.0
    }
  },
  {
    "id": "er059",
    "code": "ER059",
    "name": "Mangga indramayu, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 72.0,
      "protein": 0.8,
      "fat": 0.2,
      "carbs": 18.7,
      "fiber": 2.5,
      "sodium": 3.0,
      "calcium": 13.0,
      "iron": 1.9,
      "vitA": 2900.0,
      "vitC": 16.0
    }
  },
  {
    "id": "er060",
    "code": "ER060",
    "name": "Mangga kopek, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 56.0,
      "protein": 0.4,
      "fat": 0.2,
      "carbs": 14.6,
      "fiber": 2.0,
      "sodium": 2.0,
      "calcium": 16.0,
      "iron": 1.7,
      "vitA": 6520.0,
      "vitC": 27.0
    }
  },
  {
    "id": "er061",
    "code": "ER061",
    "name": "Mangga kwini, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 86.0,
      "protein": 0.7,
      "fat": 0.5,
      "carbs": 19.8,
      "fiber": 6.5,
      "sodium": 1.0,
      "calcium": 11.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 18.0
    }
  },
  {
    "id": "er062",
    "code": "ER062",
    "name": "Mangga manalagi, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 133.0,
      "protein": 1.0,
      "fat": 0.1,
      "carbs": 32.1,
      "fiber": 11.8,
      "sodium": 70.0,
      "calcium": 20.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 61.0
    }
  },
  {
    "id": "er063",
    "code": "ER063",
    "name": "Mangga muda, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 59.0,
      "protein": 0.5,
      "fat": 0.4,
      "carbs": 15.1,
      "fiber": 0.0,
      "sodium": 2.0,
      "calcium": 12.0,
      "iron": 0.4,
      "vitA": 85.0,
      "vitC": 2.0
    }
  },
  {
    "id": "er064",
    "code": "ER064",
    "name": "Manggis, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 63.0,
      "protein": 0.6,
      "fat": 0.6,
      "carbs": 15.6,
      "fiber": 1.5,
      "sodium": 10.0,
      "calcium": 0.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 5.0
    }
  },
  {
    "id": "er065",
    "code": "ER065",
    "name": "Markisa, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 144.0,
      "protein": 3.5,
      "fat": 1.2,
      "carbs": 29.8,
      "fiber": 11.4,
      "sodium": 37.0,
      "calcium": 27.0,
      "iron": 1.4,
      "vitA": 691.0,
      "vitC": 10.0
    }
  },
  {
    "id": "er066",
    "code": "ER066",
    "name": "Matoa, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 90.0,
      "protein": 1.2,
      "fat": 0.1,
      "carbs": 21.1,
      "fiber": 0.5,
      "sodium": 10.0,
      "calcium": 20.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 54.0
    }
  },
  {
    "id": "er067",
    "code": "ER067",
    "name": "Melon, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 37.0,
      "protein": 0.6,
      "fat": 0.4,
      "carbs": 7.8,
      "fiber": 1.0,
      "sodium": 27.0,
      "calcium": 12.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "er068",
    "code": "ER068",
    "name": "Menteng, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 65.0,
      "protein": 1.7,
      "fat": 0.3,
      "carbs": 16.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 13.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "er069",
    "code": "ER069",
    "name": "Nanas palembang, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 58.0,
      "protein": 0.7,
      "fat": 0.2,
      "carbs": 13.3,
      "fiber": 1.6,
      "sodium": 7.0,
      "calcium": 29.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 11.0
    }
  },
  {
    "id": "er070",
    "code": "ER070",
    "name": "Nanas, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 40.0,
      "protein": 0.6,
      "fat": 0.3,
      "carbs": 9.9,
      "fiber": 0.6,
      "sodium": 18.0,
      "calcium": 22.0,
      "iron": 0.9,
      "vitA": 90.0,
      "vitC": 22.0
    }
  },
  {
    "id": "er071",
    "code": "ER071",
    "name": "Nangka masak pohon, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 106.0,
      "protein": 1.2,
      "fat": 0.3,
      "carbs": 27.6,
      "fiber": 3.7,
      "sodium": 2.0,
      "calcium": 20.0,
      "iron": 0.9,
      "vitA": 330.0,
      "vitC": 7.0
    }
  },
  {
    "id": "er072",
    "code": "ER072",
    "name": "Pala, daging, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 42.0,
      "protein": 0.3,
      "fat": 0.2,
      "carbs": 10.9,
      "fiber": 0.5,
      "sodium": 0.0,
      "calcium": 32.0,
      "iron": 1.5,
      "vitA": 29.0,
      "vitC": 22.0
    }
  },
  {
    "id": "er073",
    "code": "ER073",
    "name": "Pepaya, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 46.0,
      "protein": 0.5,
      "fat": 0.1,
      "carbs": 12.2,
      "fiber": 1.6,
      "sodium": 4.0,
      "calcium": 23.0,
      "iron": 1.7,
      "vitA": 365.0,
      "vitC": 78.0
    }
  },
  {
    "id": "er074",
    "code": "ER074",
    "name": "Pisang ambon, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 108.0,
      "protein": 1.0,
      "fat": 0.8,
      "carbs": 24.3,
      "fiber": 1.9,
      "sodium": 10.0,
      "calcium": 120.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "er075",
    "code": "ER075",
    "name": "Pisang angleng (pisang ampyang), segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 68.0,
      "protein": 1.3,
      "fat": 0.2,
      "carbs": 17.2,
      "fiber": 0.8,
      "sodium": 23.0,
      "calcium": 110.0,
      "iron": 0.6,
      "vitA": 76.0,
      "vitC": 6.0
    }
  },
  {
    "id": "er076",
    "code": "ER076",
    "name": "Pisang ayam, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 120.0,
      "protein": 1.1,
      "fat": 0.2,
      "carbs": 26.8,
      "fiber": 4.1,
      "sodium": 6.0,
      "calcium": 20.0,
      "iron": 0.4,
      "vitA": 0.0,
      "vitC": 26.0
    }
  },
  {
    "id": "er077",
    "code": "ER077",
    "name": "Pisang gapi, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 131.0,
      "protein": 1.6,
      "fat": 0.1,
      "carbs": 31.1,
      "fiber": 11.7,
      "sodium": 6.0,
      "calcium": 158.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 13.0
    }
  },
  {
    "id": "er078",
    "code": "ER078",
    "name": "Pisang goroho, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 119.0,
      "protein": 1.5,
      "fat": 0.2,
      "carbs": 27.9,
      "fiber": 4.6,
      "sodium": 36.0,
      "calcium": 1.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 10.0
    }
  },
  {
    "id": "er079",
    "code": "ER079",
    "name": "Pisang hijau, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 121.0,
      "protein": 1.0,
      "fat": 0.1,
      "carbs": 28.9,
      "fiber": 0.4,
      "sodium": 31.0,
      "calcium": 0.0,
      "iron": 0.9,
      "vitA": 1000.0,
      "vitC": 13.0
    }
  },
  {
    "id": "er080",
    "code": "ER080",
    "name": "Pisang kayu, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 100.0,
      "protein": 1.4,
      "fat": 0.5,
      "carbs": 23.6,
      "fiber": 2.6,
      "sodium": 1.0,
      "calcium": 15.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 11.0
    }
  },
  {
    "id": "er081",
    "code": "ER081",
    "name": "Pisang kepok, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 109.0,
      "protein": 0.8,
      "fat": 0.5,
      "carbs": 26.3,
      "fiber": 5.7,
      "sodium": 10.0,
      "calcium": 110.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "er082",
    "code": "ER082",
    "name": "Pisang ketip, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 145.0,
      "protein": 1.1,
      "fat": 0.3,
      "carbs": 34.5,
      "fiber": 6.6,
      "sodium": 4.0,
      "calcium": 0.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 95.0
    }
  },
  {
    "id": "er083",
    "code": "ER083",
    "name": "Pisang kidang, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 96.0,
      "protein": 1.0,
      "fat": 0.2,
      "carbs": 22.5,
      "fiber": 0.6,
      "sodium": 6.0,
      "calcium": 87.0,
      "iron": 0.6,
      "vitA": 58.0,
      "vitC": 2.0
    }
  },
  {
    "id": "er084",
    "code": "ER084",
    "name": "Pisang lampung, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 99.0,
      "protein": 1.3,
      "fat": 0.2,
      "carbs": 25.6,
      "fiber": 4.3,
      "sodium": 28.0,
      "calcium": 10.0,
      "iron": 0.9,
      "vitA": 618.0,
      "vitC": 4.0
    }
  },
  {
    "id": "er085",
    "code": "ER085",
    "name": "Pisang mas bali ampenan, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 92.0,
      "protein": 1.4,
      "fat": 0.2,
      "carbs": 21.0,
      "fiber": 3.7,
      "sodium": 32.0,
      "calcium": 0.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 11.0
    }
  },
  {
    "id": "er086",
    "code": "ER086",
    "name": "Pisang mas bali kopang, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 127.0,
      "protein": 1.4,
      "fat": 0.2,
      "carbs": 31.8,
      "fiber": 3.7,
      "sodium": 43.0,
      "calcium": 10.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 17.0
    }
  },
  {
    "id": "er087",
    "code": "ER087",
    "name": "Pisang mas, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 127.0,
      "protein": 1.4,
      "fat": 0.2,
      "carbs": 33.6,
      "fiber": 1.4,
      "sodium": 42.0,
      "calcium": 0.0,
      "iron": 0.8,
      "vitA": 79.0,
      "vitC": 2.0
    }
  },
  {
    "id": "er088",
    "code": "ER088",
    "name": "Pisang raja sereh, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 108.0,
      "protein": 1.3,
      "fat": 0.3,
      "carbs": 28.2,
      "fiber": 0.7,
      "sodium": 31.0,
      "calcium": 116.0,
      "iron": 0.1,
      "vitA": 480.0,
      "vitC": 2.0
    }
  },
  {
    "id": "er089",
    "code": "ER089",
    "name": "Pisang raja, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 120.0,
      "protein": 1.2,
      "fat": 0.2,
      "carbs": 31.8,
      "fiber": 5.3,
      "sodium": 35.0,
      "calcium": 110.0,
      "iron": 0.8,
      "vitA": 950.0,
      "vitC": 10.0
    }
  },
  {
    "id": "er090",
    "code": "ER090",
    "name": "Pisang rotan, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 98.0,
      "protein": 1.3,
      "fat": 1.2,
      "carbs": 20.5,
      "fiber": 1.0,
      "sodium": 24.0,
      "calcium": 17.0,
      "iron": 1.1,
      "vitA": 697.0,
      "vitC": 2.0
    }
  },
  {
    "id": "er091",
    "code": "ER091",
    "name": "Pisang talas, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 113.0,
      "protein": 1.2,
      "fat": 0.2,
      "carbs": 26.7,
      "fiber": 4.4,
      "sodium": 29.0,
      "calcium": 22.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "er092",
    "code": "ER092",
    "name": "Pisang tujuh bulan",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 94.0,
      "protein": 0.6,
      "fat": 0.2,
      "carbs": 22.5,
      "fiber": 3.7,
      "sodium": 0.0,
      "calcium": 50.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 6.0
    }
  },
  {
    "id": "er093",
    "code": "ER093",
    "name": "Pisang ua, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 128.0,
      "protein": 0.8,
      "fat": 0.5,
      "carbs": 30.2,
      "fiber": 8.1,
      "sodium": 33.0,
      "calcium": 12.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "er094",
    "code": "ER094",
    "name": "Pisang uli, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 134.0,
      "protein": 1.1,
      "fat": 0.5,
      "carbs": 35.5,
      "fiber": 1.4,
      "sodium": 39.0,
      "calcium": 31.0,
      "iron": 0.9,
      "vitA": 113.0,
      "vitC": 3.0
    }
  },
  {
    "id": "er095",
    "code": "ER095",
    "name": "Purut, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 76.0,
      "protein": 4.1,
      "fat": 1.1,
      "carbs": 15.2,
      "fiber": 1.7,
      "sodium": 10.0,
      "calcium": 30.0,
      "iron": 0.6,
      "vitA": 93.0,
      "vitC": 0.0
    }
  },
  {
    "id": "er096",
    "code": "ER096",
    "name": "Rambutan binjai, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 76.0,
      "protein": 0.5,
      "fat": 0.2,
      "carbs": 18.0,
      "fiber": 3.8,
      "sodium": 22.0,
      "calcium": 15.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 13.0
    }
  },
  {
    "id": "er097",
    "code": "ER097",
    "name": "Rambutan, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 69.0,
      "protein": 0.9,
      "fat": 0.1,
      "carbs": 18.1,
      "fiber": 0.8,
      "sodium": 16.0,
      "calcium": 16.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 58.0
    }
  },
  {
    "id": "er098",
    "code": "ER098",
    "name": "Salak bali, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 57.0,
      "protein": 0.5,
      "fat": 0.1,
      "carbs": 13.6,
      "fiber": 1.3,
      "sodium": 0.0,
      "calcium": 94.0,
      "iron": 2.1,
      "vitA": 37.0,
      "vitC": 0.0
    }
  },
  {
    "id": "er099",
    "code": "ER099",
    "name": "Salak medan, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 55.0,
      "protein": 0.4,
      "fat": 0.2,
      "carbs": 12.8,
      "fiber": 3.2,
      "sodium": 39.0,
      "calcium": 0.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 58.0
    }
  },
  {
    "id": "er100",
    "code": "ER100",
    "name": "Salak pondoh, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 87.0,
      "protein": 0.8,
      "fat": 0.4,
      "carbs": 20.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 38.0,
      "iron": 3.9,
      "vitA": 40.0,
      "vitC": 8.0
    }
  },
  {
    "id": "er101",
    "code": "ER101",
    "name": "Salak, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 77.0,
      "protein": 0.4,
      "fat": 0.0,
      "carbs": 20.9,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 28.0,
      "iron": 4.2,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "er102",
    "code": "ER102",
    "name": "Sawo duren, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 64.0,
      "protein": 1.0,
      "fat": 3.1,
      "carbs": 8.0,
      "fiber": 0.8,
      "sodium": 13.0,
      "calcium": 18.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 1.0
    }
  },
  {
    "id": "er103",
    "code": "ER103",
    "name": "Sawo kecik, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 111.0,
      "protein": 0.9,
      "fat": 2.3,
      "carbs": 21.6,
      "fiber": 1.0,
      "sodium": 28.0,
      "calcium": 20.0,
      "iron": 0.7,
      "vitA": 12.0,
      "vitC": 19.0
    }
  },
  {
    "id": "er104",
    "code": "ER104",
    "name": "Sawo Manila, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 92.0,
      "protein": 0.5,
      "fat": 1.1,
      "carbs": 22.4,
      "fiber": 9.5,
      "sodium": 26.0,
      "calcium": 25.0,
      "iron": 1.0,
      "vitA": 60.0,
      "vitC": 21.0
    }
  },
  {
    "id": "er105",
    "code": "ER105",
    "name": "Semangka, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 28.0,
      "protein": 0.5,
      "fat": 0.2,
      "carbs": 6.9,
      "fiber": 0.4,
      "sodium": 7.0,
      "calcium": 0.0,
      "iron": 0.2,
      "vitA": 590.0,
      "vitC": 6.0
    }
  },
  {
    "id": "er106",
    "code": "ER106",
    "name": "Sirsak, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 65.0,
      "protein": 1.0,
      "fat": 0.3,
      "carbs": 16.3,
      "fiber": 3.2,
      "sodium": 2.0,
      "calcium": 14.0,
      "iron": 0.6,
      "vitA": 10.0,
      "vitC": 20.0
    }
  },
  {
    "id": "er107",
    "code": "ER107",
    "name": "Sowa, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 48.0,
      "protein": 1.6,
      "fat": 0.6,
      "carbs": 9.1,
      "fiber": 4.5,
      "sodium": 9.0,
      "calcium": 50.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "er108",
    "code": "ER108",
    "name": "Srikaya, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 63.0,
      "protein": 1.1,
      "fat": 0.5,
      "carbs": 13.9,
      "fiber": 2.1,
      "sodium": 0.0,
      "calcium": 127.0,
      "iron": 2.7,
      "vitA": 31.0,
      "vitC": 28.0
    }
  },
  {
    "id": "er109",
    "code": "ER109",
    "name": "Sukun muda, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 119.0,
      "protein": 1.4,
      "fat": 0.2,
      "carbs": 28.1,
      "fiber": 1.4,
      "sodium": 24.0,
      "calcium": 124.0,
      "iron": 1.4,
      "vitA": 4896.0,
      "vitC": 52.0
    }
  },
  {
    "id": "er110",
    "code": "ER110",
    "name": "Sukun tua, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 126.0,
      "protein": 1.6,
      "fat": 0.2,
      "carbs": 24.5,
      "fiber": 1.5,
      "sodium": 25.0,
      "calcium": 137.0,
      "iron": 1.6,
      "vitA": 2000.0,
      "vitC": 58.0
    }
  },
  {
    "id": "er111",
    "code": "ER111",
    "name": "Vigus, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 44.0,
      "protein": 2.4,
      "fat": 0.1,
      "carbs": 8.3,
      "fiber": 0.0,
      "sodium": 2.0,
      "calcium": 30.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 43.0
    }
  },
  {
    "id": "er112",
    "code": "ER112",
    "name": "Wani, segar",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 74.0,
      "protein": 0.8,
      "fat": 0.3,
      "carbs": 17.1,
      "fiber": 3.1,
      "sodium": 0.0,
      "calcium": 66.0,
      "iron": 1.2,
      "vitA": 32.0,
      "vitC": 80.0
    }
  },
  {
    "id": "ep001",
    "code": "EP001",
    "name": "Barongko",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 159.0,
      "protein": 3.1,
      "fat": 5.8,
      "carbs": 23.5,
      "fiber": 0.0,
      "sodium": 46.0,
      "calcium": 35.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ep002",
    "code": "EP002",
    "name": "Dodol nanas",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 338.0,
      "protein": 1.5,
      "fat": 1.2,
      "carbs": 80.3,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 8.0
    }
  },
  {
    "id": "ep003",
    "code": "EP003",
    "name": "Getuk pisang",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 144.0,
      "protein": 1.1,
      "fat": 0.4,
      "carbs": 34.1,
      "fiber": 0.4,
      "sodium": 0.0,
      "calcium": 48.0,
      "iron": 1.0,
      "vitA": 1240.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ep004",
    "code": "EP004",
    "name": "Keripik lampung",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 485.0,
      "protein": 1.7,
      "fat": 22.2,
      "carbs": 69.7,
      "fiber": 0.6,
      "sodium": 0.0,
      "calcium": 43.0,
      "iron": 0.8,
      "vitA": 1464.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ep005",
    "code": "EP005",
    "name": "Ledre pisang",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 405.0,
      "protein": 4.8,
      "fat": 5.1,
      "carbs": 84.9,
      "fiber": 0.4,
      "sodium": 0.0,
      "calcium": 59.0,
      "iron": 2.6,
      "vitA": 7330.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ep006",
    "code": "EP006",
    "name": "Lempog durian",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 320.0,
      "protein": 3.5,
      "fat": 5.7,
      "carbs": 63.7,
      "fiber": 4.9,
      "sodium": 0.0,
      "calcium": 190.0,
      "iron": 2.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ep007",
    "code": "EP007",
    "name": "Loka anjoro",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 163.0,
      "protein": 1.1,
      "fat": 4.3,
      "carbs": 30.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ep008",
    "code": "EP008",
    "name": "Rica-rica taipa",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 49.0,
      "protein": 1.6,
      "fat": 0.3,
      "carbs": 10.0,
      "fiber": 0.0,
      "sodium": 426.0,
      "calcium": 11.0,
      "iron": 3.0,
      "vitA": 0.0,
      "vitC": 15.0
    }
  },
  {
    "id": "ep009",
    "code": "EP009",
    "name": "Rujak aceh",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 82.0,
      "protein": 0.4,
      "fat": 0.3,
      "carbs": 19.7,
      "fiber": 2.4,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 42.0
    }
  },
  {
    "id": "ep010",
    "code": "EP010",
    "name": "Sale kesemek",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 296.0,
      "protein": 1.1,
      "fat": 0.6,
      "carbs": 71.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 3.0
    }
  },
  {
    "id": "ep011",
    "code": "EP011",
    "name": "Sale pisang siam",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 281.0,
      "protein": 2.4,
      "fat": 0.7,
      "carbs": 66.1,
      "fiber": 1.0,
      "sodium": 0.0,
      "calcium": 241.0,
      "iron": 1.2,
      "vitA": 272.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ep012",
    "code": "EP012",
    "name": "Sale pisang, cilacap",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 295.0,
      "protein": 2.3,
      "fat": 2.1,
      "carbs": 66.9,
      "fiber": 1.3,
      "sodium": 0.0,
      "calcium": 47.0,
      "iron": 2.8,
      "vitA": 296.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ep013",
    "code": "EP013",
    "name": "Sanggara belanda",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 242.0,
      "protein": 6.4,
      "fat": 7.1,
      "carbs": 38.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "ep014",
    "code": "EP014",
    "name": "Tepung Pisang",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 338.0,
      "protein": 2.9,
      "fat": 0.4,
      "carbs": 80.6,
      "fiber": 5.3,
      "sodium": 18.0,
      "calcium": 23.0,
      "iron": 4.0,
      "vitA": 1.0,
      "vitC": 2.0
    }
  },
  {
    "id": "ep015",
    "code": "EP015",
    "name": "Tepung Sukun",
    "category": "Buah-buahan & Olahan",
    "n": {
      "energy": 353.0,
      "protein": 2.9,
      "fat": 0.5,
      "carbs": 84.4,
      "fiber": 3.7,
      "sodium": 9.0,
      "calcium": 100.0,
      "iron": 4.6,
      "vitA": 0.0,
      "vitC": 3.0
    }
  },
  {
    "id": "fr001",
    "code": "FR001",
    "name": "Anak sapi, daging, gemuk, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 184.0,
      "protein": 18.8,
      "fat": 14.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 118.0,
      "calcium": 10.0,
      "iron": 2.2,
      "vitA": 12.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr002",
    "code": "FR002",
    "name": "Anak sapi, daging, kurus, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 174.0,
      "protein": 19.6,
      "fat": 10.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 96.0,
      "calcium": 11.0,
      "iron": 2.9,
      "vitA": 6.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr003",
    "code": "FR003",
    "name": "Anak sapi, daging, sedang, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 190.0,
      "protein": 19.1,
      "fat": 12.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 99.0,
      "calcium": 11.0,
      "iron": 2.9,
      "vitA": 12.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr004",
    "code": "FR004",
    "name": "Angsa, daging, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 349.0,
      "protein": 16.4,
      "fat": 31.5,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 71.0,
      "calcium": 115.0,
      "iron": 1.8,
      "vitA": 273.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr005",
    "code": "FR005",
    "name": "Ayam, daging, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 298.0,
      "protein": 18.2,
      "fat": 25.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 109.0,
      "calcium": 14.0,
      "iron": 1.5,
      "vitA": 245.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr006",
    "code": "FR006",
    "name": "Ayam, dideh/darah, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 75.0,
      "protein": 13.8,
      "fat": 1.9,
      "carbs": 0.7,
      "fiber": 0.0,
      "sodium": 337.0,
      "calcium": 15.0,
      "iron": 1.3,
      "vitA": 15.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr007",
    "code": "FR007",
    "name": "Ayam, hati, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 261.0,
      "protein": 27.4,
      "fat": 16.1,
      "carbs": 1.6,
      "fiber": 0.0,
      "sodium": 1068.0,
      "calcium": 118.0,
      "iron": 15.8,
      "vitA": 4957.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr008",
    "code": "FR008",
    "name": "Babi, daging, gemuk,segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 453.0,
      "protein": 11.9,
      "fat": 45.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 112.0,
      "calcium": 0.0,
      "iron": 1.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr009",
    "code": "FR009",
    "name": "Babi, daging, kurus, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 371.0,
      "protein": 14.1,
      "fat": 35.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 97.0,
      "calcium": 0.0,
      "iron": 2.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr010",
    "code": "FR010",
    "name": "Babi, ginjal, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 110.0,
      "protein": 16.3,
      "fat": 4.6,
      "carbs": 0.8,
      "fiber": 0.0,
      "sodium": 139.0,
      "calcium": 11.0,
      "iron": 8.0,
      "vitA": 39.0,
      "vitC": 13.0
    }
  },
  {
    "id": "fr011",
    "code": "FR011",
    "name": "Babi, hati, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 129.0,
      "protein": 19.7,
      "fat": 4.8,
      "carbs": 1.7,
      "fiber": 0.0,
      "sodium": 110.0,
      "calcium": 10.0,
      "iron": 18.0,
      "vitA": 4303.0,
      "vitC": 23.0
    }
  },
  {
    "id": "fr012",
    "code": "FR012",
    "name": "Bebek (itik), daging, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 321.0,
      "protein": 16.0,
      "fat": 28.6,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 54.0,
      "calcium": 15.0,
      "iron": 1.8,
      "vitA": 273.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr013",
    "code": "FR013",
    "name": "Bebek alabio, daging, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 303.0,
      "protein": 11.3,
      "fat": 27.0,
      "carbs": 3.7,
      "fiber": 0.0,
      "sodium": 50.0,
      "calcium": 120.0,
      "iron": 4.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr014",
    "code": "FR014",
    "name": "Belibis, daging, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 131.0,
      "protein": 20.2,
      "fat": 4.3,
      "carbs": 2.8,
      "fiber": 0.0,
      "sodium": 46.0,
      "calcium": 0.0,
      "iron": 9.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr015",
    "code": "FR015",
    "name": "Burung, sarang, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 281.0,
      "protein": 37.5,
      "fat": 0.3,
      "carbs": 32.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 485.0,
      "iron": 3.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr016",
    "code": "FR016",
    "name": "Domba, daging, gemuk, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 317.0,
      "protein": 15.7,
      "fat": 27.7,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 64.0,
      "calcium": 0.0,
      "iron": 2.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr017",
    "code": "FR017",
    "name": "Domba, daging, kurus, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 202.0,
      "protein": 17.1,
      "fat": 14.8,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 90.0,
      "calcium": 10.0,
      "iron": 2.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr018",
    "code": "FR018",
    "name": "Domba, ginjal, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 100.0,
      "protein": 16.6,
      "fat": 3.3,
      "carbs": 1.0,
      "fiber": 0.0,
      "sodium": 155.0,
      "calcium": 13.0,
      "iron": 9.2,
      "vitA": 348.0,
      "vitC": 13.0
    }
  },
  {
    "id": "fr019",
    "code": "FR019",
    "name": "Kambing, daging, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 149.0,
      "protein": 16.6,
      "fat": 9.2,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 96.0,
      "calcium": 11.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr020",
    "code": "FR020",
    "name": "Kelinci, daging, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 142.0,
      "protein": 16.9,
      "fat": 7.8,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 49.0,
      "calcium": 1.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr021",
    "code": "FR021",
    "name": "Kerbau, daging, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 79.0,
      "protein": 18.7,
      "fat": 0.5,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 91.0,
      "calcium": 14.0,
      "iron": 3.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr022",
    "code": "FR022",
    "name": "Kuda, daging, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 113.0,
      "protein": 18.1,
      "fat": 4.1,
      "carbs": 0.9,
      "fiber": 0.0,
      "sodium": 46.0,
      "calcium": 10.0,
      "iron": 2.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr023",
    "code": "FR023",
    "name": "Sapi, babat, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 108.0,
      "protein": 17.6,
      "fat": 4.2,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 147.0,
      "calcium": 12.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr024",
    "code": "FR024",
    "name": "Sapi, daging, gemuk, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 273.0,
      "protein": 17.5,
      "fat": 22.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 93.0,
      "calcium": 10.0,
      "iron": 2.6,
      "vitA": 12.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr025",
    "code": "FR025",
    "name": "Sapi, daging, kurus, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 174.0,
      "protein": 19.6,
      "fat": 10.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 83.0,
      "calcium": 11.0,
      "iron": 2.9,
      "vitA": 6.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr026",
    "code": "FR026",
    "name": "Sapi, daging, lemak sedang, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 201.0,
      "protein": 18.8,
      "fat": 14.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 105.0,
      "calcium": 11.0,
      "iron": 2.8,
      "vitA": 9.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr027",
    "code": "FR027",
    "name": "Sapi, daleman, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 183.0,
      "protein": 12.0,
      "fat": 14.4,
      "carbs": 1.4,
      "fiber": 0.0,
      "sodium": 277.0,
      "calcium": 43.0,
      "iron": 1.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr028",
    "code": "FR028",
    "name": "Sapi, dideh/darah",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 98.0,
      "protein": 21.9,
      "fat": 1.1,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 150.0,
      "calcium": 0.0,
      "iron": 1.3,
      "vitA": 15.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr029",
    "code": "FR029",
    "name": "Sapi, ginjal, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 137.0,
      "protein": 15.0,
      "fat": 8.1,
      "carbs": 0.9,
      "fiber": 0.0,
      "sodium": 200.0,
      "calcium": 0.0,
      "iron": 7.9,
      "vitA": 348.0,
      "vitC": 13.0
    }
  },
  {
    "id": "fr030",
    "code": "FR030",
    "name": "Sapi, keleponan, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 84.0,
      "protein": 10.5,
      "fat": 4.6,
      "carbs": 0.2,
      "fiber": 0.0,
      "sodium": 73.0,
      "calcium": 20.0,
      "iron": 2.1,
      "vitA": 857.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr031",
    "code": "FR031",
    "name": "Sapi, liver, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 132.0,
      "protein": 19.7,
      "fat": 3.2,
      "carbs": 6.0,
      "fiber": 0.0,
      "sodium": 110.0,
      "calcium": 0.0,
      "iron": 6.6,
      "vitA": 13303.0,
      "vitC": 31.0
    }
  },
  {
    "id": "fr032",
    "code": "FR032",
    "name": "Sapi, otak, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 123.0,
      "protein": 10.4,
      "fat": 8.6,
      "carbs": 0.8,
      "fiber": 0.0,
      "sodium": 112.0,
      "calcium": 16.0,
      "iron": 3.6,
      "vitA": 0.0,
      "vitC": 18.0
    }
  },
  {
    "id": "fr033",
    "code": "FR033",
    "name": "Sapi, usus, segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 126.0,
      "protein": 14.0,
      "fat": 7.2,
      "carbs": 1.5,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 14.0,
      "iron": 4.0,
      "vitA": 61.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fr034",
    "code": "FR034",
    "name": "Ulat sagu segar",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 241.0,
      "protein": 5.8,
      "fat": 21.6,
      "carbs": 5.8,
      "fiber": 2.8,
      "sodium": 210.0,
      "calcium": 20.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp001",
    "code": "FP001",
    "name": "Ayam, ampela, goreng",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 270.0,
      "protein": 32.3,
      "fat": 11.2,
      "carbs": 9.9,
      "fiber": 0.0,
      "sodium": 980.0,
      "calcium": 129.0,
      "iron": 4.9,
      "vitA": 56.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp002",
    "code": "FP002",
    "name": "Ayam, usus, goreng",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 473.0,
      "protein": 45.2,
      "fat": 26.3,
      "carbs": 13.9,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 1407.0,
      "iron": 8.4,
      "vitA": 6.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp003",
    "code": "FP003",
    "name": "Bebek, daging, goreng",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 300.0,
      "protein": 24.0,
      "fat": 20.7,
      "carbs": 4.5,
      "fiber": 0.0,
      "sodium": 34.0,
      "calcium": 2170.0,
      "iron": 4.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp004",
    "code": "FP004",
    "name": "Buaya, daging, dendeng, mentah",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 365.0,
      "protein": 49.6,
      "fat": 4.8,
      "carbs": 30.8,
      "fiber": 0.0,
      "sodium": 500.0,
      "calcium": 60.0,
      "iron": 4.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp005",
    "code": "FP005",
    "name": "Ham",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 384.0,
      "protein": 16.9,
      "fat": 35.0,
      "carbs": 0.3,
      "fiber": 0.0,
      "sodium": 112.0,
      "calcium": 10.0,
      "iron": 2.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp006",
    "code": "FP006",
    "name": "Itik alabio, daging, dendeng, mentah",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 496.0,
      "protein": 30.3,
      "fat": 33.5,
      "carbs": 18.4,
      "fiber": 0.0,
      "sodium": 1081.0,
      "calcium": 135.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp007",
    "code": "FP007",
    "name": "Kerupuk urat",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 588.0,
      "protein": 53.7,
      "fat": 40.9,
      "carbs": 1.2,
      "fiber": 0.0,
      "sodium": 1024.0,
      "calcium": 36.0,
      "iron": 1.3,
      "vitA": 2802.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp008",
    "code": "FP008",
    "name": "Menjangan, daging, dendeng, mentah",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 322.0,
      "protein": 55.8,
      "fat": 2.0,
      "carbs": 22.7,
      "fiber": 0.0,
      "sodium": 765.0,
      "calcium": 55.0,
      "iron": 2.1,
      "vitA": 3391.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp009",
    "code": "FP009",
    "name": "Punai, daging, goreng",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 224.0,
      "protein": 26.2,
      "fat": 11.3,
      "carbs": 4.4,
      "fiber": 0.0,
      "sodium": 2.0,
      "calcium": 362.0,
      "iron": 3.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp010",
    "code": "FP010",
    "name": "Rusa, daging, dendeng, mentah",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 536.0,
      "protein": 40.5,
      "fat": 41.5,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 130.0,
      "calcium": 90.0,
      "iron": 13.4,
      "vitA": 285.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp011",
    "code": "FP011",
    "name": "Sapi, abon",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 212.0,
      "protein": 18.0,
      "fat": 10.6,
      "carbs": 59.3,
      "fiber": 7.5,
      "sodium": 0.0,
      "calcium": 150.0,
      "iron": 12.3,
      "vitA": 138.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp012",
    "code": "FP012",
    "name": "Sapi, abon, asli",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 358.0,
      "protein": 14.6,
      "fat": 16.1,
      "carbs": 38.6,
      "fiber": 2.5,
      "sodium": 0.0,
      "calcium": 165.0,
      "iron": 14.6,
      "vitA": 3.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp013",
    "code": "FP013",
    "name": "Sapi, daging, asap",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 182.0,
      "protein": 32.0,
      "fat": 6.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 1620.0,
      "calcium": 215.0,
      "iron": 5.0,
      "vitA": 6.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp014",
    "code": "FP014",
    "name": "Sapi, daging, dendeng, mentah",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 301.0,
      "protein": 55.0,
      "fat": 9.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 30.0,
      "iron": 5.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp015",
    "code": "FP015",
    "name": "Sapi, daging, kornet",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 289.0,
      "protein": 16.0,
      "fat": 25.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 794.0,
      "calcium": 610.0,
      "iron": 4.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp016",
    "code": "FP016",
    "name": "Sapi, daging, sosis (Worst)",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 448.0,
      "protein": 14.5,
      "fat": 42.3,
      "carbs": 2.3,
      "fiber": 0.0,
      "sodium": 765.0,
      "calcium": 28.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp017",
    "code": "FP017",
    "name": "Sapi, hati, sosis (liverworst)",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 274.0,
      "protein": 16.0,
      "fat": 22.0,
      "carbs": 3.0,
      "fiber": 2.3,
      "sodium": 654.0,
      "calcium": 20.0,
      "iron": 4.0,
      "vitA": 1201.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp018",
    "code": "FP018",
    "name": "Sapi, paru, dendeng, mentah",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 360.0,
      "protein": 57.3,
      "fat": 6.0,
      "carbs": 19.2,
      "fiber": 0.0,
      "sodium": 1483.0,
      "calcium": 126.0,
      "iron": 21.1,
      "vitA": 2827.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp019",
    "code": "FP019",
    "name": "Sapi, paru, goreng",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 268.0,
      "protein": 23.9,
      "fat": 12.7,
      "carbs": 14.5,
      "fiber": 0.0,
      "sodium": 923.0,
      "calcium": 102.0,
      "iron": 8.8,
      "vitA": 790.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp020",
    "code": "FP020",
    "name": "Ulat sagu, panggang",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 380.0,
      "protein": 11.9,
      "fat": 30.3,
      "carbs": 14.9,
      "fiber": 4.8,
      "sodium": 260.0,
      "calcium": 30.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp021",
    "code": "FP021",
    "name": "Ayam goreng church texas, dada",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 338.0,
      "protein": 35.2,
      "fat": 20.6,
      "carbs": 0.4,
      "fiber": 0.0,
      "sodium": 800.0,
      "calcium": 79.0,
      "iron": 5.6,
      "vitA": 16.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp022",
    "code": "FP022",
    "name": "Ayam goreng church,texas paha",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 287.0,
      "protein": 31.0,
      "fat": 15.7,
      "carbs": 1.7,
      "fiber": 0.0,
      "sodium": 723.0,
      "calcium": 99.0,
      "iron": 4.1,
      "vitA": 22.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp023",
    "code": "FP023",
    "name": "Ayam goreng church texas, sayap",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 295.0,
      "protein": 34.0,
      "fat": 16.0,
      "carbs": 1.5,
      "fiber": 0.0,
      "sodium": 771.0,
      "calcium": 81.0,
      "iron": 3.0,
      "vitA": 13.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp024",
    "code": "FP024",
    "name": "Ayam goreng kalasan, paha",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 275.0,
      "protein": 37.4,
      "fat": 12.2,
      "carbs": 1.3,
      "fiber": 0.0,
      "sodium": 176.0,
      "calcium": 116.0,
      "iron": 5.8,
      "vitA": 10.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp025",
    "code": "FP025",
    "name": "Ayam goreng kentucky, dada",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 298.0,
      "protein": 34.2,
      "fat": 16.8,
      "carbs": 0.1,
      "fiber": 0.0,
      "sodium": 741.0,
      "calcium": 90.0,
      "iron": 5.5,
      "vitA": 36.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp026",
    "code": "FP026",
    "name": "Ayam goreng Kentucky, paha",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 286.0,
      "protein": 32.1,
      "fat": 16.1,
      "carbs": 1.1,
      "fiber": 0.0,
      "sodium": 746.0,
      "calcium": 289.0,
      "iron": 6.9,
      "vitA": 31.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp027",
    "code": "FP027",
    "name": "Ayam goreng Kentucky,sayap",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 297.0,
      "protein": 35.9,
      "fat": 15.2,
      "carbs": 1.6,
      "fiber": 0.0,
      "sodium": 807.0,
      "calcium": 103.0,
      "iron": 4.4,
      "vitA": 22.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp028",
    "code": "FP028",
    "name": "Ayam goreng mbok berek dada",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 295.0,
      "protein": 39.2,
      "fat": 13.6,
      "carbs": 1.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 114.0,
      "iron": 5.4,
      "vitA": 8.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp029",
    "code": "FP029",
    "name": "Ayam goreng pasundan, dada",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 246.0,
      "protein": 37.9,
      "fat": 9.0,
      "carbs": 0.7,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 90.0,
      "iron": 7.5,
      "vitA": 6.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp030",
    "code": "FP030",
    "name": "Ayam goreng pasundan, paha",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 245.0,
      "protein": 33.1,
      "fat": 11.4,
      "carbs": 0.3,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 90.0,
      "iron": 7.3,
      "vitA": 8.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp031",
    "code": "FP031",
    "name": "Ayam goreng pioneer, dada",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 295.0,
      "protein": 37.4,
      "fat": 14.7,
      "carbs": 0.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 108.0,
      "iron": 6.8,
      "vitA": 16.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp032",
    "code": "FP032",
    "name": "Ayam goreng sukabumi, dada",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 244.0,
      "protein": 36.7,
      "fat": 9.2,
      "carbs": 1.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 81.0,
      "iron": 6.1,
      "vitA": 20.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp033",
    "code": "FP033",
    "name": "Ayam goreng sukabumi, paha",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 283.0,
      "protein": 35.7,
      "fat": 14.3,
      "carbs": 0.5,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 68.0,
      "iron": 5.4,
      "vitA": 11.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp034",
    "code": "FP034",
    "name": "Ayam taliwang, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 264.0,
      "protein": 18.2,
      "fat": 20.1,
      "carbs": 2.7,
      "fiber": 0.0,
      "sodium": 507.0,
      "calcium": 94.0,
      "iron": 2.0,
      "vitA": 1067.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp035",
    "code": "FP035",
    "name": "Babi hutan masak rica, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 491.0,
      "protein": 24.6,
      "fat": 16.3,
      "carbs": 0.2,
      "fiber": 0.0,
      "sodium": 1415.0,
      "calcium": 18.0,
      "iron": 1.2,
      "vitA": 2193.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp036",
    "code": "FP036",
    "name": "Beef burger",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 258.0,
      "protein": 10.6,
      "fat": 9.5,
      "carbs": 32.5,
      "fiber": 0.4,
      "sodium": 572.0,
      "calcium": 210.0,
      "iron": 2.6,
      "vitA": 218.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp037",
    "code": "FP037",
    "name": "Beef teriyaki, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 151.0,
      "protein": 8.6,
      "fat": 3.1,
      "carbs": 22.3,
      "fiber": 0.3,
      "sodium": 377.0,
      "calcium": 142.0,
      "iron": 2.3,
      "vitA": 22.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp038",
    "code": "FP038",
    "name": "Beef yakiniku, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 132.0,
      "protein": 9.8,
      "fat": 1.1,
      "carbs": 20.7,
      "fiber": 0.3,
      "sodium": 409.0,
      "calcium": 302.0,
      "iron": 2.0,
      "vitA": 78.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp039",
    "code": "FP039",
    "name": "Brongkos",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 141.0,
      "protein": 15.3,
      "fat": 3.3,
      "carbs": 12.6,
      "fiber": 1.0,
      "sodium": 0.0,
      "calcium": 87.0,
      "iron": 5.1,
      "vitA": 4.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp040",
    "code": "FP040",
    "name": "Bulgogi, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 72.0,
      "protein": 11.4,
      "fat": 4.9,
      "carbs": 1.4,
      "fiber": 1.7,
      "sodium": 509.0,
      "calcium": 214.0,
      "iron": 2.5,
      "vitA": 17.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp041",
    "code": "FP041",
    "name": "Chicken teriyaki, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 168.0,
      "protein": 13.0,
      "fat": 9.6,
      "carbs": 7.5,
      "fiber": 0.8,
      "sodium": 959.0,
      "calcium": 137.0,
      "iron": 3.1,
      "vitA": 68.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp042",
    "code": "FP042",
    "name": "Chikiniku, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 143.0,
      "protein": 9.8,
      "fat": 1.4,
      "carbs": 22.8,
      "fiber": 0.4,
      "sodium": 531.0,
      "calcium": 301.0,
      "iron": 2.0,
      "vitA": 27.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp043",
    "code": "FP043",
    "name": "Coto mangkasara, kuda, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 96.0,
      "protein": 6.8,
      "fat": 5.9,
      "carbs": 3.8,
      "fiber": 0.0,
      "sodium": 96.0,
      "calcium": 11.0,
      "iron": 2.3,
      "vitA": 0.0,
      "vitC": 1.0
    }
  },
  {
    "id": "fp044",
    "code": "FP044",
    "name": "Coto mangkasara, sapi, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 84.0,
      "protein": 6.0,
      "fat": 6.0,
      "carbs": 1.4,
      "fiber": 0.0,
      "sodium": 90.0,
      "calcium": 0.0,
      "iron": 4.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp045",
    "code": "FP045",
    "name": "Djibokum, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 248.0,
      "protein": 10.0,
      "fat": 2.3,
      "carbs": 40.9,
      "fiber": 0.1,
      "sodium": 401.0,
      "calcium": 116.0,
      "iron": 2.8,
      "vitA": 52.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp046",
    "code": "FP046",
    "name": "Empal (daging) Goreng, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 248.0,
      "protein": 36.2,
      "fat": 6.9,
      "carbs": 10.1,
      "fiber": 0.0,
      "sodium": 848.0,
      "calcium": 2131.0,
      "iron": 6.4,
      "vitA": 112.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp047",
    "code": "FP047",
    "name": "Gulai kambing",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 126.0,
      "protein": 4.2,
      "fat": 9.4,
      "carbs": 6.2,
      "fiber": 0.0,
      "sodium": 302.0,
      "calcium": 45.0,
      "iron": 1.3,
      "vitA": 151.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp048",
    "code": "FP048",
    "name": "Jangang bintatoeng,masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 107.0,
      "protein": 5.3,
      "fat": 2.2,
      "carbs": 16.5,
      "fiber": 0.0,
      "sodium": 482.0,
      "calcium": 64.0,
      "iron": 2.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp049",
    "code": "FP049",
    "name": "Kalio ayam, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 203.0,
      "protein": 16.0,
      "fat": 13.5,
      "carbs": 4.4,
      "fiber": 0.0,
      "sodium": 534.0,
      "calcium": 278.0,
      "iron": 4.2,
      "vitA": 105.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp050",
    "code": "FP050",
    "name": "Kalio jeroan, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 163.0,
      "protein": 16.5,
      "fat": 9.0,
      "carbs": 4.1,
      "fiber": 0.0,
      "sodium": 570.0,
      "calcium": 102.0,
      "iron": 7.1,
      "vitA": 298.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp051",
    "code": "FP051",
    "name": "Kalio kikil (tunjang), masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 122.0,
      "protein": 13.8,
      "fat": 5.7,
      "carbs": 3.9,
      "fiber": 0.0,
      "sodium": 519.0,
      "calcium": 154.0,
      "iron": 3.4,
      "vitA": 36.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp052",
    "code": "FP052",
    "name": "Kalio otak, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 157.0,
      "protein": 8.1,
      "fat": 8.8,
      "carbs": 11.4,
      "fiber": 0.0,
      "sodium": 604.0,
      "calcium": 212.0,
      "iron": 3.3,
      "vitA": 32.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp053",
    "code": "FP053",
    "name": "Lawar babi, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 174.0,
      "protein": 17.0,
      "fat": 10.0,
      "carbs": 3.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 61.0,
      "iron": 3.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp054",
    "code": "FP054",
    "name": "Lawar penyu, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 141.0,
      "protein": 23.0,
      "fat": 1.5,
      "carbs": 7.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 69.0,
      "iron": 6.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp055",
    "code": "FP055",
    "name": "Lawara jangang, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 159.0,
      "protein": 5.0,
      "fat": 10.9,
      "carbs": 10.1,
      "fiber": 0.0,
      "sodium": 400.0,
      "calcium": 57.0,
      "iron": 1.5,
      "vitA": 14.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp056",
    "code": "FP056",
    "name": "Naan maran sapi, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 478.0,
      "protein": 38.3,
      "fat": 33.9,
      "carbs": 5.1,
      "fiber": 0.0,
      "sodium": 220.0,
      "calcium": 30.0,
      "iron": 11.8,
      "vitA": 33.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp057",
    "code": "FP057",
    "name": "Nasu likku, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 196.0,
      "protein": 14.5,
      "fat": 8.3,
      "carbs": 15.9,
      "fiber": 0.0,
      "sodium": 386.0,
      "calcium": 69.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp058",
    "code": "FP058",
    "name": "Oramu ninahu ndawa olaho, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 117.0,
      "protein": 13.7,
      "fat": 5.0,
      "carbs": 4.3,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 964.0,
      "iron": 2.0,
      "vitA": 4095.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp059",
    "code": "FP059",
    "name": "Paniki masak santan, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 460.0,
      "protein": 28.5,
      "fat": 35.2,
      "carbs": 7.2,
      "fiber": 0.0,
      "sodium": 2002.0,
      "calcium": 188.0,
      "iron": 5.5,
      "vitA": 954.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp060",
    "code": "FP060",
    "name": "Pelolah manuk, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 219.0,
      "protein": 19.7,
      "fat": 13.6,
      "carbs": 4.4,
      "fiber": 0.0,
      "sodium": 577.0,
      "calcium": 33.0,
      "iron": 1.6,
      "vitA": 137.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp061",
    "code": "FP061",
    "name": "Rawon, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 60.0,
      "protein": 5.4,
      "fat": 2.5,
      "carbs": 4.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 272.0,
      "iron": 3.3,
      "vitA": 10.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp062",
    "code": "FP062",
    "name": "Rendang sapi, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 193.0,
      "protein": 22.6,
      "fat": 7.9,
      "carbs": 7.8,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 474.0,
      "iron": 14.9,
      "vitA": 21.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp063",
    "code": "FP063",
    "name": "RW, anjing, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 198.0,
      "protein": 24.6,
      "fat": 10.7,
      "carbs": 0.9,
      "fiber": 0.0,
      "sodium": 1604.0,
      "calcium": 1071.0,
      "iron": 4.0,
      "vitA": 256.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp064",
    "code": "FP064",
    "name": "Sate, penyu, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 179.0,
      "protein": 22.5,
      "fat": 3.5,
      "carbs": 13.3,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 187.0,
      "iron": 14.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp065",
    "code": "FP065",
    "name": "Sate pusut, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 274.0,
      "protein": 12.9,
      "fat": 18.6,
      "carbs": 13.6,
      "fiber": 0.0,
      "sodium": 609.0,
      "calcium": 63.0,
      "iron": 2.7,
      "vitA": 133.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp066",
    "code": "FP066",
    "name": "Penyu, serapah, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 174.0,
      "protein": 13.1,
      "fat": 12.2,
      "carbs": 2.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 72.0,
      "iron": 9.5,
      "vitA": 1302.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp067",
    "code": "FP067",
    "name": "Sie reuboh, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 474.0,
      "protein": 11.2,
      "fat": 42.5,
      "carbs": 11.7,
      "fiber": 0.0,
      "sodium": 677.0,
      "calcium": 26.0,
      "iron": 1.3,
      "vitA": 141.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp068",
    "code": "FP068",
    "name": "Sop buntut, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 71.0,
      "protein": 7.5,
      "fat": 3.6,
      "carbs": 2.2,
      "fiber": 0.0,
      "sodium": 490.0,
      "calcium": 286.0,
      "iron": 3.2,
      "vitA": 119.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp069",
    "code": "FP069",
    "name": "Sop daging sapi, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 49.0,
      "protein": 5.8,
      "fat": 0.5,
      "carbs": 5.3,
      "fiber": 0.0,
      "sodium": 391.0,
      "calcium": 158.0,
      "iron": 2.2,
      "vitA": 101.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp070",
    "code": "FP070",
    "name": "Sop kaki sapi, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 68.0,
      "protein": 9.0,
      "fat": 1.9,
      "carbs": 3.7,
      "fiber": 0.0,
      "sodium": 435.0,
      "calcium": 302.0,
      "iron": 2.2,
      "vitA": 48.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp071",
    "code": "FP071",
    "name": "Sop kambing, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 34.0,
      "protein": 5.5,
      "fat": 0.8,
      "carbs": 1.1,
      "fiber": 0.0,
      "sodium": 348.0,
      "calcium": 145.0,
      "iron": 1.6,
      "vitA": 48.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp072",
    "code": "FP072",
    "name": "Sop konro, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 71.0,
      "protein": 7.4,
      "fat": 2.6,
      "carbs": 4.5,
      "fiber": 0.0,
      "sodium": 184.0,
      "calcium": 17.0,
      "iron": 4.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp073",
    "code": "FP073",
    "name": "Sop saudara, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 89.0,
      "protein": 7.2,
      "fat": 5.0,
      "carbs": 3.9,
      "fiber": 0.0,
      "sodium": 274.0,
      "calcium": 10.0,
      "iron": 9.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp074",
    "code": "FP074",
    "name": "Soto bandung, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 42.0,
      "protein": 3.9,
      "fat": 1.7,
      "carbs": 2.8,
      "fiber": 0.4,
      "sodium": 0.0,
      "calcium": 74.0,
      "iron": 1.8,
      "vitA": 6.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp075",
    "code": "FP075",
    "name": "Soto banjar, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 110.0,
      "protein": 2.9,
      "fat": 9.5,
      "carbs": 3.2,
      "fiber": 0.0,
      "sodium": 36.0,
      "calcium": 28.0,
      "iron": 0.3,
      "vitA": 12.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp076",
    "code": "FP076",
    "name": "Soto betawi, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 135.0,
      "protein": 2.5,
      "fat": 8.8,
      "carbs": 11.5,
      "fiber": 0.5,
      "sodium": 0.0,
      "calcium": 222.0,
      "iron": 1.9,
      "vitA": 6.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp077",
    "code": "FP077",
    "name": "Soto jeroan, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 92.0,
      "protein": 11.8,
      "fat": 4.3,
      "carbs": 1.4,
      "fiber": 0.0,
      "sodium": 363.0,
      "calcium": 218.0,
      "iron": 1.9,
      "vitA": 85.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp078",
    "code": "FP078",
    "name": "Soto kudus, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 38.0,
      "protein": 2.6,
      "fat": 2.3,
      "carbs": 1.8,
      "fiber": 0.2,
      "sodium": 0.0,
      "calcium": 237.0,
      "iron": 1.7,
      "vitA": 23.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp079",
    "code": "FP079",
    "name": "Soto madura, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 60.0,
      "protein": 3.5,
      "fat": 4.5,
      "carbs": 1.3,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 361.0,
      "iron": 3.8,
      "vitA": 26.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp080",
    "code": "FP080",
    "name": "Soto padang, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 127.0,
      "protein": 5.9,
      "fat": 6.6,
      "carbs": 11.0,
      "fiber": 0.7,
      "sodium": 0.0,
      "calcium": 298.0,
      "iron": 1.5,
      "vitA": 12.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp081",
    "code": "FP081",
    "name": "Soto pekalongan, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 94.0,
      "protein": 3.0,
      "fat": 6.8,
      "carbs": 5.1,
      "fiber": 0.3,
      "sodium": 0.0,
      "calcium": 322.0,
      "iron": 2.0,
      "vitA": 14.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp082",
    "code": "FP082",
    "name": "Soto pemalang, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 75.0,
      "protein": 3.6,
      "fat": 5.2,
      "carbs": 3.5,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 170.0,
      "iron": 2.1,
      "vitA": 16.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp083",
    "code": "FP083",
    "name": "Soto sukaraja, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 80.0,
      "protein": 3.2,
      "fat": 3.5,
      "carbs": 9.0,
      "fiber": 0.3,
      "sodium": 0.0,
      "calcium": 347.0,
      "iron": 2.3,
      "vitA": 12.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp084",
    "code": "FP084",
    "name": "Soto sulung, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 86.0,
      "protein": 2.3,
      "fat": 8.5,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 200.0,
      "iron": 2.9,
      "vitA": 20.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp085",
    "code": "FP085",
    "name": "Sukiyaki, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 75.0,
      "protein": 5.6,
      "fat": 0.4,
      "carbs": 12.2,
      "fiber": 0.2,
      "sodium": 426.0,
      "calcium": 109.0,
      "iron": 0.5,
      "vitA": 41.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp086",
    "code": "FP086",
    "name": "Tedong pallu basa, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 83.0,
      "protein": 10.4,
      "fat": 3.4,
      "carbs": 2.8,
      "fiber": 0.0,
      "sodium": 397.0,
      "calcium": 10.0,
      "iron": 2.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp087",
    "code": "FP087",
    "name": "Tikus rica, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 257.0,
      "protein": 18.8,
      "fat": 18.5,
      "carbs": 3.8,
      "fiber": 0.0,
      "sodium": 1724.0,
      "calcium": 232.0,
      "iron": 6.5,
      "vitA": 674.0,
      "vitC": 0.0
    }
  },
  {
    "id": "fp088",
    "code": "FP088",
    "name": "Tinoransa, masakan",
    "category": "Daging, Unggas & Olahan",
    "n": {
      "energy": 516.0,
      "protein": 17.7,
      "fat": 49.5,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 1307.0,
      "calcium": 698.0,
      "iron": 3.5,
      "vitA": 710.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr023",
    "code": "GR023",
    "name": "Ikan daun, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 101.0,
      "protein": 11.5,
      "fat": 4.1,
      "carbs": 4.6,
      "fiber": 0.0,
      "sodium": 120.0,
      "calcium": 80.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr024",
    "code": "GR024",
    "name": "Ikan ekor kuning, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 108.0,
      "protein": 22.3,
      "fat": 1.2,
      "carbs": 2.1,
      "fiber": 0.0,
      "sodium": 50.0,
      "calcium": 30.0,
      "iron": 0.5,
      "vitA": 40.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr025",
    "code": "GR025",
    "name": "Ikan gabus, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 80.0,
      "protein": 16.2,
      "fat": 0.5,
      "carbs": 2.6,
      "fiber": 0.0,
      "sodium": 65.0,
      "calcium": 170.0,
      "iron": 0.1,
      "vitA": 335.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr026",
    "code": "GR026",
    "name": "Ikan heu, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 81.0,
      "protein": 10.0,
      "fat": 1.6,
      "carbs": 6.6,
      "fiber": 0.0,
      "sodium": 240.0,
      "calcium": 1910.0,
      "iron": 2.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr027",
    "code": "GR027",
    "name": "Ikan hitam, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 101.0,
      "protein": 10.3,
      "fat": 3.7,
      "carbs": 6.7,
      "fiber": 0.0,
      "sodium": 70.0,
      "calcium": 50.0,
      "iron": 0.4,
      "vitA": 67.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr028",
    "code": "GR028",
    "name": "Ikan hiu, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 57.0,
      "protein": 10.7,
      "fat": 0.3,
      "carbs": 2.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 75.0,
      "iron": 2.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr029",
    "code": "GR029",
    "name": "Ikan kacangan, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 77.0,
      "protein": 15.6,
      "fat": 0.9,
      "carbs": 1.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 94.0,
      "iron": 1.7,
      "vitA": 18.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr030",
    "code": "GR030",
    "name": "Ikan kakap, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 92.0,
      "protein": 20.0,
      "fat": 0.7,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 20.0,
      "iron": 1.0,
      "vitA": 9.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr031",
    "code": "GR031",
    "name": "Ikan kakatua, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 82.0,
      "protein": 11.4,
      "fat": 1.2,
      "carbs": 6.4,
      "fiber": 0.0,
      "sodium": 90.0,
      "calcium": 20.0,
      "iron": 0.4,
      "vitA": 18.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr032",
    "code": "GR032",
    "name": "Ikan kalaban, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 77.0,
      "protein": 16.4,
      "fat": 0.7,
      "carbs": 1.3,
      "fiber": 0.0,
      "sodium": 40.0,
      "calcium": 182.0,
      "iron": 0.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr033",
    "code": "GR033",
    "name": "Ikan kamera (kakap merah), segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 86.0,
      "protein": 19.7,
      "fat": 0.8,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 90.0,
      "calcium": 50.0,
      "iron": 0.3,
      "vitA": 26.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr034",
    "code": "GR034",
    "name": "Ikan kapar, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 132.0,
      "protein": 17.0,
      "fat": 6.7,
      "carbs": 0.8,
      "fiber": 0.0,
      "sodium": 78.0,
      "calcium": 151.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr035",
    "code": "GR035",
    "name": "Ikan kawalinya, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 110.0,
      "protein": 12.6,
      "fat": 4.2,
      "carbs": 5.4,
      "fiber": 0.0,
      "sodium": 340.0,
      "calcium": 80.0,
      "iron": 1.5,
      "vitA": 146.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr036",
    "code": "GR036",
    "name": "Ikan keru-keru, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 93.0,
      "protein": 16.5,
      "fat": 2.1,
      "carbs": 0.8,
      "fiber": 0.0,
      "sodium": 137.0,
      "calcium": 65.0,
      "iron": 2.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr037",
    "code": "GR037",
    "name": "Ikan kima, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 70.0,
      "protein": 10.8,
      "fat": 0.7,
      "carbs": 5.2,
      "fiber": 0.0,
      "sodium": 342.0,
      "calcium": 53.0,
      "iron": 2.0,
      "vitA": 401.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr038",
    "code": "GR038",
    "name": "Ikan lais, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 161.0,
      "protein": 11.9,
      "fat": 11.5,
      "carbs": 2.4,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 70.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr039",
    "code": "GR039",
    "name": "Ikan layang, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 109.0,
      "protein": 22.0,
      "fat": 1.7,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 50.0,
      "iron": 2.0,
      "vitA": 45.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr040",
    "code": "GR040",
    "name": "Ikan layur, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 82.0,
      "protein": 18.0,
      "fat": 1.0,
      "carbs": 0.4,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 48.0,
      "iron": 2.2,
      "vitA": 4.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr041",
    "code": "GR041",
    "name": "Ikan lehoma, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 90.0,
      "protein": 20.4,
      "fat": 0.9,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 56.0,
      "calcium": 88.0,
      "iron": 0.7,
      "vitA": 1047.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr042",
    "code": "GR042",
    "name": "Ikan lemuru, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 112.0,
      "protein": 20.0,
      "fat": 3.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 120.0,
      "iron": 1.0,
      "vitA": 30.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr043",
    "code": "GR043",
    "name": "Ikan lidah, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 104.0,
      "protein": 15.6,
      "fat": 3.2,
      "carbs": 2.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 30.0,
      "iron": 2.0,
      "vitA": 33.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr044",
    "code": "GR044",
    "name": "Ikan malalugis, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 99.0,
      "protein": 20.6,
      "fat": 1.4,
      "carbs": 0.9,
      "fiber": 0.0,
      "sodium": 76.0,
      "calcium": 164.0,
      "iron": 0.5,
      "vitA": 661.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr045",
    "code": "GR045",
    "name": "Ikan mamar merah, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 115.0,
      "protein": 15.3,
      "fat": 4.0,
      "carbs": 4.4,
      "fiber": 0.0,
      "sodium": 120.0,
      "calcium": 60.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr046",
    "code": "GR046",
    "name": "Ikan mas, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 86.0,
      "protein": 16.0,
      "fat": 2.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 65.0,
      "calcium": 220.0,
      "iron": 2.0,
      "vitA": 45.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr047",
    "code": "GR047",
    "name": "Ikan mayong, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 97.0,
      "protein": 17.9,
      "fat": 2.0,
      "carbs": 0.4,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 40.0,
      "iron": 2.5,
      "vitA": 21.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr048",
    "code": "GR048",
    "name": "Ikan mujahir, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 89.0,
      "protein": 18.7,
      "fat": 1.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 51.0,
      "calcium": 96.0,
      "iron": 1.5,
      "vitA": 6.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr049",
    "code": "GR049",
    "name": "Ikan nasu metti, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 154.0,
      "protein": 16.8,
      "fat": 5.0,
      "carbs": 10.5,
      "fiber": 0.0,
      "sodium": 421.0,
      "calcium": 80.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr050",
    "code": "GR050",
    "name": "Ikan oci, kembung, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 125.0,
      "protein": 21.3,
      "fat": 3.4,
      "carbs": 2.2,
      "fiber": 0.0,
      "sodium": 214.0,
      "calcium": 136.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr051",
    "code": "GR051",
    "name": "Ikan paling, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 303.0,
      "protein": 14.0,
      "fat": 27.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 43.0,
      "calcium": 120.0,
      "iron": 1.0,
      "vitA": 485.0,
      "vitC": 2.0
    }
  },
  {
    "id": "gr052",
    "code": "GR052",
    "name": "Ikan papuyu/ betok, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 120.0,
      "protein": 14.3,
      "fat": 4.9,
      "carbs": 4.6,
      "fiber": 0.0,
      "sodium": 240.0,
      "calcium": 329.0,
      "iron": 1.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr053",
    "code": "GR053",
    "name": "Ikan patin, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 132.0,
      "protein": 17.0,
      "fat": 6.6,
      "carbs": 1.1,
      "fiber": 0.0,
      "sodium": 77.0,
      "calcium": 31.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr054",
    "code": "GR054",
    "name": "Ikan pomo, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 147.0,
      "protein": 22.5,
      "fat": 5.2,
      "carbs": 2.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 80.0,
      "iron": 1.3,
      "vitA": 89.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr055",
    "code": "GR055",
    "name": "Ikan puntin, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 76.0,
      "protein": 14.4,
      "fat": 1.1,
      "carbs": 2.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 28.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr056",
    "code": "GR056",
    "name": "Ikan saluang, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 113.0,
      "protein": 13.9,
      "fat": 4.9,
      "carbs": 3.4,
      "fiber": 0.0,
      "sodium": 51.0,
      "calcium": 3642.0,
      "iron": 1.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr057",
    "code": "GR057",
    "name": "Ikan sarden, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 109.0,
      "protein": 19.9,
      "fat": 1.8,
      "carbs": 3.4,
      "fiber": 0.0,
      "sodium": 266.0,
      "calcium": 95.0,
      "iron": 1.3,
      "vitA": 195.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr058",
    "code": "GR058",
    "name": "Ikan selar, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 100.0,
      "protein": 18.8,
      "fat": 2.2,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 43.0,
      "calcium": 40.0,
      "iron": 0.5,
      "vitA": 45.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr059",
    "code": "GR059",
    "name": "Ikan sepat, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 84.0,
      "protein": 15.2,
      "fat": 0.6,
      "carbs": 4.7,
      "fiber": 0.0,
      "sodium": 211.0,
      "calcium": 68.0,
      "iron": 2.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr060",
    "code": "GR060",
    "name": "Ikan sidat, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 81.0,
      "protein": 11.4,
      "fat": 1.9,
      "carbs": 3.8,
      "fiber": 0.0,
      "sodium": 46.0,
      "calcium": 118.0,
      "iron": 3.0,
      "vitA": 15.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr061",
    "code": "GR061",
    "name": "Ikan sunu, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 111.0,
      "protein": 13.3,
      "fat": 3.4,
      "carbs": 6.7,
      "fiber": 0.0,
      "sodium": 91.0,
      "calcium": 86.0,
      "iron": 1.2,
      "vitA": 309.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr062",
    "code": "GR062",
    "name": "Ikan tahuman, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 88.0,
      "protein": 15.9,
      "fat": 0.9,
      "carbs": 4.1,
      "fiber": 0.0,
      "sodium": 24.0,
      "calcium": 221.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr063",
    "code": "GR063",
    "name": "Ikan tarmon, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 96.0,
      "protein": 19.5,
      "fat": 1.1,
      "carbs": 2.0,
      "fiber": 0.0,
      "sodium": 43.0,
      "calcium": 0.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr064",
    "code": "GR064",
    "name": "Ikan telan, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 95.0,
      "protein": 15.8,
      "fat": 0.7,
      "carbs": 6.5,
      "fiber": 0.0,
      "sodium": 58.0,
      "calcium": 503.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr065",
    "code": "GR065",
    "name": "Ikan tembang, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 204.0,
      "protein": 16.0,
      "fat": 15.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 341.0,
      "calcium": 420.0,
      "iron": 2.0,
      "vitA": 30.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr066",
    "code": "GR066",
    "name": "Ikan tempahas, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 101.0,
      "protein": 15.1,
      "fat": 4.1,
      "carbs": 1.0,
      "fiber": 0.0,
      "sodium": 50.0,
      "calcium": 32.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr067",
    "code": "GR067",
    "name": "Ikan terbang, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 98.0,
      "protein": 19.6,
      "fat": 1.7,
      "carbs": 1.0,
      "fiber": 0.0,
      "sodium": 90.0,
      "calcium": 90.0,
      "iron": 0.6,
      "vitA": 39.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr068",
    "code": "GR068",
    "name": "Ikan teri, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 74.0,
      "protein": 10.3,
      "fat": 1.4,
      "carbs": 4.1,
      "fiber": 0.0,
      "sodium": 554.0,
      "calcium": 972.0,
      "iron": 3.9,
      "vitA": 13.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr069",
    "code": "GR069",
    "name": "Ikan titang, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 82.0,
      "protein": 17.4,
      "fat": 0.4,
      "carbs": 2.3,
      "fiber": 0.0,
      "sodium": 110.0,
      "calcium": 145.0,
      "iron": 1.8,
      "vitA": 581.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr070",
    "code": "GR070",
    "name": "Ikan tongkol, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 100.0,
      "protein": 13.7,
      "fat": 1.5,
      "carbs": 8.0,
      "fiber": 0.0,
      "sodium": 202.0,
      "calcium": 92.0,
      "iron": 1.7,
      "vitA": 181.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr071",
    "code": "GR071",
    "name": "Ikan turi, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 96.0,
      "protein": 19.2,
      "fat": 2.0,
      "carbs": 0.2,
      "fiber": 0.0,
      "sodium": 370.0,
      "calcium": 340.0,
      "iron": 0.8,
      "vitA": 26.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr072",
    "code": "GR072",
    "name": "Keong, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 64.0,
      "protein": 12.0,
      "fat": 1.0,
      "carbs": 2.0,
      "fiber": 0.0,
      "sodium": 231.0,
      "calcium": 4217.0,
      "iron": 1.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr073",
    "code": "GR073",
    "name": "Kepiting, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 151.0,
      "protein": 13.8,
      "fat": 3.8,
      "carbs": 14.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 210.0,
      "iron": 1.1,
      "vitA": 61.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr074",
    "code": "GR074",
    "name": "Kerang, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 101.0,
      "protein": 14.4,
      "fat": 2.6,
      "carbs": 3.9,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 321.0,
      "iron": 15.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr075",
    "code": "GR075",
    "name": "Kodok, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 73.0,
      "protein": 16.4,
      "fat": 0.3,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 18.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr076",
    "code": "GR076",
    "name": "Kura-kura, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 83.0,
      "protein": 19.1,
      "fat": 0.2,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 27.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr077",
    "code": "GR077",
    "name": "Kuro, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 87.0,
      "protein": 16.0,
      "fat": 2.2,
      "carbs": 1.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 75.0,
      "iron": 1.0,
      "vitA": 6.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr078",
    "code": "GR078",
    "name": "Lokan, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 217.0,
      "protein": 11.0,
      "fat": 1.7,
      "carbs": 5.1,
      "fiber": 0.0,
      "sodium": 3.0,
      "calcium": 20.0,
      "iron": 10.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr079",
    "code": "GR079",
    "name": "Rajungan, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 76.0,
      "protein": 12.1,
      "fat": 2.0,
      "carbs": 2.4,
      "fiber": 0.0,
      "sodium": 69.0,
      "calcium": 721.0,
      "iron": 2.2,
      "vitA": 599.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr080",
    "code": "GR080",
    "name": "Rebon, udang kecil, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 81.0,
      "protein": 16.2,
      "fat": 1.2,
      "carbs": 0.7,
      "fiber": 0.0,
      "sodium": 169.0,
      "calcium": 757.0,
      "iron": 2.2,
      "vitA": 18.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr081",
    "code": "GR081",
    "name": "Rusip",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 110.0,
      "protein": 11.5,
      "fat": 2.0,
      "carbs": 11.7,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 479.0,
      "iron": 7.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr082",
    "code": "GR082",
    "name": "Udang galah, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 81.0,
      "protein": 16.5,
      "fat": 0.3,
      "carbs": 3.0,
      "fiber": 0.0,
      "sodium": 95.0,
      "calcium": 87.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr083",
    "code": "GR083",
    "name": "Udang, besar, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 56.0,
      "protein": 11.4,
      "fat": 0.6,
      "carbs": 1.2,
      "fiber": 0.0,
      "sodium": 190.0,
      "calcium": 30.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gr084",
    "code": "GR084",
    "name": "Udang, segar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 91.0,
      "protein": 21.0,
      "fat": 0.2,
      "carbs": 0.1,
      "fiber": 0.0,
      "sodium": 178.0,
      "calcium": 136.0,
      "iron": 8.0,
      "vitA": 18.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp001",
    "code": "GP001",
    "name": "Bekicot, dendeng, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 441.0,
      "protein": 48.7,
      "fat": 20.3,
      "carbs": 15.8,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 692.0,
      "iron": 16.6,
      "vitA": 6.0,
      "vitC": 69.0
    }
  },
  {
    "id": "gp002",
    "code": "GP002",
    "name": "Belut, goreng",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 417.0,
      "protein": 25.9,
      "fat": 19.4,
      "carbs": 32.0,
      "fiber": 0.0,
      "sodium": 71.0,
      "calcium": 840.0,
      "iron": 4.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp003",
    "code": "GP003",
    "name": "Cumi-cumi, goreng",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 265.0,
      "protein": 40.6,
      "fat": 10.1,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 86.0,
      "calcium": 62.0,
      "iron": 2.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp004",
    "code": "GP004",
    "name": "Ikan asin, kering",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 193.0,
      "protein": 42.0,
      "fat": 1.5,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 200.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp005",
    "code": "GP005",
    "name": "Ikan bandeng presto, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 296.0,
      "protein": 17.1,
      "fat": 20.3,
      "carbs": 11.3,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 61422.0,
      "iron": 1.9,
      "vitA": 6.0,
      "vitC": 69.0
    }
  },
  {
    "id": "gp006",
    "code": "GP006",
    "name": "Ikan baung bakar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 144.0,
      "protein": 17.8,
      "fat": 5.8,
      "carbs": 5.2,
      "fiber": 0.0,
      "sodium": 168.0,
      "calcium": 18.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp007",
    "code": "GP007",
    "name": "Ikan Belida bakar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 128.0,
      "protein": 18.0,
      "fat": 3.0,
      "carbs": 7.2,
      "fiber": 0.0,
      "sodium": 293.0,
      "calcium": 58.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp008",
    "code": "GP008",
    "name": "Ikan cakalang asap, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 204.0,
      "protein": 34.2,
      "fat": 5.6,
      "carbs": 1.9,
      "fiber": 0.0,
      "sodium": 176.0,
      "calcium": 14.0,
      "iron": 1.3,
      "vitA": 1546.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp009",
    "code": "GP009",
    "name": "Ikan cakalang asin, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 198.0,
      "protein": 36.5,
      "fat": 2.2,
      "carbs": 5.5,
      "fiber": 0.0,
      "sodium": 4304.0,
      "calcium": 236.0,
      "iron": 3.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp010",
    "code": "GP010",
    "name": "Ikan calo/ peda, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 81.0,
      "protein": 11.4,
      "fat": 1.9,
      "carbs": 3.8,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 743.0,
      "iron": 22.6,
      "vitA": 15.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp011",
    "code": "GP011",
    "name": "Ikan Gabus asap, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 261.0,
      "protein": 38.1,
      "fat": 2.3,
      "carbs": 21.9,
      "fiber": 0.0,
      "sodium": 320.0,
      "calcium": 2510.0,
      "iron": 2.9,
      "vitA": 114.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp012",
    "code": "GP012",
    "name": "Ikan Gabus, kering",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 268.0,
      "protein": 58.0,
      "fat": 4.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 15.0,
      "iron": 0.1,
      "vitA": 30.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp013",
    "code": "GP013",
    "name": "Ikan gete, goreng",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 267.0,
      "protein": 23.1,
      "fat": 19.4,
      "carbs": 0.2,
      "fiber": 0.0,
      "sodium": 590.0,
      "calcium": 2340.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp014",
    "code": "GP014",
    "name": "Ikan hiu, kering",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 298.0,
      "protein": 46.3,
      "fat": 3.6,
      "carbs": 20.2,
      "fiber": 0.0,
      "sodium": 957.0,
      "calcium": 335.0,
      "iron": 2.5,
      "vitA": 661.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp015",
    "code": "GP015",
    "name": "Ikan katombo, asin",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 162.0,
      "protein": 31.7,
      "fat": 2.8,
      "carbs": 0.3,
      "fiber": 0.0,
      "sodium": 4393.0,
      "calcium": 279.0,
      "iron": 4.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp016",
    "code": "GP016",
    "name": "Ikan kayu, kering",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 302.0,
      "protein": 70.7,
      "fat": 1.9,
      "carbs": 0.4,
      "fiber": 0.0,
      "sodium": 345.0,
      "calcium": 313.0,
      "iron": 4.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp017",
    "code": "GP017",
    "name": "Ikan Lais bakar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 147.0,
      "protein": 17.5,
      "fat": 6.5,
      "carbs": 5.4,
      "fiber": 0.0,
      "sodium": 142.0,
      "calcium": 54.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp018",
    "code": "GP018",
    "name": "Ikan lomak asin, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 258.0,
      "protein": 40.3,
      "fat": 2.3,
      "carbs": 18.9,
      "fiber": 0.0,
      "sodium": 6227.0,
      "calcium": 140.0,
      "iron": 2.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp019",
    "code": "GP019",
    "name": "Ikan Mas pepes",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 209.0,
      "protein": 15.2,
      "fat": 11.3,
      "carbs": 11.8,
      "fiber": 0.5,
      "sodium": 74.0,
      "calcium": 686.0,
      "iron": 6.1,
      "vitA": 3.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp020",
    "code": "GP020",
    "name": "Ikan mujahir goreng",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 416.0,
      "protein": 46.9,
      "fat": 23.9,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 54.0,
      "calcium": 346.0,
      "iron": 0.9,
      "vitA": 12.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp021",
    "code": "GP021",
    "name": "Ikan Mujahir pepes",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 121.0,
      "protein": 21.7,
      "fat": 2.8,
      "carbs": 0.8,
      "fiber": 0.0,
      "sodium": 58.0,
      "calcium": 183.0,
      "iron": 1.6,
      "vitA": 8.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp022",
    "code": "GP022",
    "name": "Ikan mujahir, dendeng, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 582.0,
      "protein": 68.3,
      "fat": 15.2,
      "carbs": 37.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 3258.0,
      "iron": 4.3,
      "vitA": 15.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp023",
    "code": "GP023",
    "name": "Ikan Papuyu, bakar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 152.0,
      "protein": 17.6,
      "fat": 6.1,
      "carbs": 6.7,
      "fiber": 0.0,
      "sodium": 320.0,
      "calcium": 3244.0,
      "iron": 3.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp024",
    "code": "GP024",
    "name": "Ikan Patin, bakar",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 144.0,
      "protein": 17.5,
      "fat": 6.3,
      "carbs": 4.3,
      "fiber": 0.0,
      "sodium": 379.0,
      "calcium": 191.0,
      "iron": 1.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp025",
    "code": "GP025",
    "name": "Ikan peda banjar, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 156.0,
      "protein": 28.0,
      "fat": 4.0,
      "carbs": 2.0,
      "fiber": 0.0,
      "sodium": 59.0,
      "calcium": 174.0,
      "iron": 3.1,
      "vitA": 33.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp026",
    "code": "GP026",
    "name": "Ikan pepetek, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 176.0,
      "protein": 32.0,
      "fat": 4.4,
      "carbs": 2.0,
      "fiber": 0.0,
      "sodium": 79.0,
      "calcium": 120.0,
      "iron": 1.0,
      "vitA": 15.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp027",
    "code": "GP027",
    "name": "Ikan Pindang banjar, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 157.0,
      "protein": 28.0,
      "fat": 4.2,
      "carbs": 1.8,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 750.0,
      "iron": 1.0,
      "vitA": 45.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp028",
    "code": "GP028",
    "name": "Ikan Pindang benggol, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 170.0,
      "protein": 31.0,
      "fat": 4.2,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 50.0,
      "iron": 1.0,
      "vitA": 45.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp029",
    "code": "GP029",
    "name": "Ikan Pindang layang, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 153.0,
      "protein": 30.0,
      "fat": 2.8,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 60.0,
      "iron": 3.0,
      "vitA": 61.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp030",
    "code": "GP030",
    "name": "Ikan Pindang selar, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 142.0,
      "protein": 27.0,
      "fat": 3.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 60.0,
      "iron": 3.0,
      "vitA": 61.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp031",
    "code": "GP031",
    "name": "Ikan sale, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 534.0,
      "protein": 40.2,
      "fat": 39.3,
      "carbs": 4.9,
      "fiber": 2.0,
      "sodium": 673.0,
      "calcium": 199.0,
      "iron": 2.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp032",
    "code": "GP032",
    "name": "Ikan sale lais, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 415.0,
      "protein": 61.3,
      "fat": 17.6,
      "carbs": 2.9,
      "fiber": 0.0,
      "sodium": 381.0,
      "calcium": 258.0,
      "iron": 7.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp033",
    "code": "GP033",
    "name": "Ikan saluang, kering, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 284.0,
      "protein": 34.1,
      "fat": 9.9,
      "carbs": 14.6,
      "fiber": 0.0,
      "sodium": 1767.0,
      "calcium": 1426.0,
      "iron": 9.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp034",
    "code": "GP034",
    "name": "Ikan sanggang, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 240.0,
      "protein": 21.7,
      "fat": 7.7,
      "carbs": 20.7,
      "fiber": 0.0,
      "sodium": 2041.0,
      "calcium": 159.0,
      "iron": 9.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp035",
    "code": "GP035",
    "name": "Ikan selar kuning, cue, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 138.0,
      "protein": 27.0,
      "fat": 3.3,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 50.0,
      "iron": 2.0,
      "vitA": 45.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp036",
    "code": "GP036",
    "name": "Ikan selar, kering, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 194.0,
      "protein": 38.0,
      "fat": 3.5,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 20.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp037",
    "code": "GP037",
    "name": "Ikan sepat, kering, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 289.0,
      "protein": 38.0,
      "fat": 14.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 40.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp038",
    "code": "GP038",
    "name": "Ikan sunu, asin, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 199.0,
      "protein": 34.1,
      "fat": 3.8,
      "carbs": 7.1,
      "fiber": 0.0,
      "sodium": 377.0,
      "calcium": 94.0,
      "iron": 2.2,
      "vitA": 2481.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp039",
    "code": "GP039",
    "name": "Ikan, tepung, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 316.0,
      "protein": 60.0,
      "fat": 6.5,
      "carbs": 22.4,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 3196.0,
      "iron": 16.6,
      "vitA": 320.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp040",
    "code": "GP040",
    "name": "Ikan Teri nasi, kering, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 144.0,
      "protein": 32.5,
      "fat": 0.6,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 312.0,
      "calcium": 1000.0,
      "iron": 3.0,
      "vitA": 61.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp041",
    "code": "GP041",
    "name": "Ikan Teri, bubuk, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 277.0,
      "protein": 60.0,
      "fat": 2.3,
      "carbs": 1.8,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 1209.0,
      "iron": 3.0,
      "vitA": 90.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp042",
    "code": "GP042",
    "name": "Ikan teri, kering, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 170.0,
      "protein": 33.4,
      "fat": 3.0,
      "carbs": 0.8,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 1200.0,
      "iron": 3.6,
      "vitA": 64.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp043",
    "code": "GP043",
    "name": "Ikan Teri, kering, tawar, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 331.0,
      "protein": 68.7,
      "fat": 4.2,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 2381.0,
      "iron": 23.4,
      "vitA": 61.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp044",
    "code": "GP044",
    "name": "Ikan Teri, tepung, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 347.0,
      "protein": 48.8,
      "fat": 6.4,
      "carbs": 19.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 4608.0,
      "iron": 18.6,
      "vitA": 61.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp045",
    "code": "GP045",
    "name": "Kerang, asap, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 393.0,
      "protein": 38.9,
      "fat": 13.3,
      "carbs": 29.4,
      "fiber": 0.0,
      "sodium": 160.0,
      "calcium": 420.0,
      "iron": 8.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp046",
    "code": "GP046",
    "name": "Kerang, dendeng, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 357.0,
      "protein": 41.1,
      "fat": 10.0,
      "carbs": 25.6,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 5217.0,
      "iron": 5.2,
      "vitA": 329.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp047",
    "code": "GP047",
    "name": "Rebon, kering, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 299.0,
      "protein": 59.4,
      "fat": 3.6,
      "carbs": 3.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 2306.0,
      "iron": 21.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp048",
    "code": "GP048",
    "name": "Rebung laut, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 320.0,
      "protein": 7.2,
      "fat": 4.2,
      "carbs": 63.3,
      "fiber": 0.0,
      "sodium": 20.0,
      "calcium": 240.0,
      "iron": 6.6,
      "vitA": 917.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp049",
    "code": "GP049",
    "name": "Sardines dalam kaleng",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 338.0,
      "protein": 21.1,
      "fat": 27.0,
      "carbs": 1.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 354.0,
      "iron": 3.5,
      "vitA": 76.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp050",
    "code": "GP050",
    "name": "Teripang, dendeng, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 462.0,
      "protein": 39.1,
      "fat": 32.4,
      "carbs": 3.5,
      "fiber": 0.0,
      "sodium": 315.0,
      "calcium": 499.0,
      "iron": 96.4,
      "vitA": 2.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp051",
    "code": "GP051",
    "name": "Udang kering, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 278.0,
      "protein": 62.6,
      "fat": 4.1,
      "carbs": 2.2,
      "fiber": 0.0,
      "sodium": 540.0,
      "calcium": 760.0,
      "iron": 5.2,
      "vitA": 39.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp052",
    "code": "GP052",
    "name": "Udang papay, mentah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 273.0,
      "protein": 47.8,
      "fat": 3.8,
      "carbs": 12.5,
      "fiber": 0.0,
      "sodium": 651.0,
      "calcium": 1109.0,
      "iron": 2.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp053",
    "code": "GP053",
    "name": "Abon haruwan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 513.0,
      "protein": 23.7,
      "fat": 37.0,
      "carbs": 21.3,
      "fiber": 0.0,
      "sodium": 61.0,
      "calcium": 25.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp054",
    "code": "GP054",
    "name": "Abon ikan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 435.0,
      "protein": 27.2,
      "fat": 20.2,
      "carbs": 36.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp055",
    "code": "GP055",
    "name": "Betok wadi, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 145.0,
      "protein": 16.3,
      "fat": 7.0,
      "carbs": 4.1,
      "fiber": 0.0,
      "sodium": 69.0,
      "calcium": 405.0,
      "iron": 1.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp056",
    "code": "GP056",
    "name": "Bou ninahu ndamate, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 79.0,
      "protein": 16.3,
      "fat": 1.0,
      "carbs": 1.1,
      "fiber": 0.0,
      "sodium": 67.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 691.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp057",
    "code": "GP057",
    "name": "Bouiki ninahu nggaluku, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 94.0,
      "protein": 7.8,
      "fat": 2.2,
      "carbs": 10.8,
      "fiber": 0.0,
      "sodium": 58.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp058",
    "code": "GP058",
    "name": "Cakalang asar (asap)",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 155.0,
      "protein": 20.1,
      "fat": 3.8,
      "carbs": 10.2,
      "fiber": 0.0,
      "sodium": 90.0,
      "calcium": 20.0,
      "iron": 2.1,
      "vitA": 86.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp059",
    "code": "GP059",
    "name": "Dendeng belut, goreng, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 382.0,
      "protein": 55.7,
      "fat": 14.1,
      "carbs": 8.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 1069.0,
      "iron": 15.4,
      "vitA": 28.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp060",
    "code": "GP060",
    "name": "Dendeng mujahir, goreng, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 598.0,
      "protein": 74.3,
      "fat": 26.9,
      "carbs": 9.2,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 1957.0,
      "iron": 7.4,
      "vitA": 18.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp061",
    "code": "GP061",
    "name": "Fillet o-fish",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 270.0,
      "protein": 12.3,
      "fat": 15.9,
      "carbs": 19.3,
      "fiber": 0.2,
      "sodium": 439.0,
      "calcium": 239.0,
      "iron": 1.8,
      "vitA": 34.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp062",
    "code": "GP062",
    "name": "Gete kuah asam, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 75.0,
      "protein": 8.2,
      "fat": 2.0,
      "carbs": 6.0,
      "fiber": 0.0,
      "sodium": 260.0,
      "calcium": 1620.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp063",
    "code": "GP063",
    "name": "Gulai asam keueung, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 52.0,
      "protein": 10.0,
      "fat": 0.5,
      "carbs": 1.8,
      "fiber": 0.0,
      "sodium": 332.0,
      "calcium": 62.0,
      "iron": 0.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp065",
    "code": "GP065",
    "name": "Gulai ikan, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 106.0,
      "protein": 16.5,
      "fat": 3.3,
      "carbs": 2.5,
      "fiber": 0.0,
      "sodium": 743.0,
      "calcium": 2306.0,
      "iron": 4.8,
      "vitA": 86.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp064",
    "code": "GP064",
    "name": "Gulai ikan paya, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 148.0,
      "protein": 10.0,
      "fat": 9.8,
      "carbs": 5.0,
      "fiber": 0.0,
      "sodium": 525.0,
      "calcium": 103.0,
      "iron": 0.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp066",
    "code": "GP066",
    "name": "Gulai keumamah, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 110.0,
      "protein": 5.9,
      "fat": 8.2,
      "carbs": 3.2,
      "fiber": 0.0,
      "sodium": 335.0,
      "calcium": 32.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp067",
    "code": "GP067",
    "name": "Gulai tiram, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 132.0,
      "protein": 9.0,
      "fat": 7.2,
      "carbs": 7.8,
      "fiber": 0.0,
      "sodium": 285.0,
      "calcium": 53.0,
      "iron": 3.7,
      "vitA": 389.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp068",
    "code": "GP068",
    "name": "Gurame asem manis, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 192.0,
      "protein": 12.7,
      "fat": 10.1,
      "carbs": 12.7,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 283.0,
      "iron": 1.1,
      "vitA": 19.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp069",
    "code": "GP069",
    "name": "Ikan asar merah, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 146.0,
      "protein": 17.7,
      "fat": 5.9,
      "carbs": 5.6,
      "fiber": 0.0,
      "sodium": 170.0,
      "calcium": 100.0,
      "iron": 4.0,
      "vitA": 224.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp070",
    "code": "GP070",
    "name": "Jambal goreng, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 286.0,
      "protein": 48.5,
      "fat": 9.2,
      "carbs": 2.3,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 207.0,
      "iron": 3.3,
      "vitA": 109.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp071",
    "code": "GP071",
    "name": "Jukku pallu kaloa, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 15.0,
      "protein": 15.2,
      "fat": 4.3,
      "carbs": 8.8,
      "fiber": 0.0,
      "sodium": 605.0,
      "calcium": 40.0,
      "iron": 1.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp072",
    "code": "GP072",
    "name": "Kaholeo, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 413.0,
      "protein": 28.7,
      "fat": 19.8,
      "carbs": 29.8,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 909.0,
      "iron": 0.0,
      "vitA": 4236.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp073",
    "code": "GP073",
    "name": "Lawara penjah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 207.0,
      "protein": 7.4,
      "fat": 15.4,
      "carbs": 9.6,
      "fiber": 0.0,
      "sodium": 683.0,
      "calcium": 114.0,
      "iron": 5.9,
      "vitA": 0.0,
      "vitC": 14.0
    }
  },
  {
    "id": "gp074",
    "code": "GP074",
    "name": "Model, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 79.0,
      "protein": 2.2,
      "fat": 4.0,
      "carbs": 8.6,
      "fiber": 0.0,
      "sodium": 147.0,
      "calcium": 0.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp075",
    "code": "GP075",
    "name": "Mujahir acar kuning, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 330.0,
      "protein": 17.8,
      "fat": 23.4,
      "carbs": 12.1,
      "fiber": 1.1,
      "sodium": 0.0,
      "calcium": 154.0,
      "iron": 5.3,
      "vitA": 24.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp076",
    "code": "GP076",
    "name": "Parede baleh, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 87.0,
      "protein": 10.5,
      "fat": 2.5,
      "carbs": 5.5,
      "fiber": 0.0,
      "sodium": 416.0,
      "calcium": 35.0,
      "iron": 0.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp077",
    "code": "GP077",
    "name": "Pempek adaan, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 162.0,
      "protein": 4.9,
      "fat": 3.0,
      "carbs": 27.8,
      "fiber": 0.0,
      "sodium": 488.0,
      "calcium": 26.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp078",
    "code": "GP078",
    "name": "Pempek belida, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 156.0,
      "protein": 4.2,
      "fat": 1.4,
      "carbs": 31.6,
      "fiber": 0.2,
      "sodium": 0.0,
      "calcium": 100.0,
      "iron": 3.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp079",
    "code": "GP079",
    "name": "Pempek kapal selam, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 152.0,
      "protein": 4.5,
      "fat": 2.3,
      "carbs": 28.2,
      "fiber": 0.0,
      "sodium": 628.0,
      "calcium": 19.0,
      "iron": 1.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp080",
    "code": "GP080",
    "name": "Pempek kelesan, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 211.0,
      "protein": 12.3,
      "fat": 6.1,
      "carbs": 26.6,
      "fiber": 0.4,
      "sodium": 0.0,
      "calcium": 2840.0,
      "iron": 1.8,
      "vitA": 14.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp081",
    "code": "GP081",
    "name": "Pempek kulit, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 243.0,
      "protein": 5.2,
      "fat": 7.3,
      "carbs": 39.1,
      "fiber": 0.0,
      "sodium": 555.0,
      "calcium": 16.0,
      "iron": 2.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp082",
    "code": "GP082",
    "name": "Pempek telur, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 156.0,
      "protein": 4.7,
      "fat": 2.7,
      "carbs": 28.3,
      "fiber": 0.0,
      "sodium": 448.0,
      "calcium": 13.0,
      "iron": 1.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp083",
    "code": "GP083",
    "name": "Pempek tenggiri, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 173.0,
      "protein": 7.2,
      "fat": 1.2,
      "carbs": 33.4,
      "fiber": 0.2,
      "sodium": 0.0,
      "calcium": 164.0,
      "iron": 3.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp084",
    "code": "GP084",
    "name": "Pencok lele, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 372.0,
      "protein": 7.8,
      "fat": 36.3,
      "carbs": 3.5,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 289.0,
      "iron": 5.3,
      "vitA": 64.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp085",
    "code": "GP085",
    "name": "Pinda",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 107.0,
      "protein": 15.9,
      "fat": 0.6,
      "carbs": 0.4,
      "fiber": 0.0,
      "sodium": 526.0,
      "calcium": 375.0,
      "iron": 1.9,
      "vitA": 896.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp086",
    "code": "GP086",
    "name": "Pindang kenari, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 124.0,
      "protein": 9.5,
      "fat": 9.6,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 370.0,
      "calcium": 120.0,
      "iron": 1.3,
      "vitA": 18.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp087",
    "code": "GP087",
    "name": "Saboko gurita, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 87.0,
      "protein": 15.7,
      "fat": 1.5,
      "carbs": 2.6,
      "fiber": 0.0,
      "sodium": 200.0,
      "calcium": 60.0,
      "iron": 2.1,
      "vitA": 38.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp088",
    "code": "GP088",
    "name": "Saboko saltan, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 113.0,
      "protein": 17.1,
      "fat": 3.6,
      "carbs": 3.0,
      "fiber": 0.0,
      "sodium": 40.0,
      "calcium": 240.0,
      "iron": 0.5,
      "vitA": 27.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp089",
    "code": "GP089",
    "name": "Saboko sardin, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 110.0,
      "protein": 12.9,
      "fat": 4.3,
      "carbs": 4.9,
      "fiber": 0.0,
      "sodium": 200.0,
      "calcium": 220.0,
      "iron": 6.0,
      "vitA": 37.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp090",
    "code": "GP090",
    "name": "Sate Bandeng",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 283.0,
      "protein": 12.1,
      "fat": 16.8,
      "carbs": 20.9,
      "fiber": 2.0,
      "sodium": 543.0,
      "calcium": 118.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp091",
    "code": "GP091",
    "name": "Sepi, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 88.0,
      "protein": 7.9,
      "fat": 1.6,
      "carbs": 10.6,
      "fiber": 0.0,
      "sodium": 873.0,
      "calcium": 924.0,
      "iron": 2.3,
      "vitA": 783.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp092",
    "code": "GP092",
    "name": "Tekwan, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 53.0,
      "protein": 1.9,
      "fat": 0.9,
      "carbs": 9.4,
      "fiber": 0.0,
      "sodium": 174.0,
      "calcium": 9.0,
      "iron": 1.0,
      "vitA": 99.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp093",
    "code": "GP093",
    "name": "Teri belado, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 365.0,
      "protein": 23.7,
      "fat": 22.3,
      "carbs": 17.5,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 869.0,
      "iron": 4.0,
      "vitA": 27.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp094",
    "code": "GP094",
    "name": "Tumis bandeng, masakan",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 189.0,
      "protein": 11.3,
      "fat": 15.7,
      "carbs": 0.6,
      "fiber": 0.0,
      "sodium": 314.0,
      "calcium": 56.0,
      "iron": 0.4,
      "vitA": 579.0,
      "vitC": 0.0
    }
  },
  {
    "id": "gp095",
    "code": "GP095",
    "name": "Tumis keumamah",
    "category": "Ikan, Seafood & Olahan",
    "n": {
      "energy": 300.0,
      "protein": 14.5,
      "fat": 20.0,
      "carbs": 15.5,
      "fiber": 4.5,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 7.0
    }
  },
  {
    "id": "hr001",
    "code": "HR001",
    "name": "Telur ayam kampung, segar",
    "category": "Telur & Olahan",
    "n": {
      "energy": 174.0,
      "protein": 10.8,
      "fat": 14.0,
      "carbs": 1.2,
      "fiber": 0.0,
      "sodium": 190.0,
      "calcium": 68.0,
      "iron": 4.9,
      "vitA": 203.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hr002",
    "code": "HR002",
    "name": "Telur ayam ras, segar",
    "category": "Telur & Olahan",
    "n": {
      "energy": 154.0,
      "protein": 12.4,
      "fat": 10.8,
      "carbs": 0.7,
      "fiber": 0.0,
      "sodium": 142.0,
      "calcium": 86.0,
      "iron": 3.0,
      "vitA": 61.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hr003",
    "code": "HR003",
    "name": "Telur ayam ras, bagian kuning, segar",
    "category": "Telur & Olahan",
    "n": {
      "energy": 355.0,
      "protein": 16.3,
      "fat": 31.9,
      "carbs": 0.7,
      "fiber": 0.0,
      "sodium": 111.0,
      "calcium": 147.0,
      "iron": 7.2,
      "vitA": 606.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hr004",
    "code": "HR004",
    "name": "Telur Ayam ras,bagian putih, segar",
    "category": "Telur & Olahan",
    "n": {
      "energy": 50.0,
      "protein": 10.8,
      "fat": 0.0,
      "carbs": 0.8,
      "fiber": 0.0,
      "sodium": 164.0,
      "calcium": 6.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hr005",
    "code": "HR005",
    "name": "Telur bebek alabio, segar",
    "category": "Telur & Olahan",
    "n": {
      "energy": 187.0,
      "protein": 11.8,
      "fat": 14.2,
      "carbs": 3.0,
      "fiber": 0.0,
      "sodium": 115.0,
      "calcium": 60.0,
      "iron": 6.0,
      "vitA": 180.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hr006",
    "code": "HR006",
    "name": "Telur bebek, bagian kuning, segar",
    "category": "Telur & Olahan",
    "n": {
      "energy": 386.0,
      "protein": 17.0,
      "fat": 35.0,
      "carbs": 0.8,
      "fiber": 0.0,
      "sodium": 106.0,
      "calcium": 150.0,
      "iron": 7.0,
      "vitA": 870.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hr007",
    "code": "HR007",
    "name": "Telur bebek, bagian putih, segar",
    "category": "Telur & Olahan",
    "n": {
      "energy": 54.0,
      "protein": 11.0,
      "fat": 0.0,
      "carbs": 0.8,
      "fiber": 0.0,
      "sodium": 184.0,
      "calcium": 21.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hr008",
    "code": "HR008",
    "name": "Telur bebek tambak, segar",
    "category": "Telur & Olahan",
    "n": {
      "energy": 187.0,
      "protein": 10.9,
      "fat": 12.4,
      "carbs": 7.9,
      "fiber": 0.0,
      "sodium": 209.0,
      "calcium": 64.0,
      "iron": 5.4,
      "vitA": 378.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hr009",
    "code": "HR009",
    "name": "Telur burung maleo, segar",
    "category": "Telur & Olahan",
    "n": {
      "energy": 436.0,
      "protein": 26.5,
      "fat": 36.3,
      "carbs": 0.4,
      "fiber": 0.0,
      "sodium": 77.0,
      "calcium": 154.0,
      "iron": 4.3,
      "vitA": 3987.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hr010",
    "code": "HR010",
    "name": "Telur penyu, segar",
    "category": "Telur & Olahan",
    "n": {
      "energy": 136.0,
      "protein": 8.6,
      "fat": 10.1,
      "carbs": 2.7,
      "fiber": 0.0,
      "sodium": 478.0,
      "calcium": 66.0,
      "iron": 3.4,
      "vitA": 82.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hr011",
    "code": "HR011",
    "name": "Telur burung puyuh, segar",
    "category": "Telur & Olahan",
    "n": {
      "energy": 116.0,
      "protein": 10.7,
      "fat": 7.0,
      "carbs": 1.6,
      "fiber": 0.0,
      "sodium": 111.0,
      "calcium": 65.0,
      "iron": 3.5,
      "vitA": 95.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hp001",
    "code": "HP001",
    "name": "Telur ayam, dadar, masakan",
    "category": "Telur & Olahan",
    "n": {
      "energy": 251.0,
      "protein": 16.3,
      "fat": 19.4,
      "carbs": 1.4,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 62.0,
      "iron": 2.5,
      "vitA": 36.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hp002",
    "code": "HP002",
    "name": "Telur bebek, asin, mentah",
    "category": "Telur & Olahan",
    "n": {
      "energy": 179.0,
      "protein": 13.6,
      "fat": 13.3,
      "carbs": 4.4,
      "fiber": 0.0,
      "sodium": 483.0,
      "calcium": 120.0,
      "iron": 1.8,
      "vitA": 253.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hp003",
    "code": "HP003",
    "name": "Telur bebek, dadar, masakan",
    "category": "Telur & Olahan",
    "n": {
      "energy": 301.0,
      "protein": 20.0,
      "fat": 23.7,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 71.0,
      "iron": 9.2,
      "vitA": 122.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hp004",
    "code": "HP004",
    "name": "Ikan, telur, asin, mentah",
    "category": "Telur & Olahan",
    "n": {
      "energy": 358.0,
      "protein": 20.7,
      "fat": 26.4,
      "carbs": 9.4,
      "fiber": 0.0,
      "sodium": 2684.0,
      "calcium": 48.0,
      "iron": 15.1,
      "vitA": 1866.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hp005",
    "code": "HP005",
    "name": "Bayau mi balu, masakan",
    "category": "Telur & Olahan",
    "n": {
      "energy": 313.0,
      "protein": 6.0,
      "fat": 12.2,
      "carbs": 44.8,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 783.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hp006",
    "code": "HP006",
    "name": "Cucuru bayau, masakan",
    "category": "Telur & Olahan",
    "n": {
      "energy": 349.0,
      "protein": 6.8,
      "fat": 18.7,
      "carbs": 38.3,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "hp007",
    "code": "HP007",
    "name": "Kalio telur, masakan",
    "category": "Telur & Olahan",
    "n": {
      "energy": 193.0,
      "protein": 10.6,
      "fat": 12.4,
      "carbs": 9.7,
      "fiber": 0.0,
      "sodium": 540.0,
      "calcium": 148.0,
      "iron": 3.8,
      "vitA": 160.0,
      "vitC": 0.0
    }
  },
  {
    "id": "jr001",
    "code": "JR001",
    "name": "Kepala susu - krim, segar",
    "category": "Susu & Olahan",
    "n": {
      "energy": 204.0,
      "protein": 2.6,
      "fat": 20.0,
      "carbs": 4.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 97.0,
      "iron": 0.1,
      "vitA": 252.0,
      "vitC": 1.0
    }
  },
  {
    "id": "jr002",
    "code": "JR002",
    "name": "Susu ibu - ASI",
    "category": "Susu & Olahan",
    "n": {
      "energy": 62.0,
      "protein": 1.5,
      "fat": 3.2,
      "carbs": 7.0,
      "fiber": 0.0,
      "sodium": 15.0,
      "calcium": 34.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "jr003",
    "code": "JR003",
    "name": "Susu kambing, segar",
    "category": "Susu & Olahan",
    "n": {
      "energy": 64.0,
      "protein": 4.3,
      "fat": 2.3,
      "carbs": 6.6,
      "fiber": 0.0,
      "sodium": 35.0,
      "calcium": 98.0,
      "iron": 2.7,
      "vitA": 38.0,
      "vitC": 1.0
    }
  },
  {
    "id": "jr004",
    "code": "JR004",
    "name": "Susu kerbau, segar",
    "category": "Susu & Olahan",
    "n": {
      "energy": 160.0,
      "protein": 6.3,
      "fat": 12.0,
      "carbs": 7.1,
      "fiber": 0.0,
      "sodium": 82.0,
      "calcium": 216.0,
      "iron": 0.2,
      "vitA": 24.0,
      "vitC": 1.0
    }
  },
  {
    "id": "jr005",
    "code": "JR005",
    "name": "Susu kuda, segar",
    "category": "Susu & Olahan",
    "n": {
      "energy": 40.0,
      "protein": 2.0,
      "fat": 1.1,
      "carbs": 5.4,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "jr006",
    "code": "JR006",
    "name": "Susu sapi, segar",
    "category": "Susu & Olahan",
    "n": {
      "energy": 61.0,
      "protein": 3.2,
      "fat": 3.5,
      "carbs": 4.3,
      "fiber": 0.0,
      "sodium": 36.0,
      "calcium": 143.0,
      "iron": 1.7,
      "vitA": 39.0,
      "vitC": 1.0
    }
  },
  {
    "id": "jp001",
    "code": "JP001",
    "name": "Es krim",
    "category": "Susu & Olahan",
    "n": {
      "energy": 210.0,
      "protein": 4.0,
      "fat": 12.5,
      "carbs": 20.6,
      "fiber": 0.0,
      "sodium": 78.0,
      "calcium": 123.0,
      "iron": 0.1,
      "vitA": 158.0,
      "vitC": 1.0
    }
  },
  {
    "id": "jp002",
    "code": "JP002",
    "name": "Hangop",
    "category": "Susu & Olahan",
    "n": {
      "energy": 65.0,
      "protein": 10.0,
      "fat": 1.0,
      "carbs": 3.5,
      "fiber": 0.0,
      "sodium": 126.0,
      "calcium": 180.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "jp003",
    "code": "JP003",
    "name": "Keju",
    "category": "Susu & Olahan",
    "n": {
      "energy": 326.0,
      "protein": 22.8,
      "fat": 20.3,
      "carbs": 13.1,
      "fiber": 0.0,
      "sodium": 1410.0,
      "calcium": 777.0,
      "iron": 1.5,
      "vitA": 227.0,
      "vitC": 1.0
    }
  },
  {
    "id": "jp004",
    "code": "JP004",
    "name": "Kwark (Quark)",
    "category": "Susu & Olahan",
    "n": {
      "energy": 242.0,
      "protein": 19.0,
      "fat": 17.0,
      "carbs": 3.0,
      "fiber": 0.0,
      "sodium": 37.0,
      "calcium": 2300.0,
      "iron": 0.5,
      "vitA": 173.0,
      "vitC": 0.0
    }
  },
  {
    "id": "jp005",
    "code": "JP005",
    "name": "Susu asam untuk bayi, bubuk",
    "category": "Susu & Olahan",
    "n": {
      "energy": 418.0,
      "protein": 19.0,
      "fat": 9.0,
      "carbs": 65.5,
      "fiber": 0.0,
      "sodium": 188.0,
      "calcium": 4800.0,
      "iron": 7.0,
      "vitA": 303.0,
      "vitC": 30.0
    }
  },
  {
    "id": "jp006",
    "code": "JP006",
    "name": "Susu bubuk",
    "category": "Susu & Olahan",
    "n": {
      "energy": 513.0,
      "protein": 24.6,
      "fat": 30.0,
      "carbs": 36.2,
      "fiber": 0.0,
      "sodium": 380.0,
      "calcium": 904.0,
      "iron": 0.6,
      "vitA": 476.0,
      "vitC": 6.0
    }
  },
  {
    "id": "jp007",
    "code": "JP007",
    "name": "Susu kental manis",
    "category": "Susu & Olahan",
    "n": {
      "energy": 343.0,
      "protein": 8.2,
      "fat": 10.0,
      "carbs": 55.0,
      "fiber": 0.0,
      "sodium": 150.0,
      "calcium": 275.0,
      "iron": 0.2,
      "vitA": 155.0,
      "vitC": 1.0
    }
  },
  {
    "id": "jp008",
    "code": "JP008",
    "name": "Susu kental tak manis",
    "category": "Susu & Olahan",
    "n": {
      "energy": 138.0,
      "protein": 7.0,
      "fat": 7.9,
      "carbs": 9.9,
      "fiber": 0.0,
      "sodium": 140.0,
      "calcium": 243.0,
      "iron": 0.2,
      "vitA": 121.0,
      "vitC": 1.0
    }
  },
  {
    "id": "jp009",
    "code": "JP009",
    "name": "Susu skim, bubuk",
    "category": "Susu & Olahan",
    "n": {
      "energy": 359.0,
      "protein": 35.6,
      "fat": 1.0,
      "carbs": 52.0,
      "fiber": 0.0,
      "sodium": 470.0,
      "calcium": 1300.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 7.0
    }
  },
  {
    "id": "jp010",
    "code": "JP010",
    "name": "Susu skim, segar",
    "category": "Susu & Olahan",
    "n": {
      "energy": 36.0,
      "protein": 3.5,
      "fat": 0.1,
      "carbs": 5.1,
      "fiber": 0.0,
      "sodium": 38.0,
      "calcium": 123.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 1.0
    }
  },
  {
    "id": "jp011",
    "code": "JP011",
    "name": "Yoghurt, segar",
    "category": "Susu & Olahan",
    "n": {
      "energy": 52.0,
      "protein": 3.3,
      "fat": 2.5,
      "carbs": 4.0,
      "fiber": 0.0,
      "sodium": 40.0,
      "calcium": 120.0,
      "iron": 0.1,
      "vitA": 22.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kr001",
    "code": "KR001",
    "name": "Kelapa setengah tua, daging, segar",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 180.0,
      "protein": 4.0,
      "fat": 15.0,
      "carbs": 10.0,
      "fiber": 2.4,
      "sodium": 4.0,
      "calcium": 1.0,
      "iron": 1.3,
      "vitA": 10.0,
      "vitC": 4.0
    }
  },
  {
    "id": "kr002",
    "code": "KR002",
    "name": "Kelapa tua, daging, segar",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 359.0,
      "protein": 3.4,
      "fat": 34.7,
      "carbs": 14.0,
      "fiber": 4.7,
      "sodium": 3.0,
      "calcium": 121.0,
      "iron": 2.0,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "kr003",
    "code": "KR003",
    "name": "Lemak babi (lard)",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 902.0,
      "protein": 0.0,
      "fat": 100.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kr004",
    "code": "KR004",
    "name": "Lemak babi (bacon)",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 626.0,
      "protein": 9.1,
      "fat": 65.0,
      "carbs": 1.1,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 13.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kr005",
    "code": "KR005",
    "name": "Lemak ikan",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 372.0,
      "protein": 12.0,
      "fat": 29.4,
      "carbs": 14.4,
      "fiber": 0.0,
      "sodium": 60.0,
      "calcium": 20.0,
      "iron": 32.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kr006",
    "code": "KR006",
    "name": "Lemak kerbau (lemak sapi)",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 818.0,
      "protein": 1.5,
      "fat": 90.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 29.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kr007",
    "code": "KR007",
    "name": "Minyak hiu, hati",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 902.0,
      "protein": 0.0,
      "fat": 100.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 21212.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kr008",
    "code": "KR008",
    "name": "Minyak ikan",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 902.0,
      "protein": 0.0,
      "fat": 100.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 24242.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kr009",
    "code": "KR009",
    "name": "Minyak kacang tanah",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 902.0,
      "protein": 0.0,
      "fat": 100.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kr010",
    "code": "KR010",
    "name": "Minyak kedelai",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 883.0,
      "protein": 0.0,
      "fat": 99.9,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kr011",
    "code": "KR011",
    "name": "Minyak kelapa",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 870.0,
      "protein": 1.0,
      "fat": 98.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 1.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kr012",
    "code": "KR012",
    "name": "Minyak kelapa sawit",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 884.0,
      "protein": 0.0,
      "fat": 100.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 0.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kr013",
    "code": "KR013",
    "name": "Minyak wijen",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 881.0,
      "protein": 0.2,
      "fat": 99.7,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 2.0,
      "calcium": 10.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kr014",
    "code": "KR014",
    "name": "Minyak zaitun",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 884.0,
      "protein": 0.0,
      "fat": 100.0,
      "carbs": 0.0,
      "fiber": 0.0,
      "sodium": 7.0,
      "calcium": 14.0,
      "iron": 1.2,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kp001",
    "code": "KP001",
    "name": "Margarin",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 720.0,
      "protein": 0.6,
      "fat": 81.0,
      "carbs": 0.4,
      "fiber": 0.0,
      "sodium": 760.0,
      "calcium": 20.0,
      "iron": 0.0,
      "vitA": 606.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kp002",
    "code": "KP002",
    "name": "Mentega",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 742.0,
      "protein": 0.5,
      "fat": 81.6,
      "carbs": 1.4,
      "fiber": 0.0,
      "sodium": 653.0,
      "calcium": 15.0,
      "iron": 1.1,
      "vitA": 1000.0,
      "vitC": 0.0
    }
  },
  {
    "id": "kp003",
    "code": "KP003",
    "name": "Santan (dengan air)",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 122.0,
      "protein": 2.0,
      "fat": 10.0,
      "carbs": 7.6,
      "fiber": 1.4,
      "sodium": 9.0,
      "calcium": 25.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "kp004",
    "code": "KP004",
    "name": "Santan murni",
    "category": "Minyak & Lemak",
    "n": {
      "energy": 324.0,
      "protein": 4.2,
      "fat": 34.3,
      "carbs": 5.6,
      "fiber": 0.0,
      "sodium": 18.0,
      "calcium": 114.0,
      "iron": 1.9,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "mp001",
    "code": "MP001",
    "name": "Coklat manis, batang",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 527.0,
      "protein": 2.0,
      "fat": 29.8,
      "carbs": 62.7,
      "fiber": 6.5,
      "sodium": 6.0,
      "calcium": 63.0,
      "iron": 0.0,
      "vitA": 30.0,
      "vitC": 0.0
    }
  },
  {
    "id": "mp002",
    "code": "MP002",
    "name": "Coklat pahit,batang",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 615.0,
      "protein": 5.5,
      "fat": 52.9,
      "carbs": 29.2,
      "fiber": 10.8,
      "sodium": 20.0,
      "calcium": 98.0,
      "iron": 4.4,
      "vitA": 60.0,
      "vitC": 0.0
    }
  },
  {
    "id": "mp003",
    "code": "MP003",
    "name": "Coklat susu, batang",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 565.0,
      "protein": 9.0,
      "fat": 35.0,
      "carbs": 53.6,
      "fiber": 3.4,
      "sodium": 100.0,
      "calcium": 200.0,
      "iron": 2.0,
      "vitA": 30.0,
      "vitC": 0.0
    }
  },
  {
    "id": "mp004",
    "code": "MP004",
    "name": "Coklat bubuk",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 311.0,
      "protein": 8.0,
      "fat": 23.8,
      "carbs": 48.9,
      "fiber": 32.6,
      "sodium": 0.0,
      "calcium": 125.0,
      "iron": 11.6,
      "vitA": 30.0,
      "vitC": 0.0
    }
  },
  {
    "id": "mp005",
    "code": "MP005",
    "name": "Gula aren",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 368.0,
      "protein": 0.0,
      "fat": 0.0,
      "carbs": 92.0,
      "fiber": 0.0,
      "sodium": 15.0,
      "calcium": 175.0,
      "iron": 3.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "mp006",
    "code": "MP006",
    "name": "Gula kelapa",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 386.0,
      "protein": 3.0,
      "fat": 10.0,
      "carbs": 76.0,
      "fiber": 0.0,
      "sodium": 2.0,
      "calcium": 176.0,
      "iron": 2.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "mp007",
    "code": "MP007",
    "name": "Gula putih",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 394.0,
      "protein": 0.0,
      "fat": 0.0,
      "carbs": 94.0,
      "fiber": 0.0,
      "sodium": 1.0,
      "calcium": 0.0,
      "iron": 0.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "mp008",
    "code": "MP008",
    "name": "Jam, selai",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 239.0,
      "protein": 0.5,
      "fat": 0.6,
      "carbs": 64.5,
      "fiber": 1.0,
      "sodium": 30.0,
      "calcium": 20.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "mp009",
    "code": "MP009",
    "name": "Kopi bubuk instant",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 129.0,
      "protein": 12.3,
      "fat": 0.5,
      "carbs": 35.0,
      "fiber": 0.0,
      "sodium": 72.0,
      "calcium": 179.0,
      "iron": 5.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "mp010",
    "code": "MP010",
    "name": "Madu",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 294.0,
      "protein": 0.3,
      "fat": 0.0,
      "carbs": 79.5,
      "fiber": 0.2,
      "sodium": 6.0,
      "calcium": 0.0,
      "iron": 0.9,
      "vitA": 0.0,
      "vitC": 4.0
    }
  },
  {
    "id": "mp011",
    "code": "MP011",
    "name": "Markisa squash",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 217.0,
      "protein": 2.5,
      "fat": 1.0,
      "carbs": 49.6,
      "fiber": 0.0,
      "sodium": 14.0,
      "calcium": 0.0,
      "iron": 0.6,
      "vitA": 75.0,
      "vitC": 14.0
    }
  },
  {
    "id": "mp012",
    "code": "MP012",
    "name": "Markisa squash, BD",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 104.0,
      "protein": 1.2,
      "fat": 0.5,
      "carbs": 23.7,
      "fiber": 0.0,
      "sodium": 40.0,
      "calcium": 0.0,
      "iron": 0.5,
      "vitA": 40.0,
      "vitC": 12.0
    }
  },
  {
    "id": "mp013",
    "code": "MP013",
    "name": "Melase",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 276.0,
      "protein": 0.0,
      "fat": 0.1,
      "carbs": 71.0,
      "fiber": 0.0,
      "sodium": 14.0,
      "calcium": 0.0,
      "iron": 0.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "mp014",
    "code": "MP014",
    "name": "Sirup",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 213.0,
      "protein": 0.0,
      "fat": 0.0,
      "carbs": 55.0,
      "fiber": 0.0,
      "sodium": 3.0,
      "calcium": 1.0,
      "iron": 0.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "mp015",
    "code": "MP015",
    "name": "Sirup pirous",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 228.0,
      "protein": 0.2,
      "fat": 0.4,
      "carbs": 55.9,
      "fiber": 0.0,
      "sodium": 3.0,
      "calcium": 470.0,
      "iron": 29.5,
      "vitA": 0.0,
      "vitC": 8.0
    }
  },
  {
    "id": "mp016",
    "code": "MP016",
    "name": "Teh hijau daun kering",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 300.0,
      "protein": 28.3,
      "fat": 4.8,
      "carbs": 53.6,
      "fiber": 9.6,
      "sodium": 60.0,
      "calcium": 245.0,
      "iron": 18.9,
      "vitA": 0.0,
      "vitC": 230.0
    }
  },
  {
    "id": "mp017",
    "code": "MP017",
    "name": "Teh hitam daun kering",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 293.0,
      "protein": 24.5,
      "fat": 2.8,
      "carbs": 58.8,
      "fiber": 8.7,
      "sodium": 50.0,
      "calcium": 327.0,
      "iron": 24.3,
      "vitA": 0.0,
      "vitC": 9.0
    }
  },
  {
    "id": "mp018",
    "code": "MP018",
    "name": "Teh melati daun kering",
    "category": "Gula & Konfeksioneri",
    "n": {
      "energy": 299.0,
      "protein": 24.1,
      "fat": 3.5,
      "carbs": 59.0,
      "fiber": 9.7,
      "sodium": 70.0,
      "calcium": 320.0,
      "iron": 31.6,
      "vitA": 0.0,
      "vitC": 85.0
    }
  },
  {
    "id": "nr001",
    "code": "NR001",
    "name": "Asam arang coklat, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 130.0,
      "protein": 0.5,
      "fat": 1.1,
      "carbs": 30.9,
      "fiber": 1.5,
      "sodium": 13.0,
      "calcium": 79.0,
      "iron": 4.3,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "nr002",
    "code": "NR002",
    "name": "Asam arang merah, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 99.0,
      "protein": 0.8,
      "fat": 1.6,
      "carbs": 20.3,
      "fiber": 2.8,
      "sodium": 2.0,
      "calcium": 69.0,
      "iron": 4.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "nr003",
    "code": "NR003",
    "name": "Asan kandis, kering",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 261.0,
      "protein": 0.9,
      "fat": 1.6,
      "carbs": 63.3,
      "fiber": 5.0,
      "sodium": 26.0,
      "calcium": 2192.0,
      "iron": 4.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "nr004",
    "code": "NR004",
    "name": "Asam kandis, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 75.0,
      "protein": 0.2,
      "fat": 1.1,
      "carbs": 16.1,
      "fiber": 3.4,
      "sodium": 93.0,
      "calcium": 63.0,
      "iron": 2.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "nr005",
    "code": "NR005",
    "name": "Asam masak pohon, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 267.0,
      "protein": 2.8,
      "fat": 0.6,
      "carbs": 62.5,
      "fiber": 1.2,
      "sodium": 9.0,
      "calcium": 74.0,
      "iron": 0.6,
      "vitA": 30.0,
      "vitC": 2.0
    }
  },
  {
    "id": "nr006",
    "code": "NR006",
    "name": "Asam payak, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 135.0,
      "protein": 0.8,
      "fat": 0.4,
      "carbs": 32.1,
      "fiber": 10.0,
      "sodium": 0.0,
      "calcium": 60.0,
      "iron": 5.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "nr007",
    "code": "NR007",
    "name": "Bawang merah, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 46.0,
      "protein": 1.5,
      "fat": 0.3,
      "carbs": 9.2,
      "fiber": 1.7,
      "sodium": 7.0,
      "calcium": 136.0,
      "iron": 0.8,
      "vitA": 0.0,
      "vitC": 2.0
    }
  },
  {
    "id": "nr008",
    "code": "NR008",
    "name": "Bawang putih, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 112.0,
      "protein": 4.5,
      "fat": 0.2,
      "carbs": 23.1,
      "fiber": 0.6,
      "sodium": 46.0,
      "calcium": 42.0,
      "iron": 1.0,
      "vitA": 0.0,
      "vitC": 15.0
    }
  },
  {
    "id": "nr009",
    "code": "NR009",
    "name": "Boros kunci, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 40.0,
      "protein": 1.0,
      "fat": 0.8,
      "carbs": 7.2,
      "fiber": 1.0,
      "sodium": 33.0,
      "calcium": 150.0,
      "iron": 2.0,
      "vitA": 5000.0,
      "vitC": 50.0
    }
  },
  {
    "id": "nr010",
    "code": "NR010",
    "name": "Boros laja (lengkuas), segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 26.0,
      "protein": 1.0,
      "fat": 0.3,
      "carbs": 4.7,
      "fiber": 1.1,
      "sodium": 24.0,
      "calcium": 150.0,
      "iron": 2.0,
      "vitA": 5000.0,
      "vitC": 50.0
    }
  },
  {
    "id": "nr011",
    "code": "NR011",
    "name": "Cabai gembor merah, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 38.0,
      "protein": 1.6,
      "fat": 0.8,
      "carbs": 6.3,
      "fiber": 1.6,
      "sodium": 7.0,
      "calcium": 49.0,
      "iron": 1.1,
      "vitA": 3240.0,
      "vitC": 16.0
    }
  },
  {
    "id": "nr012",
    "code": "NR012",
    "name": "Cabai hijau, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 26.0,
      "protein": 0.7,
      "fat": 0.3,
      "carbs": 5.2,
      "fiber": 2.6,
      "sodium": 7.0,
      "calcium": 14.0,
      "iron": 0.4,
      "vitA": 260.0,
      "vitC": 84.0
    }
  },
  {
    "id": "nr013",
    "code": "NR013",
    "name": "Cabai merah, kering",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 367.0,
      "protein": 15.9,
      "fat": 6.2,
      "carbs": 61.8,
      "fiber": 26.9,
      "sodium": 25.0,
      "calcium": 160.0,
      "iron": 2.3,
      "vitA": 576.0,
      "vitC": 50.0
    }
  },
  {
    "id": "nr014",
    "code": "NR014",
    "name": "Cabai merah, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 36.0,
      "protein": 1.0,
      "fat": 0.3,
      "carbs": 7.3,
      "fiber": 1.4,
      "sodium": 23.0,
      "calcium": 29.0,
      "iron": 0.5,
      "vitA": 470.0,
      "vitC": 18.0
    }
  },
  {
    "id": "nr015",
    "code": "NR015",
    "name": "Cabai rawit, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 120.0,
      "protein": 4.7,
      "fat": 2.4,
      "carbs": 19.9,
      "fiber": 15.2,
      "sodium": 34.0,
      "calcium": 45.0,
      "iron": 2.5,
      "vitA": 11050.0,
      "vitC": 70.0
    }
  },
  {
    "id": "nr016",
    "code": "NR016",
    "name": "Cengkeh, kering",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 330.0,
      "protein": 5.2,
      "fat": 8.9,
      "carbs": 57.4,
      "fiber": 10.0,
      "sodium": 282.0,
      "calcium": 740.0,
      "iron": 4.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "nr017",
    "code": "NR017",
    "name": "Daun salam, bubuk",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 301.0,
      "protein": 14.2,
      "fat": 10.9,
      "carbs": 49.0,
      "fiber": 9.4,
      "sodium": 180.0,
      "calcium": 86.0,
      "iron": 44.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "nr018",
    "code": "NR018",
    "name": "Jahe, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 51.0,
      "protein": 1.5,
      "fat": 1.0,
      "carbs": 10.1,
      "fiber": 12.0,
      "sodium": 12.0,
      "calcium": 21.0,
      "iron": 1.6,
      "vitA": 9.0,
      "vitC": 4.0
    }
  },
  {
    "id": "nr019",
    "code": "NR019",
    "name": "Kemiri",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 675.0,
      "protein": 19.0,
      "fat": 63.0,
      "carbs": 8.0,
      "fiber": 3.0,
      "sodium": 25.0,
      "calcium": 380.0,
      "iron": 2.0,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "nr020",
    "code": "NR020",
    "name": "Ketumbar, kering",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 418.0,
      "protein": 14.1,
      "fat": 16.1,
      "carbs": 54.2,
      "fiber": 12.3,
      "sodium": 91.0,
      "calcium": 630.0,
      "iron": 17.9,
      "vitA": 1570.0,
      "vitC": 0.0
    }
  },
  {
    "id": "nr021",
    "code": "NR021",
    "name": "Kluwek",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 310.0,
      "protein": 10.0,
      "fat": 24.0,
      "carbs": 13.5,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 40.0,
      "iron": 2.0,
      "vitA": 0.0,
      "vitC": 30.0
    }
  },
  {
    "id": "nr022",
    "code": "NR022",
    "name": "Kunyit, segar",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 69.0,
      "protein": 2.0,
      "fat": 2.7,
      "carbs": 9.1,
      "fiber": 0.6,
      "sodium": 6.0,
      "calcium": 24.0,
      "iron": 3.3,
      "vitA": 0.0,
      "vitC": 1.0
    }
  },
  {
    "id": "nr023",
    "code": "NR023",
    "name": "Merica, kering",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 365.0,
      "protein": 11.5,
      "fat": 6.8,
      "carbs": 64.4,
      "fiber": 1.0,
      "sodium": 4.0,
      "calcium": 460.0,
      "iron": 16.4,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "nr024",
    "code": "NR024",
    "name": "Pala, biji, kering",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 518.0,
      "protein": 7.5,
      "fat": 36.4,
      "carbs": 40.1,
      "fiber": 3.5,
      "sodium": 2.0,
      "calcium": 120.0,
      "iron": 4.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "np001",
    "code": "NP001",
    "name": "Balichong",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 152.0,
      "protein": 13.2,
      "fat": 0.8,
      "carbs": 22.9,
      "fiber": 1.5,
      "sodium": 120.0,
      "calcium": 380.0,
      "iron": 2.9,
      "vitA": 34.0,
      "vitC": 0.0
    }
  },
  {
    "id": "np002",
    "code": "NP002",
    "name": "Bekasam",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 116.0,
      "protein": 11.9,
      "fat": 4.9,
      "carbs": 6.1,
      "fiber": 3.5,
      "sodium": 711.0,
      "calcium": 704.0,
      "iron": 7.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "np003",
    "code": "NP003",
    "name": "Bekasang",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 78.0,
      "protein": 11.4,
      "fat": 2.0,
      "carbs": 3.6,
      "fiber": 0.4,
      "sodium": 4016.0,
      "calcium": 54.0,
      "iron": 2.6,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "np004",
    "code": "NP004",
    "name": "Cuka",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 21.0,
      "protein": 0.1,
      "fat": 0.1,
      "carbs": 5.0,
      "fiber": 0.0,
      "sodium": 21.0,
      "calcium": 0.0,
      "iron": 0.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "np005",
    "code": "NP005",
    "name": "Kecap",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 71.0,
      "protein": 5.7,
      "fat": 1.3,
      "carbs": 9.0,
      "fiber": 0.0,
      "sodium": 1114.0,
      "calcium": 123.0,
      "iron": 5.7,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "np006",
    "code": "NP006",
    "name": "Petis ikan",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 165.0,
      "protein": 20.0,
      "fat": 0.2,
      "carbs": 20.8,
      "fiber": 0.0,
      "sodium": 0.0,
      "calcium": 337.0,
      "iron": 2.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "np007",
    "code": "NP007",
    "name": "Petis udang kering",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 345.0,
      "protein": 23.8,
      "fat": 1.4,
      "carbs": 59.3,
      "fiber": 0.0,
      "sodium": 11998.0,
      "calcium": 221.0,
      "iron": 3.8,
      "vitA": 232.0,
      "vitC": 0.0
    }
  },
  {
    "id": "np008",
    "code": "NP008",
    "name": "Petis udang pasta",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 220.0,
      "protein": 15.0,
      "fat": 0.9,
      "carbs": 38.0,
      "fiber": 2.3,
      "sodium": 7981.0,
      "calcium": 37.0,
      "iron": 2.8,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "np009",
    "code": "NP009",
    "name": "Saos tomat",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 110.0,
      "protein": 2.0,
      "fat": 0.4,
      "carbs": 24.5,
      "fiber": 0.9,
      "sodium": 890.0,
      "calcium": 12.0,
      "iron": 0.8,
      "vitA": 570.0,
      "vitC": 11.0
    }
  },
  {
    "id": "np010",
    "code": "NP010",
    "name": "Tempoya",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 110.0,
      "protein": 1.7,
      "fat": 1.3,
      "carbs": 21.9,
      "fiber": 2.6,
      "sodium": 597.0,
      "calcium": 5190.0,
      "iron": 2.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "np011",
    "code": "NP011",
    "name": "Terasi",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 155.0,
      "protein": 22.3,
      "fat": 2.9,
      "carbs": 9.9,
      "fiber": 2.7,
      "sodium": 1664.0,
      "calcium": 3812.0,
      "iron": 78.5,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "np012",
    "code": "NP012",
    "name": "Terasi dobo",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 191.0,
      "protein": 33.1,
      "fat": 3.6,
      "carbs": 6.6,
      "fiber": 1.6,
      "sodium": 650.0,
      "calcium": 2250.0,
      "iron": 22.9,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "np013",
    "code": "NP013",
    "name": "Terasi merah",
    "category": "Bumbu & Olahan",
    "n": {
      "energy": 174.0,
      "protein": 30.0,
      "fat": 3.5,
      "carbs": 5.6,
      "fiber": 2.2,
      "sodium": 7850.0,
      "calcium": 100.0,
      "iron": 3.1,
      "vitA": 0.0,
      "vitC": 0.0
    }
  },
  {
    "id": "qr001",
    "code": "QR001",
    "name": "Kelapa muda, air, segar",
    "category": "Minuman",
    "n": {
      "energy": 16.0,
      "protein": 0.1,
      "fat": 0.4,
      "carbs": 3.0,
      "fiber": 0.0,
      "sodium": 1.0,
      "calcium": 15.0,
      "iron": 0.2,
      "vitA": 0.0,
      "vitC": 1.0
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = foods;
}
