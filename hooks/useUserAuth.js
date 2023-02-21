import { useEffect } from "react";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";

export const useUserAuth = () => {
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            db.collection("users").doc(user.uid)
                .set(
                    {
                        email: user.email,
                        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
                        photoURL: user.photoURL
                    },
                    { merge: true }
                );
        }
    }, [user]);

    return { user, loading }
}