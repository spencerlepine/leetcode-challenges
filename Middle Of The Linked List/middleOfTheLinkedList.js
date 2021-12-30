/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  var nodesFound = [];
  var currentNode = head;
  while (currentNode) {
    nodesFound.push(currentNode);
    currentNode = currentNode.next;
  }

  return nodesFound[Math.ceil(nodesFound.length / 2) - (nodesFound.length % 2)];
};