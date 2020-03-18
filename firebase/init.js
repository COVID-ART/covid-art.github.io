// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiaFYnddcZCWNVH-EnT7SLD9xbHIjHs1M",
    authDomain: "covid-art.firebaseapp.com",
    databaseURL: "https://covid-art.firebaseio.com",
    projectId: "covid-art",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function write_url(url) {
    db.collection("images").doc("img" + Math.random()).set({
        url: url
    })
}

function get_imgs() {
    let all = db.collection("images").get().then(snapshot => {

        snapshot.forEach(doc => {

            console.log( doc.data().url );
            document.querySelector('.vAll').innerHTML +=
                '<img class="img" alt="Imgur-Upload" src=\"' + doc.data().url + '\"/>';

        });
    });
}

get_imgs();