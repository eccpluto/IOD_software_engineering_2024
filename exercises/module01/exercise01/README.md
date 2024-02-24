# exercise 01
This exersise consisted of praticing basic linux commands:

_create a new folder_
```bash
mkdir MyFolder
```

_create a nested folder / subdirectory_
```bash
mkdir MyFolder/MySubFolder

# or we can enter the folder and create another one

cd MyFolder && mkdir MySubFolder

```

_print the contents of the top folder_
```bash
ls . # assuming we are in the directory containing MyFolder
```

_change directory to second folder and print the current path_
```bash
cd MyFolder && pwd
```

_return to original starting place_
```bash
cd ..
```

_delete the first folder_
```bash
rm -rf  # need to indicate recursive and force flag
```