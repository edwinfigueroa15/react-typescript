import React from "react";
import './loading.css'

export const LoadingComponent: React.FC<{}> = () => {

    return (
        <div className="container_loader">
            <div className="loader"></div>
        </div>
    )
}