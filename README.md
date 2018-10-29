# mailbox component

Application is available here: [mailbox-afontcu.now.sh](https://mailbox-afontcu.now.sh)

(deployed using [now](https://zeit.co/now)).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm test
```

## Considerations

Mailbox is using:

* [Vue](https://vuejs.org) as JS framework to create the component.
 
* [vue-cli 3](https://cli.vuejs.org/) to scaffold the application.
 
* [Vuex](https://vuex.vuejs.org) as State management library.

* [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) as linting and formatting tools.

* [Jest](https://jestjs.io) and [vue-test-utils](http://vue-test-utils.vuejs.org/) as unit test suite.

* [Shopify Polaris](https://polaris.shopify.com) as design inspiration 😜


## Improvements

The task README said the following:
_"If there are things you would add/modify/approach differently for a production-ready system, we ask that you simply note down these, and include the notes with your submission."_

So, some things I'd like to see improved in a more detailed version of the component:

1. **Testability**. I just created a basic suite to give me a little feedback
while developing, but I'd advocate for a more robust suite that checks prop variations and 
behavior. e2e would be great, too.
2. **Accessibility**. I did my best to keep the application accessible (you can, for
instance, navigate through the messages using the keyboard). However, there's always
room for improvement regarding this topic.
3. **Data Persistance**. Right now, reloading the application restores its state to default. There's no logic to keep tracking the state (read/unread) of our messages. This could be easily achieved using Session or Locale Storage (if no syncro with our backend was required).
4. **Abstraction of common patterns**. This component/application is fairly simple, so there was no need to abstract out patterns such as the "card-like" UI. However, in a real (a.k.a more complex) application, such elements should be isolated. In a large application, I'd avocate for a design system to provide consistency among screens and elements.
5. **CSS management**. Again, the simplicity of this application allowed me to "skip" CSS preprocessors. What is more, I didn't even need to use my own SCSS boilerplate ([NormandyCSS](https://github.com/calidae/normandy-css)). Several things could be improved in the current implementation: for instance, font sizing could use some love, and responsiveness wasn't even considered...
6. **Backend API**. Obvs, backend management would require way more effort than just importing a plain JSON (with the help of webpack, of course).

---

That's all, folks! 👋 😇