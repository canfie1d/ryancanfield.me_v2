/* jshint globalstrict: true */
'use strict';

var React     = require('react');
var FluxMixin = require('fluxxor').FluxMixin(React);
var classSet  = require('react/lib/cx');
var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;

module.exports = React.createClass({
    displayName : 'StyleGuideNavItem',

    mixins : [FluxMixin, IntlMixin],

    propTypes : {
        active      : React.PropTypes.bool,
        displayName : React.PropTypes.string,
        i18nPrefix  : React.PropTypes.string
    },

    getDefaultProps : function()
    {
        return {
            active      : false,
            displayName : '',
            i18nPrefix  : ''
        };
    },

    onClick : function()
    {
        if (this.props.displayName) {
            this.getFlux().actions.route.navigate(
                'style-guide-section',
                {section : this.props.displayName}
            );
        } else {
            this.getFlux().actions.route.navigate('style-guide');
        }
    },

    render : function()
    {
        var linkClasses, display;

        linkClasses = classSet({
            'sg-nav__menu-link'             : true,
            'sg-nav__menu-link--is-current' : this.props.active
        });

        if (this.props.children) {
            display = this.props.children;
        } else if(this.props.i18nPrefix !== '') {
            display = this.getIntlMessage(this.props.i18nPrefix + this.props.displayName);
        } else {
            display = this.props.displayName;
        }
        return (
            <li className='sg-nav__menu-item'>
                <a className={linkClasses} onClick={this.onClick}>
                    {display}
                </a>
            </li>
        );
    }

});
