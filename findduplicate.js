let A = [12, 23, 45, 67, 44, 100, 67, 21]
let B = [33, 14, 11, 22, 34, 87, 100, 91, 23, 21]

function com(X, Y) {
    for (let i = 0; i < X.length; i++) {
        for (let j = 0; j < Y.length; j++) {
            if (X[i] == Y[j]) {
                console.log("The duplicate  is", Y[j])
                console.log("Their indexes are: ", X.indexOf(X[i]), " and ", Y.indexOf(Y[j]))
            }
        }
    }

}
com(A, B)