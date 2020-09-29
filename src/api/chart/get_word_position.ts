import axios from "axios";

const getWordPosition = () =>
    axios
        .get(
            "https://thumbnail-creator-29498.firebaseio.com/chartWordPosition.json"
        )
        .then((res: any) => {
            return res.data;
        })
        .catch((e: any) => console.log(e));

export default getWordPosition;
