interface Transaction {
    amount: number
    date: Date
}

class Customer {
    private name: string
    private id: string
    private transactions: Transaction[]

    constructor(name: string) {
        this.name = name
        this.id = Math.random().toString(36).substring(2, 9) //* comment below
        this.transactions = []
    }

    public getName(): string{
        return this.name
    }

    public getId(): string{
        return this.id
    }

    public getTransactions(): Transaction[] {
        return this.transactions
    }

    public getBalance(): number {
        let balance = 0
        for (let transaction of this.transactions) {
            balance += transaction.amount
        }
        return balance
    }

    public addTransaction(amount: number): boolean {
        if (this.getBalance() + amount < 0) {
            return false
        }
        const transaction = {
            amount: amount,
            date: new Date(),
        }
        this.transactions.push(transaction)
        return true
    }
}

export default Customer

/* -The toString(36) method converts the number to a base-36 string representation, 
which uses digits 0-9 and lowercase letters a-z.
- The substr(2, 9) method extracts a substring of length 9 characters, starting from the 2nd character 
in the string, which effectively removes the leading "0." from the decimal portion of the random number 
and ensures that the ID is exactly 9 characters long. */