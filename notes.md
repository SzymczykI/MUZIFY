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