
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// playerbalance_text
		const playerbalance_text = scene.add.text(0, 30, "", {});
		playerbalance_text.setOrigin(0.5, 0.5);
		playerbalance_text.text = "New text";
		playerbalance_text.setStyle({ "align": "center", "fontFamily": "RalewayMedium", "fontSize": "30px", "fontStyle": "bold" });
		this.add(playerbalance_text);

		// playername_text
		const playername_text = scene.add.text(0, -20, "", {});
		playername_text.setOrigin(0.5, 0.5);
		playername_text.text = "New text";
		playername_text.setStyle({ "align": "center", "fontFamily": "RalewayMedium", "fontSize": "30px", "fontStyle": "bold" });
		this.add(playername_text);

		// profile_bg
		const profile_bg = scene.add.image(0, 0, "Profile Box");
		profile_bg.scaleX = 1.5;
		profile_bg.scaleY = 1.5;
		this.add(profile_bg);

		// status_text
		const status_text = scene.add.text(0, 44, "", {});
		status_text.setOrigin(0.5, 0.5);
		status_text.text = "Waiting";
		status_text.setStyle({ "align": "center", "fontFamily": "RalewayMedium", "fontSize": "20px", "fontStyle": "bold" });
		this.add(status_text);

		// deller_img
		const deller_img = scene.add.image(-78, -68, "D");
		this.add(deller_img);

		// playerTimer_container
		const playerTimer_container = scene.add.container(-111, -46);
		this.add(playerTimer_container);

		// time_bg
		const time_bg = scene.add.image(0, 0, "Profile Time Indicate");
		playerTimer_container.add(time_bg);

		// timeextra_bg
		const timeextra_bg = scene.add.image(3, 39, "Profile Time idecate bottom");
		playerTimer_container.add(timeextra_bg);

		// timer_text
		const timer_text = scene.add.text(0, 0, "", {});
		timer_text.setOrigin(0.5, 0.5);
		timer_text.text = "4";
		timer_text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "RalewayMedium", "fontSize": "35px", "fontStyle": "bold" });
		playerTimer_container.add(timer_text);

		// timerextra_text
		const timerextra_text = scene.add.text(3, 40, "", {});
		timerextra_text.setOrigin(0.5, 0.5);
		timerextra_text.text = "4";
		timerextra_text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "RalewayMedium", "fontSize": "20px", "fontStyle": "bold" });
		playerTimer_container.add(timerextra_text);

		this.playerbalance_text = playerbalance_text;
		this.playername_text = playername_text;
		this.profile_bg = profile_bg;
		this.status_text = status_text;
		this.deller_img = deller_img;
		this.playerTimer_container = playerTimer_container;
		this.time_bg = time_bg;
		this.timeextra_bg = timeextra_bg;
		this.timer_text = timer_text;
		this.timerextra_text = timerextra_text;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Text} */
	playerbalance_text;
	/** @type {Phaser.GameObjects.Text} */
	playername_text;
	/** @type {Phaser.GameObjects.Image} */
	profile_bg;
	/** @type {Phaser.GameObjects.Text} */
	status_text;
	/** @type {Phaser.GameObjects.Image} */
	deller_img;
	/** @type {Phaser.GameObjects.Container} */
	playerTimer_container;
	/** @type {Phaser.GameObjects.Image} */
	time_bg;
	/** @type {Phaser.GameObjects.Image} */
	timeextra_bg;
	/** @type {Phaser.GameObjects.Text} */
	timer_text;
	/** @type {Phaser.GameObjects.Text} */
	timerextra_text;

	/* START-USER-CODE */
	setPlayerJoinData(playerData){
		this.nSeat = playerData.nSeat;
		this.nBalance = playerData.nBalance;
		this.sUserName = playerData.sUserName;
		this.eState = playerData.eState;

		if(this.sUserName.length > 7){
			this.sUserName = this.sUserName.substring(0, 7)+"..";
		}
		this.status_text.text = this.eState;
		this.playername_text.text = this.sUserName;
		this.playerbalance_text.text = this.eState;

		if(this.eState == "playing"){
			this.status_text.visible = false;
			this.moveAbove(this.playername_text, this.profile_bg);
			this.moveAbove(this.playerbalance_text, this.profile_bg);
		}
		else{
			this.status_text.visible = true;
			this.moveBelow(this.playername_text, this.profile_bg);
			this.moveBelow(this.playerbalance_text, this.profile_bg);
		}

	}


	setPlayerData(){

	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
