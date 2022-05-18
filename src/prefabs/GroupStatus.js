
// You can write more code here

/* START OF COMPILED CODE */

class GroupStatus extends Phaser.Scene {

	constructor() {
		super("GroupStatus");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// group_status_text
		const group_status_text = this.add.text(5, 0, "", {});
		group_status_text.setOrigin(0, 0.5);
		group_status_text.text = "Invalid(2)";
		group_status_text.setStyle({ "fontFamily": "RalewayMedium", "fontSize": "30px" });

		// valid_img
		const valid_img = this.add.image(0, 0, "valid");
		valid_img.scaleX = 2;
		valid_img.scaleY = 2;
		valid_img.setOrigin(1, 0.5);

		// invalid_img
		const invalid_img = this.add.image(0, 0, "Invalid");
		invalid_img.scaleX = 2;
		invalid_img.scaleY = 2;
		invalid_img.setOrigin(1, 0.5);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */
	setGroupStatusData(groupStatus,groupScore){
		if(groupStatus == "invalid" || !UserHand.isHavePureSequence){  
			this.valid_img.visible = false;
			this.invalid_img.visible = true;
		}
		else{
			this.valid_img.visible = true;
			this.invalid_img.visible = false;
		}
		this.group_status_text.text = groupStatus + " ("+groupScore+")";
	}

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
