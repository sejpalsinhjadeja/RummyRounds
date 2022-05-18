
// You can write more code here

/* START OF COMPILED CODE */

class Card extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -28);

		// highlight
		const highlight = scene.add.image(0, 0, "frontCard");
		highlight.scaleX = 1.05;
		highlight.scaleY = 1.13;
		highlight.visible = false;
		highlight.tintFill = true;
		highlight.tintTopLeft = 1438464;
		highlight.tintTopRight = 1438464;
		highlight.tintBottomLeft = 1438464;
		highlight.tintBottomRight = 1438464;
		this.add(highlight);

		// card_bg
		const card_bg = scene.add.image(0, 0, "frontCard");
		card_bg.scaleY = 1.1;
		this.add(card_bg);

		// icon_s
		const icon_s = scene.add.image(-34, -5, "s");
		icon_s.scaleX = 0.5;
		icon_s.scaleY = 0.5;
		this.add(icon_s);

		// icon_l
		const icon_l = scene.add.image(17, 40, "s");
		this.add(icon_l);

		// numberjoker
		const numberjoker = scene.add.image(-33, 31, "Joker Symbol");
		numberjoker.scaleX = 0.4;
		numberjoker.scaleY = 0.4;
		numberjoker.visible = false;
		this.add(numberjoker);

		// gamejoker
		const gamejoker = scene.add.image(20, -31, "Joker Symbol");
		gamejoker.scaleX = 0.65;
		gamejoker.scaleY = 0.65;
		gamejoker.angle = 90;
		gamejoker.visible = false;
		this.add(gamejoker);

		// fulljoker
		const fulljoker = scene.add.image(0, 0, "Joker Card");
		fulljoker.scaleY = 1.1;
		fulljoker.visible = false;
		this.add(fulljoker);

		// card_number_txt
		const card_number_txt = scene.add.text(-35, -49, "", {});
		card_number_txt.setOrigin(0.5, 0.5);
		card_number_txt.text = "5";
		card_number_txt.setStyle({ "color": "#000000ff", "fontFamily": "ANTONIO-REGULAR_0", "fontSize": "45px", "fontStyle": "bold" });
		this.add(card_number_txt);

		this.highlight = highlight;
		this.card_bg = card_bg;
		this.icon_s = icon_s;
		this.icon_l = icon_l;
		this.numberjoker = numberjoker;
		this.gamejoker = gamejoker;
		this.fulljoker = fulljoker;
		this.card_number_txt = card_number_txt;

		/* START-USER-CTR-CODE */
		this.oSceneObj = scene;
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	highlight;
	/** @type {Phaser.GameObjects.Image} */
	card_bg;
	/** @type {Phaser.GameObjects.Image} */
	icon_s;
	/** @type {Phaser.GameObjects.Image} */
	icon_l;
	/** @type {Phaser.GameObjects.Image} */
	numberjoker;
	/** @type {Phaser.GameObjects.Image} */
	gamejoker;
	/** @type {Phaser.GameObjects.Image} */
	fulljoker;
	/** @type {Phaser.GameObjects.Text} */
	card_number_txt;

	/* START-USER-CODE */

	setCardData(oCardData){

	}
	updateCardUi() {
		this.icon_s.setTexture(this.eSuit);
		this.icon_l.setTexture(this.eSuit);
		this.numberjoker.visible = this.isJoker;
		if (this.eSuit == 'd' || this.eSuit == 'h') {
			this.card_number_txt.setColor("#b30000");
		}else{
			this.card_number_txt.setColor("#000000");
		}
		switch (this.nLabel) {
			case 1:
				this.card_number_txt.text = "A";
				break;
			case 11:
				this.card_number_txt.text = "J";
				break;
			case 12:
				this.card_number_txt.text = "Q";
				break;
			case 13:
				this.card_number_txt.text = "K";
				break;
			case 14:
				this.fulljoker.visible = true;
				break;
			default:
				this.card_number_txt.text = this.nLabel;
				break;
		}
	}


	setHighCardData(oHighCardData){
		this.visible = true;
		this.eSuit = oHighCardData.eSuit;
		this.iUserId = oHighCardData.iUserId;
		this.isHigh = oHighCardData.isHigh;
		this.isJoker = oHighCardData.isJoker;
		this.isLow = oHighCardData.isLow;
		this.nLabel = oHighCardData.nLabel;
		this.nPriority = oHighCardData.nPriority;
		this.nValue = oHighCardData.nValue;
		this.id = oHighCardData.id;

		this.updateCardUi();

		this.highlight.visible = this.isHigh;
	}

	setWildJokerCardData(oHighCardData){
		this.eSuit = oHighCardData.eSuit;
		this.isJoker = oHighCardData.isJoker;
		this.nLabel = oHighCardData.nLabel;
		this.nValue = oHighCardData.nValue;
		this.gamejoker.visible = true;
		this.updateCardUi();
	}
	setCardDataForHandCard(oCardData){
		this.eSuit = oCardData.eSuit;
		this.isJoker = oCardData.isJoker;
		this.nLabel = oCardData.nLabel;
		this.nValue = oCardData.nValue;
		this.sId = oCardData._id;
		this.updateCardUi();
	}
	cardHighilght(isTrue){
		this.highlight.visible = isTrue;
	}
	setCardDragAndDrop(){
		this.setSize(this.card_bg.width, this.card_bg.height * (1.1));
		this.setInteractive();
		this.oSceneObj.input.setDraggable(this);
	}

	dragendOprations(){
		console.log(this.eSuit,this.nValue,this.nLabel);
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
