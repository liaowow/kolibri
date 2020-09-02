#### 1. What's the difference between Git fetch and Git pull?
`git fetch` is the command that tells your local git to retrieve the latest meta-data info from the original (yet doesn’t do any file transferring. It’s more like just checking to see if there are any changes available).

`git pull` on the other hand does that AND brings (copy) those changes from the remote repository.

reference [here](https://www.freecodecamp.org/news/git-fetch-vs-pull/#:~:text=git%20fetch%20is%20the%20command,changes%20from%20the%20remote%20repository.)

#### 2. What does Git rebase do?
We use `git rebase` when we want to take all commits from our feature branch, and move them into the main branch.

Rebasing is often used as an alternative to merging. Rebasing a branch updates one branch with another by applying the commits of one branch on top of the commits of another branch.

More on [this Medium article](https://medium.com/osedea/git-rebase-powerful-command-507bbac4a234)

#### 3. What are CSS vendor prefixes?
"Vendor prefixes are one way browsers use to give CSS developers access to newer features not yet considered stable."

More on [this article](https://flaviocopes.com/css-vendor-prefixes/)


#### 4. When rendering HTML on the browser, what's the difference between rendoring a <div> tag and rendoring a <span> tag?
<div> tag is used a as block part of the webpage and <span> tag is used as a inline part of the webpage.

Span is used primarily to associate a **style** to a part of a text, while div is used to organize the **layout** of the page.

More comparisons on [GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-div-and-span-tag-in-html/)

#### 5. What is caching in terms of different stages?
Layers of caching: client-side, DNS, web, app, database
View chart on [AWS Overview](https://aws.amazon.com/caching/)

#### 6. What are generators (in some programming languages)?
A generator is an iterator in the style of iterating by need. We won’t calculate and store the values at once but generate them on the fly when we’re iterating.

More on [this Medium article (specific to Python)](https://medium.com/better-programming/what-are-generators-yields-and-streams-in-python-a94072b3eb93)

#### 7. In unit testing, what are some quantitative metrics for testing a codebase?
Code coverage: verify the extent to which the code has been executed.

More on [code coverage](https://www.browserstack.com/guide/code-coverage-vs-test-coverage)

Also, here are [25 metrics](https://softcrylic.com/blogs/top-25-metrics-measure-continuous-testing-process/) in a continuous testing process.

#### 8. Is JavaScript single-threaded or multi-threaded?
Single-threaded. More on [this Medium article](https://medium.com/@samimyaquby/how-can-javascript-be-asynchronous-and-single-threaded-at-the-same-time-c13c99bb4703).

#### 9. What is primary key and foreign key in SQL?
Primary key: unique ID/address of each row of the table
Foreign key: a set of columns in a table that refers to the primary key of another table

#### 10. What does an arrow function do in JS?
"No matter how or where being executed, `this` value inside of an arrow function always equals `this` value from the outer function. In other words, the arrow function resolves `this` lexically. In another words, the arrow function doesn’t define its own execution context."
Reference [here](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)

