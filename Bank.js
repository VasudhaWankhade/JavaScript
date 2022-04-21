class Bank {
    constructor(AccName, AccNo, Bal) {
        this.AccName = AccName
        this.AccNo = AccNo
        this.Bal = Bal
        this.Transactions = [Bal]
    }
    Credit(amount) {
        this.Transactions.push(amount)
        this.Bal = this.Bal + amount
        return this.Bal
    }
    Debit(amount) {
        if (this.Bal > amount) {
            this.Bal = this.Bal - amount
            this.Transactions.push(-amount)
            return this.Bal
        } else {
            console.log('Insufficient Balance')
        }

    }
    lastFive() {
        let Tsum = this.Transactions.slice(-5).reduce(function(acc, el) {
            return acc + Math.abs(el)
        }, 0)
        console.log(Tsum)
    }


}
let V = new Bank('Vasudha Wankhade', 9677, 100)
V.Debit(20)
V.Credit(30)
V.Debit(50)
V.Credit(70)
V.Credit(100)
V.Debit(20)
V.Credit(100)
V.Debit(40)
console.log(V)
console.log(V.lastFive())