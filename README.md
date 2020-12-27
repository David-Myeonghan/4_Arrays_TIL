# Array

- sometimes called List
- organise items sequentially (in memeory, one after another)
- Simplest and most widely used

## Two types of Array

1. Static Array

   Lookup : O(1)
   Push : O(1)
   Insert : O(n)
   Delete : O(n)

2. Dynamic Array

   Loop up:O(1)
   Append : O(1)
   \*can be O(n), when moves, to a new location, it loops over the items, and copy and paste (it usually double the spaces)
   Insert : O(n)
   Delete : O(n)

- difference:
  **Static Array** is fixed in size. you need to specify the numver of elements the array will hold ahead of time.

  **Dynamic Array** allows us to copy and rebuild an array at a new location. In order to create more space, Copy entire list and paste it with more space on a new location.
