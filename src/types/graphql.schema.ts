
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract books(search?: string): Book[] | Promise<Book[]>;

    abstract booksCount(startingDate: string): Count | Promise<Count>;
}

export abstract class IMutation {
    abstract changeBookTitle(id: number, title: string): Book | Promise<Book>;
}

export class Count {
    count?: number;
}

export class Library {
    id: number;
    title: string;
}

export class Book {
    id?: number;
    title?: string;
    created?: string;
    library?: Library;
}
