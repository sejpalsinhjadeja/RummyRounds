// waiting,
// playing,
// dropped,
// declared,
// left

// point,
// pool,
// deal,
// point21,

// practice,
// cash,
// tournament,
// club,
// privateTable
class PlayerManager{
    constructor(oSceneObj) {
        this.oSceneObj = oSceneObj;
        this.initPlayers();
    }

    initPlayers(){
        this.playerList = new Map();
        this.aHighCards = [];
        this.aEmptySeats = [];
        this.aPlayers = [];
        if(this.oSceneObj.nMaxPlayer == 2){
            this.aPlayers[0] = this.oSceneObj.player_0;
            this.aPlayers[1] = this.oSceneObj.player_3;

            this.aHighCards[0] = this.oSceneObj.highcard_0;
            this.aHighCards[1] = this.oSceneObj.highcard_3;

            this.aEmptySeats[0] = this.oSceneObj.es_0;
            this.aEmptySeats[1] = this.oSceneObj.es_3;
        }
        if(this.oSceneObj.nMaxPlayer == 6){
            this.aPlayers[0] = this.oSceneObj.player_0;
            this.aPlayers[1] = this.oSceneObj.player_1;
            this.aPlayers[2] = this.oSceneObj.player_2;
            this.aPlayers[3] = this.oSceneObj.player_3;
            this.aPlayers[4] = this.oSceneObj.player_4;
            this.aPlayers[5] = this.oSceneObj.player_5;

            this.aHighCards[0] = this.oSceneObj.highcard_0;
            this.aHighCards[1] = this.oSceneObj.highcard_1;
            this.aHighCards[2] = this.oSceneObj.highcard_2;
            this.aHighCards[3] = this.oSceneObj.highcard_3;
            this.aHighCards[4] = this.oSceneObj.highcard_4;
            this.aHighCards[5] = this.oSceneObj.highcard_5;

            this.aEmptySeats[0] = this.oSceneObj.es_0;
            this.aEmptySeats[1] = this.oSceneObj.es_1;
            this.aEmptySeats[2] = this.oSceneObj.es_2;
            this.aEmptySeats[3] = this.oSceneObj.es_3;
            this.aEmptySeats[4] = this.oSceneObj.es_4;
            this.aEmptySeats[5] = this.oSceneObj.es_5;
        }

        for (var i = 0; i < this.oSceneObj.nMaxPlayer; i++) {
            this.aEmptySeats[i].visible = true;
        }
    }

    handleTableJoin(aPlayersData,ownPlayerData){
        this.oSceneObj.sOwnPlayerId = ownPlayerData.iUserId;
        for(var i=0; i<aPlayersData.length; i++){
            this.handleUserJoined(aPlayersData[i]);
        }
    }

    addPlayerOnSeat(playerData,nPlayerSeat)
    {
        this.aEmptySeats[nPlayerSeat].visible = false;
        this.aPlayers[nPlayerSeat].visible = true;
        this.playerList.set(playerData.iUserId,this.aPlayers[nPlayerSeat]);
        this.aPlayers[nPlayerSeat].setPlayerJoinData(playerData);
        this.aPlayers[nPlayerSeat].nSeat = nPlayerSeat;
    }

    handleUserJoined(playerData){
        const nPlayerSeat = playerData.nSeat;
        this.aEmptySeats[nPlayerSeat].visible = false;
        this.aPlayers[nPlayerSeat].visible = true;
        this.playerList.set(playerData.iUserId,this.aPlayers[nPlayerSeat]);
        this.aPlayers[nPlayerSeat].setPlayerJoinData(playerData);
    }

    handleHighCard(aHighCardData){
        for(var i=0; i<aHighCardData.length; i++){
            const userId = aHighCardData[i].iUserId;
            const highCardSeatId = this.playerList.get(userId).nSeat;
            this.aHighCards[highCardSeatId].setHighCardData(aHighCardData[i]);
        }
    }

    hideHighCard(){
        for(var i=0; i<this.aHighCards.length; i++){
            this.aHighCards[i].visible = false;
        }
    }
}