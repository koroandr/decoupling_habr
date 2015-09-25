export interface IB extends IBForA, IBForSomeOtherModule{

}

export interface IBForA {
    getName(): string;
}

export interface IBForSomeOtherModule {
    getLastName(): string;
    getBirthDate(): Date;
}
