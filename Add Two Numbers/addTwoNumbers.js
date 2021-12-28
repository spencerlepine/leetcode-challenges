/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var sum = sumLinkedListValues(l1) + sumLinkedListValues(l2);

  if (sum < 10) {
    return new ListNode(sum);
  }

  var outputListHead;
  var currentNode;
  var tensPlaceMult = 1;
  while (tensPlaceMult <= sum) {
    var value = getDigitFromNumber(tensPlaceMult, sum);

    var newNode = new ListNode(value);

    if (outputListHead === undefined) {
      outputListHead = newNode;
    } else {
      currentNode.next = newNode;
    }

    currentNode = newNode;
    tensPlaceMult *= 10;
  }

  return outputListHead;
};

var sumLinkedListValues = function (list) {
  var outputSum = 0;

  var placeMultiplier = 1;
  var nextNode = list;
  while (nextNode) {
    outputSum += (nextNode.val * placeMultiplier);

    placeMultiplier *= 10;
    nextNode = nextNode.next;
  }

  return outputSum;
}

var getDigitFromNumber = function (tensPlace, num) {
  const digWithDecimal = (num % (tensPlace * 10) / tensPlace);
  return digWithDecimal - (digWithDecimal % 1)
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}