let A = [12, 11, 23, 33, 45, 32, 55, 24, 53, 67, 100, 10, 45] //array
console.log(A[0])
let B = 45 //target
let s = A.sort() //sort==>s=[11,12,23,32,33,45,55]
console.log(s)
let mid = (s.length + 1) / 2 //mid element index=4
console.log(mid)
let h = s[mid] //s[4]=
console.log(h)
console.log("Middle element is: ", h) //33




for (let i = 0; i < s.length; i++) {
    if (B >= h) {
        for (j = mid; j < s.length; j++) {
            if (s[i] == B) {
                console.log(s.indexOf(s[i]))
                console.log("Element is found")
            }

        }
    }

    if (B <= h) {
        for (k = mid; k >= 0; k--) {
            if (s[i] == B) {
                console.log(s.indexOf(s[i]))
                console.log("Element is found")
            }

        }
    }

}