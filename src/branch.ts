import Customer from "./customer"

class Branch {
    private name: string
    private customers: Customer[]

    constructor(name: string) {
        this.name = name
        this.customers = []
    }
    
getName(): string {
    return this.name
}

getCustomers(): Customer[] {
    return this.customers
}

addCustomer(customer: Customer): boolean {
    if (this.findCustomer(customer.getId())) {
        return false
    }
    this.customers.push(customer)
    return true
}

addCustomerTransaction(customerId: string, amount: number): boolean {
    const customer = this.findCustomer(customerId)
    if (!customer) {
        return false
    }
    return customer.addTransaction(amount)
}

findCustomer(customerId: string): Customer | null {
    for (const customer of this.customers) {
        if (customer.getId() === customerId) {
            return customer
        }
    }
    return null
  }
}

export default Branch