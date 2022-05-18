class OpenDeck {
    constructor(oSceneObj) {
        this.oSceneObj = oSceneObj;
        this.oCardObj = oSceneObj.openDeckCard;
        this.cardList = new Map();
        this.oCardObj.card_bg.setInteractive().on("pointerdown", function () {
            if (!this.oSceneObj.isOwnPlayerTurn) {
                 this.oSceneObj.showTableInfoWithTimer("Wait for your turn",1);
                return;
            }
            this.oSceneObj.requestOpenedCard(this.cardList.size,this.oCardObj.isJoker); // Added
        }, this);
    }

    updateData(resOpenedDeck) {
        this.sAction = resOpenedDeck.sAction;
        this.cardList.clear();
        for (var i = 0; i < resOpenedDeck.aOpenDeck.length; i++) {
            var tempData = resOpenedDeck.aOpenDeck[i];
            var tempCardData = new CardData(tempData.eSuit, tempData.isJoker, tempData.nGroupId, tempData.nLable, tempData.nValue, tempData._id);
            this.cardList.set(i, tempCardData);
        }
        if (resOpenedDeck.aOpenDeck.length > 0) {
            this.oCardObj.visible = true;
            this.oCardObj.setOpenDeckCard(this.cardList.get(i - 1));
        }
        else {
            this.oCardObj.visible = false;
        }
        this.resetOpenDeckCards();
    }

    resetOpenDeckCards(){
        this.clearCardContainerObj();        
        this.lastX = 40;
        this.lastY = 30;
        var cardCounter = 0;
        for (const [key, value] of this.cardList) {
            if(cardCounter%5 == 0 && cardCounter!=0)
            {
                this.lastX = 40;
                this.lastY += 130;
            }
            var oOpenDeckCard = new BaseCardPrefab(this.oSceneObj,this.lastX,this.lastY);
            oOpenDeckCard.setScale(0.4, 0.4); 
            oOpenDeckCard.setOpenDeckCard(value);
            this.oSceneObj.cardContainer.add(oOpenDeckCard);
            this.lastX+=40;
            cardCounter++;
        }
    }
    clearCardContainerObj() {
        this.oSceneObj.cardContainer.removeAll(true);
    }

}