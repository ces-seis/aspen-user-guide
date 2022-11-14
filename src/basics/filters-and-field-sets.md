---
title: Using filters and field sets to find the data you need
---

Aspen stores so much information, that looking at it in one giant table can be overwhelming at best and utterly useless at worst. Filters and field sets are the tools Aspen has built in to narrow down the information within Aspen to match only the specific data you are interested in viewing. Filters select (narrow down) **rows** in a table and field sets select **columns** in a table. Knowing how to use the right combination of both is key to using Aspen effectively.

# A motivating example

Imagine you are looking at a table of student data like this, trying to get addresses for every student who is under 18 in order to send home an important mailing for minors:

| Row | First name | Last name | Middle initial | Suffix | Date of birth | Address          | City        | State |
| --- | ---------- | --------- | -------------- | ------ | ------------- | ---------------- | ----------- | ----- |
| 1   | Alex       | Avery     | A              |        | 1/1/2001      | 100 Main St      | Greenfield  | MA    |
| 2   | Barry      | Bellefort | B              | Jr     | 2/2/2002      | 20 Downtown Blvd | Boston      | MA    |
| 3   | Caden      | Correia   | C              |        | 3/3/2003      | 300 Avenue C     | Springfield | MA    |
| 4   | Dakota     | Dennison  | D              |        | 4/4/2004      | 400 Right Ln     | Worcester   | MA    |
| 5   | Emery      | Ellis     | E              | III    | 5/5/2005      | 5 Rural Rd       | Pittsfield  | MA    |
| 6   | Felisha    | Fox       | F              |        | 6/6/2006      | 60 West Way      | Leominster  | MA    |

This is a lot! Imagine that you only want to see students who are under the age of majority (< 18). In this case, we would use a *filter*, because we want to reduce the number of students (**rows**). Let's imagine we see a filter in our filter list called *Students under 18*. Clicking on that filter (in November 2022) will refresh Aspen's page and you will then see:

| Row | First name | Last name | Middle initial | Suffix | Date of birth | Address          | City        | State |
| --- | ---------- | --------- | -------------- | ------ | ------------- | ---------------- | ----------- | ----- |
| 5   | Emery      | Ellis     | E              | III    | 5/5/2005      | 5 Rural Rd       | Pittsfield  | MA    |
| 6   | Felisha    | Fox       | F              |        | 6/6/2006      | 60 West Way      | Leominster  | MA    |

However, there is still so much information there that you don't need to be looking at just to print out labels. The extra information now is extra **columns** (like Middle initial, Suffix, etc.). Let's imagine we see a field set in our list called *Mailing fields*. Clicking on that field set will refresh Aspen's page and you will then see:

| First name | Last name | Address          | City        | State |
| ---------- | --------- | ---------------- | ----------- | ----- |
| Emery      | Ellis     | 5 Rural Rd       | Pittsfield  | MA    |
| Felisha    | Fox       | 60 West Way      | Leominster  | MA    |

There! That's your set of mailing addresses.

# Setting defaults for a given page

You'll notice when clicking on the filter or field set button, the first item you see, at the top of the list, is called *Manage Filters...* or *Manage Field Sets...*. Clicking on that *Manage...* item from the menu will make a popup that lists all your filters or field sets available for the page you're looking at. By selecting the item you want to be the default, and clicking the *^ Up* button repeatedly, you can move that item to the top of the list. Whichever filter and field set combo is at the top of your lists will be the default one for that page.

Please note that filters and field sets are customizable per each page in Aspen that displays a table. So, you can have one set of defaults for looking at students, another for looking at schedules, another for looking at documents, etc. The flip side of this is that you might need to set the default filter and field set combo for all of your most commonly visited pages in Aspen.