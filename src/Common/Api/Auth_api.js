import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase";


export const SignUpApi = (data) => {
    console.log("SignUpApi", data);


return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "Check Your Email." });
                        })
                        .catch((e) => {
                            reject({ payload: e });
                        })
                } 
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode.localeCompare("auth/email-already-in-use") == 0) {
                    reject({payload : "Email is Already Verified"});                
            } else {
                reject({payload : errorMessage});
            }

            console.log(error);
        });
    
})
}