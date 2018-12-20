# thumbr

This is a web application build with **ReactJS** to grade celebrities. This serverless app uses **Firebase Firestore** to store all the data. For styling it is used **SASS** with **BEM** naming notation for CSS elements.

Different patterns were used in order to enhance code readability and performance. One of them is the use of **Higher Order Components** to implement the same Firebase instance for each of the components that required it.

Installation

```bash

git clone https://github.com/jgmurillo10/thumbr.git
cd thumbr
npm install
npm start .env

```

.env is a file containing Firebase credentials
