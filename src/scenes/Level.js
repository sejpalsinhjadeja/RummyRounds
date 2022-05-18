
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		const params = new URLSearchParams(location.search);
		this.eGameType = params.get('eGameType');
		this.eRummyType = params.get('eRummyType');
		this.nMaxPlayer = params.get('nMaxPlayer');
		this.nTableFee = params.get('nTableFee');
		this.nTablePoint = params.get('nTablePoint');
		this.sName = params.get('sName');
		this.sTableId = params.get('sTableId');
		this.sAuthToken = params.get('sAuthToken');
		this.nChips = params.get('nChips');
		console.log("Chips",this.chips);
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// gametable_container
		const gametable_container = this.add.container(1025, 580);

		// tablebg
		const tablebg = this.add.image(0, 0, "tablebg");
		tablebg.scaleX = 1.45;
		tablebg.scaleY = 1.3;
		gametable_container.add(tablebg);

		// table
		const table = this.add.image(0, 30, "Table");
		table.scaleX = 1.4;
		table.scaleY = 1.4;
		gametable_container.add(table);

		// chips_container
		const chips_container = this.add.container(-896, -500);
		gametable_container.add(chips_container);

		// chipsBox_chipsCont
		const chipsBox_chipsCont = this.add.image(0, 0, "ChipsBox");
		chipsBox_chipsCont.scaleY = 1.5;
		chips_container.add(chipsBox_chipsCont);

		// chips
		const chips = this.add.image(-49, -1.999994834264328, "Chips");
		chips_container.add(chips);

		// chips_text
		const chips_text = this.add.text(-14, 0, "", {});
		chips_text.setOrigin(0, 0.5);
		chips_text.text = "2500";
		chips_text.setStyle({ "fontFamily": "RalewayMedium", "fontSize": "35px" });
		chips_container.add(chips_text);

		// gaminfo_header_container
		const gaminfo_header_container = this.add.container(0, -500);
		gametable_container.add(gaminfo_header_container);

		// settings_btn
		const settings_btn = this.add.image(830, 0, "Settings");
		settings_btn.scaleX = 1.3;
		settings_btn.scaleY = 1.4;
		gaminfo_header_container.add(settings_btn);

		// exit_btn
		const exit_btn = this.add.image(940, 0, "Exit");
		exit_btn.scaleX = 1.3;
		exit_btn.scaleY = 1.3;
		gaminfo_header_container.add(exit_btn);

		// headerTableInfo
		const headerTableInfo = this.add.container(25, -41);
		gaminfo_header_container.add(headerTableInfo);

		// tableInfo_gameinfoCont
		const tableInfo_gameinfoCont = this.add.image(0, 2, "Table Detail Box");
		tableInfo_gameinfoCont.scaleX = 1.5;
		tableInfo_gameinfoCont.scaleY = 1.7;
		headerTableInfo.add(tableInfo_gameinfoCont);

		// tableChips_text
		const tableChips_text = this.add.image(278.5114132172739, 0, "Chips");
		headerTableInfo.add(tableChips_text);

		// tablefees_text
		const tablefees_text = this.add.text(328.5114132172739, 2, "", {});
		tablefees_text.setOrigin(0, 0.5);
		tablefees_text.text = "2500";
		tablefees_text.setStyle({ "fontFamily": "RalewayMedium", "fontSize": "35px" });
		headerTableInfo.add(tablefees_text);

		// tableid_text
		const tableid_text = this.add.text(-272.4885867827261, 2, "", {});
		tableid_text.setOrigin(1, 0.5);
		tableid_text.text = "2500";
		tableid_text.setStyle({ "fontFamily": "RalewayMedium", "fontSize": "35px" });
		headerTableInfo.add(tableid_text);

		// tabletype_text
		const tabletype_text = this.add.text(-141.4885867827261, 2, "", {});
		tabletype_text.setOrigin(0.5, 0.5);
		tabletype_text.text = "2500";
		tabletype_text.setStyle({ "fontFamily": "RalewayMedium", "fontSize": "35px" });
		headerTableInfo.add(tabletype_text);

		// tabledeck_text
		const tabledeck_text = this.add.text(-24.488586782726088, 2, "", {});
		tabledeck_text.setOrigin(0.5, 0.5);
		tabledeck_text.text = "2500";
		tabledeck_text.setStyle({ "fontFamily": "RalewayMedium", "fontSize": "35px" });
		headerTableInfo.add(tabledeck_text);

		// tableround_text
		const tableround_text = this.add.text(103.51141321727391, 2, "", {});
		tableround_text.setOrigin(0.5, 0.5);
		tableround_text.text = "2500";
		tableround_text.setStyle({ "fontFamily": "RalewayMedium", "fontSize": "35px" });
		headerTableInfo.add(tableround_text);

		// playerHolders
		const playerHolders = this.add.container(220, 240);

		// es_0
		const es_0 = new EmptySeat(this, 830, 730);
		es_0.visible = false;
		playerHolders.add(es_0);

		// es_1
		const es_1 = new EmptySeat(this, 0, 120);
		es_1.visible = false;
		playerHolders.add(es_1);

		// es_2
		const es_2 = new EmptySeat(this, 380, -24);
		es_2.visible = false;
		playerHolders.add(es_2);

		// es_3
		const es_3 = new EmptySeat(this, 830, -24);
		es_3.visible = true;
		playerHolders.add(es_3);

		// es_4
		const es_4 = new EmptySeat(this, 1280, -24);
		es_4.visible = false;
		playerHolders.add(es_4);

		// es_5
		const es_5 = new EmptySeat(this, 1620, 120);
		es_5.visible = false;
		playerHolders.add(es_5);

		// highcard_0
		const highcard_0 = new Card(this, 830, 500);
		highcard_0.visible = false;
		playerHolders.add(highcard_0);

		// highcard_1
		const highcard_1 = new Card(this, 6, 340);
		highcard_1.visible = false;
		playerHolders.add(highcard_1);

		// highcard_2
		const highcard_2 = new Card(this, 380, 195);
		highcard_2.visible = false;
		playerHolders.add(highcard_2);

		// highcard_3
		const highcard_3 = new Card(this, 830, 195);
		highcard_3.visible = false;
		playerHolders.add(highcard_3);

		// highcard_4
		const highcard_4 = new Card(this, 1280, 195);
		highcard_4.visible = false;
		playerHolders.add(highcard_4);

		// highcard_5
		const highcard_5 = new Card(this, 1615, 340);
		highcard_5.visible = false;
		playerHolders.add(highcard_5);

		// player_0
		const player_0 = new Player(this, 830, 730);
		player_0.visible = false;
		playerHolders.add(player_0);

		// player_1
		const player_1 = new Player(this, 0, 120);
		player_1.visible = false;
		playerHolders.add(player_1);

		// player_2
		const player_2 = new Player(this, 380, -24);
		player_2.visible = false;
		playerHolders.add(player_2);

		// player_3
		const player_3 = new Player(this, 830, -24);
		player_3.visible = false;
		playerHolders.add(player_3);

		// player_4
		const player_4 = new Player(this, 1280, -24);
		player_4.visible = false;
		playerHolders.add(player_4);

		// player_5
		const player_5 = new Player(this, 1610, 120);
		player_5.visible = false;
		playerHolders.add(player_5);

		// tableMsg_cont
		const tableMsg_cont = this.add.container(1040, 624);

		// tableMsgBg
		const tableMsgBg = this.add.image(0, 0, "msg");
		tableMsgBg.scaleX = 1.5;
		tableMsg_cont.add(tableMsgBg);

		// tableMsg_text
		const tableMsg_text = this.add.text(0, 0, "", {});
		tableMsg_text.setOrigin(0.5, 0.5);
		tableMsg_text.text = "Table msg";
		tableMsg_text.setStyle({ "fontFamily": "RalewayMedium", "fontSize": "25px" });
		tableMsg_cont.add(tableMsg_text);

		// tableCard_cont
		const tableCard_cont = this.add.container(772, 450);
		tableCard_cont.visible = false;

		// openDeck_cont
		const openDeck_cont = this.add.container(278, 0);
		tableCard_cont.add(openDeck_cont);

		// openDeckBg
		const openDeckBg = this.add.image(0, 0, "Finish slot");
		openDeckBg.scaleX = 1.6;
		openDeckBg.scaleY = 1.6;
		openDeck_cont.add(openDeckBg);

		// openDeckTextBg
		const openDeckTextBg = this.add.rectangle(0, 114, 128, 128);
		openDeckTextBg.scaleY = 0.35;
		openDeckTextBg.isFilled = true;
		openDeckTextBg.fillColor = 1974340;
		openDeck_cont.add(openDeckTextBg);

		// openDeckText
		const openDeckText = this.add.text(0, 115, "", {});
		openDeckText.setOrigin(0.5, 0.5);
		openDeckText.text = "Open Deck";
		openDeckText.setStyle({ "align": "center", "fontFamily": "RalewayMedium", "fontSize": "20px" });
		openDeck_cont.add(openDeckText);

		// openDeckCards_btn
		const openDeckCards_btn = this.add.image(55, -35, "Open Deck");
		openDeckCards_btn.scaleX = 1.3;
		openDeckCards_btn.scaleY = 1.3;
		openDeckCards_btn.setOrigin(0, 0.5);
		openDeck_cont.add(openDeckCards_btn);

		// openDeckCard
		const openDeckCard = new Card(this, 0, 0);
		openDeckCard.visible = false;
		openDeck_cont.add(openDeckCard);

		// closeDeck_cont
		const closeDeck_cont = this.add.container(0, 0);
		tableCard_cont.add(closeDeck_cont);

		// closeDeckBg
		const closeDeckBg = this.add.image(0, 0, "Finish slot");
		closeDeckBg.scaleX = 1.6;
		closeDeckBg.scaleY = 1.6;
		closeDeck_cont.add(closeDeckBg);

		// gameJoker_card
		const gameJoker_card = new Card(this, -65, 4);
		gameJoker_card.angle = -90;
		closeDeck_cont.add(gameJoker_card);

		// closeDeck_card
		const closeDeck_card = this.add.image(0, 0, "cardBack");
		closeDeck_card.scaleX = 1.5;
		closeDeck_card.scaleY = 1.5;
		closeDeck_cont.add(closeDeck_card);

		// closeDeckTextBg
		const closeDeckTextBg = this.add.rectangle(0, 115, 128, 128);
		closeDeckTextBg.scaleY = 0.35;
		closeDeckTextBg.isFilled = true;
		closeDeckTextBg.fillColor = 1974340;
		closeDeck_cont.add(closeDeckTextBg);

		// closeDeckText
		const closeDeckText = this.add.text(0, 115, "", {});
		closeDeckText.setOrigin(0.5, 0.5);
		closeDeckText.text = "Open Deck";
		closeDeckText.setStyle({ "align": "center", "fontFamily": "RalewayMedium", "fontSize": "20px" });
		closeDeck_cont.add(closeDeckText);

		// finishSlot_cont
		const finishSlot_cont = this.add.container(696, 6);
		tableCard_cont.add(finishSlot_cont);

		// finishSlot
		const finishSlot = this.add.image(0, 0, "Finish slot");
		finishSlot.scaleX = 1.5;
		finishSlot.scaleY = 1.5;
		finishSlot_cont.add(finishSlot);

		// finishSlotText
		const finishSlotText = this.add.text(0, 0, "", {});
		finishSlotText.setOrigin(0.5, 0.5);
		finishSlotText.text = "FINISH\nSLOT";
		finishSlotText.setStyle({ "align": "center", "fontFamily": "RalewayMedium", "fontSize": "25px" });
		finishSlot_cont.add(finishSlotText);

		// userHand_cont
		const userHand_cont = this.add.container(278, 310);
		tableCard_cont.add(userHand_cont);

		this.es_0 = es_0;
		this.es_1 = es_1;
		this.es_2 = es_2;
		this.es_3 = es_3;
		this.es_4 = es_4;
		this.es_5 = es_5;
		this.highcard_0 = highcard_0;
		this.highcard_1 = highcard_1;
		this.highcard_2 = highcard_2;
		this.highcard_3 = highcard_3;
		this.highcard_4 = highcard_4;
		this.highcard_5 = highcard_5;
		this.player_0 = player_0;
		this.player_1 = player_1;
		this.player_2 = player_2;
		this.player_3 = player_3;
		this.player_4 = player_4;
		this.player_5 = player_5;
		this.tableCard_cont = tableCard_cont;
		this.openDeckCard = openDeckCard;
		this.gameJoker_card = gameJoker_card;
		this.userHand_cont = userHand_cont;

		this.events.emit("scene-awake");
	}

	/** @type {EmptySeat} */
	es_0;
	/** @type {EmptySeat} */
	es_1;
	/** @type {EmptySeat} */
	es_2;
	/** @type {EmptySeat} */
	es_3;
	/** @type {EmptySeat} */
	es_4;
	/** @type {EmptySeat} */
	es_5;
	/** @type {Card} */
	highcard_0;
	/** @type {Card} */
	highcard_1;
	/** @type {Card} */
	highcard_2;
	/** @type {Card} */
	highcard_3;
	/** @type {Card} */
	highcard_4;
	/** @type {Card} */
	highcard_5;
	/** @type {Player} */
	player_0;
	/** @type {Player} */
	player_1;
	/** @type {Player} */
	player_2;
	/** @type {Player} */
	player_3;
	/** @type {Player} */
	player_4;
	/** @type {Player} */
	player_5;
	/** @type {Phaser.GameObjects.Container} */
	tableCard_cont;
	/** @type {Card} */
	openDeckCard;
	/** @type {Card} */
	gameJoker_card;
	/** @type {Phaser.GameObjects.Container} */
	userHand_cont;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
		this.isFirstHand = false;
		this.oPlayerManager = new PlayerManager(this);
		this.oUserHand = new UserHand(this);
		this.oSocketHandler = new SocketHandler(this);

		this.setCardDragDropOprations();
	}

	setCardDragDropOprations(){
		this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        	gameObject.x = dragX;
        	gameObject.y = dragY;
    	});
		this.input.on('dragend', function (pointer, gameObject, dragX, dragY) {
        	gameObject.x = dragX;
        	gameObject.y = dragY;
			gameObject.dragendOprations();
    	});
	}

	setWildJokerData(oData){
		this.isFirstHand = true;
		this.oPlayerManager.hideHighCard(oData);
        this.tableCard_cont.visible = true;
        this.gameJoker_card.setWildJokerCardData(oData);
	}

	reInitAllData(){
		this.isFirstHand = false;
	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
