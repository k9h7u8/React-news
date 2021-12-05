// import React, { Component } from 'react'
import React from 'react'
import Loader from './Loader.gif'
// export default class spinner extends Component {
    export default function Spinner(){
    // render() {
        return (
            <div className="text-center">
                <img className="my-3" src={Loader} alt="loading" />
            </div>
        )
    // }
}
