import React from 'react'
// import { Container } from 'semantic-ui-react'
import Header from '../../components/Header/Header'

export default function BasicLayout(props) {
    return (
        <>
            <div fluid className="min-h-screen bg-[url('/backg.jpg')] bg-cover">
                <Header />
                <div className="bg-slate-200  min-h-screen max-w-5xl mx-auto">
                    {props.children}
                </div>
            </div>

        </>
    )
}
