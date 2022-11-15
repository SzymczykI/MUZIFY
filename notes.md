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