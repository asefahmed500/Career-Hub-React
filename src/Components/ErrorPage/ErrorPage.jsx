import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>404 Not Found </h2>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;