class UserHand {

    nHandCardCount = 0;
    isHavePureSequence = false;

    constructor(oSceneObj) {
        this.aGroups = new Map();
        this.aSelectedCards = new Map();
        this.oSceneObj = oSceneObj;
        this.cardXGap = 50;
        this.groupXGap = 190;
    }

    addGroup(nGroupId, newGroup) {
        this.aGroups.set(nGroupId, newGroup);
    }

    updateHandCardData(oData) {
        
        this.clearHandData();
        this.clearSelected();

        var aCardTemp = oData;
        var oResHand = {'aGroups':[]}
        var cardGroupTemp = -1;
        var groupCounter = -1;
        for(var i=0; i<aCardTemp.length; i++){
            if(cardGroupTemp != aCardTemp[i].nGroupId){
                cardGroupTemp = aCardTemp[i].nGroupId;
                groupCounter = groupCounter+1;
                oResHand['aGroups'][groupCounter] = {'aCards':[]};
            }
            oResHand['aGroups'][groupCounter]['aCards'].push(aCardTemp[i]);
        }
        console.log(oResHand);
        UserHand.nHandCardCount = oData.length;
        this.oResHand = oResHand;
        this.startPos = -((oData.length*this.cardXGap)+((oResHand.aGroups.length-2)*this.groupXGap))/2;
        /*
        UserHand.isHavePureSequence = false;
        for (var i = 0; i < oResHand.aGroups.length; i++){
            if(oResHand.aGroups[i].eGroupType == "pureSequence"){
                UserHand.isHavePureSequence = true;
            }
        }
        */
        for (var i = 0; i < oResHand.aGroups.length; i++) {
            var tempCarGroup = new CardGroup(this, oResHand.aGroups[i], this);
            tempCarGroup.setCardPositions(this.startPos);
            this.startPos = tempCarGroup.getEndPos() + this.groupXGap;
            this.addGroup(oResHand.aGroups[i].aCards[0].nGroupId, tempCarGroup);
            UserHand.nHandCardCount += oResHand.aGroups[i].aCards.length;
        }
        
    }
  


    resetHandCardPositions() {
        this.startPos = -((13*this.cardXGap)+((this.aGroups.size-2)*this.groupXGap))/2;
        for (const [key, value] of this.aGroups) {
            value.resetCardPositions(this.startPos);
            this.startPos = value.getEndPos() + this.groupXGap;
        }
    }

    refreshUserHand() {
        this.updateHandCardData(this.oResHand);
    }

    clearHandData() {
        for (const [key, value] of this.aGroups) {
            value.clearGruop();
        }
        this.aGroups.clear();
    }

    setMovingCardPositions(oCard) {
        for (const [key, value] of this.aGroups) {
            value.setMovingCardPositions(oCard);
        }
    }

    checkPositionAndSetCard(oCard) {
        let [isInGroup, nNewGroupId] = this.getCardGroupByCardPosition(oCard);
        var bIsGroupChnaged = false;
        if (isInGroup) {
            if (oCard.nGroupId != nNewGroupId) {
                this.aGroups.get(oCard.nGroupId).removeCard(oCard.sId);
                this.aGroups.get(nNewGroupId).addNewCard(oCard.sId, oCard);
                bIsGroupChnaged = true;
            }
        }
        this.resetHandCardPositions();
        if (bIsGroupChnaged) {
            var oCardData = [];
            for (const [key, value] of this.aGroups) {
                for (const [cardKey, cardValue] of value.aCards) {
                    oCardData.push({ "iCardId": cardKey, "nGroupId": key });
                }
            }
            this.oSceneObj.makeReqForChnageCardGroup(oCardData);
        }
    }
    getCardGroupByCardPosition(oCard) {
        var isPosInGroup = false;
        var nNewGroupId = 0;
        for (const [key, value] of this.aGroups) {
            if (value.isPositionInGroup(oCard)) {
                isPosInGroup = true;
                nNewGroupId = key;
            }
        }
        return [isPosInGroup, nNewGroupId];
    }

    clearSelected() {
        this.aSelectedCards.clear();
        //this.oSceneObj.setButtonsForCardSelect(this.aSelectedCards.size);
    }
    addCardToSelected(oCard) {
        oCard.y -= 40;
        this.aSelectedCards.set(oCard.sId, oCard);
        this.oSceneObj.setButtonsForCardSelect(this.aSelectedCards.size);
    }
    removeCardFromSelection(oCard) {
        oCard.y += 40;
        this.aSelectedCards.delete(oCard.sId);
        this.oSceneObj.setButtonsForCardSelect(this.aSelectedCards.size);
    }
    isCardSelected(oCard) {
        return this.aSelectedCards.has(oCard.sId);
    }

    getSelectedCardIds() {
        var oSelectedCardIds = [];
        for (const [key, value] of this.aSelectedCards) {
                oSelectedCardIds.push(key);
        }
        return oSelectedCardIds;
    }

    getSelectedCard() {
        return this.aSelectedCards.values().next().value;
    }
}