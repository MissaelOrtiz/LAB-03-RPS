## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML
1) HTML content showing rules
2) Throw radio
    -A bolder throw
        -Establishes user throw as bolder
    -A parchment throw
        -Establishes user throw as parchment
    -A shears throw
        -Establishes user throw as shears
3) A div element to show results
4) Submit button

## State
computerThrow: the throw chosen by computer
totalPlays: 0
totalWins: 0

## Events
-[Submit click] compare userThrow against computerThrow
    -bolder beats shear
        -returns outcome in div
    -shear beats parchment
        -returns outcome in div
    -parchment beats bolder
        -returns outcome in div
