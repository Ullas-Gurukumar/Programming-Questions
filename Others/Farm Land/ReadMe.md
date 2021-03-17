# Count total Number of fields

- Input is a 2D array, as long as fields (denoted by 1) that are connected (only adjacent counts, diagonal doesnt count)

  ```
  [
      [1, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1],
  ]

  3 fields
  ```

  ```
  [
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 1],
  ]

  4 fields
  ```

  ```
  [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
  ]

  2 fields, fields aren't connected
  ```

  ```
  [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
  ]

  1 field, each field are connected through adjacent land
  ```

- Output is number of fields
