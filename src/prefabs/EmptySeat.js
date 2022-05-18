
// You can write more code here

/* START OF COMPILED CODE */

class EmptySeat extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// es_0
		const es_0 = scene.add.image(0, 0, "Profile Box");
		es_0.scaleX = 1.5;
		es_0.scaleY = 1.5;
		this.add(es_0);

		// text
		const text = scene.add.text(0, 0, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Empty\nSeat";
		text.setStyle({ "align": "center", "fontFamily": "RalewayMedium", "fontSize": "30px", "fontStyle": "bold" });
		this.add(text);

		this.es_0 = es_0;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	es_0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
