const data = [{
        state: "Andhra Pradesh",
        cities: [{
            name: "Amaravati",
            areas: ["Amaravati", "Mangalagiri", "Tadepalle", "Guntur", "Vemuru", "Tenali", "Bapatla", "Ponnur", "Repalle", "Chirala", "Bhattiprolu", "Duggirala", "Amaravati", "Gannavaram", "Tadikonda", "Muppalla", "Dachepalle", "Gudivada", "Challapalle", "Nandigama", "Thullur", "Vuyyuru", "Guntakal", "Tadepalligudem", "Eluru", "Kovvur", "Nuzvid", "Gajuwaka", "Srikakulam", "Vizianagaram", "Visakhapatnam", "Anakapalle", "Kakinada", "Rajahmundry", "Eluru", "Tadepalle", "Chilakaluripet", "Narasaraopet", "Chirala", "Bapatla", "Ongole", "Nellore", "Gudur", "Venkatagiri", "Srikalahasti", "Tirupati", "Chittoor", "Madanapalle", "Palamaner", "Punganur", "Puttur", "Renigunta", "Tiruttani", "Vaniyambadi", "Gudiyatham", "Vellore", "Ambur", "Arcot", "Gudiyatham", "Katpadi", "Walajapet", "Arakkonam", "Chengalpattu", "Kanchipuram", "Melmaruvathur", "Sriperumbudur", "Tambaram", "Tirukalukundram", "Tiruporur", "Uthiramerur", "Vandalur", "Chennai", "Coimbatore", "Cuddalore", "Dindigul", "Erode", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "TheNilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Theni", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvarur", "Tuticorin", "Vellore", "Viluppuram", "Virudhunagar", ]
        }, {
            name: "Anantapur",
            areas: ["Anantapur", "Guntakal", "Tadpatri", "Dharmavaram", "Hindupur", "Kadiri", "Puttaparthi", "Penukonda", "Rayadurg", "Uravakonda", ]
        }, {
            name: "Chittoor",
            areas: ["Agaram", "Alur", "Amadagur", "Ammavarikuppam", "Anantasagaram", "Angalakuduru", "Arkalgud", "Arvi", "Athmakur", "Atmakur", "Avutapalle", "Bandarupalle", "Bangarupalem", "Bapatla", "Bestavaripeta", "Bethamcherla", "Betamcherla", "Bommali", "Buchireddipalem", "Buddireddypalle", "BulusuSamudram", "Chandragiri", "ChandragiriFort", "Chengalur", "Chigicherla", "Chinnaganjam", "Chittoor", "ChittoorCourt", "ChittoorRS", "Chowdepalle", "ChowdepalleBazar", "ChowdepalleMarket", "ChowdepalleRS", "ChowdepalleTown", "Damalcheruvu", "DamalcheruvuRS", "Devanakonda", "DommaraNandyal", "DravidianUniversity", "DwarakaTirumala", "Edarikatte", "Ekambarakuppam", "Elurupadu", "Gangavaram", "Gangireddypalle", "Gauribidanur", "Gudupalle", "GudupalleRS", "GudupalleTown", "GudupalleVillage", "GudupalleVillageAndPost", "Guduru", "GuduruRS", "Guindy", "Gurramkonda", "Irala", "Jammalamadugu", "Jammikunta", "Kadapa", "Kadiri", "Kalikiri", "KalikiriRS", "KalikiriTown", "KalikiriVillage", "Kalugondla", "Kamalapuram", "KamalapuramTown", "Kanaganapalle", "Kandukur", "KandukurRS", "KandukurTown", "Karempudi", "Katpadi", "KatpadiRoad", "Kemmangundla", "Kodur", "KodurRS", "Kondamallepalle", "Kondapuram", "Kondaveedu", "Konijerla", "Kothacheruvu", "KothacheruvuRS", "Kothapalle", "Kothapeta", "Kottamcherla", "Kovur", "KovurRS", "Kuppam", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kuravapalle", "Kuravarapukota", "KuravarapukotaRS", "KuravarapukotaTown", "Kurichedu", "Kuripalle", "Kurivikulam", "KurivikulamRS", "KurivikulamTown", "KurivikulamVillage", "KurivikulamVillageAndPost", "KuppamCourt", "KuppamRS", "KuppamTown", "KuppamVillage", "Kurabalakota", "Kuravanpalem", "Kur", ]
        }, {
            name: "Eluru",
            areas: ["Eluru", "DwarakaTirumala", "Gannavaram", "Gopalapuram", "JangareddyGudem", "Kovvur", "Machilipatnam", "Nidadavole", "Pedana", "Penamaluru", "Tadepalle", "Tanuku", "Vatlur", "Veeravasaram", "Yelamanchili", ]
        }, {
            name: "Guntakal",
            areas: ["Anantapur", "Chittoor", "Cuddapah", "EastGodavari", "Guntur", "Hyderabad", "Kadapa", "Krishna", "Kurnool", "Nalgonda", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "WestGodavari", ]
        }, {
            name: "Guntur",
            areas: ["Amaravati", "Bapatla", "Chilakaluripet", "Dachepalli", "Duggirala", "Guntur", "Gurazala", "Iragavaram", "Karampudi", "Kollipara", "Kollur", "Korukollu", "Krosuru", "Machavaram", "Macherla", "Mangalagiri", "Medikonduru", "Nagaram", "Narasaraopet", "Narsaraopet", "Pedakakani", "Pedakurapadu", "Pedanandipadu", "Piduguralla", "Ponnur", "Rajupalem", "Rentachintala", "Repalle", "Sattenapalle", "Savalyapuram", "Tadepalle", "Tadepalli", "Tenali", "Tullur", "Vatticherukuru", "Vinukonda", "Yarada", ]
        }, {
            name: "Kadapa",
            areas: ["Kadapa", "Mylavaram", "Proddatur", "Rayachoti", "Jammalamadugu", "Kamalapuram", "Vempalle", "Pulivendla", "Rajampet", "Badvel", "Sidhout", "Vontimitta", "Kodur", "Thandur", "Yerraguntla", "Penagalur", "Veeraballi", "Sambepalle", "Duddedu", "Simhadripuram", "Vallur", "Veerapunayunipalle", "Chakrayapeta", "Galiveedu", "Kamalapuram", "Chinnamandem", "Dharur", "Gopavaram", "Jammalamadugu", "Kalasapadu", "Lakkireddipalle", "Lingala", "Muddanur", "Nagireddipalle", "Rayachoti", "Thondur", "Vempalle", "Vemula", "Vontimitta", "Yerraguntla", "", ]
        }, {
            name: "Kakinada",
            areas: ["Kakinada", "KakinadaRural", "Peddapuram", "Tuni", "Samalkota", "Pithapuram", "Amalapuram", "Rajahmundry", "Ramachandrapuram", "Gollaprolu", "Mandapeta", "Mummidivaram", "Yanam", "Kothapeta", "Gandepalle", "Gannavaram", "Palakollu", "Akiveedu", "Attili", "Bheemunipatnam", "Chodavaram", "Devarapalle", "Anakapalle", "Anandapuram", "Yelamanchili", "DwarakaTirumala", "Gajuwaka", "Visakhapatnam", "VisakhapatnamRural", "Chipurupalle", "Pendurthi", "Anakapalle", "Bhimunipatnam", "Chodavaram", "Devarapalle", "Elamanchili", "Gajuwaka", "Gangavaram", "Visakhapatnam", "VisakhapatnamRural", "Pendurthi", "Anakapalle", "Bhimunipatnam", "Chodavaram", "Devarapalle", "Elamanchili", "Gajuwaka", "Gangavaram", "", ]
        }, {
            name: "Khammam",
            areas: ["Khammam", "Kothagudem", "Mahabubabad", "Suryapet", "Miryalaguda", "Nalgonda", "YadadriBhuvanagiri", "Hanamkonda", "Warangal", "Karimnagar", "Jagtial", "Peddapalli", "Ramagundam", "Mancherial", "Nizamabad", "Adilabad", "Siddipet", "Medchal", "Secunderabad", "Hyderabad", "Rangareddy", "Vikarabad", "Mahbubnagar", ]
        }, {
            name: "Kurnool",
            areas: ["Kurnool", "Allagadda", "Atmakur", "Gadivemula", "Gudur", "Dhone", "Kallur", "Dhone", "Kamalapuram", "Kodumur", "Kosigi", "Mantralayam", "Nandikotkur", "Pattikonda", "Pebbair", "PeddaKadubur", "Peddakadabur", "Penukonda", "Adoni", "Allagadda", "Alur", "Aspari", "Atmakur", "Badvel", "BandiAtmakur", "Banaganapalle", "Banganapalle", "Bethamcherla", "Bethamcherla", "Bhairavunipadu", "BhavaniKadapa", "Bhootpur", "BKothakota", "Bollapalle", "Bollikunta", "Brahmamgarimatham", "BuggaReddiGudem", "Bukkapatnam", "Bukkarayasamudram", "Bukkarayasamudram", "Burugupalle", "Challavaripalle", "Chamala", "Chandur", "Chandur", "Chinnamandem", "Chippagiri", "Chippagiri", "Chirala", "Chitvel", "Chityal", "Dachepalle", "Dornipadu", "Dowlaiswaram", "Duggirala", "Durgi", "Duttaluru", "Duttaluru", "Edlapadu", "Gadivemula", "Gajularega", "Giddalur", "Gooty", "Gooty", "Gorantla", "Gudibanda", "Gudur", "Gudur", "Gutti", "Gutti", "Gutti", "HanumanJunction", "Jammalamadugu", "Jammalamadugu", "Jangamaheswarapuram", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", "Kadapa", ]
        }, {
            name: "Machilipatnam",
            areas: ["Manginapudi", "Challapudi", "Gudivada", "Bapatla", "Chirala", "Repalle", "Tenali", "Guntur", "Narasaraopet", "Sattenapalle", "Vinukonda", "Chilakaluripet", "Ponnur", "Bhattiprolu", "Amalapuram", "Kakinada", "Rajahmundry", "Eluru", "Tadepalligudem", "Tanuku", "Bhimavaram", "Palakollu", "Kovvur", "Nidadavole", "Achanta", "Palusapati", "Gannavaram", "Gudlavalleru", "Vuyyuru", "Machilipatnam", ]
        }, {
            name: "Narasaraopet",
            areas: ["Naguluppalapadu", "Tummalapadu", "Dachepalli", "Gooty", "Guntakal", "Vinukonda", "Narasaraopet", "Bapatla", "Chirala", "Ongole", "Tenali", "Gudivada", "Machilipatnam", "Mandapeta", "Tadepalligudem", "Rajahmundry", "Kakinada", "Eluru", "Vijayawada", "Guntur", "Nellore", "Tirupati", "Kadapa", "Kurnool", "Anantapur", "Chittoor", "Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Indore", "Bhopal", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Jamshedpur", "Thiruvananthapuram", "Solapur", "HubballiDharwad", "Mysore", "Malappuram", "Tiruchirappalli", "Bareilly", "Aligarh", "Gulbarga", "Moradabad", "Raipur", "Kota", "Guwahati", "Chandigarh", "Thane", "Solapur", "Jodhpur", "Madurai", "Warangal", "HubliDharwad", "Mangalore", "Ajmer", "Gwalior", "Vijayawada", "Jammu", "Srinagar", "Asansol", "Durgapur", "Amritsar", "Allahabad", "Howrah", "Jabalpur", "Gwalior", "Vijayawada", "Jammu", "Srinagar", "Asansol", "Durgapur", "Amritsar", "Allahabad", "Howrah", ]
        }, {
            name: "Nellore",
            areas: ["Nellore", "Gudur", "Venkatagiri", "Kavali", "Atmakur", "Kovur", "Podalakur", "Vidavalur", "Gudur", "BoggavarapuKothaPuram", "Guntur", "Sullurupeta", "Allur", "Ananthasagaram", "Bitragunta", "Chillakur", "Doravarisatram", "Gudur", "Indukurpet", "Jonnalagadda", "Kaligiri", "Kavali", "Kodavalur", "Krishnapatnam", "Kulamangalam", "Maddipadu", "Naidupet", "Nellore", "Nellikuppam", "Puthalapattu", "Rapur", "Sarvepalli", "Sullurpeta", "Venkatachalam", "Venkatagiri", "Vakadu", "Varikuntapadu", "Vedayapalem", "Vidavalur", "Vinjamur", ]
        }, {
            name: "Ongole",
            areas: ["Ramnagar", "Kothapatnam", "Chirala", "Prakasam", "Addanki", "Darsi", "Markapuram", "Giddalur", "Kandukur", "Chimakurthy", "Kanigiri", "Cumbum", "Guntur", "Bapatla", "Chilakaluripet", "Narasaraopet", "Vinukonda", "Ongole", "Addanki", ]
        }, {
            name: "Rajahmundry",
            areas: ["Kakinada", "Rajahmundry", "Eluru", "Tadepalligudem", "Machilipatnam", "Guntur", "Vijayawada", "Visakhapatnam", "Kurnool", "Anantapur", "Chittoor", "Tirupati", "Kadapa", "Nellore", "Ongole", "Guntakal", "Bellary", "Hospet", "Davanagere", "Shimoga", "Tumkur", "Chikmagalur", "Mangalore", "Udupi", "Mysore", "Madikeri", "Hassan", "Chikballapur", "Tumkur", "Bidar", "Gulbarga", "Raichur", "Bellary", "Koppal", "Gadag", "Haveri", "Dharwad", "Belgaum", "Bagalkot", "Bijapur", "Vijayapada", "Bidar", "Gulbarga", "Raichur", "Bellary", "Koppal", "Gadag", "Haveri", "Dharwad", "Belgaum", "Bagalkot", "Bijapur", "Vijayapura", ]
        }, {
            name: "Srikakulam",
            areas: ["Srikakulam", "Palasa", "Kotabommali", "Tekkali", "Ichchapuram", "Sarubujjili", "RegidiAmadalavalasa", "Narasannapeta", "Rajam", "Gara", "Sompeta", "Mandasa", "Polaki", "Itchapuram", "Hiramandalam", "Palakonda", "Ranasthalam", "Gajapathinagaram", "Jalumuru", "Nandigam", "Burja", "Meliaputti", "Mandasa", "Vajrapukotturu", "Veeraghattam", "Kotabommali", "Ganguvada", "Cheedipalem", "Salur", "Saravakota", "Gara", "Gantyada", "Garugubilli", "Gajapathinagaram", "VenkannaPalem", "Nandigam", "Hiramandalam", "Jalumuru", "Nandigam", "Burja", "Meliaputti", "Mandasa", "Vajrapukotturu", "Veeraghattam", "Kotabommali", "Ganguvada", "Cheedipalem", "Salur", "Saravakota", "Gara", "Gantyada", "Garugubilli", "Gajapathinagaram", "VenkannaPalem", ]
        }, {
            name: "Tirupati",
            areas: ["Tirupati", "Tirumala", "Alipiri", "Srikalahasti", "Kanipakam", "Yerpedu", "Puttur", "Chittoor", "Chandragiri", "Pileru", "Palamaneru", "Gudipala", ]
        }, {
            name: "Vijayawada",
            areas: ["Amaravati", "AndhraPradesh", "Annavaram", "Bhimavaram", "Biccavolu", "Challapalli", "Chirala", "Chittoor", "Dharmavaram", "Eluru", "Gooty", "Gudivada", "Gudur", "Guntakal", "Guntur", "Hindupur", "Kadapa", "Kakinada", "Kalyandurg", "Kandukur", "Kanigiri", "Karapa", "Karnataka", "Khammam", "Kovvur", "Krishnagiri", "Kuppam", "Machilipatnam", "Madanapalle", "Mandapeta", "Mangalagiri", "Markapur", "Nalgonda", "Nandyal", "Narasaraopet", "Nellore", "Nidadavole", "Nuzvid", "Ongole", "Palacole", "Palamaner", "PalasaKasibugga", "Pamur", "Prakasam", "Srikakulam", "Tadepalle", "Tadipatri", "Tallapudi", "Tenali", "Thirupathi", "Tirupati", "Tuni", "Uravakonda", "Venkatagiri", "Vidisha", "Vijayawada", "Vinukonda", "Visakhapatnam", "Vizianagaram", "Yelamanchili", "Yemmiganur", "Yerraguntla", ]
        }, {
            name: "Visakhapatnam",
            areas: ["Arambagh", "Asilmetta", "Bheemunipatnam", "DabaGardens", "DwarakaNagar", "Gajuwaka", "Gopalapatnam", "JagadambaJunction", "Malkapuram", "Nakkapalli", "Pendurthi", "VisakhapatnamSteelPlant", "VisalakshiNagar", "VisakhapatnamI", "VisakhapatnamII", ]
        }, {
            name: "Vizianagaram",
            areas: ["Bobbili", "Cheepurupalle", "Gajapathinagaram", "Gajularega", "Garividi", "Gurla", "Ichapuram", "Jami", "Makkuva", "Nellimarla", "Parvathipuram", "Salur", "Sarvepalli", "Srikakulam", "Tekkali", "ThanugulaPalem", "Vizianagaram", "Yelamanchili", ]
        }, {
            name: "Warangal",
            areas: ["Hanamkonda", "Kazipet", "Warangal", "Jangaon", "Mahabubabad", "Parkal", "Mulug", "Wardhannapet", "Janagaon", "Mahadevpur", ]
        }, ]
    },
    {
        state: "Arunachal Pradesh",
        cities: [{
            name: "Itanagar",
            areas: ["Naharlagun", "BageTinali", "Itanagar", "Lobi", "Doimukh", "Jollang", "Chimpu", "PapumPare", "Banderdewa", "Kimin", "Yupia", "Ziro", "Daporijo", "Along", "Basar", "Pasighat", "Roing", "Anini", "Bomdila", "Dumporijo", "Hayuliang", "Mechuka", "Tawang", "Zemithang", ]
        }, {
            name: "Bomdila",
            areas: ["Bomdila", "UpperGompa", "MiddleGompa", "LowerGompa", "NewMarket", "OldMarket", "TibetanMarket", "CraftCentre", "ViewPoint", "AppleOrchard", "WarMemorial", ]
        }, {
            name: "Tawang",
            areas: ["Tawang", "Lumla", "Jang", "WestKameng", "EastKameng", "Lohit", "Namsai", "Changlang", "Tirap", "Longding", ]
        }, {
            name: "Ziro",
            areas: ["Ziro", "ArunachalPradesh", ]
        }, {
            name: "Daporijo",
            areas: ["Daporijo", "Liromoba", "Pidi", "Raga", "UpperSubansiri", "Dumporijo", "Nacho", "Jone", "Talle", "Taliha", "Tarin", "Tato", "Tinali", "Tippi", "Tirap", "Tissa", "Tomo", "Toru", "Tuting", "Ugli", "UpperDibangValley", "Walong", "Wessang", "Yupia", ]
        }, {
            name: "Pasighat",
            areas: ["Pasighat", "Mebo", "Pangin", "Likabali", "Along", "Basar", "Biri", "Boleng", "Bosinga", "Daring", "Dumporijo", "Jonai", "Khonsa", "Liromoba", "Longding", "Mariyang", "Mechuka", "Namsai", "Nari", "PakkeKessang", "Palin", "Pangto", "Payum", "Sagalee", "Sangdupota", "Sangti", "Seppa", "SilleOTowang", "Tuting", "Yingkiong", ]
        }, {
            name: "Roing",
            areas: ["Namsai", "Lohit", "DibangValley", "LowerDibangValley", "Anjaw", "Changlang", "Tirap", ]
        }, {
            name: "Anini",
            areas: ["Anini", "Dibang", "Lohit", "LowerDibangValley", "Namsai", "Roing", "Tawang", "UpperDibangValley", "WestKameng", ]
        }, {
            name: "Aalo",
            areas: ["AaloWest", "AaloEast", "AaloNorth", "AaloSouth", ]
        }, {
            name: "Along",
            areas: ["Tuting", "Yingkiong", "Pasighat", "Mebo", "Anjaw", "Likabali", "Hayuliang", "Namsai", "Roing", "Tezu", "Wakro", "Bomdila", "Dirang", "Tawang", "Khonsa", "Changlang", "Longding", "PasighatEast", "Basar", ]
        }, ]
    },
    {
        state: "Assam",
        cities: [{
            name: "Guwahati",
            areas: ["Amingaon", "Athgaon", "Basistha", "Beltola", "Birkuchi", "Bishnupur", "Boko", "Chandmari", "Chenga", "FatasilAmbari", "Ganeshguri", "Gorchuk", "GuwahatiAirport", "Hatigaon", "Jalukbari", "Jorabat", "Kharghuli", "Khanapara", "Kharguli", "Lalganesh", "LachitNagar", "Machkhowa", "Narengi", "Panbazar", "PaltanBazar", "Panchali", "Pandu", "Panjabari", "SahidNagar", "SixMile", "Sonapur", "Sukreswar", "Survey", "Tepesia", "ZooRoad", ]
        }, {
            name: "Jorhat",
            areas: ["Jorhat", "Dergaon", "Mariani", "Teok", "Titabar", "Sarupathar", "Ghilamara", "Gohpur", "Majuli", "Sivasagar", ]
        }, {
            name: "Nagaon",
            areas: ["Nagaon", "Jagiroad", "Morigaon", "Hojai", "Lanka", "Dhing", "Sonari", "Samaguri", "Rupahi", "NagaonSadar", "Binodi", "Sarupathar", "Batadroba", "Raha", "Nowgaon", "Barhampur", "Dhansiripar", "Kaliabor", ]
        }, {
            name: "Sivasagar",
            areas: ["Sivasagar", "Simaluguri", "Jorhat", "Golaghat", "Moran", "Nazira", "SivasagarTown", "SivasagarEast", "SivasagarWest", "SivasagarSouth", "SivasagarNorth", ]
        }, {
            name: "Tinsukia",
            areas: ["Dibrugarh", "Tinsukia", "Margherita", "Duliajan", "Digboi", "Namrup", "DoomDooma", "Lakhimpur", "Bongaigaon", "Barpeta", "Kokrajhar", "Dhubri", "Nalbari", "Goalpara", "Baksa", "Chirang", "Udalguri", "Darrang", "Sonitpur", "Lakhimpur", "Dhemaji", "Tawang", "WestKameng", "EastKameng", "PapumPare", "LowerSubansiri", "UpperSubansiri", "WestSiang", "EastSiang", "UpperSiang", "DibangValley", "Lohit", "Namsai", "Changlang", "Tirap", "Longding", ]
        }, {
            name: "Dibrugarh",
            areas: ["Tuli", "Moran", "DoomDooma", "Tingrai", "Digboi", "Duliajan", "Naojan", "Namrup", "Sapekhati", "Chabua", "Chenga", "Margherita", "Ledo", "Tinsukia", "Dhola", "Gothaibari", "Kakopathar", ]
        }, {
            name: "Bongaigaon",
            areas: ["Bijni", "Panbari", "Abhayapuri", "Gosaigaon", "Kokrajhar", "Salakati", "Sidli", "Fakiragram", "Dotma", "Bongaigaon", ]
        }, {
            name: "Kokrajhar",
            areas: ["Kokrajhar", "Gossaigaon", "Panbari", "Fakiragram", "Serfanguri", "Dotma", "Bijni", "Sidli", "Baska", "Bishmuri", "Kachugaon", "Salakati", "Saralpara", "Gomariguri", "Nijara", "Pathorighat", "Baghmara", "Rowta", "Ultapani", "Fakirtola", "Gossaingaon", "DotmaBazar", "BijniBazar", "SidliBazar", "BaskaBazar", "BishmuriBazar", "KachugaonBazar", "SalakatiBazar", "SaralparaBazar", "GomariguriBazar", "NijaraBazar", "PathorighatBazar", "BaghmaraBazar", "RowtaBazar", "UltapaniBazar", "FakirtolaBazar", ]
        }, {
            name: "Barpeta",
            areas: ["Baghmara", "BarpetaRoad", "Bongaigaon", "Chapar", "Chenga", "Dhekiajuli", "Gauripur", "Goalpara", "Hajo", "Jagiroad", "Jaleswar", "Jaynagar", "Kokrajhar", "Mangaldoi", "Nalbari", "Panbari", "Pathsala", "Rangia", "Sarupathar", "Sipajhar", "Tamulpur", ]
        }, {
            name: "Dhubri",
            areas: ["Dhubri", "Goalpara", "Bongaigaon", "Kokrajhar", "Barpeta", "Nalbari", "Kamrup", "Darrang", "Sonitpur", "Lakhimpur", "Dhemaji", "Tinsukia", "Dibrugarh", "Sivasagar", "Jorhat", "Golaghat", "KarbiAnglong", "Hailakandi", "Cachar", "Karimganj", "Nagaon", "Morigaon", "Hojai", "Nalbari", "Majuli", "Chirang", "Baksa", "Udalguri", "DimaHasao", "WestKarbiAnglong", ]
        }, {
            name: "Goalpara",
            areas: ["Goalpara", "Lakhipur", "Dudhnoi", "Bongaigaon", "Barpeta", "Jagiroad", "Nalbari", "Kamrup", "Dhubri", "Baksa", "Chirang", "Udalguri", "Kokrajhar", "Darrang", "Sonitpur", "Lakhimpur", "Dhemaji", "Tinsukia", "Dibrugarh", "Sivasagar", "Jorhat", "Golaghat", "Karimganj", "Hailakandi", "Cachar", "DimaHasao", "KarbiAnglong", "WestKarbiAnglong", "EastKarbiAnglong", "Nagaon", "Morigaon", "Hojai", "Nalbari", "Barpeta", "Bongaigaon", "Goalpara", "Dhubri", "Kokrajhar", "Chirang", "Udalguri", "Baksa", "Sonitpur", "Darrang", "Dhemaji", "Tinsukia", "Dibrugarh", "Sivasagar", "Jorhat", "Golaghat", "Karimganj", "Hailakandi", "Cachar", "DimaHasao", "KarbiAnglong", "WestKarbiAnglong", "EastKarbiAnglong", "Nagaon", "Morigaon", "Hojai", ]
        }, {
            name: "Silchar",
            areas: ["Silchar", "Bhuvan", "Dharmanagar", "Karimganj", "Hailakandi", "Badarpur", "Katlicherra", "Kancharapara", "Mohanpur", "Bishnupur", "Nalbari", "Panitola", "Sonai", "Udharbond", "Lakhipur", "Katigorah", "Maibang", "Dhubri", "Gauripur", "Phulbari", "Golakganj", "Bilasipara", "SouthSalmara", "Gosaigaon", "DhubriSadar", "Howly", "Bongaigaon", "Kokrajhar", "Abhayapuri", "Bijni", "Chapar", "Sidli", "Gossaigaon", "Fakiragram", "Barpeta", "Baghmara", "Bajali", "Baksa", "BarpetaRoad", "Chirang", "Udalguri", "Nagaon", "Dhing", "Hojai", "Nalbari", "Rupohihat", "Samaguri", "Sarupathar", "Sipajhar", "Tezpur", "Bihpuria", "Dhemaji", "Gohpur", "JonaiBazar", "Majuli", "NorthLakhimpur", "Sadiya", "Sivasagar", "Tinsukia", "Doomdooma", "Digboi", "Margherita", "Namrup", "Tingkhong", "Duliajan", "Dibrugarh", "Moranhat", "Tinsukia", "Khonsa", "Longding", "Changlang", "Bordumsa", "Namsai", "Roing", "Tezu", "Wakro", "Wessang", "Hayuliang", "Mahadevpur", "Namsang", "Pipsorang", "Lekhapani", "Margherita", "Namrup", "Tingkhong", "Duliajan", "Dibrugarh", "Moranhat", "Tinsukia", "Khonsa", "Longding", "Changlang", "Bordumsa", "Namsai", "Roing", "Tezu", "Wakro", "Wessang", "Hayuliang", "Mahadevpur", "Namsang", "Pipsorang", "Lekhapani", ]
        }, {
            name: "Hailakandi",
            areas: ["Hailakandi", "Katlicherra", "Algapur", "SouthHailakandi", "Lala", "Chandpur", "HailakandiSadar", "HailakandiTown", "Kalaichar", "Badarpur", "Karimganj", "Ratabari", "Patharkandi", ]
        }, {
            name: "Karimganj",
            areas: ["Badarpur", "Hailakandi", "KarimganjNorth", "KarimganjSouth", "Katlicherra", "SouthKarimganj", "Patharkandi", ]
        }, {
            name: "Lakhimpur",
            areas: ["Dhemaji", "Gogamukh", "Jonai", "Dhakuakhana", "NorthLakhimpur", "Majuli", "Naoboicha", "Sissiborgaon", "Dhalpukhuri", "Bezera", "Bordoloni", "Borhat", "Bihpuria", "Chhatak", "Charaideo", "Dhing", "Dimaruguri", "Golaghat", "Gaurisagar", "Jorhat", "Kaliabor", "Khumtai", "Lahowal", "MajuliIsland", "Morigaon", "Naharkatia", "Nagaon", "Sivasagar", "Sonari", "Titabor", ]
        }, ]
    },
    {
        state: "Bihar",
        cities: [{
            name: "Patna",
            areas: ["PatnaCity", "Danapur", "Khagaul", "Phulwarisharif", "Bakhtiyarpur", "Maner", "Barh", "Mokama", "Biharsharif", "Nalanda", "Bihta", "Nawada", "Chhapra", "Rajgir", "Fatuha", "Rajnandgaon", "Gaya", "Ramnagar", "Hajipur", "Sherghati", "Jamalpur", "Silao", "Jehanabad", "Sitamarhi", ]
        }, {
            name: "Gaya",
            areas: ["BodhGaya", "Sherghati", "Paraiya", "Makhdumpur", "Barachatti", "Atri", "Wazirganj", "Tekari", "Konch", "Dobhi", ]
        }, {
            name: "Bhagalpur",
            areas: ["Bhagalpur", "Naugachhia", "Kharagpur", "Colgong", "Pirpainti", "Sultanganj", "Nathnagar", "Ismailpur", "Jagdishpur", "Bihpur", ]
        }, {
            name: "Muzaffarpur",
            areas: ["AzadNagar", "Bariapur", "Birpur", "Dharampura", "Gaighat", "Kanti", "Kotwali", "Kurhani", "Maripur", "Minapur", "Mushahari", "NaiBazar", "Nautan", "Sakra", "Saraiyahat", "Sataur", "ShivajiNagar", "Shrikrishnapur", "Turki", "VidyapatiNagar", "Warisnagar", ]
        }, {
            name: "Purnia",
            areas: ["Dalsingsarai", "Purnia", "Rupauli", "Jainagar", "Amaur", "Murliganj", "Katihar", "Pranpur", "Kishanganj", ]
        }, {
            name: "Darbhanga",
            areas: ["Darbhanga", "Madhubani", "Samastipur", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "Saran", "Siwan", "Gopalganj", "Muzaffarpur", "EastChamparan", "WestChamparan", "Sitamarhi", "Madhepura", "Purnia", "Araria", "Supaul", "Madhubani", "Darbhanga", "Sheohar", "Saharsa", "Vaishali", "Begusar", ]
        }, {
            name: "Arrah",
            areas: ["Arrah", "Bhojpur", "Buxar", "Kaimur", "Rohtas", ]
        }, {
            name: "Begusarai",
            areas: ["Begusarai", "Teghra", "Bachhwara", "Bakhri", "Barauni", "Birpur", "CheriaBariarpur", "Dandari", "Garhpura", "Khabra", "Matihani", "Nawkothi", "SahebpurKamal", "ShahpurPatori", "Sonbarsa", "Thakurganj", "Warisnagar", ]
        }, {
            name: "Munger",
            areas: ["Munger", "Jamalpur", "Tarapur", "Kharagpur", "Bachhwara", "Dalsinghsarai", "MungerSadar", "HaveliKharagpur", "Katoria", "Warisnagar", "Sheikhpura", "Bariarpur", "Fatehpur", "Sultanganj", "Hathidah", "Asarganj", "GauraBauram", "Naugachhia", "Rajgir", "Silao", "Islampur", "GogriJamalpur", "Mokama", "Barh", "Bakhtiarpur", "Dhamdaha", "DinapurNizamat", "Maner", "Fatuha", "Naubatpur", "Sarai", "Khusrupur", "Bikram", "Bihta", "Chhapra", "Danapur", "DinapurCantonment", "Hajipur", "MahnarBazar", "Muzaffarpur", "Patna", "PhulwariSharif", "Rosera", "Samastipur", "Sherghati", "Sonepur", "Warisaliganj", "Ara", "Begusarai", "Bhagalpur", "Buxar", "Chapra", "Dumraon", "Forbesganj", "Gopalganj", "Hajipur", "Jamalpur", "Jehanabad", "Katihar", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Saharsa", "Samastipur", "Sasaram", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Munger", "Vaishali", ]
        }, {
            name: "Chhapra",
            areas: ["Sonepur", "Dariyapur", "Garkha", "Manjhi", "Marhaura", "Panapur", "Parsa", "Revelganj", "Sagarpali", "Taraiya", ]
        }, {
            name: "Bettiah",
            areas: ["Bettiah", "Ramnagar", "Narkatiaganj", "Bagaha", "Lauriya", "Nautan", "Channel", "Gaunaha", "Sikta", "Majhaulia", "Raxaul", "Jainagar", "Areraj", "Mehsi", "Dhaka", "Sugauli", "Raghunathpur", "Nabinagar", "Kotwa", "Sikandarpur", "Pachrukhi", "Madhuban", "Lauria", "Narkatiya", "BettiahRaj", "Hathua", "Majhauli", "Chanpatia", "Gaunaha", "Bairia", "RaxaulBazar", "Jainagar", "Mehsi", "Dhaka", "Sugauli", "Raghunathpur", "Nabinagar", "Kotwa", "Sikandarpur", "Pachrukhi", "Madhuban", "Lauria", "Narkatiya", "BettiahRaj", "Hathua", "Majhauli", "Chanpatia", "Bairia", ]
        }, {
            name: "Buxar",
            areas: ["Buxar", "Chaugain", "Itarhi", "Rajpur", "Dumraon", "Jagdishpur", "Simri", "Nandan", "Chausa", "BuxarSadar", "Barhara", "Garhani", "Markundi", "Nawanagar", "Sahar", "Sihauta", "ChandiHarsaon", "DumraonKhurd", "GauraBauram", "Goriakothi", "Jagarnathpur", "Jahanabad", "Kesath", "Khusrupur", "Lakhisarai", "Masaurhi", "Noorsarai", "Obra", "RajpurSonbarsa", "RamgarhChowk", "Ratanpur", "SahpurPachim", "Saraiyahat", "SimriBakhtiarpur", "SonaPur", "Tarari", "UdwantNagar", ]
        }, {
            name: "Sasaram",
            areas: ["Sasaram", "Bikramganj", "DehrionSone", "Mohania", "Dumraon", "Nokha", "Chandi", "Garhani", "Garkha", "Bhabua", "Ramgarh", "Chainpur", "Chenari", "Kharagpur", "Kudra", "Manjhauli", "Mohania", "Nauhatta", "Piro", "Rajpur", "Robertsganj", "Sonepur", "Tarari", "Wazirganj", ]
        }, {
            name: "Dehri",
            areas: ["DehrionSone", "Bikramganj", "Mohania", "Anugrahganj", "Durgawati", "Sonepur", "Goriakothi", "Musari", "Barun", "Karpi", "Bihiya", "Saharsa", "GogriJamalpur", "Sonbarsa", "Piro", "Buxar", "Dumraon", "Narkatiaganj", "Chhapra", "Manjhi", "Revelganj", "Sonepur", "Marhaura", "Dighwara", "Lauria", "Hajipur", "Mahnar", "Muzaffarpur", "Saraiyahat", "Motihari", "Bettiah", "Raxaul", "Jainagar", "Madhubani", "Jhanjharpur", "Darbhanga", "Samastipur", "Rosera", "Purnia", "Katihar", "Kishanganj", "Thakurganj", "Balrampur", "Gopalganj", "Siwan", "Mirganj", "Chapra", "GauraBauram", "Narkatiaganj", "Gopalganj", "Muzaffarpur", "Chapra", "Siwan", "Gopalganj", "Muzaffarpur", "Chapra", "Siwan", "Gopalganj", "Muzaffarpur", "Chapra", "Siwan", "Gopalganj", "Muzaffarpur", "Chapra", "Siwan", "Gopalganj", "Muzaffarpur", "Chapra", "Siwan", "Gopalganj", "Muzaffarpur", "Chapra", "Siwan", "Gopalganj", "Muzaffarpur", "Chapra", "Siwan", "Gopalganj", "Muzaffarpur", "Chapra", "Siwan", "Gopalganj", "Muzaffarpur", "Chapra", "Siwan", ]
        }, {
            name: "Nawada",
            areas: ["Nawada", "Barhet", "Hilsa", "Gobindpur", "PakriBarawan", "Rajauli", "Sirdala", "Tarapur", "Warisaliganj", ]
        }, {
            name: "Jahanabad",
            areas: ["Jahanabad", "Barh", "Bikram", "Gaya", "Jehanabad", "Nawada", "Rajgir", "Sherghati", "Wazirganj", ]
        }, {
            name: "Aurangabad",
            areas: ["Aurangabad", "Barachatti", "Bihta", "Bikram", "Buxar", "Chhapra", "Daudnagar", "DinapurNizamat", "Dumraon", "Gaya", "Hajipur", "Jamalpur", "Jahanabad", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Munger", "Mokama", "Nalanda", "Nawada", "Patna", "PhulwariSharif", "Rajgir", "Rosera", "Saharsa", "Samastipur", "Sheikhpura", "Sherghati", "Siwan", "TetiBigha", "Warisaliganj", "Ziradei", ]
        }, {
            name: "Kishanganj",
            areas: ["Kishanganj", "Thakurganj", "Araria", "Purnia", "Katihar", "Bahadurganj", "Katoria", "Narkatiaganj", "Forbesganj", "Jogbani", ]
        }, {
            name: "Madhubani",
            areas: ["Madhubani", "Jainagar", "Rajnagar", "Ladania", "Benipatti", "Phulparas", "Harlakhi", "Babubarhi", "Jainagar", "Bisfi", "Lakhnaur", "Andharatharhi", "Sikti", "Keoti", "Khutauna", "Pandaul", "Jhanjharpur", "Balrampur", "Laukaha", "Ghoghardiha", "Madhepur", "Bairia", "Jainagar", "Ghanshyampur", "Jiyapur", "Pupri", "Bajpatti", "Jainagar", "Laheriasarai", "Darbhanga", "Bahadurpur", "Jhajha", "GauraBauram", "Narkatiaganj", "Chanpatia", "Lauriya", "Nautan", "Birpur", "Supaul", "Triveniganj", "Marauna", "Chhatapar", "Pipra", "Madhepura", "Kishanganj", "Thakurganj", "Araria", "Forbesganj", "Kursakatta", "Jogbani", "Jogia", "Sonbarsa", "Rupauli", "Runnisaidpur", "Madanpur", "Jhanjharpur", "KusheshwarAsthan", "GauraBauram", "Murliganj", "Jainagar", "Jharkhand", "India", ]
        }, {
            name: "Sheohar",
            areas: ["Sheohar", "Tariyani", "DumriKatsari", "Purnahia", "Bairgania", "Barhariya", "Jainagar", "Jiyapur", "Kadwa", "Piprakothi", "Sursand", "TilathiKothi", "Uchkagaon", "Chandanpur", "Ghoghardiha", "Ishuwa", "Pathanpur", "Runnisaidpur", "SursandBazar", "Belsand", "Dhaka", "GauraBauram", "Pupri", "Riga", "Sariya", "suppi", "Tariyaniya", "Adapur", "Bahadurpur", "Barhni", "Bhawanipur", "Bihiya", "Birpur", "Chakia", "Chanpatia", "Dariapur", "Dighwara", "Dumra", "Gaura", "Hajipur", "Jandaha", "Jarwal", "Jaynagar", "Kalyanpur", "Katra", "Khajuri", "Kochas", "Lalganj", "Lauriya", "Madhubani", "Mahnar", "Marhaura", "Mehsi", "Milki", "Mufassil", "Mushahari", "Narkatiaganj", "Patepur", "Phulparas", "RajaPakar", "RamgarhChowk", "Ramnagar", "Raxaul", "Rosera", "Saharsa", "Samastipur", "Saraiyahat", "Sarsiwa", "Shisho", "SimriBakhtiyarpur", "Sonbarsa", "Tajpur", "VidyapatiNagar", "Warisnagar", "Akhtiyarpur", "Alinagar", "Ara", "Athmalgola", "Barbigha", "Begusarai", "Belsand", "Bhagwanpur", "Bihat", "Birpur", "Buxar", "Chanpatia", "Chhapra", "Dalsinghsarai", "Dumraon", "Ekma", "Gopalganj", "Hajipur", "HanumanNagar", "Jahanabad", "Jamalpur", "Khagaria", "Khushrupur", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Masaurhi", "Mokama", "Munger", "Muzaffarpur", "Narkatiaganj", "Nawada", "PakriBarawan", "PashchimChamparan", "Patna", "PhulwariSharif", "Purnia", "PurviChamparan", "Rosera", "Saharsa", "Samastipur", "Saran", "Sasaram", "Sheikhpura", "Sheohar", "Sherghati", "Sonepur", "Supaul", "Tarari", "Vaishali", "Warisaliganj", "Wazirganj", "Barbigha", "Behea", "Bhabhua", "Buxar", "Chhapra", "Dalsinghsarai", "DehrionSone", "Dumraon", "Gopalganj", "Hajipur", "Jahanabad", "Jamalpur", "Khagaria", "Khushrupur", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Masaurhi", "Mokama", "Munger", "Muzaffarpur", "Narkatiaganj", "Nawada", "PakriBarawan", "PashchimChamparan", "Patna", "PhulwariSharif", "Purnia", "PurviChamparan", "Rosera", "Saharsa", "Samastipur", "Saran", "Sasaram", "Sheikhpura", "Sheohar", "Sherghati", "Sonepur", "Supaul", "Tarari", "Vaishali", "Warisaliganj", "Wazirganj", ]
        }, {
            name: "Sitamarhi",
            areas: ["Bairgania", "Bajpatti", "Basantpur", "Bathnaha", "Belsand", "Chanpatia", "Dumra", "GauraBauram", "Harlakhi", "Jainagar", "Jaynagar", "Kaptanganj", "Kotwa", "Lauria", "Madhuban", "Narkatiaganj", "Pakridayal", "Pupri", "Riga", "Runnisaidpur", "Sarmastpur", "Sursand", "Thakrahan", ]
        }, {
            name: "Bagaha",
            areas: ["Bagaha", "Thakurganj", "Barhara", "Lauriya", "Nautan", "Chanpatia", "Piprasi", "Manjhaulia", "Gaunaha", "Ramnagar", "Garhwa", ]
        }, {
            name: "Gopalganj",
            areas: ["Gopalganj", "Muzaffarpur", "Darbhanga", "Samastipur", "Begusarai", "Khagaria", "Bhagalpur", "Munger", "Purnia", "Kishanganj", ]
        }, {
            name: "Madhepura",
            areas: ["Dumri", "Murliganj", "Pipra", "Nanpur", "Sonbarsa", "Kishanganj", "Thakurganj", "Alamnagar", "Ghailarh", "Tetiabambar", "Shahabazar", "", ]
        }, {
            name: "Saharsa",
            areas: ["Saharsa", "Purnia", "Araria", "Kishanganj", "Katihar", "Madhepura", "Supaul", "Begusarai", "Khagaria", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nalanda", "Patna", "Buxar", "Kaimur", "Rohtas", "Jehanabad", "Gaya", "Aurangabad", "Nawada", "Jamui", "Munger", "Madhubani", "Supaul", "Araria", "Kishanganj", "Purnia", "Saharsa", "Katihar", ]
        }, {
            name: "Muzaffarnagar",
            areas: ["Muzaffarnagar", "Bihar", "India", ]
        }, {
            name: "Motihari",
            areas: ["Motihari", "Piprakothi", "Panchgachhiya", "Chakia", "Srinagar", "Jogbani", "Kalyanpur", "Narkatiaganj", "Bagaha", "Lauriya", "Bettiah", "Gaunaha", "Gopalganj", "Hathwa", "Siwan", "Mairwa", "Thawe", "Baruraj", "Barhara", "Bairia", "Jainagar", "Kanti", "Marhaura", "Mehsi", "Milki", "Minapur", "Muzaffarpur", "Naugachhia", "Naubatpur", "Panapur", "Patahi", "Phulparas", "Pupri", "Rosera", "Samastipur", "Saraiya", "Shahpur", "Sitamarhi", "Sonbarsa", "Vijaipur", "Warisnagar", "Hathua", "Jhanjharpur", "KusheshwarAsthan", "Madhubani", "Madhepura", "Saharsa", "Supaul", "Triveniganj", "Araria", "Banmankhi", "Forbesganj", "Kishanganj", "Purnia", "Arwal", "Bhojpur", "Ara", "Jagdispur", "Sandesh", "Behea", "Buxar", "Chausa", "Dumraon", "Nabinagar", "Rajpur", "ShahpurPatori", "Wazirganj", "Akbarpur", "Amarpur", "Bangaon", "Barh", "Barhiya", "Bihta", "Bikram", "Buxar", "Chausa", "Daniawan", "Dayalbagh", "Dehri", "DinapurNizamat", "Durgawati", "Ekangarsarai", "Fatehpur", "Garhani", "GauraBauram", "Gaya", "Ghoshi", "Gobindpur", "Gopalganj", "Guraru", "Hathua", "Imamganj", "Jahanabad", "Kako", "Katihar", "Khagaria", "Khushrupur", "Kochas", "Koilwar", "Lauriya", "Lakhisarai", "Madhepura", "Madhubani", "Makhdumpur", "Maner", "Marhaura", "Masaurhi", "Mirganj", "Mokama", "Motihari", "Munger", "Murliganj", "Nabinagar", "Narkatiaganj", "Nawada", "Nokha", "Obra", "Ojhapati", "Pakridayal", "Patna", "Phulwaria", "Piro", "Purnia", "Rafiganj", "Rajauli", "Rajgir", "Ramnagar", "Raniganj", "RatniFaridpur", "Rohtas", "Rosera", "Saharsa", "Samastipur", "SaraiEkangar", "Saran", "Sasaram", "Sheikhpura", "Sherghati", "Sirohi", "Siwan", "Sonbarsa", "Tarari", "Teghra", "Tetiabambar", "Tilouthu", "Triveniganj", "Ujiarpur", "Vaishali", "Wazirganj", "Warisaliganj", ]
        }, {
            name: "Lakhisarai",
            areas: ["Pirpainti", "Katoria", "Barahiya", "Chanan", "HaveliKharagpur", "Lakhisarai", "RamgarhChowk", "Meenapur", "Murliganj", "Narkatiaganj", "RajendraNagar", "Sheikhpura", ]
        }, {
            name: "Shekhpura",
            areas: ["Shekhpura", "Barh", "Bikram", "Gaya", "Jehanabad", "Lakhisarai", "Nawada", "Patna", "Rohtas", "Aurangabad", ]
        }, {
            name: "Rosera",
            areas: ["Rosera", "Jahanabad", "Arwal", "Jehanabad", "Aurangabad", "Nawada", "Sheikhpura", "Lakhisarai", "Munger", "Jamui", "Khagaria", "Bhagalpur", "Banka", "Kishanganj", "Purnia", "Katihar", "Gaya", "Nawada", "Buxar", "Kaimur", "Rohtas", "Araria", "Madhepura", "Saharsa", "Supaul", "Madhubani", "Darbhanga", "Muzaffarpur", "Gopalganj", "Siwan", "WestChamparan", "EastChamparan", "Sheohar", "Sitamarhi", "Vaishali", "Samastipur", ]
        }, {
            name: "Piro",
            areas: ["Piro", "Chhapra", "Muzaffarpur", "Gaya", "Patna", "Darbhanga", "Mokama", "Begusarai", "Bhagalpur", "Munger", "Nalanda", "Nawada", "Sheikhpura", "Lakhisarai", "Jehanabad", "Arwal", "Aurangabad", "Buxar", "Kaimur", "Rohtas", "Kishanganj", "Katihar", "Purnia", "Saharsa", "Madhepura", "Supaul", "Jamui", "Khagaria", "Banka", "Gopalganj", "Siwan", "Vaishali", "WestChamparan", "EastChamparan", "Sheohar", "Sitamarhi", "Madhubani", ]
        }, {
            name: "Biharsharif",
            areas: ["Biharsharif", "Nalanda", "Rajgir", "Hilsa", "Islampur", "Sherghati", "Gaya", "Wazirganj", "Jehanabad", "Arwal", ]
        }, {
            name: "Forbesganj",
            areas: ["Forbesganj", "Araria", "Bihar", "India", ]
        }, {
            name: "Narkatiaganj",
            areas: ["Narkatiaganj", "Barhara", "Gaunaha", "Chanpatia", "KusheshwarAsthan", "Nautan", "Lauriya", "Rupauli", "Bagaha", "Gaunaha", "Chanpatia", "KusheshwarAsthan", "Nautan", "Lauriya", "Rupauli", "Bagaha", ]
        }, {
            name: "Hathwa",
            areas: ["Hathwa", "Barhara", "Bikram", "Dumraon", "Fatehpur", "Goh", "Jahanabad", "Kharagpur", "Kotwa", "Lauria", "Nuaon", "Pandarakh", "Panpur", "Raghopur", "Saharsa", "Sursand", ]
        }, {
            name: "Dumraon",
            areas: ["Dumraon", "Buxar", "Ara", "Chhapra", "Bettiah", "Muzaffarpur", "Gaya", "Patna", "Bhagalpur", "Purnia", ]
        }, {
            name: "Jamalpur",
            areas: ["Jamalpur", "Munger", "Bhagalpur", "Darbhanga", "Muzaffarpur", "Patna", "Gaya", "Nawada", "Aurangabad", "Jehanabad", "Arwal", "Kaimur", "Buxar", "Rohtas", "Kishanganj", "Araria", "Purnia", "Katihar", "Saharsa", "Madhepura", "Supaul", "Begusarai", "Khagaria", "Sheikhpura", "Lakhisarai", "Munger", "Jamui", "Banka", "Sheikhpura", "Nalanda", "Bhojpur", "Bhabhua", "Madhubani", "Samastipur", "Darbhanga", "EastChamparan", "WestChamparan", "Gopalganj", "Siwan", "Vaishali", "Muzaffarpur", "Sheohar", "Sitamarhi", "Madhubani", "WestChamparan", "Gopalganj", "Siwan", "Vaishali", "Muzaffarpur", "Sheohar", "Sitamarhi", "EastChamparan", ]
        }, {
            name: "Siwan",
            areas: ["Barharia", "BhagwanpurHat", "Goriakothi", "Gowanda", "Hasanpura", "Jiradei", "Karchhue", "Lar", "Maharajganj", "Mairwa", "Nautan", "Pachrukhi", "Raghunathpur", "Revelganj", "Siswan", "Siwan", "Ziradei", ]
        }, {
            name: "Maharajganj",
            areas: ["Maharajganj", "Sonbarsa", "Nautan", "Pipra", "Pupri", "Jainagar", "Barhni", "RaniPokhar", "SiswaBazar", "Maskanwa", "Bettiah", "Bairia", "Narkatiaganj", "Bagaha", "Gopalganj", "Kuchaikote", "Hathua", "Sikta", ]
        }, {
            name: "Dalsinghsarai",
            areas: ["Dalsinghsarai", "Satha", "Piro", "GauraBauram", "Murliganj", "Nabinagar", "Sheohar", "Tariyani", "Motihari", "Madhubani", "Samastipur", "Darbhanga", "Muzaffarpur", "Gopalganj", "Chhapra", "Bettiah", "WestChamparan", "EastChamparan", "Bagaha", "Siwan", "Saran", "Vaishali", "Hajipur", "Muzaffarnagar", "Jamshedpur", "Dhanbad", "Deoghar", "Dumka", "Saharsa", "Madhepura", "Purnia", "Kishanganj", "Araria", "Katihar", "Supaul", "Forbesganj", "Buxar", "Bhabhua", "Rohtas", "Kaimur", "Gaya", "Aurangabad", "Jehanabad", "Nawada", "Arwal", "Jamui", ]
        }, {
            name: "Mokama",
            areas: ["Mokama", "Barh", "Bakhtiyarpur", "Khusrupur", "Danapur", "Maner", "PhulwariSharif", "Bihta", "Naubatpur", "Paliganj", "Bikram", "MungerSadar", "Jamalpur", "HaveliKharagpur", "Giddhaur", "Hathidah", "Rajgir", "Nalanda", "Hilsa", "Islampur", "Barbigha", "Sherghati", "GayaSadar", "Tekari", "Wazirganj", "BodhGaya", "Jehanabad", "Tilauthu", "Makhdumpur", "RatniFaridpur", "Arwal", "Kurtha", "Karpi", "Konch", "Ranti", "Belaganj", "Ghoghardiha", "Jhanjharpur", "Lauriya", "Madhubani", "Jainagar", "Benipatti", "Harlakhi", "Madhepura", "Muraul", "Saharsa", "Triveniganj", "Chhatapur", "Gopalganj", "Kuchaikote", "Mirganj", "Phulparas", "Thawe", "Barharia", "Buxar", "Chausa", "Itarhi", "Nadbai", "Nawgachhiya", "Rajpur", "SimriBakhtiyarpur", "Dumraon", "GauraBauram", "Nabinagar", "Obra", "ShahpurPatori", "Akbarpur", "Amba", "Araria", "Babubarhi", "Banmankhi", "Barari", "Bhargama", "Bisfi", "Forbesganj", "Gaura", "Jokihat", "Kursakatta", "Laukaha", "Madanpur", "Madhepura", "Narpatganj", "Pothia", "Raniganj", "Simariya", "Sonbarsa", "Sukhasan", "Supaul", "Thakurganj", "Arwal", "Barachakia", "Barhara", "Daudnagar", "Haspura", "Koath", "Kutumba", "Obra", "Rohtas", "Sasaram", "ShekhopurSarai", "Silao", "Dehri", "Gaya", "Guraru", "Imamganj", "Jehanabad", "Makhdumpur", "Dobhi", "Ghoghardiha", "Gopalganj", "Hathua", "Kataiya", "Manjhi", "Mirganj", "Thawe", "Barauli", "GopalganjSadar", "Kataiya", "Kuchaikote", "Mirganj", "Thawe", "Bardaha", "Chhapra", "Dighwara", "Garkha", "Manjhi", "Marhaura", "Masrakh", "Revelganj", "Sonepur", "Taraiya", "Amnour", "Athmalgola", "Baniapur", "Barhara", "Dariapur", "Dinara", "Dumra", "Garkha", "Khusrupur", "Pachrukhi", "Parsa", "Rohtas", "Sasaram", "ShekhopurSarai", "Silao", "Suryapura", "Akbarpur", "Amba", "Araria", "Babubarhi", "Banmankhi", "Barari", "Bhargama", "Bisfi", "Forbesganj", "Gaura", "Jokihat", "Kursakatta", "Laukaha", "Madanpur", "Madhepura", "Narpatganj", "Pothia", "Raniganj", "Simariya", "Sonbarsa", "Sukhasan", "Supaul", "Thakurganj", "Arwal", "Barachakia", "Barhara", "Daudnagar", "Haspura", "Koath", "Kutumba", "Obra", "Rohtas", "Sasaram", "ShekhopurSarai", "Silao", "Dehri", "Gaya", "Guraru", "Imamganj", "Jehanabad", "Makhdumpur", "Dobhi", "Ghoghardiha", "Gopalganj", "Hathua", "Kataiya", "Manjhi", "Mirganj", "Thawe", "Barauli", "GopalganjSadar", "Kataiya", "Kuchaikote", "Mirganj", "Thawe", "Bardaha", "Chhapra", "Dighwara", "Garkha", "Manjhi", "Marhaura", "Masrakh", "Revelganj", "Sonepur", "Taraiya", "Amnour", "Athmalgola", "Baniapur", "Barhara", "Dariapur", "Dinara", "Dumra", "Garkha", "Khusrupur", "Pachrukhi", "Parsa", "Rohtas", "Sasaram", "ShekhopurSarai", "Silao", "Suryapura", ]
        }, {
            name: "Samastipur",
            areas: ["Samastipur", "Rosera", "KusheshwarAsthan", "Dalsinghsarai", "Mohiuddinnagar", "Warisnagar", "Morwa", "Sarai", "ShivajiNagar", "Tariyani", "Ujiarpur", "VidyapatiNagar", "Zamania", ]
        }, {
            name: "Chhatapur",
            areas: ["Chhatapur", "Bihar", "India", ]
        }, {
            name: "Khagaria",
            areas: ["Khagaria", "Beldaur", "Mansi", "GogriJamalpur", "Parbatta", "Bakhtiarpur", "Barh", "Dalsinghsarai", "Munger", "Jamalpur", "Hathidah", "Mokama", "Tarapur", "Chhapra", "Sonepur", "Hajipur", "Fatuha", "Maner", "PhulwariSharif", "Danapur", "Bikram", "PatnaSahib", "ShriKrishnapura", "Fatuha", "Naubatpur", "Paliganj", "Khusrupur", "Bikramganj", "Athmalgola", "Jandaha", "Rajgir", "Hisua", "Nalanda", "Hilsa", "Islampur", "Barbigha", "Mokama", "Biharsharif", "Nawada", "Warisaliganj", "Gaya", "Jehanabad", "Arwal", "Sasaram", "Rohtas", "Kaimur", "Bhabhua", "Mohania", "Buxar", "Dumraon", "Chhapra", "Gopalganj", "Siwan", "Deoria", "Gorakhpur", "KushiNagar", "Mau", "Azamgarh", "Ballia", "Mau", "Mirzapur", "Sonbhadra", ]
        }, {
            name: "Munger",
            areas: ["Jamalpur", "MungerSadar", "Tarapur", "Kharagpur", "Katoria", "HaveliKharagpur", "Dharhara", "Fatehpur", "Bariarpur", "Sultanganj", "Sipara", "GangaSagar", "Narpatganj", "Rajgir", "Bihpur", "Kishanganj", "Naugachhia", "Sathiaon", "Tetiabambar", "Gidhour", "Bhimbandh", "Chausa", "BeguSarai", "Sahebganj", "Jhajha", "GogriJamalpur", "Hathua", "Saraiyahat", "Jainagar", "Murliganj", ]
        }, {
            name: "Jamui",
            areas: ["Jamui", "Jhajha", "Khaira", "Laxmipur", "Gidhaur", "Sono", "Barhat", "Chandi", "Harnaut", "Hisua", "Murliganj", "Nabinagar", "Nawada", "Rajauli", "Ramgarh", "Sikandra", "Warisaliganj", ]
        }, {
            name: "Lakhisarai",
            areas: ["Lakhisarai", "Pipariya", "RamgarhChowk", "Barahiya", "HaveliKharagpur", "Murliganj", "Chanan", "Halsi", "Piro", "Tarari", "BarhiyaBlock", "LakhisaraiSadar", "Belaganj", "Garhani", "HalsiBlock", ]
        }, {
            name: "Sheikhpura",
            areas: ["Sheikhpura", "Bihar", "India", ]
        }, {
            name: "Rosera",
            areas: ["Rosera", "Bairgania", "Jainagar", "Piro", "Daudnagar", "Islampur", "Sheohar", "Garhani", "Tariyani", "Riga", "Tarari", "Pathanpur", "Jahanabad", "Arwal", "Buxar", "Dumraon", "Narkatiaganj", "Gopalganj", "Chhapra", "Siwan", "Maharajganj", "Bettiah", "Narkatiaganj", "Gopalganj", "Chhapra", "Siwan", "Maharajganj", "Bettiah", ]
        }, {
            name: "Piro",
            areas: ["Piro", "Barh", "Bakhtiyarpur", "Behea", "Buxar", "Chausa", "Dumraon", "Ghoshi", "Hilsa", "Jahanabad", "Khusrupur", "Lakhisarai", "Masaurhi", "Mokama", "Munger", "Nalanda", "Panapur", "Rajgir", "Ramnagar", "Sherghati", "Silao", "Tarari", ]
        }, {
            name: "Biharsharif",
            areas: ["Bariyarpur", "Barh", "Bihta", "Bikram", "Bokaro", "Buxar", "Chandi", "Chapra", "Daudnagar", "Dehri", "Dinapur", "Fatehpur", "Gaya", "Hajipur", "Jamalpur", "Jamshedpur", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rajgir", "Saharsa", "Samastipur", "Sasaram", "Sheikhpura", "Sherghati", "Siwan", "Supaul", "Warisaliganj", ]
        }, {
            name: "Forbesganj",
            areas: ["Forbesganj", "Araria", "Bihar", "India", ]
        }, {
            name: "Narkatiaganj",
            areas: ["Narkatiaganj", "WestChamparan", "Bihar", ]
        }, {
            name: "Hathwa",
            areas: ["Hathwa", "Barhni", "HathwaMarket", "HathwaRaj", "HathwaRoad", "HathwaChowk", "HathwaGamhariya", "HathwaSaraiya", "Hathwacolony", "HathwaGate", ]
        }, {
            name: "Dumraon",
            areas: ["Dumraon", "Buxar", "Chausa", "Noorsarai", "Rajpur", "Nawada", "Hisua", "Barbigha", "Narkatiaganj", "Bikramganj", "Gopalganj", "Siwan", "Deoria", "Gorakhpur", "KushiNagar", "Mau", "Azamgarh", "Jaunpur", "Mirzapur", "Sonbhadra", ]
        }, {
            name: "Jamalpur",
            areas: ["Jamalpur", "Munger", "Kharagpur", "Begusarai", "Barauni", "Darbhanga", "Samastipur", "Madhubani", "Muzaffarpur", "Chapra", "Bettiah", "Motihari", "Hajipur", "Jahanabad", "Arrah", "Buxar", "Chhapra", "Gaya", "Nawada", "Jehanabad", "Sasaram", "Kishanganj", "Purnia", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Begusarai", "Munger", "Jamalpur", ]
        }, {
            name: "Siwan",
            areas: ["Hanspura", "Jiradei", "Mairwa", "Nautan", "Pachrukhi", "Raghunathpur", "Siswan", "Siwan", "Barharia", "Basantpur", "BhagwanpurHat", "Dagarua", "Daraunda", "Ekma", "Goriyakothi", "Hasanpura", "Hussainganj", "Jaganpura", "Jiradei", "Karchhue", "Kathiar", "Kishunpur", "Kochas", "Lauria", "Laxmipur", "Marhaura", "Mohammadpur", "Nautan", "Pachrukhi", "Panapur", "Parsa", "Raghunathpur", "RampurNaikin", "Revelganj", "Siswan", "Siwan", "SiswanKhas", "Sonbarsa", "Tarwara", "Vishwania", ]
        }, {
            name: "Maharajganj",
            areas: ["Maharajganj", "Sonpur", "Hajipur", "Muzaffarpur", "Gopalganj", "Chhapra", "Siwan", "Bettiah", "Motihari", "Buxar", "Deoria", "Gorakhpur", "KushiNagar", "Jaunpur", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPhuleNagar", "Meerut", "Muzaffarnagar", "Baghpat", "Ghaziabad", "GautamBuddhNagar", "Bulandshahr", "Aligarh", "Hathras", "Mathura", "Agra", "Firozabad", "Mainpuri", "Etawah", "Auraiya", "KanpurDehat", "Farrukhabad", "Kannauj", "Fatehpur", "Pratapgarh", "Kaushambi", "Allahabad", "BaraBanki", "Faizabad", "AmbedkarNagar", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPhuleNagar", "Meerut", "Muzaffarnagar", "Baghpat", "Ghaziabad", "GautamBuddhNagar", "Bulandshahr", "Aligarh", "Hathras", "Mathura", "Agra", "Firozabad", "Mainpuri", "Etawah", "Auraiya", "KanpurDehat", "Farrukhabad", "Kannauj", "Fatehpur", "Pratapgarh", "Kaushambi", "Allahabad", "BaraBanki", "Faizabad", "AmbedkarNagar", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPhuleNagar", "Meerut", "Muzaffarnagar", "Baghpat", "Ghaziabad", "GautamBuddhNagar", "Bulandshahr", "Aligarh", "Hathras", "Mathura", "Agra", "Firozabad", "Mainpuri", "Etawah", "Auraiya", "KanpurDehat", "Farrukhabad", "Kannauj", "Fatehpur", "Pratapgarh", "Kaushambi", "Allahabad", "BaraBanki", "Faizabad", "AmbedkarNagar", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPhuleNagar", "Meerut", "Muzaffarnagar", "Baghpat", "Ghaziabad", "GautamBuddhNagar", "Bulandshahr", "Aligarh", "Hathras", "Mathura", "Agra", "Firozabad", "Mainpuri", "Etawah", "Auraiya", "KanpurDehat", "Farrukhabad", "Kannauj", "Fatehpur", "Pratapgarh", "Kaushambi", "Allahabad", "BaraBanki", "Faizabad", "AmbedkarNagar", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPhuleNagar", "Meerut", "Muzaffarnagar", "Baghpat", "Ghaziabad", "GautamBuddhNagar", "Bulandshahr", "Aligarh", "Hathras", "Mathura", "Agra", "Firozabad", "Mainpuri", "Etawah", "Auraiya", "KanpurDehat", "Farrukhabad", "Kannauj", "Fatehpur", "Pratapgarh", "Kaushambi", "Allahabad", "BaraBanki", "Faizabad", "AmbedkarNagar", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPhuleNagar", "Meerut", "Muzaffarnagar", "Baghpat", "Ghaziabad", "GautamBuddhNagar", "Bulandshahr", "Aligarh", "Hathras", "Mathura", "Agra", "Firozabad", "Mainpuri", "Etawah", "Auraiya", "KanpurDehat", "Farrukhabad", "Kannauj", "Fatehpur", "Pratapgarh", "Kaushambi", "Allahabad", "BaraBanki", "Faizabad", "AmbedkarNagar", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPhuleNagar", "Meerut", "Muzaffarnagar", "Baghpat", "Ghaziabad", "GautamBuddhNagar", "Bulandshahr", "Aligarh", "Hathras", "Mathura", "Agra", "Firozabad", "Mainpuri", "Etawah", "Auraiya", "KanpurDehat", "Farrukhabad", "Kannauj", "Fatehpur", "Pratapgarh", "Kaushambi", "Allahabad", "BaraBanki", "Faizabad", "AmbedkarNagar", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPhuleNagar", "Meerut", "Muzaffarnagar", "Baghpat", "Ghaziabad", "GautamBuddhNagar", "Bulandshahr", "Aligarh", "Hathras", "Mathura", "Agra", "Firozabad", "Mainpuri", "Etawah", "Auraiya", "KanpurDehat", "Farrukhabad", "Kannauj", "Fatehpur", "Pratapgarh", "Kaushambi", "Allahabad", "BaraBanki", "Faizabad", "AmbedkarNagar", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPhuleNagar", "Meerut", "Muzaffarnagar", "Baghpat", "Ghaziabad", "GautamBuddhNagar", "Bulandshahr", "Aligarh", "Hathras", "Mathura", "Agra", "Firozabad", "Mainpuri", "Etawah", "Auraiya", "KanpurDehat", "Farrukhabad", "Kannauj", "Fatehpur", "Pratapgarh", "Kaushambi", "Allahabad", "BaraBanki", "Faizabad", "AmbedkarNagar", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPhuleNagar", "Meerut", "Muzaffarnagar", "Baghpat", "Ghaziabad", "GautamBuddhNagar", "Bulandshahr", "Aligarh", "Hathras", "Mathura", "Agra", "Firozabad", "Mainpuri", "Etawah", "Auraiya", "KanpurDehat", "Farrukhabad", "Kannauj", "Fatehpur", "Pratapgarh", "Kaushambi", "Allahabad", "BaraBanki", "Faizabad", "AmbedkarNagar", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPhuleNagar", "Meerut", "Muzaffarnagar", "Baghpat", "Ghaziabad", "GautamBuddhNagar", "Bulandshahr", "Aligarh", "Hathras", "Mathura", "Agra", "Firozabad", "Mainpuri", "Etawah", "Auraiya", "KanpurDehat", "Farrukhabad", "Kannauj", "Fatehpur", "Pratapgarh", "Kaushambi", "Allahabad", "BaraBanki", "Faizabad", "AmbedkarNagar", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPhuleNagar", "Meerut", "Muzaffarnagar", "Baghpat", "Ghaziabad", "GautamBuddhNagar", "Bulandshahr", "Aligarh", "Hathras", "Mathura", "Agra", "Firozabad", "Mainpuri", "Etawah", "Auraiya", "KanpurDehat", "Farrukhabad", "Kannauj", "Fatehpur", "Pratapgarh", "Kaushambi", "Allahabad", "BaraBanki", "Faizabad", "AmbedkarNagar", "Azamgarh", "Mau", "Ballia", "Ghazipur", "Mirzapur", "Varanasi", "Chandauli", "Jaunpur", "SantRavidasNagar", "Bhadohi", "AmbedkarNagar", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "RaeBareli", "Lucknow", "Kanpur", "Unnao", "Hardoi", "Lakhimpur", "Kheri", "Sitapur", "Shahjahanpur", "Pilibhit", "Bareilly", "Moradabad", "Rampur", "JyotibaPh", ]
        }, {
            name: "Dalsinghsarai",
            areas: ["Dalsinghsarai", "Bihar", "India", ]
        }, {
            name: "Mokama",
            areas: ["Mokama", "Barh", "Bakhtiyarpur", "Khusrupur", "Danapur", "Maner", "PhulwariSharif", "Bikram", "Bihta", "Ara", "Barhara", "Behea", "Belsand", "Bikramganj", "Buxar", "Chandi", "Chausa", "Dalsinghsarai", "DinapurNizamat", "Dumraon", "Fatuha", "Gaya", "Hajipur", "Jahanabad", "Jamui", "Jehanabad", "Khagaria", "Kotwa", "Lakhisarai", "LauriaNandangarh", "Madhepura", "Madhubani", "Munger", "Mursan", "Mushahari", "Narkatiaganj", "Naugachhia", "Nawada", "PakriBarawan", "Patna", "Phulparas", "Piro", "Purnia", "Rajgir", "Ramnagar", "Rosera", "Saharsa", "Samastipur", "Saraiyahat", "Sasaram", "Shikarpur", "Sultanganj", "Supaul", "Warisaliganj", "Wazirganj", ]
        }, {
            name: "Samastipur",
            areas: ["Dalsingsarai", "Samastipur", "Rosera", "Pusa", "Mohiuddinnagar", "Kalyanpur", "Warisnagar", "Ujiarpur", "Morwa", "ShahpurPatori", "Tarawn", "Bibhutipur", "Jandaha", "VidyapatiNagar", "Hathauri", "Dighwara", "Mohiuddinnagar", "Tariyani", "Kishanpur", "SaraiRani", "Rajpur", ]
        }, {
            name: "Chhatapur",
            areas: ["Chhatapur", "Araria", "Buxar", "Darbhanga", "EastChamparan", "Gaya", "Muzaffarpur", "Patna", "Saran", "Vaishali", "WestChamparan", ]
        }, {
            name: "Khagaria",
            areas: ["Khagaria", "Beldaur", "GogriJamalpur", "Mansi", "Parbatta", "Rajpur", "SimriBakhtiarpur", "Sonpur", ]
        }, {
            name: "Munger",
            areas: ["MungerSadar", "Jamalpur", "Kharagpur", "Tarapur", "Dharhara", "Saraiyahat", "Hathidah", "Katoria", "Fatehpur", "Bariarpur", "BeguSarai", "MungerCantt", "Naugachhia", "Asarganj", "GauraBauram", "Rajmahal", "Sultanganj", "Dharampur", "Fatehpukur", "Jagarnathpur", "Bachhwara", "Bakhri", "CheriaBariarpur", "Chunapur", "Hathiya", "Kalyanpur", "Khandakpar", "Nabinagar", "Rajauli", "Sirari", "TetiBazar", "Thangadh", "Udakishanganj", "Warisnagar", "HaveliKharagpur", "Banka", "Barahat", "Barhet", "Belhar", "Bhagalpur", "Bibhutipur", "Birpur", "Chanan", "Colgong", "Gopalpur", "Jamalpur", "Kahalgaon", "Kharik", "Nathnagar", "Naugachhia", "NaugawanSadat", "Pirpainti", "QasimBazar", "Rafiganj", "Roh", "Sabour", "Shambhuganj", "Sultanganj", "Teghra", "Tikari", "Udhwa", "Akbarpur", "Amarpur", "Ara", "Araria", "Areraj", "Banmankhi", "Barari", "Barhara", "Barura", "Bathnaha", "BayaBazar", "Benipur", "Bhawanipur", "Bisfi", "Bitha", "Bochaha", "Buxar", "Chandi", "Dalsinghsarai", "Dumraon", "GauraBauram", "GopalganjSadar", "Hansdiha", "Harlakhi", "Jogbani", "Katihar", "Khagaria", "Khushrupur", "Kochadhaman", "Kothi", "Kurtha", "Lauria", "Madhepura", "Madhubani", "Mansahi", "Marhaura", "Masaurhi", "Mehsi", "Mirganj", "Motihari", "Nabinagar", "Narkatiaganj", "Nautan", "Obra", "Pargi", "Patepur", "Phulparas", "Piprasi", "Puraini", "Raghopur", "RaxaulBazar", "Revelganj", "Rosera", "Saharsa", "Samastipur", "Saraiya", "Sarsiwa", "Sathiaon", "Shikharpur", "SimriBakhtiarpur", "Sitamarhi", "Siwan", "Sonbarsa", "Sursand", "Tarari", "Thakurganj", "Tikari", "Ujiarpur", "Warisnagar", "Ziradei", ]
        }, {
            name: "Jamui",
            areas: ["Jamui", "Jhajha", "Lakhisarai", "Sheikhpura", "Barbigha", "Mokama", "Tarapur", "Munger", "Khagaria", "Begusarai", "Bhagalpur", "Naugachhia", "Purnia", "Katihar", "Kishanganj", "Araria", "Madhepura", "Saharsa", "Supaul", "Darbhanga", "Muzaffarpur", "Gopalganj", "Siwan", "Chhapra", "Bettiah", "WestChamparan", "EastChamparan", "Sheohar", "Sitamarhi", "Madhubani", "Samastipur", "Vaishali", "Hajipur", "Chhapra", "Rosera", "Nalanda", "Rajgir", "Islampur", "Hilsa", "Gaya", "Wazirganj", "Jehanabad", "Arwal", "Aurangabad", "Obra", "DehrionSone", "Rohtas", "Buxar", "Dumraon", "Bikram", "Nawada", "Hisua", "Mokama", "Barh", "Bakhtiarpur", "Dalsinghsarai", "Khusrupur", "Fatuha", "Patna", "Naubatpur", "Danapur", "Khagaul", "Bihta", "Punpun", "PhulwariSharif", "Bikramganj", "Paliganj", "Maner", "Masaurhi", "Makhdumpur", "Gaya", "Jehanabad", "Sherghati", "Wazirganj", "Belaganj", "Gaya", "BodhGaya", "Tekari", "Barachatti", "Athmalgola", "Dumraon", "Buxar", "Chausa", "Rajpur", "SimriBakhtiarpur", "Jhajha", "Jamui", "Lakhisarai", "Sheikhpura", "Barbigha", "Mokama", "Tarapur", "Munger", "Khagaria", "Begusarai", "Bhagalpur", "Naugachhia", "Purnia", "Katihar", "Kishanganj", "Araria", "Madhepura", "Saharsa", "Supaul", "Darbhanga", "Muzaffarpur", "Gopalganj", "Siwan", "Chhapra", "Bettiah", "WestChamparan", "EastChamparan", "Sheohar", "Sitamarhi", "Madhubani", "Samastipur", "Vaishali", "Hajipur", "Chhapra", "Rosera", "Nalanda", "Rajgir", "Islampur", "Hilsa", "Gaya", "Wazirganj", "Jehanabad", "Arwal", "Aurangabad", "Obra", "DehrionSone", "Rohtas", "Buxar", "Dumraon", "Bikram", "Nawada", "Hisua", "Mokama", "Barh", "Bakhtiarpur", "Dalsinghsarai", "Khusrupur", "Fatuha", "Patna", "Naubatpur", "Danapur", "Khagaul", "Bihta", "Punpun", "PhulwariSharif", "Bikramganj", "Paliganj", "Maner", "Masaurhi", "Makhdumpur", "Gaya", "Jehanabad", "Sherghati", "Wazirganj", "Belaganj", "Gaya", "BodhGaya", "Tekari", "Barachatti", "Athmalgola", "Dumraon", "Buxar", "Chausa", "Rajpur", "SimriBakhtiarpur", ]
        }, {
            name: "Jahanabad",
            areas: ["Kalyanpur", "Sursand", "Fatehpur", "Dumra", "Barbigha", "Khizarsarai", "Ghoghardiha", "Jahanabad", "Islampur", "Makhdumpur", "RatniFaridpur", "Akbarpur", "Atri", "Bihiya", "Chhatapur", "Daudnagar", "Firozpur", "Ghoshi", "Guraru", "Hulasganj", "Karakat", "Konch", "Lakhisarai", "Meenapur", "Mirganj", "Modanganj", "Obra", "Ojhapath", "Panapur", "Parasbigha", "Rafiganj", "Rajauli", "Ramgarh", "Barachatti", "Barhiya", "BiharSharif", "Chandi", "Chhatarpur", "Darbhanga", "GauraBauram", "Hayaghat", "Jale", "Keotiranway", "Khagaria", "Khushrupur", "Lakhnaur", "Lauriya", "Madhepura", "Madhubani", "Manigachhi", "Marhaura", "Masaurhi", "Mehsi", "Mokama", "Murliganj", "Narkatiaganj", "Nautan", "Navinagar", "Pupri", "Rosera", "Saharsa", "Samastipur", "Sandesh", "Saraiya", "ShahpurPatori", "Sheikhpura", "Sursand", "Tarapur", "Ujiarpur", "Warisnagar", "", ]
        }, {
            name: "Aurangabad",
            areas: ["Aurangabad", "Barachatti", "Bihta", "Bikram", "Buxar", "Chhapra", "DehrionSone", "DinapurNizamat", "Gaya", "Hajipur", "Jamalpur", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Saharsa", "Samastipur", "Sasaram", "Sheikhpura", "Sherghati", "Siwan", "Warisaliganj", ]
        }, {
            name: "Kishanganj",
            areas: ["Kishanganj", "Araria", "Purnia", "Katihar", "Bhagalpur", "Banka", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "EastChamparan", "WestChamparan", "Darbhanga", "Muzaffarpur", "Sitamarhi", "Madhubani", "Saharsa", "Supaul", "Madhepura", "Arwal", "Jehanabad", "Sheohar", "Vaishali", "Samastipur", "Begusarai", "Khagaria", "Buxar", "Bhojpur", "Nalanda", "Patna", "Jehanabad", "Gopalganj", "Siwan", "Saran", ]
        }, {
            name: "Madhubani",
            areas: ["Madhubani", "Jainagar", "Rajnagar", "Benipatti", "Harlakhi", "Lakhnaur", "Phulparas", "Babubarhi", "Jhanjharpur", "Andharatharhi", "Bisfi", "Keoti", "Khutauna", "Madhepur", "Mahnar", "Basopatti", "Ghoghardiha", "Jainagar", "Jaynagar", "Madhubani", "Pandaul", "Khajauli", "Laheriasarai", "Laukahi", "Madhipura", "Ramnagar", "Jainagar", "Madhubani", "Rajnagar", "Benipatti", "Harlakhi", "Lakhnaur", "Phulparas", "Babubarhi", "Jhanjharpur", "Andharatharhi", "Bisfi", "Keoti", "Khutauna", "Madhepur", "Mahnar", "Basopatti", "Ghoghardiha", "Jainagar", "Jaynagar", "Madhubani", "Pandaul", "Khajauli", "Laheriasarai", "Laukahi", "Madhipura", "Ramnagar", ]
        }, {
            name: "Sheohar",
            areas: ["Sheohar", "Tariyani", "Purnia", "Bihar", "India", ]
        }, {
            name: "Sitamarhi",
            areas: ["Bairgania", "Bajpatti", "Basantpur", "Bathnaha", "Belsand", "Bhawanipur", "Birpur", "Dumra", "HanumanNagar", "Jainagar", "Jaynagar", "Kalyanpur", "Karakat", "Lauriya", "Madhuban", "Nainagarh", "Pakridayal", "Pupri", "Riga", "Runnisaidpur", "Sarmastpur", "Sursand", "Thakrahan", ]
        }, {
            name: "Bagaha",
            areas: ["Bagaha", "Bairia", "Barhara", "Dumra", "Gaunaha", "Lauriya", "Narkatiaganj", "Piprakothi", "Ramnagar", "Sikta", ]
        }, {
            name: "Gopalganj",
            areas: ["Gopalganj", "Muzaffarpur", "Darbhanga", "Samastipur", "Begusarai", "Khagaria", "Bhagalpur", "Munger", "Madhubani", "Sitamarhi", "Sheohar", "Purnia", "Kishanganj", "Araria", "Saharsa", "Madhepura", "Supaul", "WestChamparan", "EastChamparan", "Gaya", "Nawada", "Jehanabad", "Aurangabad", "Rohtas", "Kaimur", "Arwal", "Buxar", "Bhojpur", "Nalanda", "Patna", "Vaishali", "TarnTaran", "Amritsar", "Barnala", "Bathinda", "Faridkot", "Firozpur", "FatehgarhSahib", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "SriMuktsarSahid", "Pathankot", "Rupnagar", "Sangrur", "Ajitgarh", "Barnala", "Mansa", "Moga", "SriMuktsarSahid", "Pathankot", "Rupnagar", "Sangrur", "Ajitgarh", "Nawanshahr", "Patti", "Kapurthala", "Jalandhar", "Hoshiarpur", "Gurdaspur", "FatehgarhSahib", "Faridkot", "Firozpur", "Bathinda", "Barnala", "Amritsar", "TarnTaran", "Vaishali", "Patna", "Nalanda", "Buxar", "Arwal", "Kaimur", "Rohtas", "Aurangabad", "Jehanabad", "Nawada", "Gaya", "EastChamparan", "WestChamparan", "Supaul", "Madhepura", "Saharsa", "Araria", "Kishanganj", "Purnia", "Sheohar", "Sitamarhi", "Madhubani", "Munger", "Bhagalpur", "Khagaria", "Begusarai", "Samastipur", "Darbhanga", "Muzaffarpur", "Gopalganj", ]
        }, {
            name: "Madhepura",
            areas: ["Madhepura", "Murliganj", "Alamnagar", "Ranigang", "Kishanpur", "Sarsi", "Ghailarh", "Sonbarsa", "Dhamdaha", "Gwalpara", "Bihpur", "Shankarpur", "Jainagar", "Tarapur", "Akbarpur", "Khanpur", "Kityari", "Tariyani", "Basantpur", "Shambhuganj", "Jiyapur", "Belwa", "Chausa", "Gopalpur", "Harlakhi", "Lakshmipur", "Madhipura", "Muradpur", "Narpatganj", "Pothia", "Saharsa", "SimriBakhtiarpur", "Thakurganj", "Tribeniganj", ]
        }, {
            name: "Saharsa",
            areas: ["Saharsa", "Purnia", "Araria", "Kishanganj", "Katihar", "Madhepura", "Munger", "Bhagalpur", "Banka", "Begusarai", "Khagaria", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Munger", "Gaya", "Jehanabad", "Aurangabad", "Nalanda", "Patna", "Buxar", "Bhabhua", "Kaimur", "Rohtas", "Arwal", "Jehanabad", "Sheohar", "Sitamarhi", "Vaishali", "Darbhanga", "Madhubani", "Samastipur", "Begusarai", "Khagaria", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Munger", "Gaya", "Jehanabad", "Aurangabad", "Nalanda", "Patna", "Buxar", "Bhabhua", "Kaimur", "Rohtas", "Arwal", "Jehanabad", "Sheohar", "Sitamarhi", "Vaishali", "Darbhanga", "Madhubani", "Samastipur", ]
        }, {
            name: "Muzaffarnagar",
            areas: ["Muzaffarnagar", "Bihar", ]
        }, {
            name: "Motihari",
            areas: ["Motihari", "Piprakothi", "Chakia", "Thakrahan", "Turkaulia", "Jogapatti", "PatedhiBelsar", "Pakridayal", "Kalyanpur", "Srinagar", "Bara", "Dhaka", "Madhuban", "Narkatiaganj", "Mehsi", "Birpur", "Jhanjharpur", "Lauria", "Marhaura", "Areraj", "Raxaul", "Choraut", "Bettiah", "Gaunaha", "Nautan", "Kesaria", "Runnisaidpur", "Madhubar", "Dharmpura", "Sattarwa", "Kotwa", "Majhaulia", "Sikta", "Jiyapur", "Laurabinda", "Majhaulia", "Minapur", "Bairia", "Birpur", "Pupri", "Jhanjharpur", "Narkatiaganj", "Raxaul", "Jogbani", "Bairgania", "Kalyanpur", "Ramgarhwa", "Sugauli", "Lauria", "Nabinagar", "Gopalganj", "Muzaffarpur", "Samastipur", "Vaishali", "Darbhanga", "Begusarai", "Khagaria", "Bhagalpur", "Munger", "Lakhisarai", "Sheikhpura", "Nawada", "Jamui", "Jehanabad", "Aurangabad", "Gaya", "Rohtas", "Kaimur", "Arwal", "Bhojpur", "Buxar", "Kishanganj", ]
        }, {
            name: "Lakhisarai",
            areas: ["Lakhisarai", "Barahiya", "Chanan", "Meenapur", "Pipariya", "Pranpur", "Shekhopur", "Sono", ]
        }, {
            name: "Shekhpura",
            areas: ["Shekhpura", "Barh", "Bakhtiyarpur", "Buxar", "Chhapra", "Darbhanga", "Gaya", "Hajipur", "Jahanabad", "Munger", "Muzaffarpur", "Patna", "Purnia", "Saharsa", "Samastipur", "Sasaram", "Sitamarhi", "Siwan", "Chhapra", "Gopalganj", "WestChamparan", ]
        }, {
            name: "Rosera",
            areas: ["Rosera", "Piro", "Ghoghardiha", "Jahanabad", "Biharsharif", "Rajgir", "Islampur", "Shekhpura", "Nawada", "Barbigha", "Begusarai", "Khagaria", "Munger", "Jamalpur", "Lakhisarai", "Sheikhpura", "Nalanda", "Buxar", "Chhapra", "Bettiah", "Muzaffarpur", "Gopalganj", "Siwan", "Saran", "Hajipur", "Vaishali", "Samastipur", "Darbhanga", "Madhubani", "Jhanjharpur", "Bettiah", "Chhapra", "Muzaffarpur", "Gopalganj", "Siwan", "Saran", "Hajipur", "Vaishali", "Samastipur", "Darbhanga", "Madhubani", "Jhanjharpur", ]
        }, {
            name: "Piro",
            areas: ["Piro", "Barh", "Bakhtiyarpur", "Mokama", "Munger", "Khagaria", "Begusarai", "Bhagalpur", "Chapra", "Darbhanga", "Gaya", "Hajipur", "Muzaffarpur", "Patna", "Saharsa", "Samastipur", "Siwan", "Chhapra", "Bettiah", "Buxar", "Motihari", "Munger", "Rosera", "Nalanda", "Nawada", "Rajgir", "Sheohar", "Sitamarhi", "Chhatapur", "Jhanjharpur", "Madhubani", "Rosera", "Runnisaidpur", "Madhepura", "Purnia", "Araria", "Forbesganj", "Kishanganj", "Arwal", "Aurangabad", "Bhabua", "Buxar", "Jehanabad", "Lakhisarai", "Sheikhpura", "Sheohar", "Sherghati", "Siwan", "Dumraon", "Gopalganj", "Jamui", "Kotwa", "Lauriya", "Mirganj", "Motihari", "Muzaffarpur", "Narkatiaganj", "Bettiah", "Chanpatia", "Raxaul", "Sitamarhi", "Sugauli", "Jogbani", "Madhubani", "Benipatti", "Birpur", "Jhanjharpur", "Khutauna", "Madhepura", "Madhubani", "Pupri", "Saharsa", "Supaul", "Triveniganj", "Araria", "Forbesganj", "Jogbani", "Kishanganj", "Purnia", "Raniganj", "Thakurganj", "Bagaha", "Barharia", "Bettiah", "Buxar", "Chanpatia", "Chhapra", "Dighwara", "Hajipur", "Lauriya", "Maharajganj", "Motihari", "Muzaffarpur", "Narkatiaganj", "Pupri", "Rosera", "Sonepur", "Supaul", "ValmikiNagar", "Araria", "Forbesganj", "Jogbani", "Kishanganj", "Purnia", "Raniganj", "Thakurganj", ]
        }, {
            name: "Biharsharif",
            areas: ["Bariyarpur", "Barhara", "Bihta", "Bikram", "Bikramganj", "Birpur", "Buxar", "Chandi", "Chhapra", "Dalsinghsarai", "Darbhanga", "Gaya", "Hajipur", "Jahanabad", "Jamalpur", "Jehanabad", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Saharsa", "Samastipur", "Sasaram", "Sheikhpura", "Sherghati", "Siwan", "Supaul", "Vaishali", "Warisaliganj", ]
        }, {
            name: "Forbesganj",
            areas: ["Forbesganj", "Araria", "Purnia", "Katihar", "Kishanganj", "Bhagalpur", "Banka", "Begusarai", "Munger", "Khagaria", "Saharsa", "Madhepura", "Supaul", "Arwal", "Jehanabad", "Aurangabad", "Gaya", "Nawada", "Jamui", "Lakhisarai", "Sheikhpura", "Nalanda", "Patna", "Buxar", "Bhabhua", "Rohtas", "Kaimur", "Vaishali", "Chandauli", "EastChamparan", "WestChamparan", "Gopalganj", "Siwan", "Saran", "Darbhanga", "Madhubani", "Muzaffarpur", "Sheohar", "Sitamarhi", "WestChamparan", "Champaran", "Vaishali", "PashchimChamparan", "PurviChamparan", "Sheohar", "Sitamarhi", "Madhubani", ]
        }, {
            name: "Narkatiaganj",
            areas: ["Narkatiaganj", "Bagaha", "Gaunaha", "Chanpatia", "Lauriya", "Nautan", "Betia", "Bhitaha", "Pachrukhi", "Piprasi", "Ramnagar", "Sikta", "Sugauli", "ValmikiNagar", ]
        }, {
            name: "Hathwa",
            areas: ["Hathwa", "Barh", "Bihta", "Bikram", "Danapur", "DinapurNizamat", "Fatuha", "Khagaul", "Khushrupur", "Maner", "Masaurhi", "Mokama", "Naubatpur", "Paliganj", "Patna", "PhulwariSharif", "Rajgir", "RamkrishnaPuram", "Rosera", "Sandesh", "Shikarpur", "Sheikhpura", "Sherghati", "Silao", "Warisaliganj", ]
        }, {
            name: "Dumraon",
            areas: ["Dumraon", "Barh", "Buxar", "Danapur", "Daudnagar", "Gaya", "Hazaribagh", "Jamshedpur", "Koderma", "Lakhisarai", "Madhepura", "Munger", "Nalanda", "Nawada", "Pakur", "Patna", "Ranchi", "Saharsa", "Sasaram", "Sheikhpura", "Sherghati", "Siwan", ]
        }, {
            name: "Jamalpur",
            areas: ["Jamalpur", "Bihar", "India", ]
        }, {
            name: "Siwan",
            areas: ["Siwan", "Darauli", "Mairwa", "Nautan", "Siswan", "Pachrukhi", "Goriyakothi", "Guthani", "Jiradei", "Hasthampur", "Barharia", "Basantpur", "Bhagwanpur", "DumriKatsari", "Ekma", "Fatehpur", "Goriakothi", "Jahanabad", "KaraiParsaura", "LakriNabiganj", "Laxmipur", "MaraThaur", "Mashrakh", "Mairwa", "Nabinagar", "Naurangabad", "Pachrukhi", "PachrukhiKhurd", "PakriBarawan", "Panapur", "Parsa", "Phulwariya", "Raghunathpur", "RampurNaika", "Reoti", "Rudarpur", "Siwan", "Tarwara", "ThathwaGopalpur", "Vishunpura", "Ziradei", ]
        }, {
            name: "Maharajganj",
            areas: ["Maharajganj", "Sonbarsa", "Nautan", "Pipra", "Chanpatia", "Pupri", "Sidhwalia", "Jhanjharpur", "Rupauli", "Areraj", "Mehsi", "Motipur", "Muzaffarpur", "Gaura", "Marhaura", "Taraiya", "Lauria", "Sheohar", "Sitamarhi", "Bairgania", "Riga", "Runnisaidpur", "Sursand", "Jainagar", "Rosera", "Samastipur", "Tajpur", "Morwa", "Dalsinghsarai", "Sarai", "Jandaha", "Chakia", "Vijaipur", "Chhapra", "Manjhi", "Baniapur", "Sonepur", "Gopalganj", "MuzaffarpurRural", "Saraiya", "Minapur", "Kanti", "Gaighat", "Hathua", "Marwan", "Milki", "Motihari", "Piprakothi", "RaxaulBazar", "Sugauli", "Triveniganj", "LauriaNandangarh", "Chanan", "Dhaka", "Gaunaha", "Goriakothi", "Madhubani", "Jainagar", "Madhepura", "Saharsa", "SonbarsaKala", "Supaul", "Triveniganj", ]
        }, {
            name: "Dalsinghsarai",
            areas: ["Dalsinghsarai", "Bihar", "India", ]
        }, {
            name: "Mokama",
            areas: ["Mokama", "Barh", "Bakhtiarpur", "Digha", "Danapur", "PhulwariSharif", "Bikram", "Bihta", "Ara", "Jagdishpur", "Hathidah", "Khusrupur", "Fatuha", "Khagaul", "Kotwali", "Naubatpur", "Pali", "Rajgir", "Rajpur", "Barhi", "BiharSharif", "Giriak", "Hilsa", "Islampur", "Karakat", "Khijarsarai", "Lakhisarai", "LauriaNandangarh", "Madhepura", "Madhubani", "Makhdumpur", "Maner", "Marhaura", "Masaurhi", "Mirganj", "Munger", "Murliganj", "Nabinagar", "Nalanda", "Nawada", "PakriBarawan", "Panapur", "Patna", "Phulparas", "Piro", "Punpun", "Rafiganj", "Raghopur", "Ramgarh", "Rampur", "Ranchi", "RatniFaridpur", "Rohtas", "Rosera", "Saharsa", "Samastipur", "Saraiyahat", "Sareni", "Sasaram", "Sheikhpura", "Sherghati", "Silao", "SimriBakhtiarpur", "Sitamarhi", "Siwan", "Sonepur", "Supaul", "Warisaliganj", ]
        }, {
            name: "Samastipur",
            areas: ["Dalsingsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "Khusrupur", "Rosera", "Bibhutipur", "Patori", "Barh", "Dalsinghsarai", "Samastipur", "Rosera", "Pusa", "Karpoorigram", "Mohiuddinnagar", "Warisnagar", "Tajpur", "Morwa", "Kishanpur", "Sarai", "ShivajiNagar", "Hasanpur", "Tarpur", "Jandaha", "Hathauri", "CheriaBariarpur", "Bibhutipur", "Gaighat", "Khanpur", "Akbarpur", "Ishuapur", "Dighalbank", "Kalyanpur", "VidyapatiNagar", "Ramnagar", "Mohanpur", "Nirmali", "Birpur", "", ]
        }, {
            name: "Chhatapur",
            areas: ["Chhatapur", "Bihar", "India", ]
        }, {
            name: "Khagaria",
            areas: ["Khagaria", "Beldaur", "GogriJamalpur", "Mansi", "Parbatta", "SimriBakhtiarpur", "Sonbarsa", "Sultanganj", "Hathaway", "Baisi", "Katoria", "Chausa", "GauraBauram", "Naugachhia", ]
        }, {
            name: "Munger",
            areas: ["Pirpainti", "Jamalpur", "MungerSadar", "Kharagpur", "Tarapur", "Dharhara", "Sultanganj", "HaveliKharagpur", "Khatima", "Bariapur", ]
        }, {
            name: "Jamui",
            areas: ["Barhat", "Dumaria", "Giddhour", "Jhajha", "Jamui", "Khaira", "Konch", "Lakhiabad", "Laxmipur", "Murhu", "Panrhi", "Sikandra", "Sono", ]
        }, ]
    },
    {
        state: "Chhattisgarh",
        cities: [{
            name: "Raipur",
            areas: ["Abhanpur", "Arang", "Bhilai", "BhilaiCharoda", "BhilaiNagar", "Bhatapara", "Bilaigarh", "Birgaon", "Chandkuri", "Dhamdha", "Durg", "Jamul", "Jashpur", "Katghora", "Khairagarh", "Kharasgaon", "Kumhari", "Kurud", "Mowa", "Pandari", "Patan", "Raipur", "RaipurRural", "Rajnandgaon", "Sarangarh", "Takhatpur", ]
        }, {
            name: "Bhilai",
            areas: ["Bhilai", "Durg", "Bilaspur", "Raipur", "Korba", "Raigarh", "Ambikapur", "Jagdalpur", "Champa", "Jashpur", ]
        }, {
            name: "Bilaspur",
            areas: ["Amner", "Arjuni", "Beltaras", "Bhainsa", "Bhilai", "Birkoni", "Chamorshi", "Durg", "Fingeshwar", "Gaur", "Gondegaon", "Katghora", "Khairagarh", "Khapri", "Kushmi", "Lormi", "Mungeli", "Pendra", "Rajnandgaon", "Ramanujganj", "Saraipali", "Takhatpur", ]
        }, {
            name: "Korba",
            areas: ["Korba", "Katghora", "Pali", "Marwahi", "Jashpur", "Kunkuri", "Lailunga", "Mainpur", "Pathalgaon", "Udaipur", ]
        }, {
            name: "Raigarh",
            areas: ["Raigarh", "Sarangarh", "Kharsia", "Gharghoda", "Pathalgaon", "Bagbahara", "Dharamjaigarh", "NailaJanjgir", "Jashpurnagar", "Sarangarhblock", ]
        }, {
            name: "Ambikapur",
            areas: ["Khairagarh", "Jashpur", "Kanker", "Bastar", "Kondagaon", "Sukma", "Bijapur", "Dantewada", "Narayanpur", "Bemetara", "Kabirdham", "Balod", "BalodaBazar", "Mahasamund", "Gariaband", "Raipur", "Dhamtari", "Rajnandgaon", "Durg", "Raigarh", "JanjgirChampa", "Korba", "Bilaspur", "Jindagi", "Mungeli", "Surajpur", "Balrampur", ]
        }, {
            name: "Dhamtari",
            areas: ["Dhamtari", "Bagbahara", "Kurud", "Bemetara", "Dhamtari", "Gariaband", "Mahasamund", "Raipur", "Durg", "Bilaspur", "Raigarh", "JanjgirChampa", "Korba", "Kanker", "Bastar", "Bijapur", "Sukma", "Kondagaon", "Narayanpur", "Tongpal", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "Jagdalpur", "Kondagaon", "Sukma", "Dantewada", "Bijapur", "", ]
        }, {
            name: "Jagdalpur",
            areas: ["Keshkal", "Jeypore", "Malkangiri", "Kotpad", "Umarkot", "Bhairamgarh", "Bijapur", "Dantewada", "Sukma", "Bhanupratappur", ]
        }, {
            name: "Rajnandgaon",
            areas: ["Kanker", "Bastar", "Dhamtari", "Mahasamund", "Raigarh", "Kawardha", "Balod", "Bemetara", "BalodaBazar", "Mungeli", ]
        }, ]
    },
    {
        state: "Goa",
        cities: [{
            name: "Panaji",
            areas: ["Altinho", "Campal", "Caranzalem", "DonaPaula", "Fontainhas", "Mala", "Miramar", "PanajiKale", "Pedem", "Ribandar", "SantaInez", "Taleigao", "Thana", ]
        }, {
            name: "Madgaon",
            areas: ["Arlem", "Betalbatim", "Calangute", "Candolim", "Colva", "Cuncolim", "Fatorda", "Loutolim", "Margao", "Navelim", "Salcete", "Varca", ]
        }, {
            name: "Mapusa",
            areas: ["Pomburpa", "Tivim", "KadambaPlateau", "Sangolda", "Assagao", "Anjuna", "Arpora", "Calangute", "Candolim", "Sinquerim", "Nerul", "ReisMagos", "Ribandar", "Aldona", "Assonora", "Bicholim", "Cansaulim", "Colva", "Curtorim", "Loutulim", "Majorda", "Margao", "Morjin", "Nagoa", "Pilar", "Betim", "CurchoremCacora", "Sancoale", "Sanguem", "Quepem", "Canacona", "Chinchinim", "Cuelim", "Loutolim", "Navelim", "Velim", ]
        }, {
            name: "Margao",
            areas: ["Aquem", "AltoBetim", "Arlem", "Assagao", "Betalbatim", "Betul", "Bogmalo", "Calangute", "CamaradeLobos", "Candolim", "Canacona", "Capem", "Carapur", "CurchoremCacora", "Curtorim", "Dabolim", "DonaPaula", "Fatorda", "Guirim", "Jua", "Loutolim", "Madgaon", "Majorda", "Malar", "Mandrem", "Margaon", "Morjin", "Navelim", "Nerul", "Nirmal", "Nuvem", "Palolem", "Panchwadi", "Parcem", "PenhadeFranca", "Pernem", "Piedade", "Pilerne", "Ponda", "Porvorim", "Quela", "Saligao", "Sancoale", "Sanguem", "SantaCruz", "SantaInez", "SantoEstevam", "SaoJosedeAreal", "Seraulim", "Sinquerim", "Siolim", "Sonshi", "Taleigao", "Taliwada", "Tivim", "Usgao", "Varca", "Verna", ]
        }, {
            name: "Ponda",
            areas: ["Ponda", "Goa", ]
        }, {
            name: "VascodaGama",
            areas: ["VascodaGama", "Baina", "Bogmalo", "Cansaulim", "Cavelossim", "Colva", "Benaulim", "Varca", "Fatorda", "Majorda", "Margao", "Morjin", "Betalbatim", "Betul", "Velsao", "Utorda", "Sernabatim", "Cuelim", "Davorlim", "Loutulim", ]
        }, {
            name: "Bicholim",
            areas: ["Bicholim", "Goa", "India", ]
        }, {
            name: "Canacona",
            areas: ["Agonda", "Palolem", "Patnem", "Polem", "Rajbag", "Talpona", "Chaudi", ]
        }, {
            name: "Curchorem",
            areas: ["Curchorem", "GoaVelha", "SantaCruz", "Navelim", "Margao", "Ponda", "VascodaGama", "Betalbatim", "Calangute", "Candolim", "Anjuna", "Arambol", "Baga", "Benaulim", "Bogmalo", "Calapor", "Canacona", "Colva", "Cansaulim", "Carmona", "Chapora", "Galgibaga", "Loutulim", "Majorda", "Mandrem", "Morjim", "Mormugao", "Nagoa", "Palolem", "Patnem", "Polem", "Querim", "Sanguem", "Sancoale", "Sattari", "Sinquerim", "Talpona", "Varca", "Velsao", ]
        }, {
            name: "Quepem",
            areas: ["Aldona", "Assagao", "Anjuna", "Arambol", "Calangute", "Candolim", "Colva", "Cansaulim", "Morjim", "Sinquerim", "Vagator", "Benaulim", "Betalbatim", "Cavelossim", "Majorda", "Mobor", ]
        }, {
            name: "Sanguem",
            areas: ["Paliem", "Curchorem", "Sanvordem", "Sanguem", "Quepem", "Canacona", "Poinguinim", "Chaudi", "Loliem", "Cuelim", ]
        }, {
            name: "Dharbandora",
            areas: ["Aldona", "Anjuna", "Arpora", "Assagao", "Bardez", "Calangute", "Candolim", "Chapel", "Cola", "Corlim", "Cumbarjua", "Dharbandora", "Guirim", "Morjin", "Nerul", "Nachinola", "Pilerne", "Saligao", "Sinquerim", "Socorro", "Tivim", "Vagator", "Valpoi", "Vanxim", ]
        }, {
            name: "Mormugao",
            areas: ["Curtorim", "Loutolim", "Margao", "Fatorda", "Karmali", "VascodaGama", "Cansaulim", "Varca", "Benaulim", "Cavelossim", "Colva", "Mobor", "Majorda", "Betalbatim", "Utorda", "Arossim", "Cuelim", "Sernabatim", ]
        }, ]
    },
    {
        state: "Gujarat",
        cities: [{
            name: "Ahmedabad",
            areas: ["Ahmedabad", "Amraiwadi", "Asarwa", "Bapunagar", "Behrampura", "Dariyapur", "Ellisbridge", "Ghatlodiya", "Isanpur", "JamalpurKhadiya", "Juhapura", "Maninagar", "Memnagar", "Naroda", "Navrangpura", "NewWestZone", "NorthZone", "Odhav", "Paldi", "SouthBopal", "SouthZone", "Vastral", "Vatva", "Vejalpur", ]
        }, {
            name: "Surat",
            areas: ["Athwa", "Bhatar", "Bhesan", "Dindoli", "Katargam", "MajuraGate", "Sarthana", "Udhna", ]
        }, {
            name: "Vadodara",
            areas: ["Vadodara", "Gujarat", "India", ]
        }, {
            name: "Rajkot",
            areas: ["Aji", "Amreli", "Bhaktinagar", "Dhoraji", "Gondal", "Jamnagar", "Junagadh", "Keshod", "Morbi", "Nadiad", "Navsari", "Rajkot", "Surendranagar", "Surat", "Vadodara", "Veraval", "Anand", "Bardoli", "Bharuch", "Dangs", "Godhra", "Ankleshwar", "Vapi", ]
        }, {
            name: "Bhavnagar",
            areas: ["Bhavnagar", "Sihor", "Talaja", "Mahuva", "Gariadhar", "Palitana", "Botad", "Gadhada", "Umargam", "Bardoli", "Dandi", "Mandvi", "Nadiad", "Navsari", "Valsad", ]
        }, {
            name: "Jamnagar",
            areas: ["Jamnagar", "Bhanvad", "Dhrol", "Kalavad", "Lalpur", "Jamjodhpur", "Okha", "Dwarka", "Bhatia", "Khambhaliya", "Khambhala", "Kalyanpur", "Mandvi", "Mundra", "Lakhpat", "Bedi", "Balachadi", "Naliya", "", ]
        }, {
            name: "Nadiad",
            areas: ["Nadiad", "Gujarat", "India", ]
        }, {
            name: "Gandhinagar",
            areas: ["Ajwa", "Akru", "Alindra", "Ambaji", "Ambli", "AmbliRoad", "Amraiwadi", "Anand", "AnandNagar", "Anandnagar", "", ]
        }, {
            name: "Morvi",
            areas: ["Morvi", "Wankaner", "Maliya", "Tankara", "Lodhika", "Wadhwan", "Dhrangadhra", "Surendranagar", "Muli", "Sayla", "Chotila", "Limdi", "Dhandhuka", "Viramgam", "Bhavnagar", "Gariadhar", "Palitana", "Botad", "Ranpur", "Garbada", "Upleta", "Rajula", "Savarkundla", "Amreli", "Lathi", "Ghogha", "Talaja", "Mahuva", "Keshod", "Veraval", "Junagadh", "SasanGir", "Una", "Diu", ]
        }, {
            name: "Anand",
            areas: ["Anand", "Gujarat", "India", ]
        }, {
            name: "Bhuj",
            areas: ["Anjar", "Bhuj", "Bhachau", "Rapar", "Mundra", "Mandvi", "Naliya", "Gandhidham", "Adipur", ]
        }, {
            name: "Junagadh",
            areas: ["Bhesan", "Junagadh", "Kodinar", "Mangrol", "Manavadar", "Keshod", "Vanthali", "Veraval", "Talala", "Una", "SasanGir", ]
        }, {
            name: "Surendranagar",
            areas: ["Surendranagar", "Wadhwan", "Limbdi", "Chotila", "Muli", "Sayla", "Dhrangadhra", "Lakhtar", "WadhwanCity", "MuliTaluka", ]
        }, {
            name: "Veraval",
            areas: ["Sorath", "Gir", "Junagadh", "Porbandar", "Rajkot", "Jamnagar", "Bhavnagar", "Amreli", "Kachchh", ]
        }, {
            name: "Godhra",
            areas: ["Godhra", "Dahod", "Panchmahal", "Vadodara", "Surat", "Ahmedabad", "Anand", "Gandhinagar", "Mehsana", "Rajkot", "Jamnagar", "Junagadh", "Porbandar", "Bhavnagar", "Amreli", "Surendranagar", "Kutch", "Morbi", "Narmada", "Navsari", "Tapi", "Valsad", ]
        }, {
            name: "Navsari",
            areas: ["Navsari", "Gandevi", "Bardoli", "Umarpada", "Jalalpore", "Surat", "Vyara", "Dangs", "Ahwa", "Tapi", ]
        }, {
            name: "Dahod",
            areas: ["Dahod", "Fatepura", "Jhalod", "Panchmahal", "Godhra", "Kalol", "Anand", "Bharuch", "Vadodara", "Surat", "Navsari", "Bardoli", "Kadi", "Mehsana", "Ahmedabad", "Gandhinagar", "Valsad", ]
        }, {
            name: "Botad",
            areas: ["Botad", "Bhavnagar", "Rajkot", "Jamnagar", "Junagadh", "Porbandar", "Amreli", "Surendranagar", "Kutch", "Gandhinagar", ]
        }, {
            name: "Amreli",
            areas: ["Amreli", "Gujarat", "India", ]
        }, {
            name: "Anjar",
            areas: ["Anjar", "Bhuj", "Gandhidham", "Adipur", "Bhachau", "Anand", "Ahmedabad", "Vadodara", "Surat", "Navsari", "Bharuch", "Ankleshwar", ]
        }, {
            name: "ChhotaUdepur",
            areas: ["Abrama", "Akodara", "Alindra", "Amod", "Anand", "Anklav", "Ankleshwar", "Atladara", "Bharuch", "Bhilad", "Bhuj", "Chandkheda", "Dabhoi", "DabhoiRoad", "Dahej", "Dandi", "Dantali", "Dediapada", "Dhanora", "Dharampur", "Dholka", "Dhrol", "Dhuva", "Digras", "Dungarpur", "Fatepura", "Gandevi", "Ganod", "Garodia", "Godhra", "Gogo", "Gondal", "Halol", "Hansot", "Himatnagar", "Idar", "Jambusar", "Jamjodhpur", "Jasdan", "Jetpur", "Jhagadia", "Jhulasan", "Junagadh", "Kalol", "Karamsad", "Kashipura", "Kevadia", "Khambhat", "Kharod", "Kheda", "Khedbrahma", "Kodinar", "Kokhrajar", "KotadaSangani", "Koth", "Kothi", "Kumbhariya", "Lunawada", "Mahemdabad", "Mahudha", "Makarpura", "Malpur", "Manavadar", "Mandvi", "Mangrol", "Meghraj", "Modasa", "Morbi", "Nadiad", "Nanakwada", "Nandol", "Narmada", "Navsari", "Padra", "Pardi", "Patan", "Petlad", "Prantij", "Radhanpur", "Rajula", "Ramol", "Ranoli", "Rapar", "Salaya", "Santrampur", "Sarigam", "Savarkundla", "Savli", "Sayan", "Sehore", "Shehra", "Shihor", "Shil", "Shujalpur", "Sidhpur", "Sihor", "Sojitra", "Songadh", "Talaja", "Talod", "Thara", "Umbergaon", "Umrala", "Upleta", "Vadnagar", "Valia", "Vapi", "Vav", "Vyara", "Wadhwan", "Waghodia", "Wankaner", "Zalod", ]
        }, {
            name: "Mandvi",
            areas: ["Mandvi", "Mundra", "Anjar", "Bhachau", "Bhuj", "Gandhidham", "Jamnagar", "Junagadh", "Porbandar", "Rajkot", "Surat", "Vadodara", ]
        }, {
            name: "Manavadar",
            areas: ["Manavadar", "Keshod", "Junagadh", "Veraval", "Somnath", "GirSomnath", "Una", "Talala", "Kodinar", "SasanGir", ]
        }, {
            name: "Modasa",
            areas: ["Modasa", "Gujarat", "India", ]
        }, {
            name: "Sidhpur",
            areas: ["Sidhpur", "Gujarat", "India", ]
        }, {
            name: "Talaja",
            areas: ["Abdasa", "Adalaj", "Ahwa", "Amreli", "Anand", "Anjar", "Ankleshwar", "Bardoli", "Bharuch", "Bhavnagar", "Bhuj", "Chanasma", "Dabhoi", "Dahod", "Danta", "Dholka", "Gandhinagar", "Godhra", "Himatnagar", "Jamnagar", "Junagadh", "Kalol", "Kandla", "Kapadvanj", "Keshod", "Khambhat", "Lathi", "Mehsana", "Modasa", "Morvi", "Nadiad", "Navsari", "Palanpur", "Patan", "Petlad", "Porbandar", "Radhanpur", "Rajkot", "Sabarkantha", "Sanand", "Savarkundla", "Sidhpur", "Surendranagar", "Surat", "Talaja", "Thangadh", "Umbergaon", "Vadnagar", "Vadodara", "Valsad", ]
        }, {
            name: "Umbergaon",
            areas: ["Umbergaon", "Gujarat", "India", ]
        }, {
            name: "Unjha",
            areas: ["Unjha", "Gujarat", "India", ]
        }, {
            name: "Vapi",
            areas: ["Vapi", "Daman", "Silvassa", "Dadra", "NagarHaveli", ]
        }, {
            name: "Bharuch",
            areas: ["Bharuch", "Ankleshwar", "Dahej", "Jhagadia", "Panoli", "Vagra", "Vadodara", "Surat", "Navsari", "Bardoli", "Vapi", "Umbergaon", "Dandi", "Mandvi", "Rajpipla", "Nandod", "Netrang", "Valia", "Jhulasan", "Dabhoi", "Olpad", "Sarod", "Hansot", "Amod", "Anklav", "Valbhipur", "Vav", "Umargam", "Utran", "Uchchhal", "Pardi", "Palsana", "Magodara", "Mangrol", "Mandvi", "Mangrol", "Mahemdavad", "Madhi", "Ludhiana", "Luni", "Lathi", "KotadaSangani", "Kosamba", "Kothara", "Kathor", "Jhundpura", "Jhulasan", "Jalalpore", "Jhagadia", "Jambusar", "Itola", "Hansot", "Halol", "Godhra", "Gandevi", "Gandhar", "FertilizerNagar", "Dabhoi", "Dediapada", "DabhoiRoad", "Chhapra", "Chandod", "Chanod", "BharuchCity", "BharuchCantonment", "AnkleshwarGIDC", "Ankleshwar", "Amod", "Aliyabad", "Alirajpur", "", ]
        }, {
            name: "Dabhoi",
            areas: ["Dabhoi", "Gujarat", "India", ]
        }, {
            name: "Dahanu",
            areas: ["Dahanu", "Gujarat", "India", ]
        }, {
            name: "Kapadvanj",
            areas: ["KapadvanjTaluka", "Gujarat", "India", ]
        }, {
            name: "Keshod",
            areas: ["Keshod", "Kodinar", "Somnath", "Gir", "Veraval", "Talala", "Junagadh", "Porbandar", "Rajkot", "Bhavnagar", "Vadodara", "Surat", "Ahmedabad", "Anand", "Nadiad", "Bhuj", "Gandhidham", "Mundra", "Navsari", "Valsad", ]
        }, {
            name: "Khambhat",
            areas: ["Khambhat", "Gujarat", "India", ]
        }, {
            name: "Mahuva",
            areas: ["Bhavanagar", "Botad", "Dholka", "Gariadhar", "Jetpur", "Keshod", "Mahuva", "Mandvi", "MotiDaman", "Palitana", "Upleta", "Vadodara", "Valsad", ]
        }, {
            name: "Savarkundla",
            areas: ["Savarkundla", "Amreli", "Anand", "Bharuch", "Bhavnagar", "Bhuj", "Dahod", "Gandhinagar", "Jamnagar", "Junagadh", "Kheda", "Mehsana", "Nadiad", "Navsari", "Porbandar", "Rajkot", "Surat", "Surendranagar", "Vadodara", "Valsad", ]
        }, {
            name: "Songadh",
            areas: ["Dediapada", "Ahwa", "Dang", "Waghai", "Saputara", "Subir", "Dharampur", "Vansda", "Gandevi", "Navsari", "Jalalpore", "Billimora", "Valsad", ]
        }, {
            name: "Valia",
            areas: ["Valia", "Gujarat", "India", ]
        }, {
            name: "Vyara",
            areas: ["Vyara", "Dang", "Gujarat", "India", ]
        }, {
            name: "Ankleshwar",
            areas: ["Athwa", "Bajwa", "Bardoli", "Bhadra", "Bhatar", "Bhesan", "Dabhoi", "Dandi", "Dared", "Dediapada", "Dhandhuka", "Dhoraji", "Dhrangadhra", "Dhrol", "Fared", "Halol", "Hansot", "Jambusar", "Jasdan", "Jetpur", "Junagadh", "Kalol", "Kapadvanj", "Keshod", "Khambhat", "Mandvi", "Mangrol", "Meghraj", "Modasa", "Morbi", "Nadiad", "Navsari", "Padra", "Palanpur", "Palitana", "Pardi", "Rajkot", "Salaya", "Sayan", "Shapar", "Shihor", "Shivrajpur", "Talaja", "Umbergaon", "Una", "Upleta", "Vadnagar", "Vadodara", "Valsad", ]
        }, {
            name: "Balasinor",
            areas: ["Sidsar", "Dhaneti", "Kothi", "Ghoghavadar", "Jambusar", "Valia", "Sinor", "Vadia", "Dabhoi", "Chandod", "Jalalpore", "Navsari", "Bardoli", "Surat", "Vyara", "Tapi", "Umbergaon", "Valsad", ]
        }, {
            name: "Bardoli",
            areas: ["Bardoli", "Mandvi", "Navsari", "Valsad", "Dangs", ]
        }, {
            name: "Bhachau",
            areas: ["Bhachau", "Bhuj", "Dhrangadhra", "Gandhidham", "Jamnagar", "Junagadh", "Morbi", "Nadiad", "Navsari", "Rajkot", "Surat", "Vadodara", "Ahmedabad", "Anand", "Ankleshwar", "Bharuch", "Bhavnagar", "Dahod", "Godhra", "Himatnagar", "Kheda", "Mehsana", "Modasa", "Surendranagar", "Valsad", ]
        }, {
            name: "Borsad",
            areas: ["Borsad", "Gujarat", "India", ]
        }, {
            name: "Dabhoi",
            areas: ["Dabhoi", "Gujarat", "India", ]
        }, {
            name: "Dediapada",
            areas: ["Dediapada", "Gujarat", "India", ]
        }, {
            name: "Dehgam",
            areas: ["Dehgam", "Gujarat", "India", ]
        }, {
            name: "Dholka",
            areas: ["Dholka", "Bavla", "Barwala", "Dhandhuka", "Dholera", "Dhrol", "Garbada", "Jetalpur", "Jhulasan", "Kadi", "Kalol", "Kathlal", "Keshod", "Khambhat", "KotadaSangani", "Mahemdabad", "Matar", "Meghraj", "Modasa", "MorvaHadaf", "Nadiad", "Nagalpur", "Navsari", "Olpad", "Padra", "Palanpur", "Pali", "Pardi", "Patan", "Petlad", "Radhanpur", "Ranpur", "Santalpur", "Sarod", "Savarkundla", "Shahpur", "Shehra", "Talaja", "Tarapur", "Thara", "Umbergaon", "Unjha", "Vadnagar", "Valia", "Vapi", "Vaso", "Vav", "Veraval", "Viramgam", "Visnagar", "Wadhwan", "Wankaner", ]
        }, {
            name: "Halol",
            areas: ["Amarpura", "Ambaliya", "Ambli", "Anand", "AnandNagar", "Atladara", "Bapunagar", "Bhadra", "Bhadran", "Bhatena", "Bhavanagar", "Bhimjipura", "Bhuj", "Chandkheda", "Dariyapur", "Dascroi", "Ellisbridge", "Ghatlodia", "Gomtipur", "GulbaiTekra", "Isanpur", "Jamalpur", "JivrajPark", "Kalupur", "Kathwada", "Khadia", "Khokhra", "Kotarpur", "Kumbharwada", "Kubernagar", "LalDarwaza", "Lambha", "Madhupura", "Memnagar", "Mirzapur", "Nehrunagar", "Nikol", "Odhav", "Paldi", "PanjaraPol", "Ranip", "Ravat", "Sabarmati", "Sarkhej", "Shahibaug", "Sola", "Vadaj", "Vadodara", "VasnaBhayli", "Vejalpur", ]
        }, {
            name: "Jetpur",
            areas: ["Jetpur", "Dhoraji", "Upleta", "Gondal", "Rajkot", "Jamnagar", "Junagadh", "Porbandar", "Amreli", "Bhavnagar", ]
        }, {
            name: "Jhalod",
            areas: ["Amod", "Bagodara", "Balasinor", "Bharuch", "Bhiloda", "Dabhoi", "Dahegam", "Danta", "Dharampur", "Dohad", "Fatepura", "Gandevi", "Jalalpore", "Jhalod", "Kapadvanj", "Karjan", "Kathlal", "Keshod", "Lunawada", "Mahudha", "Mansa", "Meghraj", "Modasa", "MorvaHadaf", "Nadiad", "Navsari", "Padra", "Pardi", "Petlad", "Prantij", "Radhanpur", "Santrampur", "Shahera", "Shihor", "Shujalpur", "Talaja", "Tarapur", "Thasra", "Umbergaon", "Vaghodia", "Valia", "Vansda", "Vaso", ]
        }, {
            name: "Kalol",
            areas: ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Dang", "DevbhumiDwarka", "Gandhinagar", "GirSomnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Tapi", "Vadodara", "Valsad", ]
        }, {
            name: "Kapadvanj",
            areas: ["KapadvanjTaluka", "Gujarat", "India", ]
        }, {
            name: "Keshod",
            areas: ["Dhariwal", "Ghoghavadar", "Kothara", "MotaKandora", "NanaKandora", "Navapara", "Pachad", "Valvada", "Vanthali", ]
        }, {
            name: "Mahudha",
            areas: ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Dohad", "Gandhinagar", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad", ]
        }, {
            name: "Mansa",
            areas: ["Mansa", "Gujarat", "India", ]
        }, {
            name: "Meghraj",
            areas: ["Meghraj", "Gujarat", "India", ]
        }, {
            name: "Mehsana",
            areas: ["Unjha", "Kadi", "Kalol", "Vijapur", "Visnagar", "Idar", "Himatnagar", "Modhera", "Patan", "Radhanpur", "Chanasma", "Gozaria", "Becharaji", "Kheralu", "Siddhpur", "Taranga", "Tharad", "Vadnagar", "Deesa", "Dhanera", "Danta", "Dantiwada", "Prantij", ]
        }, {
            name: "Modhera",
            areas: ["Modhera", "Gujarat", "India", ]
        }, {
            name: "MorvaHadaf",
            areas: ["MorvaHadaf", "Gujarat", "India", ]
        }, {
            name: "Nadiad",
            areas: ["Nadiad", "Gujarat", "India", ]
        }, {
            name: "Navsari",
            areas: ["Bardoli", "Bilimora", "Dandi", "Gandevi", "Jalalpore", "Navsari", "Umarpada", ]
        }, {
            name: "Padra",
            areas: ["Padra", "Vadodara", "Gujarat", "India", ]
        }, {
            name: "Palanpur",
            areas: ["Palanpur", "Gujarat", "India", ]
        }, {
            name: "Petlad",
            areas: ["Athwalines", "Bajwa", "Bareja", "Bhadran", "Dabhasa", "Dabhoi", "DabhoiRoad", "Fatehpura", "Gajera", "Ghoghavadar", "GhoghavadarRoad", "Ghojod", "Godhra", "Goyla", "Hansot", "Isanpur", "Jambusar", "Jamnagar", "Kathlal", "Keshod", "Khapat", "Kheda", "Kim", "Kotarpur", "Lunawada", "Mahudha", "Meghraj", "Modasa", "MorvaHadaf", "Nadiad", "Nanakwada", "Navsari", "Padra", "Pardi", "PardiNaka", "PatelChowk", "Petlad", "Pratapnagar", "Puna", "PunaGam", "Randesan", "Santrampur", "Sarod", "Savli", "Sayan", "Shihor", "Sihor", "Silvassa", "Somanth", "Tarapur", "Thasra", "Valia", "Vapi", "VapiGIDC", "VapiIndustrialEstate", "VapiNaka", "Vasad", "Vataman", "Vavdi", "VavdiBazar", "Velugam", "Vidhyanagar", "Vyara", ]
        }, {
            name: "Radhanpur",
            areas: ["Radhanpur", "Chanasma", "Patan", "Sidhpur", "Palanpur", "Deesa", "Tharad", "Vadnagar", "Mehsana", "Unjha", "Visnagar", "Kheralu", "Kalol", "Godhra", "Dahod", "Anand", "Nadiad", "Borsad", "Umreth", "Petlad", "Tarapur", "Anjar", "Bhuj", "Gandhidham", "Mundra", "Mandvi", "Bhachau", "Rapar", "Anandnagar", "Borsara", "Dhanera", "Danta", "Deodar", "Dhanot", "Dharampur", "Dholka", "Dhrol", "Farednagar", "Jasdan", "Jetpur", "Junagadh", "Keshod", "Khambhat", "Lathi", "Lunsapur", "Mahuva", "Mankapur", "Modasa", "Morbi", "Narmada", "Navsari", "Padra", "Palitana", "Pardi", "Patan", "Porbandar", "Rajkot", "Rajula", "Ranavav", "Salaya", "Savarkundla", "Sayla", "Shapar", "Surat", "Surendranagar", "Talaja", "Thangadh", "Umbergaon", "Vadnagar", "Vadodara", "Valia", "Valsad", "Vanthali", "Vapi", "Veraval", "Vijapur", "Viramgam", "Visnagar", "Wankaner", ]
        }, {
            name: "Ranpur",
            areas: ["Ranpur", "Gujarat", ]
        }, {
            name: "Santrampur",
            areas: ["Santrampur", "Dharampur", "Godhra", "Panchmahal", "Kalol", "Anand", "Ahmedabad", "Vadodara", "Surat", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Porbandar", "Gandhinagar", "Nadiad", "Navsari", "Valsad", "Ankleshwar", "Bharuch", "Surat", ]
        }, {
            name: "Savarkundla",
            areas: ["Savarkundla", "Amreli", "Rajkot", "Surat", "Vadodara", "Ahmedabad", "Anand", "Gandhinagar", "Jamnagar", "Junagadh", "Morbi", "Bhavnagar", "Bhuj", "Godhra", "Himatnagar", "Keshod", "Navsari", "Palanpur", "Veraval", "Surendranagar", "Botad", ]
        }, {
            name: "Shamlaji",
            areas: ["Vadali", "Bhiloda", "Idar", "Himatnagar", "Modasa", "Prantij", "Kalol", "Mehsana", "Visnagar", "Unjha", "Kadi", "Siddhpur", "Patan", "Radhanpur", "Chanasma", "Palanpur", "Deesa", "Tharad", "Dhanera", "Danta", "Dantiwada", "Vadnagar", "Meghraj", "Viramgam", "Kheralu", "Becharaji", "Tarapur", "Bayad", "Modhera", "Malpur", "Lunawada", "Godhra", "Dahod", "Jhalod", "Dohad", "Devgadbaria", "Nadiad", "Anand", "Borsad", "Vadodara", "Savli", "Padra", "Karjan", "VadodaraRural", "VadodaraUrban", "Atladara", "Manjalpur", "Akota", "Sayajigunj", "Makarpura", "Raopura", "Karelibaug", "Alkapuri", "Gotri", "Tarsali", "Jetalpur", "Waghodia", "Dabhoi", "Sinor", "Naswadi", "ChhotaUdepur", "Sankheda", "Kapadvanj", "Mahudha", "Kheda", "Kathlal", "AnandNagar", "Anklav", "Borsad", "Sojitra", "Tarapur", "Umreth", "Petlad", "Ankleshwar", "Bharuch", "Zadeshwar", "Jhagadia", "Vagra", "Valia", "Jambusar", "Hansot", "Amod", "Vaghodia", "AnkleshwarRural", "AnkleshwarUrban", "BharuchRural", "BharuchUrban", ]
        }, {
            name: "Shehra",
            areas: ["Shehra", "Gujarat", "India", ]
        }, {
            name: "Talaja",
            areas: ["Ajwa", "Alang", "Bardoli", "Bhadran", "Bhesan", "Dandi", "Dhandhuka", "Dholera", "Dholka", "Dhrol", "Garbada", "Jambusar", "Jetpur", "Kadodara", "Kagvad", "Kathlal", "Keshod", "Mahuva", "Mandvi", "Mangrol", "Mendarda", "MiyagamKarjan", "Modasa", "MorvaHadaf", "Nadiad", "Navsari", "Padra", "Palanpur", "Palitana", "Pardi", "Patan", "Petlad", "Pilvai", "Ranpur", "Savarkundla", "Talaja", "Umbergaon", "Una", "Valia", "Vapi", "Vyara", "Waghai", ]
        }, {
            name: "Thara",
            areas: ["Thara", "Gujarat", "India", ]
        }, {
            name: "Tharad",
            areas: ["Tharad", "Dhanera", "Vav", "Bhiloda", "Suigam", "Chanasma", "Radhanpur", "Tharad", "Dhanera", "Vav", "Bhiloda", "Suigam", "Chanasma", "Radhanpur", ]
        }, {
            name: "Umbergaon",
            areas: ["Athwalines", "Bardoli", "Bhadra", "Bhestan", "Dabholi", "Umbergaon", ]
        }, {
            name: "Una",
            areas: ["Una", "Gujarat", "India", ]
        }, {
            name: "Vadnagar",
            areas: ["Vadnagar", "Gujarat", "India", ]
        }, {
            name: "Vadodara",
            areas: ["Ajwa", "Akota", "Alkapuri", "Atladara", "Bapod", "DabhoiRoad", "Fatehganj", "Gotri", "Harni", "Jetalpur", "KalaGhoda", "Karelibaug", "Manjalpur", "Nizampura", "OldPadraRoad", "Sayajigunj", "Subhanpura", "Tarsali", "WaghodiaRoad", "Wadi", "Warasiya", ]
        }, {
            name: "Valia",
            areas: ["Valia", "Gujarat", "India", ]
        }, {
            name: "Vansda",
            areas: ["Vansda", "Gujarat", "India", ]
        }, {
            name: "Vapi",
            areas: ["Vapi", "Daman", "Silvassa", "Dadra", "NagarHaveli", ]
        }, {
            name: "Vyara",
            areas: ["Athwa", "Bardoli", "Dandi", "Dharampur", "Uchhal", "Ukai", "Umbergaon", "Valod", "Vansda", "Vapi", "Vyara", ]
        }, {
            name: "Wankaner",
            areas: ["Wankaner", "Gujarat", "India", ]
        }, {
            name: "Barda",
            areas: ["Barda", "Gujarat", "India", ]
        }, {
            name: "Chanasma",
            areas: ["Chanasma", "Sidhpur", "Patan", "Radhanpur", "Kadi", "Kalol", "Mehsana", "Unjha", "Vijapur", "Visnagar", ]
        }, {
            name: "Danta",
            areas: ["Danta", "Gujarat", "India", ]
        }, {
            name: "Dharampur",
            areas: ["Dharampur", "Gujarat", "India", ]
        }, {
            name: "Dhoraji",
            areas: ["Dhoraji", "Upleta", "Gondal", "Jetpur", "Rajkot", "Jamnagar", "Junagadh", "Porbandar", "Somnath", "Dwarka", "BetDwarka", "Nadiad", "Anand", "Vadodara", "Bharuch", "Surat", "Navsari", "Valsad", ]
        }, {
            name: "Dwarka",
            areas: ["Dwarka", "Okhamandal", "Jamnagar", "Bhanvad", "Rajkot", "Morbi", "Surendranagar", "Bhavnagar", "Amreli", "Kutch", ]
        }, {
            name: "Gondal",
            areas: ["Gondal", "Dhoraji", "Upleta", "Jetpur", "Rajkot", "Wankaner", ]
        }, {
            name: "Jamkandorna",
            areas: ["Jamkandorna", "Gujarat", "India", ]
        }, {
            name: "Jasdan",
            areas: ["Vinchhiya", "Jasdan", "Udwada", "Dhadhal", "Dhaneti", "Dhamdachha", "Dhanora", "Dharampur", "Dharmaj", "Dharmaraja", "Dharamsala", "Dharampura", "Dharangadhra", "Dharampuri", "Dharampuram", "Dharampuriya", "Dharangadhra", "Dharampura", "Dharampuram", "Dharampuriya", ]
        }, {
            name: "Junagadh",
            areas: ["Junagadh", "Bhesan", "Una", "Mangrol", "Vanthali", "Keshod", "Veraval", "Talala", "Sutrapada", "Kodinar", ]
        }, {
            name: "Keshod",
            areas: ["Keshod", "Kuchhdi", "Rajula", "Savarkundla", "Amreli", "Dhari", "Lathi", "Ghoghavadar", "Bagasara", "Khambhat", "Anand", "Borsad", "Anklav", "Umreth", "Sojitra", "Petlad", "Tarapur", "Vadodara", "AnandNagar", "Bharuch", "VadodaraKapurai", "VadodaraMakarpura", "VadodaraManjalpur", "VadodaraNizampura", "VadodaraSarod", ]
        }, {
            name: "Kodinar",
            areas: ["Kodinar", "Gir", "Talala", "Una", "Diu", "Daman", "Vapi", "Silvassa", "Navsari", "Bharuch", "Surat", "Vadodara", "Ahmedabad", "Anand", "Nadiad", "Mehsana", "Gandhinagar", "Patan", "Palanpur", "Bhuj", "Rajkot", "Jamnagar", "Junagadh", "Porbandar", "Dwarka", "Somnath", "Chorvad", "Morvi", "Surendranagar", "Botad", "Bhavnagar", "Veraval", "Keshod", "Amreli", "Anjar", "Bhujodi", "Mandvi", "Mundra", "Anandnagar", "Ankleshwar", "Bardoli", "Bhachau", "Bulsar", "Dabhoi", "Gandevi", "Godhra", "Halol", "Himatnagar", "Idar", "Jhagadia", "Kapadvanj", "Karjan", "Kathlal", "Keshod", "Kim", "Kodinar", "Lunawada", "Mahudha", "Makarpura", "Manavadar", "Mandvi", "Meghaninagar", "Modasa", "MorvaHadaf", "Nadiad", "Navsari", "Padra", "Pardi", "Petlad", "Pratapgarh", "Radhanpur", "Rajpipla", "Ranpur", "Santrampur", "Savarkundla", "Sevaliya", "Sidhpur", "Songadh", "Surat", "Talaja", "Umbergaon", "Vadnagar", "Vadodara", "Valia", "Valsad", "Vanthali", "Vapi", "Vyara", "Waghodia", "Wankaner", ]
        }, {
            name: "KotdaSangani",
            areas: ["KotdaSangani", "Talaja", "Mahuva", "Gariadhar", "Botad", "Bhavnagar", "Palitana", "Sihor", "Valbhipur", "Rajula", "Savarkundla", "Amreli", "Lathi", "Dhari", "Kadodara", "Sarigam", "Vapi", "Silvassa", "Valsad", "Navsari", "Dang", ]
        }, {
            name: "Lathi",
            areas: ["Ajwa", "Bardoli", "Dandi", "Dabhoi", "Mandvi", "Navsari", "Umbergaon", "Vapi", "Vyara", ]
        }, {
            name: "Lilia",
            areas: ["Lilia", "Gujarat", "India", ]
        }, {
            name: "Mangrol",
            areas: ["Mangrol", "Bardoli", "Dandi", "Mandvi", "Navsari", "Surat", "Valsad", ]
        }, {
            name: "Mendarda",
            areas: ["Mendarda", "Gujarat", "India", ]
        }, {
            name: "MotiDaman",
            areas: ["MotiDaman", "NaniDaman", "Jampore", "Magodara", "Bhimpor", "Dabhel", "Hazira", "", ]
        }, {
            name: "Palitana",
            areas: ["Abad", "Ajnod", "Bagasara", "Bali", "Bamanbore", "Bambhvav", "Bansda", "Barda", "Bareja", "Becharaji", "Bhachau", "Bhadra", "Bhanvad", "Bharuch", "Bhavanagar", "Bhuj", "Borsad", "Botad", "Chalthan", "Chanasma", "ChhotaUdepur", "Chorvad", "Dabhoi", "Dahod", "Danta", "Deesa", "DeesaRural", "Dhoraji", "Dhrangadhra", "Dwarka", "Gariadhar", "Godhra", "Gondal", "Himatnagar", "Idar", "Jamjodhpur", "Jamnagar", "Jetpur", "Junagadh", "Kalavad", "Kalol", "Kapadvanj", "Karachiya", "Karamsad", "Keshod", "Khambhat", "Kheda", "Khedbrahma", "Kheralu", "Kodinar", "Kutch", "Lakhtar", "Lalpur", "Limbdi", "Lunawada", "Mahesana", "Mahuva", "Malia", "Maliya", "MaliyaMiyana", "Manavadar", "Mandvi", "Mangrol", "Mehmedabad", "MiyagamKarjan", "Morbi", "Morvi", "Nadiad", "Navsari", "Padra", "Palanpur", "Panchmahal", "Patan", "Petlad", "Porbandar", "Radhanpur", "Rajkot", "Rajpipla", "Rajula", "Ranpur", "Rapar", "Salaya", "Sanand", "Savarkundla", "Siddhpur", "Sihor", "Silvassa", "Songadh", "Surat", "Surendranagar", "Talaja", "Thangadh", "Tharad", "Umbergaon", "Una", "Unjha", "Upleta", "Vadnagar", "Vadodara", "Valsad", "Vapi", "Veraval", "Vijapur", "Viramgam", "Visnagar", "Vyara", ]
        }, {
            name: "Rajula",
            areas: ["RajulaCity", "RajulaTaluka", "RajulaRural", "RajulaGIDC", "RajulaJillaPanchayat", ]
        }, {
            name: "Upleta",
            areas: ["Amarpura", "Bagwala", "Bhayavadar", "Dhoraji", "Gondal", "Jetpur", "Kalavad", "Keshod", "Lodhika", "Upleta", ]
        }, {
            name: "Vadhvan",
            areas: ["Vadhvan", "Dhola", "Dhrol", "Jambusar", "Valia", "Ankleshwar", "Bharuch", "Vadodara", "Surat", "Navsari", "Valsad", ]
        }, {
            name: "Vanthali",
            areas: ["Vanthali", "Gujarat", "India", ]
        }, {
            name: "Veraval",
            areas: ["Sirsang", "Gopnath", "TalalaGir", "Kodinar", "Una", "SasanGir", "Veraval", "Delvada", "Somnath", "Bhavnagar", ]
        }, {
            name: "Visavadar",
            areas: ["Kalawad", "Rajkot", "Gondal", "Jamnagar", "Junagadh", "Porbandar", "Amreli", "Bhavnagar", "Surendranagar", "Botad", ]
        }, ]
    },
    {
        state: "Haryana",
        cities: [{
            name: "Gurgaon",
            areas: ["DLFCity", "Gurgaon", "SushantLok", "Gurgaon", "UdyogVihar", "Gurgaon", "GolfCourseRoad", "Gurgaon", "PalamVihar", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", "Sector", "Gurgaon", ]
        }, {
            name: "Faridabad",
            areas: ["Ballabgarh", "Faridabad", "FaridabadNIT", "GreenFieldColony", "Saroorpur", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "", ]
        }, {
            name: "Hisar",
            areas: ["Babri", "Balsamand", "Barwala", "Bawanikhera", "Bhiwani", "CharkhiDadri", "Dharuhera", "Fatehabad", "Gohana", "Hansi", "Hisar", "Hodal", "Jind", "Julana", "Karnal", "Ladwa", "Loharu", "Meham", "Naraingarh", "Narnaund", "Narwana", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Safidon", "Samalkha", "Sonepat", "Tohana", "Yamunanagar", ]
        }, {
            name: "Rohtak",
            areas: ["Rohtak", "Meham", "Kalanaur", "Sampla", "Tosham", "BawaniKhera", "Beri", "Jhajjar", "Jind", "Julana", "Narwana", "Safidon", "Uchana", ]
        }, {
            name: "Karnal",
            areas: ["Karnal", "Kaithal", "Jind", "Panipat", "Rohtak", "Sonipat", "Hisar", "Bhiwani", "Fatehabad", "Sirsa", "Rewari", "Palwal", "Mahendragarh", "Nuh", "Mewat", ]
        }, {
            name: "Sonipat",
            areas: ["Sonipat", "Gohana", "Kharkhoda", "Baraut", "Rai", "Murthal", "SonepatSadar", "Bawana", "Jhajjar", "Ganaur", "Hodal", "GarhiHarsaru", "Gohana", "MeerutRoad", "Sampla", "Julana", "Jind", "Safidon", "Guhla", "Cheeka", "Kaithal", "Karnal", "Panipat", "Rohtak", "Jhajjar", "Hisar", "Fatehabad", "Sirsa", "Tohana", "Bhiwani", "CharkhiDadri", "Rewari", "Narnaul", "Mahendragarh", ]
        }, {
            name: "Panipat",
            areas: ["IsranaSamalkhaPanipatTarafAnsarPanipatTarafMakhdumZadganPanipatTarafRajpuraPanipatRefineryTownshipPanipatThermalPowerStation", ]
        }, {
            name: "Jind",
            areas: ["Jind", "Safidon", "Julana", "Uchana", "Narwana", "Tohana", "Hansi", "Hisar", "Fatehabad", "Ratia", "Agroha", "Barwala", "Bhiwani", "Dadri", "Dharuhera", "Gohana", "Gurgaon", "Jhajjar", "Jharsa", "Kaithal", "Kalanaur", "Karnal", "Ladwa", "Loharu", "Meham", "Naraingarh", "Palwal", "Panchkula", "Panipat", "Pehowa", "Pinjore", "Rewari", "Rohtak", "Samalkha", "Sonepat", "Tosham", "Yamunanagar", ]
        }, {
            name: "Bhiwani",
            areas: ["Bhiwani", "CharkhiDadri", "Hansi", "Hisar", "Jind", "Karnal", "Kaithal", "Panipat", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar", ]
        }, {
            name: "Rewari",
            areas: ["Rewari", "Bawal", "Mahendragarh", "Narnaul", "Ateli", "Kosli", "CharkhiDadri", "Bhiwani", "Loharu", "Tosham", "Dadri", "Bawanikhera", "Jhajjar", "Badhra", "Chuchhakwas", "NangalChaudhary", "Nai", "Taoru", "GarhiBolni", "Kairu", "KaninaKhas", "Jatusana", "NangalSirohi", "Uklana", "Safidon", "Jind", "Julana", "Narwana", "Tohana", "Guhla", "Barwala", "Ellenabad", "Ganaur", "Gohana", "GohanaKhurd", "Gurgaon", "Hansi", "Hisar", "Hodal", "JhajjarKotwali", "Jind", "Julana", "Narwana", "Tohana", "Guhla", "Barwala", "Ellenabad", "Ganaur", "Gohana", "GohanaKhurd", "Gurgaon", "Hansi", "Hisar", "Hodal", "JhajjarKotwali", "Kaithal", "Kalanaur", "Karnal", "Ladwa", "Loharu", "Meham", "Mullana", "Naraingarh", "Narnaul", "Narnaund", "Narwana", "Nilokheri", "Palwal", "Panchkula", "Panipat", "Pataudi", "Pehowa", "Pinjore", "Radaur", "Rai", "Rewari", "Rohtak", "Safidon", "Samalkha", "Shahabad", "Sirsa", "Siwani", "Sohna", "Sonipat", "Tohana", "Yamunanagar", ]
        }, {
            name: "Palwal",
            areas: ["Haryana", "Palwal", "Ballabgarh", "Faridabad", "Gurugram", "Hansi", "Hisar", "Jind", "Kaithal", "Karnal", "Kosli", "Meham", "Narnaund", "Narwana", "Palwal", "Pehowa", "Rewari", "Rohtak", "Safidon", "Sirsa", "Sonipat", "Tohana", "Tosham", "Uchana", ]
        }, {
            name: "Mahendragarh",
            areas: ["Narnaul", "Ateli", "NangalChaudhary", "Mahendragarh", "Kanina", "Jatusana", "CharkhiDadri", "Bawal", "Rewari", "Rohtak", "Jhajjar", ]
        }, {
            name: "CharkhiDadri",
            areas: ["Charkhi", "Dadri", "Haryana", ]
        }, {
            name: "Jhajjar",
            areas: ["Bahadurgarh", "Beri", "CharkhiDadri", "Gohana", "Jhajjar", "Meham", "Rohtak", "Salhawas", "Tosham", ]
        }, {
            name: "Kaithal",
            areas: ["Kaithal", "Pundri", "Pehowa", "Guhla", "Ladwa", "Kalayat", "Rajound", "Dhand", "Siwan", "Cheeka", "Jind", "Narwana", "Uchana", "Safidon", "Julana", "Assandh", "Gharaunda", "Nilokheri", "Karnal", "Panipat", "Sonipat", "Rohtak", "Jhajjar", "Hisar", "Fatehabad", "Sirsa", "Tohana", "Ratia", "BhattuKalan", "Dabwali", "Ellenabad", "Sirsa", ]
        }, {
            name: "Panchkula",
            areas: ["Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", "Sector", ]
        }, {
            name: "Ambala",
            areas: ["AmbalaCantt", "AmbalaCity", "Barara", "Bhabat", "Buria", "Naraingarh", "Shamgarh", "Saha", "VidyarNagar", "BaldevNagar", "Jagadhri", ]
        }, {
            name: "Yamunanagar",
            areas: ["Chandigarh", "Faridabad", "Gurgaon", "Hisar", "Rohtak", "Sonipat", "Karnal", "Panipat", "Jind", "Kaithal", "Fatehabad", "Sirsa", "Rewari", "Bhiwani", "Jhajjar", "Mahendragarh", "Palwal", "Panchkula", "Ambala", "Kurukshetra", "Yamunanagar", "Kaithal", "Jind", "Panipat", "Sonipat", "Karnal", "Rohtak", "Bhiwani", "Jhajjar", "Fatehabad", "Sirsa", "Rewari", "Mahendragarh", "Palwal", "Panchkula", "Ambala", "Kurukshetra", "Yamunanagar", ]
        }, {
            name: "Sirsa",
            areas: ["Dabwali", "Ellenabad", "Hanumangarh", "Hisar", "Kalanwali", "Narnaund", "Ratia", "Safidon", "Samalkha", "Sanghi", "Sirsa", "Uchana", ]
        }, {
            name: "Fatehabad",
            areas: ["Fatehabad", "Tohana", "Ratia", "JakhalMandi", "Hisar", "Uklana", "Adampur", "Barwala", "Bhiwani", "Hansi", "Jind", "Narwana", "Safidon", "Sirsa", "Siwani", "Uchana", ]
        }, {
            name: "Kurukshetra",
            areas: ["Kurukshetra", "Pehowa", "Ismailabad", "Ladwa", "Shahabad", "Thanesar", "Jhansa", "Pipli", "GurukulKurukshetra", "", ]
        }, ]
    },
    {
        state: "Himachal Pradesh",
        cities: [{
            name: "Shimla",
            areas: ["Shimla", "ChauraMaidan", "NewShimla", "TaraDevi", "SummerHill", "Sanjauli", "Jakhoo", "ChottaShimla", "Kasumpti", "Dhalli", "", ]
        }, {
            name: "Dharamsala",
            areas: ["Dharamsala", "Sidhbari", "KotwaliBazar", "Ramnagar", "Jwalaji", "Bhagsunag", "Naddi", "Mcleodganj", "Dharamkot", "Kareri", "Triund", "Siyal", "Kotwali", "Dalhousie", "Bharmour", "Chamba", "Lahaul", "Spiti", "Kinnaur", ]
        }, {
            name: "Manali",
            areas: ["OldManali", "NewManali", "Vashisht", "Manikaran", "SolangValley", "Gulaba", "Kothi", "Marhi", "RahalaFalls", "RaniNala", ]
        }, {
            name: "Kasauli",
            areas: ["Kasauli", "Dharampur", "Morni", "Nalagarh", "Solan", "Baddi", "Parwanoo", "Pinjore", "Kalka", "Ambala", ]
        }, {
            name: "Solan",
            areas: ["Solan", "Baddi", "Nalagarh", "Kasauli", "Parwanoo", "Solan", "Subathu", "Kandaghat", "Jabli", "Arki", "Ramgarh", "", ]
        }, {
            name: "Palampur",
            areas: ["Dariyal", "KotwaliBazar", "Thural", "Jassur", "Nurpur", "Indora", "Shahpur", "Jawali", "DehraGopipur", "Baijnath", ]
        }, {
            name: "Dalhousie",
            areas: ["Dalhousie", "Bakrota", "Balun", "BaraBhangal", "Bharmoti", "Bhawanigarh", "Bhattiyat", "Bhuri", "Bilaspur", "Bir", "ChamundaDevi", "ChamundaNandikeshwar", "Chanunta", "Chauhra", "Chamba", "Chandi", "Chatru", "Chauntra", "Chirgaon", "Dainkund", "Dharamsala", "Dharmpur", "Drang", "Fatehpur", "Ghanari", "Ghumarwin", "Hamirpur", "Jassur", "Jwalaji", "Kangra", "Khajjiar", "Kotkhai", "Larji", "Mahasu", "Mahilpur", "Nurpur", "Palampur", "Pandoh", "PaontaSahib", "Patti", "Phagwara", "Phillaur", "Pragpur", "Rajpura", "Ranital", "Rohru", "Sabathu", "Sarkaghat", "Seoni", "Shimla", "Shogi", "Sidhbari", "Solan", "Sujanpur", "Sundernagar", "Talai", "Taragarh", "Thural", "Tikkar", ]
        }, {
            name: "Chamba",
            areas: ["Chamba", "Dalhousie", "Khajjiar", "Bakrota", "Bakrala", "Banikhet", "Barsar", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "Bharmoti", "Bhattiyat", "Bhawanigarh", "", ]
        }, {
            name: "Khajjiar",
            areas: ["Khajjiar", "Dalhousie", "Chamba", "Bharmaur", "LahaulandSpiti", "Kinnaur", "Kullu", "Manali", "Shimla", "Solan", "Sirmaur", "Mandi", "Bilaspur", "Hamirpur", "Kangra", "Una", ]
        }, {
            name: "Kullu",
            areas: ["Naggar", "Manali", "Aut", "Katrain", "Raison", "Kuntwari", "Larji", "Marhi", "Solang", "Dhundi", "Jagatsukh", "Bajaura", "Malana", "Manikaran", "Kasol", "Bir", "Billing", "Kullu", "Gadsa", "Sissu", "Tandi", "Keylong", "Udaipur", "Jispa", "Darcha", "Sarchu", "Leh", "", ]
        }, {
            name: "Mandi",
            areas: ["Mandi", "Balh", "Sundernagar", "Jogindernagar", "Padhar", "Karsog", "Sarkaghat", "Nachan", "Kamlah", "Thunag", "Aut", "Gohar", "Rait", "Dharmpur", "Jwalaji", "Jogindernagar", "Mandi", "Balh", "Sundernagar", "Jogindernagar", "Padhar", "Karsog", "Sarkaghat", "Nachan", "Kamlah", "Thunag", "Aut", "Gohar", "Rait", "Dharmpur", "Jwalaji", "Jogindernagar", ]
        }, {
            name: "Nahan",
            areas: ["Nahan", "Sangrah", "PaontaSahib", "Shillai", "Arki", "Pachhad", "Paplu", "Nalagarh", "Kotkhai", "Jubbal", "Kotgarh", "RampurBushahar", "Sarahan", "Shonthar", "Sunhani", "Thanedar", "Tikkar", ]
        }, {
            name: "ReckongPeo",
            areas: ["ReckongPeo", "Kinnaur", "HimachalPradesh", ]
        }, {
            name: "SachPass",
            areas: ["Chamba", "Dalhousie", "Khajjiar", "LahaulandSpiti", "Manali", "Palampur", "Shimla", "Solan", "Sirmaur", "Una", ]
        }, {
            name: "Sarahan",
            areas: ["Sarahan", "HimachalPradesh", ]
        }, {
            name: "Jubbal",
            areas: ["Shahpur", "Jubbal", "Kotkhai", "Rohru", "Chirgaon", "Theog", "Narkanda", "Kotgarh", "RampurBushahar", "JubbalKotkhai", "Suni", "Arki", "Salogra", "Naldehra", "Bhawan", "Baldwara", "JubbalHatti", ]
        }, {
            name: "Kotkhai",
            areas: ["Nagwain", "Thirot", "Jubbal", "Kotkhai", "Rohroo", "Kotgarh", "Suni", "JubbalKotkhai", "Theog", "Chaupal", "Chirgaon", "Kharapathar", "Sarahan", "Anni", "KotkhaiBazar", "Gaura", "Kot", "Jakhalag", "Ropa", "Shilaroo", "KotkhaiTehsil", ]
        }, {
            name: "Kinnaur",
            areas: ["Kalpa", "Pooh", "Nichar", "Sangla", "RekongPeo", "Moorang", "Rampur", "Ribba", "Chitkul", "Sainj", "Jangi", "Payang", "Thangi", "Ropa", "Karcham", "Nako", "Tabo", "Dhankar", "Kaza", "PinValleyNationalPark", "Langza", "Hikkim", "Komik", "Komic", "Losar", "Gete", "Tashigang", "Gyabrang", "Chango", "Lippa", "Rone", "Sazo", "Chhitkul", "Kaurik", "NamgiaDogri", "Gyundi", "Rarang", "Harcha", "Kothi", "Kibber", "Chicham", "TashiJong", "Chirgaon", "MoorangTashiJong", "Shilla", "Sagnam", "NakoLake", "TashiGang", "Lhalung", "Saring", "Atrang", "KazaKhas", "KibberWildlifeSanctuary", "KazaStat", "Kee", "Kibber", "Kaza", "Tashigang", "Rangrik", "Komic", "Hikkim", "Kaza", "Kibber", "Gete", "Langza", "Losar", "Kaza", ]
        }, {
            name: "Narkanda",
            areas: ["Narkanda", "Kotgarh", "Rampur", "Sarahan", "Rohru", "Chirgaon", "Jubbal", "Kotkhai", "Theog", "Shimla", "Jakhoo", "Mashobra", "Kufri", "Fagu", "Naldehra", "LakkarBazar", "Sanjauli", "ChottaShimla", "TaraDevi", "SummerHill", "Jakhu", "Annandale", "Dhalli", "NewShimla", "Kasumpti", "KamnaDevi", "GreenValley", "BantonyCastle", "ChhotaShimla", "ForestHill", "Boileauganj", "Kaithu", "Panthaghati", "Totu", "Shoghi", "Jabli", "Kandaghat", "Solan", "Dagshai", "Subathu", "Arki", "Nalagarh", "Baddi", "Barotiwala", "NalagarhIndustrialArea", "Pinjore", "RaipurRani", "Parwanoo", "Kasauli", "Ramgarh", "SolanBrewery", "Dharampur", "Majri", "MorniHills", "Bhawanigarh", "PinjoreGardens", "Pinjot", "Ramnagar", "Kandaghat", "KotwaliBazar", "DagshaiCantonment", "Sadhora", "Kotwali", "Kandaghat", "Amb", "AmbalaCantt", "AmbalaCity", "Baldwara", "Barara", "Dhulkot", "Naraingarh", "Naggal", "Panchkula", "Pinjore", "RaipurKhurd", "Rasulpur", "Sambhalka", "Shahzadpur", "Shilpgram", "Saha", "SahaUrbanEstate", "Sahaspur", "Yamunanagar", "Jagadhri", "Radaur", "Chhachhrauli", "Mustafabad", "Bilaspur", "Sadhaura", "Tanda", "TalheriBangar", "Talwara", "Bhogpur", "GarhiSamplaKuchesar", "Gohana", "Jhajjar", "Bahadurgarh", "Beri", "CharkhiDadri", "Gurgaon", "Hodal", "Faridabad", "Ballabgarh", "Palwal", "Tauru", "Hathin", "Hodal", "Jatusana", "Nuh", "Prithla", "Taoru", "Dadri", "FerozepurJhirka", "GurgaonRural", "Pataudi", "Rewari", "Sohna", "FerozepurNamak", "Gurgaon", "Manesar", "Bawal", "Kharkhoda", "KosiKalan", "Maham", "Rewari", "Rohtak", "Sonipat", "Jind", "Julana", "Safidon", "UchanaKalan", "Gohana", "Jhajjar", "Meham", "Rohtak", "Sonipat", "Barwala", "Gohana", "Hansi", "Hisar", "UklanaMandi", "Adampur", "Agroha", "Ahwa", "AkbarpurBarota", "Aliyaspur", "Alipur", "AlipurChirao", "AlipurJattan", "AlipurKhalsa", "AlipurKotla", "AlipurMajri", "Amargarh", "AmbalaSadar", "AmbalaSaroba", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSarsehri", "AmbalaSar", ]
        }, {
            name: "Lahaul",
            areas: ["Keylong", "Udaipur", "Darcha", "Sarchu", "Leh", ]
        }, {
            name: "Spiti",
            areas: ["Lingti", "Kaza", "Komic", "Tabo", "Dhankar", "PinValley", "Mudh", "Losar", "Rangrik", "Kibber", "Chicham", "Batal", "Kunzum", ]
        }, ]
    },
    {
        state: "Jharkhand",
        cities: [{
            name: "Jamshedpur",
            areas: ["Adityapur", "Bagbera", "Bistupur", "Burmamines", "Golmuri", "Jugsalai", "Mango", "Sakchi", "Telco", ]
        }, {
            name: "Dhanbad",
            areas: ["Dhanbad", "Jharkhand", "India", ]
        }, {
            name: "Ranchi",
            areas: ["Kadru", "Lalpur", "Bariatu", "Harmu", "Morabadi", "Doranda", "PiskaMore", "RatuRoad", "Argora", "AshokNagar", "Bariyatu", "BootyMore", "Burmamines", "Bursatol", "CanteenArea", "Chandwa", "CityCentre", "ClubRoad", "Dhurwa", "Doranda", "Hehal", "Hinoo", "Kadru", "Kantatoli", "Khunti", "Lalpur", "Lowadih", "Morabadi", "Nagri", "Namkum", "Ormanjhi", "PiskaMore", "RatuRoad", "SahidNagar", "Shastrinagar", "Shyamali", "Sidhgora", "Sonari", "Sukhdeonagar", "Tatisilwai", "Telco", ]
        }, {
            name: "Bokaro",
            areas: ["Bokaro", "Bermo", "Bhanwar", "Chas", "Gomia", "Jaridih", "Jori", "Kasmar", "Nawadih", "Petarwar", "Phusro", "Pirtand", "Sindri", "Tenu", ]
        }, {
            name: "Deoghar",
            areas: ["Deoghar", "Jharkhand", "India", ]
        }, {
            name: "Dumka",
            areas: ["Birni", "Bishrampur", "Dumka", "Gopikandar", "Kathikund", "Masali", "Mohanpur", "Ranishwar", "Saraiyahat", "Shikaripara", ]
        }, {
            name: "Hazaribagh",
            areas: ["Hazaribagh", "Barkagaon", "Barhi", "Katkamsandi", "Konar", "Lesliganj", "Madhupur", "Mandu", "Ramgarh", "Satbarwa", "Tisri", ]
        }, {
            name: "Giridih",
            areas: ["Tundi", "Dhanwar", "Gomia", "Birni", "Dumri", "Bagodar", "Nawadih", "Parasnath", "Jamua", "Pirtand", ]
        }, {
            name: "Palamu",
            areas: ["Daltonganj", "Medininagar", "Gola", "Hussainabad", "Bishrampur", "Chatra", "Garhwa", "Daltonganj", "Medininagar", "Gola", "Hussainabad", "Bishrampur", "Chatra", "Garhwa", ]
        }, {
            name: "Medininagar",
            areas: ["Dumri", "Jainagar", "Jaridih", "Jugsalai", "Mango", "Telco", ]
        }, {
            name: "Chaibasa",
            areas: ["Chaibasa", "Jharkhand", "India", ]
        }, ]
    },
    {
        state: "Karnataka",
        cities: [{
            name: "Bengaluru",
            areas: ["Anekal", "Attibele", "Banashankari", "Banaswadi", "Basavanagudi", "Basaveshwaranagar", "Bellandur", "BensonTown", "BTMLayout", "ChandraLayout", "Chickpet", "Dasarahalli", "Domlur", "ElectronicCity", "FrazerTown", "HSRLayout", "Indiranagar", "Jayanagar", "JeevanBimaNagar", "JPNagar", "Koramangala", "Krishnarajapura", "Majestic", "Malleswaram", "Marathahalli", "MGRoad", "Nagarbhavi", "Nagawara", "OMBRLayout", "Padmanabhanagar", "PaiLayout", "Peenya", "Rajajinagar", "RichmondTown", "RTNagar", "Sadashivanagar", "SahakaraNagar", "SanjayNagar", "SarjapurRoad", "Seshadripuram", "Shivajinagar", "Thyagarajanagar", "Ulsoor", "Vijayanagar", "Whitefield", "Yelahanka", ]
        }, {
            name: "Mangaluru",
            areas: ["Bantwal", "Belthangady", "Bijapur", "DakshinaKannada", "Gangolli", "Honnavar", "Inna", "Kadaba", "Kadri", "Kalasa", "Kallianpur", "Kapu", "Kasaragod", "Kaup", "Kavu", "Kenjuru", "Kerekatte", "Kidooru", "Kinnigoli", "Kota", "KotaTissuru", "Kotekar", "Kumbla", "Kunjathur", "Madikeri", "Mangaluru", "Moodabidri", "Mudbidri", "Mulki", "Mundkur", "Murudeshwar", "Nadpalu", "Nalkuru", "Puttur", "Someshwar", "Soorinje", "Sullia", "Suratkal", "Ullal", "Vittal", ]
        }, {
            name: "Mysuru",
            areas: ["Bannimantap", "Chamaraja", "Chamundi", "Gokulam", "Hebbal", "Jayalakshmipuram", "Krishnaraja", "Lakshmipuram", "Nanjangud", "Okalipuram", "Saraswathipuram", "Vijayanagar", "Yadavagiri", ]
        }, {
            name: "HubballiDharwad",
            areas: ["Hubballi", "Dharwad", "Unkal", "Navalur", "Kundagol", "Kalghatagi", "Alnavar", "Annigeri", "Navalgund", "Gokak", "Raybag", "Ramdurg", "Savadatti", "Belagavi", "Hukkeri", "Chikkodi", "Athani", "Bailhongal", "Ghataprabha", "Haveri", "Byadagi", "Hangal", "Bankapura", "Mundargi", "Gadag", "Ron", "Koppal", "Mahalingpur", "Kushtagi", "Yaragol", "Badami", "Bagalkot", "Bilagi", "Jamakhandi", "Mudhol", ]
        }, {
            name: "Belagavi",
            areas: ["Ramnagar", "Khanapur", "Navalgund", "Gokak", "Athani", "Bailhongal", "Chikkodi", "Hukkeri", "Raibag", "Savadatti", ]
        }, {
            name: "Ballari",
            areas: ["Hospet", "Kudligi", "Sandur", "Siruguppa", "Bellary", ]
        }, {
            name: "Shivamogga",
            areas: ["Shivamogga", "Shimoga", "Tumkur", "Mandya", "Mysore", "Bangalore", "Belgaum", "Dharwad", "Gulbarga", "Hubli", "Mangalore", "Bijapur", "Davanagere", "Hospet", "Bellary", "Raichur", "Bidar", "GulbargaRural", "Yadgir", ]
        }, {
            name: "Davanagere",
            areas: ["Anekal", "Avalahalli", "Bagalakote", "BangaloreNorth", "BangaloreSouth", "Bangarpet", "Belgaum", "Bellary", "Bidar", "Bijapur", "Chamrajnagar", "Chickmagalur", "Chikkaballapur", "Chitradurga", "Davanagere", "Dharwad", "Gadag", "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Ramanagara", "Shimoga", "Tumkur", "Udupi", "UttaraKannada", "Yadgir", ]
        }, {
            name: "Tumakuru",
            areas: ["Tiptur", "Tumkur", "Turuvekere", "Tuvvuru", "Udigala", "Ugranahalli", "UraliGudda", "Vaidyaramanahalli", "Vakkaleri", "Vannur", "Varadahalli", "Varahalli", "Vemagal", "Venkatapura", "Vidyanagar", "Wadi", "Yaragol", "Yelwal", "Yeshwanthpur", ]
        }, {
            name: "Gulbarga",
            areas: ["Aland", "Alur", "Amruthur", "Anumalasettihalli", "Ashta", "Badepalli", "Badnal", "Bagewadi", "BalachandrappaLayout", "Baldwadi", "Bandalagudde", "Bankapur", "Basavakalyan", "Bhalki", "BhandariLayout", "Bharatnagar", "Bhimnagar", "Bidri", "Bijapur", "BijapurCamp", "BijapurCity", "BijapurFort", "BijapurGulbargaRoad", "BijapurIndustrialArea", "BijapurNorth", "BijapurSouth", "BijapurWest", "BikanerCamp", "Bilagi", "BilalBaug", "Boodihal", "Chamalapura", "ChanakyaNagar", "Chandapura", "ChandapuraIndustrialArea", "Channapura", "ChannapuraIndustrialArea", "ChannapuraNewExtension", "ChannapuraNewLayout", "ChannapuraOldLayout", "ChannapuraSouth", "ChannapuraWest", "ChannapuraWestIndustrialArea", "Chikalthana", "Chincholi", "ChincholiBK", "ChincholiCamp", "ChincholiIndustrialArea", "ChincholiNewLayout", "Chitapur", "DadaSahebPhalkeLayout", "Dandoti", "DargahCamp", "DargahRoad", "Dattawadi", "DattawadiGulbarga", "DattawadiNorth", "DattawadiSouth", "Devadurga", "Devapur", "Devrajpura", "Dharwad", "DharwadGulbargaRoad", "DharwadIndustrialArea", "DharwadNorth", "DharwadSouth", "DharwadWest", "DharwadWestIndustrialArea", "Dharwar", "DharwarGulbargaRoad", "DharwarIndustrialArea", "DharwarNorth", "DharwarSouth", "DharwarWest", "Dhonepeth", "Doddaballapur", "DoddaballapurIndustrialArea", "DoddaballapurNorth", "DoddaballapurSouth", "DoddaballapurWest", "DoddaballapurWestIndustrialArea", "Doddagaddavalli", "Doddakoppalu", "DoddakoppaluIndustrialArea", "DoddakoppaluNorth", "DoddakoppaluSouth", "DoddakoppaluWest", "DoddakoppaluWestIndustrialArea", "Doddarasinakere", "Doddasettihalli", "Doddathoguru", "Dodderi", "DoodhBowli", "DoodhBowliIndustrialArea", "DoodhBowliNorth", "DoodhBowliSouth", "DoodhBowliWest", "DoodhBowliWestIndustrialArea", "DoodhGanga", "DoodhGangaIndustrialArea", "DoodhGangaNorth", "DoodhGangaSouth", "DoodhGangaWest", "DoodhGangaWestIndustrialArea", "DoodhSagar", "DoodhSagarIndustrialArea", "DoodhSagarNorth", "DoodhSagarSouth", "DoodhSagarWest", "DoodhSagarWestIndustrialArea", "Doodhbowli", "Dudhani", "Dugalwadi", "Dundalli", "DundalliIndustrialArea", "DundalliNorth", "DundalliSouth", "DundalliWest", "DundalliWestIndustrialArea", "Dwarka", "DwarkaIndustrialArea", "DwarkaNorth", "DwarkaSouth", "DwarkaWest", "DwarkaWestIndustrialArea", "Ganagapura", "GanagapuraIndustrialArea", "GanagapuraNorth", "GanagapuraSouth", "GanagapuraWest", "GanagapuraWestIndustrialArea", "GanapathyNagar", "GanapathyNagarIndustrialArea", "GanapathyNagarNorth", "GanapathyNagarSouth", "GanapathyNagarWest", "GanapathyNagarWestIndustrialArea", "Gangolli", "GangolliIndustrialArea", "GangolliNorth", "GangolliSouth", "GangolliWest", "GangolliWestIndustrialArea", "Ganjkhanpet", "GanjkhanpetIndustrialArea", "GanjkhanpetNorth", "GanjkhanpetSouth", "GanjkhanpetWest", "GanjkhanpetWestIndustrialArea", "GanpatNagar", "GanpatNagarIndustrialArea", "GanpatNagarNorth", "GanpatNagarSouth", "GanpatNagarWest", "GanpatNagarWestIndustrialArea", "Garag", "GaragIndustrialArea", "GaragNorth", "GaragSouth", "GaragWest", "GaragWestIndustrialArea", "Garbhag", "GarbhagIndustrialArea", "GarbhagNorth", "GarbhagSouth", "GarbhagWest", "GarbhagWestIndustrialArea", "Gargoti", "GargotiIndustrialArea", "GargotiNorth", "GargotiSouth", "GargotiWest", "GargotiWestIndustrialArea", "GarudacharPalya", "GarudacharPalyaIndustrialArea", "GarudacharPalyaNorth", "GarudacharPalyaSouth", "GarudacharPalyaWest", "GarudacharPalyaWestIndustrialArea", "Garvebhavipalya", "GarvebhavipalyaIndustrialArea", "GarvebhavipalyaNorth", "GarvebhavipalyaSouth", "GarvebhavipalyaWest", "GarvebhavipalyaWestIndustrialArea", "Gatigere", "GatigereIndustrialArea", "GatigereNorth", "GatigereSouth", "GatigereWest", "GatigereWestIndustrialArea", "Gavipura", "GavipuraIndustrialArea", "GavipuraNorth", "GavipuraSouth", "GavipuraWest", "GavipuraWestIndustrialArea", "Gavipura", "GavipuraIndustrialArea", "GavipuraNorth", "GavipuraSouth", "GavipuraWest", "GavipuraWestIndustrialArea", "Gavipura", "GavipuraIndustrialArea", "GavipuraNorth", "GavipuraSouth", "GavipuraWest", "GavipuraWestIndustrialArea", "Ghantasala", "GhantasalaIndustrialArea", "GhantasalaNorth", "GhantasalaSouth", "GhantasalaWest", "GhantasalaWestIndustrialArea", "Ghatagere", "GhatagereIndustrialArea", "GhatagereNorth", "GhatagereSouth", "GhatagereWest", "GhatagereWestIndustrialArea", "Ghatkopar", "GhatkoparIndustrialArea", "GhatkoparNorth", "GhatkoparSouth", "GhatkoparWest", "GhatkoparWestIndustrialArea", "GhorpadePeth", "GhorpadePethIndustrialArea", "GhorpadePethNorth", "GhorpadePethSouth", "GhorpadePethWest", "GhorpadePethWestIndustrialArea", "Girinagar", "GirinagarIndustrialArea", "GirinagarNorth", "GirinagarSouth", "GirinagarWest", "GirinagarWestIndustrialArea", "Giripura", "GiripuraIndustrialArea", "GiripuraNorth", "GiripuraSouth", "GiripuraWest", "GiripuraWestIndustrialArea", "GirirajNagar", "GirirajNagarIndustrialArea", "GirirajNagarNorth", "GirirajNagarSouth", "GirirajNagarWest", "GirirajNagarWestIndustrialArea", "Giriwada", "GiriwadaIndustrialArea", "GiriwadaNorth", "GiriwadaSouth", "GiriwadaWest", "GiriwadaWestIndustrialArea", "Gollarahatti", "GollarahattiIndustrialArea", "GollarahattiNorth", "GollarahattiSouth", "GollarahattiWest", "GollarahattiWestIndustrialArea", "Gollarapura", "GollarapuraIndustrialArea", "GollarapuraNorth", "GollarapuraSouth", "GollarapuraWest", "GollarapuraWestIndustrialArea", "Golkunda", "GolkundaIndustrialArea", "GolkundaNorth", "GolkundaSouth", "GolkundaWest", "GolkundaWestIndustrialArea", "Gollapalli", "GollapalliIndustrialArea", "GollapalliNorth", "GollapalliSouth", "GollapalliWest", "GollapalliWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollarahatti", "GollarahattiIndustrialArea", "GollarahattiNorth", "GollarahattiSouth", "GollarahattiWest", "GollarahattiWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollarahatti", "GollarahattiIndustrialArea", "GollarahattiNorth", "GollarahattiSouth", "GollarahattiWest", "GollarahattiWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", "GollapuraWest", "GollapuraWestIndustrialArea", "Gollapura", "GollapuraIndustrialArea", "GollapuraNorth", "GollapuraSouth", ]
        }, {
            name: "Bidar",
            areas: ["BidarFort", "BidarGulbarga", "BidarKalaburagi", "BidarRaichur", "BidarYadgir", ]
        }, {
            name: "Raichur",
            areas: ["Raichur", "Devadurga", "Lingsugur", "Manvi", "Sindhanur", "Maski", "Mudgal", "Adoni", "Kalyandurg", "Mahbubnagar", ]
        }, {
            name: "Yadgir",
            areas: ["Chitapur", "GulbargaRural", "Aland", "Jewargi", "Shahabad", "Yadgir", "Sedam", "Chincholi", "Jevargi", "Surpur", ]
        }, {
            name: "Chamrajnagar",
            areas: ["Chamrajnagar", "Yelandur", "Gundlupet", "Kollegal", "Hanur", ]
        }, {
            name: "Ramanagara",
            areas: ["Channapatna", "Kanakapura", "Magadi", "Ramanagara", "Doddaballapura", ]
        }, {
            name: "Chikkaballapura",
            areas: ["Anekal", "Bangarapet", "Bagepalli", "Chikkaballapura", "Gauribidanur", "Gudibande", "Kolar", "Sidlaghatta", "Yelahanka", ]
        }, {
            name: "Kolar",
            areas: ["Kolar", "Bangarapet", "Vemalwada", "Malur", "Mulbagal", "Srinivaspur", "KGF", ]
        }, {
            name: "Mandya",
            areas: ["Bannur", "Belavadi", "Bettadapura", "ChamundiBetta", "Doddasiddavvanahalli", "Gejjalagere", "Gokulam", "Halebeedu", "Heggadadevanakote", "Hirikere", "Holenarasipura", "Hunasamaranahalli", "Kadakola", "Kanaganahalli", "Krishnarajpet", "Maddur", "Malavalli", "Mandya", "Nagamane", "NagamaneUdbur", "Pandavapura", "Paramasivapura", "Periyapatna", "Ranganthittu", "Shrirangapattana", "Simsha", "TNarasipura", "TNarsipura", "Thandya", "Thimmanahalli", "Thirumani", "VRPuram", "Vandavasi", "VaniVilasSagar", "Vemgal", ]
        }, {
            name: "Udupi",
            areas: ["Udupi", "Manipal", "Karkala", "Kundapura", "Byndoor", "Hebri", "Agumbe", ]
        }, {
            name: "DakshinaKannada",
            areas: ["Bantwal", "Beltangadi", "Mangalore", "Puttur", "Sullia", ]
        }, {
            name: "Kodagu",
            areas: ["Kodagu", "Karnataka", "India", ]
        }, {
            name: "Hassan",
            areas: ["Arakalgudu", "Alur", "Arsikere", "Belur", "Channarayapatna", "Hassan", "Holenarsipur", "Sakleshpur", ]
        }, {
            name: "Chitradurga",
            areas: ["Chitradurga", "Hosadurga", "Holalkere", "Hiriyur", "Molakalmuru", "Challakere", ]
        }, {
            name: "Bagalkote",
            areas: ["Badami", "Bagalkote", "Bilagi", "Hunagund", "Jamakhandi", "Mudhol", ]
        }, {
            name: "Vijayapura",
            areas: ["Vijayapura", "Almatti", "Nargund", "Indi", "Mudhol", ]
        }, {
            name: "Dharwad",
            areas: ["Dharwad", "Hubli", "Navalgund", "Kundgol", "Kalghatagi", "Gokak", "Ramdurg", "Alnavar", "Annigeri", "Athani", "Bailhongal", "Belgaum", "Chikkodi", "Dharampura", "Gadag", "Haveri", "Joida", "Khanapur", "Laxmeshwar", "Mudalgi", "Navalgund", "Sadalga", "Savadatti", "Shirhatti", "Shiggaon", "Sindhanur", "Sulepet", "Talikota", "Umbalgaon", "Yellapur", ]
        }, {
            name: "Gadag",
            areas: ["Gadag", "Ron", "Gajendragad", "Mundargi", "Nargund", "Navalgund", "Shirhatti", "Shiggaon", "Lakshmeshwar", ]
        }, {
            name: "UttaraKannada",
            areas: ["Sirsi", "Siddapur", "Yellapur", "Joida", "Haliyal", "Dandeli", "Khanapur", "Ankola", "Mundgod", "Hubli", "Gadag", "Haveri", "Navalgund", "Bagalkot", "Belgaum", "Bijapur", "Dharwad", "Gulbarga", "Jamakhandi", "Karwar", "Koppal", "Raichur", "Bellary", "Bidar", "Chamrajnagar", "Chikkamagaluru", "Chitradurga", "DakshinaKannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Shimoga", "Tumkur", "Udupi", "UttaraKannada", "Chikmagalur", "Chitradurga", "DakshinaKannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Shimoga", "Tumkur", "Udupi", "UttaraKannada", ]
        }, {
            name: "Haveri",
            areas: ["Haveri", "Bankapur", "Byadagi", "Hangal", "Hirekerur", "Ranibennur", "Savanur", "Shiggaon", "Sulepet", ]
        }, {
            name: "Belgaum",
            areas: ["Ramnagar", "Uchgaon", "Gokak", "Nipani", "Chikodi", "Athani", "Bailhongal", "Hukkeri", "Gudgaon", "Raybag", "BelgaumRural", "Belgaum", "Khanapur", ]
        }, {
            name: "Dharwad",
            areas: ["Dharwad", "Hubballi", "Navalur", "Kundagol", "Kalghatagi", "Annigeri", "Navalgund", "HubliDharwadEast", "Unkal", "SiddharudhMath", ]
        }, ]
    },
    {
        state: "Kerala",
        cities: [{
            name: "Kannur",
            areas: ["Kannur", "Thalassery", "Mattannur", "Dharmadam", "Iritty", "Payyannur", "Taliparamba", "Pilathara", "Peralassery", "Nileshwar", "Kanhirode", "Kuthuparamba", "Mananthavady", "Meenangadi", "SulthanBathery", "Vythiri", "Kalpetta", ]
        }, {
            name: "Kasaragod",
            areas: ["Chengala", "Kalliasseri", "Madikkai", "Manjeswar", "Nileshwar", "Pallikkara", "Payyannur", "Trikaripur", "Uduma", "Valiyaparamba", ]
        }, {
            name: "Kochi",
            areas: ["Edapally", "Ernakulam", "Kalamassery", "Kochi", "Mattancherry", "NorthParavur", "Palluruthy", "Thrippunithura", "Vyttila", ]
        }, {
            name: "Kollam",
            areas: ["Chinnakkada", "KollamBeach", "KollamPort", "Asramam", "AyurvedaCollege", "KollamPooram", "Thevally", "Thangassery", "Eravipuram", "KollamDowntown", "KollamRailwayStation", "KollamKSRTCBusStation", "Chavara", "Mundakkal", "KollamCollectorate", "KollamFireStation", ]
        }, {
            name: "Kottayam",
            areas: ["Ettumanoor", "Kaduthuruthy", "Pala", "Puthuppally", "Vaikom", "Changanacherry", "Erattupetta", "Ettumanur", "Kudakkachal", "Kuravilangad", "Mallappally", "Manarkad", "Manimala", "Meenachil", "Mundakayam", "Tiruvalla", "Vazhoor", "Ayarkunnam", "Cheruvandoor", "Ettumanoor", "Kanjirappally", "Kidangoor", "Kongorpilly", "Kurichy", "Kuruppanthara", "Meenachil", "Melukavu", "Mutholy", "Neendoor", "Pala", "Pampady", "Puthuppally", "Ramapuram", "Erumeli", "Kanjirappally", "Karikkode", "Kidangoor", "Mallappally", "Manarkad", "Manimala", "Meenachil", "Melukavu", "Mundakayam", "Pala", "Pampady", "Puthuppally", "Thalayolaparambu", "Thodupuzha", "Vaikom", "Vandiperiyar", "Vazhoor", "Ayarkunnam", "Cheruvandoor", "Ettumanoor", "Kanjirappally", "Kidangoor", "Kongorpilly", "Kurichy", "Kuruppanthara", "Meenachil", "Melukavu", "Mutholy", "Neendoor", "Pala", "Pampady", "Puthuppally", "Ramapuram", ]
        }, {
            name: "Kozhikode",
            areas: ["Vadakara", "Kozhikode", "Koyilandy", "Vatakara", "Thamarassery", "Balusseri", "Nadapuram", "Meppayur", "Kadalundi", "Koduvally", "CheruvannurChevayur", "Feroke", "Ramanattukara", "Kunnamangalam", "Perambra", "Elathur", "Ayancherry", "Kadalundipuzha", "Kunnummal", "Kootayi", "Pallikkal", "Kottuli", "Thikkodi", "Chemancheri", "Thiruvambady", "Koyilandy", "WestHill", ]
        }, {
            name: "Malappuram",
            areas: ["Arimbra", "Cheekonil", "Cherukunnu", "Edarikkodu", "Kadalundi", "Kottakkal", "Kozhikode", "Kunnamangalam", "Kuruvambalam", "Melattur", "Nadapuram", "Panakkad", "Pariyapuram", "Perinthalmanna", "Ponnani", "Pulamanthole", "Tanur", "Tirur", "Tirurangadi", "Venginissery", "Wandoor", ]
        }, {
            name: "Palakkad",
            areas: ["Aruvikkara", "Ayalur", "Cherpulassery", "Chittur", "Dhamayanthi", "Kadampazhipuram", "Kalpathy", "Kangazha", "Kanjikode", "Kannadi", "Karimpuzha", "Kavasseri", "Keralapuram", "Lakkiti", "Mannur", "Melarcode", "Moozhikkulam", "Mudappallur", "Nallepilly", "Nemmara", "Olavakkode", "Othalur", "Ottappalam", "Palakkad", "Paloor", "Pattambi", "Pazhayannur", "Perumatty", "Ponnani", "Thiruvegappura", "Thrippunithura", "Vallapuzha", "Vadakkencherry", "Vadakkumbad", "Vakkad", ]
        }, {
            name: "Pathanamthitta",
            areas: ["Adoor", "Aranmula", "Chengannur", "Elanthoor", "Enadimangalam", "Ganapathiyoor", "Gulikadu", "Haripad", "Ilavunkal", "Kalakkod", "Karunagappally", "Kidangannur", "Konni", "Kottangal", "Kozhencherry", "Kulanada", "Kumbazha", "Mallappally", "Mavelikkara", "Mylapra", "Naduvilezhu", "Nedumpuram", "Neduvathoor", "Omallur", "Omoor", "Onnamthuruth", "Pandalam", "Pathamuttom", "Pathanamthitta", "Payyanamon", "Perumpetty", "Pramadom", "Punalur", "Ranni", "Rasalam", "Thiruvalla", "Thottapuzhassery", "Uthimoodu", "Vadakkekad", "Vadasserikkara", "Vechoochira", "Vennikulam", "Vijayapuram", ]
        }, {
            name: "Thrissur",
            areas: ["Chettikkad", "Choondal", "Elavally", "Iringaprom", "Kadukutty", "Kaipamangalam", "Karikkad", "Keezhuparambu", "Kodakara", "Koothattukulam", "Kunnamkulam", "Kuruppamthara", "Mala", "Manalur", "Manjakkandi", "Mattannur", "Muvattupuzha", "Nadathara", "Naduvannur", "Nattika", "Puthukkad", "Puthenchira", "Ramavarmapuram", "Ayyanthole", "Chalakkudy", "Chembukkavu", "Chittilappilly", "Guruvayoor", "Irinjalakuda", "Kanjirapilly", "Kodungallur", "Kottappuram", "Kunnamkulam", "LakkidiVayalar", "Mamala", "Nattika", "Pudukkad", "Puthukad", "Tripunithura", "Vadanappally", "Vadakkekad", "Vadakkumbad", "Valappad", "Angadipuram", "Arikkad", "Edakkara", "Edathiruthy", "Edavilangu", "Eranellur", "Eravu", "Erumapalam", "Iringapuram", "Kadavallur", "Kadukutty", "Kalikavu", "Kanjirakkunnu", "Karalam", "Karimpuzha", "Karipur", "Keezhuparambu", "Kodumba", "Kodungallur", "Kondazhi", "Koottilangadi", "Kottappuram", "KottayamMalabar", "Kulathupuzha", "Kunnamangalam", "Kurichy", "Kurumbalangad", "Mala", "Manarkkad", "Maniyar", "Mararikulam", "Mattannur", "Melattur", "Muringoor", "Muttil", "Naduvattam", "Nattika", "Nedumkandam", "Nenmeni", "Nileshwaram", "Ollur", "Olur", "Oorakam", "Orakam", "Palakkad", "Pampadi", "Pandalur", "Panniyannur", "Pattambi", "Payyanur", "Perakam", "Peramangalam", "Perumparambu", "Ponnani", "Pudukkad", "Pulpally", "Puranattukara", "Puthanpally", "Puthuppadi", "Ramanattukara", "Shoranur", "Talappilly", "Thalanad", "Thiruvazhiyode", "Thrithala", "Tirur", "Vadakara", "Vadakkencherry", "Vadakkumbad", "VallatholNagar", "Vaniyamkulam", "Venginissery", "Wadakkancherry", "Wandoor", ]
        }, {
            name: "Thiruvananthapuram",
            areas: ["Akkulam", "Attukal", "Kazhakkoottam", "Kudappanamoodu", "Kattakkada", "Killipalam", "Kovalam", "Mudavoor", "Neyyattinkara", "Thirumala", "Thiruvallam", "Vattiyoorkavu", "Varkala", ]
        }, ]
    },
    {
        state: "Madhya Pradesh",
        cities: [{
            name: "Indore",
            areas: ["Indore", "Depalpur", "Mhow", "Rau", "Pithampur", "Dhar", "Badnawar", "Ujjain", "Ratlam", "Betul", "Multai", "Barnagar", "Sendhwa", "Dewas", "Sanwer", "Hatod", "Manasa", "Sonkatch", "Pardesipura", "LasudiyaMori", "Sukhliya", "VijayNagar", "Rau", "NewRau", "Scheme", "Scheme", "Scheme", "Scheme", "Scheme", ]
        }, {
            name: "Bhopal",
            areas: ["AreraColony", "AshokaGarden", "Bagmugali", "Bairagarh", "Bhojpur", "Bhopal", "Bhopal", "BittanMarket", "Budhwara", "CID", "ChandanNagar", "CharImli", "DarpanColony", "E", "AreraColony", "GLBajajInstitute", "HabibGanj", "Indrapuri", "JamaiOsmania", "Jatkhedi", "Jehangirabad", "KalpanaNagar", "KamlaNagar", "KanchanBagh", "Karera", "Karond", "KoheFiza", "KotraSultanabad", "LalGhati", "Lashkar", "MPNagar", "MaharanaPratapNagar", "MahavirNagar", "MalviyaNagar", "ManglayaSadak", "Manpur", "Misrod", "NaiBastiDaneshju", "Nishatpura", "NooraniBagh", "OldSubhashNagar", "PanchsheelNagar", "PatelNagar", "Piplani", "Prempura", "RajaBhojMarg", "RajendraNagar", "Ratibad", "Rau", "RichmondTown", "RohitNagar", "SaketNagar", "ShamlaHills", "ShaheedNagar", "ShivajiNagar", "Shivpuri", "SubhashNagar", "SukhiSewania", "Talliya", "TulsiNagar", "UdayBaug", "UdhyogNagar", "VaishaliNagar", "VanVihar", "VidhyaNagar", "Vishnupuri", "VivekVihar", "ZakirHussainNagar", ]
        }, {
            name: "Jabalpur",
            areas: ["Hanumantal", "Bargi", "Panagar", "Tilhari", "MadanMahal", "Kotwali", "JabalpurCantt", "ModelTown", "WrightTown", "CivilLines", "Gorakhpur", "RaniDurgavatiWard", "ShyamlaHills", "VijayNagar", "NapierTown", "Kotra", ]
        }, {
            name: "Gwalior",
            areas: ["Gwalior", "Morar", "Gird", "Bhitarwar", "Antri", "Dabra", "Porsa", "Sabalgarh", "Datia", "Jatara", "Tindwari", "Gohad", "Bhander", "Mau", "", ]
        }, {
            name: "Ujjain",
            areas: ["Ujjain", "Mahakaleshwar", "Badnagar", "Tarana", "Maksi", "Nagada", "Susner", "Shajapur", "Ghatiya", "Gogaon", "Sarangpur", "Rajgir", "Ratlam", "Sailana", "Sanwer", "Shujalpur", ]
        }, {
            name: "Satna",
            areas: ["Satna", "Amarpatan", "Maihar", "RampurBaghelan", "Rewa", "Gurh", "Naigarhi", "Jaitwara", "Sohawal", "Patera", "Dhanora", "Atarra", "Baidhan", "Badarvas", "Barhi", "Birsinghpur", "Chandia", "Chitrakoot", "Gopadbanas", "Hanumana", "Jirwania", "Keoti", "Kotar", "Lauriya", "Majhgawan", "Mauganj", "Nagod", "Naini", "Panagar", "Paraswada", "Teonthar", "Tikamgarh", "Amarpatan", "Chitrakoot", "Lauriya", "Majhgawan", "Mauganj", "Nagod", "Naini", "Paraswada", "Teonthar", "Tikamgarh", ]
        }, {
            name: "Sagar",
            areas: ["Sagar", "Bina", "Damoh", "Datia", "Dewas", "Dhar", "Indore", "Jabalpur", "Katni", "Mandla", "", ]
        }, {
            name: "Rewa",
            areas: ["AzadNagar", "Bagdona", "Bairagarh", "Baldeogarh", "Banda", "Bangrasia", "Bankhedi", "Bansapura", "Barai", "Bardia", "Barela", "Barha", "Barhai", "Barhaiya", "Barkhera", "Barna", "Behta", "BehtaHazipur", "Bichhua", "Bijaipur", "Bilhaur", "Birsinghpur", "Biyabani", "Biyavar", "Chamarua", "Chaneta", "Chapariya", "Chhatarpur", "Dabhaura", "Daboh", "Dabra", "Dagdul", "Dahela", "Dahi", "Dainkhera", "Damoh", "Dara", "Dariyabad", "Datia", "Deotalab", "Dewas", "Dhamnod", "Dhanpura", "Dhanyakhedi", "Dharampuri", "Dhaurai", "Dhauraroh", "Dhawarkheda", "Dhorimanna", "Dighawada", "Dindori", "Dobhi", "Domkhedi", "Dularpur", "Dumarkheda", "Dumraon", "Durgawati", "Fatehabad", "Fatehpur", "Gadarwara", "Gajner", "Ganjbasoda", "Garoth", "Garrauli", "GauriBazar", "GauriGanj", "Gohad", "Goharganj", "Gormi", "Gotegaon", "Goyla", "Gwalior", "Hanumana", "HardaKhas", "Harrai", "Hatta", "Indore", "Jabera", "Jaithari", "Jaitpur", "Jakhalabandha", "Jalaun", "Jamner", "Jatara", "Jaura", "Jeerapur", "Jiran", "Jora", "Jukehi", "Kalapipal", "Kalarohi", "Kalayat", "Kallar", "Kannod", "Kanthal", "Kapren", "Karera", "KarhiyaBuzurg", "KarhiyaKhurd", "Kathait", "Katni", "Keolari", "Kesla", "Khajuraho", "Khekra", "Khilchipur", "Khirkiya", "Khurai", "Kotma", "Kuhlasa", "Kukshi", "Kundam", "Kunwariya", "Kurwai", "Lakhnadon", "Lamhetaghat", "Lauri", "Lawa", "LidhoraKhas", "Lohardaga", "Madhogarh", "MahidpurCity", "Mahoba", "Maihar", "Malanpur", "Malhargarh", "Manasa", "MandiDabwali", "Mandideep", "Mandla", "Manpur", "Mau", "MauRanipur", "Maudaha", "Mauganj", "MaunathBhanjan", "Mehdawal", "Mehnagar", "Mihona", "Mirganj", "Mohania", "Morshi", "Multai", "Murar", "NainiTal", "Najibabad", "Nakur", "Naraura", "Narsinghgarh", "Narsinghpur", "Nasrullaganj", "Naugarh", "Naugaon", "NaugawanSadat", "Nayagaon", "Neemuch", "Niwari", "NiwariMandi", "Obra", "Orai", "Orchha", "Pachmarhi", "Padrauna", "Paharganj", "Painkheda", "Pali", "Panagar", "Panna", "Panora", "Papora", "Parasia", "Patharia", "Patna", "Phuphkalan", "Pipariya", "Piparsand", "Porsa", "PrabhatPatti", "Pukhrayan", "Purwa", "Raisen", "Rajakhedi", "Rajnandgaon", "Ramnagar", "Rampura", "RampurBaghelan", "RampurNaikin", "Rampura", "Raneh", "Ratlam", "Ratnagiri", "Rewa", "Reoti", "Rohat", "Rudawal", "Rudni", "Sabalgarh", "Sadar", "Sagar", "Sahanpur", "Sahaswan", "Sahawar", "Sahpau", "Saidpur", "Sainthal", "SakhotiTanda", "Salaiya", "Salempur", "Samdari", "Samthar", "Sandi", "Sarila", "Sarona", "Satna", "Saunsar", "Semaria", "Semra", "Sendhwa", "Seondha", "SeoniMalwa", "Sewarhi", "Shahdol", "Shahganj", "Shahjahanpur", "Shajapur", "Sheohar", "Shivpuri", "Shujalpur", "Sihora", "Silwani", "SimariBakhtiyarpur", "Sirmaur", "Sironj", "Sitamau", "Sohagpur", "Sonkatch", "SukhiSewania", "Sukrita", "Sultanganj", "Surguja", "Talbahat", "Talbehat", "Tarana", "Tendukheda", "Teonthar", "ThanaBihpur", "Tikamgarh", "Tikri", "Tilhar", "Tindwari", "Tohana", "Udaipura", "Ujjain", "Umaria", "Umri", "UmriKalan", "Unnao", "Vadod", "Vaijapur", "Vaishali", "Valmikinagar", "Vanarasi", "Varanasi", "Vijaipur", "Vijaypur", "Viratnagar", "Waraseoni", ]
        }, {
            name: "Ratlam",
            areas: ["Ratlam", "Jaora", "Alot", "Piploda", "Sailana", "Dalauda", "Badnagar", "Barnagar", "MahidpurCity", "Mahidpur", ]
        }, {
            name: "Chhindwara",
            areas: ["Chhindwara", "Betul", "Bhopal", "Gwalior", "Indore", "Jabalpur", "Rewa", "Ujjain", ]
        }, {
            name: "Betul",
            areas: ["Amkheda", "Anjad", "Athner", "Badora", "Baihar", "Betul", "Bhainsdehi", "Bhimpura", "Birsa", "Bori", "Chandameta", "Chicholi", "Dharampuri", "Dindori", "Ghoradongri", "Gosalpur", "HardaKhas", "Jaitpur", "Jambhali", "Jamodi", "Kathouli", "Keolari", "KotmiSonar", "Kotwali", "Lahar", "Lamta", "Multai", "Narsimhapur", "Nepanagar", "Palasner", "Pandhana", "Pathrad", "Pisgaon", "Ramtek", "Saoner", "Selu", "Sendhwa", "Sohagpur", "Sonkatch", "SouthBetul", "SukhiSewaniyan", "Tendukheda", "Thikri", "Umaria", "Waraseoni", "Zirapur", ]
        }, {
            name: "Burhanpur",
            areas: ["Burhanpur", "Asirgarh", "Badnawar", "Baihar", "Balaghat", "Betul", "Bhainsdehi", "Bhopal", "", ]
        }, {
            name: "Vidisha",
            areas: ["Vidisha", "Gyaraspur", "Sironj", "Basoda", "Gulabganj", "Ichhawar", "Kurwai", "Lahar", "Nateran", "Tarana", ]
        }, {
            name: "Khandwa",
            areas: ["Harsud", "Pandhana", "Mandhata", "Khandwa", "Nepanagar", "Omkareshwar", "Maheshwar", "Khargone", "Barwaha", "Sendhwa", ]
        }, {
            name: "Khargone",
            areas: ["AnsNagda", "Ujjain", "Ratlam", "Mandsaur", "Neemuch", "Jhabua", "Dhar", "Alirajpur", "Badwani", "Barwani", "Khargone", ]
        }, {
            name: "Balaghat",
            areas: ["Kanhan", "Paraswada", "Waraseoni", "Balaghat", "Baihar", "Katangi", "Khairagarh", "Lakhanadon", "Tirodi", ]
        }, {
            name: "Chhatarpur",
            areas: ["Chhatarpur", "Rajnagar", "Jatara", "BadaMalehra", "Sarangpur", "Panna", "Damoh", "Tikamgarh", "Jatkhedi", "Khajuraho", "Lauriya", "BadaGaon", "ChauraiKhas", "Mauganj", "BadaMalhera", "BadaChandpura", "BadaPantha", ]
        }, {
            name: "Damoh",
            areas: ["Damoh", "Garhakota", "Jabera", "Jatara", "Khajuraho", "Panna", "Patharia", "Sagar", "Sihora", "Tikamgarh", ]
        }, {
            name: "Datia",
            areas: ["Datia", "Jhansi", "Gwalior", "Shivpuri", "Bhind", "Morena", "Guna", "Sagar", "Tikamgarh", "Chhatarpur", "Panna", "Damoh", "Satna", "Rewa", "Ujjain", "Ratlam", "Mandsaur", "Neemuch", "Dhar", "Indore", "Umaria", "Jabalpur", ]
        }, {
            name: "Dewas",
            areas: ["Dewas", "Bagli", "Sonkatch", "Khategaon", "Hatpipalya", "Ojhar", "Pohri", "Bichhiya", "DewasNaka", "Ghatwasan", ]
        }, {
            name: "Dhar",
            areas: ["Dhar", "Mandu", "Dhamnod", "Badnawar", "Kukshi", "Sardarpur", "Manawar", "Ghatia", "Jhabua", "Alirajpur", ]
        }, {
            name: "Guna",
            areas: ["AshokNagar", "Aron", "Badagaon", "Badarvas", "Bamori", "BamoriKalan", "Bangaras", "Bankhedi", "Bapchya", "Baroda", "Bhairavgarh", "Bhanpura", "BhanpuraIndustrialArea", "Bhatpachlana", "Bhatpara", "Bhensoda", "Bhilakhedi", "Bhilsa", "BirlaNagar", "Birsinghpur", "ChachauraBinaganj", "Chainpura", "Chandanpur", "Chandpura", "Chanderi", "Chapda", "Charoda", "ChauraiKhas", "Chhapara", "Chhiwara", "Chicholi", "Chitrakoot", "Dabra", "DaharKala", "Damoh", "Datia", "DeendayalNagar", "Dewas", "Dhamnod", "Dhar", "Dharampuri", "Dharnaoda", "Digoda", "Dindori", "Fanda", "Gohad", "GohadMadhya", "Gotegaon", "Guna", "Gwalior", "Harda", "Harrai", "Indergarh", "Indore", "Isagarh", "ItawaBazar", "Jabera", "Jagdalpur", "Jaitpur", "Jaithari", "Jatara", "JauraNarsinghpur", "Jeonara", "Jiran", "Kailaras", "Kalapipal", "Kalarookheda", "Kaliasot", "Kalpetta", "Kannod", "Karela", "Karera", "Kasrawad", "Katangi", "Khategaon", "Khetia", "Khilchipur", "Khirkiya", "Khurai", "Kotma", "Kukshi", "Kunwari", "Kurwai", "Laundi", "LidhoraKhas", "Madhogarh", "MahidpurCity", "Maihar", "MalajKhand", "Manasa", "Manawar", "Mandsaur", "Mandu", "Margherita", "Mauganj", "Meghnagar", "Mohgaon", "Multai", "Mungaoli", "Nagda", "Nagod", "Naigarhi", "Nainpur", "Narsingarh", "Narwar", "Neemuch", "Niwari", "Panagar", "Panagarh", "Pandhana", "Pandhurna", "Panna", "Parasia", "Patan", "Patharia", "PiplyaMandi", "Pohari", "Porsa", "PrabhatPattan", "Punasa", "Pushp", "RaghogarhVyas", "Rajnagar", "Ratlam", "Rehti", "RehtiBujurg", "Rewa", "Sabalgarh", "Sanchi", "Sarangpur", "Sarona", "Saunsar", "Sendhwa", "Sehore", "Seondha", "Seoni", "Seonimalwa", "Shahdol", "Shahgarh", "Shujalpur", "Silwani", "Sirmaur", "Sironj", "Sitamau", "Sohagpur", "Sonkatch", "Tarana", "Ujjain", "Umaria", "Vidisha", "Waraseoni", ]
        }, {
            name: "Harda",
            areas: ["Harda", "Khirkiya", "Timarni", "Itarsi", "Betul", "Multai", "Amla", "Bhainsdehi", "Ghoradongri", "Chicholi", "Nepanagar", "Sohagpur", "Shahpur", "Multai", "HardaKhurd", "Bhaironpur", "Jirapur", "Kotma", "MandiBamora", "Mau", "Sarni", "Sendhwa", "SeoniMalwa", "Shajapur", "ShirpurWarwade", "Sihora", "Ujjain", "Umaria", "Vidisha", ]
        }, {
            name: "Hoshangabad",
            areas: ["Hoshangabad", "Pipariya", "Itarsi", "Betul", "Narsinghpur", "Chhindwara", "Jabalpur", "Mandla", "Seoni", "Balaghat", ]
        }, {
            name: "Jhabua",
            areas: ["Patan", "Meghnagar", "Jhabua", "Thandla", "Petlawad", "Alirajpur", ]
        }, {
            name: "Katni",
            areas: ["Amanganj", "BadiKatni", "Bahoriband", "Baldeogarh", "Katni", "Murwara", "Patan", ]
        }, {
            name: "Mandla",
            areas: ["Amarkantak", "Anuppur", "AshokNagar", "Balaghat", "Betul", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsimhapur", "Neemuch", "Panna", "Raisen", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha", ]
        }, {
            name: "Mandsaur",
            areas: ["Mandsaur", "Suwasra", "Parshwanath", "Manasa", "Jawad", "Malhargarh", "Sailana", "Sitamau", "Garoth", "Mehgaon", "Bhanpura", "Ratlam", "Jaora", "Rau", "Atru", "Bagli", "Alot", "Nimach", "Jawra", "Manawar", "Ghatia", "Gauravpath", ]
        }, {
            name: "Morena",
            areas: ["Huzur", "Porsa", "Sabalgarh", "Morena", "Joura", "Ambah", "Dabra", "Gohad", "Gwalior", "Bhitarwar", "Dhaulpur", "GwaliorRural", "Datia", "Devendranagar", "Dimani", "Jaura", "Jora", "Kailaras", "Karchana", "Karera", "Khaniyadhana", "Lahar", "Morar", "Nohta", "Pachora", "Porsa", "Sheopur", "Shujalpur", "Sironj", "Vijaypur", ]
        }, {
            name: "Narsinghpur",
            areas: ["Narsinghpur", "Jabalpur", "Bhopal", "Indore", "Gwalior", "Ujjain", "Sagar", "Ratlam", "Rewa", "Betul", ]
        }, {
            name: "Neemuch",
            areas: ["Nimach", "Pancham", "Pachauri", "Padri", "PanthPiploda", "Parichha", "Patan", "Pathariya", "Patwan", "", ]
        }, {
            name: "Panna",
            areas: ["Panna", "Amanganj", "Chitrakoot", "BadaMalhera", "Panwari", "Pandavpura", "Raghunathpur", "SaraiAkil", "Sarni", "Shahpura", "Tikamgarh", "Udaipura", ]
        }, {
            name: "Raisen",
            areas: ["Raisen", "RaisenSadar", "Silwani", "Begamganj", "Bhojpur", "Budhni", "Ganjbasoda", "Goharganj", "Ichhawar", "MandiBamora", "Narsimhapur", "Pisawa", "Silakheri", "Udaipura", ]
        }, {
            name: "Rajnandgaon",
            areas: ["KanhaiyaNagar", "ShivajiNagar", "ResidencyArea", "NehruNagar", "SadarBazar", "NewMarket", "ArjunNagar", "SchemeNo", "TransportNagar", "RajendraNagar", "ShantiNagar", "GeetaNagar", "FriendsColony", "RaviNagar", "ShaktiNagar", "VivekanandNagar", "IndraNagar", "JawaharNagar", "ColonyNo", "Pologround", "AmbedkarNagar", "SubhashNagar", "RajivNagar", "JainNagar", "GurudwaraRoad", "BapuNagar", "AshokNagar", "HanumanNagar", "MahavirNagar", "SaiNagar", "Quarters", "VyaparVihar", "AgrasenNagar", "AnandNagar", "AzadNagar", "Bagicha", "BairagiBazar", "Baldeobaug", "BangaliTola", "BankColony", "Baradari", "Baradwari", "Barkhedi", "Beohari", "Bhansi", "Bhatgaon", "Bhendsar", "Bheraghat", "Bhilai", "BhilaiCharoda", "BhilaiNagar", "BhilaiPowerHouse", "BhilaiSteelPlantTownship", "BhimNagar", "BicholiMardana", "Bijepur", "Bilaspur", "Birkoni", "Birsinghpur", "Bondkalan", "BotanicalGarden", "Brahmanwada", "Budhapara", "Burhadih", "Chakradharpur", "ChandanNagar", "Chandarpur", "Chandeli", "Charoda", "Chauhanwada", "Chhindgarh", "Chichola", "Chirimiri", "ChoubeyColony", "Dallirajhara", "Dhamdha", "Dhaneli", "Durg", "Dwarka", "Fafadih", "Fafara", "Fursatganj", "GEBColony", "GERoad", "Gandai", "GandaiBazar", "Ganiyari", "Garhi", "GecColony", "Gendehari", "Gevra", "GhadiChowk", "Ghantaghar", "Ghanteshwar", "Gidhaur", "Gondwara", "Gopalpur", "Gudhiyari", "Gumla", "Hanumantal", "Hariharpura", "HariharNagar", "Haroda", "Harrad", "Hathbandh", "Hirri", "HirriBazar", "HirriNagar", "HirriNagarWest", "HirriNagarEast", "HirriNagarSouth", "HirriNagarNorth", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "HirriNagar", "Hirri", ]
        }, {
            name: "Seoni",
            areas: ["Kanhiwara", "Karmeta", "Mohgaon", "Keolari", "SeoniMalwa", "Dhanora", "Dhapewada", "Bhainsdehi", "Chhapara", "Chapara", "Semariya", "Bhairavgarh", "Kurai", "Khairi", "Lakhnadon", "Bhivkund", "Dindori", "Nainpur", "Bhanwari", "Bhanpura", "Alirajpur", "Jhabua", "Jobat", "Ratlam", "Sailana", "", ]
        }, {
            name: "Shahdol",
            areas: ["Shahdol", "Umaria", "Anuppur", "Katni", "Jabalpur", "Mandla", "Dindori", "Chhindwara", "Betul", "Harda", "Hoshangabad", "Narsinghpur", "Raisen", "Sehore", "Vidisha", "Rewa", "Satna", "Sidhi", "Singrauli", ]
        }, {
            name: "Sheopur",
            areas: ["Sheopur", "MadhyaPradesh", ]
        }, {
            name: "Shivpuri",
            areas: ["Shivpuri", "Pichhore", "Jatara", "Karera", "Khaniyadhana", "Bairagarh", "Gohad", "Gwalior", "Datia", "Bhind", "Ashoknagar", "Guna", "Sagar", "Tikamgarh", "Chhatarpur", "Damoh", "Panna", "Chhindwara", "Betul", "Multai", "Amla", "Dewas", "Ujjain", "Indore", "Mandsaur", "Ratlam", "Neemuch", "Manasa", "Anuppur", "Shahdol", "Umaria", "Jabalpur", "Katni", "Mandla", "Dindori", "Seoni", "Balaghat", "Chhindwara", "Betul", "Multai", "Amla", "Dewas", "Ujjain", "Indore", "Mandsaur", "Ratlam", "Neemuch", "Manasa", "Anuppur", "Shahdol", "Umaria", "Jabalpur", "Katni", "Mandla", "Dindori", "Seoni", "Balaghat", ]
        }, {
            name: "Sidhi",
            areas: ["Sidhi", "Amarpatan", "Bagdona", "Baidhan", "BamhaniBujurg", "BamhaniKhurd", "Barbaspur", "Barhiya", "Bela", "Betma", "Bhagwanpur", "Bhainsdehi", "Bhanpura", "Bhopalpatnam", "Bichhiya", "Bijaipur", "Bijawar", "Birsinghpur", "Chandia", "Chauhani", "Dabhoni", "Damkheda", "Deotalab", "Devendranagar", "Dhamnod", "Dharampuriya", "Dhaurai", "Dighawati", "Gopalpur", "HardaKhas", "Jaitpur", "Jaithari", "Jamania", "Janwan", "Jatara", "Jirapur", "Kadwari", "Kaluwas", "Kanchanpur", "Karera", "Kathotia", "Khaniyadhana", "Khargapur", "Khategaon", "Khirkiya", "Kotar", "Kundi", "Kurwai", "Lakhnadon", "Lamta", "Laundi", "Mauganj", "Meghnagar", "Mohgaon", "Multai", "Naigarhi", "Namli", "Narsinghpur", "NepaNagar", "Nidhana", "Nowrozabad", "Padarighat", "Panagar", "Pansemal", "Paraswada", "Patan", "Patharia", "Pipariya", "Pohari", "Porsa", "PrabhatPattan", "Raghogarh", "RampurBaghelan", "Ratapani", "Rehti", "Richhai", "Sabalgarh", "Sailana", "Sarangarh", "Sihora", "Silwani", "Sondhwa", "Sonkatch", "Srinagar", "SukhiSewania", "Susner", "Tendukheda", "Udaipura", "Vijayraghogarh", "Waraseoni", ]
        }, {
            name: "Tikamgarh",
            areas: ["Tikamgarh", "Jatara", "Khargapur", "Prithvipur", "Panagar", "Baldeogarh", "Lahar", "Mauganj", "Niwari", "Palera", ]
        }, {
            name: "Umaria",
            areas: ["Amarkantak", "Anuppur", "Ashoknagar", "Balaghat", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha", ]
        }, {
            name: "Anuppur",
            areas: ["Anuppur", "Amarpatan", "Anta", "Badi", "Bagdona", "Baihar", "Balaghat", "Banda", "Betul", "Bhainsdehi", "Bhopal", "", ]
        }, ]
    },
    {
        state: "maharashtra",
        cities: [{
            name: "Ahmednagar",
            areas: ["Ahmednagar", " Akola", " Amravati", " Aurangabad", " Beed", " Bhandara", " Buldhana", " Chandrapur", " Dhule", " Gadchiroli", " Gondia", " Hingoli", " Jalgaon", " Jalna", " Kolhapur", " Latur", " Mumbai", " Nagpur", " Nanded", " Nandurbar", " Nashik", " Osmanabad", " Palghar", " Parbhani", " Pune", " Raigad", " Ratnagiri", " Sangli", " Satara", " Sindhudurg", " Solapur", " Thane", " Wardha", " Washim", " Yavatmal", ]
        }, {
            name: " Akola",
            areas: ["Shegaon", " Telhara", " Murtizapur", " Patur", " Risod", " Morshi", " Warud", " Chikhaldara", " Daryapur", " Balapur", ]
        }, {
            name: " Amravati",
            areas: ["Amravati", " Dhule", " Jalgaon", " Kolhapur", " Mumbai", " Nagpur", " Nashik", " Pune", " Thane", ]
        }, {
            name: " Aurangabad",
            areas: ["Aurangabad", " Paithan", " Vaijapur", " Kannad", " Sillod", " Phulambri", " Gangapur", " Khultabad", " Pachora", " Chalisgaon", ]
        }, {
            name: " Beed",
            areas: ["1. Dharur", " 2. Parli Vaijnath", " 3. Georai", " 4. Ambajogai", " 5. Kaij", " 6. Shirur Anantpal", " 7. Wadwani", " 8. Majalgaon", " 9. Mehekar", " 10. Khultabad", " 11. Parli", " 12. Pathri", " 13. Manjlegaon", " 14. Sailu", " 15. Wadgaon Road", " 16. Digras", " 17. Ghatnandra", " 18. Shirur Kasar", " 19. Ashti", " 20. Rahuri", " 21. Jamkhed", " 22. Kaij", " 23. Shirur", " 24. Vaijapur", " 25. Sillod", " 26. Kannad", " 27. Paithan", " 28. Phulambri", " 29. Sakhri Natak", " 30. Partur", " 31. Jintur", " 32. Gangakhed", " 33. Ambad", " 34. Parbhani", " 35. Selu", " 36. Jintur", " 37. Manwat", " 38. Sonpeth", " 39. Pathardi", " 40. Partur", " 41. Sailu", " 42. Lonar", " 43. Deolgaon Raja", " 44. Bhokardan", " 45. Jafrabad", " 46. Jalna", " 47. Ghansawangi", " 48. Badnapur", " 49. Bhokardan", " 50. Ambad", ]
        }, {
            name: " Bhandara",
            areas: ["Tumsar", " Pauni", " Bhandara", " Lakhandur", " Mohadi", " Umred", " Bhivapur", " Salekasa", " Lakhani", " Tiroda", ]
        }, {
            name: " Buldhana",
            areas: ["Malkapur", " Chikhli", " Buldhana", " Mehkar", " Sindkhed Raja", " Khamgaon", " Shegaon", " Jalgaon Jamod", " Motala", " Nandura", " Balapur", ]
        }, {
            name: " Chandrapur",
            areas: ["Chandrapur", " Ballarpur", " Warora", " Bhadravati", " Mul", " Saoli", " Pombhurna", " Chimur", " Jiwati", " Sindewahi", " Tadali", " Brahmapuri", " Chandrapur City", " Rajura", " Sindewahi", " Gondpipri", " Bhadrawati", ]
        }, {
            name: " Dhule",
            areas: ["Dhule City", " Dhule Rural", " Malegaon Camp", " Malegaon City", " Pimpalner", " Sakri", " Shirpur-Warwade", " Sindkheda", " Taloda", ]
        }, {
            name: " Gadchiroli",
            areas: ["Aheri", "Anjora", "Arjuni Morgaon", "Armori", "Bhamragad", "Chamorshi", "Dhanora", "Etapalli", "Gadchiroli", "Korchi", "Kurkheda", "Mulchera", "Nagori", "Padoli", "Perimili", "Sironcha", "Sukadi", "Tiroda", ]
        }, {
            name: " Gondia",
            areas: ["Amgaon", " Arjuni Morgaon", " Deori", " Goregaon", " Gondia", " Sadak Arjuni", " Salekasa", " Tirora", ]
        }, {
            name: " Hingoli",
            areas: ["Aurangabad", " Jalna", " Beed", " Osmanabad", " Latur", " Parbhani", " Hingoli", " Nanded", " Yavatmal", " Wardha", " Nagpur", " Amravati", " Buldhana", " Akola", " Washim", " Chandrapur", " Gadchiroli", " Bhandara", " Gondia", " Sindhudurg", " Kolhapur", " Ratnagiri", " Raigad", " Mumbai", " Thane", " Palghar", " Nashik", " Dhule", " Nandurbar", " Jalgaon", " Ahmednagar", " Solapur", " Satara", " Sangli", " Pune", " Sangamner", " Kopargaon", " Shirdi", " Sinnar", " Khed", " Maval", " Junnar", " Ambegaon", " Kothrud", " Hadapsar", " Pimpri", " Chinchwad", " Bhosari", " Moshi", " Dehu Road", " Alandi", " Phaltan", " Wai", " Koregaon", " Baramati", " Indapur", " Jamkhed", " Bhigwan", " Tuljapur", " Akkalkot", " Solapur North", " Solapur South", " Madha", " Pandharpur", " Malshiras", " Barshi", " Mohol", " Tembhurni", " Mangalvedhe", " Akluj", " Walwa", " Vita", " Karmala", " Madangad", " Mohpa", " Kada", " Sonpeth", " Paranda", " Jat", " Ralegaon", " Man", " Waghapur", " Shevgaon", " Rahuri", " Shrirampur", " Nevasa", " Pathardi", " Nevri", " Shevgaon", " Rahuri", " Shrirampur", " Nevasa", " Pathardi", " Nevri", " Rahata", " Shrirampur", " Nevasa", " Pathardi", " Nevri", " Rahata", ]
        }, {
            name: " Jalgaon",
            areas: ["Jalgaon", " Pachora", " Jamner", " Bhusawal", " Muktainagar", " Chopda", " Amalner", " Dhule", " Nandurbar", " Navapur", " Dharangaon", " Erandol", " Faizpur", " Chopan", " Chalisgaon", " Bhadgaon", " Raver", " Yawal", " Savda", " Pahur", " West Khandesh", " East Khandesh", ]
        }, {
            name: " Jalna",
            areas: ["Jalna", " Ambad", " Bhokardan", " Deulgaon Raja", " Ghansawangi", " Partur", " Phulambri", " Badnapur", " Mantha", " Bhuyar", ]
        }, {
            name: " Kolhapur",
            areas: ["Chandgad", " Chiplun", " Dapoli", " Guhagar", " Jaigad", " Khed", " Kankavali", " Lanja", " Ratnagiri", " Sangameshwar", " Shrivardhan", " Sudhagad", " Chiplun", " Dapoli", " Guhagar", " Jaigad", " Khed", " Kankavali", " Lanja", " Ratnagiri", " Sangameshwar", " Shrivardhan", " Sudhagad", ]
        }, {
            name: " Latur",
            areas: ["Ausa", " Chakur", " Dharmabad", " Latur Rural", " Nilanga", " Udgir", " Renapur", " Shirur Anantpal", " Deoni", " Jalkot", " Ahmadpur", " Udgir", " Shirdi", " Sonpeth", " Wadi", " Yavatmal", " Pusad", " Risod", " Umerkhed", " Wadgaon Road", " Wai", " Waluj", " Warud", " Washim", " Yavatmal", " Achalpur", " Morshi", " Amravati", " Anjangaon", " Arvi", " Ashti", " Badnera", " Ballarpur", " Bamangaon", " Barshi", " Belora", " Bhadrawati", " Bhigwan", " Bhivapur", " Bhusawal", " Billoli", " Borgaon", " Brahmapuri", " Buldhana", " Chandrapur", " Daryapur", " Dhamangaon", " Digras", " Dombivali", " Durgapur", " Gangakhed", " Gangapur", " Ghoti Budruk", " Igatpuri", " Jalgaon", " Jamner", " Kada", " Kaij", " Kandri", " Kandri II", " Katol", " Kelapur", " Khamgaon", " Khapa", " Kopargaon", " Kotul", " Lakhmapur", " Lonar", " Lonavla", " Mahad", " Malegaon", " Malkapur", " Mehkar", " Morshi", " Muktainagar", " Multai", " Mumbai", " Nagpur", " Nanded", " Nandgaon", " Nandura", " Nandurbar", " Narkhed", " Navapur", " Navedkar Nagar", " Nemawar", " Newasa", " Nilanga", " Omerga", " Pachora", " Paithan", " Palghar", " Pandharkaoda", " Pandharpur", " Parbhani", " Parola", " Partur", " Pathardi", " Pathri", " Patoda", " Pen", " Phaltan", " Pimplas", " Pusad", "Rahuri", " Rajura", " Ramtek", " Ratnagiri", " Risod", " Sagewadi", " Sailu", " Sakri", " Samudrapur", " Sangamner", " Sangola", " Saoner", " Saundad", " Saundatti Yellamma", " Sawantwadi", " Shahada", " Shahuwadi", " Shegaon", " Shendurjana", " Shirala", " Shirur", " Shrirampur", " Sillod", " Sinnar", " Solapur", " Sonpeth", " Supa", " Tadwadi", " Talegaon Dabhade", " Taloda", " Tembhurni", " Thane", " Tirora", " Tuljapur", " Uchgaon", " Umarga", " Umred", " Umri Pragane Balapur", " Vadgaon Kasba", " Vaijapur", " Vakav", " Wadi", " Wai", " Waluj", " Wardha", " Warora", " Warud", " Washim", " Yavatmal", " Yavatmal Cantonment", " Zari Jamni", ]
        }, {
            name: " Mumbai",
            areas: ["Andheri", " Bandra", " Borivali", " Dadar", " Goregaon", " Jogeshwari", " Kandivali", " Khar", " Malad", " Mulund", " Santacruz", " Vile Parle", " Virar", " Airoli", " Ambarnath", " Ambernath", " Badlapur", " Bhandup", " Bhayander", " Chandivali", " Chembur", " Dombivali", " Ghatkopar", " Kalwa", " Kanjurmarg", " Kopar Khairane", " Kurla", " Mankhurd", " Nahur", " Navi Mumbai", " Panvel", " Powai", " Thane", " Ulhasnagar", " Bhiwandi", " Kalyan", " Dombivali", " Ambernath", " Ulhasnagar", ]
        }, {
            name: " Nagpur",
            areas: ["Nagpur", " Wardha", " Amravati", " Buldhana", " Akola", " Yavatmal", " Washim", " Chandrapur", " Gadchiroli", " Bhandara", " Gondia", " Sindhudurg", " Ratnagiri", " Raigad", " Palghar", " Thane", " Mumbai", " Pune", " Solapur", " Kolhapur", " Sangli", " Satara", " Nasik", " Aurangabad", " Jalna", " Beed", " Parbhani", " Hingoli", " Nanded", " Osmanabad", " Latur", " Buldana", " Akola", " Yavatmal", " Washim", " Chandrapur", " Gadchiroli", " Bhandara", " Gondia", " Sindhudurg", " Ratnagiri", " Raigad", " Palghar", " Thane", " Mumbai", " Pune", " Solapur", " Kolhapur", " Sangli", " Satara", " Nasik", " Aurangabad", " Jalna", " Beed", " Parbhani", " Hingoli", " Nanded", " Osmanabad", " Latur", ]
        }, {
            name: " Nanded",
            areas: ["Nanded-Waghala", " Usmanpura", " Deolali Camp", " Jatwada", " Bhokar", " Dharmabad", " Hadgaon", " Himayatnagar", " Kandhar", " Loha", " Mahur", " Mudkhed", " Mukhed", " Nanded-Warud", " Umri", " Deglur", " Hadoti", " Isse", " Kinwat", " Lakhani", " Bhokardan", " Biloli", " Dharmapuri", " Jalkot", " Kandri", " Loha-Islampur", " Mahur-Islampur", " Mudkheda", " Mukheda", " Nanded-Ghatsila", " Umri Pragane Balapur", " Degloor", " Hadol", " Islampur", " Kinwat", " Lakhni", " Bhokar", " Biloli", " Dharmapuri", " Jalkot", " Kandri", " Lohara", " Mahur", " Mudkhed", " Mukhed", " Nanded-Ghatshila", " Umri Pragane Balapur", " Deglur", " Hadoti", " Isse", " Kinwat", " Lakhani", " Bhokardan", " Biloli", " Dharmapuri", " Jalkot", " Kandri", " Loha Islampur", " Mahur Islampur", " Mudkheda", " Mukheda", " Nanded-Ghatshila", " Umri Pragane Balapur", ]
        }, {
            name: " Nandurbar",
            areas: ["Akkalpada", " Amalner", " Dhadgaon", "Dhadga", ]
        }, {
            name: " Nashik",
            areas: ["Nashik", " Panchavati", " Deolali", " Dwarka", " Ambad", " Sinnar", " Satpur", " Cidco", " Trimbak", " Malegaon", " Baglan", " Kalwan", " Niphad", " Yeola", " Dindori", " Surgana", " Igatpuri", " Peint", " Chandwad", " Nandgaon", " Vinchur", " Deola", " Dhamangaon", " Chopda", " Nandurbar", " Navapur", " Shahada", " Dhule", " Jamner", " Muktainagar", " Mokhada", " Taloda", " Akkalpada", " Akrani", " Vihitgaon", " Vani", " Dapoli", " Dabhadi", " Durgapur", " Dabhala", " Dabhadi", " Dapada", " Dabhadi", " Dabhala", " Dapada", ]
        }, {
            name: " Osmanabad",
            areas: ["Aurangabad", " Bhadrawati", " Buldhana", " Dhamangaon Railway", " Digras", " Dombivali", " Durgapur", " Indapur", " Jalgaon", " Kalyan", " Karad", " Khamgaon", " Kopargaon", " Latur", " Malegaon", " Mumbai", " Nagpur", " Nanded", " Nandurbar", " Nashik", " Navi Mumbai", " Osmanabad", " Pandharpur", " Parbhani", " Pimpri-Chinchwad", " Pune", " Solapur", " Thane", " Ulhasnagar", " Virar", " Wardha", " Washim", " Yavatmal", ]
        }, {
            name: " Palghar",
            areas: ["Dahanu", " Talasari", " Jawhar", " Mokhada", " Vikramgad", " Vada", " Palghar", " Dahanu", ]
        }, {
            name: " Parbhani",
            areas: ["Parbhani", " Purna", " Selu", " Manwath", " Pathri", " Sonpeth", " Jintur", " Sailu", " Palam", " Tarwad", ]
        }, {
            name: " Pune",
            areas: ["Alandi", " Ambegaon", " Bhosari", " Chandan Nagar", " Dapodi", " Dhankawadi", " Hadapsar", " Kalyani Nagar", " Kasarwadi", " Katraj", " Khadki", " Khandala", " Koregaon Park", " Kotwadi", " Lonavala", " Mahalunge", " Nigdi", " Pimple Gurav", " Pimple Saudagar", " Pimple Nilakh", " Pimple Gurav", " Pimple Saudagar", " Pimple Nilakh", " Pimple Gurav", ]
        }, {
            name: " Raigad",
            areas: ["Kharghar", " Taloja", " Kamothe", " Panvel", " Navi Mumbai", " Ulwe", " Khopoli", " Pen", " Alibaug", " Roha", " Mangaon", " Matheran", " Karjat", " Neral", " Badlapur", " Ambernath", " Titwala", " Kalyan", " Ulhasnagar", " Ambarnath", " Vangani", " Shelu", " Bhiwandi", " Shahad", " Kausa", " Mumbra", " Diva", " Kopar", " Dombivali", " Thakurli", " Sonarpada", " Murbad", " Vithalwadi", " Central Park", " Manpada", " Digha", " New Panvel", " Kalamboli", " Kamraj", " MIDC Industrial Area", " Taloja Phase II", " Phase III", ]
        }, {
            name: " Ratnagiri",
            areas: ["Ratnagiri", " Adivre", " Aganashini", " Ajarle", " Akle", " Ambolgad", " Anjarle", " Asare", " Asud", " Athani", " Awasari Khurd", " Awasthi", " Babhulne", " Babyal", " Bagmandla", " Bakavati", " Bakharkheda", " Balachadi", " Bali", " Bamnoli", " Bandivade", " Bankot", " Bapawade", " Barad", " Baradwadi", " Bargad", " Bele", " Benavde", " Bhadangari", " Bhagawat", " Bhagdara", " Bhagur", " Bhalavali", " Bhalchandra", " Bhandarwadi", " Bhandiwadi", " Bhanivali", " Bhatye", " Bhivpuri", " Bhogave", " Bhoke", " Bhudargad", " Bhuivali", " Bhujavali", " Billoli", " Birwadi", " Boble", " Borgaon", " Borgaon Manju", " Chamak", " Chandgad", " Chandiwali", " Chaple", " Chiplun", " Chitra", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", " Dabhol", " Dabhosa", " Dahigaon", " Dahiwali", " Dapoli Camp", " Dapoli Harnai", " Dapoli Murud", " Dapoli Murud Janjira", " Dapoli Ratnagiri", " Dapoli Suvarnadurg", " Dabhil", " Dabholi", " Deorukh", " Devrukh", " Dhopave", " Dabhadi", " Dabhale", " Dabhil", ]
        }, {
            name: " Sangli",
            areas: ["Kupwad", " Vishrambag", " Taradgaon", " Kadegaon", " Walwa", " Jat", " Miraj", " Kavathe Mahankal", " Palus", " Atpadi", " Kallol", " Tasgaon", " Khetri", " Jatrat", " Ghataprabha", " Kadebhar", " Khanapur", ]
        }, {
            name: " Satara",
            areas: ["Satara", " Koregaon", " Jaoli", " Khandala", " Vaduj", " Wai", " Phaltan", " Mahabaleshwar", " Patan", " Mahad", " Poladpur", " Raigad Fort", " Roha", " Panvel", " Alibaug", " Murud", " Nagaon", " Shrivardhan", " Harihareshwar", " Diveagar", " Harnai", " Redi", " Anjanvel", " Chiplun", " Guhagar", " Khed", " Mandangad", " Mangaon", " Shrivardhan", " Dapoli", " Harnai Beach", " Kelshi", " Murud-Janjira", " Nagaon Beach", " Akshi", " Alibaug Beach", " Arambol Beach", " Asvem Beach", " Bagmandla Beach", " Baga Beach", " Calangute Beach", " Candolim Beach", " Chapora Beach", " Colva Beach", " Anjuna Beach", " Arambol", " Calangute", " Candolim", " Morjim", " Palolem", " Patnem", " Agonda", " Benaulim", " Betalbatim", " Bogmalo", " Cavelossim", " Cola", " Mobor", " Varca", " Galgibaga", " Majorda", " Betul", " Bhivpuri", " Matheran", " Panvel", " Karjat", " Khopoli", " Neral", " Pen", " Roha", " Tala", " Uran", " Pen-Mandwa", " Roha-Tala", " Seawoods-Darave", " Vashi", " Nerul", " Belapur", " CBD Belapur", " Kharghar", " Kopar Khairane", " Sanpada", " Juinagar", " Nerul", " Seawoods", " Ghansoli", " Vashi", " Airoli", " Rabale", " Ghansoli", " Kopar Khairane", " Turbhe", " Nerul", " Juinagar", " Sanpada", " Vashi", " CBD Belapur", " Belapur", " Kharghar", " Kopar Khairane", " Turbhe", " Airoli", " Rabale", ]
        }, {
            name: " Sindhudurg",
            areas: ["Vengurla", " Sawantwadi", " Kudal", " Malvan", " Dodamarg", " Kankavli", " Vaibhavwadi", " Deogad", "Sindhudurg", ]
        }, {
            name: " Solapur",
            areas: ["Solapur", " Akkalkot", " Barshi", " Bhigwan", " Madha", " Malshiras", " Mangalvedhe", " Mohol", " Pandharpur", " Sangola", " Shirala", " Karmala", " Tuljapur", " Vashi", ]
        }, {
            name: " Thane",
            areas: ["Ambernath", " Badlapur", " Dombivali", " Kalyan", " Kopar Khairane", " Mira Bhayandar", " Mira Road", " Mulund", " Navi Mumbai", " Palghar", " Ulhasnagar", " Virar", ]
        }, {
            name: " Wardha",
            areas: ["Arvi", " Ashti", " Deoli", " Dhamangaon", " Hinganghat", " Karanja", " Kelapur", " Samudrapur", " Selu", " Sevagram", " Wardha", " Warora", " Wadsa", ]
        }, {
            name: " Washim",
            areas: ["Malegaon", " Manora", " Mehekar", " Mohpa", " Morshi", " Mukhed", " Mul", " Nagpur", " Nanded", " Nandgaon", " Nandura", " Nandurbar", " Narkhed", " Nashik", " Navapur", " Ner", " Newasa", " Nighoj", " Nilanga", " Pachora", " Paithan", " Palam", " Pandharkaoda", " Pandharpur", " Panhala", " Parbhani", " Parola", " Partur", " Pathardi", " Pathri", " Patur", " Pauni", " Pen", " Phaltan", " Pusad", "", ]
        }, {
            name: " Yavatmal",
            areas: ["Yavatmal", " Digras", " Pusad", " Umarkhed", " Ralegaon", " Ghatanji", " Arni", " Mahagaon", " Zari Jamni", " Wani", " Pimplad", " Dharur", " Kelapur", " Purna", " Digras", " Ghatanji", " Pusad", " Umarkhed", " Ralegaon", " Arni", " Mahagaon", " Zari Jamni", " Wani", " Pimplad", " Dharur", " Kelapur", " Purna", ]
        }, ]
    },
    {
        state: "Manipur",
        cities: [{
            name: "Imphal",
            areas: ["Konung", "Sekmai", "Paona", "Thambalnu", "Kwakta", "Lamlai", "Lilong", "MayangImphal", "Wangoi", "Yairipok", "Andro", "Bishnupur", "Jiribam", "Kakching", "Keirao", "Lilong", "Nambol", "Oinam", "Porompat", "Sapam", "SekmaiBazar", "Singjamei", "Thoubal", "Wangkhei", "", ]
        }, {
            name: "Kakching",
            areas: ["Kakching", "Ichamati", "Heingang", "MayangImphal", "Lamlai", "SekmaiBazar", "Sekmai", "Andro", "Thoubal", "Wangkhei", "Keirao", "Lilong", "Moirang", "Bishnupur", "Imphal", "Lamding", "Pallel", "Tamei", "Tamenglong", "Ukhrul", "Chandel", "Churachandpur", "Jiribam", ]
        }, {
            name: "Thoubal",
            areas: ["Thoubal", "Andro", "Khangabok", "Lilong", "MayangImphal", "Nambol", "Heingang", "SekmaiBazar", "Yairipok", "Kanglatongbi", "Kakching", "Sekmai", "Lamlai", "LilongHaoreibi", "Wabagai", "Hiyanglam", "Wangjing", "Moirang", "Bishnupur", "Oinam", "NambolBazar", "HeingangKhunou", "ThoubalKeithel", "ThoubalMela", "MayangImphalBazar", "ThoubalMarket", "ThoubalAthokpam", "ThoubalBazar", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKhunou", "ThoubalBazar", "ThoubalMela", "ThoubalMarket", "ThoubalTurelAhanbi", "ThoubalPangei", "ThoubalWangkhei", "ThoubalAwangLeikai", "ThoubalThangmeiband", "ThoubalAthokpamMakha", "ThoubalKongpal", "ThoubalSekmaijin", "ThoubalKhunou", "ThoubalLeikai", "ThoubalThangmeibandKhunou", "ThoubalSekmaiBazar", "ThoubalKangabam", "ThoubalSarak", "ThoubalMakha", "ThoubalKhomidok", "ThoubalKiyam", "ThoubalThongam", "ThoubalWangkhei", "ThoubalYairipok", "ThoubalTakhel", "ThoubalThangmeiband", "ThoubalWangkhei", "ThoubalAthokpam", "ThoubalKh", ]
        }, {
            name: "Ukhrul",
            areas: ["UkhrulChurachandpurBishnupurChandelThoubalImphalWestImphalEastKakchingTengnoupalKamjongNambolSekmaiJiribamPherzawlChurachandpur", ]
        }, {
            name: "Chandel",
            areas: ["Chandel", "Chandeldistrict", "Chandeltown", "ChandelKhunou", "ChandelPanchayat", "ChandelHaokha", "ChandelNambol", "ChandelSorok", "ChandelHeingang", "ChandelKakching", "ChandelPallel", "ChandelTengnoupal", "ChandelSaikul", "ChandelMoreh", "ChandelSugnu", "ChandelThanlon", "ChandelPhungyar", "ChandelUkhrul", ]
        }, {
            name: "Churachandpur",
            areas: ["Lamsang", "Lamka", "Tuibong", "Singngat", "Henglep", "Tipaimukh", "Thanlon", "Saikot", "Veng", "Tuivai", ]
        }, {
            name: "Senapati",
            areas: ["Phungyar", "Mao", "Maram", "Paomata", "Purul", "Taphou", "Tadubi", "Nungba", "Karong", "Sapermeina", "Shangshak", "Saikul", "JaphouBazar", "Kangpokpi", "Sugnu", "Pallel", "Andro", "Kakching", "SekmaiBazar", "MayangImphal", "Heingang", "Lamlai", "Thoubal", "Wangoi", "Lilong", "Moirang", "Bishnupur", "ThoubalKangabamLeikai", "Heirok", "Mantripukhri", "KhangabamMakhaLeikai", "Sekmaijin", "SekmaiBazar", "KakchingKhunou", "Khurkhul", ]
        }, {
            name: "Tamenglong",
            areas: ["Tamei", "TamenglongHQ", "Taphou", "Nungba", "Andro", "Jiribam", "Kangpokpi", "Saikul", "Tousem", "Ukhrul", "Vengphei", "Churachandpur", "Bishnupur", "Chandel", "Churachandpur", "Kakching", "Kamjong", "Kangpokpi", "KasomKhullen", "Khoupum", "Kongba", "Kwakta", "Lamphelpat", "MaoMaram", "Noney", "Parbung", "Pherzawl", "Phungyar", "Saikul", "SadarHillsEast", "SadarHillsWest", "Sekmai", "Senapati", "Tamenglong", "Tamei", "Taphou", "Thoubal", "Ukhrul", "Wangoi", ]
        }, {
            name: "Bishnupur",
            areas: ["Bishnupur", "Moirang", "SekmaiBazar", "Andro", "Heingang", "Khangabok", "Lilong", "MayangImphal", "Nambol", "Oinam", ]
        }, {
            name: "Kangpokpi",
            areas: ["Kangpokpi", "Saikul", "SaituGamphazol", "Taphou", "Sugnu", "Pallel", "Nungba", "Jiribam", "Moreh", "Chakpikarong", "Machi", "Behiang", "Bongyang", "Borkul", "Lamlai", "Leimatak", "Saikot", "Sapermeina", "Sendra", "SekmaiBazar", "Thoubal", "Andro", "AwangSekmai", "Heingang", "Kakching", "Keirao", "Lilong", "MayangImphal", "Moirang", "Nambol", "Oinam", "Porompat", "Thanga", "ThoubalMela", "Wangkhei", "Wangoi", "Yaiskul", ]
        }, ]
    },
    {
        state: "Meghalaya",
        cities: [{
            name: "Shillong",
            areas: ["Shillong", "Nongpoh", "Jowai", "Nongstoin", "Tura", "Williamnagar", "Baghmara", "Resubelpara", "Ampati", "Mahendraganj", "Mawkyrwat", "Dadenggre", "Songsak", "Rongjeng", "Bajengdoba", "Selsella", "Borjhar", "Rongram", "Rongrenggiri", "Umsning", "Jirang", "Balet", "Umroi", "Umsohsun", "Mawhati", "Patharkhmah", "Phulbari", "Dalu", "Siju", "Baghmara", "Williamnagar", "Tura", "Nongstoin", "Jowai", "Nongpoh", "Shillong", ]
        }, {
            name: "Jowai",
            areas: ["Jowai", "Phulbari", "Jirang", "Raliang", "Laskein", "Nartiang", "Mowkaiaw", "Mairang", "Mawryngkneng", "Nongpoh", "Umsning", "JowaiBazar", "JowaiWest", "JowaiEast", "JowaiNorth", "JowaiSouth", "JowaiMarket", ]
        }, {
            name: "Nongstoin",
            areas: ["Nongstoin", "Rongjeng", "Mairang", "Mawkyrwat", "Sohiong", "Byrnihat", "Nongpoh", "Jowai", "Resubelpara", "Ampati", "Mahendraganj", "Dadenggre", "Williamnagar", "Songsak", "Rongram", "Rongrenggiri", "Tikrikilla", "Dalu", "Baghmara", "Ampati", ]
        }, {
            name: "Williamnagar",
            areas: ["Williamnagar", "Rongjeng", "Selsella", "Jengjal", "Mairang", "Umsohphoh", "Rongrenggiri", "Kongthong", "Rongram", "Rongrenga", "Samdong", "Samelangso", "Sambe", "Samteran", "Samtse", "Samtila", "Samudram", "Samudrika", "Samudrika", "Samudrika", ]
        }, {
            name: "Tura",
            areas: ["Ampati", "Baghmara", "Balet", "Betasing", "Bajengdoba", "Dalu", "Gambegre", "Gasuapara", "Jogighopa", "Kharkutta", "Mahendraganj", "Mendipathar", "Resubelpara", "Selsella", "Sonapur", "SouthGaroHills", "Tikrikilla", "Tura", ]
        }, {
            name: "Baghmara",
            areas: ["Baghmara", "Meghalaya", ]
        }, {
            name: "Resubelpara",
            areas: ["Resubelpara", "Meghalaya", ]
        }, {
            name: "Ampati",
            areas: ["Ampati", "Jowai", "Nongpoh", "Shillong", "Tura", "Williamnagar", ]
        }, {
            name: "Mahendraganj",
            areas: ["Nongalbibra", "Rongjeng", "Williamnagar", "Dalu", "Songsak", "Resubelpara", "Baghmara", "Ampati", "Jirang", "Selsella", ]
        }, {
            name: "Laskein",
            areas: ["Nongstoin", "Mawkyrwat", "Rongjeng", "Laskein", "Jowai", "Mairang", "Nongpoh", "Jirang", "Mawsynram", "Shella", "Pynthorumkhrah", "Umsning", "Nongmynsong", "Rongrenggiri", "Rongram", "Rongrengiri", "Rongtong", "Rongchengiri", "Rongjeng", "Rongkhang", "Rongrengiri", "Rongram", "Rongchengiri", "Rongtong", "Rongkhang", ]
        }, {
            name: "Dadenggre",
            areas: ["Dadenggre", "Rongjeng", "Rongjengbari", "Rongjengtila", "Rongjuk", "Rongjukbari", "Rongjuktila", "Rongmuk", "Rongmukbari", "Rongmuktila", "Rongsak", "Rongsakbari", "Rongsaktila", "Rongsong", "Rongsongbari", "Rongsongtila", "Rongtila", "Rongtilabari", "Rongtilatila", ]
        }, {
            name: "Songsak",
            areas: ["Songsak", "Rongjeng", "Rongram", "Rongrenggiri", "Rongtila", "Rongtong", "Rongtonggre", "Rongtwang", "Rongu", "Rongudam", "Rongwagre", "Rongwan", "Ronyai", "Sankat", "Sankatmochan", "Sankatpura", "Sankatru", "Sanki", "SankiTila", "Sanko", "Sankrail", "Sankrong", "Sankronggre", "Santalgudi", "Santalpur", "Santapara", "Santarem", "Santebari", "Santeklin", "Santen", "Santigudi", "Santipara", "Santipur", "Santo", "Santonga", "Santongaon", "Santra", "Santragachi", "Santrupthi", "Santushti", "Sanwalpara", "Sanwara", "Saora", "Saoragiri", "Saoragudi", "SaoragudiTola", "Saorakhali", "Saoram", "Saorapara", "Saorapathar", "Saoratala", "Saorati", "Saoratola", "Saoratpur", "Saorpur", "SaorpurTola", "Saorunda", "Saorundi", "Saorunggaon", "Saorunggudi", "Saorunpura", "SaorunpurTola", "Saoruppa", "Saoruppal", "SaoruppalTola", "Saoruppara", "Saoruppati", "Saoruri", "Saorurkandi", "Saorurkona", "Saorurmadhabpur", "Saorurnagar", "Saorurpalli", "Saorurpatna", "Saorursahebpur", "Saorurthakurpur", "Saorutla", "Saoruttarapara", "Saoruttarkul", "Saoruttarpur", "Saoruttaruni", "Saoruttinipara", "Saoruttirampur", "Saoruttla", "Saoruttoli", "Saoruttunipara", "Saoruttupur", "Saoruttupura", "Saoruvoyal", ]
        }, {
            name: "Rongjeng",
            areas: ["Rongjeng", "Meghalaya", ]
        }, {
            name: "Bajengdoba",
            areas: ["Bajengdoba", "Amlarem", "Jowai", "Nongpoh", "Nongstoin", "Resubelpara", "Shillong", "Tura", "Williamnagar", ]
        }, {
            name: "Selsella",
            areas: ["Umroi", "Mawlai", "Nongthymmai", "Rilbong", "Barapathar", "Mawkyrwat", "Rongjeng", "Sohiong", "Umsning", ]
        }, {
            name: "Mankachar",
            areas: ["Mankachar", "Amguri", "Baghmara", "Dalu", "Dimapur", "Dhubri", "Goalpara", "Hailakandi", "Hojai", "Karimganj", "Kokrajhar", "Langting", "Lumding", "Maibong", "Mangaldoi", "Nagaon", "Nalbari", "NorthGuwahati", "Patharkandi", "Rongjuli", "SouthSalmara", "Sualkuchi", "Udali", "WestKarbiAnglong", ]
        }, {
            name: "Balet",
            areas: ["Shillong", "Nongpoh", "Jowai", "Nongstoin", "Williamnagar", "Tura", "Baghmara", "Resubelpara", "Ampati", "Mahendraganj", "Laskein", "Rongjeng", "Bajengdoba", "Dalu", "Songsak", "Selsella", "Siju", "Rongram", "Rongrenggiri", "Sohiong", "Mawkyrwat", "Dadenggre", "Mankachar", "Ampareng", "Baghmara", "Rajabala", "Patharkandi", "Hailakandi", "Karimganj", "Badarpur", "Katlicherra", "Hailakandi", "Lakhipur", "SouthKarimganj", "NorthKarimganj", "Ratabari", ]
        }, {
            name: "Kharkutta",
            areas: ["Nongmynsong", "Mawprem", "Qualapatty", "Rilbong", "Amtali", "BaraBazar", "Bishnupur", "Cantonment", "Dalubari", "Daranggre", "", ]
        }, {
            name: "Baghmara",
            areas: ["Baghmara", "Meghalaya", ]
        }, {
            name: "Dalu",
            areas: ["Dalu", "Meghalaya", ]
        }, {
            name: "Siju",
            areas: ["Nongalbibra", "Dalu", "Williamnagar", "Rongjeng", "Baghmara", "Songsak", "Resubelpara", "Ampati", "Jirang", "Rajabala", "Mahendraganj", "Bajengdoba", "Selsella", "Tikrikilla", "Rongram", "Siju", "Rongrenggiri", "Rongjeng", "Rongrenggiri", "Rongram", "Selsella", "Songsak", "Tikrikilla", "Baghmara", "Dalu", "Jirang", "Mahendraganj", "Ampati", "Bajengdoba", "Rajabala", "Resubelpara", "Nongalbibra", "Williamnagar", ]
        }, {
            name: "GaroHills",
            areas: ["Dawki", "Byrnihat", "Rongjeng", "Baghmara", "Dalu", "Williamnagar", "Songsak", "Resubelpara", "Bajengdoba", "Mahendraganj", "Ampati", "Selsella", "Jagiroad", "Tikrikilla", "Rongram", "Rongrenggiri", "Siju", "Baghmara", "Dalu", "Williamnagar", "Songsak", "Resubelpara", "Bajengdoba", "Mahendraganj", "Ampati", "Selsella", "Jagiroad", "Tikrikilla", "Rongram", "Rongrenggiri", "Siju", ]
        }, ]
    },
    {
        state: "Mizoram",
        cities: [{
            name: "Aizawl",
            areas: ["Durtlang", "Chanmari", "Zarkawt", "Khatla", "Ramhlun", "Baktawng", "RepublicVeng", "Hmunthar", "Tlungvel", "electricveng", "venghlun", "dawrpui", "chhingaveng", "ramtharveng", "huntharveng", "zotlungveng", "thingdawl", "saiphai", "farkawn", "kawnpui", "tuipuibari", "vaphai", "tuikum", "tuivawl", "ngopa", "serchhip", "sailulak", "buangpui", "neihloh", "tuikang", "tuipuibari", ]
        }, {
            name: "Lunglei",
            areas: ["Durtlang", "Chanmari", "Ramhlun", "Zarkawt", "Khatla", "Serchhip", "Hrangchhuana", "Thingsulthliah", "Tuikum", "WestPhaileng", "EastPhaileng", "Lawngtlai", "Thorang", "WestVanlaiphai", "EastVanlaiphai", "Vaphai", "Ngopa", "Thenzawl", "electricveng", "bungkawn", "chaltlang", "saiphai", "ramthar", "farkawn", "khawzawl", "zuangtui", "tiau", "tuipuibari", "tuivawl", "westkarimganj", "eastkarimganj", "southkarimganj", "northkarimganj", "tuivawl", "tawi", "neihlohna", "tuisen", "kolasib", "buhchang", "tuipuibari", "palak", "tuisen", "buhchang", "buhchang", "buhchang", "tuisen", ]
        }, {
            name: "Champhai",
            areas: ["Durtlang", "Chanmari", "Bawngkawn", "Hmuifang", "Kawlkulh", "Khatla", "Khawzawl", "Khawhai", "Khawzawl", "Lungdar", "Serchhip", "Tuikum", "Tawi", "Vaphai", "Zote", ]
        }, {
            name: "Kolasib",
            areas: ["Durtlang", "Serchhip", "Kolasib", "Tuikum", "Vaitin", "Thingsulthliah", "Tuivawl", "Bilkhawthlir", "WestPhaileng", "EastPhaileng", "Ngopa", "Thorang", "Tuipuibari", "Vaphai", "Tuikhuahtlang", "Khawzawl", "Ngur", "Tuipuiral", "WestTuipui", "EastTuipui", "Reiek", "Tawi", "Saiphai", "Zawlnuam", "Chalfilh", "Khawhai", "Serlui", "EastLungdar", "WestLungdar", "Lawngtlai", "Tuichawng", "EastSaiha", "WestSaiha", "Hnahthial", "Lengpui", "Palak", "Siaha", "Tuipang", "Tlangnuam", "Hnahthial", "Bungzung", "Thenzawl", "Zote", ]
        }, {
            name: "Serchhip",
            areas: ["Serchhip", "Tuikum", "Ngopa", "Vaphai", "Thingsulthliah", "Buangpui", "Bungzung", "Khawzawl", "EastLungdar", "WestLungdar", "Thenzawl", "Zawlnuam", "Ngwal", "Sailulak", "Hrangturzo", "Thorang", "BungtlangSouth", "BungtlangNorth", "Chhingchhip", "Zote", ]
        }, {
            name: "Siaha",
            areas: ["Siaha", "Pisa", "Vaphai", "Thingsulthliah", "Tuipuibari", "Hnahthial", "Tlangsam", "Bungtlang", "WestPhaileng", "EastPhaileng", "Lawngtlai", "Serchhip", "Champhai", "Kolasib", "Aizawl", "Mamit", "Lunglei", "LawngtlaiWest", "Saiha", "Palak", "Thorang", "WestTuipuibari", "EastTuipuibari", "Tuichawng", "Darlawn", "WestVanlaiphai", "EastVanlaiphai", "NorthVanlaiphai", "SouthVanlaiphai", "VaphaiEast", "VaphaiWest", "Tuivawl", "Tuikum", "Tiau", "Tipura", "WestTipura", "EastTipura", "ThingsulthliahEast", "ThingsulthliahWest", "BungtlangNorth", "BungtlangSouth", "HnahthialEast", "HnahthialWest", "TlangsamEast", "TlangsamWest", "WestPhailengEast", "WestPhailengWest", "EastPhailengEast", "EastPhailengWest", "LawngtlaiWestEast", "LawngtlaiWestWest", "LawngtlaiEastEast", "LawngtlaiEastWest", "SerchhipEast", "SerchhipWest", "ChamphaiNorth", "ChamphaiSouth", "KolasibEast", "KolasibWest", "AizawlEast", "AizawlWest", "MamitNorth", "MamitSouth", "LungleiEast", "LungleiWest", "LawngtlaiWestNorth", "LawngtlaiWestSouth", "LawngtlaiEastNorth", "LawngtlaiEastSouth", "SerchhipNorth", "SerchhipSouth", "ChamphaiNorthEast", "ChamphaiNorthWest", "ChamphaiSouthEast", "ChamphaiSouthWest", "KolasibNorth", "KolasibSouth", "AizawlNorth", "AizawlSouth", "MamitNorthEast", "MamitNorthWest", "MamitSouthEast", "MamitSouthWest", "LungleiNorth", "LungleiSouth", ]
        }, {
            name: "Lawngtlai",
            areas: ["Lawngtlai", "Serchhip", "Champhai", "Kolasib", "Aizawl", "Mamit", "Lunglei", "Saiha", "Hnahthial", "Serlui", "Tawi", "Thorang", "Tuipuibari", "WestPhaileng", "EastPhaileng", "Tuichawng", "Tuivawl", "Zawlnuam", ]
        }, {
            name: "Mamit",
            areas: ["Tawi", "Vaphai", "Thingsulthliah", "Zawlnuam", "Reiek", "Phaislu", "Durtlang", "Selam", "Tuikum", "WestPhaileng", "Bungtlang", "EastPhaileng", "Kolasib", "Serchhip", "Tuipuibari", "Siaha", "Lawngtlai", "Lunglei", "Palak", "Thorang", "WestTuipuibari", "EastTuipuibari", "Saiha", "Hnahthial", "Tlabung", "WestVanlaiphai", "EastVanlaiphai", "Vairengte", "Ngopa", "Thenzawl", "Chalfilh", "Serkhan", "Vaphai", "Khawhai", "Khawzawl", "EastLungdar", "WestLungdar", "Ngopa", "Tuipuibari", "Tuichawng", "WestTuipuibari", "EastTuipuibari", "Hnahthial", "Tlabung", "WestVanlaiphai", "EastVanlaiphai", "Vairengte", "Ngopa", "Thenzawl", "Chalfilh", "Serkhan", "Vaphai", "Khawhai", "Khawzawl", "EastLungdar", "WestLungdar", ]
        }, {
            name: "Hnahthial",
            areas: ["Hnahthial", "Vaphai", "Vaitin", "Ngopa", "Vaphai", "Ngopa", "Vaphai", "Vaitin", "Vaphai", "Vaphai", "Vaitin", "Vaphai", "Vaphai", "Vaitin", "Vaphai", "Vaitin", "Vaphai", "Vaphai", "Vaitin", "Vaphai", "Vaphai", "Vaitin", "Vaphai", "Vaitin", "Vaphai", "Vaitin", "Vaphai", "Vaitin", "Vaphai", "Vaphai", "Vaitin", "Vaphai", "Vaitin", "Vaphai", "Vaphai", "Vaitin", "Vaitin", "Vaphai", "Vaitin", "Vaphai", "Vaphai", "Vaitin", "Vaphai", "Vaitin", "Vaphai", "Vaphai", "Vaitin", "Vaphai", "Vaphai", "Vaitin", "Vaphai", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaphai", "Vaitin", "Vaphai", "Vaitin", "Vaphai", "Vaitin", "Vaitin", "Vaphai", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaphai", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaphai", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", "Vaitin", ]
        }, {
            name: "Khawzawl",
            areas: ["Durtlang", "Tuikum", "Tuivawl", "Vaphai", "Vaitin", "Vaivakawn", "Vanthangpuia", "Vaphai", "Vengthar", "Vengthlang", ]
        }, {
            name: "Thorang",
            areas: ["Durtlang", "Khatla", "Republic", "Selesih", "Serchhip", "Tuikum", "Tuipang", "Tuivawl", "Vairengte", "Zawlnuam", ]
        }, {
            name: "Tawi",
            areas: ["Tawi", "Aizawl", "Mizoram", "India", ]
        }, {
            name: "Vairengte",
            areas: ["Durtlang", "Kolasib", "Serchhip", "Champhai", "Hnahthial", "Lawngtlai", "Mamit", "Siaha", "Lunglei", "Thorang", ]
        }, {
            name: "Palak",
            areas: ["Aizawl", "Baktawng", "Baria", "Bawngkawn", "Darlawn", "Durtlang", "Electricveng", "Falkawn", "Gaisial", "Hmuntha", "Khawzawl", "Kulikawn", "Luangmual", "Lunglei", "Mamit", "Ngopa", "NorthVanlaiphai", "Saitual", "Sangau", "Serchhip", "SouthVanlaiphai", "Thenzawl", "Tiau", "Tlangnuam", "Tualbung", "WestPhaileng", "Zawlnuam", ]
        }, ]
    },
    {
        state: "Nagaland",
        cities: [{
            name: "Kohima",
            areas: ["Aizuto", "Akuluto", "Alungoto", "Angetyongpang", "Aqunga", "Chiephobozou", "Chizami", "Chuchuyimpang", "Chumukedima", "Diphupar", "Dimapur", "GhaspaniII", "Jakhama", "Jotsoma", "KachariBasti", "Kohima", "Lhomithi", "Mima", "Phesama", "Phomching", "SechZubza", "Sendema", "Tsiesema", "Tseminyu", "Wokha", "Zunheboto", ]
        }, {
            name: "Dimapur",
            areas: ["Chumukedima", "DiphuparA", "DiphuparB", "DimapurTown", "EastDimapur", "IndustrialEstateDimapur", "Jagiroad", "Jalukie", "Merapani", "NewChumukedima", "NewDimapur", "Niuland", "PuranaBazarDimapur", "SouthDimapur", "WestDimapur", ]
        }, {
            name: "Mokokchung",
            areas: ["Mokokchung", "Tokiu", "Mangkolemba", "Tizit", "Wokha", "Longleng", "Tuensang", "Kiphire", "Peren", "Zunheboto", "Kohima", "Dimapur", ]
        }, {
            name: "Wokha",
            areas: ["Wokha", "Lakhuti", "Diphupar", "Tseminyu", "WokhaLotha", "Sangtam", "Yimchunger", "Phom", "Konyak", "Sumi", "Ao", "Lotha", ]
        }, {
            name: "Zunheboto",
            areas: ["Zunheboto", "Atoizu", "Tuli", "Wokha", "Mokokchung", "Longleng", "Tuensang", "Kiphire", "Phek", "Dimapur", ]
        }, {
            name: "Phek",
            areas: ["Chizami", "Chozuba", "Jakhama", "Pfutsero", "Phokhungri", "SechZubza", "Sendenyu", "Sithalav", "Tsiesema", "Znheboto", ]
        }, {
            name: "Tuensang",
            areas: ["Changtongya", "Longkhim", "Mokokchung", "Tening", "Tuensang", ]
        }, {
            name: "Kiphire",
            areas: ["Kiphire", "Pungro", "Satoi", "Tizit", "Tobu", "Tuophema", "Wokha", "Zunheboto", ]
        }, {
            name: "Longleng",
            areas: ["Longleng", "Pungro", "Wokha", "Mokokchung", "Tuensang", "Zunheboto", "Phek", "Kiphire", "Dimapur", "Kohima", ]
        }, {
            name: "Mon",
            areas: ["Chuchuyimlang", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", ]
        }, ]
    },
    {
        state: "Odisha",
        cities: [{
            name: "Bhubaneswar",
            areas: ["AcharyaVihar", "Airfield", "Airport", "AshokNagar", "Baramunda", "BapujiNagar", "Bhimatangi", "BijuPatnaikInternationalAirport", "Chandrasekharpur", "Dumduma", "GajapatiNagar", "GGPColony", "Gothapatna", "Jagamara", "JayadevVihar", "Jatni", "KalingaNagar", "KharavelaNagar", "Khandagiri", "LewisRoad", "MadhusudanNagar", "MahaveerMarg", "MarketBuilding", "Mathasuni", "Nayapalli", "NiladriVihar", "NandanVihar", "OldTown", "Patia", "Pokhariput", "SahidNagar", "SailashreeVihar", "SamantaVihar", "Sankarpur", "SatyaNagar", "Seethammadhara", "ShreeVihar", "ShyamNagar", "SuryaNagar", "UnitI", "UnitII", "UnitIII", "UnitIV", "VaniVihar", "VaniVihar", "VaniVihar", "VaniVihar", ]
        }, {
            name: "Cuttack",
            areas: ["CuttackSad", "CuttackSadar"]
        }, {
            name: "Berhampur",
            areas: ["Kukudakhandi", "Berhampur", "Bhanjanagar", "Chatrapur", "Chhatrapur", "Digapahandi", "Gopalpur", "Paralakhemundi", "Patrapur", "Phulbani", "Purushottampur", "Srikakulam", ]
        }, {
            name: "Sambalpur",
            areas: ["Nuapada", "Balangir", "Bargarh", "Boudh", "Deogarh", "Jharsuguda", "Kalahandi", "Kandhamal", "Kesinga", "Phulbani", "Sonepur", "Subarnapur", "Sundargarh", ]
        }, {
            name: "Rourkela",
            areas: ["Birmitrapur", "Bonai", "Bonpahar", "Bisra", "Chatabar", "Chhend", "ChhotaAmbadala", "Digapahandi", "Duburi", "Gurundia", "Jhirpani", "Jalda", "Koira", "Koida", "Lahunipada", "Lathikata", "Lemua", "Lephripara", "Lohardaga", "Mahulpali", "Nuagaon", "Panposh", "Rajgangpur", "Raghunathpalli", "Rairangpur", "Rengali", "Subdega", "Suleipat", "Telkoi", "Uditnagar", ]
        }, {
            name: "Balasore",
            areas: ["NuaBalasore", "Jaleswar", "Remuna", "Bahanaga", "Baliapal", "Basta", "Bhograi", "BimalaPrasad", "Binjharpur", "Bishnupur", "Baliapal", "Jhankada", "Jharpokharia", "Jugasol", "Khaira", "Kainchara", "Kantapada", "Kasinagar", "Kendrapara", "Khetrajpur", "Soro", "Subalaya", "Subernarekha", "Udaypur", ]
        }, {
            name: "Baripada",
            areas: ["Jamda", "Khunta", "Raruan", "Bangriposi", "Bara", "Panchupalli", "Tiring", "Udala", "Betnoti", "Badasahi", "Saraskana", "Bangriposi", ]
        }, {
            name: "Bhadrak",
            areas: ["Tihidi", "Jajpur", "Tarapur", "Bari", "Barchana", "Sukinda", "Nischintakoili", "Panchpatmali", "Dhamnagar", "Chandabali", "Soro", "Balichandrapur", "Agalpur", "Rajnagar", "Gobardhanpur", "Bhandaripokhari", "Simulia", "Jaleswar", "Basta", "Chandbali", "Remuna", "Baitarani", "Aul", "Dhamara", "Barapali", "Bangriposi", "Patkura", "Basudevpur", "JajpurKeonjharRoad", "Baliapal", "Derabis", "Jatni", "Balugaon", "Baranga", "Jhinkpani", "JajpurTown", "Danagadi", "Kujang", "Rajkanika", "Raghunathpur", "Kukudakhandi", ]
        }, {
            name: "Puri",
            areas: ["BaliJhoti", "Balanga", "Baliapanda", "Baliashankara", "Baliapal", "Balikuda", "Banapur", "Chandanpur", "Delang", "Digabandi", "Gop", "Gopalpur", "Jatni", "Konark", "Nimapara", "NuaBazar", "Pipili", "Puri", "Raghurajpur", "Satyabadi", "Srirangapatna", "Tirtol", ]
        }, {
            name: "Jeypore",
            areas: ["Koraput", "Sunabeda", "Jeypore", "Lamtaput", "Bissamcuttack", "Kotpad", "Machkund", "Ramanaguda", "Pottangi", "Nandapur", "Kundura", "Borigumma", "Laxmipur", "Jaugada", "Jayapatna", "Podia", "Lamtaput", "Kundura", "Bissamcuttack", "Kotpad", "Machkund", "Ramanaguda", "Pottangi", "Nandapur", "Borigumma", "Laxmipur", "Jaugada", "Jayapatna", "Podia", ]
        }, ]
    },
    {
        state: "Punjab",
        cities: [{
            name: "Lahore",
            areas: ["DHA", "Gulberg", "Johar Town", "Model Town", "Multan Road", "Allama Iqbal Town", "Samanabad", "Cantt", "Faisal Town", "Township", ]
        }, {
            name: "Faisalabad",
            areas: ["Iqbal Town", "Peoples Colony", "Chiniot Bazar", "D Ground", "Millat Road", "Samanabad", "Gulshan-e-Iqbal", "Jaranwala Road", "Tandlianwala", "Madina Town", "Chak Jhumra", "Dijkot", "Iqbal Nagar", "Raja Jang", "Gulgasht", "Chakar", "Pirmahal", "Tandlianwala", "Khurrianwala", "Gojra", "Dijkot", "Samundri", "Kamalia", "Pindi Bhattian", "Toba Tek Singh", "Jhang Sadar", "Chiniot", "Piran Kaliyar", "Warispura", "Samundri", ]
        }, {
            name: "Rawalpindi",
            areas: ["Rawat", "Morgah", "Banni", "Pirwadhai", "Sadiqabad", "Gulzar-e-Quaid", "Taxila Cantonment", "Wah Cantonment", "Murree", "Kotli Sattian", "Kahuta", "Kallar Syedan", "Gujar Khan", "Chaklala Cantonment", "Rawalpindi", "Jhelum", "Dina", "Pind Dadan Khan", "Mandi Bahauddin", "Phalia", "Talagang", "Jhelum Cantonment", "Khushab", "Noorpur Thal", "Mianwali", "Layyah", "Dera Ghazi Khan", "Taunsa", "Muzaffargarh", "Rajanpur", "Kot Addu", "Bahawalnagar", "Chichawatni", "Arifwala", "Pakpattan", "Vehari", "Okara", "Sahiwal", "Burewala", "Multan", "Khanewal", "Mian Channu", "Lodhran", "Vehari Cantonment", "Bahawalpur", "Rahim Yar Khan", "Sadiqabad Cantonment", "Faisalabad", "Jhang Sadar", "Chiniot", "Tandlianwala", "Gojra", "Kamalia", "Toba Tek Singh", "Jaranwala", "Samundri", "Lyallpur", "Raiwind", "Faisalabad Cantonment", "Chiniot Cantonment", "Jhang", "Mianwali Nagar", "Rajanpur Cantonment", "Chichawatni Cantonment", "Arifwala Cantonment", "Okara Cantonment", "Sahiwal Cantonment", "Multan Cantonment", "Khanewal Cantonment", "Lodhran Cantonment", "Bahawalpur Cantonment", "Rahim Yar Khan Cantonment", "", ]
        }, {
            name: "Gujranwala",
            areas: ["Wapda Town", "Model Town", "Satellite Town", "New Satellite Town", "Peoples Colony", "Rehmanpura", "Islam Pura", "Nawab Town", "Qila Gujranwala", "Gujranwala Cantt", "Khiali Shah Pur", "Kamoke", "Nowshera Virkan", "Muridke", "Noor Pur Shahan", "Wazirabad", "Qila Didar Singh", "Hafizabad", ]
        }, {
            name: "Peshawar",
            areas: ["Peshawar", "Hayatabad", "University Town", "Gulberg", "Iqbal Town", "Cantt", "Model Town", "Allama Iqbal Town", "Johar Town", "Faisal Town", "Township", ]
        }, {
            name: "Multan",
            areas: ["Multan City", "Multan Sadar", " Pirwala", "Shujabad", "Khanewal", "Vehari", "Muzaffargarh", "Rahim Yar Khan", "Lodhran", "Toba Tek Singh", "Pakpattan", "Sahiwal", "Okara", "Bahawalnagar", "Bahawalpur", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", "Jhelum", "Gujrat", "Mandi Bahauddin", "Hafizabad", "Gujranwala", "Narowal", "Sialkot", "Kasur", "Lahore", "Nankana Sahib", "Sheikhupura", "Faisalabad", "Chiniot", "Toba Tek Singh", "Jhang", "Muzaffargarh", "Khanewal", "Multan", "Lodhran", "Vehari", "Bahawalpur", "Rahim Yar Khan", "Sahiwal", "Okara", "Pakpattan", "Dera Ghazi Khan", "Rajanpur", "Layyah", "Mianwali", "Bhakkar", "Chakwal", ]
        }, {
            name: "Hyderabad",
            areas: ["Hyderabad", "Latifabad", "Qasimabad", "New Hyderabad", "Old Hyderabad", "Gulshan-e-Iqbal", "Liaquatabad", "North Nazimabad", "Federal B Area", "Gulberg", "DHA Phase I-VI", "Karachi", ]
        }, {
            name: "Islamabad",
            areas: ["F-11", "F-10", "F-9", "F-8", "F-7", "F-6", "F-5", "E-11", "E-10", "E-9", "E-8", "E-7", "E-6", "E-5", "D-11", "D-10", "D-9", "D-8", "D-7", "D-6", "D-5", "C-11", "C-10", "C-9", "C-8", "C-7", "C-6", "C-5", "B-11", "B-10", "B-9", "B-8", "B-7", "B-6", "B-5", "A-11", "A-10", "A-9", "A-8", "A-7", "A-6", "A-5", ]
        }, {
            name: "Quetta",
            areas: ["Quetta", "Islamabad", "Lahore", "Peshawar", "Faisalabad", "Multan", "Rawalpindi", "Gujranwala", "Sialkot", "Bahawalpur", "Karachi", "Hyderabad", "Sukkur", "Larkana", "Nawabshah", "Mirpur Khas", "Jacobabad", "Shikarpur", "Jhang", "Muzaffargarh", "Khanewal", "Sahiwal", "Okara", "Gujrat", "Shekhupura", "Rahim Yar Khan", "Sargodha", "Kasur", "Mianwali", "Attock", "Vehari", "Toba Tek Singh", "Chiniot", "Jhelum", "Mandi Bahauddin", "Hafizabad", "Sadiqabad", "Pakpattan", "Muzaffarnagar", "Khanpur", "Leiah", "Murree", "Soianwala", "Jauharabad", "Gujranwala Cantt", "Wazirabad", "Taxila", "Sohawa", "Dera Ghazi Khan", "Tando Allahyar", "Tando Adam", "Jaranwala", "Chichawatni", "Gojra", "Mailsi", "Arifwala", "Chiniot", "Ahmadpur Sial", "Lodhran", "Layyah", "Rajanpur", "Chakwal", "Noorpur Thal", "Pakpattan", "Pindi Bhattian", "Abbotabad", "Bannu", "Dera Ismail Khan", "Swabi", "Charsadda", "Nowshera", "Kohat", "Mardan", "Mansehra", "Abbottabad", "Haripur", "Peshawar", "Chitral", "Swat", "Shangla", "Buner", "Dir", "Malakand", "Kohistan", "Bagh", "Torghar", "Battagram", "Lakki Marwat", "DI Khan", "Tank", "Dera Adamkhel", "Hangu", "Orakzai Agency", "Kurram Agency", "North Waziristan Agency", "South Waziristan Agency", "Khyber Agency", "Mohmand Agency", "Bajaur Agency", "Frontier Regions", "Balochistan", ]
        }, {
            name: "Karachi",
            areas: ["Karachi", "Gulshan-e-Iqbal", "Shah Faisal Colony", "Gulistan-e-Jauhar", "Malir", "North Nazimabad", "Federal B Area", "Liaquatabad", "Jamshed Town", "Orangi Town", "Saddar Town", "Landhi", "Gulzar-e-Hijri", "Korangi", "New Karachi", "Nazimabad", "Gulberg", "Clifton", "Defence Housing Authority", ]
        }, ]
    },
    {
        state: "Rajasthan",
        cities: [{
            name: "Ajmer",
            areas: ["Ajmer", "Pushkar", "Kishangarh", "Nasirabad", "Beawar", "Bhilwara", "Tonk", "Alwar", "Sikar", "Jhunjhunu", "Churu", "Nagaur", "Hanumangarh", "Bikaner", "Chittorgarh", "Udaipur", "Dungarpur", "Banswara", "Barmer", "Jaisalmer", "Jodhpur", "Pali", "Nagpur", "Baran", "Bundi", "Jhalawar", "Kota", ]
        }, {
            name: "Alwar",
            areas: ["Ramgarh", "Mandalgarh", "Khairthal", "Kishangarh Bas", " Alwar", "Tijara", "Thanagazi", "Losal", "Sariska", "Kund", "Manpur", "Dausa", "Hindaun", "Nagar", "Bassi", "Achhnera", "Behror", "Chomu", "Phulera", "Reni", "Shahpura", "Tapukara", "Vijaypur", ]
        }, {
            name: "Banswara",
            areas: ["Abu Road", "Bagidora", "Banswara", "Ghatol", "Kotra", "Kushalgarh", "Sagwara", "Sendra", ]
        }, {
            name: "Baran",
            areas: ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dhaulpur", "Hanumangarh", "Jaisalmer", "Jalor", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur", ]
        }, {
            name: "Barmer",
            areas: ["Barmer", "Balotra", "Baytoo", "Bhadra", "Bilara", "Jawai", "Jodhpur", "Luni", "Nagaur", "Osian", "Pali", "Pilani", "Sheo", "Sojat", "", ]
        }, {
            name: "Bharatpur",
            areas: ["Nagla", "Fatehpur", "Bharatpur", "Bayana", "Dhaulpur", "Deeg", "Kaman", "Kumher", "Roopbas", "Weir", ]
        }, {
            name: "Bhilwara",
            areas: ["Abu Road", "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittaurgarh", "Churu", "Dausa", "Dholpur", "Dungapur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalor", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Tonk", "Udaipur", ]
        }, {
            name: "Bikaner",
            areas: ["Deshnoke", "Lunkaransar", "Nokha", "Bikaner", "Chhatargarh", "Khajuwala", "Kolayat", "Shivgarh", ]
        }, {
            name: "Bundi",
            areas: ["Nainwa", "Wajidpur", "Keshoraipatan", "Dabi", "Bundi", "Talwandi", "Rajakhera", "Nain", "Hindoli", "Keshoraipatan", "Itawa", "Pipalda", "Ramganj Mandi", "Kota", "Bundi", "Lakheri", "Digod", "Keshoraipatan", "Atru", "Hindoli", "Pindwara", "Kota", "Jhalawar", "Baran", "Ramganj Mandi", "Kota", "Bundi", "Jhalrapatan", "Keshoraipatan", "Chhapara", "Kota", "Bundi", "Jhalawar", "Kishanganj", "Anta", "Baran", "Kota", "Bundi", "Jhalawar", "Keshoraipatan", "Digod", "Atru", "Hindoli", "Pindwara", "Kota", "Bundi", "Jhalrapatan", "Keshoraipatan", "Chhapara", "Kota", "Bundi", "Jhalawar", "Kishanganj", "Anta", "Baran", ]
        }, {
            name: "Chittorgarh",
            areas: ["Chittorgarh city", "Bichhiwara", "Nimbahera", "Bari Sadri", "Begu Sadri", "Chanderiya", "Delwada", "Dungla", "Gogunda", "Jawad", "Kapasan", "Kumbalgarh", "Mandal", "Nimbahera", "Rajsamand", "Vallabhnagar", ]
        }, {
            name: "Churu",
            areas: ["Churu", "Taranagar", "Sardarshahar", "Ratangarh", "Sujangarh", "Dungargarh", "Pilani", "Jhunjhunu", "Bidasar", "Chirawa", "Nawalgarh", "Mandawa", "Mahendragarh", "Nohar", "Bhadra", "Fatehpur", "Rajaldesar", "Sujangarh", "Salasar", "Taranagar"]
        }, {
            name: "Dausa",
            areas: ["Reni", "Lalsot", "Mahwa", "Sikandra", "Bandikui", "Bassi", "Chauth ka Barwara", "Dausa", "Lalsot", "Mandawar", "Mangrol", "Nathdwara", "Pushkar", "Sadri", "Sarada", "Sawai Madhopur", "Tonk", "Weir", ]
        }, {
            name: "Dholpur",
            areas: ["Dholpur", "Rajasthan", ]
        }, {
            name: "Dungarpur",
            areas: ["Dungarpur", "Aspur", "Sagwara", "Simalwara", "Himatnagar", "Gudhamalani", "Bagidora", "Chorasi", "Khinvsar", "Mandalgarh", "Galiakot", "Sagwara", "Simalwara", "Himatnagar", "Gudhamalani", "Bagidora", "Chorasi", "Khinvsar", "Mandalgarh", "Galiakot", ]
        }, {
            name: "Hanumangarh",
            areas: ["Hanumangarh", "Sadulshahar", "Pilibanga", "Rawatsar", "Sangaria", "Nohar", "Bhadra", "Pilibanga", "Raisinghnagar", "Gharsana", "Tibbi", "Suratgarh", "Ghanour", "Karanpur", "Chhapar", "Ratia", "Fatehabad", "Dabwali", "Ellenabad", "Mandi Dabwali", "Sirsa", "Rania", "Dabwali", "Kalanwali", "Ellenabad", "Hisar", "Fatehabad", "Tohana", "Agroha", "Uklana", "Jind", "Safidon", "Julana", "Narwana", "Uchana", "Jind", "Julana", "Narwana", "Uchana", "Safidon", "Uchana", "Jind", "Julana", "Narwana", ]
        }, {
            name: "Jaipur",
            areas: ["Ajmeri Gate", "Amer", "Bais Godam", "Bani Park", "Barkat Nagar", "Civil Lines", "Durgapura", "Gopalpura", "Indira Bazar", "Jaisinghpura", "Jawahar Nagar", "Jhotwara", "Johari Bazar", "Kishanpole Bazar", "Lal Kothi", "Mahesh Nagar", "Mansarovar", "MI Road", "Nehru Bazar", "Panch Batti", "Ramganj", "Sansar Chandra Road", "Sethi Colony", "Shankar Nagar", "Sindhi Camp", "Subhash Nagar", "Tilak Nagar", "Tonk Phatak", "Vaishali Nagar", "Vidhyadhar Nagar", ]
        }, {
            name: "Jaisalmer",
            areas: ["Sams", "Gadsisar", "Kuldhara", "Lodhruva", "Amar Sagar", "Mool Sagar", "Raj Mahal", "Akal", "Pachpadra", ]
        }, {
            name: "Jalor",
            areas: ["Jalore", "Ahore", "Bagora", "Barnawa", "Bhinmal", "Bidasar", "Bilara", "Chandwaji", "Chatra", "Gagron", "Jawaja", "Jalore", "Kharchan", "Kheroda", "Kishanganj", "Modran", "Mundwa", "Naguar", "Nawalgarh", "Pindwara", "Raniwara", "Ratanpur", "Sayla", "Shaduliya", "Sheoganj", "Sikarwar", "Sirohi", "Sojat", "Sumerpur", "Surjana", "Taranagar", "Udaipurwati", ]
        }, {
            name: "Jhalawar",
            areas: ["Keshoraipatan", "Jhalrapatan", "Atru", "Pirawa", "ManoharThana", "Dhaban", "Ramganj Mandi", "Khairabad", "Nainwa", "Digod", "Aklera", "Bhawani Mandi", "Jhalawar", "Dariba", "Chandpura", "Khanpur", "Kota", "Raipur", "Rajakhera", "Ramgarh", "Sangod", ]
        }, {
            name: "Jhunjhunu",
            areas: ["Amberi", "Bagar", "Chirawa", "Jhunjhunun", "Khetri", "Mandawa", "Nawalgarh", "Odisha", "Udaipurwati", ]
        }, {
            name: "Jodhpur",
            areas: ["Abu Road", "Adarsh Nagar", "Agra", "Ajmer", "Alwar", "Amber", "Amet", "Anupgarh", "Asind", "Aspur", "Atru", "Bali", "Banswara", "Baran", "Barmer", "Bassi", "Baytoo", "Beawar", "Behror", "Bhilwara", "Bhiwadi", "Bikaner", "Bundi", "Chhabra", "Chhipaborad", "Chirawa", "Chittaurgarh", "Chomu", "Churu", "Dausa", "Dholpur", "Didwana", "Dungarpur", "Fatehpur", "Ganganagar", "Hanumangarh", "Hindaun", "Jaipur", "Jaisalmer", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Khetri", "Kishangarh", "Kota", "Kotputli", "Lachhmangarh", "Ladnun", "Lalsot", "Losal", "Makrana", "Malpura", "Mandal", "Mandawa", "Merta", "Mount Abu", "Nadbai", "Nagaur", "Nathdwara", "Nawalgarh", "Nimbahera", "Niwai", "Nohar", "Pali", "Partapur", "Phalodi", "Pilani", "Pokaran", "Pushkar", "Rawatbhata", "Reengus", "Sagwara", "Sambhar", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Madhopur", "Sujangarh", "Sumerpur", "Suratgarh", "Tijara", "Tonk", "Udaipur", "", ]
        }, {
            name: "Karauli",
            areas: ["Khera", "Sapotara", "Todaraisingh", "Mandrayal", "Hindaun City", "Anta", "Bayana", "Pinahat", "Mahwa", "Karauli", ]
        }, {
            name: "Kota",
            areas: ["Sukher", "UIT", "Jawahar Nagar", "Mahaveer Nagar", "Vigyan Nagar", "Dadabari", "IIT", "Ranpur", "Talwandi", ]
        }, {
            name: "Nagaur",
            areas: ["Nagaur", "Didwana", "Degana", "Ladnun", "Mokamsar", "Nawa", "Parbatsar", "Khinwsar", "Jayal", "Kuchaman", "Makrana", "Mundwa", "Nokha", "Ladpura", "Phalodi", "Nagaur", "Didwana", "Degana", "Ladnun", "Mokamsar", "Nawa", "Parbatsar", "Khinwsar", "Jayal", "Kuchaman", "Makrana", "Mundwa", "Nokha", "Ladpura", "Phalodi", ]
        }, {
            name: "Pali",
            areas: ["Pali", "Rajasthan", "India", ]
        }, {
            name: "Pratapgarh",
            areas: ["Arnod", "Bambora", "Bari", "Bela", "Bhadesar", "Chapara", "Chhapar", "Dharampura", "Dungarpur", "Ghatol", "Jawad", "Jiran", "Kherwara Chhaoni", "Kotda", "Nimbahera", "Pratapgarh", "Sagwara", "Shivganj", ]
        }, {
            name: "Rajsamand",
            areas: ["Nagari", "Bhim", "Gogunda", "Kumbhalgarh", "Udaipurwati", "Deogarh", "Vallabhnagar", "Nathdwara", "Rajsamand", "Div", "Udaipur", ]
        }, {
            name: "SawaiMadhopur",
            areas: ["Kothun", "Panchwati", "Kailadevi", "Kishanpura", "Khandar", "Gajner", "Bonli", "Newai", "Chauth Ka Barwara", "Bamanwas", "Gangapur City", "Hindaun City", "Bayana", "Mandawa", "Nimbahera", "Neem ka Thana", "Kotputli", "Phulera", "Shahpura", "Tijara", "Losal", "Sri Madhopur", "Kekri", "Malpura", "Nadbai", "Laxmangarh", "Pilibanga", "Ramgarh", "Rawatsar", "Ratangarh", "Reengus", "Sujangarh", "Tibbi", "Todaraisingh", "Udaipurwati", ]
        }, {
            name: "Sikar",
            areas: ["Sikar", "Fatehpur", "Jhunjhunu", "Churu", "Nagaur", "Jaipur", "Ajmer", "Bhilwara", "Alwar", "Bikaner", ]
        }, {
            name: "Sirohi",
            areas: ["Amarpura", "Anta", "Asind", "Bhim", "Bidasar", "Bilara", "Bonli", "Chopasani", "Falna", "Jawaja", "Jodhpur", "Kumbalgarh", "Mandawa", "Merta", "Mount Abu", "Nawa", "Nimaj", "Pali", "Pindwara", "Pipar City", "Pushkar", "Sadri", "Sagwara", "Samdari", "Sanchore", "Sarada", "Sardarshahar", "Sheoganj", "Sojat", "Sumerpur", "Todaraisingh", ]
        }, {
            name: "SriGanganagar",
            areas: ["Sadulshahar", "Pilibanga", "Hanumangarh", "Rawatsar", "Raisinghnagar", "Sangaria", "Pilibanga", "Gharsana", "Karanpur", "Nohar", "Bhadra", "Tibbi", "Suratgarh", "Gajsinghpur", "Anupgarh", "Ghaggar Sarai", "Rania", ]
        }, {
            name: "Tonk",
            areas: ["Phulera", "Deoli", "Malpura", "Todaraisingh", "Peeplu", "Uniara", "Kishanpole Bazar", "Kotwali", "Lalpur", "Madanganj-Kishangarh", "Tijara", "Dudu", "Amber", "Jamwa Ramgarh", "Chaksu", "Malakhera", "Newai", "Niwai", "Sanganer", "Shahpura", "Bassi", "Chomu", "Kotputli", "Laxmangarh", "Phulera", "Viratnagar", ]
        }, {
            name: "Udaipur",
            areas: ["Amber", "Banar", "Chawand", "Dariyapur", "Dungarpur", "Fatehnagar", "Gogunda", "Gulabpura", "Kherwara Chittaurgarh", "Mavli", "Nathdwara", "Nimbahera", "Rajsamand", "Salumber", "Udaipur", "Vallabhnagar", ]
        }, ]
    },
    {
        state: "Sikkim",
        cities: [{
            name: "Gangtok",
            areas: ["Burtuk", "Deorali", "Development Area", "Gangtok", "Lal Bazar", "Lower Sichey", "Namnang", "Pakyong", "Ranipool", "Rongli", "Selakui", "Sichey", "Upper Sichey", "", ]
        }, {
            name: "Gyalshing",
            areas: ["Pelling", "Dentam", "Bermiok", "Yuksom", "Tashiding", "Soreng", "Legship", "Rinchenpong", "Phamtang", "Hee-Gyathang", "Dzongri", "Tsokha", "Kupup", "Gnatong", "Rhenok", "Dentam Bazar", "Rinchenpong Market", "", ]
        }, {
            name: "Jorethang",
            areas: ["Namchi", "Jorethang", "Rangpo", "Soreng", "Bermiok", "Jorthang", "Arithang", "Rorathang", "Dentam", "Sumbuk", "Yangang", "Hee-Gyathang", "Legship", "Gyalshing", "Mangan", "Chungthang", "Dzongri", "Kupup", "Yuksom", "Tashiding", "Pakyong", "Namthang", "Soreng", "Bermiok", "Jorthang", "Arithang", "Rorathang", "Dentam", "Sumbuk", "Yangang", "Hee-Gyathang", "Legship", "Gyalshing", "Mangan", "Chungthang", "Dzongri", "Kupup", "Yuksom", "Tashiding", "Pakyong", "Namthang", ]
        }, {
            name: "Melli",
            areas: ["Melli", "Rangpo", "Jorethang", "Melli Bazar", "Bermiok", "Dikchu", "Dzongu", "Gangtok", "Gyalsing", "Jorthang", "Mangan", "Namchi", "Rangli Rangpo", "Ravangla", "Siliguri", "Singtam", "Soreng", "Tadong", ]
        }, {
            name: "Namchi",
            areas: ["Namchi", "Rangpo", "Jorethang", "Melli", "Bermiok", "Jorthang", "Charthang", "Dikchu", "Rorathang", "Soreng", "Sombaria", "Sumbuk", "Tinkitam", "Yangang", "Yumthang", ]
        }, {
            name: "Pakyong",
            areas: ["Pakyong", "Rhenock", "Soreng", "Jorethang", "Melli", "Namchi", "Bermiok", "Rorathang", "Mangan", "Chungthang", "Dzongu", "Dentam", "Sumbuk", "Legship", "Gyalsing", "Pakyong Airport", ]
        }, {
            name: "Rangpo",
            areas: ["Rangpo", "Bermiok", "Tashiding", "Sumbuk", "Rorathang", "Melli", "Jorethang", "Dikchu", "Resum", "Rhenok", "Namchi", "Yangang", "Dentam", "Soreng", "Sumbuk", "Rinchenpong", "Gyalsing", "Rhenok", "Soreng", "Bermiok", "Rorathang", "Tashiding", "Dentam", "Rinchenpong", "Yangang", "Gyalsing", "Namchi", "Melli", "Jorethang", "Resum", ]
        }, {
            name: "Ravangla",
            areas: ["Tashiding", "Ralong", "Dentam", "Sumbuk", "Barfung", "Bermiok", "Rinchenpong", "Kaluk", "Yuksom", "Tashiding", "Ralong", "Dentam", "Sumbuk", "Barfung", "Bermiok", "Rinchenpong", "Kaluk", "Yuksom", ]
        }, {
            name: "Siliguri",
            areas: ["Bagdogra", "Matigara", "Naxalbari", "Phansidewa", "Pradhan Nagar", "Siliguri", ]
        }, {
            name: "Singtam",
            areas: ["Namchi", "Jorethang", "Rongli", "Ravangla", "Namthang", "Bermiok", "Soreng", "Melli", "Chungthang", "Dzongu", "Dentam", "Sumbuk", "Legship", "Gyalshing", "Yuksom", "Tashiding", "Barfung", "Rinchenpong", "Soreng", "Pakyong", "Gangtok", "Arithang", "Ranka", "Rangpo", "Siliguri", "Kalimpong", ]
        }, {
            name: "Soreng",
            areas: ["Ranka", "Rinchenpong", "Dentam", "Soreng", "Bermiok", "Yuksom", "Gyalshing", "Tashiding", "Sumbuk", "Hee-Gyathang", "Dzongri", "Kupup", "Legship", "Namchi", "Yangang", "Rhenock", "Pakyong", "Arithang", "Gangtok", "Jorethang", "Melli", "Singtam", "Mangan", "Namthang", "Resum", "Rorathang", "Sumbuk", "Tashi Gang", "Temi", "Tendong", "Upper Dzongu", "Yumthang", ]
        }, {
            name: "Tadong",
            areas: ["Tadong", "Gangtok", "Rangpo", "Jorethang", "Namchi", "Singtam", "Mangan", "Bermiok", "Chungthang", "Dzongu", ]
        }, ]
    },
    {
        state: "Tamil Nadu",
        cities: [{
            name: "Chennai",
            areas: ["Adambakkam", "Alandur", "Ambattur", "Aminjikarai", "Anna Nagar", "Ashok Nagar", "Avadi", "Ayanavaram", "Besant Nagar", "Chromepet", "Egmore", "Ekkattuthangal", "Guindy", "Injambakkam", "Jafferkhanpet", "K.K. Nagar", "Kadaperi", "Kandanchavadi", "Keelkattalai", "Kilpauk", "Kodambakkam", "Kolathur", "Kottivakkam", "Kotturpuram", "Kovalam", "Koyambedu", "Madhavaram", "Madipakkam", "Maduravoyal", "Manali", "Manapakkam", "Mandaveli", "Mathur", "Medavakkam", "Meenambakkam", "Minjur", "Mugalivakkam", "Mylapore", "Nandanam", "Nanganallur", "Nungambakkam", "Pallavaram", "Palavakkam", "Pammal", "Park Town", "Parrys", "Pattabiram", "Pattaravakkam", "Perambur", "Peravallur", "Perumbakkam", "Pesalai", "Ponneri", "Poondi", "Purasawalkam", "Puzhal", "Puzhuthivakkam", "Royapettah", "Royapuram", "Saidapet", "Santhome", "Selaiyur", "Sholinganallur", "Sith", "Somangalam", "St. Thomas Mount", "Tambaram", "Teynampet", "Tharamani", "Thirumangalam", "Thirumullaivoyal", "Thiruneermalai", "Thiruninravur", "Thiruvallur", "Thiruvanmiyur", "Thiruverkadu", "Thiruvottiyur", "Thuraipakkam", "Tirusulam", "Ullagaram", "Urapakkam", "Vandalur", "Velacheri", "Villivakkam", "Virugambakkam", "Vyasarpadi", "Washermanpet", "West Mambalam", ]
        }, {
            name: "Coimbatore",
            areas: ["Avinashi", "Chettipalayam", "Dharapuram", "Dindigul", "Erode", "Gobichettipalayam", "Karur", "Kulithalai", "Madurai", "Namakkal", "Palani", "Pollachi", "Sathyamangalam", "Sulur", "Tiruppur", "Udumalpet", "Valparai", ]
        }, {
            name: "Madurai",
            areas: ["Aruppukottai", "Batlagundu", "Dindigul", "Kodaikanal", "Madurai", "Melur", "Natham", "Palani", "Paramakudi", "Sivakasi", "Usilampatti", "Virudhunagar", ]
        }, {
            name: "Salem",
            areas: ["Alandur", "Alwarpet", "Ambattur", "Aminjikarai", "Anna Nagar", "Ashok Nagar", "Avadi", "Ayanavaram", "Besant Nagar", "Chepauk", "Chennai", "Choolai", "Chromepet", "Egmore", "Ekkattuthangal", "Gerugambakkam", "Gopalapuram", "Guindy", "Injambakkam", "Iyyappanthangal", "Jafferkhanpet", "K.K. Nagar", "Kodambakkam", "Kolathur", "Kotturpuram", "Kottivakkam", "Kovalam", "Koyambedu", "Madhavaram", "Madipakkam", "Maduravoyal", "Manali", "Manapakkam", "Mandaveli", "Meenambakkam", "Minjur", "Mugalivakkam", "Mylapore", "Nandanam", "Nanganallur", "Nungambakkam", "Pallavaram", "Pallikaranai", "Pammal", "Park Town", "Parrys", "Pattabiram", "Pattaravakkam", "Perambur", "Perungalathur", "Perungudi", "Ponneri", "Pozhichalur", "Purasawalkam", "Puzhal", "Royapettah", "Royapuram", "Saidapet", "Salem", "Selaiyur", "Sholinganallur", "Sith", "Somangalam", "St. Thomas Mount", "T. Nagar", "Tambaram", "Teynampet", "Tharamani", "Thirumangalam", "Thirumullaivoyal", "Thiruneermalai", "Thiruninravur", "Thiruvanmiyur", "Thiruverkadu", "Thiruvotriyur", "Thuraipakkam", "Tirusulam", "Vadapalani", "Valasaravakkam", "Vandalur", "Velachery", "Villivakkam", "Virugambakkam", "Vyasarpadi", "Washermanpet", "West Mambalam", ]
        }, {
            name: "Tiruchirappalli",
            areas: ["Tiruchirappalli", "Thiruverumbur", "Srirangam", "Manapparai", "Musiri", "Lalgudi", "Kulithalai", "Thuraiyur", "Thottiyam", "Ariyalur", ]
        }, {
            name: "Tiruppur",
            areas: ["Tiruppur", "Dharapuram", "Avinashi", "Palladam", "Udumalpet", "Kangayam", "Madathukulam", "Perundurai", "Bhavani", "Mulanur", "Tiruppur Rural", "Anthiyur", ]
        }, {
            name: "Erode",
            areas: ["Erode", "Perundurai", "Bhavani", "Gobichettipalayam", "Anthiyur", "Chennimalai", "Dharapuram", "Kangayam", "Tiruppur", "Udumalpet", ]
        }, {
            name: "Tirunelveli",
            areas: ["Tirunelveli", "Alangulam", "Ambasamudram", "Kadayanallur", "Palayankottai", "Panagudi", "Shenkottai", "Sankarankovil", "Tenkasi", "Thoothukudi", "Udankudi", ]
        }, {
            name: "Vellore",
            areas: ["Vellore", "Katpadi", "Arcot", "Ranipet", "Walajapet", "Arakkonam", "Tirupathur", "Gudiyatham", "Vaniyambadi", "Ambur", ]
        }, {
            name: "Dindigul",
            areas: ["Athur", "Batlagundu", "Dindigul", "Kodaikanal", "Oddanchatram", "Palani", "Natham", "Vedasandur", "Nilakottai", "Andipatti", ]
        }, {
            name: "Thanjavur",
            areas: ["Thanjavur", "Thiruvaiyaru", "Thirunageswaram", "Thiruppanandal", "Papanasam", "Nanjikottai", "Thiruvidaimarudur", "Thiruvaiyaru", "Thiruppattur", "Thiruthuraipoondi", "Thiruvallur", "Thiruvarur", "Thiruthuraipoondi", "Thoothukudi", "Tirunelveli", "Thoothukudi", "Tiruchendur", "Tirunelveli", "Palayankottai", "Ottapidaram", "Kovilpatti", "Colachel", "Kanyakumari", "Nagercoil", "Thovalai", "Agastheeswaram", "Kalkulam", "Vilavancode", "Killiyur", "Munchirai", "Thiruparankundram", "Madurai", "Melur", "Usilampatti", "Thirumangalam", "Andipatti", "Periyakulam", "Dindigul", "Vedasandur", "Natham", "Palani", "Oddanchatram", "Vedasandur", "Dindigul", "Natham", "Palani", "Oddanchatram", "Batlagundu", "Usilampatti", "Andipatti", "Thirumangalam", "Melur", "Madurai", "Thiruparankundram", "Munchirai", "Killiyur", "Vilavancode", "Kalkulam", "Thovalai", "Nagercoil", "Kanyakumari", "Colachel", "Kovilpatti", "Ottapidaram", "Palayankottai", "Tirunelveli", "Thoothukudi", "Tiruchendur", "Tirunelveli", "Thoothukudi", ]
        }, {
            name: "Thoothukudi",
            areas: ["Karivalamvandanallur", "Thiruchendur", "Udangudi", "Kayalpattinam", "Ottapidaram", "Kovilpatti", "Sathankulam", "Vilathikulam", "Palayankottai", "Ettayapuram", "Tirunelveli", "Alangulam", "Ambasamudram", "Surandai", "Panagudi", "Radhapuram", "Vadakkuvalliyur", "Thoothukudi", ]
        }, {
            name: "Namakkal",
            areas: ["Namakkal", "Tiruchengode", "Rasipuram", "Paramathi-Velur", "Kolli Hills", "Sendamangalam", "Komarapalayam", "Mohanur", "Namagiripettai", "Mallasamudram", "Erumapalayam", "Tiruchengode", "Omalur", "Salem", "Tharamangalam", "Attur", "Edappadi", "Mettur", "Sankagiri", "Gangavalli", "Thuraiyur", "Tiruchendur", "Devakottai", "Karaikudi", "Pudukkottai", "Thanjavur", "Thiruchirapalli", "Tirunelveli", "Thoothukudi", "Kanyakumari", ]
        }, {
            name: "Karur",
            areas: ["Arimalam", "Athanur", "Avinashi", "Ayyampalayam", "Dharapuram", "Kadavur", "Karur", "Kulithalai", "Pallapalayam", "Tharamangalam", "Usilampatti", "Vedasandur", "Vellakoil", ]
        }, {
            name: "Krishnagiri",
            areas: ["Krishnagiri", "Hosur", "Thally", "Uthangarai", "Denkanikottai", "Veppanahalli", "Palacode", "Mathigiri", "Pochampalli", "Bargur", ]
        }, {
            name: "Ariyalur",
            areas: ["Andimadam", "Ariyalur", "Jayankondam", "Sendurai", "Udayarpalayam", ]
        }, {
            name: "Perambalur",
            areas: ["Perambalur", "Arumbavur", "Veppanthattai", "Sendurai", "Thuraiyur", "Manapparai", "Tiruchirappalli", "Musiri", "Srirangam", "Thottiyam", "Ariyalur", "Udayarpalayam", "Ponnamaravathi", "Thirumanur", "Alathur", "Kulithalai", "Karur", "Vellakovil", "Dindigul", "Natham", "Oddanchatram", "Palani", "Vedasandur", "Vadipatti", "Andipatti", "Usilampatti", "Batlagundu", "Mulanur", "Vedasandur", "Dharapuram", "Gobichettipalayam", "Tiruppur", "Avinashi", "Palladam", "Udumalpet", "Madukkarai", "Coimbatore", "Mettupalayam", "Pollachi", "Valparai", "Attappadi", ]
        }, {
            name: "Pudukkottai",
            areas: ["Pudukkottai", "Alangudi", "Aranthangi", "Avudaiyarkovil", "Gandarvakottai", "Ilangudi", "Kadambur", "Karaikudi", "Manapparai", "Natham", "Ponnamaravathi", "Thirumayam", "Tiruppattur", "Uttangarai", "Vadakadu", ]
        }, {
            name: "Dindigul",
            areas: ["Athoor", "Batlagundu", "Dindigul", "Kodaikanal", "Oddanchatram", "Palani", "Vedasandur", ]
        }, {
            name: "Ramanathapuram",
            areas: ["Ramanathapuram", "Mudukulathur", "Tiruppuvanam", "Paramakudi", "Rajapalayam", "Kamuthi", "Rameswaram", "Devakottai", "Keelakarai", "Sayalgudi", "Thiruppudaimaruthur", "Mudukulathur", "Uthiramerur", "Manamadurai", "Ilayangudi", "Kadambur", "Aruppukkottai", "Tiruppattur", "Sattur", "Natham", "Watrap", "Virudhunagar", "Tiruchuli", "Sivakasi", "Srivilliputhur", "Rajapalaiam", "Tirunelveli", "Palayamkottai", "Thoothukudi", "Ottapidaram", "Kovilpatti", "Colachel", "Tiruchendur", "Tirunelveli", "Udankudi", ]
        }, {
            name: "Sivaganga",
            areas: ["Sivaganga", "Karaikkudi", "Devakottai", "Pudukkottai", "Tiruppattur", "Tiruppuvanam", "Thirupathur", "Alangudi", "Manamadurai", "Ilayangudi", "Mudukulathur", "Tirupparangunram", "Thiruvadanai", "Puduvayal", "Thirupuvanam", "Thiruppathur", "Thiruvadanai", "Puduvayal", "Thirupuvanam", ]
        }, {
            name: "Virudhunagar",
            areas: ["Virudhunagar", "Aruppukottai", "Sivakasi", "Rajapalayam", "Sattur", "Kovilpatti", "Tiruchuli", "Watrap", "Srivilliputhur", "Sundarapandiapuram", "Mudukulathur", "Tiruppuvanam", "Thiruthangal", "Thiruvenkadu", "Pudupatti", "Thiruchalur", "Thiruppathiripuliyur", "Usilampatti", "Kadaiyanallur", "Elayirampannai", "Tiruppattur", "Thirumangalam", "Andipatti", "Thiruparankundram", "Thirumayam", "Thiruppuvanam", "Thirukkattupalli", "Thiruvaiyaru", "Tirupathur", "Thiruvidaimarudur", "Thiruchitrambalam", "Thiruppanandal", "Thiruvannamalai", "Thirukoyilur", "Thirukalukundram", "Thirukazhukundram", "Thiruporur", "Thirumullaivoyal", "Thiruneermalai", "Thirumazhisai", "Thirukalukundram", "Thirukazhukundram", "Thiruporur", "Thirumullaivoyal", "Thiruneermalai", "Thirumazhisai", ]
        }, {
            name: "Theni",
            areas: ["Allipatti", "Andipatti", "Arakkankottai", "Belukurichi", "Bhavani", "Bodinayakanur", "Chengamalai", "Cumbum", "Devadanapatti", "Dindigul", "Ennamangalam", "Gudalur", "Gundalpet", "Kombai", "Lalgudi", "Madurai", "Melur", "Mettupalayam", "Omalur", "Palani", "Pallapatti", "Pudukkottai", "Rajapalaiyam", "Ramanathapuram", "Rameshwaram", "Salem", "Sivaganga", "Surulipatti", "Theni", "Thirumangalam", "Usilampatti", "Uthamapalayam", "Vadipatti", "Valparai", "Vedasandur", "Veerapandi", ]
        }, {
            name: "Cumbum",
            areas: ["Cumbum", "Andipatti", "Periyakulam", "Batlagundu", "Usilampatti", "Melur", "Dindigul", "Oddanchatram", "Natham", "Palani", "Vedasandur", "Vedapatti", "Chinnalapatti", "Nathakkadaiyanur", "Pudupatti", "Alanganallur", "Madurai", "Tirupparankundram", "Tirupuvanam", "Sholavandan", "Tirumangalam", "Usilampatti", "Vadipatti", "Vadugapatti", ]
        }, {
            name: "Kanyakumari",
            areas: ["Nagercoil", "Colachel", "Padmanabhapuram", "Kuzhithurai", "Marthandam", "Kaliyakkavilai", "Suchindram", "Thiruvattar", "Thirparappu", "Kulasekaram", "Munchirai", "Thiruvonaikaval", "Thiruparankundram", "Thirunanthikarai", "Nochikulam", "Thirupparangkunram", "Puthalam", "Thirukkulam", "Thiruvithamcode", "Kurunthancode", "Thiruppanangadi", "Thiruvithamcode", "Manavalakurichi", "Tholayavattam", "Thiruvalluvar", "Thirupparaithurai", "Thiruppanam", "Thirumalpuram", "Thirunattalam", "Thiruppalatturai", "Thiruppuvanam", "Thiruthalaikunda", "Thirunagar", "Thiruppalai", "Thirumalai", "Thirupparangunram", "Thiruppudaimaruthur", "Thirukkurungudi", "Thirupathisaram", "Thirupporur", "Thirukazhukundram", "Thiruppalani", "Thirupparamkunram", "Thiruvallikeni", "Thiruvallur", ]
        }, {
            name: "Nagercoil",
            areas: ["Nagercoil", "Maruthady", "Thirunagar", "Dharapuram", "Thiruvattar", "Thiruvenkatam", "Thiruppanandal", "Thirupuvanam", "Thiruvazhimarudur", "Thiruvithamcode", "Thiruvilangadu", "Thiruvallur", "Thirunindravur", "Thiruppathur", "Thiruvallakulam", "Thirumullaivoyal", "Thirunageswaram", "Thiruppalai", "Thiruvankulam", "Thirumangalam", "Thirukkalukkundram", "Thirumullaivayil", "Thiruneermalai", "Thirupporur", "Thiruppalanam", "Thirumudivakkam", "Thirukkattupalli", "Thirukazhukundram", "Thirumalairayanpattinam", "Thirukalukundram", "Thirupparaithurai", "Thirumudivakkam", "Thirukkovilur", "Thiruppoondi", "Thiruthuraipoondi", "Thiruvallur", "Thiruvallur", "Thiruppanandal", "Thiruvattar", "Thiruppuvanam", "Thiruvazhimarudur", "Thiruvithamcode", "Thiruvilangadu", "Thiruvallur", "Thirunindravur", "Thiruppathur", "Thiruvallakulam", "Thirumullaivoyal", "Thirunageswaram", "Thiruppalai", "Thiruvankulam", "Thirumangalam", "Thirukkalukkundram", "Thirukazhukundram", "Thirukkovilur", "Thiruppoondi", "Thiruthuraipoondi", ]
        }, {
            name: "Kodaikanal",
            areas: ["Kodaikanal", "Tamil Nadu", "India", ]
        }, {
            name: "Palani",
            areas: ["Palani", "Kodaikanal", "Dindigul", "Madurai", "Theni", "Ramanathapuram", "Virudhunagar", "Sivaganga", "Tirunelveli", "Thoothukudi", "Kanniyakumari", ]
        }, {
            name: "Ooty",
            areas: ["Athikadai", "Avinashi", "Bodinayakkanur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Gobichettipalayam", "Hosur", "Jayankondam", "Kadayampatti", "Kallakkurichi", "Kangayam", "Karaikudi", "Karur", "Krishnagiri", "Kulithalai", "Madurai", "Manachanallur", "Namakkal", "Natham", "Neyveli", "Ooty", "Orathanadu", "Palani", "Pattukkottai", "Pollachi", "Pudukkottai", "Rajapalayam", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Thiruvarur", "Tiruchendur", "Tiruchengode", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruttani", "Tuticorin", "Udagamandalam", "Vaniyambadi", "Vriddhachalam", "Coonoor", "Gudalur", "Kotagiri", "Pandalur", "Wellington", ]
        }, {
            name: "Coonoor",
            areas: ["Coonoor", "Wellington", "Aravankadu", "Ketti", "Kandal", "Dodabetta", "Kotagiri", "Burliar", "Elkhill", ]
        }, {
            name: "Kotagiri",
            areas: ["Nilgiris", "Wellington", "Kotagiri", "Coonoor", "Lovedale", "Ooty", "Dodabetta", "Glenmorgan", "Kotagiri Road", "Elk Hill", ]
        }, {
            name: "Gudalur",
            areas: ["Adalur", "Alagapuri", "Alagapuri", "Alambadi", "Alampalayam", "Alampatti", "Alampoondi", "Alampudi", "Alampur", "Alampur", "Alampuzha", "Alangayam", "Alanganallur", "Alangapuram", "Alangudi", "Alangulam", "Alangudi", "Alangulam", "Alangulam", "Alankarai", "Alankuppam", "Alapakkam"]
        }, {
            name: "Ketti",
            areas: ["Ketti", "Tamil Nadu", "India", ]
        }, {
            name: "Wellington",
            areas: ["Wellington", "Tamil Nadu", "India", ]
        }, {
            name: "Lovedale",
            areas: ["Lovedale", "Ooty", "Coonoor", "Kotagiri", "Wellington", "Dodabetta", ]
        }, {
            name: "Avalanche",
            areas: ["Avalanche", "Tamil Nadu", "India", ]
        }, {
            name: "Kothagiri",
            areas: ["Ooty", "Gudalur", "Kotagiri", "Coonoor", "Wellington", "Lovedale", "Ketti", ]
        }, {
            name: "Emerald",
            areas: ["Emerald", "Tamil Nadu", "India", ]
        }, {
            name: "Pykara",
            areas: ["Pykara", "Tamil Nadu", ]
        }, {
            name: "Glenmorgan",
            areas: ["Alandi", "Alandi Devachi", "Ambalur", "Anaicut", "Angambakkam", "Anuppampattu", "Arcot", "Arni", "Aroor", "Attur", "Avadi", "Ayanavaram", "Azhagiapandiapuram", "Balacola", "Balakrishnampatti", "Balasamudram", "Baldwin", "Banavaram", "Bannari", "Bannur", "Batlagundu", "Bhavani", "Bhavani Shankarapuram", "Bhavani Singhapuram", "Bhavani Udaiyarpalayam", "Bhavaniagaram", "Bhavanisagar", "Bhavaniyambalpuram", "Bhavaniyur", "Bhavanthi", "Bhuvanagiri", "Bidadi", "Bikkampatti", "Bilalpur", "Bommidi", "Bommur", "Bommuru", "Budalur", "Budanur", "Chengalpattu", "Chengam", "Chengam Road", "Chennai", "Chennai International Airport", "Chennai Port", "Chennai Super Kings", "Chengam Tk", "Chenglepet", "Chengur", "Chengur Chetty Street", "Chengur Tk", "Chengurchetti", "Chengurpattu", "Chengurpet", "Chengurpet Tk", "Chennimalai", "Chennai", "Chennai Port", "Chennai Super Kings", "Chennimalai East", "Chennimalai North", "Chennimalai South", "Chennimalai West", "Chennimalai", "Chennimalai Bazar", "Chennimalai East", "Chennimalai North", "Chennimalai South", "Chennimalai West", "Chennimalaipudur East", "Chennimalaipudur North", "Chennimalaipudur", "Chennimalaipudur South", "Chennimalaipudur West", "Chennimalaip", ]
        }, {
            name: "Berijam",
            areas: ["Berijam", "Tamil Nadu", ]
        }, ]
    },
    {
        state: "Telangana",
        cities: [{
            name: "Hyderabad",
            areas: ["Hyderabad", "Secunderabad", "Kukatpally", "Jubilee Hills", "Banjara Hills", "Ameerpet", "Hitech City", "Madhapur", "Gachibowli", "Financial District", "Nanakramguda", "Manikonda", "Kondapur", "Lingampally", "Mehdipatnam", "Falaknuma", "Charminar", "Nampally", "Abids", "Tank Bund", "Begumpet", "Khairatabad", "Malakpet", "New Bowenpally", "Old Bowenpally", "Dilsukhnagar", "Chikkadpally", "Musheerabad", "RTC Cross Roads", "Ameenpur", "BHEL", "ECIL", "Habsiguda", "Uppal", "LB Nagar", "Vanasthalipuram", "Alwal", "Bowenpally", "Erragadda", "Kompally", "Mooring", "Nagole", "Nallakunta", "Ramanthapur", "Safilguda", "Santosh Nagar", "Saroornagar", "Secunderabad Cantonment", "Tarnaka", "West Marredpally", "Yousufguda", "Attapur", "Azamabad", "Bagh Amberpet", "Bahadurpura", "Balanagar", "Bandlaguda", "Begum Bazaar", "Bhongir", "Bolarum", "Chandrayangutta", "Chatta Bazar", "Cherlapally", "Chilkalguda", "Dammaiguda", "Dattatreya Nagar", "Domalguda", "Doodbowli", "Dundigal", "ECIL X Roads", "Edi Bazar", "Ferozguda", "Gowliguda Chaman", "Gowlipura", "Hafeezpet", "Hafiz Baba Nagar", "Haliya", "Hayathnagar", "Himayatnagar", "Hyderguda", "Inderbagh", "Jahanuma", "Jiyaguda", "Jubilee Hills Check Post", "Kachiguda", "Kachiguda Railway Station", "Kaiser Bazar", "Kalasiguda", "Kalyan Nagar", "Kamalanagar", "Kanchanbagh", "Karkhana", "Karwan", "Khaja Guda", "King Koti", "Kothapet", "Kothi", "Lal Bazar", "Lal Darwaza", "Lallaguda", "Lalitha Nagar", "Lingojiguda", "Makhdoom Khaja", "Malkajgiri", "Mallepally", "Mangaon", "Manneguda", "Meerpet", "Mehdipatnam Market", "Mettuguda", "Moosarambagh", "Nadeem Colony", "Nallakunta", "Nampally Railway Station", "Neredmet", "Nizampet", "Nizamabad", "Nizam Shahi", "Old Malakpet", "Padma Colony", "Pahadishareef", "Paradise", "Parigi", "Patel Market", "Patigadda", "Pattargatti", "Peerzadiguda", "Qutbullapur", "Rajendra Nagar", "Ramkote", "Ramnaspura", "Ranigunj", "Rasoolpura", "Red Hills", "Rein Bazar", "Riyasat Nagar", "Saidabad", "Saifabad", "Santosh Nagar Colony", "Santosh Nagar Industrial Area", "Saroornagar", "Saroor Nagar", "Seelampur", "Shaikpet", "Shamsher Gunj", "Shanti Nagar", "Shivaji Nagar", "Shivam Road", "Siddiamber Bazar", "Sindhi Colony", "Somajiguda", "Sultan Bazar", "Tappachabutra", "Tilak Nagar", "Tin Bazar", "Turkayamjal", "Uppal Depot", "Uppal Ring Road", "Victoria Memorial", "Vidya Nagar", "Vikrampuri", "Vivekananda Nagar Colony", "West Marredpally", "Yapral", "Zaheerabad", ]
        }, {
            name: "Adilabad",
            areas: ["Adilabad", "Asifabad", "Bellampalle", "Bhainsa", "Boath", "Bodhan", "Chandur", "Chennur", "Jagtial", "Jammikunta", "Karimnagar", "Khammam", "Kodimial", "Korutla", "Kumram Bheem", "Mahabubabad", "Mahadevpur", "Mancherial", "Mandamarri", "Mandamari", "Manuguru", "Medak", "Mudhole", "Nirmal", "Nizamabad", "Ramagundam", "Siricilla", "Sircilla", "Vemulawada", "Wazeed", ]
        }, {
            name: "Karimnagar",
            areas: ["Kothapalli", "Thimmapur", "Peddapalli", "Manthani", "Ramagundam", "Jammikunta", "Karimnagar", "Choppadandi", "Dharmapuri", "Peddapalle", "Vemulawada", "Huzurabad", "Vemulaw", ]
        }, {
            name: "Khammam",
            areas: ["Kothagudem", "Palvancha", "Sathupalli", "Aswaraopeta", "Kothagudem", "Kusumanchi", "Pinapaka", "Wyra", ]
        }, {
            name: "Mahbubnagar",
            areas: ["Achampet", "Amrabad", "Balanagar", "Bhoothpur", "Farooqnagar", "Gadwal", "Jadcherla", "Kalwakurthy", "Kosgi", "Mahbubnagar", "Makthal", "Nagarkurnool", "Narayanpet", "Pebbair", "Raichur", "Sadasivpet", "Shadnagar", "Wanaparthy", "Armur", "Bellampalle", "Bhupalpalle", "Boath", "Chandur", "Dharmapuri", "Domakonda", "Gajwel", "Huzurabad", "Jagtial", "Jammikunta", "Karimnagar", "Kodimial", "Koratla", "Kotagiri", "Mahadevpur", "Mallapur", "Manakondur", "Manthani", "Medipalle", "Mulug", "Odela", "Peddapalle", "Ramagundam", "Ramakrishna Puram", "Rechapalle", "Sircilla", "Sultanabad", "Thimmapur", "Yenugonda", "Bhadrachalam", "Bheemini", "Bhupalpalle", "Chandrugonda", "Danthalapalle", "Dharmapuri", "Ghanpur", "Ghanpur", "Gudur", "Gummadidala", "Hayathnagar", "Husnabad", "Jagtial", "Jammikunta", "Karimnagar", "Korutla", "Maddur", "Mahadevpur", "Manakondur", "Manthani", "Medipalle", "Metpalle", "Peddapalle", "Ramadugu", "Ramagundam", "Ramakrishna Puram", "Rechapalle", "Siddipet", "Sircilla", "Sultanabad", "Thimmapur", "Yenugonda"]
        }, {
            name: "Medak",
            areas: ["Ramayampet", "Toopran", "Medak", "Siddipet", "Singapur", "Gajwel", "Jharasangam", "Manoor", "Muthangi", "Regode", "Mulug", "Doma", "Wargal", "Hathnoora", "Yeldurthy", "Kodangal", "Zahirabad", "Ramgundam", "Gajularamaram", "Vatpally", "Dharur", "Bheemadevarpalle", "Gajwel", "Alladurg", "Mirdoddi", "Dubbak", "Ramachandrapuram", "Bibinagar", "Dokur", "Shivampet", "Kondapak", "Wala", "Pedda Amberpet", "Kondapak", "Domakonda", "Pudur", ]
        }, {
            name: "Nalgonda",
            areas: ["Nalgonda", "Chityal", "Bhuvanagiri", "Chandur", "Gudur", "Munugode", "Miryalaguda", "Suryapet", "Thungathurthy", "Valigonda", "Bibinagar", "Bommala Ramaram", "Chandam Pet", "Devarakonda", "Haliya", "Kattangur", "Kodad", "Mattampalle", "Mothkur", "Nakrekal", "Nidamanur", "Panagal", "Pochampalle", "Ramannapeta", "Ramgundam", "Saligoura", "Sattenapalle", "Thipparthi", "Thirumalagiri", "Thipparthi", "Thirumalagiri", ]
        }, {
            name: "Nizamabad",
            areas: ["Armoor", "Balkonda", "Banswada", "Bheemgal", "Bodhan", "Dichpalle", "Domakonda", "Jakranpalle", "Jukkal", "Kammarpalle", "Kotagiri", "Maddur", "Makloor", "Nandipet", "Navipet", "Nizamsagar", "Odela", "Rajanna Sircilla", "Ramagundam", "Varni", "Velpur", "Yellareddy", ]
        }, {
            name: "Rangareddy",
            areas: ["Kukatpally", "Jubilee Hills", "Banjara Hills", "Secunderabad", "Cyberabad", "Hyderabad", "Medchal", "Shamshabad", ]
        }, {
            name: "Warangal",
            areas: ["Hanamkonda", "Kazipet", "Warangal Rural", "Warangal Urban", "Jangaon", "Mahabubabad", "Mulug", "Parkal", "Janagaon", "Mahadevpur", ]
        }, ]
    },
    {
        state: "Tripura",
        cities: [{
            name: "Agartala",
            areas: ["Agartala", "West Tripura", "Tripura West", "Tripura", ]
        }, {
            name: "Belonia",
            areas: ["Belonia town", "Kamalpur town", "Teliamura town", "Khowai town", "Dhalai Sadar subdivision", "Kailashahar town", "unokoti district", "Panisagar town", "Kanchanpur town", "Santirbazar town", ]
        }, {
            name: "Bishalgarh",
            areas: ["Bishalgarh R.F.", "Birlabari", "Boalkhali", "Champaknagar", "Charilam", "Dhalai Sadar", "Gandacherra", "Jagannathpur", "Jolaibari", "Kadamtala", "Kailashahar", "Kamalpur", "Kanchar Manikpur", "Karbook", "Kathalia", "Khakchang", "Khowai", "Kulai", "Kumarghat", "Laxmichara", "Longthorai Valley", "Mamit", "Manu", "Mohanpur", "Nalchar", "Panisagar", "Panisala", "Parmaichara", "Pabiachara", "Radhakishorepur", "Raishyabari", "Rajnagar", "Rupaichari", "Sabroom", "Santirbazar", "Teliamura", "Udaipur", ]
        }, {
            name: "Dharmanagar",
            areas: ["Dharmanagar", "Panisagar", "Kanchanpur", "Kailasahar", "Jolaibari", "Teliamura", "Gandacherra", "Panisagar", "Dhalai Sadar", "Khowai", "Ambassa", "Kamalpur", "Manu", "Longtharai Valley", "Jampuijala", "Ompi", "Gandacherra", "Mohanpur", "Belonia", "Sabroom", ]
        }, {
            name: "Kailashahar",
            areas: ["Kailashahar", "Teliamura", "Dharmanagar", "Kanchanpur", "Panisagar", "Jolaibari", "Belonia", "Sabroom", "Udaipur", "Matabari", ]
        }, {
            name: "Kamalpur",
            areas: ["Kamalpur", "Amtali", "Bampurbari", "Barjala", "Belonia", "Birganj", "Dhalai", "Dharmanagar", "Fatikchhari", "Gandacherra", "Hailakandi", "Jogendranagar", "Kailasahar", "Karbook", "Katlicherra", "Khagrachhari", "Khowai", "Kumarghat", "Longtharai Valley", "Manu", "Mohanpur", "Murabari", "Nalchar", "Panisagar", "Parshuram", "Radhapur", "Rajnagar", "Ramnagar", "Ranirbazar", "Sabroom", "Santirbazar", "Srinagar", "Teliamura", "Unakoti", "Udaipur", ]
        }, {
            name: "Kanchanpur",
            areas: ["Kanchanpur", "Bishalgarh", "Teliamura", "Jogendranagar", "Dukli", "Gandacherra", "Panisagar", "Matarbari", "Sabroom", "Belonia", "Amarpur", "Manu", "Ompi", "Santirbazar", "Kailashahar", "Kumarghat", "Unakoti", "Boxanagar", "Khowai", "Asharambari", "Gakulnagar", "Radhapur", "Kamalpur", "Longtharai Valley", "Amtali", "Dhalai", "Panisagar", "Jatanbari", "Dharmanagar", "Gournagar", "Mohanpur", "Rajnagar", "Barjala", "Khowaipunji", "Sidhai", "Gandacherra", "Panisagar", "Matarbari", "Sabroom", "Belonia", "Amarpur", "Manu", "Ompi", "Santirbazar", "Kailashahar", "Kumarghat", "Unakoti", "Boxanagar", "Khowai", "Asharambari", "Gakulnagar", "Radhapur", "Kamalpur", "Longtharai Valley", "Amtali", "Dhalai", "Panisagar", "Jatanbari", "Dharmanagar", "Gournagar", "Mohanpur", "Rajnagar", "Barjala", "Khowaipunji", "Sidhai", ]
        }, {
            name: "Khowai",
            areas: ["Khowai", "Teliamura", "Amarpur", "Mohanpur", "Jogendranagar", "Radhakishorepur", "Atchera", "Khayerpur", "Tulasikhar", "Matabari", ]
        }, {
            name: "Kumarghat",
            areas: ["Durgabari", "Radhakishorepur", "Panisagar", "Belonia", "Sabroom", "Udaipur", "Kailashahar", "Unakoti", "Bishalgarh", "Kamalpur", "Khowai", "Agartala", "Badharghat", "Jogendranagar", "Amtali", ]
        }, {
            name: "Sabroom",
            areas: ["Adarsh Nagar", "Amtali", "Badharghat", "Bazar Char", "Bishalgarh", "Champaknagar", "Chandrapur", "Dharmanagar", "Ganganagar", "Gobindaganj", "Jogendranagar", "Kailasahar", "Kamalpur", "Kanchanpur", "Karamchandnagar", "Khadiya", "Krishnapur", "Kunjaban", "Majlishpur", "Mohanpur", "Narsingarh", "Panisagar", "Radhakishorepur", "Santirbazar", "Teliamura", "Udaipur", ]
        }, {
            name: "Udaipur",
            areas: ["Banamalipara", "Belonia", "Dharmanagar", "Kailashahar", "Kumarghat", "Udaipur", ]
        }, ]
    },
    {
        state: "Uttar Pradesh",
        cities: [{
                name: "Agra",
                areas: ["Agra", "Fatehabad Road", "Sikandra", "Kheria", "Dayal Bagh", "Tajganj", "Shahganj", "Yamuna Expressway Industrial Development Area", ]
            }, {
                name: "Aligarh",
                areas: ["Aligarh", "Barauli Ahir", "Barauli Jatan", "Barauli Khurd", "Baroli", "Baroli Khas", "Bhadaura", "Bhurkunda", "Dhanora", "Gola Ka Purwa", "Gular", "Gular Road", "Jatwara", "Kaithal", "Khair", "Khairabad", "Kheri Sampla", "Kotwali", "Lohamandi", "Marh", "Masoodabad", "Naurangabad", "Nizamabad", "Pachenda", "Pachora", "Palla", "Pathredi", "Phulpur", "Pinahat", "Qasimpur Power House", "Raja Ka Rampur", "Rajpoot", "Ramgarh", "Ramgarh Shekhawati", "Sikandra Rao", "Sirsaganj", "Siyana", "Subhash Nagar Aligarh", "Tappal", "Thana Bhawan", "", ]
            }, {
                name: "Allahabad",
                areas: ["Kalyanpur", "Jhunsi", "Naini", "Phulpur", "Meerapur", "Allahabad City", "George Town", "Civil Lines", "Chaukhandi", "Prayag Ghat", "Naini Railway Colony", "Naini Industrial Estate", "Subedarganj", "Daraganj", "Mirzapur Road", "Tagore Town", "Colonelganj", "Sardar Nagar", "Govindpuram", "Jhusi Kohna", "Karchana", "Bara", "Meena Bazar", "Sarai Inayat Khan", "Chaka", "Shankargarh", "Kauriram", "Kora Jahanabad", "Karchhana", "Phoolpur", "Jalalpur", "Chunar", "Mirzapur", "Vindhyachal", "Robertsganj", "Mau", "Duddhi", "Gyanpur", "Saidabad", "Zamania", "Chunar Railway Colony", "Jaunpur", "Madiyahun", "Shahganj", "Badlapur", "Mariahu", "Machhalishahar", "Jais", "Kashi Vidyapith", "Daraganj Railway Colony", "Kaithi", "Bindki", "Sadat", "Fatehpur Chaurasi", "Mirzapur Cantt.", "Bindki Road", "Kotwali", "Purwa", "Jafarganj", "Sarai Mir", "Koraon", "Phaphamau", "Soraon", "Baraich", "Meerut", "Lalpur", "Manda", "Naini Bridge", "Kauriram Nagar", "Karchana", "Tirwa", "Akbarpur"]
            }, {
                name: "Amroha",
                areas: ["Amroha", "Dhanaura", "Gajraula", "Hasanpur", "Jakhanian", "Kamalpur", "Loni", "Moradabad", "Najibabad", "Sambhal", "Shamli", "Tanda", "Thanabhawan", "Thana Bhawan", "Asmoli", "Bilari", "Daryabad", "Dhaurahra", "Gulaothi", "Gunnaur", "Hastinapur", "Jyotiba Phule Nagar", "Khatauli", "Khekada", "Machhlishahr", "Mansoorpur", "Mawana", "Meerut", "Milak", "Modinagar", "Muzaffarnagar", "Nagina", "Nai Bazar", "Niwari", "Noida", "Orai", "Pilkhuwa", "Pinahat", "Purkaji", "Ramgarh", "Rampur", "Saharanpur", "Sardhana", "Seohara", "Shahabad", "Shamaspur", "Shikarpur", "Siana", "Sikanderpur", "Sisauli", "Suar", "Tundla", "Uttar Pradesh", "Amroha", "", ]
            }, {
                name: "Azamgarh",
                areas: ["Azamgarh", "", "Jahanaganj", "Sarai Mir", "Tarwara", "Mehnajpur", "Nizamabad", "Jafrabad", "Saraimir", "Mohammadabad", "Muthiganj", "Marhaura", "Phulpur", "Mehnajpur", "Sarai Akil", "Jahanaganj", "Nizamabad", "Jafrabad", "Mohammadabad", "Muthiganj", "Marhaura", "Phulpur", "Sarai Akil", ]
            }, {
                name: "Bagpat",
                areas: ["Baghpat", "Baraut", "Pilana", "Khekada", "Sonipat", "Jhinjhak", "Raya", "Sadabad", "Tunda", "Mansoorpur", "Doiwala", "Sahaspur", "Binauli", "Gulaothi", "Wazirabad", "Ramala", "Baghpat Road", "Jalebi Chowk", "Patwari", "Rohta", "Kotwali", "Tikri", "Chamrawal", "Jain Nagar", "Civil Lines", "Kot", "Dhaulana", "Hastinapur", "Jain Nagar", "Kaithal Road", "Kanshiram Nagar", "Mawana", "Meerut Road", "Modinagar", "Muradnagar", "Najeebabad", "Pilkhuwa", "Rajpoot", "Ramghat Road", "Sikandrabad", "Simbhawali", "Titron", "Topra Khas", "Ukhrul", "Wazirabad", "Zohrabai", ]
            }, {
                name: "Bahraich",
                areas: ["Kaiserganj", "Nanpara", "Gola Gokarannath", "Bilaspur", "Safipur", "Mailani", "Misrikh", "Unchahar", "Tarabganj", "Someshwar", "Tilhar", "Shrawasti", "Balrampur", "Gonda", "Utraula", "Mankapur", "Lakhimpur", "Barabanki", "Faizabad", "Rudauli", "Sultanpur", "Lucknow", "Kanpur", "Jhansi", "Orai", "Jalaun", "Hamirpur", "Banda", "Chitrakoot", "Fatehpur", "Pratapgarh", "Jaunpur", "Mirzapur", "Robertsganj", "Bhadohi", "Mau", "Azamgarh", "Mau Aimma", "Ghazipur", "Ballia", "Jaunpur", "Deoria", "Gorakhpur", "Kheri", "Lakhimpur", "Sitapur", "Hardoi", "Sandila", "Shahjahanpur", "Farrukhabad", "Kannauj", "Kanpur Dehat", "Auraiya", "Bidhuna", "Akbarpur", "", "Hamirpur", "Jalaun", "Jhansi", "Orai", "Mahoba", "Chitrakoot", "Banda", "Fatehpur", "Pratapgarh", "Jaunpur", "Mirzapur", "Robertsganj", "Bhadohi", "Mau", "Azamgarh", "Mau Aimma", "Ghazipur", "Ballia", "Jaunpur", "Deoria", "Gorakhpur", "Kheri", "Lakhimpur", "Sitapur", "Hardoi", "Sandila", "Shahjahanpur", "Farrukhabad", "Kannauj", "Kanpur Dehat", "Auraiya", "Bidhuna", "Akbarpur", "", "Hamirpur", ]
            }, {
                name: "Ballia",
                areas: ["Ballia", "Bansdeeh", "Bairia", "Belthara Road", "Dumri Katsari", "Ghorawal", "Jakhania", "Navanagar", "Phephna", "Rasra", "Reoti", "Saidpur", "Sikanderpur", "Ugrasenpur", ]
            }, {
                name: "Balrampur",
                areas: ["Balrampur", "Utraula", "Tulsipur", "Gulariya", "Shravasti", "Bahraich", "Gonda", "Barabanki", "Faizabad", "Lucknow", ]
            }, {
                name: "Banda",
                areas: ["Banda", "Uttar Pradesh", "India", ]
            }, {
                name: "Barabanki",
                areas: ["Aminabad", "Barabanki", "Baradwari", "Bhagwantnagar", "Bikapur", "Chandpur", "Dariyabad", "Fatehpur", "Haidergarh", "Iltifatganj", "", "Jatwara", "Jigna", "Kantharoop", "Khairabad", "Kotwali", "Lakhimpur", "Masudabad", "Mohammadi", "Nawabganj", "Pakariya", "Ramnagar", "Rudauli", "Safipur", "Saidabad", "Shriramnagar", "Tilhar", "Wazirganj", ]
            }, {
                name: "Bareilly",
                areas: ["Aonla", "Baheri", "Faridpur", "Nawabganj", "Pilibhit", "Puranpur", ]
            }, {
                name: "Basti",
                areas: ["Bhiti", "Gaura", "Jahanaganj", "Kotwa", "Pachpedwa", "Ramnagar", "Rudhauli", "Sant Kabir Nagar", "Shivpur", "Sohawal", "Tarabganj", "Uttar Pradesh", ]
            }, {
                name: "Bijnor",
                areas: ["Nagina", "Dhampur", "Nehtaur", "Noorpur", "Kunwar Heri", "Kotwali", "Afzalgarh", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "Sherkot", "Chandpur Rurki", "Dhaurahra", "Kotwali", "Jhalu", "Simbhawali", "Bilari", "Dhanaura", "Chandpur", "Bijnor", "Najibabad", "Dhanaura", "Barhapur", "Nakur", "Sahaswan", "Seohara", "Garhi Chaukhandi", "Neemsar", "", ]
            }, {
                name: "Budaun",
                areas: ["Aonla", "Atarra", "Baghpat", "Bahjoi", "Baraut", "Chandausi", "Chhaprauli", "Dataganj", "Gajraula", "Gangoh", "Ghaziabad", "Ghiraur", "Hapur", "Hastinapur", "Jainabad", "Jansath", "Kotwali Dehat", "Loni", "Meerut", "Modinagar", "Muzaffarnagar", "Nagina", "Nangal", "Naugawan Sadat", "Noida", "Pilkhuwa", "Purkaji", "Sahaspur", "Sahaswan", "Sambhal", "Shamli", "Shikarpur", "Siana", "Sikanderpur", "Simbhawali", "Sisauli", "Solan", "Sonipat", "Sujabad", "Sujanpur", "Swamibagh", "Thanabhawan", "Tilhar", "Unnao", "Utratiya", ]
            }, {
                name: "Bulandshahr",
                areas: ["Anoopshahr", "Bulandshahar", "Chandausi", "Dankaur", "Dadri", "Khurja", "Shikarpur", "Sikandrabad", "Sikandra", "Aligarh", "Ghaziabad", "Greater Noida", "Gulaothi", "Hapur", "Hastinapur", "Jewar", "Jhinjhak", "Khair", "Loni", "Modinagar", "Muradnagar", "Pilkhuwa", "Sahibabad", "Sambhal", "Shamli", "Shastri Nagar", "Siyana", "Tappal", "Titron", ]
            }, {
                name: "Chandauli",
                areas: ["Chandauli", "Barachatti", "Zamania", "Chakia", "Naugarh", "Robertsganj", "Dhanapur", "Marihan", "Jiyapur", "Sidhpura", "Chandanpur", "Kashi Vidyapeeth", "Newari", "Karchana", "Paharpur", "Sarai Mir", "Siyari", "Kachhwa", "Jamsar", "Gopadbanas", "Kauriram", "Mughalsarai", "Karamnasa", "Keshavpur", ]
            }, {
                name: "Chitrakoot",
                areas: ["Chitrakoot", "Karwi", "Mau", "Atarra", "Banda", "Hamirpur", "Mahoba", "Kalpi", "Orai", "Jhansi", "Lalitpur", ]
            }, {
                name: "Deoria",
                areas: ["Deoria", "Bhatpar Rani", "Chiraiya", "Fazilnagar", "Gauri Bazar", "Lar", "Pathardewa", "Rampur Karkhana", "Rudrapur", "Salempur Rajdhani", "Sursa", ]
            }, {
                name: "Etah",
                areas: ["Etah", "Aliganj", "Jalesar", "Kasganj", "Sahawar", "Pilani", ]
            }, {
                name: "Etawah",
                areas: ["Sikandra", "Jaswantnagar", "Auraiya", "Bidhuna", "Bhajanpura", "Bharthana", "Gursarai", "Jalaun", "Jhinjhak", "Konch", "Orai", "Safai", "Sandila", "Usawan", "Akbarpur", "Atarra", "Bewar", "Bhognipur", "Bisauli", "Chaubeypur", "Chhibramau", "Gosainganj", "Hamirpur", "Jahanabad", "Lakhna", "Lal Gopalganj Nindaura", "Lauriya", "Mahoba", "Mohammadi", "Musafirkhana", "Nidhauli Kalan", "Nighasan", "Patti", "Phulpur", "Rath", "Saifai", "Sarila", "Sikandra Rao", "Sursa", "Surya Sen Nagar", "Talbehat", "Akbarpur", "Amaniganj", "Auraiya", "Bidhuna", "Bhognipur", "Bewar", "Bisauli", "Chaubeypur", "Chhibramau", "Gursarai", "Hamirpur", "Jalaun", "Jahanabad", "Jhinjhak", "Konch", "Lauriya", "Lakhna", "Lal Gopalganj Nindaura", "Mahoba", "Mohammadi", "Musafirkhana", "Nighasan", "Nidhauli Kalan", "Orai", "Patti", "Phulpur", "Rath", "Saifai", "Safai", "Sandila", "Sarila", "Sikandra Rao", "Sursa", "Surya Sen Nagar", "Talbehat", "Usawan", ]
            }, {
                name: "Faizabad",
                areas: ["Faizabad", "Barabanki", "Gonda", "Basti", "Ambedkar Nagar", "Sultanpur", "Azamgarh", "Mau", "Gorakhpur", "Deoria", "Kushinagar", "Saharanpur", "Muzaffarnagar", "Meerut", "Baghpat", "Ghaziabad", "Bulandshahr", "Gautam Buddha Nagar", "Aligarh", "Hathras", "Agra", "Firozabad", "Mathura", "Mahamaya Nagar", "Kasganj", "Etah", "Bareilly", "Pilibhit", "Shahjahanpur", "Lakhimpur Kheri", "Lucknow", "Unnao", "Raebareli", "Bara Banki", "Faizabad", "Sultanpur", "Amethi", "Pratapgarh", "Jaunpur", "Bhadohi", "Mirzapur", "Sonbhadra", ]
            }, {
                name: "Farrukhabad",
                areas: ["Bithoor", "Chaukhandi", "Devri", "Fatehpur Chaurasi", "Kaimganj", "Kauriram", "Kusumkhera", "Laharpur", "Nagram", "Pawayan", "Sakshi", "Sirathu", "Sursa", ]
            }, {
                name: "Fatehpur",
                areas: ["Fatehpur", "Uttar Pradesh", ]
            }, {
                name: "Firozabad",
                areas: ["Firozabad", "Uttar Pradesh", "India", ]
            }, {
                name: "GautamBuddhaNagar",
                areas: ["Noida", "Greater Noida", "Dadri", "Jewar", "Gulaothi", "Sikandrabad", "Dankaur", "Bulandshahr", "Pilkhuwa", "Hapur", ]
            }, {
                name: "Ghaziabad",
                areas: ["Ghaziabad", "Uttar Pradesh", "India", ]
            }, {
                name: "Ghazipur",
                areas: ["Ghazipur", "Zamania", "Mohania", "Sahebganj", "Saidpur", "Jakhania", "Dildar Nagar", "Ballia", "Bansdeeh", "Chauri Chaura", "Nandganj", "Naurangabad", "Mehdawal", "Fefna", "Barhni", "Baragaon", "Gola Gokarannath", "Jiyaghat", "Naughar", "Pharenda", "Rudrapur", "Siswa Bazar", "Turtipar", "Belghat", ]
            }, {
                name: "Gonda",
                areas: ["Gonda", "Colonelganj", "Mankapur", "Tarabganj", "Gauriganj", "Katra Bazar", "Harraiya", "Colonelganj", "Mankapur", "Tarabganj", "Gauriganj", "Katra Bazar", "Harraiya", "", ]
            }, {
                name: "Gorakhpur",
                areas: ["Gorakhpur", "Pipiganj", "Sahjanwa", "Gola Gokarannath", "Khajni", "Pharenda", "Campierganj", "Bansgaon", "Turtipar", "Chauri Chaura", "Nautanwa", "Barhaj", "Sahjanwa", "Sohawal", "Maskanwa", "Haraiya", "Fazilnagar", "Bhathat", "Deoria Sadar", "Rudrapur", "Bhatpar Rani", "Gauri Bazar", "Lar", "Bhanwartal", ]
            }, {
                name: "Hamirpur",
                areas: ["Hamirpur", "Jahanabad", "Kotwali", "Sarila", "Mahoba", "Rath", "Orai", "Maudaha", "Charkhari", "Gohand", "Mau", "Jhinjhak", "Sarila", "Gursarai", "", "Atarra", "Baberu", "Samthar", "Banda", "Naraini", "Paila", "Tikamgarh", "Chhatarpur", "Damoh", "Datia", "Sagar", "Rehli", "Khurai", "Sironj", "Narsinghpur", "Jabalpur", "Mandla", "Dindori", "Balaghat", "Seoni", "Shahdol", "Umaria", "Anuppur", "Rewa", "Satna", "Panna", "Chhindwara", "Betul", "Amravati", "Hoshangabad", "Harda", "Itarsi", "Khandwa", "Burhanpur", "Bhusawal", "Badnapur", "Akot", "Murtizapur", "Dhar", "Indore", "Barwani", "Sendhwa", "Morena", "Bhind", "Gohad", "Datia", "Sheopur", "Tikamgarh", "Chhatarpur", "Panna", "Damoh", "Sagar", "Rehli", "Sironj", "Jabalpur", "Mandla", "Dindori", "Balaghat", "Seoni", "Shahdol", "Jhabua", "Alirajpur", "Ratlam", "Neemuch", "Mandsaur", "Ujj"]
            },
            {
                name: "Hathras",
                areas: ["Hathras", "Sadabad", "Sikandra", "Hathras Mandi", "Hathras City", "Hathras Sadar", "Hathras Pahari", "Hathras Jn", "Hathras Collectorate", "Hathras Court", "Hathras Kotwali", "Hathras Road", "Hathras Purab", "Hathras Shahabad", "Hathras West", "Hathras East", ]
            },
            {
                name: "Jalaun",
                areas: ["Uttar Pradesh", "Jalaun", "Orai", "Konch", "Kalpi", "Jhinjhak", "Hamirpur", "Garautha", "Chirgaon", "Bhognipur", "Bethwa", ]
            },
            {
                name: "Jaunpur",
                areas: ["Jaunpur", "Shahganj", "Jafrabad", "Machhlishahr", "Mariahu", "Badlapur", "Kerakat", "Ghosi", "Saidpur", "Purwa", ]
            },
            {
                name: "Jhansi",
                areas: ["Jhansi", "Mauranipur", "Gursarai", "Orai", "Lalitpur", "Jalaun", "Konch", "Hamirpur", "Mahoba", "Chitrakoot", ]
            },
            {
                name: "Kannauj",
                areas: ["Kannauj", "Achalganj", "Bidhuna", "Derapur", "Gursahaiganj", "Hasayan", "", "Kanpur Dehat", "Kanpur Nagar", "Kotra", "Lakhimpur", "Mauranipur", "Phaphund", "Rasulabad", "Sahawar", "Sandila", "Shivrajpur", "Sisamau", "Tirwa", ]
            },
            {
                name: "KanpurDehat",
                areas: ["Kanpur Dehat", "Akbarpur", "Derapur", "Ghatampur", "Jhinjhak", "Kanpur", "Kanpur Cantt.", "Kalyanpur", "Rooma", ]
            },
            {
                name: "KanpurNagar",
                areas: ["Kalyanpur", "Kidwai Nagar", "Kisan Nagar", "Naubasta", "Ashok Nagar", "Barra", "Chauhan Bangar", "Civil Lines", "Govind Nagar", "Gumti No. 5", "Jajmau", "Juhi", "Kakadeo", "Kalianpur", "Kanpur Cantt", "Kanpur City", "Lajpat Nagar", "Lal Bangla", "Mall Road", "Nayaganj", "Pandu Nagar", "Parvati Bagla", "Patel Nagar", "Phoolbagh", "Ratan Lal Nagar", "Rawatpur", "Sarvodaya Nagar", "Shyam Nagar", "Sisamau", "Sneh Nagar", "Swaroop Nagar", "Telibagh", "Tilak Nagar", "Transport Nagar", ]
            },
            {
                name: "Kasganj",
                areas: ["Kasganj", "Kotwali", "Barhani", "Bidhuna", "Sahawar", "Patiyali", "Achalda", "Kanshi Ram Nagar", "Sarsawan", "Sidhauli", "Aligarh", "Iglas", "Khurja", "Shikohabad", "Firozabad", "Agra", "Etah", "Mainpuri", "Kaithal", "Karnal", "Panipat", "Sonipat", "Rohtak", "Jind", "Hisar", "Sirsa", "Fatehabad", "Tohana", "Jakhal", "Ratia", "Fatehpur", "Abohar", "Barnala", "Bathinda", "Faridkot", "Fazilka", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jagraon", "Moga", "Muktsar", "Nabha", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Ajmer", "Alwar", "Banswara", "Baran", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur", "Barmer", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur", "Barmer", ]
            },
            {
                name: "Kaushambi",
                areas: ["Abhaypur", "Akbarpur", "Alapur", "Amanpur", "Amberpur", "Amritpur", "Arjunpur", "Asalatpur", "Ashokpur", "Ashta", "Ataur", "Babarpur", "Bachhrawan", "Badagaon", "Badalpur", "Baghpat", "Bah", "Bahadurpur", "Bajhera", "Bakshi ka Talab", "Baleni", "Bali", "Ballabgarh", "Bamheta", "Bamnauli", "Bana", "Banthala", "Baprola", "Baragaon", "Barauli Ahir", "Baraut", "Bardari", "Bareh", "Barola", "Bawan", "Behta Hazipur", "Bela", "Bela Pratapgarh", "Bela Uchana", "Bethmau", "Bhainsa Khurd", "Bhaisana", "Bhamora", "Bhangel", "Bhanpur", "Bharatpur", "Bharthana", "Bhatgaon", "Bhatpur Rani", "Bhatta", "Bhawan", "Bhawanigarh", "Bhikampur", "Bhimtal", "Bhojpur", "Bichpuri", "Bidhuna", "Bighapur", "Bijnor", "Bikapur", "Bilari", "Bilaspur", "Bilhaur", "Binaur", "Bisalpur", "Bisauli", "Biswan", "Bithoor", "Bobbili", "Bobbili Simhadripuram", "Bodinayakkanur", "Bodla", "Bokaro Steel City", "Bolpur", "Bongaigaon City", "Boor", "Bora", "Borgaon", "Borsad", "Botad", "Budaun", "Buldhana", "Bulandshahr", "Burhanpur", "Burhar", "Chaibasa", "Chainpur", "Chakia", "Chakia", "Chalisgaon", "Chamba", "Chamoli Gopeshwar", "Champawat", "Chanasma", "Chandausi", "Chandigarh", "Chandpur", "Chapara", "Charkhari", "Charkhari Mandi", "Charkhi Dadri", "Charthawal", "Chatra", "Chaukori", "Chhapra", "Chhaprauli", "Chhatarpur", "Chhibramau", "Chhindwara", "Chhota Udepur", "Chhutmalpur", "Chicholi", "Chikodi", "Chilakaluripet", "Chirala", "Chirgaon", "Chitrakoot", "Chittoor", "Chittur-Thathamangalam", "Chopan", "Choubepur Kalan", "Chouthmalpur", "Churu", "Coimbatore", "Contai", "Cuddalore", "Cuddapah", "Cuttack", "Dabra", "Dadri", "Daltonganj", "Dalmau", "Dalsinghsarai", "Daltonganj", "Dankuni", "Danta Ramgarh", "Daporijo", "Dapoli Camp", "Darbhanga", "Darjiling", "Datia", "Dausa", "Daund", "Daurai", "Debagarh", "Dehgam", "Dehradun", "Dehri-on-Sone", "Delhi", "Deoria", "Devgarh", "Dewas", "Dhamtari", "Dhanbad", "Dhar", "Dharampur", "Dharamsala", "Dharapuram", "Dharmana", "Dharmapuri", "Dhenkanal", "Dhilwan", "Dhone", "Dhule", "Dibrugarh", "Digboi", "Dimapur", "Dinanagar", "Dindigul", "Diphu", "Doraha", "Durg", "Durgapur", "Dwarka", "Ernakulam", "Erode", "Etah", "Etawah", "Faizabad", "Faridabad", "Faridkot", "Farrukhabad-cum-Fategarh", "Fatehabad", "Fatehpur", "Fatehpur", "Fatehpur Chaurasi", "Fatehpur Sikri", "Fatehpur Sikri", "Fazilka", "Firozabad", "Firozpur Cantt.", "Firozpur Jhirka", "Forbesganj", "Gadchiroli", "Gadwal", "Ganaur", "Ganga Nagar", "Gangapur", "Ganjbasoda", "Garhmukteshwar", "Garhwa", "Ghaziabad", "Ghazipur", "Giridih", "Goalpara", "Gobardanga", "Gobindgarh", "Godda", "Godhra", "Gonda", "Gondia", "Gopalganj", "Gorakhpur", "Goraya", "Greater Noida", "Gudivada", "Gudur", "Gulbarga", "Guntakal", "Guntur", "Gurgaon", "Guwahati", "Gwalior", "Hajipur", "Haldwani-cum-Kathgodam", "Hapur", "Harda", "Hardoi", "Haridwar", "Harpalpur", "Harsaon", "Hasanpur", "Hathras", "Haveri", "Hazaribag", "Himatnagar", "Hisar", "Hoshiarpur", "Hospet", "Howrah", "Hubli-Dharwad", "Hugli-Chuchura", "Hyderabad", "Ichalkaranji", "Idar", "Iglas", "Indergarh", "Indore", "Islampur", "Jabalpur", "Jagadhri", "Jagdalpur", "Jagdispur", "Jaggaiahpet", "Jagraon", "Jahangirabad", "Jaipur", "Jaisalmer", "Jalalabad", "Jalandhar Cantt.", "Jalandhar-1", "Jalaun", "Jalesar", "Jalgaon", "Jalna", "Jammu", "Jamnagar", "Jamshedpur", "Jangaon", "Janjgir", "Jaora", "Jarwal", "Jasdan", "Jaspur", "Jaunpur", "Jehanabad", "Jeypore", "Jhabua", "Jhajjar", "Jhansi", "Jharsuguda", "Jhumri Tilaiya", "Jind", "Jodhpur", "Jorhat", "Junagadh", "Kadapa", "Kadi", "Kagaznagar", "Kahalgaon", "Kaithal", "Kakinada", "Kalimpong", "Kallakkurichi", "Kalpi", "Kamareddy", "Kanchipuram", "Kandukur", "Kangra", "Kanker", "Kannauj", "Kanpur", "Kapurthala", "Karauli", "Karimganj", "Karimnagar", "Karnal", "Kashipur", "Katihar", "Katni", "Kayamkulam", "Kendrapara", "Kendujhar", "Kerur", "Khair", "Khambhat", "Khandwa", "Khanna", "Kharagpur", "Khargone", "Kheda", "Kheri", "Khurja", "Kikuchi", "Kimin", "Kirandul", "Kishanganj", "Kochi", "Kodungallur", "Kolar", "Kolhapur", "Kolkata", "Kollam", "Konnagar", "Koraput", "Korba", "Kota", "Kotdwara", "Kothagudem", "Kotkapura", "Kotma", "Kottayam", "Kozhikode", "Krishnanagar", "Kulti", "Kumbakonam", "Kunnamkulam", "Kurnool", "Kurud", "Kushinagar", "Lakhimpur", "Lakhisarai", "Lal Gopalganj Nindaura", "Lalganj", "Lalganj", "Lalgudi", "Lalitpur", "Latur", "Leh", "Loni", "Losal", "Lucknow", "Ludhiana", "Lunglei", "Madanapalle", "Madhepura", "Madhubani", "Madhugiri", "Madhupur", "Magadi", "Mahad", "Mahbubnagar", "Mahe", "Mahendragarh", "Mahoba", "Mahbubabad", "Maihar", "Mainpuri", "Makhdumpur", "Makhu", "Malerkotla", "Malout", "Manasa", "Manavadar", "Mandamarri", "Mandapeta", "Mandawa", "Mandi", "Mandi Dabwali", "Mandla", "Mandsaur", "Mandvi", "Mandya", "Manendragarh", "Mangaldoi", "Mangalore", "Manglaur", "Maniar", "Manjeri", "Mankachar", "Mansa", "Manuguru", "Manvi", "Mapusa", "Margao", "Margherita", "Marhaura", "Marigaon", "Markapur", "Masaurhi", "Mathura", "Mau", "Mau Ranipur", "Meerut", "Meham", "Mehsi", "Merta City", "Mhaswad", "Mhow Cantt.", "Mira-Bhayandar", "Mirganj", "Mirzapur-Vindhyachal", "Modasa", "Modinagar", "Moga", "Mohali", "Mokameh", "Moradabad", "Morena", "Morinda", "Mukerian", "Muktsar", "Muktsar", "Mul", "Multai", "Mumbai", "Munger", "Muradnagar", "Murshidabad", "Muzaffarnagar", "Muzaffarpur", "Muzzafarnagar", "Mysore", "Nadbai", "Nadiad", "Nagaur", "Nagda", "Nagina", "Nagpur", "Najibabad", "Nakodar", "Nalbari", "Nalgonda", "Namakkal", "Nanded-Waghala", "Nandgaon", "Nandigama", "Nandura", "Nandurbar", "Narkatiaganj", "Narkhed", "Narsinghgarh", "Narsinghpur", "Narwana", "Nasirabad", "Nathdwara", "Naugawan Sadat", "Nautanwa", "Navalgund", "Navi Mumbai", "Nawada", "Nayagarh", "Neem-Ka-Thana", "Neemuch", "Nelamangala", "New Delhi", "Nilgiri", "Nimbahera", "Nirmal", "Nizamabad", "Noida", "North Lakhimpur", "Nowgong", "Nowrozabad", "Nuh", "Obra", "Orai", "Osmanabad", "Ottappalam", "Ozhukarai", "Padrauna", "Paithan", "Pakaur", "Palacole", "Palai", "Palakkad", "Palampur", "Palani", "Palanpur", "Palasa Kasibugga", "Pali", "Palladam", "Panchkula", "Panchla", "Pandharkaoda", "Pandharpur", "Pandhurna", "Panipat", "Panna", "Panvel", "Parbhani", "Parichha", "Parli Vaijnath", "Patan", "Pathankot", "Pathardi", "Pathri", "Patiala", "Patna", "Patti", "Patti Sarwan", "Phagwara", "Phaltan", "Phulabani", "Phulera", "Phulpur", "Piduguralla", "Pilani", "Pilibanga", "Pilibhit", "Pilkhuwa", "Pinjore", "Pipariya", "Piparsand", "Piparsand", "Pipradih", "Pipri", "Piro", "Pithampur", "Pollachi", "Pondicherry", "Ponnani", "Pudukkottai", "Pudupattinam", "Pulgaon", "Pune", "Puranpur", "Purna", "Purulia", "Purwa", "Radaur", "Raebareli", "Raghopur", "Raigad", "Raiganj", "Raigarh", "Raikot", "Raipur", "Raisen", "Raisen", "Raisinghnagar", "Rajagangapur", "Rajahmundry", "Rajakhera", "Rajaldesar", "Rajapalayam", "Rajauri"]
            },
            {
                name: "Kheri",
                areas: ["Kheri", "Uttar Pradesh", "India", ]
            },
            {
                name: "Kushinagar",
                areas: ["Kushinagar", "Pupri", "Tamkuhi Raj", "Ratanpura", "Siswa Bazar", "Sapta Kshetra", "Kaptanganj", "Gagalheri", "Fazilnagar", "Deoria Sadar", "Bansi", "Bhanwarkol", "Barhni", "Basantpur", "Ahirwan", "Belghat", ]
            },
            {
                name: "Lalitpur",
                areas: ["Lalitpur", "Jhinjhak", "Orai", "Mahoba", "Hamirpur", "Banda", "Chitrakoot", "Jhansi", "Jalaun", "Lal Gopalganj Nindaura", "Kotra", ]
            },
            {
                name: "Lucknow",
                areas: ["Alambagh", "Aminabad", "Bakshi ka Talab", "Barabanki", "Cantonment", "Chinhat", "Gomti Nagar", "Hazratganj", "Indira Nagar", "Jankipuram", "Kapoorthala", "Lucknow City", "Mahanagar", "Mohanlalganj", "Musheerabad", "Nagram", "Nishatganj", "Rajajipuram", "Sadar", "Sarojininagar", "Sitapur Road", "Triveni Nagar", "Vrindavan Yojna", "Wazirganj", "Weavers Colony", "Aliganj", "Ashok Marg", "Balaganj", "Chowk", "Daliganj", "Faizabad Road", "Gomti Nagar Extension", "Gomti Nagar West", "Hazratganj", "Hussainganj", "Jopling Road", "Kaiserbagh", "LDA Colony", "Mahanagar Colony", "Nirala Nagar", "Rajendra Nagar", "Talkatora", "Telibagh", "Thakurganj", "Vikas Nagar", ]
            },
            {
                name: "Maharajganj",
                areas: ["Maharajganj", "Jyoti Khuria", "Gaura Bazar", "Paniyari", "Naurangabad", "Gola Bazar", "Jahanabad", "Kaptanganj", "Barhni", "Nichlaul", "Sidhauli", "Mehdawal", "Rupaidiha", "Maskanwa", "Nautanwa", "Betia", "Pupri", "Thuthibari", "Bansi", "Shohratgarh", "Lauria", "Narkatiaganj", "Kotwa", "Itwa", "Pakridayal", "Majhauli Raj", "Ramkola", "Baragaon", "Siswa Bazar", "Latifpur", "Gagaha", "Siswa", "Navanagar", "Siswa Buzurg", "Siswa Khurd", "Sarai Khwaja", "Kheta Sarai", "Nizamabad", "Gaura", "Jiyawan", "", "Chitaura", "Kauriram", "Nankar", "Kauria", "Gaurabazar", "Pachim Maharajganj", "Purani Bazar", "Uttar Bazar", "Pipraich", "Haraiya", "Nautan", "Jiyapur", "Pakari", "Mirganj", "Belwa", "Kataiya", "Siswa Bazar", "Gaura", "Jiyawan", "", "Chitaura", "Kauriram", "Nankar", "Kauria", "Gaurabazar", "Pachim Maharajganj", "Purani Bazar", "Uttar Bazar", "Pipraich", "Haraiya", "Nautan", "Jiyapur", "Pakari", "Mirganj", "Belwa", "Kataiya", ]
            },
            {
                name: "Mahoba",
                areas: ["Kulpahar", "Charkhari", "Jaitpur", "Mau", "Atarra", "Banda", "Hamirpur", "Kalinjar", "Mahoba", ]
            },
            {
                name: "Mainpuri",
                areas: ["Etawah", "Farrukhabad", "Firozabad", "Hathras", "Kanpur", "Kannauj", "Mainpuri", "Mathura", "Agra", "Aligarh", "Auraiya", "Azamgarh", "Bareilly", "Basti", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Deoria", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Jaunpur", "Jhansi", "Lalitpur", "Lucknow", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "RaeBareli", "Rampur", "Saharanpur", "Sambhal", "SantKabirNagar", "Shahjahanpur", "Shravasti", "Siddharthnagar", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi", ]
            },
            {
                name: "Mathura",
                areas: ["Mathura", "Vrindavan", "Govardhan", "Gokul", "Radha Kund", "Barsana", "Nandgaon", "Mahavan", "Baldeo", "Mat", "Chaumukha", "Brij Dham", "Kusum Sarovar", "Kans Qila", "Kesi Ghat", "Prem Mandir", ]
            },
            {
                name: "Mau",
                areas: ["Mau", "Uttar Pradesh", "India", ]
            },
            {
                name: "Meerut",
                areas: ["Meerut Cantt", "Partapur", "Mawana", "Sardhana", "Jani", "Kanker Khera", "Daurala", "Hastinapur", "Baraut", "Baghpat", ]
            },
            {
                name: "Mirzapur",
                areas: ["Jhanjhara", "Gopiganj", "Chunar", "Robertsganj", "Mirzapur City", "Lalganj", "Zamania", "Vindhyachal", "Haliyal", "Jhinjhak", ]
            },
            {
                name: "Moradabad",
                areas: ["Moradabad", "Uttar Pradesh", "India", ]
            },
            {
                name: "Muzaffarnagar",
                areas: ["Muzaffarnagar", "Bhopa", "Jansath", "Charthawal", "Sardhana", "Khatoli", "Shamli", "Miranpur", "Purkazi", "Thana Bhawan", ]
            },
            {
                name: "Pilibhit",
                areas: ["Pilibhit", "Uttar Pradesh", "India", ]
            },
            {
                name: "Pratapgarh",
                areas: ["Pratapgarh Sadar", "Bela Pratapgarh", "Chauri Chaura", "Kunda", "Manikpur", "Phulpur", "Robertsganj", "Rudraprayag", "Tehri", ]
            },
            {
                name: "Raebareli",
                areas: ["Raebareli", "Bachhrawan", "Dalmau", "Fatehpur Chaurasi", "Harchandpur", "Jahanaganj", "Lalganj", "Mohammadi", "Musafirkhana", "Sahaswan", "Salon", "Sareni", "Usawan", ]
            },
            {
                name: "Rampur",
                areas: ["Rampur", "Sadar", "Teliyan", "Milak", "Suar", "Shahabad", "Chamraua", "Bilaspur", "Harthala", "Rampur Maniharan", "Rampur Nauthana", "Tanda", "Shahabad Mohammadabad", "Qadirabad", "Jahanabad", "Civil Lines", "Lakhanpur", "Faridpur", ]
            },
            {
                name: "Saharanpur",
                areas: ["Saharanpur", "Deoband", "Roorkee", "Muzaffarnagar", "Meerut", "Pilkhuwa", "Bijnor", "Najibabad", "Moradabad", "Rampur", "Bareilly", "Amroha", "Pilibhit", "Shahjahanpur", "Lakhimpur", "Hardoi", "Lucknow", "Kanpur", "Jhansi", "Agra", "Aligarh", "Mathura", "Etawah", "Auraiya", "Kannauj", "Farrukhabad", "Mainpuri", "Etah", "Firozabad", "Agra", "Orai", "Jhansi", "Lalitpur", ]
            },
            {
                name: "Sambhal",
                areas: ["Sambhal", "Bilari", "Moradabad", "Rampur", "Pilibhit", "Bareilly", "Shahjahanpur", "Lakhimpur Khiri", "Lucknow", "Kanpur", "Unnao", "Raebareli", "Faizabad", "Barabanki", "Sultanpur", "Amethi", "Pratapgarh", "Jaunpur", "Ghazipur", "Chandauli", "Varanasi", "Mirzapur", "Sonbhadra", ]
            },
            {
                name: "SantKabirNagar",
                areas: ["Kunda", "Pipri", "Mehdawal", "Chilkahar", "Azad Nagar", "Rani Bagh", "Kaptanganj", "Ramnagar", "Khairabad", "Bhiti", "Bhiti Akbarpur", "Bhiti Jahanaganj", "Bhiti Kauriram", "Bhiti Musafirkhana", "Bhiti Pachdeora", "Bhiti Rampur", "Bhiti Sarawan", "Bhiti Tanda", "Gaura", "Gaura Bazar", "Gaura Jahanaganj", "Gaura Kauriram", "Gaura Musafirkhana", "Gaura Pachdeora", "Gaura Rampur", "Gaura Sarawan", "Gaura Tanda", "Mohiuddinpur", "Mohiuddinpur Bazar", "Mohiuddinpur Jahanaganj", "Mohiuddinpur Kauriram", "Mohiuddinpur Musafirkhana", "Mohiuddinpur Pachdeora", "Mohiuddinpur Rampur", "Mohiuddinpur Sarawan", "Mohiuddinpur Tanda", "Nizamabad", "Nizamabad Bazar", "Nizamabad Jahanaganj", "Nizamabad Kauriram", "Nizamabad Musafirkhana", "Nizamabad Pachdeora", "Nizamabad Rampur", "Nizamabad Sarawan", "Nizamabad Tanda", "Pachdeora", "Pachdeora Bazar", "Pachdeora Jahanaganj", "Pachdeora Kauriram", "Pachdeora Musafirkhana", "Pachdeora Pachdeora", "Pachdeora Rampur", "Pachdeora Sarawan", "Pachdeora Tanda", "Rampur", "Rampur Bazar", "Rampur Jahanaganj", "Rampur Kauriram", "Rampur Musafirkhana", "Rampur Pachdeora", "Rampur Rampur", "Rampur Sarawan", "Rampur Tanda", "Sarawan", "Sarawan Bazar", "Sarawan Jahanaganj", "Sarawan Kauriram", "Sarawan Musafirkhana", "Sarawan Pachdeora", "Sarawan Rampur", "Sarawan Sarawan", "Sarawan Tanda", "Tanda", "Tanda Bazar", "Tanda Jahanaganj", "Tanda Kauriram", "Tanda Musafirkhana", "Tanda Pachdeora", "Tanda Rampur", "Tanda Sarawan", "Tanda Tanda", ]
            },
            {
                name: "Shahjahanpur",
                areas: ["Azad Nagar", "Baghpat Road", "Baradari", "Civil Lines", "Ganeshpur", "Garhi", "Kotwali", "Naini", "Nirala Nagar", "Sadar", "Thana", "Tilhar", ]
            },
            {
                name: "Shravasti",
                areas: ["Bairagi Bazar", "Gokulnagar", "Indarpuri", "Jain Bazar", "Jain Nagar", "Kamalpur", "Kotwali", "Lalpur", "Mangalpur", "Newada", "Pachim Shravasti", "Purab Shravasti", "Ramnagar", "Rampur", "Rudrapur", "Sarai Kale Khan", "Shivpur", "Shravasti", "Srikrishnapuri", "Tulsipur", ]
            },
            {
                name: "Siddharthnagar",
                areas: ["Bhagwanpur", "Gularia", "Jiyapur", "Kaptanganj", "Naurangabad", "Niyamatpur", "Pachpedwa", "Ramnagar", "Rudhauli", "Siswa", "Siswa Bazar", "Tikonia", "Trilokpur", ]
            },
            {
                name: "Sitapur",
                areas: ["Sitapur", "Uttar Pradesh", ]
            },
            {
                name: "Sonbhadra",
                areas: ["Ghorawal", "Robertsganj", "Renukoot", "Anpara", "Shaktinagar", "Obra", "Mirzapur", "Vindhyachal", "Chunar", ]
            },
            {
                name: "Sultanpur",
                areas: ["Sultanpur", "Jafrabad", "Kadipur", "Gauriganj", "Musafirkhana", "Amethi", "Jaisinghpur", "Fatehpur Chaurasi", "Gosainganj", "Isanpur", "Kurebhar", "Lambhua", "Madhogarh", "Milak", "Mussafir Khana", "Nagla Chandrabhan", "Oel", "Pratapgarh City", "Rampur Karkhana", "Rudauli", "Sadat", "Salon", "Samdhan", "Sarila", "Sewarhi", "Sikandra Rao", "Sursa", "Taraon", "Tikaitnagar", "Unchahar", "Zaidpur", ]
            },
            {
                name: "Unnao",
                areas: ["Unnao", "Bangarmau", "Safipur", "Fatehpur Chaurasi", "Hasanganj", "Purwa", "Safai", "Bighapur", "Danpur", "Akbarpur", "Auras", "Jajmau", "Jethani", "Kacchwa", "Kachhauna Patseni", "Kain", "Kanpur", "Khaira", "Khudaganj", "Mallawan", "Meerut Ganj", "Nawabganj", "Rae Bareli", "Rura", "Sikandra", "Sirsaganj", "Sisaura", "Sumerpur", "Takha", "Unchahar", "Usawan", "Wazirganj", ]
            },
            {
                name: "Varanasi",
                areas: ["Jaitpura", "Dashashwamedh", "Godowlia", "Chowk", "Golghar", "Sigra", "Bhelupur", "Luxa", "Naria", "Pindra", "Rohania", "Shivpur", "Mirzapur", "Maruadih", "Kashi Vidyapeeth", "Dumraon Estate", "Manduadih", "Vidyapati Nagar", "Shivdaspur", "Jangambadi", "Jyotiba Phule Nagar", "Pandeypur", "Cantonment", "Orderly Bazar", "Dashashwamedh Ghat", "Chaukhandi", "Chetganj", "Durgakund", "Harhua", "Kapsethi", "Lohta", "Mehmoorganj", "Mughalsarai", "Nandanagar", "Naria", "Paharia", "Phulpur", "Ramnagar", "Saidabad", "Sarnath", "Sevapuri", "Sigra", "Sonarpura", "Srinathpuram", "Vrindavan", "Chaukhandi Stupa", ]
            },
        ]
    },
    {
        state: "Uttarakhand",
        cities: [{
            name: "Dehradun",
            areas: ["Dehradun", "Doiwala", "Haridwar", "Rishikesh", "Mussoorie", "Landour", "Vikasnagar", "Sahaspur", "Raiwala", "Clement Town", "Raipur", "Dalanwala", "Premnagar", "Nimbuwala", "Chakrata", "Jhajra", "Kalsi", "Raiwala", "Mohkampur", "Kanwali", "Dharmawala", "Ballupur", "Majra", "Mohiuddinpur", "Dhalanwala", "Raipur", "Jwalapur", "Bhaniyawala", "Dharampur", "Bhaniyawala", "Dhalanwala", "Dharmawala", "Doiwala", "Jwalapur", "Kalsi", "Kanwali", "Landour", "Majra", "Mohkampur", "Mohiuddinpur", "Mussoorie", "Nimbuwala", "Premnagar", "Raiwala", "Raipur", "Rishikesh", "Sahaspur", "Vikasnagar", ]
        }, {
            name: "Haridwar",
            areas: ["Ranipur Jharial", "Bhupatwala", "Birla Colony", "Brij Vihar Colony", "Chandan Vihar", "Chatakpur", "Dhanwapur", "Ganeshpur", "Gurukul", "Haridwar Industrial Estate", "Haridwar North", "Haridwar South", "Jagjeetpur", "Jwalapur", "Kankhal", "Laksar", "Luxor Estate", "Manglawala", "Mohanpur Dharmpur", "Raiwala", "Sarangpur", "Shiv Nagar", "Shivalik Nagar", "Shyampur", "SIDCUL", "Subhash Nagar", "Sudhowala", "Telibagh", "Tilak Nagar", ]
        }, {
            name: "Nainital",
            areas: ["Nainital", "Bhimtal", "Sattal", "Ramgarh", "Mukteshwar", "Almora", "Binsar", "Jageshwar", "Ranikhet", "Kausani", ]
        }, {
            name: "Mussoorie",
            areas: ["Mussoorie", "Landour", "Bhadraj", "Jharipani", "Kunjapuri", "Company Garden", "Camel's Back Road", "Gunhill", "Lake Mist", "Kempty Falls", "Benog Wildlife Sanctuary", "Nag Devta Temple", "Mussoorie Lake", "Cloud's End", "Lal Tibba", ]
        }, {
            name: "Almora",
            areas: ["Nainital Road", "Ramnagar", "Bhowali", "Bhimtal", "Mukteshwar", "Dwarahat", "Someshwar", "Jainti", "Ranikhet", "Kausani", "Almora", "Kaparkhan", "Cheena", "Dharapani", "Dhauladevi", "Dhikuli", "Dhumakot", "Gairsain", "Gwaldam", "Jainagar", "Jibhi", "Kainchi Dham", "Kalsi", "Kanatal", "Karnprayag", "Kasar Devi", "Kashipur", "Katarmal", "Kathgodam", "Kausani", "Kedarnath", "Kempty Falls", "Khirsu", "Lansdowne", "Lohaghat", "Majkhali", "Mukteshwar", "Mundali", "Nainital", "Naukuchiatal", "Pauri", "Pokhari", "Ramgarh", "Ranikhet", "Rikhnikhal", "Rishikesh", "Rudraprayag", "Sattal", "Saur", "Sitla", "Sonprayag", "Sukhatal", "Talla Ramgarh", "Thal", "Ukhimath", "Valmiki Ashram", "", ]
        }, {
            name: "Pauri",
            areas: ["Kotdwar", "Lansdowne", "Pauri", "Srinagar", "Chaubattia", "Dhanolti", "Jaiharikhal", "Kaddukhal", "Kandikhal", "Karnaprayag", "Kashipur", "Koteshwar", "Laxmanjhula", "Laxmanprayag", "Muni-ki-Reti", "Nainital", "Ramnagar", "Rishikesh", "Rudraprayag", "Tehri", "Ukhimath", "Vishnuprayag", ]
        }, {
            name: "Tehri",
            areas: ["Kot", "Bhilangna", "Byasi", "Chandpur Rauri", "Dhanolti", "Dunda", "Ghansali", "Jakhnidhar", "Jwalapur", "Kanatal", "Kirtinagar", "Kunj", "Lakhamandal", "Landaura", "Laxman Jhula", "Mohanpur Dharmpur", "Narendranagar", "Naughar", "Nelang", "New Tehri", "Pauri", "Pratapnagar", "Raiwala", "Rajpur", "Ramnagar", "Rishikesh", "Rudraprayag", "Sahaspur", "Sahastradhara", "Srinagar", "Tyuni", "Uttar Kashi", ]
        }, {
            name: "Rudraprayag",
            areas: ["Koteshwar", "Ukhimath", "Gaurikund", "Augustmuni", "Chamoli", "Karnprayag", "Nandprayag", "Vishnuprayag", "Rudraprayag", "", ]
        }, {
            name: "Chamoli",
            areas: ["Kot", "Gairsain", "Badrinath", "Chamoli", "Joshimath", "Pipalkoti", "Auli", "Karnaprayag", "Ukhimath", "Nandprayag", "Chamoli Gopeshwar", "Rudraprayag", "Karnprayag", "Devprayag", ]
        }, {
            name: "Uttarkashi",
            areas: ["Naugaon", "Dodital", "Mori", "Hanol", "Dunda", "Netwar", "Jaunsar", "Bawar", "Chaubattia", "Srinagar", "Purola", "Yamunotri", "Barkot", "Gangotri", "Jankichatti", "Uttarkashi", "Dharasu", "Bhatwari", "Chinyalisaur", "Sem", "Nachni", "Thal", "Agoda", "Bairagi Camp", "Bhuwankhal", "Chaurangi Khal", "Chirbasa", "Dunda Forest", "Gairatpur Bas", "Gaumukh", "Girna", "Jakh", "Jaunsar Bawar", "Kalap", "Karnprayag", "Kashirampura", "Kelwa Ghat", "Kirtinagar", "Loharkhet", "Mori Gram", "Naugaon", "Naugaon Road", "Netwar", "New Tehri", "Niti", "Okhimath", "Purola", "",
                "i", "Ramkhola", "Rishikesh", "Rudraprayag", "Rudraprayag Road", "Sagar", "Sankri", "Sem", "Shailkuppa", "Shigla", "Shyampur", "Srinagar", "Sukhi", "Suvakholi", "Talla Prarupnath", "Talla Ramgarh", "Thangdhar", "Tilwara", "Ukhimath", "Vishnuprayag", "Yamunotri", "",
            ]
        }, {
            name: "Pithoragarh",
            areas: ["Pithoragarh", "Dharchula", "Munsiyari", "Didihat", "Berinag", "Chaukori", "Gangolihat", "Lohaghat", "Tanakpur", "Kapkot", "Dhawalagiri", "Jauljibi", "Maili", "Sunauli", "Dharchula", "Munsiyari", "Didihat", "Berinag", "Chaukori", "Gangolihat", "Lohaghat", "Tanakpur", "Kapkot", "Dhawalagiri", "Jauljibi", "Maili", "Sunauli", ]
        }, {
            name: "Bageshwar",
            areas: ["Kapkot", "Dwarahat", "Almora", "Jageshwar", "Binsar", "Ranikhet", "Mukteshwar", "Bhimtal", "Nainital", "Sattal", "Pithoragarh", "Champawat", "Lohaghat", ]
        }, {
            name: "Champawat",
            areas: ["Agarthala", "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi", ]
        }, ]
    }, {
        state: "West Bengal",
        cities: [{
            name: "Kolkata",
            areas: ["Dum Dum", "Barrackpore", "Baguiati", "Belgachia", "Bowbazar", "Burrabazar", "Chandni Chowk", "Entally", "Garden Reach", "Hazra", "Jadavpur", "Kalighat", "Kidderpore", "Lake Gardens", "Maidan", "Maniktala", "New Market", "Park Street", "Rashbehari Avenue", "Shyambazar", "South City", "Tollygunge", ]
        }, {
            name: "Howrah",
            areas: ["Howrah", "Bally", "Jagatballavpur", "Panchla", "Uluberia", "Bauria", "Liluah", "Belur", "Bally Jut", "Santragachi", "Shibpur", "Domjur", "Bagnan", "Udaynarayanpur", "Andul", ]
        }, {
            name: "Asansol",
            areas: ["Asansol Sadar", "Barabani", "Kulti", "Raniganj", "Jamuria", "Salanpur", "Andal", "Durgapur", "Pandaveswar", "Burnpur", ]
        }, {
            name: "Durgapur",
            areas: ["Durgapur", "Kulti", "Raniganj", "Asansol", "Salanpur", "Jamuria", "Hirapur", "Andal", "Pandaveswar", "Barakar", "Burnpur", "Kanksa", "Galsi", "Faridpur Durgapur", "Raghunathpur", "Kenda", "Kankuria", "Kusunda", "Murgathaul", "Ondal", "Parashkol", "Raghudebbati", "Santaldih", "Sonpur", ]
        }, {
            name: "Bardhaman",
            areas: ["Memari", "Jamalpur", "Purbasthali", "Purbasthali Bazar", "Katwa", "Ketugram", "Guskara", "Ausgram", "Galsi", "Burdwan", "Burdwan Raj", "Burdwan University", "Bardhaman Sadar South", "Bardhaman Sadar North", "Guskara", "Raina", "Jamalpur", "Jamalpur Colony", "Memari", ]
        }, {
            name: "Darjeeling",
            areas: ["Darjeeling", "Kurseong", "Mirik", "Kalimpong", ]
        }, {
            name: "Jalpaiguri",
            areas: ["Jalpaiguri Sadar", "Mal", "Dhupguri", "Falakata", "Matiali", "Maynaguri", "Nagrakata", "Phulbari", "Rajganj", "Salbari", ]
        }, {
            name: "Kharagpur",
            areas: ["Kharagpur", "Keshiary", "Beldanga I", "Beldanga II", "Bhagwanpur I", "Bhagwanpur II", "Debra", "Dantan I", "Dantan II", "Garhbeta I", "Garhbeta II", "Gopiballavpur I", "Gopiballavpur II", "Jhargram", "Jamboni", "Midnapore", "Moyna", "Narayangarh", "Sabang", "Salboni", "Sankrail", ]
        }, {
            name: "Siliguri",
            areas: ["Siliguri", "Matigara", "Naxalbari", "Phansidewa", "Khoribari", "Islampur", "Chopra", "Dhupguri", "Falakata", "Mal", "Mekliganj", "Panitanki", "Bagdogra", "Banarhat", "Birpara", "Cooch Behar", "Dinhata", "Gossaigaon", "Mainaguri", "Mathabhanga", "Mekhliganj", "New Mal Jn", "New Maynaguri", "Panitanki", "Patgram", "Purnia", "Sahibganj", "Samsi", "Sukna", "Tufanganj", "Uttar Dinajpur", "Alipurduar", "Jalpaiguri", "Darjeeling", "Kurseong", "Mirik", "Siliguri", "Matigara", "Naxalbari", "Phansidewa", "Khoribari", "Islampur", "Chopra", "Dhupguri", "Falakata", "Mal", "Mekliganj", "Panitanki", "Bagdogra", "Banarhat", "Birpara", "Cooch Behar", "Dinhata", "Gossaigaon", "Mainaguri", "Mathabhanga", "Mekhliganj", "New Mal Jn", "New Maynaguri", "Panitanki", "Patgram", "Purnia", "Sahibganj", "Samsi", "Sukna", "Tufanganj", "Uttar Dinajpur", "Alipurduar", "Jalpaiguri", "Darjeeling", "Kurseong", "Mirik", ]
        }, {
            name: "CoochBehar",
            areas: ["Cooch Behar", "Dinhata", "Mekliganj", "Mathabhanga", "Tufanganj", "Sitalkuchi", "Toofanganj", "Patharpratima", "Haldibari", "Alipurduar", ]
        }, ]
    }, {
        state: "Andaman and Nicobar Islands",
        cities: [{
            name: "PortBlair",
            areas: ["Aberdeen Bazaar", "Austinabad", "Bakultala", "Baldwara", "Bambooflat", "Betapur", "Bhatu Basti", "Birla Camp", "Birpara", "Bonington", "Brookes Bay", "Brookshabad", "Campbell Bay", "Car Nicobar", "Chetamale", "Chidiyatapu", "Cinque Islands", "Dalhousie", "Diglipur", "Ferrargunj", "Garacharma", "Garacharma IAF", "Gobindapur", "Havelock Island", "Hermosa Camp", "Hut Bay", "Hyderabad", "Jirighat", "Kalighat", "Kalipur", "Kanyapur", "Kartar Nagar", "Karmatang", "Karsiyanga", "Kikarabad", "Kilthan", "Kwakea", "Lamma", "Landfall Island", "Laxmipur", "Ledo", "Long Island", "Madhuban", "Manglutan", "Manpur", "Mayabunder", "Nancowrie", "Neil Island", "Nicobar", "North Bay", "Nutun Bosti", "Ograbraj", "Oralkatcha", "Panighat", "Peroorkada", "Phonibazar", "Port Blair", "Prothrapur", "Rangat", "Rehmankada", "Rutland Island", "Sabari", "Sabari Nagar", "Sabarmati", "Sagarika", "Sippighat", "Smith Island", "South Bay", "South Point", "Stewartganj", "Swarajgram", "Takamaka", "Tarmugli Island", "Tilugug", "Trinkat", "Tutikorin", "Tyndale Biscoe", "Viper Island", "Wandoor", ]
        }, {
            name: "Diglipur",
            areas: ["Diglipur", "Kalighat", "Rangat", "Mayabunder", "Cuthbert Bay", "Diglipur Bazaar", "Aerial Bay", "Lamiya Nallah", "Labrynth Island", "Merk Bay", "Lawrence Bay", "Fall Bay", "Ramnagar Beach", "Pathi Level", "Alfred Caves", "Saddle Peak National Park", "Mud Volcano", "Kalpong River", "Kalpong Dam", "Dhani Nallah", ]
        }, {
            name: "Rangat",
            areas: ["Rangat", "Andaman and Nicobar Islands", ]
        }, {
            name: "Mayabunder",
            areas: ["Mayabunder", "North Andaman", "Andaman and Nicobar Islands", ]
        }, {
            name: "LittleAndaman",
            areas: ["Butler Bay", "Cinque Islands", "Dilthaman Tank", "Hut Bay", "Kalighat", "Landfall Bay", "North Bay", "Ritchie's Archipelago", "South Bay", "West Bay", ]
        }, {
            name: "CarNicobar",
            areas: ["CarNicobar", "Nancowry", "Katchal", "Camorta", "Trinkat", "Bompoka", "Kondul", "Teressa", "Great Nicobar", "Little Nicobar", ]
        }, {
            name: "Nancowrie",
            areas: ["Nancowrie", "Cinque Islands", "Rangat", "Mayabunder", "Diglipur", "Little Andaman", "Long Island", "Avis Island", "North Bay Island", "South Bay Island", "Barren Island", "Great Nicobar", "Car Nicobar", "Katchall Island", "Camorta Island", "Nancowrie", "Cinque Islands", "Rangat", "Mayabunder", "Diglipur", "Little Andaman", "Long Island", "Avis Island", "North Bay Island", "South Bay Island", "Barren Island", "Great Nicobar", "Car Nicobar", "Katchall Island", "Camorta Island", ]
        }, {
            name: "Camorta",
            areas: ["Katchal", "Nicobar", "Car Nicobar", "Camorta", "Nancowrie", "Chowra", "Teressa", "Trinket", "Kondul", "Pilomatala", "Meroe", "Bampoka", "Kora", "Menchal", "Kanchrapara", "Kairang", "Kalighat", ]
        }, {
            name: "GreatNicobar",
            areas: ["Great Nicobar", ]
        }, {
            name: "Katchal",
            areas: ["Katchal", "Andaman and Nicobar Islands", ]
        }, {
            name: "Teressa",
            areas: ["Teressa", "Andaman and Nicobar Islands", ]
        }, {
            name: "Trinkat",
            areas: ["Trinkat", "Andaman and Nicobar Islands", ]
        }, ]
    }, {
        state: "Chandigarh",
        cities: [{
            name: "Chandigarh",
            areas: ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6", "Sector 7", "Sector 8", "Sector 9", "Sector 10", "Sector 11", "Sector 12", "Sector 13", "Sector 14", "Sector 15", "Sector 16", "Sector 17", "Sector 18", "Sector 19", "Sector 20", "Sector 21", "Sector 22", "Sector 23", "Sector 24", "Sector 25", "Sector 26", "Sector 27", "Sector 28", "Sector 29", "Sector 30", "Sector 31", "Sector 32", "Sector 33", "Sector 34", "Sector 35", "Sector 36", "Sector 37", "Sector 38", "Sector 39", "Sector 40", "Sector 41", "Sector 42", "Sector 43", "Sector 44", "Sector 45", "Sector 46", "Sector 47", "Sector 48", "Sector 49", "Sector 50", "Sector 51", "Sector 52", "Sector 53", "Sector 54", "Sector 55", "Sector 56", "Sector 57", "Sector 58", "Sector 59", "Sector 60", "Sector 61", "Sector 62", "Sector 63", "Sector 64", "Sector 65", "Sector 66", "Sector 67", "Sector 68", "Sector 69", "Sector 70", "Sector 71", "Sector 72", "Sector 73", "Sector 74", "Sector 75", "Sector 76", "Sector 77", "Sector 78", "Sector 79", "Sector 80", "Sector 81", "Sector 82", "Sector 83", "Sector 84", "Sector 85", "Sector 86", "Sector 87", "Sector 88", "Sector 89", "Sector 90", "Sector 91", "Sector 92", "Sector 93", "Sector 94", "Sector 95", "Sector 96", "Sector 97", "Sector 98", "Sector 99", "Sector 100", "Sector 101", "Sector 102", "Sector 103", "Sector 104", "Sector 105", "Sector 106", "Sector 107", "Sector 108", "Sector 109", "Sector 110", "Sector 111", "Sector 112", "Sector 113", "Sector 114", "Sector 115", "Sector 116", "Sector 117", "Sector 118", "Sector 119", "Sector 120", "Sector 121", "Sector 122", "Sector 123", "Sector 124", "Sector 125", "Sector 126", "Sector 127", "Sector 128", "Sector 129", "Sector 130", "Sector 131", "Sector 132", "Sector 133", "Sector 134", "Sector 135", "Sector 136", "Sector 137", "Sector 138", "Sector 139", "Sector 140", "Sector 141", "Sector 142", "Sector 143", "Sector 144", "Sector 145", "Sector 146", "Sector 147", "Sector 148", "Sector 149", "Sector 150", "Sector 151", "Sector 152", "Sector 153", "Sector 154", "Sector 155", "Sector 156", "Sector 157", "Sector 158", "Sector 159", "Sector 160", "Sector 161", "Sector 162", "Sector 163", "Sector 164", "Sector 165", "Sector 166", "Sector 167", "Sector 168", "Sector 169", "Sector 170", "Sector 171", "Sector 172", "Sector 173", "Sector 174", "Sector 175", "Sector 176", "Sector 177", "Sector 178", "Sector 179", "Sector 180", "Sector 181", "Sector 182", "Sector 183", "Sector 184", "Sector 185", "Sector 186", "Sector 187", "Sector 188", "Sector 189", "Sector 190", "Sector 191", "Sector 192", "Sector 193", "Sector 194", "Sector 195", "Sector 196", "Sector 197", "Sector 198", "Sector 199", "Sector 200", "Sector 201", "Sector 202", "Sector 203", "Sector 204", "Sector 205", "Sector 206", "Sector 207", "Sector 208", "Sector 209", "Sector 210", "Sector 211", "Sector 212", "Sector 213", "Sector 214", "Sector 215", "Sector 216", "Sector 217", "Sector 218", "Sector 219", "Sector 220", "Sector 221", "Sector 222", "Sector 223", "Sector 224", "Sector 225", "Sector 226", "Sector 227", "Sector 228", "Sector 229", "Sector 230", "Sector 231", "Sector 232", "Sector 233", "Sector 234", "Sector 235", "Sector 236", "Sector 237", "Sector 238", "Sector 239", "Sector 240", "Sector 241", "Sector 242", "Sector 243", "Sector 244", "Sector 245", "Sector 246", "Sector 247", "Sector 248", "Sector 249", "Sector 250", ]
        }, {
            name: "Mohali",
            areas: ["Sector-1", "Sector-2", "Sector-3", "Sector-4", "Sector-5", "Sector-6", "Sector-7", "Sector-8", "Sector-9", "Sector-10", "Sector-11", "Sector-12", "Sector-13", "Sector-14", "Sector-15", "Sector-16", "Sector-17", "Sector-18", "Sector-19", "Sector-20", "Sector-21", "Sector-22", "Sector-23", "Sector-24", "Sector-25", "Sector-26", "Sector-27", "Sector-28", "Sector-29", "Sector-30", "Sector-31", "Sector-32", "Sector-33", "Sector-34", "Sector-35", "Sector-36", "Sector-37", "Sector-38", "Sector-39", "Sector-40", "Sector-41", "Sector-42", "Sector-43", "Sector-44", "Sector-45", "Sector-46", "Sector-47", "Sector-48", "Sector-49", "Sector-50", "Sector-51", "Sector-52", "Sector-53", "Sector-54", "Sector-55", "Sector-56", "Sector-57", "Sector-58", "Sector-59", "Sector-60", "Sector-61", "Sector-62", "Sector-63", "Sector-64", "Sector-65", "Sector-66", "Sector-67", "Sector-68", "Sector-69", "Sector-70", "Sector-71", "Sector-72", "Sector-73", "Sector-74", "Sector-75", "Sector-76", "Sector-77", "Sector-78", "Sector-79", "Sector-80", "Sector-81", "Sector-82", "Sector-83", "Sector-84", "Sector-85", "Sector-86", "Sector-87", "Sector-88", "Sector-89", "Sector-90", "Sector-91", "Sector-92", "Sector-93", "Sector-94", "Sector-95", "Sector-96", "Sector-97", "Sector-98", "Sector-99", "Sector-100", "Sector-101", "Sector-102", "Sector-103", "Sector-104", "Sector-105", "Sector-106", "Sector-107", "Sector-108", "Sector-109", "Sector-110", "Sector-111", "Sector-112", "Sector-113", "Sector-114", "Sector-115", "Sector-116", "Sector-117", "Sector-118", "Sector-119", "Sector-120", "Sector-121", "Sector-122", "Sector-123", "Sector-124", "Sector-125", "Sector-126", "Sector-127", "Sector-128", "Sector-129", "Sector-130", "Sector-131", "Sector-132", "Sector-133", "Sector-134", "Sector-135", "Sector-136", "Sector-137", "Sector-138", "Sector-139", "Sector-140", "Sector-141", "Sector-142", "Sector-143", "Sector-144", "Sector-145", "Sector-146", "Sector-147", "Sector-148", "Sector-149", "Sector-150", "Sector-151", "Sector-152", "Sector-153", "Sector-154", "Sector-155", "Sector-156", "Sector-157", "Sector-158", "Sector-159", "Sector-160", "Sector-161", "Sector-162", "Sector-163", "Sector-164", "Sector-165", "Sector-166", "Sector-167", "Sector-168", "Sector-169", "Sector-170", "Sector-171", "Sector-172", "Sector-173", "Sector-174", "Sector-175", "Sector-176", "Sector-177", "Sector-178", "Sector-179", "Sector-180", "Sector-181", "Sector-182", "Sector-183", "Sector-184", "Sector-185", "Sector-186", "Sector-187", "Sector-188", "Sector-189", "Sector-190", "Sector-191", "Sector-192", "Sector-193", "Sector-194", "Sector-195", "Sector-196", "Sector-197", "Sector-198", "Sector-199", "Sector-200", "Sector-201", "Sector-202", "Sector-203", "Sector-204", "Sector-205", "Sector-206", "Sector-207", "Sector-208", "Sector-209", "Sector-210", "Sector-211", "Sector-212", "Sector-213", "Sector-214", "Sector-215", "Sector-216", "Sector-217", "Sector-218", "Sector-219", "Sector-220", "Sector-221", "Sector-222", "Sector-223", "Sector-224", "Sector-225", "Sector-226", "Sector-227", "Sector-228", "Sector-229", "Sector-230", "Sector-231", "Sector-232", "Sector-233", "Sector-234", "Sector-235", "Sector-236", "Sector-237", "Sector-238", "Sector-239", "Sector-240", "Sector-241", "Sector-242", "Sector-243", "Sector-244", "Sector-245", "Sector-246", "Sector-247", "Sector-248", "Sector-249", "Sector-250", "Sector-251", "Sector-252", "Sector-253", "Sector-254", "Sector-255", "Sector-256", "Sector-257", "Sector-258", "Sector-259", "Sector-260", "Sector-261", "Sector-262", "Sector-263", "Sector-264", "Sector-265", "Sector-266", "Sector-267", "Sector-268", "Sector-269", "Sector-270", "Sector-271", "Sector-272", "Sector-273", "Sector-274", "Sector-275", "Sector-276", "Sector-277", "Sector-278", "Sector-279", "Sector-280", "Sector-281", "Sector-282", "Sector-283", "Sector-284", "Sector-285", "Sector-286", "Sector-287", "Sector-288", "Sector-289", "Sector-290", "Sector-291", "Sector-292", "Sector-293", "Sector-294", "Sector-295", "Sector-296", "Sector-297", "Sector-298", "Sector-299", "Sector-300", "Sector-301", "Sector-302", "Sector-303", "Sector-304", "Sector-305", "Sector-306", "Sector-307", "Sector-308", "Sector-309", "Sector-310", "Sector-311", "Sector-312", "Sector-313", "Sector-314", "Sector-315", "Sector-316", "Sector-317", "Sector-318", "Sector-319", "Sector-320", "Sector-321", "Sector-322", "Sector-323", "Sector-324", "Sector-325", "Sector-326", "Sector-327", "Sector-328", "Sector-329", "Sector-330", "Sector-331", "Sector-332", "Sector-333", "Sector-334", "Sector-335", "Sector-336", "Sector-337", "Sector-338", "Sector-339", "Sector-340", "Sector-341", "Sector-342", "Sector-343", "Sector-344", "Sector-345", "Sector-346", "Sector-347", "Sector-348", "Sector-349", "Sector-350", "Sector-351", "Sector-352", "Sector-353", "Sector-354", "Sector-355", "Sector-356", "Sector-357", "Sector-358", "Sector-359", "Sector-360", "Sector-361", "Sector-362", "Sector-363", "Sector-364", "Sector-365", "Sector-366", "Sector-367", "Sector-368", "Sector-369", "Sector-370", "Sector-371", "Sector-372", "Sector-373", "Sector-374", "Sector-375", "Sector-376", "Sector-377", "Sector-378", "Sector-379", "Sector-380", "Sector-381", "Sector-382", "Sector-383", "Sector-384", "Sector-385", "Sector-386", "Sector-387", "Sector-388", "Sector-389", "Sector-390", "Sector-391", "Sector-392", "Sector-393", "Sector-394", "Sector-395", "Sector-396", "Sector-397", "Sector-398", "Sector-399", "Sector-400", "Sector-401", "Sector-402", "Sector-403", "Sector-404", "Sector-405", "Sector-406", "Sector-407", "Sector-408", "Sector-409", "Sector-410", "Sector-411", "Sector-412", "Sector-413", "Sector-414", "Sector-415", "Sector-416", "Sector-417", "Sector-418", "Sector-419", "Sector-420", "Sector-421", "Sector-422", "Sector-423", "Sector-424", "Sector-425", "Sector-426", "Sector-427", "Sector-428", "Sector-429", "Sector-430", "Sector-431", "Sector-432", "Sector-433", "Sector-434", "Sector-435", "Sector-436", "Sector-437", "Sector-438", "Sector-439", "Sector-440", "Sector-441", "Sector-442", "Sector-443", "Sector-444", "Sector-445", "Sector-446", "Sector-447", "Sector-448", "Sector-449", "Sector-450", "Sector-451", "Sector-452", "Sector-453", "Sector-454", "Sector-455", "Sector-456", "Sector-457", "Sector-458", "Sector-459", "Sector-460", "Sector-461", "Sector-462", "Sector-463", "Sector-464", "Sector-465", "Sector-466", "Sector-467", "Sector-468", "Sector-469", "Sector-470", "Sector-471", "Sector-472", "Sector-473", "Sector-474", "Sector-475", "Sector-476", "Sector-477", "Sector-478", "Sector-479", "Sector-480", "Sector-481", "Sector-482", "Sector-483", "Sector-484", "Sector-485", "Sector-486", "Sector-487", "Sector-488", "Sector-489", "Sector-490", "Sector-491", "Sector-492", "Sector-493", "Sector-494", "Sector-495", "Sector-496", "Sector-497", "Sector-498", "Sector-499", "Sector-500", "Sector-501", "Sector-502", "Sector-503", "Sector-504", "Sector-505", "Sector-506", "Sector-507", "Sector-508", "Sector-509", "Sector-510", "Sector-511", "Sector-512", "Sector-513", "Sector-514", "Sector-515", "Sector-516", "Sector-517", "Sector-518", "Sector-519", "Sector-520", "Sector-521", "Sector-522", "Sector-523", "Sector-524", "Sector-525", "Sector-526", "Sector-527", "Sector-528", "Sector-529", "Sector-530", "Sector-531", "Sector-532", "Sector-533", "Sector-534", "Sector-535", "Sector-536", "Sector-537", "Sector-538", "Sector-539", "Sector-540", "Sector-541", "Sector-542", "Sector-543", "Sector-544", "Sector-545", "Sector-546", "Sector-547", "Sector-548", "Sector-549", "Sector-550", "Sector-551", "Sector-552", "Sector-553", "Sector-554", "Sector-555", "Sector-556", "Sector-557", "Sector-558", "Sector-559", "Sector-560", "Sector-561", "Sector-562", "Sector-563", "Sector-564", "Sector-565", "Sector-566", "Sector-567", "Sector-568", "Sector-569", "Sector-570", "Sector-571", "Sector-572", "Sector-573", "Sector-574", "Sector-575", "Sector-576", "Sector-577", "Sector-578", "Sector-579", "Sector-580", "Sector-581", "Sector-582", "Sector-583", "Sector-584", "Sector-585", "Sector-586", "Sector-587", "Sector-588", "Sector-589", "Sector-590", "Sector-591", "Sector-592", "Sector-593", "Sector-594", "Sector-595", "Sector-596", "Sector-597", "Sector-598", "Sector-599", "Sector-600", "Sector-601", "Sector-602", "Sector-603", "Sector-604", "Sector-605", "Sector-606", "Sector-607", "Sector-608", "Sector-609", "Sector-610", "Sector-611", "Sector-612", "Sector-613", "Sector-614", "Sector-615", "Sector-616", "Sector-617", "Sector-618", "Sector-619", "Sector-620", "Sector-621", "Sector-622", "Sector-623", "Sector-624", "Sector-625", "Sector-626", "Sector-627", "Sector-628", "Sector-629", "Sector-630", "Sector-631", "Sector-632", "Sector-633", "Sector-634", "Sector-635", "Sector-636", "Sector-637", "Sector-638", "Sector-639", "Sector-640", "Sector-641", "Sector-642", "Sector-643", "Sector-644", "Sector-645", "Sector-646", "Sector-647", "Sector-648", "Sector-649", "Sector-650", "Sector-651", "Sector-652", "Sector-653", "Sector-654", "Sector-655", "Sector-656", "Sector-657", "Sector-658", "Sector-659", "Sector-660", "Sector-661", "Sector-662", "Sector-663", "Sector-664", "Sector-665", "Sector-666", "Sector-667", "Sector-668", "Sector-669", "Sector-670", "Sector-671", "Sector-672", "Sector-673", "Sector-674", "Sector-675", "Sector-676", "Sector-677", "Sector-678", "Sector-679", "Sector-680", "Sector-681", "Sector-682", "Sector-683", "Sector-684", "Sector-685", "Sector-686", "Sector-687", "Sector-688", "Sector-689", "Sector-690", "Sector-691", "Sector-692", "Sector-693", "Sector-694", "Sector-695", "Sector-696", "Sector-697", "Sector-698", "Sector-699", "Sector-700", "Sector-701", "Sector-702", "Sector-703", "Sector-704", "Sector-705", "Sector-706", "Sector-707", "Sector-708", "Sector-709", "Sector-710", "Sector-711", "Sector-712", "Sector-713", "Sector-714", "Sector-715", "Sector-716", "Sector-717", "Sector-718", "Sector-719", "Sector-720", "Sector-721", "Sector-722", "Sector-723", "Sector-724", "Sector-725", "Sector-726", "Sector-727", "Sector-728", "Sector-729", "Sector-730", "Sector-731", "Sector-732", "Sector-733", "Sector-734", "Sector-735", "Sector-736", "Sector-737", "Sector-738", "Sector", ]
        }, {
            name: "Panchkula",
            areas: ["Sector 1"]
        }, ]
    }, {
        state: "Dadra and Nagar Haveli and Daman and Diu",
        cities: [{
            name: "Dadra",
            areas: ["Dadra", "Silvassa", "Khanvel", "Chandigarh",
                "Daman", "Jafrabad",
            ]
        }, {
            name: "Silvassa",
            areas: ["Silvassa", "Dadra", "Nagar Haveli", "Daman", "Diu", ]
        }, {
            name: "NagarHaveli",
            areas: ["Athwalines", "Bombay Point", "Chorao", "Corlim", "Curchorem", "Dabolim", "Dongorim", "Guirim", "Herold's Town", "Madkai", "Mardol", "Marmagao", "Mercurim", "Nagargao", "Naroa", "Neura", "Paroda", "Pomburpa-Fatorda", "Poinguinim", "Quela", "Quepem", "Sanguem", "Seraulim", "Siolim", "Usgao", "Valpoi", "Varca", "Vasco da Gama", "Zuari Nagar", ]
        }, {
            name: "Diu",
            areas: ["Diu", "Daman", "Diu-Fudam", "Nani-Dam", "Moti-Dam", "Vanakbara", "Jalia", "Chandranagar", "Bamanwas", "Ghoghla", "Simar", "Jafrabad", "Bhenslore", "Dhamri", "Kadaiya", "Fudam", ]
        }, {
            name: "Daman",
            areas: ["Daman", "Diu", "Moti Daman", "Nani Daman", "Jampore Beach", "Devka Beach", "Gomtimata Beach", "Mirasol Lake Garden", "Satthva Gufa", "Daman Ganga Tourist Complex", "Bhagwan Mahavir Sanctuary and Mollem National Park", "Fort of Moti Daman", "Fort of Nani Daman", "Daman Freedom Movement Memorial", "Daman Science Centre", "Mirasol Lake", ]
        }, ]
    }, {
        state: "Lakshadweep",
        cities: [{
            name: "Kavaratti",
            areas: ["Kavaratti", "Minicoy", "Amini", "Andrott", "Agatti", "Kalpeni", "Kiltan", "Minicoy", ]
        }, {
            name: "Agatti",
            areas: ["Agatti", "Bangaram", "Chetlat", "Kadmat", "Kavaratti", "Minicoy", ]
        }, {
            name: "Minicoy",
            areas: ["Kavaratti", "Agatti", "Minicoy", ]
        }, {
            name: "Bangaram",
            areas: ["Kavaratti", "Minicoy", "Andrott", "Agatti", "Amini", "Bitra", "Chetlat", "Kadmat", "Kalpeni", "Kiltan", ]
        }, {
            name: "Thinnakara",
            areas: ["Kavaratti", "Minicoy", "Andrott", "Agatti", "Amini", "Bitra", "Chetlat", "Kadmat", "Kalpeni", "Kiltan", "Minicoy", "Pitti", ]
        }, {
            name: "Pitti",
            areas: ["Kavaratti", "Minicoy", "Agatti", "Bangaram", "Kadmat", "Amini", "Kiltan", "Chetlat", "Bitra", "Andrott", "Minicoy", ]
        }, {
            name: "Cheriyam",
            areas: ["Kavaratti", "Minicoy", "Agatti", "Amini", "Andrott", "Bitra", "Chetlat", "Kadmat", "Kalpeni", "Kiltan", "Minicoy", ]
        }, {
            name: "Kiltan",
            areas: ["Kiltan", "Minicoy", "Amini", "Andrott", "Agatti", "Bangaram", "Bitra", "Chetlat", "Kadmat", "Kavaratti", "Minicoy", "Pitti", ]
        }, {
            name: "Kalpeni",
            areas: ["Kavaratti", "Minicoy", "Agatti", "Amini", "Andrott", "Bitra", "Chetlat", "Kadmat", "Kalpeni", "Kiltan", "Minicoy", ]
        }, {
            name: "Andrott",
            areas: ["Kadmat", "Amini", "Bitra", "Chetlat", "Kiltan", "Minicoy", ]
        }, {
            name: "Amini",
            areas: ["Kavaratti", "Minicoy", "Andrott", "Agatti", "Bitra", "Chetlat", "Kadmat", "Kiltan", "Minicoy", ]
        }, {
            name: "Bitra",
            areas: ["Kavaratti", "Minicoy", "Agatti", "Amini", "Andrott", "Kalpeni", "Kiltan", "Minicoy", ]
        }, {
            name: "Chetlat",
            areas: ["Kavaratti", "Minicoy", "Agatti", "Amini", "Andrott", "Bitra", "Chetlat", "Kadmat", "Kalpeni", "Kiltan", "Minicoy", ]
        }, {
            name: "Kadmat",
            areas: ["Kadmat", "Kiltan", "Minicoy", ]
        }, {
            name: "Kavaratti",
            areas: ["Kavaratti", "Andrott", "Minicoy", "Agatti", "Amini", "Bitra", "Chetlat", "Kadmat", "Kalpeni", "Kiltan", "Minicoy", ]
        }, {
            name: "Minicoy",
            areas: ["Kavaratti", "Agatti", "Minicoy", ]
        }, ]
    }, {
        state: "Delhi",
        cities: [{
            name: "NewDelhi",
            areas: ["New Delhi", "Delhi", "India", ]
        }, {
            name: "Delhi",
            areas: ["Adarsh Nagar", "Ajmeri Gate", "Amar Colony", "Anand Parbat", "Anand Vihar", "Arjun Nagar", "Ashok Nagar", "Ashok Vihar", "Azadpur", "Bali Nagar", "Bangla Sahib Marg", "Barakhamba", "Barakhamba Road", "Bawana", "Bhalswa", "Bhanot", "Bharat Nagar", "Bhikaji Cama Place", "Birla Nagar", "Budh Vihar", "Chanakyapuri", "Chandni Chowk", "Chawri Bazar", "Chhatarpur", "Connaught Place", "Daryaganj", "Delhi Cantonment", "Delhi Gate", "Dwarka", "Dwarka Mor", "Dwarka Sector 1", "Dwarka Sector 10", "Dwarka Sector 11", "Dwarka Sector 12", "Dwarka Sector 13", "Dwarka Sector 14", "Dwarka Sector 15", "Dwarka Sector 16", "Dwarka Sector 17", "Dwarka Sector 18", "Dwarka Sector 19", "Dwarka Sector 2", "Dwarka Sector 20", "Dwarka Sector 21", "Dwarka Sector 22", "Dwarka Sector 23", "Dwarka Sector 24", "Dwarka Sector 25", "Dwarka Sector 26", "Dwarka Sector 27", "Dwarka Sector 28", "Dwarka Sector 29", "Dwarka Sector 3", "Dwarka Sector 30", "Dwarka Sector 31", "Dwarka Sector 32", "Dwarka Sector 33", "Dwarka Sector 34", "Dwarka Sector 35", "Dwarka Sector 36", "Dwarka Sector 37", "Dwarka Sector 4", "Dwarka Sector 5", "Dwarka Sector 6", "Dwarka Sector 7", "Dwarka Sector 8", "Dwarka Sector 9", "Gandhi Nagar", "Ganesh Nagar", "Geeta Colony", "Ghitorni", "Gole Market", "Greater Kailash", "Greater Kailash 1", "Greater Kailash 2", "Green Park", "GTB Nagar", "Gulabi Bagh", "Hauz Khas", "Inder Puri", "Indraprastha", "Ishwar Nagar", "Jaffrabad", "Jahangir Puri", "Jaitpur", "Janakpuri", "Jangpura", "Jhandewalan", "Jharoda Majra Burari", "Jor Bagh", "Kalkaji", "Kamla Nagar", "Kanti Nagar", "Karampura", "Karol Bagh", "Keshav Puram", "Khan Market", "Kirti Nagar", "Kohat Enclave", "Kotwali", "Krishna Nagar", "Lajpat Nagar", "Laxmi Nagar", "Lodhi Colony", "Madangir", "Madhu Vihar", "Mahabir Nagar", "Mahipalpur", "Malviya Nagar", "Mangol Puri", "Mansarover Garden", "Mayapuri", "Mehrauli", "Model Town", "Moti Nagar", "Najafgarh", "Nangloi", "Nanakpura", "Naraina", "Nariana Industrial Area", "Nehru Place", "Netaji Subhash Place", "New Friends Colony", "New Rajendra Nagar", "Niti Bagh", "Okhla", "Old Rajendra Nagar", "Pahar Ganj", "Palam", "Palam Colony", "Panchsheel Enclave", "Pandav Nagar", "Paschim Vihar", "Patel Nagar", "Patel Nagar South", "Patel Nagar West", "Pitampura", "Pratap Nagar", "Preet Vihar", "Punjabi Bagh", "R.K. Puram", "Rajinder Nagar", "Rajouri Garden", "Ramesh Nagar", "Rana Pratap Bagh", "Rohini", "Rohini Sector 1", "Rohini Sector 10", "Rohini Sector 11", "Rohini Sector 12", "Rohini Sector 13", "Rohini Sector 14", "Rohini Sector 15", "Rohini Sector 16", "Rohini Sector 17", "Rohini Sector 18", "Rohini Sector 19", "Rohini Sector 2", "Rohini Sector 20", "Rohini Sector 21", "Rohini Sector 22", "Rohini Sector 23", "Rohini Sector 24", "Rohini Sector 25", "Rohini Sector 26", "Rohini Sector 27", "Rohini Sector 28", "Rohini Sector 29", "Rohini Sector 3", "Rohini Sector 30", "Rohini Sector 31", "Rohini Sector 32", "Rohini Sector 33", "Rohini Sector 34", "Rohini Sector 35", "Rohini Sector 36", "Rohini Sector 37", "Rohini Sector 4", "Rohini Sector 5", "Rohini Sector 6", "Rohini Sector 7", "Rohini Sector 8", "Rohini Sector 9", "Rohtak Road", "Safdarjung", "Sagarpur", "Sagarpur West", "Samaypur", "Sarita Vihar", "Satya Niketan", "Seelampur", "Shadipur", "Shakur Basti", "Shalimar Bagh", "Shanti Nagar", "Shastri Nagar", "Shivaji Park", "Shivaji Place", "Shivpuri", "Shyam Nagar", "Subhash Place", "Sunder Nagar", "Tagore Garden", "Taimoor Nagar", "Tilak Nagar", "Tri Nagar", "Tulsi Nagar", "Udyog Nagar", "Uttam Nagar", "Vaishali", "Vikas Puri", "Vivek Vihar", "Wazirabad", "West Patel Nagar", "Yamuna Vihar", ]
        }, {
            name: "NorthDelhi",
            areas: ["Chandni Chowk", "Civil Lines", "Connaught Place", "Daryaganj", "Delhi Cantonment", "Hauz Khas", "Karol Bagh", "Kashmiri Gate", "Laxmi Nagar", "Mahipalpur", "Model Town", "Najafgarh", "New Friends Colony", "North Avenue", "North Campus", "Patel Nagar", "Patel Nagar South", "Pitampura", "Pusa Road", "Rajendra Nagar", "Rohini", "Shalimar Bagh", "Shastri Nagar", "Shivaji Park", "Tagore Garden", "Tilak Nagar", "Vikas Puri", "Vivek Vihar", ]
        }, {
            name: "SouthDelhi",
            areas: ["Lajpat Nagar", "Greater Kailash", "Kalkaji", "Malviya Nagar", "Hauz Khas", "Green Park", "Safdarjung", "Vasant Kunj", "R.K. Puram", "Chanakyapuri", "Mehrauli", "Chittaranjan Park", "Defence Colony", "Gulmohar Park", "Jangpura", "Lodi Colony", "New Friends Colony", "Panchsheel Park", "Saket", "Anand Niketan", "Hauz Rani", "Munirka", "Paschim Vihar", "Rajouri Garden", "Tagore Garden", "Tilak Nagar", "Vikaspuri", "West Patel Nagar", ]
        }, {
            name: "EastDelhi",
            areas: ["Anand Vihar", "Bhajanpura", "Dilshad Garden", "Gandhi Nagar", "Gokalpur", "Jyoti Nagar", "Karawal Nagar", "Khajuri Khas", "Laxmi Nagar", "Mandawali", "New Usmanpur", "Nand Nagri", "Shahdara", "Shakarpur", "Sonia Vihar", "Vivek Vihar", ]
        }, {
            name: "WestDelhi",
            areas: ["Moti Nagar", "Rajouri Garden", "Patel Nagar", "Shadipur", "Punjabi Bagh", "Paschim Vihar", "Dwarka", "Vikaspuri", "Janakpuri", "Tilak Nagar", "Subhash Nagar", "Tagore Garden", "Raja Garden", "Kirti Nagar", "Ramesh Nagar", "Moti Bagh", "Safdarjung", "Vasant Kunj", "Mahipalpur", "Mehrauli", "Chhatarpur", "Sultanpur", "Ghitorni", "Ambedkar Nagar", "Hauz Khas", "Malviya Nagar", "Saket", "Paharganj", "Karol Bagh", "Connaught Place", "New Delhi", "Civil Lines", "Chandni Chowk", "North Avenue", "South Avenue", "East of Kailash", "Lajpat Nagar", "Greater Kailash", "Chittaranjan Park", "Nehru Place", "Kalkaji", "Govindpuri", "Okhla", "Tughlakabad", "Badarpur", "Lodhi Colony", "Mathura Road", "Bhikaji Cama Place", "Sarojini Nagar", "INA", "AIIMS", "Green Park", "Jangpura", "Laxmi Nagar", "Yamuna Vihar", "Gokalpur", "Welcome Colony", "Jaffrabad", "Maujpur", "Gokulpuri", "Johri Enclave", "Shiv Vihar", "Inderlok", "Kanhiya Nagar", "Ashok Vihar", "Model Town", "GTB Nagar", "Vijay Nagar", "Adarsh Nagar", "Azadpur", "Shalimar Bagh", "Rohini", "Pitampura", "Madhuban Chowk", "Bawana", "Narela", "Alipur", "Samaypur Badli", ]
        }, {
            name: "CentralDelhi",
            areas: ["Aravali", "Bhalswa", "Civil Lines", "Daryaganj", "Delhi Cantonment", "Delhi Gate", "Dwarka", "Gandhi Nagar", "Gole Market", "Golf Links", "Greater Kailash", "Green Park", "Hauz Khas", "Inderlok", "Indraprastha", "ITO", "Jahangirpuri", "Jhandewalan", "Karol Bagh", "Khan Market", "Kingsway Camp", "Kohat Enclave", "Lajpat Nagar", "Mahipalpur", "Malviya Nagar", "Mandi House", "Mehrauli", "Model Town", "Moti Nagar", "Nangloi", "Narela", "Nehru Place", "New Friends Colony", "Okhla", "Old Rajendra Nagar", "Patel Nagar", "Patel Nagar South", "Patel Nagar West", "Pitampura", "Pusa Road", "Rajendra Nagar", "Rajendra Place", "Ramesh Nagar", "Rana Pratap Bagh", "Rohini", "Safdarjung", "Sainik Farms", "Saket", "Sarai Rohilla", "Sarita Vihar", "Satya Niketan", "Seelampur", "Shadipur", "Subhash Place", "Tagore Garden", "Tilak Nagar", "Vikas Puri", "Vivek Vihar", "Wazirabad", ]
        }, {
            name: "OldDelhi",
            areas: ["Chandni Chowk", "Daryaganj", "Delhi Cantonment", "Jama Masjid", "Karol Bagh", "Kotwali", "New Delhi", "Paharganj", "Patel Nagar", "Sadar Bazar", "Shahadra", "Shalimar Bagh", "Vivek Vihar", ]
        }, ]
    }, {
        state: "Puducherry",
        cities: [{
            name: "Puducherry",
            areas: ["Ariyankuppam", "Bahour", "Bussy", "Cadoudal", "Chalokly", "Grand Anse", "Kammapalayam", "Karaikal", "Kottucherry", "Lawspet", "Mahe", "Mangalam", "Nedungadu", "Neravy-T.R. Pattinam", "Nettapakkam", "Oussudu", "Ozhukarai", "Plassey", "Reddiyarpalayam", "Thirunallar", "Thiruvakkarai", "Thiruvanchiyur", "Thiruvannamalai", "T.R. Pattinam", "Villianur", ]
        }, {
            name: "Karaikal",
            areas: ["Karaikal Port", "Karaikal Beach", "Karaikal Ammapet", "Karaikal New Bus Stand", "Karaikal Old Bus Stand", "Karaikal Market", "Karaikal South", "Karaikal North", "Thirunallar", "Neravy", "Tirumalarajanpettai", "Thirunallar", "Thiruppanthuruthi", "Thirumarugal", "Nedungadu", "Thirupuvanam", "Thirunavatkulam", "Thiruppattur", "Valavanur", "Vilar", "Virapandi", "Virapattinam", "Periya", "Melakkaraipattinam", "Thanjai Nagar", "Thiruparaithurai", "Thirukattupalli", "Thirunageswaram", "Thiruvakkarai", "Thiruppanandal", "Thirumullaivasal", "Thiruppanandhal", "Thirukannapuram", "Thiruvathigai", "Thirumalairayanpattinam", "Thirumalairayanpattinam", "Thiruvakkarai", "Thirukannapuram", "Thirunageswaram", "Thiruppanandal", "Thiruppanandhal", "Thirumullaivasal", "Thirumalairayanpattinam", "Thirumalairayanpattinam", ]
        }, {
            name: "Mah",
            areas: ["Kottucherry", "Thirubuvanai", "Ozhukarai", "Villianur", "Bahour", "Mannadipet", "Muthialpet", "Nettapakkam", "Sedarapet", "Ariyankuppam", "Black Town", "Grand Bazar", "Lawspet", "Mudaliarpet", "Reddiyarpalayam", "Thattanchavadi", "ECR", ]
        }, {
            name: "Yanam",
            areas: ["Yanam", "Mangalam", "Thattanchavadi", "Reddiarpalayam", "Lawspet", "Nellikuppam", "Kurumbapet", "Mudaliarpet", "Oulgaret", "Ariyankuppam", "Villianur", "Ozhukarai", "Kandamangalam", "Bahour", "Marakkanam", "Nettapakkam", "Mannadipet", "Embalom", "Kamakshi Nagar", "Moolakulam", "Reddiyarpalayam", "Periyakalapet", "Perumbakkam", "Sith", "Madambakkam", "Medavakkam", "Selaiyur", "Tambaram", "St. Thomas Mount", "Pallavaram", "Chromepet", "Alandur", "Adambakkam", "Camp Road", "St. Thomas Mount Cantonment", "Ambattur", "Avadi", "Thirumullaivoyal", "Poonamallee", "Valasaravakkam", "Porur", "Madhavaram", "Ambattur Industrial Estate", "Anna Nagar", "Villivakkam", "Vyasarpadi", "Jafferkhanpet", "Virugambakkam", "Ashok Nagar", "K.K. Nagar", "West Mambalam", "Kodambakkam", "Saidapet", "Teynampet", "Mylapore", "Royapettah", "Mandaveli", "R. A. Puram", "Alwarpet", "Egmore", "Nungambakkam", "T. Nagar", "Adyar", "Kotturpuram", "Kottur", "Thiruvanmiyur", "Madipakkam", "Pallikaranai", "Selaiyur", "Sembakkam", "Mugalivakkam", "Madambakkam", "Keelkattalai", "Anakaputhur", "Chrompet", "Pallavaram", "St. Thomas Mount", "Tambaram", "Madipakkam", "Pallikaranai", "Sembakkam", "Mugalivakkam", "Madambakkam", "Keelkattalai", "Anakaputhur", ]
        }, {
            name: "Karaikal 2",
            areas: ["Karaikal North", "Karaikal South", "Karaikal West", "Neravy", "Tirunallar", "Tirunallaru", "Nedungadu", "Thirunallar", "Thirunallaru", "Thirumarugal", "Thirumarugan", "Thirumarugul", "Thirumarunai", "Thirumarunu", "Thirumalarai", "Thirumalaraiyur", "Thirumalarpet", "Thirumalpadi", "Thirumalpur", "Thirumalpuram", "Thirumalwadi", "Thirunallar"]
        }, ]
    },
]

export default data;