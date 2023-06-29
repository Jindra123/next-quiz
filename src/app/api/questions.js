import axios from 'axios';

export default function tenQuestion() {
    axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
        .then((response) => {
            // handle success
            console.log(response.data.results)
            return response.data.results;
        })
        .catch((error) => {
            // handle error
            console.log(error);
            return null;
        })
}
