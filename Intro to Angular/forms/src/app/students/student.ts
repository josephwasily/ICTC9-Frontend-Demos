export interface Student {
    uid?: string,
    firstName:string,
    lastName?: string,
    age?: number,
    gender?: string,
    languages?: language []
}

interface language {
    title: string,
    level: string
}
