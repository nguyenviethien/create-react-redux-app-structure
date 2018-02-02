'use strict';

import React, { Component } from 'react';
import Show_Page_Visibility_API from './../../components/dumb/Show_Page_Visibility_API';

export default class Page_Visibility_API extends Component {
    constructor() {
        super();
    }

    render() {
        let alertStore = this.props.alert;

        return (
            <div className="app-page-visibility-api">
                <h1>Page Visibility API</h1>

                <p>
                    <em>For more details about counter here read this
                        <a href="https://codeburst.io/clearintervals-when-user-has-a-nap-3bf8010c986b"
                           title="clearIntervals() when user has a nap" target="_blank"> article</a>
                    </em>
                </p>

                <p>Do you still perform unnecessary tasks when the webpage is not visible?</p>

                <Show_Page_Visibility_API alert={alertStore} />
            </div>
        )
    }
}
