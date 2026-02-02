class Node {
    int data;
    Node next;

    Node(int val){
        this.data = val;
        this.next = null;
    }
}





public class linkedlIstImp {

    Node head;


    void addAtFirst(int val){
        Node newNode = new Node(val);

        if(head == null){
            head = newNode;
            return;
        }
        
        newNode.next = head;
        head = newNode;

    }


    void addAtEnd(int val){
        Node newNode = new Node(val);

        if(head == null){
            head = newNode;
            return;
        }

        Node curr = head;
        while(curr.next != null){
            curr = curr.next;
        }

        curr.next = newNode;

    }


    void addAtPos(int val, int pos){
        Node newNode = new Node(val);
        if(head == null){
            head = newNode;
            return;
        }
        if(pos == 0){
            addAtFirst(val);
            return;
        }

        Node curr = head;
        for(int i = 1; i < pos;i++){
            curr = curr.next;
            if(curr == null){
                addAtEnd(val);
                return;
            }
        }

        newNode.next = curr.next;
        curr.next = newNode;
    }

    void deleteAtStart(){
        if(head == null){
            System.out.println("List is Empty, Cannot delete");
            return;
        }

        head = head.next;
    }

    void deleteAtLast(){
        if(head == null){
            System.out.println("List is Empty, Cannot delete");
            return;
        }
        if(head.next == null){
            head = null;
            return;
        }
        Node curr = head;

        while(curr.next.next!=null){
            curr = curr.next;
        }

        curr.next = null;
    }

    void deleteByVal(int val){
         if(head == null){
            System.out.println("List is Empty");
            return;
         }
         if(head.next == null){
            if(head.data == val){
                head = null;
            }
            else{
                System.out.println("Invalid Value");
            }
            return;
         }

        Node curr = head;
        while(curr.next.next.data == val){
            curr = curr.next;
        }

        curr.next = curr.next.next;

    }

    void displayList(){
        if(head == null){
            System.out.println("List is Empty");
            return;
        }

        Node curr = head;
        while(curr != null){
            System.out.print(curr.data + " -> ");
            curr = curr.next;
        }
        System.out.print( " null");

    }


    public static void main(String[] args) {
        linkedlIstImp list = new linkedlIstImp();

        list.addAtFirst(10);
        list.addAtFirst(20);
        list.addAtFirst(30);
        list.addAtEnd(40);
        list.addAtPos(50, 4);
        list.addAtPos(60, 6);
        list.deleteAtStart();
        list.deleteAtLast();
        list.deleteByVal(10);

        list.displayList();

        
    }
}
