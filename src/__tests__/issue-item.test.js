import React from 'react';
import IssueItem from '../issue-item';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const issue = {
    id: 42,
    title: "foo",
    html_url: "http://localhost:1234",
    body: "bar",
    user: {
        login: "tyler.durden",
        html_url: "https://github.com"
    }
}

test('Issue Item Button Text Changes When Clicked', () => {
    const component = shallow(<IssueItem issue={issue} key={issue.id} />);

    //Confirm initial state
    expect(component.find('button').text()).toEqual('Show details');

    component.find('button').simulate('click');
    expect(component.find('button').text()).toEqual('Close details');

    component.find('button').simulate('click');
    expect(component.find('button').text()).toEqual('Show details');
});

test('Issue Item Displays/Hides Issue Body When Clicked', () => {
    const component = shallow(<IssueItem issue={issue} key={issue.id} />);
    
    expect(!component.exists('div#issue-body-' + issue.id)).toBe(true);

    component.find('button').simulate('click');
    expect(component.exists('div#issue-body-' + issue.id)).toBe(true);

    component.find('button').simulate('click');
    expect(!component.exists('div#issue-body-' + issue.id)).toBe(true);
});