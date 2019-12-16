


/**
 * 
 *  一维数据结构： （线性数据结构）；
 *     强调存储与顺序；
 * 
 *  
 * 数组： 
 *      1.存储在物理空间上是连续的
 *      2.长度是不可变的；
 *      3.数组的变量， 指向了数组的第一个位置；
 *  
 *      arr[0]  arr[1]    []内数字表示偏移量
 * 
 * 
 *      优点：
 *          查询性能好；
 *      缺点：
 *          1. 空间必须是连续的， 如果数组比较大， 容易存不下；    （避免数组过大）
 *          2. 数组难以被添加和删除；
 * 
 * 链表：       想传递一个链表， 必须传递链表的根节点；  **每一个节点都认为自己是跟节点；
 *      1.在空间不是连续的；
 *      2.没存放一个值， 都要多开销一个引用空间；
 *      
 *      优点：
 *          1. 只要空间足够大， 就能存的下；
 *          2. 链表的添加和删除非常的容易；
 *      
 *      缺点：
 *          1. 查询速度慢 （指的某个位置）；
 *          2. 链表的每一个节点都需要创建一个next的引用空间；   （当节点内数据越多的时候， 这部分多开销的内存影响越少）
 * 
 * 线性数据结构的遍历： 
 *      循环遍历：
 *          function enumNode(root) {
                var temp = root;
                while (true) {
                    if (temp != null) {
                        console.log(temp.value);
                    } else {
                        break;
                    }
                    temp = temp.next;
                }
            }
 * 
        递归遍历：
 * 
 */


    var arr = [1,2,3,4,5,6,7,8];
    


    // function Node (value) {
    //     this.value = value;
    //     this.next = null;
    // }

    // var node1 = new Node(1);
    // var node2 = new Node(2);
    // var node3 = new Node(3);
    // var node4 = new Node(4);
    // var node5 = new Node(5);
    // node1.next = node2;
    // node2.next = node3;
    // node3.next = node4;
    // node4.next = node5;

    // function enumNode(root) {
    //     if (root == null) {
    //         return;
    //     }
    //     console.log(root.value);
    //     enumNode(root.next);
    // }

    
    




