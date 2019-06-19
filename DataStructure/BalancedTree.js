class BalancedTree {
    constructor() {
        this.top = -1
        this.length = 0
        this.stack = []
    }

}

BalancedTree.prototype.isEmpty = function () {
    var flag = false
    if (bt.top == -1) {
        flag = true;
    }
    return flag
}

BalancedTree.prototype.push = function (item) {
    bt.stack[++bt.top] = item;
    return bt.stack
}

BalancedTree.prototype.pop = function () {
    if (!bt.isEmpty()) {
        var poped = bt.stack[bt.top]
        bt.top--;
        return bt.top;
    }
}

let bt = new BalancedTree();

var expression = '(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)'

for (var i = 0; i < expression.length; i++) {
    if (expression.charAt(i) == '(' || expression.charAt(i) == '[' || expression.charAt(i) == '{') {
        bt.push(expression.charAt(i))
    }
    else if (expression.charAt(i) == ')' || expression.charAt(i) == ']' || expression.charAt(i) == '}') {
        switch (expression.charAt(i)) {
            case ')': if (bt.stack[bt.top] === '(') {
                bt.pop();
            }
                break;

            case ']': if (bt.stack[bt.top] === '[') {
                bt.pop();
            }
                break;

            case '}': if (bt.stack[bt.top] === '{') {
                bt.pop();
            }
                break;
        }
    }
}

if (bt.isEmpty()) {

    console.log('tree is balanced')
}
else {
    console.log('tree is not  balanced')
}




