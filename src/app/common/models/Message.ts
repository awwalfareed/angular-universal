export interface NgoMessage {
    event: {
        rejectedMsg: string,
        approvedMsg: string,
        sendForApprove:string,
        eventLimitMsg:string,
        eventLimitCross:string
    }
    story: {
        rejectedMsg:String,
        approvedMsg:String,
        sendForApprove:String,
        storyLimitMsg:String,
        storyLimitCross:string
    }
}


