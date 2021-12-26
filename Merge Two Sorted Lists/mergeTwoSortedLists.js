/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var prevNode;
    var outputHead;

    var nodeA = list1;
    var nodeB = list2;
    while (nodeA || nodeB) {
        var valA = nodeA ? nodeA.val : 0;
        var valB = nodeB ? nodeB.val : 0;

        if (nodeA && nodeB) {
            if (nodeA.val < nodeB.val) {
                prevNode = addNodeToList(prevNode, nodeA);
                nodeA = nodeA.next;
            } else {
                prevNode = addNodeToList(prevNode, nodeB);
                nodeB = nodeB.next;
            }
        } else {
            if (nodeA) {
                prevNode = addNodeToList(prevNode, nodeA);
                nodeA = nodeA.next;
            } else {
                prevNode = addNodeToList(prevNode, nodeB);
                nodeB = nodeB.next;
            }
        }

        if (!outputHead) {
            outputHead = prevNode;
        }
    }

    return outputHead || list1;
};

function addNodeToList(tail, nextNode) {
    if (tail) {
        tail.next = nextNode;
    }

    return nextNode;
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}