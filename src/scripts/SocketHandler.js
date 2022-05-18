class SocketHandler {
    constructor(oSceneObj) {
        this.sToken_id = oSceneObj.sAuthToken;
        this.sTableId = oSceneObj.sTableId;
        this.sRootUrl = "http://13.234.79.246:3000";
        this.oSceneObj = oSceneObj;
        this.oPlayerManager = oSceneObj.oPlayerManager;
        this.oUserHand = oSceneObj.oUserHand;
        this.oRootSocketConn = io();
        this.oTableSocketConn = io();
        var selfObj = this;
        // Root Socket conenction 

        this.oRootSocketConn = io(this.sRootUrl, {
            transports: ['websocket', 'polling'],
            query: {
                authorization: this.sToken_id,
            },
        });
        this.oRootSocketConn.on('connect', () => {
            console.log("Connected to Socket", this.oRootSocketConn.id);
            // Join tablename space
            selfObj.oRootSocketConn.emit("reqJoinTable", { iTableId:  selfObj.sTableId }, function (error, data) {
                console.log(data.oData,error);
				selfObj.oPlayerManager.handleTableJoin(data.oData.aParticipant,data.oData.participant);
			});
        });
        this.oRootSocketConn.on("disconnect", () => {
            console.log("Connection disconnect");
        });
        this.oRootSocketConn.on("error", (error) => {
            console.log("Connection error", error);
        });

        // Table events
        this.oRootSocketConn.on(this.sTableId, (data) => {
            switch(data.sEventName) {
                case "resUserJoined":
                    this.oPlayerManager.handleUserJoined(data.oData);
                    // code block
                    break;
                case "resGameState":
                    console.log("resGameState case", data);
                    // code block
                    break;
                case "resWildJoker":
                    console.log("resWildJoker case", data);
                    this.oSceneObj.setWildJokerData(data.oData.oWildJoker);
                    // code block
                    break;
                case "resOpenedDeck":
                    console.log("resOpenedDeck case", data);
                    // code block
                    break;
                case "resHand":
                    console.log("resHand case", data);
                    this.oSceneObj.oUserHand.updateHandCardData(data.oData);
                    selfObj.oRootSocketConn.emit(selfObj.sTableId, { sEventName: 'reqSortHand'}, function (error, data) {
			            console.log("Req ",data)
                        selfObj.oSceneObj.oUserHand.updateHandCardData(data);
		            });
                    console.log("reqSortHand sent");
                    // code block
                    break;
                case "resPlayersState":
                    console.log("resPlayersState case", data);
                    // code block
                    break;
                case "resPlayerTurn":
                    console.log("resPlayerTurn case", data);
                    // code block
                    break;
                case "resClosedCard":
                    console.log("resClosedCard case", data);
                    // code block
                    break;
                case "resDroppedPlayer":
                    console.log("resDroppedPlayer case", data);
                    // code block
                    break;
                case "resDeclareResult":
                    console.log("resDeclareResult case", data);
                    // code block
                    break;
                case "resEliminate":
                    console.log("resEliminate case", data);
                    // code block
                    break;
                case "resHighCards":
                    console.log("resHighCards case", data);
                    this.oPlayerManager.handleHighCard(data.oData);
                    break;
                default:
                    console.log("Unknown event",data);
            }
        });
    }

}

    // reqJoinTable,
    // reqClosedCard,
    // reqOpenedCard,
    // reqDiscardCard,
    // reqGroupHand,
    // reqChangeGroup,
    // reqSortHand,
    // reqDrop,
    // reqDeclare,
    // reqLeave,
    // reqCleanup,
    // reqCardCount,
    // disconnect,
    // reqTableThread,
    // reqCreditBalance,
    // reqSplitWinning,
    // message,
    // reqSyncHand,
    // reqFinish,
    // reqRejoin