import { useState } from 'react';
import { Link, useRouteError } from 'react-router-dom';

interface CustomError {
    status?: number;
    statusText?: string;
}

const ErrorPage = () => {

    const error = useRouteError() as CustomError | null;

    const myH1TagsStyle = {
        color: 'white',
        backgroundColor: 'DodgerBlue',
        padding: '10px',
        fontFamily: 'Arial',
    };

    const myLinkTagsStyle = {
        display: 'block',
        margin: '10px',
        padding: '10px',
        border: '2px solid black',
        borderRadius: '4px',
        color: '#333',
        textDecoration: 'none',
        transition: 'all 0.3s',
        backgroundColor: 'white',
    };

    const [hovered, setHovered] = useState(false);

    const handleMouseOver = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                textAlign: 'center',
            }}
        >
            <div>
                <h1>{error?.status || "404-customs"} - {error?.statusText || "Page Not Found-customs"}</h1>
                <p style={myH1TagsStyle}> Oops! The page you&apos;re looking for does not exist.</p>
                <Link
                    to="/"
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        ...myLinkTagsStyle,
                        ...(hovered && {
                            borderColor: '#691f74',
                            color: '#fff',
                            backgroundColor: '#691f74',
                        }),
                    }}
                >
                    Go back to the homepage
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;