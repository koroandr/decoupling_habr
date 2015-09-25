import b_interfaces = require('./IB');
import IB = b_interfaces.IB;

class B implements IB {
    public getName(): string {
        return 'Habr';
    }

    public getLastName():string {
        return 'last';
    }

    public getBirthDate():Date {
        return new Date();
    }
}

export = B;
