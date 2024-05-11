# Module 4 Exercise 5

## Part 1

Use the following array to populate a
web page which contains news. When the
page loads up, it should display all of the
news items in the array.

Use an interval function to read the array
every 5 seconds. Every time the array is
read, remove all news elements from the
news container and fill it in with the latest
news – so the page is always in sync with
the data.

```js
let news = [
{ id: 1, title: 'Election Results',
content: "Newly elected minister..." },
{ id: 2, title: 'Sporting Success',
content: "World Cup winners..." },
{ id: 3, title: 'Tornado Warning',
content: "Residents should prepare..." }
]
```

## Part 2

To update the array, create a form in your page,
which will include fields for the title of the news
item and the content, and a button to submit this
new news item.

There is a trick here. If you use a form and submit,
it will trigger a page reload. There are two ways of
solving this.


1) You can research the prevent default
behavior, which stops the form from doing a
normal post on its submit event.

2) You can simply create a form without using an
actual html ```<form>```. 

Use text field inputs and a
button with onclick event instead.