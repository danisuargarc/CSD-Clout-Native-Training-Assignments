/**
 * 1. Write a class that defines next() method to return next number from
 * Fibonacci series. The class will have a private attributes 'previousNo'
 * & 'currentNo'.
 */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _previousNo, _currentNo;
class FibonacciSeries {
    constructor() {
        _previousNo.set(this, void 0);
        _currentNo.set(this, void 0);
        this.next = () => {
            if (__classPrivateFieldGet(this, _previousNo) === undefined && __classPrivateFieldGet(this, _currentNo) === undefined) {
                __classPrivateFieldSet(this, _previousNo, 0);
                __classPrivateFieldSet(this, _currentNo, 1);
                return 0;
            }
            let temp = __classPrivateFieldGet(this, _currentNo);
            __classPrivateFieldSet(this, _currentNo, temp + __classPrivateFieldGet(this, _previousNo));
            __classPrivateFieldSet(this, _previousNo, temp);
            return temp;
        };
    }
}
_previousNo = new WeakMap(), _currentNo = new WeakMap();
let fibo = new FibonacciSeries();
let nextFibo = fibo.next();
/**
 * 2. Write a program that returns next Armstrong number after calling
 * getNextArmstrong() method.
 *
 * 3. Write a program that returns next Armstrong number after calling
 * getNextArmstrong() method. Add functionality to reset generating
 * Armstrong number from zero. In case, Armstrong number goes above one
 * thousand then throw an error.
 */
let previousArmstrong = -1;
let getNextArmstrong = function (previous = previousArmstrong) {
    if (previous === 0 && previousArmstrong != 0) {
        previous = -1;
    }
    for (let x = previous + 1; x > previous; x++) {
        let sum = 0;
        let digits = x.toString();
        for (let y = 0; y < digits.length; y++) {
            sum += Math.pow(parseInt(digits[y]), 3);
        }
        if (sum === x) {
            previousArmstrong = x;
            if (sum > 1000) {
                return undefined;
            }
            return x;
        }
    }
};
let nextArm = getNextArmstrong();
/**
 * 4. Using Set & Map, create a static data for chatting application.
 * Here we have 2 chatrooms, every chatroom is having 3 users & every user
 * has posted different messages in a chat room. Note that one user can
 * belong to a single chat room only. Now you need to find out how you
 * will hold this data using Set & Map data structures. Also add
 * functionality to get list of all users from a specific chatroom &
 * listing down all message from a chatroom.
 */
let chatrooms = [new Map([
        ["Chandler", ["chandlermsg1", "chandlermsg2", "chandlermsg3"]],
        ["Joey", ["joeymsg1"]],
        ["Ross", ["rossmsg1", "rossmsg2"]]
    ]), new Map([
        ["Monica", ["monicamsg1"]],
        ["Phoebe", ["phoebemsg1", "phoebemsg2", "phoebemsg3"]],
        ["Rachel", ["rachelmsg1", "rachelmsg2", "rachelmsg3"]]
    ])];
let getUsers = function (chatroomNumber) {
    const iterator = chatrooms[chatroomNumber - 1].keys();
    for (let x = 0; x < 3; x++) {
        console.log(iterator.next().value);
    }
};
let getMessages = function (chatroomNumber) {
    for (let msgs of chatrooms[chatroomNumber - 1].values()) {
        msgs.forEach(msg => {
            console.log(msg);
        });
    }
};
//getMessages(<1 or 2>)
//getUsers(<1 or 2>)
