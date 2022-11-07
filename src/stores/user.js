import { defineStore } from "pinia";
import { auth, usersCollection } from "@/plugins/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await setDoc(doc(usersCollection, userCred.user.uid), {
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
        type: values.type,
      });

      await updateProfile(userCred.user, {
        displayName: values.name,
      });

      this.userLoggedIn = true;
    },
    async authenticate(values) {
      await signInWithEmailAndPassword(auth, values.email, values.password);

      this.userLoggedIn = true;
    },
  },
});
