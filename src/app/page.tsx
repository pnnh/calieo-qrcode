import React from 'react'
import * as stylex from '@stylexjs/stylex';
import RootLayout from "@/app/layout";

const styles = stylex.create({
    root: {
        width: '100%',
        maxWidth: 800,
        minHeight: 40,
        fontWeight: 'bold',
    },
    child: {
        backgroundColor: 'black',
        marginBlock: '1rem',
    },
});

const colorStyles = stylex.create({
    red: {
        color: 'red',
        backgroundColor: 'green',
        borderColor: 'darkred',
    },
    green: {
        backgroundColor: 'lightgreen',
        borderColor: 'darkgreen',
    },
});

export default function AppIndex() {
    return <RootLayout>
        <div {...stylex.props(
            styles.root,
            colorStyles.red,
        )}>
            <div>Hello StyleX</div>
        </div>
    </RootLayout>
}
