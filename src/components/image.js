import React from 'react';

export default class image extends React.Component{
    state = {
        image: [
            'https://picsum.photos/id/345/250/300',
            'https://picsum.photos/id/344/250/300',
            'https://picsum.photos/id/315/250/300',

        ]
    };

    render() {
        return <div>...image.....</div>;
    }
}