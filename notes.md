getters 
- computed properties for store
- accessible in all components
- will only update if the stste changes
- getter functions are required to return a value


VALIDATION
- vuelidate 
- vee validate

When are inputs validated? 
- after the change event.
- If the v-model directive is applied to an input, when the model is changed. 
- After the blur event.
- After form submission.

Stateless Authentication
- the server doesnt actively keep track of whos logged in
- a token is used to verify the user instead

Actions
- available to all components
- can be asynchronous
- can commit multiple mutations

Actions vs Components
- define logic in components if the changes affect the component or it's children
- Define logic in actions if the changes affect the store/state

Refrences
- An object that points to a location in app
- Allows you to read/write references
- Create new references 

Snapshots 
- An object that is copy of a location in your app
- Read-only
- Immutable

References and snapshots can read the the data in the app. Snapshots are read-only but are memory efficient.

Query parameters vs Path Parameters
- path parameters - should be used for returning a single resource or multiple resources.
- query parameters - should be used for sorting/filterinf through data

Custom Directives
- can be global or local
- lifecycle functions: 
* beforeMount - called when the directive is first bound to the element and before parent component is mounted.
* mounted - called when the directive is mounted to the document.
* beforeUpdate - called before the directive is updated.
* updated - called after the directive is updated.
* beforeUnmount - called before a directive is unmounted from the document.
* unmounted - called after a directive is unmounted from document. 

hook arguments
* el - the element the bindings sits on
* binding - an object which contains the arguments that are passed into the hooks (readonly)
* vnode - allows you to refer directly to the node in the virtual DOM if you need to (redonly)
* prevNode - previous vnode object before the directive was updated. (applied to beforeUpdate and updated hooks only)

i18n internalization
- process of translating app

PWA
Service workers 
- Js file that runs in the background
limitations: unable to access the DOM, limited browser support

Caching (Workbox - tool to implement)
- concept where copies of data and assets are stored for faster delivery
* caching strategies
- Cache, then Network   (Client <=> Cache <=> Network)
- Network, than Cache (Client <=> Network <=> Cache)

TESTING
- Vitest, official  testing tool for Vite
- Alternatives: Mocha, Jasmine, Jest

why use a testing framework? 
- generates a test report
- helps with organizing tests
- comes with functions for performing testing

!things to know
- does not run in the browser. Runs in node
- Comes with its own environment built on top of JSDOM
