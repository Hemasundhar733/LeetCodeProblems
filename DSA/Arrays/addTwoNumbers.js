/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)

 Add two numbers in a linked list which is in reverse order 
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode(0);
    
    let newHead = dummyNode;
    
    let carry = 0;
    
    while(l1 || l2){
        let valueList1 = l1 ? l1.val : 0;
        let valueList2 = l2 ? l2.val : 0;
        
        let sum = valueList1 + valueList2 + carry;
        
        carry = Math.floor(sum/10);
        
        sum = sum % 10;
        
        newHead.next  = new ListNode(sum);
        
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        
        newHead = newHead.next;
    }
    
    if(carry > 0) newHead.next = new ListNode(carry);
    
    return dummyNode.next;
    
};
