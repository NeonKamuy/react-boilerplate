import axios from "axios";
import { __CONFIG__ } from "../../config";
import { IARequest } from "../interfaces";
import Requests from "../requests";

export default class ExampleController {
    public static getAll(args: IARequest<null>) {
        return Requests.wrapInPromise(
            axios.get(`${__CONFIG__.backendURL}/example/`),
            {}
        );
    }
}
