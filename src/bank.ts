import Branch from "./branch"
import Customer from "./customer"

class Bank {
    private name: string
    private branches: Branch[]

    constructor(name: string) {
        this.name = name
        this.branches = []
    }

public addBranch(branch: Branch): boolean {
    if (this.branches.includes(branch)) {
        return false
    }
    this.branches.push(branch)
    return true
}

public addCustomer(branch: Branch, customer: Customer): boolean {
    if (!this.branches.includes(branch)) {
        return false
    }
    return branch.addCustomer(customer)
}

public addCustomerTransaction(branch: Branch, customerId: string, amount: number): boolean {
    if (!this.branches.includes(branch)) {
        return false
    }
    return branch.addCustomerTransaction(customerId, amount)
}

public findBranchByName(branchName: string): Branch[] | null {
    const sameBranches = this.branches.filter(
        (branch) => branch.getName() === branchName
    )
    if (sameBranches.length === 0) {
        return null
    }
    return sameBranches
}

public checkBranch(branch: Branch): boolean {
    return this.branches.includes(branch)
}

public listCustomers(branch: Branch, customersTransactions: boolean): boolean{
    if (!this.branches.includes(branch)) {
        return false
    }
    console.log(`Customers of ${branch.getName()}:`)
    for (const customer of branch.getCustomers()) {
        console.log(`- ${customer.getName()}`)
        if (customersTransactions) {
            console.log(" Transactions:")
            for (const transaction of customer.getTransactions()) {
                console.log(`${transaction.date.toISOString()} ${transaction.amount}`)}
                console.log(`Total balance: ${customer.getBalance()}`)
            }
        }
        return true
    }
}

export default Bank