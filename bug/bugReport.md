# "Rate" button disabled when selecting 10 stars in Top Box Office IMDB section

## Steps to Reproduce

1. Navigate to www.imdb.com
2. Click on left top corner burger menu button
3. Click on Top Box Office, under Movies section
4. Click on any tittle Rate button
5. On the rate modal, click on the last star (10 stars rating)
6. Observe the issue

---

## Actual result

Rating prompt "Rate" button is disabled when 10 stars are selected, preventing the user to give the maximum rating to a movie. For additional details, check screenshot attached and notes section.

---

## Expected Behavior

Rate button is enabled, and user can submit a 10 stars rating .

---

## Notes

- Selecting 1–9 stars enables the rate button, and rating can be submitted normally.
- 10 stars rating works in other sections, such as "Top 250 movies" section.
- xxx errors can be observed in browser console
- No errors can be observed in network tab, suggesting this might be a frontend issue
- Tested on the next browsers and devices:

| Device   | Browser                    |
| -------- | -------------------------- |
| Desktop  | Chrome version ...         |
| Desktop  | Firefox version...         |
| Iphone X | Safari version...          |
| ...      | macOS Ventura / Windows 11 |
| ...      |                            |

---

## Attachments

- Screenshot of 10 stars selected with disabled "Rate" button
- Screenshot (as well as copy pasted text) from browser console

---

## Severity

From QA perspective, **High**, as 10 rating is an usual option for fans of any movie / show, and will prevent them from rating their favourite products.

---

## Priority

To be determined by product team, but QA team recomendation would be **High**
