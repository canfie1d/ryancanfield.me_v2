/* jshint globalstrict: true */
'use strict';

var React  = require('react');
var Button = require('../../buttons/button');
var Icon   = require('../../icon/icon');

module.exports = React.createClass({

    displayName : 'Buttons',

    render : function()
    {
        return (
            <div className='pl-page'>
                <h1 className='pl-h1'>Buttons</h1>
                <div>
                    <Button>
                        <a>
                            {'Default Button <a> Element'}
                            <span> Span</span>
                        </a>
                    </Button>
                </div>
                <div>
                    <Button>
                        <button>
                            {'Default Button <button> Element'}
                        </button>
                    </Button>
                </div>
                <hr className='pl-hr' />
                <div className='row'>
                    <div className='medium-4 columns'>
                        <h2 className='pl-h2'>{'Button Sizes'}</h2>
                            <Button size='tiny'>
                                <a>
                                    {'Tiny Button'}
                                </a>
                            </Button>
                            <br />
                            <Button size='small'>
                                <a>
                                    {'Small Button'}
                                </a>
                            </Button>
                            <br />
                            <Button size='medium'>
                                <a>
                                    {'Medium Button'}
                                </a>
                            </Button>
                            <br />
                            <Button size='large'>
                                <a>
                                    {'Large Button'}
                                </a>
                            </Button>
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='pl-h2'>{'Split Buttons (Right)'}</h2>
                        <Button size='tiny' split='right'>
                            <a>
                                {'Split Button'}
                                <Icon className='button--split__icon' icon='caret' color='white' size='x-small' />
                            </a>
                        </Button>
                        <br />
                        <Button size='small' split='right'>
                            <a>
                                {'Split Button'}
                                <Icon className='button--split__icon' icon='caret' color='white' size='x-small' />
                            </a>
                        </Button>
                        <br />
                        <Button size='medium' split='right'>
                            <a>
                                {'Split Button'}
                                <Icon className='button--split__icon' icon='caret' color='white' size='x-small' />
                            </a>
                        </Button>
                        <br />
                        <Button size='large' split='right'>
                            <a>
                                {'Split Button'}
                                <Icon className='button--split__icon' icon='caret' color='white' size='x-small' />
                            </a>
                        </Button>
                        <br />
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='pl-h2'>{'Split Buttons (Left)'}</h2>
                        <Button size='tiny' split='left'>
                            <a>
                                {'Split Button'}
                                <Icon className='button--split__icon' icon='caret' color='white' size='x-small'  rotate={180} />
                            </a>
                        </Button>
                        <br />
                        <Button size='small' split='left'>
                            <a>
                                {'Split Button'}
                                <Icon className='button--split__icon' icon='caret' color='white' size='x-small'  rotate={180} />
                            </a>
                        </Button>
                        <br />
                        <Button size='medium' split='left'>
                            <a>
                                {'Split Button'}
                                <Icon className='button--split__icon' icon='caret' color='white' size='x-small'  rotate={180} />
                            </a>
                        </Button>
                        <br />
                        <Button size='large' split='left'>
                            <a>
                                {'Split Button'}
                                <Icon className='button--split__icon' icon='caret' color='white' size='x-small'  rotate={180} />
                            </a>
                        </Button>
                        <br />
                    </div>
                </div>

                <hr className='pl-hr' />
                <h2 className='pl-h2'>{'Button Themes'}</h2>
                <Button color='primary'>
                    <a>
                        {'Primary Color Button'}
                    </a>
                </Button>
                <Button color='secondary'>
                    <a>
                        {'Secondary Color Button'}
                    </a>
                </Button>
                <Button color='tertiary'>
                    <a>
                        {'Tertiary Color Button'}
                    </a>
                </Button>
                <Button color='inherit'>
                    <a>
                        {'Inherit Button'}
                    </a>
                </Button>
                <h2 className='pl-h2'>{'Status Buttons'}</h2>
                <Button status='warning'>
                    <a>
                        {'Warning Button'}
                    </a>
                </Button>
                <Button status='warning-alt'>
                    <a>
                        {'Warning Alternate Button'}
                    </a>
                </Button>
                <hr className='pl-hr' />
                <h2 className='pl-h2'>{'Button Display Types'}</h2>
                <Button block={true}>
                    <a>
                        {'Block Level Button'}
                    </a>
                </Button>
                <Button disabled={true}>
                    <a>
                        {'Disabled Button'}
                    </a>
                </Button>
            </div>
        );
    }

});
