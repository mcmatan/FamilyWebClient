import { SubmissionError } from 'redux-form'
import { firebaseAuth } from '../../core/firebase';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
    const email = values.username;
    const password = values.password;
    //
    // firebaseAuth.signInWithEmailAndPassword(email, password).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //
    //     if (error) {
    //         throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
    //     } else {
    //         window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    //     }
    //
    //     // if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
    //     //     throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
    //     // } else if (values.password !== 'redux-form') {
    //     //     throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
    //     // } elsespo
    //     //     window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    //     // }
    // });

    firebaseAuth.signInWithEmailAndPassword(email, password).then(function(user) {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }).catch(function(error) {
        throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' });
        //window.alert(`Error!`)
    });

    // return sleep(1000) // simulate server latency
    //     .then(() => {
    //         if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
    //             throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
    //         } else if (values.password !== 'redux-form') {
    //             throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
    //         } else {
    //             window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    //         }
    //     })
}

export default submit