import React from 'react';

function Home() {
    return (
        <div style={styles.page}>
            Home
        </div>
    )
}

const styles = {
    page: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '4em'
    }
}

export default Home;
