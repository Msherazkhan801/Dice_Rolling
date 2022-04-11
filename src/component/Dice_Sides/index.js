import React from 'react'

import { Eye, Nothing } from "../DiceFaces/Dice_Layout";
export const array = [
    {
        rollValue: 1,
        result: <React.Fragment >
            <tr >
                <Nothing />
                <Nothing />
                <Nothing />
            </tr>
            <tr>
                <Nothing />
                <Eye />
                <Nothing />
            </tr>
            <tr>
                <Nothing />
                <Nothing />
                <Nothing />
            </tr>
        </React.Fragment>
    },
    {
        rollValue: 2,
        result: <React.Fragment>
            <tr>
                <Nothing />
                <Nothing />
                <Nothing />
            </tr>
            <tr>
                <Eye />
                <Nothing />
                <Eye />
            </tr>
            <tr>
                <Nothing />
                <Nothing />
                <Nothing />
            </tr>
        </React.Fragment>
    },
    {
        rollValue: 3,
        result: <React.Fragment>
            <tr>
                <Eye />
                <Nothing />
                <Nothing />
            </tr>
            <tr>
                <Nothing />
                <Eye />
                <Nothing />
            </tr>
            <tr>
                <Nothing />
                <Nothing />
                <Eye />
            </tr>
        </React.Fragment>
    },
    {
        rollValue: 4,
        result: <React.Fragment>
            <tr>
                <Eye />
                <Nothing />
                <Eye />
            </tr>
            <tr>
                <Nothing />
                <Nothing />
                <Nothing />
            </tr>
            <tr>
                <Eye />
                <Nothing />
                <Eye />
            </tr>
        </React.Fragment>
    },
    {
        rollValue: 5,
        result: <React.Fragment>
            <tr>
                <Eye />
                <Nothing />
                <Eye />
            </tr>
            <tr>
                <Nothing />
                <Eye />
                <Nothing />
            </tr>
            <tr>
                <Eye />
                <Nothing />
                <Eye />
            </tr>
        </React.Fragment>
    },
    {
        rollValue: 6,
        result: <React.Fragment>
            <tr>
                <Eye />
                <Nothing />
                <Eye />
            </tr>
            <tr>
                <Eye />
                <Nothing />
                <Eye />
            </tr>
            <tr>
                <Eye />
                <Nothing />
                <Eye />
            </tr>
        </React.Fragment>
    }
];
