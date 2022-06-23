import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTItle = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>
                    {title} - red chilly
                </title>
            </Helmet>
        </div>
    );
};

export default PageTItle;