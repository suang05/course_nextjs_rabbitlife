export type ProductResponse = {
    data: Product[];
    meta:    Meta;
}

export type Meta = {
    status:     string;
    statusCode: number;
}

export type Product = {
    id:      number;
    title:   string;
    detail:  string;
    date:    Date;
    view:    number;
    picture: string;
}
