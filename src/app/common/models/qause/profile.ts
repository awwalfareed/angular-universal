export interface Events{
    date: Date,
    desc: string,
    image:any,
    ngoID: string,
    place: string,
    tag: string[],
    title: string,
    items: any[]
}

export interface Stories{
    desc:string,
    image:any
    ngoID:string,
    tag:Array<string>,
    title: string
    _id: string
}