export interface Student {
    id?: number,
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
