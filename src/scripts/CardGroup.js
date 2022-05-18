class CardGroup {

    constructor(oHandObj, oGroupData) {
        this.aCards = new Map();
        this.oSceneObj = oHandObj.oSceneObj;
        //this.eGroupType = oGroupData.eGroupType;
        //this.nScore = oGroupData.nScore;
        this.cardXGap = 50;
        if(this.nScore>80){
            this.nScore = 80;
        }
        //this.groupTypeText = new GroupStatus(this.oSceneObj, 0, 0);
        //this.oSceneObj.addStatusToGroup(this.groupTypeText);
        //this.groupTypeText.visible = false;
        //this.groupTypeText.setGroupStatusData(this.eGroupType,this.nScore);
        this.addCards(oGroupData.aCards);
    }

    addCard(newCardData) {
        var tempCard = new Card(this.oSceneObj, 0, 0);
        tempCard.setCardDataForHandCard(newCardData);
        tempCard.setCardDragAndDrop();
        this.oSceneObj.userHand_cont.add(tempCard);
        this.aCards.set(tempCard.sId, tempCard);
    }

    addNewCard(sCardId, oNewCard) {
        this.aCards.set(sCardId, oNewCard);
    }

    addCards(aCardsData) {
        for (var i = 0; i < aCardsData.length; i++) {
            this.addCard(aCardsData[i]);
        }
    }

    setCardPositions(startPos) {
        this.startPos = startPos;
        this.endPos = startPos;
        var i = 0;
        for (const [key, value] of this.aCards) {
            this.endPos = this.startPos + (i * this.cardXGap);
            value.x = this.endPos;
            value.y = 0;
            value.cardHighilght(false);
            i++;
        }
        //this.showGroupTypeStatus();
    }

    resetCardPositions(startPos) {
        var tempCardArray = Array.from(this.aCards.values());
        tempCardArray.sort(function (a, b) {
            return a.x - b.x;
        });
        this.aCards.clear();
        for (var i = 0; i < tempCardArray.length; i++) {
            this.aCards.set(tempCardArray[i].sId, tempCardArray[i]);
        }
        this.setCardPositions(startPos);
    }

    getEndPos() {
        return this.endPos;
    }

    setMovingCardPositions(oCard) {
        if (oCard.y > -280 && oCard.x > this.startPos - this.cardXGap && oCard.x < this.endPos + this.cardXGap) {
            var i = 0;
            for (const [key, value] of this.aCards) {
                oCard.cardHighilght(false);
                if (oCard.sId != key) {
                    value.x = this.startPos + (i * this.cardXGap);
                    value.y = 0;
                    if (oCard.x < value.x && oCard.y > -280) {
                        value.x += this.cardXGap;
                    }
                    i++;
                }
            }
        }
    }

    clearGruop() {
        // Destroy card status this.eGroupType
        for (const [key, value] of this.aCards) {
            value.destroy();
        }
        if (this.groupTypeText != null) {
            this.groupTypeText.destroy();
            this.groupTypeText = null;
        }
        this.aCards.clear();
    }

    isPositionInGroup(oCard) {
        if (oCard.x > (this.startPos - this.cardXGap) && oCard.x < (this.endPos + this.cardXGap)) {
            return true;
        }
        return false;
    }

    removeCard(sId) {
        this.aCards.delete(sId);
    }

    showGroupTypeStatus() {
        if (this.aCards.size > 1) {
            this.groupTypeText.visible = true;
            var isfirst = true;
            var xS = 0;
            var xE = 0;
            for (const [key, value] of this.aCards) {
                if (isfirst) {
                    isfirst = false;
                    xS = value.x;
                }
                xE = value.x;
            }
            this.groupTypeText.x = xS - ((xS - xE) / 2);
            this.groupTypeText.y = 140;
        }
    }


}