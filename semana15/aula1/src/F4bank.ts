class UserAccount {
    balance: number
    cpf: string
    age: number
    transactions: Transaction[]

    getBalance(): number
    addBalance(): void

};

class Transaction {
    cpf: string
    value: number
    description: string
}

class Bank {
    accounts: UserAccount[]
    fileManager: JSONFileManager

    createAccount(): void
    getAllAccounts(): UserAccount[]
    getAccountsByCpf(): UserAccount
    saveAccounts(): void
}

class JSONFileManager {
    fileName: string

    getObjectFromFile(): object
    writeObjectToFile(): void
}

const caio: UserAccount = new UserAccount()