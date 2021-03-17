# Table of Contents

- This of this as printing out table of contents for a textbook from a list of contents. Sub contents needs to be under it's parent (parent_id).

- Input array:

```
[
  { id: 1, name: "US History", parent_id: null },
  { id: 2, name: "Third Assignment", parent_id: 3 },
  { id: 3, name: "First Chapter", parent_id: 1 },
  { id: 4, name: "Second Assignment", parent_id: 1 },
  { id: 5, name: "First Assignment", parent_id: 6 },
  { id: 6, name: "Canadian History", parent_id: null },
];
```

- Output:

```
US History
-First Chapter
--Third Assignment
-Second Assignment
Canadian History
-First Assignment
```
