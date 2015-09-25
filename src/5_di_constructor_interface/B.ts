import IB = require('./IB');

class B implements IB {
    public getName(): string {
        return 'Habr';
    }

    public getLastName():string {
        return undefined;
    }

    public getBirthDate():Date {
        return undefined;
    }
}

export = B;
