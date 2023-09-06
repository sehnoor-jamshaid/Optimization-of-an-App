Synonyms of Lazy Loading:
1- Lazy loading
2- code splitting
3- chunking
4- Dynamic Code Splitting

When and why do we need lazy
When our application grows heavy and quite bulky having multiple pages then a concept arises which is lazy loading means by lazy loading we will not load the whole application when component renders but load only the pages which are needed.

What is Suspense
Suspense requires a fallback and our component is wrapped inside it which is concerned to lazy load. It means when user click on such page which intends to lazy load requires few ms or a little time to load to be present in dom so for that particular time we need to show something on screen which is interactive with respect to user experience so for that reason Suspense is needed.

Error: A component Suspended while loading a synchronous input….
This error comes when a concerned lazy loading component is not wrapped in Suspense because a little time is required to load that particular component and for that particular time the component gets suspended and the error occurs by wrapping it inside Suspense and providing fallback it will work as expected.

When and Why do we need to Suspense
1- Code Splitting:
We need suspense when we have to make a component load lazily and Suspense is needed to load UI .
2- Data Fetching:
Since data fetching is asynchronous suspense will show loading UI till the data is fetched and is in the dom.

Advantages and Disadvantages of Code Splitting:

Advantages:
1- Speed Optimization:
2- Dynamic Code Loading
3-  Faster Initial Page Load

Disadvantages:
1- Network Calls:
If the code is not big bulky and code splitting in those apps are not necessary and the app is divided in many chunks than if there is client side rendering then there won’t be network calls but in server rendering the network calls would gets increased resulting in overhead.
2- Debugging Complexity:
Since the code is not in dom and is loaded on demand so it becomes difficult to debug.

3- Build Tools Required:
Code splitting is dependent on build tools like webpack and configuration to some developers might be barrier.

